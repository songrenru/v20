(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-380606f6","chunk-51841b86","chunk-a7c24b5a","chunk-2d0bacf3","chunk-2d0bacf3"],{"051c":function(e,a,t){"use strict";t("4a50")},3368:function(e,a,t){"use strict";t("34809")},34809:function(e,a,t){},3990:function(e,a,t){"use strict";var n={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess",ownerList:"/community/village_api.People.Owner/index",servicesImgPreview:"/community/village_api.WorkWeiXin/servicesImgPreview"};a["a"]=n},"4a50":function(e,a,t){},"5db9":function(e,a,t){"use strict";t.r(a);t("b0c0");var n=function(){var e=this,a=e._self._c;return a("div",{staticClass:"lane_management"},[a("div",{staticClass:"header_search"},[a("a-collapse",{attrs:{accordion:""}},[a("a-collapse-panel",{key:"1",attrs:{header:"操作说明"}},[e._v(" 每个通道二维码可自行打印出来，张贴在对应的通道处"),a("br"),e._v(" 入口二维码：用于无牌车扫码登记进入。"),a("br"),e._v(" 出口二维码：用户车辆到达出口扫码付费时，系统会自动快速读取当前车辆的车牌号，免输入，方便快捷。"),a("br")])],1)],1),a("div",{staticClass:"header_search",staticStyle:{"padding-top":"0"}},[1==e.role_addcarlane?a("a-button",{attrs:{type:"primary"},on:{click:e.addThis}},[e._v("添加车道")]):e._e()],1),a("div",{staticClass:"table_content"},[a("a-table",{attrs:{columns:e.columns,"row-key":function(e){return e.id},pagination:e.pageInfo,loading:e.tableLoadding,"data-source":e.laneList},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"passage_direction",fn:function(t,n){return a("a-tag",{staticStyle:{width:"50px",height:"25px","text-align":"center"},attrs:{color:0==n.passage_direction?"green":(n.passage_direction,"blue")}},[e._v(" "+e._s(0==n.passage_direction?"出口":1==n.passage_direction?"入口":"出入口")+" ")])}},{key:"status",fn:function(t,n){return[a("a-switch",{attrs:{"checked-children":"开启","un-checked-children":"关闭",checked:1==n.status||"1"==n.status},on:{change:function(a){return e.switchChange(a,n)}}})]}},{key:"mac_address",fn:function(t,n){return[a("a",{attrs:{href:n.mac_address_uri,target:"_blank"}},[e._v(e._s(n.mac_address))])]}},{key:"action",fn:function(t,n){return a("span",{},[n.is_button_show?a("a",{on:{click:function(a){return e.$refs.showScreenSetModel.add(n.id)}}},[e._v("设置显屏内容")]):e._e(),n.is_button_show?a("a-divider",{attrs:{type:"vertical"}}):e._e(),n.is_button_show?a("a",{on:{click:function(a){return e.manualLiftingrod(n)}}},[e._v("手动抬杆")]):e._e(),n.is_button_show?a("a-divider",{attrs:{type:"vertical"}}):e._e(),a("a",{on:{click:function(a){return e.lookErcode(n)}}},[e._v(e._s(1==n.passage_direction?"入口二维码":"出口二维码"))]),n.is_button_show?a("a-divider",{attrs:{type:"vertical"}}):e._e(),n.is_button_show?a("a",{on:{click:function(a){return e.$refs.addParkInfoModel.add(n.id,n.passage_direction)}}},[e._v(e._s(1==n.passage_direction?"添加入场纪录":"添加出场纪录"))]):e._e(),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(a){return e.editThis(n)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定要删除该项吗?","ok-text":"是","cancel-text":"否"},on:{confirm:function(a){return e.delConfirm(n)},cancel:e.delCancel}},[a("a",{staticStyle:{color:"red"}},[e._v("删除")])])],1)}},{key:"passage_name",fn:function(t,n){return a("span",{},[a("a-tooltip",{attrs:{placement:"top"}},[a("template",{slot:"title"},[a("span",[e._v(e._s(n.passage_name))])]),e._v(" "+e._s(n.passage_name.length>10?n.passage_name.substring(0,10)+"...":n.passage_name)+" ")],2)],1)}}])}),a("add-park-info",{ref:"addParkInfoModel"}),a("show-screen-set",{ref:"showScreenSetModel"}),a("lane-model",{attrs:{lane_id:e.lane_id,lane_type:e.lane_type,park_sys_type:e.park_sys_type,visible:e.laneVisible,modelTitle:e.modelTitle},on:{closeLane:e.closeLane}}),a("a-modal",{attrs:{title:e.codeTitle,width:500,visible:e.erCodeVisible,footer:null},on:{ok:e.handleCodeOk,cancel:e.handleCodeCancel}},[a("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center","align-items":"center"}},[a("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:e.ercodeUrl}})])]),a("a-modal",{attrs:{title:e.openTitle,width:500,visible:e.openGateVisible,maskClosable:!1},on:{ok:e.handleOpenGateOk,cancel:e.handleOpenGateCancel}},[a("a-form-model",{attrs:{"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("div",{staticClass:"add_black"},[a("a-form-model-item",{attrs:{label:"开闸车牌号",prop:"car_number"}},[a("a-input",{attrs:{placeholder:"请输入开闸车牌号"},model:{value:e.openGate.car_number,callback:function(a){e.$set(e.openGate,"car_number",a)},expression:"openGate.car_number"}})],1),e.park_open_show?a("a-form-model-item",{attrs:{label:"类型",prop:"open_type"}},[a("a-radio-group",{attrs:{name:"open_type"},on:{change:e.changeOpenType},model:{value:e.openGate.open_type,callback:function(a){e.$set(e.openGate,"open_type",a)},expression:"openGate.open_type"}},[a("a-radio",{attrs:{value:2}},[e._v("免费放行")]),a("a-radio",{attrs:{value:1}},[e._v("收取费用")])],1)],1):e._e(),e.pay_show?a("a-form-model-item",{attrs:{label:"停车时长",prop:"car_number"}},[a("a-input",{attrs:{placeholder:"请输入停车时长（单位：分钟）"},model:{value:e.openGate.park_time,callback:function(a){e.$set(e.openGate,"park_time",a)},expression:"openGate.park_time"}})],1):e._e(),e.pay_show?a("a-form-model-item",{attrs:{label:"停车费用",prop:"car_number"}},[a("a-input",{attrs:{placeholder:"请输入停车费用（单位：元）"},model:{value:e.openGate.price,callback:function(a){e.$set(e.openGate,"price",a)},expression:"openGate.price"}})],1):e._e(),e.pay_show?a("a-form-model-item",{attrs:{label:"线下支付方式",prop:"pay_type"}},[a("a-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",value:e.openGate.pay_type},on:{change:function(a){return e.handleSelectChange(a,"pay_type")}}},e._l(e.parkTypeList,(function(t,n){return a("a-select-option",{attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1)],1):e._e()],1)])],1)],1)])},i=[],l=t("f018"),s=t("1137"),o=t("e0ca"),r=t("a0e0"),c=(t("8bbf"),t("3990"),[{title:"车道名称",dataIndex:"passage_name",key:"passage_name",width:200,scopedSlots:{customRender:"passage_name"}},{title:"所属区域",dataIndex:"area_name",key:"area_name"},{title:"通道号",dataIndex:"channel_number",key:"channel_number"},{title:"设备编号",dataIndex:"device_number",key:"device_number"},{title:"设备MAC",dataIndex:"mac_address",key:"mac_address",scopedSlots:{customRender:"mac_address"}},{title:"车道类型",key:"passage_direction",scopedSlots:{customRender:"passage_direction"}},{title:"车道状态",dataIndex:"status_txt",key:"status_txt",scopedSlots:{customRender:"status"}},{title:"最新心跳时间",dataIndex:"last_heart_time",key:"last_heart_time"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}]),p={data:function(){var e=this;return{labelCol:{span:6},wrapperCol:{span:14},codeTitle:"",openTitle:"是否开闸",parklotName:"",columns:c,park_open_show:!1,pay_show:!1,openGateVisible:!1,laneVisible:!1,selectedRowKeys:[],modelTitle:"",erCodeVisible:!1,tableLoadding:!1,openGate:{id:"",passage_direction:"",car_number:"",open_type:2,price:"",park_time:"",pay_type:""},pageInfo:{current:1,pageSize:10,total:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(a,t){return e.onTableChange(a,t)},onChange:function(a,t){return e.onTableChange(a,t)}},laneList:[],parkTypeList:[],lane_type:"add",lane_id:"",park_sys_type:"",ercodeUrl:"",role_addcarlane:0,role_delcarlane:0,role_editcarlane:0,role_ewmcarlane:0,role_liftingrod:0,role_recordcar:0,role_screenset:0}},components:{laneModel:l["default"],addParkInfo:s["default"],showScreenSet:o["default"]},mounted:function(){this.getLaneList()},methods:{switchChange:function(e,a){var t=this,n=this,i=a.id,l=e?1:2;n.request("/community/village_api.Parking/editPassageStatus",{id:i,status:l}).then((function(e){t.getLaneList(),t.$message.success("修改成功！")})).catch((function(e){t.getLaneList()}))},manualLiftingrod:function(e){var a=this;a.openGate.id=e.id,console.log("record1111",e),1==e.passage_direction?a.park_open_show=!1:a.park_open_show=!0,a.pay_show=!1,a.openGate.passage_direction="",a.openGate.pay_type="",a.openGate.car_number="",a.openGate.open_type=2,a.openGate.price="",a.openGate.park_time="",a.openGateVisible=!0,a.parkTypeList=[]},handleOpenGateOk:function(){var e=this;e.request(r["a"].open_gate,e.openGate).then((function(a){"0"!=a?e.$message.success("抬杆成功！"):e.$message.error("抬杆失败！"),e.openGateVisible=!1,e.openGate.passage_direction="",e.openGate.car_number="",e.openGate.open_type=2,e.openGate.id=""}))},handleSelectChange:function(e,a){this.openGate[a]=e,this.$forceUpdate()},changeOpenType:function(e){var a=this;console.log("value11",e.target.value),this.openGate.pay_type="",this.parkTypeList=[],this.openGate.price="",this.openGate.park_time="",1==e.target.value?(this.pay_show=!0,this.request(r["a"].getOfflineList).then((function(e){console.log("pay_type11",e),a.parkTypeList=e}))):this.pay_show=!1},editThis:function(e){this.modelTitle="编辑车道",this.lane_type="edit",this.laneVisible=!0,this.lane_id=e.id+"",this.park_sys_type=e.park_sys_type},delConfirm:function(e){var a=this;a.request(r["a"].delPassage,{id:e.id}).then((function(e){a.$message.success("删除成功！"),a.getLaneList()}))},getLaneList:function(){var e=this,a=this;a.tableLoadding=!0,a.request(r["a"].getPassageList,a.pageInfo).then((function(t){a.laneList=t.list,a.pageInfo.total=t.count,a.park_sys_type=t.park_sys_type,a.tableLoadding=!1,void 0!=t.role_addcarlane?(e.role_addcarlane=t.role_addcarlane,e.role_delcarlane=t.role_delcarlane,e.role_editcarlane=t.role_editcarlane,e.role_ewmcarlane=t.role_ewmcarlane,e.role_liftingrod=t.role_liftingrod,e.role_recordcar=t.role_recordcar,e.role_screenset=t.role_screenset):(e.role_addcarlane=1,e.role_delcarlane=1,e.role_editcarlane=1,e.role_ewmcarlane=1,e.role_liftingrod=1,e.role_recordcar=1,e.role_screenset=1)})).catch((function(e){a.tableLoadding=!1}))},delCancel:function(){},closeLane:function(e){this.lane_id="",this.park_sys_type="",this.laneVisible=!1,e&&this.getLaneList()},addThis:function(){this.modelTitle="添加车道",this.lane_type="add",this.laneVisible=!0},lookErcode:function(e){var a=this;1==e.passage_direction?this.codeTitle="查看入口二维码":this.codeTitle="查看出口二维码",a.request(r["a"].getQrcodePassage,{passage_id:e.id}).then((function(e){a.ercodeUrl=e.qrcode,a.erCodeVisible=!0}))},handleCodeOk:function(){this.erCodeVisible=!1},handleCodeCancel:function(){this.ercodeUrl="",this.erCodeVisible=!1},handleOpenGateCancel:function(){this.openGate.id="",this.openGateVisible=!1},handleTableChange:function(e,a,t){this.pageInfo.current=e.current,this.pageInfo.page=e.current,this.getLaneList()},onTableChange:function(e,a){this.pageInfo.current=e,this.pageInfo.pageSize=a,this.getLaneList(),console.log("onTableChange==>",e,a)}}},d=p,u=(t("3368"),t("2877")),m=Object(u["a"])(d,n,i,!1,null,"2eaf42fd",null);a["default"]=m.exports},"68f9":function(e,a,t){},"85ce":function(e,a,t){"use strict";t("68f9")},e0ca:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e._self._c;return a("a-modal",{attrs:{title:e.title,width:750,visible:e.visible,maskClosable:!1,footer:null},on:{cancel:e.handleOpenGateCancel}},[a("div",{staticStyle:{"background-color":"white","padding-left":"10px"}},[a("div",{staticClass:"header_search"},[a("a-collapse",{attrs:{accordion:""}},[a("a-collapse-panel",{key:"1",attrs:{header:"操作说明"}},[e._v(" 默认显屏设置是在没有车辆通行时显屏显示的内容"),a("br"),e._v(" 横屏设备：只要设置第一行和第二行即可。"),a("br"),e._v(" 竖屏设备：只要设置第二行和第三行即可。"),a("br")])],1)],1),a("div",{staticStyle:{width:"682px"}},[a("span",{staticStyle:{"margin-right":"150px","margin-left":"111px"}},[a("label",{staticClass:"ant-card-span1_park"},[e._v("第一行:")]),a("a-input",{staticClass:"ant-card-input_park",model:{value:e.post.temp_line_1,callback:function(a){e.$set(e.post,"temp_line_1",a)},expression:"post.temp_line_1"}})],1),a("span",{staticClass:"ant-card-span_park"},[a("label",{staticClass:"ant-card-span1_park"},[e._v("第二行:")]),a("a-input",{staticClass:"ant-card-input_park",model:{value:e.post.temp_line_2,callback:function(a){e.$set(e.post,"temp_line_2",a)},expression:"post.temp_line_2"}})],1),a("span",{staticClass:"ant-card-span_park"},[a("label",{staticClass:"ant-card-span1_park"},[e._v("第三行:")]),a("a-input",{staticClass:"ant-card-input_park",model:{value:e.post.temp_line_3,callback:function(a){e.$set(e.post,"temp_line_3",a)},expression:"post.temp_line_3"}})],1),a("span",{staticClass:"ant-card-span_park"},[a("label",{staticClass:"ant-card-span1_park"},[e._v("第四行:")]),a("a-input",{staticClass:"ant-card-input_park",model:{value:e.post.temp_line_4,callback:function(a){e.$set(e.post,"temp_line_4",a)},expression:"post.temp_line_4"}})],1)]),a("div",{staticStyle:{"text-align":"center","margin-top":"15px"}},[a("a-button",{attrs:{type:"primary"},on:{click:function(a){return e.save()}}},[e._v("保存")])],1)])])},i=[],l=t("a0e0"),s={name:"showScreenSet",data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},mouth_list:[],temp_list:[],title:"绑定",key:1,active:1,passage_id:0,form:this.$form.createForm(this),visible:!1,loading:!1,post:{temp_line_1:"",temp_line_2:"",temp_line_3:"",temp_line_4:""}}},mounted:function(){},methods:{add:function(e){this.title="设置默认显屏内容",this.loading=!0,this.visible=!0,this.passage_id=e,console.log("dfdsfg",this.passage_id),this.getShowVoice()},save:function(){var e=this;this.request(l["a"].setScreenSet,{passage_id:this.passage_id,content:this.post}).then((function(a){console.log("res456",a),a>0?(e.$message.success("显屏内容配置成功"),e.visible=!1):e.$message.success("显屏内容配置失败")}))},getShowVoice:function(){var e=this;this.request(l["a"].getScreenSet,{passage_id:this.passage_id}).then((function(a){console.log("getScreenSet111",a),e.post=a}))},handleOpenGateCancel:function(){this.post={temp_line_1:"",temp_line_2:"",temp_line_3:"",temp_line_4:""},this.visible=!1}}},o=s,r=(t("051c"),t("2877")),c=Object(r["a"])(o,n,i,!1,null,"0fea8e09",null);a["default"]=c.exports},f018:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e._self._c;return a("div",{staticClass:"lane_model_container"},[a("a-drawer",{attrs:{title:e.modelTitle,width:1e3,visible:e.visible},on:{close:e.handleSubCancel}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.laneForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("div",{staticClass:"add_lane"},[a("a-form-model-item",{attrs:{label:"通道名称",prop:"passage_name"}},[a("a-input",{attrs:{placeholder:"请输入通道名称"},model:{value:e.laneForm.passage_name,callback:function(a){e.$set(e.laneForm,"passage_name",a)},expression:"laneForm.passage_name"}})],1),a("a-form-model-item",{attrs:{label:"归属区域",prop:"passage_area"}},[a("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.laneForm.passage_area},on:{change:e.handleSelectChange}},e._l(e.areaList,(function(t,n){return a("a-select-option",{attrs:{value:t.id}},[e._v(" "+e._s(t.garage_num)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"通道号",prop:"channel_number"}},[a("a-input",{attrs:{placeholder:"请上输入通道号"},model:{value:e.laneForm.channel_number,callback:function(a){e.$set(e.laneForm,"channel_number",a)},expression:"laneForm.channel_number"}})],1),"D3"==e.park_sys_type||"A11"==e.park_sys_type?a("a-form-model-item",{attrs:{label:"请填写设备编号",prop:"device_number"}},[a("a-input",{attrs:{placeholder:"请填写设备编号"},model:{value:e.laneForm.device_number,callback:function(a){e.$set(e.laneForm,"device_number",a)},expression:"laneForm.device_number"}})],1):e._e(),"A11"==e.park_sys_type||"A1"==e.park_sys_type?a("a-form-model-item",{attrs:{label:"设备MAC地址",prop:"mac_address"}},[a("a-input",{attrs:{placeholder:"请填写设备MAC地址(老的A1设备可能不支持)"},model:{value:e.laneForm.mac_address,callback:function(a){e.$set(e.laneForm,"mac_address",a)},expression:"laneForm.mac_address"}})],1):e._e(),"D7"==e.park_sys_type?a("a-form-model-item",{attrs:{label:"车道编号",prop:"d7_channelId"}},[a("a-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},model:{value:e.laneForm.d7_channelId,callback:function(a){e.$set(e.laneForm,"d7_channelId",a)},expression:"laneForm.d7_channelId"}},e._l(e.channelList,(function(t,n){return a("a-select-option",{attrs:{value:t.businessId}},[e._v(" "+e._s(t.channelName)+" ")])})),1)],1):e._e(),a("a-form-model-item",{attrs:{label:"通道类型",prop:"passage_direction"}},[a("a-radio-group",{attrs:{name:"radioGroup","default-value":1},model:{value:e.laneForm.passage_direction,callback:function(a){e.$set(e.laneForm,"passage_direction",a)},expression:"laneForm.passage_direction"}},[a("a-radio",{attrs:{value:1}},[e._v("入口")]),a("a-radio",{attrs:{value:0}},[e._v("出口")])],1)],1),"A11"==e.park_sys_type?a("a-form-model-item",{attrs:{label:"车道类型",prop:"passage_type"}},[a("a-radio-group",{attrs:{name:"radioGroup"},on:{change:e.handlePassageChange},model:{value:e.laneForm.passage_type,callback:function(a){e.$set(e.laneForm,"passage_type",a)},expression:"laneForm.passage_type"}},[a("a-radio",{attrs:{value:1}},[e._v("分开")]),a("a-radio",{attrs:{value:2}},[e._v("共用")])],1)],1):e._e(),"A11"==e.park_sys_type&&2==e.passage_relation_show?a("a-form-model-item",{attrs:{label:"关联车道",prop:"passage_relation"}},[a("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择"},model:{value:e.laneForm.passage_relation,callback:function(a){e.$set(e.laneForm,"passage_relation",a)},expression:"laneForm.passage_relation"}},e._l(e.passageTypeList,(function(t,n){return a("a-select-option",{attrs:{value:t.id}},[e._v(" "+e._s(t.passage_name)+" ")])})),1)],1):e._e(),"D7"==e.park_sys_type?a("a-form-model-item",{attrs:{label:"车道编号",prop:"d7_channelId"}},[a("a-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},model:{value:e.laneForm.d7_channelId,callback:function(a){e.$set(e.laneForm,"d7_channelId",a)},expression:"laneForm.d7_channelId"}},e._l(e.channelList,(function(t,n){return a("a-select-option",{attrs:{value:t.businessId}},[e._v(" "+e._s(t.channelName)+" ")])})),1)],1):e._e(),a("a-form-model-item",{attrs:{label:"通道坐标",prop:"long_lat"}},[a("a-input",{staticStyle:{width:"200px"},attrs:{disabled:!0},model:{value:e.laneForm.long_lat,callback:function(a){e.$set(e.laneForm,"long_lat",a)},expression:"laneForm.long_lat"}}),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(a){return e.openMap()}}},[e._v("点击获取经纬度")])],1),a("a-form-model-item",{attrs:{label:"标签",prop:"current"}},[a("a-transfer",{attrs:{locale:{itemUnit:"",itemsUnit:"",notFoundContent:"列表为空",searchPlaceholder:"请输入搜索内容"},titles:["未选","已选"],"show-search":"",rowKey:function(e){return e.key},"data-source":e.labelList,"list-style":{width:"210px",height:"270px"},render:e.renderItem,"show-select-all":!0,"target-keys":e.targetKeys},on:{change:e.handleTransferChange}})],1),a("a-form-model-item",{attrs:{label:"音量控制"}},e._l(e.deviceSetting.volume,(function(t,n){return a("div",{key:t.key,staticStyle:{display:"flex"}},[a("a-col",{attrs:{span:13}},[a("a-time-picker",{attrs:{allowClear:!1,value:e.moment(t.start,"HH:mm"),format:"HH:mm",disabled:t.disable_start},on:{change:function(a){return e.onVolumeChange("start",a,n)}}}),e._v(" ~ "),a("a-time-picker",{attrs:{allowClear:!1,value:e.moment(t.end,"HH:mm"),format:"HH:mm",disabled:t.disable_end},on:{change:function(a){return e.onVolumeChange("end",a,n)}}})],1),a("a-col",{attrs:{span:16}},[a("a-col",{attrs:{span:2}},[a("a-icon",{attrs:{type:"sound",theme:"twoTone"}})],1),a("a-col",{attrs:{span:15}},[a("a-slider",{attrs:{min:0,max:9},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1),a("a-col",{staticClass:"text-primary",staticStyle:{"margin-left":"12px"},attrs:{span:6}},[e._v(" 当前音量："+e._s(t.value)+" ")])],1)],1)})),0),a("a-form-model-item",{attrs:{label:"通道状态",prop:"status"}},[a("a-radio-group",{attrs:{name:"radioGroup","default-value":1},model:{value:e.laneForm.status,callback:function(a){e.$set(e.laneForm,"status",a)},expression:"laneForm.status"}},[a("a-radio",{attrs:{value:1}},[e._v("开启")]),a("a-radio",{attrs:{value:2}},[e._v("关闭")])],1)],1),"D3"==e.park_sys_type||"A11"==e.park_sys_type?a("a-form-model-item",{attrs:{label:"设备类型",prop:"device_type"}},[a("a-radio-group",{attrs:{name:"radioGroup","default-value":1},model:{value:e.laneForm.device_type,callback:function(a){e.$set(e.laneForm,"device_type",a)},expression:"laneForm.device_type"}},[a("a-radio",{attrs:{value:1}},[e._v("横屏")]),a("a-radio",{attrs:{value:2}},[e._v("竖屏")])],1)],1):e._e()],1),a("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[a("a-button",{style:{marginRight:"8px"},on:{click:e.handleSubCancel}},[e._v("取消")]),a("a-button",{attrs:{type:"primary"},on:{click:function(a){return e.handleSubmit()}}},[e._v("提交")])],1)])],1),e.mapVisible?a("a-modal",{attrs:{title:"百度地图拾取经纬度",visible:e.mapVisible,width:800},on:{ok:e.handleMapOk,cancel:e.handleMapCancel}},[a("a-input",{staticClass:"input_style",staticStyle:{width:"200px"},attrs:{type:"text",id:"suggestId",name:"address_detail",placeholder:"请输入城市名/地区名"},model:{value:e.address_detail,callback:function(a){e.address_detail=a},expression:"address_detail"}}),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.searchMap}},[e._v("搜索")]),a("div",{staticStyle:{color:"red","margin-top":"5px"}},[e._v("如果直接搜索名称无法搜索，建议写全称。比如 搜索 （桂花园 ）直接搜索不到结果，我们可以加上 省市区+名称进行搜索（山东 桂花园）再搜索。")]),a("div",{staticStyle:{width:"100%",height:"500px","margin-top":"10px"},attrs:{id:"allmap"}})],1):e._e()],1)},i=[],l=(t("5cad"),t("7b2d")),s=(t("438c"),t("fbdf")),o=(t("ac1f"),t("1276"),t("d81d"),t("841c"),t("c1df")),r=t.n(o),c=t("8bbf"),p=t.n(c),d=t("a0e0");p.a.use(s["a"]);var u={props:{visible:{type:Boolean,default:!1},modelTitle:{type:String,default:""},lane_type:{type:String,default:""},lane_id:{type:String,default:""}},watch:{visible:{immediate:!0,handler:function(e){e&&this.getParkDeviceSetting(),"edit"==this.lane_type&&this.getLaneInfo()}}},data:function(){return{labelCol:{span:4},wrapperCol:{span:14},laneForm:{long_lat:"",passage_area:void 0,status:1,device_type:1,passage_direction:1,passage_type:1,mac_address:""},rules:{passage_name:[{required:!0,message:"请输入通道名称",trigger:"blur"}],channel_number:[{required:!0,message:"请输入通道号",trigger:"blur"}]},dateFormat:"YYYY-MM-DD",selectedKeys:[],targetKeys:[],labelList:[],mapVisible:!1,address_detail:"北京",userlocation:{lng:"",lat:""},userLng:"",userLat:"",areaList:[],passageTypeList:[],channelList:[],park_sys_type:"",deviceSetting:[],inputValue1:8,passage_relation_show:1}},mounted:function(){this.getLabelList(),this.getAreaList(),this.getChannelList()},components:{"a-transfer":l["a"]},methods:{clearForm:function(){this.laneForm={long_lat:"",passage_area:void 0,status:1,passage_direction:1,passage_type:1,passage_relation_show:1,mac_address:""},this.targetKeys=[],this.passageTypeList=[],this.passage_relation_show=1},getAreaList:function(){var e=this;e.request(d["a"].getAreaList,{}).then((function(a){console.log("areaList",a),e.areaList=a.list}))},getChannelList:function(){var e=this;e.request(d["a"].getChannelList,{}).then((function(a){console.log("channelList",a),e.channelList=a.list,e.park_sys_type=a.park_sys_type}))},moment:r.a,handleSubmit:function(e){var a=this;this.$refs.ruleForm.validate((function(e){if(!e)return console.log("error submit!!"),a.confirmLoading=!1,!1;var t=a,n=d["a"].addPassage;"edit"==a.lane_type&&(n=d["a"].editPassage),t.laneForm.deviceSetting=t.deviceSetting,console.log("that.laneForm",t.laneForm),t.request(n,t.laneForm).then((function(e){"edit"==a.lane_type?t.$message.success("编辑成功！"):t.$message.success("添加成功！"),a.$emit("closeLane",!0),a.clearForm(),a.confirmLoading=!1})).catch((function(e){a.confirmLoading=!1}))}))},handleSubCancel:function(e){this.$refs.ruleForm.resetFields(),this.$emit("closeLane",!1),this.clearForm()},getLaneInfo:function(){var e=this;e.lane_id&&e.request(d["a"].getPassageInfo,{id:this.lane_id}).then((function(a){e.laneForm=a,e.handlePassageChange(),e.laneForm.passage_area=1*a.passage_area||"",e.laneForm.long_lat=a.lat+","+a.long,e.targetKeys=a.passage_label.split(",")}))},getParkDeviceSetting:function(){var e=this,a=0;e.lane_id&&(a=e.lane_id),e.request(d["a"].getParkDeviceSetting,{id:a}).then((function(a){e.deviceSetting=a}))},onVolumeChange:function(e,a,t){var n=r()(a).format("HH:mm");console.log("value",e,t,n),this.deviceSetting.volume[t][e]=n,"end"==e&&(this.deviceSetting.volume[t+1]["start"]=n)},getLabelList:function(){var e=this;e.request(d["a"].getPassageLabelList,{}).then((function(a){e.labelList=[],a.map((function(a){e.labelList.push({key:a.id+"",title:a.label_name})}))}))},handleSelectChange:function(e){var a=this;this.laneForm.passage_area=1*e,this.areaList.map((function(t){t.id==e&&(a.laneForm.area_type=t.area_type)})),this.$forceUpdate(),console.log("selected ".concat(e))},handlePassageChange:function(){if(this.passage_relation_show=this.laneForm.passage_type,this.$forceUpdate(),2==this.laneForm.passage_type){var e=this;e.request(d["a"].getPassageTypeList,e.laneForm).then((function(a){console.log("gerg",a),e.passageTypeList=a}))}console.log("shdfkasd",this.laneForm.passage_type)},filterOption:function(e,a){return a.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},onDateChange:function(e,a){console.log(e,a)},renderItem:function(e){var a=this.$createElement,t=a("span",{class:"custom-item"},[e.title]);return{label:t,value:e.title}},handleTransferChange:function(e,a,t){var n=this;this.targetKeys=e;var i="";this.targetKeys.map((function(e,a){a<n.targetKeys.length-1?i+=e+",":i+=e})),this.laneForm.passage_label=i},handleMapOk:function(){this.laneForm.long_lat=this.userLat+","+this.userLng,this.mapVisible=!1},handleMapCancel:function(){this.mapVisible=!1},openMap:function(){this.mapVisible=!0,this.initMap()},searchMap:function(){this.address_detail&&this.initMap()},initMap:function(){this.$nextTick((function(){var e=this,a=new BMap.Map("allmap");a.centerAndZoom(e.address_detail,15),a.enableScrollWheelZoom();var t,n=new BMap.Autocomplete({input:"suggestId",location:a});function i(){function n(){e.userlocation=i.getResults().getPoi(0).point,a.centerAndZoom(e.userlocation,18),a.addOverlay(new BMap.Marker(e.userlocation)),e.userLng=e.userlocation.lng,e.userLat=e.userlocation.lat}a.clearOverlays();var i=new BMap.LocalSearch(a,{onSearchComplete:n});i.search(t),a.addEventListener("click",(function(){}))}n.addEventListener("onconfirm",(function(a){var n=a.item.value;t=n.province+n.city+n.district+n.street+n.business,e.address_detail=t,i()})),a.addEventListener("click",(function(t){a.clearOverlays(),a.addOverlay(new BMap.Marker(t.point));var n={width:180,height:60},i=new BMap.InfoWindow("所选位置",n);a.openInfoWindow(i,t.point),e.userLng=t.point.lng,e.userLat=t.point.lat}))}))}}},m=u,_=(t("85ce"),t("2877")),g=Object(_["a"])(m,n,i,!1,null,"ab422172",null);a["default"]=g.exports}}]);