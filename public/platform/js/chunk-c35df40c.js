(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c35df40c","chunk-2d0bacf3"],{"35b6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("a-form",{staticClass:"ant-advanced-search-form"},[a("a-form-item",{attrs:{label:"Select","has-feedback":""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["select",{rules:[{required:!0,message:"Please select your country!"}]}],expression:"[\n          'select',\n          { rules: [{ required: true, message: 'Please select your country!' }] },\n        ]"}],attrs:{placeholder:"Please select a country"}},[a("a-select-option",{attrs:{value:"china"}},[t._v(" China ")]),a("a-select-option",{attrs:{value:"usa"}},[t._v(" U.S.A ")])],1)],1),a("a-row",[a("a-col",{style:{textAlign:"right"},attrs:{span:24}},[a("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v(" 查询 ")]),a("a-button",{style:{marginLeft:"8px"}},[t._v(" 重置 ")])],1)],1)],1)],1),a("div",{staticStyle:{}},[a("a-button",{attrs:{type:"primary",disabled:!t.hasSelected,loading:t.loading},on:{click:t.start}},[t._v(" 删除选中 ")]),a("span",{staticStyle:{"margin-left":"8px"}},[t.hasSelected?[t._v(" "+t._s("Selected "+t.selectedRowKeys.length+" items")+" ")]:t._e()],2)],1),a("a-table",{attrs:{"row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange},columns:t.columns,"row-key":function(t){return t.id},"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"status",fn:function(e){return[a("span",{class:e?"status-color-ok":"status-color-fail"},[t._v(" "+t._s(e?"开启":"关闭")+" ")])]}},{key:"action",fn:function(e,n){return a("span",{},[a("a",{on:{click:function(e){return t.RoomInfo(n)}}},[t._v("查看/编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",[a("a",{staticStyle:{color:"red"}},[t._v("删除")])])],1)}}])}),a("a-drawer",{attrs:{title:t.roomDrawerTitle,placement:"right",width:"1400",closable:!1,visible:t.roomvisible,"get-container":!1,"wrap-style":{position:"absolute"}},on:{close:t.onRoomClose}},[a("a-tabs",{attrs:{"default-active-key":"2"}},[a("a-tab-pane",{key:"1"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"idcard"}}),t._v(" 人员资料 ")],1),[a("a-tooltip",[a("a-button",{attrs:{type:"primary"}},[t._v(" 添加人员 ")]),a("a-divider",{attrs:{type:"vertical"}}),t._v(" 类型颜色： "),a("a-badge",{attrs:{color:"green",text:"业主"}}),t._v(" "),a("a-divider",{attrs:{type:"vertical"}}),t._v(" "),a("a-badge",{attrs:{color:"lime",text:"家属"}}),a("a-divider",{attrs:{type:"vertical"}}),a("a-badge",{attrs:{color:"green",text:"业主"}}),t._v(" "),a("a-divider",{attrs:{type:"vertical"}}),t._v(" "),a("a-badge",{attrs:{color:"lime",text:"家属"}}),a("a-divider",{attrs:{type:"vertical"}}),a("a-badge",{attrs:{color:"orange",text:"租客"}}),t._v(" "),a("a-divider",{attrs:{type:"vertical"}}),t._v(" "),a("a-badge",{attrs:{color:"volcano",text:"工作人员"}}),a("a-divider",{attrs:{type:"vertical"}}),a("a-badge",{attrs:{color:"red",text:"访客"}}),t._v(" "),a("a-divider",{attrs:{type:"vertical"}}),t._v(" "),a("a-badge",{attrs:{color:"gold",text:"出入证"}})],1),a("a-table",{attrs:{columns:t.peopleColumns,"data-source":t.peopleData},scopedSlots:t._u([{key:"name",fn:function(e){return a("a",{},[t._v(t._s(e))])}},{key:"type",fn:function(e){return a("span",{},[0==e?a("a-tag",{attrs:{color:"green"}},[t._v(" 业主 ")]):t._e(),1==e?a("a-tag",{attrs:{color:"lime"}},[t._v(" 家属 ")]):t._e(),2==e?a("a-tag",{attrs:{color:"orange"}},[t._v(" 租客 ")]):t._e(),3==e?a("a-tag",{attrs:{color:"green"}},[t._v(" 业主(new) ")]):t._e(),4==e?a("a-tag",{attrs:{color:"volcano"}},[t._v(" 工作人员 ")]):t._e(),5==e?a("a-tag",{attrs:{color:"red"}},[t._v(" 访客 ")]):t._e(),6==e?a("a-tag",{attrs:{color:"gold"}},[t._v(" 出入证 ")]):t._e()],1)}},{key:"relatives_type",fn:function(e){return a("span",{},[1==e?a("a-tag",[t._v(" 配偶 ")]):t._e(),2==e?a("a-tag",[t._v(" 父母 ")]):t._e(),3==e?a("a-tag",[t._v(" 子女 ")]):t._e(),4==e?a("a-tag",[t._v(" 亲朋好友 ")]):t._e(),5==e?a("a-tag",[t._v(" 公司负责人 ")]):t._e(),6==e?a("a-tag",[t._v(" 公司人事 ")]):t._e(),7==e?a("a-tag",[t._v(" 公司财务 ")]):t._e()],1)}},{key:"action",fn:function(e,n){return a("span",{},[a("a",[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",[t._v("删除")])],1)}}])},[a("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[a("a-icon",{attrs:{type:"user"}}),t._v(" 姓名")],1)])]],2),a("a-tab-pane",{key:"2"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"info-circle"}}),t._v(" 房间资料 ")],1),t._v(" 可以查看、编辑房间信息 ")]),a("a-tab-pane",{key:"3"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"calculator"}}),t._v(" 收费标准 ")],1),[a("a-tooltip",[a("a-button",{attrs:{type:"primary"}},[t._v(" 绑定收费标准 ")]),a("a-divider",{attrs:{type:"vertical"}}),a("p",[t._v(" 当前房间已绑定的收费标准 ")])],1),a("a-table",{attrs:{columns:t.chargeColumns,"data-source":t.chargeData},scopedSlots:t._u([{key:"name",fn:function(e){return a("a",{},[t._v(t._s(e))])}},{key:"action",fn:function(e,n){return a("span",{},[a("a",[t._v("解绑")])])}}])},[a("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[a("a-icon",{attrs:{type:"user"}}),t._v(" 姓名")],1)])]],2),a("a-tab-pane",{key:"4"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"car"}}),t._v(" 车位/车辆 ")],1),[a("a-tooltip",[a("a-button",{attrs:{type:"primary"}},[t._v(" 绑定车位 ")]),a("a-divider",{attrs:{type:"vertical"}}),a("p",[t._v(" 车位信息 ")])],1),a("a-table",{attrs:{columns:t.carportColumns,"data-source":t.carportData},scopedSlots:t._u([{key:"action",fn:function(e,n){return a("span",{},[a("a",[t._v("解绑")])])}}])}),a("a-tooltip",[a("a-button",{attrs:{type:"primary"}},[t._v(" 绑定车辆 ")]),a("a-divider",{attrs:{type:"vertical"}}),a("p",[t._v(" 车辆信息 ")])],1),a("a-table",{attrs:{columns:t.carColumns,"data-source":t.carData},scopedSlots:t._u([{key:"action",fn:function(e,n){return a("span",{},[a("a",[t._v("解绑")])])}}])})]],2),a("a-tab-pane",{key:"5"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"dollar"}}),t._v(" 房产账单 ")],1),t._v(" 显示所有该房间下的账单（已交账单、未交账单、等缴账单)，点击待缴账单可以调到收银台直接显示 ")]),a("a-tab-pane",{key:"6"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"snippets"}}),t._v(" 关联工单 ")],1),[a("a-tooltip",[a("a-button",{attrs:{type:"primary"}},[t._v(" 提交工单 ")]),a("a-divider",{attrs:{type:"vertical"}}),a("p",[t._v(" 当前房间已所有上报的工单 ")])],1),a("a-table",{attrs:{columns:t.workOrderColumns,"data-source":t.workOrderData},scopedSlots:t._u([{key:"action",fn:function(e,n){return a("span",{},[a("a",[t._v("详情")])])}}])})]],2),t._v(" "),a("a-tab-pane",{key:"7"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"credit-card"}}),t._v(" 关联卡号 ")],1),t._v(" 这一项做成根据实际情况来控制显示与否 ")])],1)],1)],1)},i=[],o=(a("8bbf"),a("3990"),[{title:"房间编号",dataIndex:"id",sorter:!0},{title:"物业编号",dataIndex:"single_name"},{title:"楼号",dataIndex:"upper_layer_num"},{title:"单元名称",dataIndex:"measure_area"},{title:"楼层号",dataIndex:"floor_num"},{title:"房间号",dataIndex:"contract_time_start"},{title:"物业服务时间",dataIndex:"contract_time_end"},{title:"排序",dataIndex:"sort",sorter:!0},{title:"房间状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}]),r=[{dataIndex:"name",key:"name",slots:{title:"customTitle"},scopedSlots:{customRender:"name"}},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"添加时间",dataIndex:"add_time",key:"add_time"},{title:"类型",key:"type",dataIndex:"type",scopedSlots:{customRender:"type"}},{title:"与业主关系",key:"relatives_type",dataIndex:"relatives_type",scopedSlots:{customRender:"relatives_type"}},{title:"生日",key:"birth",dataIndex:"birth"},{title:"通过时间",key:"pass_time",dataIndex:"pass_time"},{title:"身份证卡号",key:"id_card",dataIndex:"id_card"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],l=[{title:"所属收费科目",dataIndex:"charge_number_name",key:"charge_number_name"},{title:"收费项目名称",dataIndex:"project_name",key:"project_name"},{title:"收费标准名称",dataIndex:"charge_name",key:"charge_name"},{title:"收费标准生效时间",dataIndex:"charge_valid_time",key:"charge_valid_time"},{title:"计费模式",dataIndex:"fees_type",key:"fees_type"},{title:"账单生成周期设置",dataIndex:"bill_create_set",key:"bill_create_set"},{title:"账单欠费模式",dataIndex:"bill_arrears_set",key:"bill_arrears_set"},{title:"生成账单模式",dataIndex:"bill_type",key:"bill_type"},{title:"是否支持预缴",dataIndex:"is_prepaid",key:"is_prepaid"},{title:"未入住房屋折扣",dataIndex:"not_house_rate",key:"not_house_rate"},{title:"操作",dataIndex:"operation",key:"operation",width:"120px",scopedSlots:{customRender:"action"}}],s=[{title:"车库",dataIndex:"garage_num",key:"garage_num"},{title:"车位编号",dataIndex:"position_num",key:"position_num"},{title:"车位面积",dataIndex:"position_area",key:"position_area"},{title:"车位类型",dataIndex:"children_type_txt",key:"children_type_txt"},{title:"所属母车位",dataIndex:"parent_position_num",key:"parent_position_num"},{title:"备注",dataIndex:"position_note",key:"position_note"},{title:"操作",dataIndex:"operation",key:"operation",width:"120px",scopedSlots:{customRender:"action"}}],d=[{title:"车牌号",dataIndex:"car_number",key:"car_number"},{title:"车位号",dataIndex:"position_num",key:"position_num"},{title:"停车卡号",dataIndex:"car_stop_num",key:"car_stop_num"},{title:"车主姓名",dataIndex:"car_user_name",key:"car_user_name"},{title:"车主手机号",dataIndex:"car_user_phone",key:"car_user_phone"},{title:"与车主关系",dataIndex:"relationship",key:"relationship"},{title:"停车到期时间",dataIndex:"end_time",key:"end_time"},{title:"审核状态",dataIndex:"examine_status",key:"examine_status"},{title:"审核说明",dataIndex:"examine_response",key:"examine_response"},{title:"操作",dataIndex:"operation",key:"operation",width:"120px",scopedSlots:{customRender:"action"}}],_=[{title:"上报分类",dataIndex:"cate_name",key:"cate_name"},{title:"工单类目",dataIndex:"subject_name",key:"subject_name"},{title:"工单内容",dataIndex:"order_content",key:"order_content"},{title:"上报人员",dataIndex:"name",key:"name"},{title:"手机号码",dataIndex:"phone",key:"phone"},{title:"上报时间",dataIndex:"add_time_txt",key:"add_time_txt"},{title:"处理状态",dataIndex:"status_txt",key:"status_txt"},{title:"操作",dataIndex:"operation",key:"operation",width:"120px",scopedSlots:{customRender:"action"}}],c={data:function(){return{data:[{id:1,single_name:"楼栋名称",floor_num:11,status:1,lower_layer_num:11,upper_layer_num:12,measure_area:123,sort:1,contract_time_start:1111,contract_time_end:2222},{id:2,single_name:"路东",floor_num:121,status:0,lower_layer_num:111,upper_layer_num:121,measure_area:1223,sort:2,contract_time_start:1111,contract_time_end:2222}],pagination:{},loading:!1,columns:o,peopleColumns:r,chargeColumns:l,carportColumns:s,workOrderColumns:_,carColumns:d,selectedRowKeys:[],roomvisible:!1,roomDrawerTitle:"",start:"",peopleData:[{key:"1",name:"John Brown",phone:1835539383,add_time:"2019-09-12",type:0,pass_time:"2022-10-10",birth:"1989-10-09",id_card:"250899898989898989",relatives_type:1},{key:"2",name:"Jim Green",phone:1835539382,add_time:"2019-03-12",type:1,pass_time:"2022-10-10",birth:"1989-10-09",id_card:"250899898989898989",relatives_type:2},{key:"3",name:"Joe Black",phone:1835539386,add_time:"2019-01-12",type:2,pass_time:"2022-10-10",birth:"1989-10-09",id_card:"250899898989898989",relatives_type:3},{key:"4",name:"Joe更新房主",phone:1835549386,add_time:"2019-01-12",type:3,pass_time:"2022-10-10",birth:"1989-10-09",id_card:"250899898989898989",relatives_type:4},{key:"5",name:"李四",phone:1835540386,add_time:"2019-01-12",type:4,pass_time:"2022-10-10",birth:"1989-10-09",id_card:"250899898989898989",relatives_type:5},{key:"6",name:"张三",phone:1839540386,add_time:"2019-01-12",type:5,pass_time:"2022-10-10",birth:"1989-10-09",id_card:"250899898989898989",relatives_type:6},{key:"7",name:"张三三",phone:1839541386,add_time:"2019-01-12",type:6,pass_time:"2022-10-10",birth:"1989-10-09",id_card:"250899898989898989",relatives_type:7}],chargeData:[{charge_name:"水电费",charge_valid_time:"2022-01-02",project_name:"高层水电费",charge_number_name:"水电燃",fees_type:"1",bill_create_set:"按月生成",bill_arrears_set:"后生成",is_prepaid:"不支持",not_house_rate:"100%"},{charge_name:"停车费",charge_valid_time:"2022-01-02",project_name:"月租车停车费",charge_number_name:"停车费",fees_type:"1",bill_create_set:"按年生成",bill_arrears_set:"后生成",is_prepaid:"支持",not_house_rate:"100%"}],carportData:[{garage_num:"东边车库",position_num:"0323",position_area:"15",children_type_txt:"母车位",parent_position_num:"",position_note:"个人车位"},{garage_num:"西边车库",position_num:"0323",position_area:"15",children_type_txt:"母车位",parent_position_num:"",position_note:"个人车位"}],carData:[{car_number:"京A123456",position_num:"0323",car_stop_num:"15",car_user_name:"李三",car_user_phone:"18355112040",relationship:"车主",end_time:"2022-12-21",examine_status:"通过",examine_response:"可能这是很长需要截取"},{car_number:"皖AP89278",position_num:"0323",car_stop_num:"125",car_user_name:"王五",car_user_phone:"18355112041",relationship:"配偶",end_time:"2024-12-21",examine_status:"通过",examine_response:"可能这是很长需要截取"}],workOrderData:[{cate_name:"家电维修",subject_name:"电炮维修",order_content:"电灯泡坏了，需要更换",name:"李三",phone:"19877676543",add_time_txt:"2022-09-10",status_txt:"已完毕"},{cate_name:"家电维修",subject_name:"电炮维修",order_content:"电灯泡坏了，需要更换",name:"张三",phone:"19877676523",add_time_txt:"2022-09-11",status_txt:"已完毕"}]}},mounted:function(){this.fetch()},methods:{handleTableChange:function(t,e,a){console.log(t)},fetch:function(){this.loading=!1},onSelectChange:function(t){console.log("selectedRowKeys changed: ",t),this.selectedRowKeys=t},RoomInfo:function(t){console.log("item",t),this.roomvisible=!0,this.roomDrawerTitle="1 号房间信息"},onRoomClose:function(){this.roomvisible=!1}},computed:{hasSelected:function(){return this.selectedRowKeys.length>0}}},p=c,u=(a("97c9"),a("2877")),m=Object(u["a"])(p,n,i,!1,null,null,null);e["default"]=m.exports},3990:function(t,e,a){"use strict";var n={villageInfo:"/community/village_api.VillageConfig/getVillageInfo",baseConfig:"/community/village_api.VillageConfig/baseConfig",buildingIndex:"/community/village_api.Building/index",roomIndex:"/community/village_api.Room/index",ownerIndex:"/community/village_api.Owner/index",ownerReview:"/community/village_api.Owner/review",ownerUnbid:"/community/village_api.Owner/unbind",familyIndex:"/community/village_api.FamilyMember/index",enantIndex:"/community/village_api.Enant/index",buildingList:"/community/village_api.Building/index",deleteBuilding:"/community/village_api.Building/deleteBuilding",buildingInfo:"/community/village_api.Building/buildingInfo",updateBuildingStatus:"/community/village_api.Building/updateBuildingStatus",saveBuildingButler:"/community/village_api.Building/saveBuildingButler",getBuildingButler:"community/village_api.Building/getBuildingButler",updateBuildingInfoByID:"community/village_api.Building/updateBuildingInfoByID",buildingUnitFloor:"community/village_api.Building/unitFloor",buildingFloorLayerRooms:"community/village_api.Building/floorLayerRooms",unitRentalList:"/community/village_api.UnitRental/index",deleteUnitRental:"/community/village_api.UnitRental/deleteUnitRental",unitRentalInfo:"/community/village_api.UnitRental/unitRentalInfo",updateUnitRentalStatus:"/community/village_api.UnitRental/updateUnitRentalStatus",saveUnitRentalButler:"/community/village_api.UnitRental/saveUnitRentalButler",getUnitRentalButler:"community/village_api.UnitRental/getUnitRentalButler",updateUnitRentalInfoByID:"community/village_api.UnitRental/updateUnitRentalInfoByID",unitRentalFloorList:"community/village_api.UnitRental/unitRentalFloorList",updateUnitRentalFloorStatus:"community/village_api.UnitRental/updateUnitRentalFloorStatus",deleteUnitRentalFloor:"community/village_api.UnitRental/deleteUnitRentalFloor",unitRentalFloorInfo:"community/village_api.UnitRental/unitRentalFloorInfo",saveUnitRentalFloorInfo:"community/village_api.UnitRental/saveUnitRentalFloorInfo",unitRentalLayerList:"community/village_api.UnitRental/unitRentalLayerList",unitRentalLayerInfo:"community/village_api.UnitRental/unitRentalLayerInfo",saveUnitRentalLayerInfo:"community/village_api.UnitRental/saveUnitRentalLayerInfo",updateUnitRentalLayerStatus:"community/village_api.UnitRental/updateUnitRentalLayerStatus",deleteUnitRentalLayer:"community/village_api.UnitRental/deleteUnitRentalLayer",thirdVillageUploadFile:"community/village_api.third.Room/villageUploadFile",thirdStartRoomImport:"community/village_api.third.Room/startRoomImport",thirdStartUserImport:"community/village_api.third.Room/startUserImport",thirdStartChargeImport:"community/village_api.third.Room/startChargeImport",thirdRefreshProcess:"community/village_api.third.Room/refreshProcess"};e["a"]=n},"97c9":function(t,e,a){"use strict";a("edaa")},edaa:function(t,e,a){}}]);