(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66f149c9","chunk-0654f18b"],{"0660":function(e,t,i){},"210c":function(e,t,i){"use strict";i.r(t);i("54f8");var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"parking_space"},[t("div",{staticClass:"header_search"},[t("div",{staticClass:"search_item"},[t("label",{staticClass:"label_title",staticStyle:{width:"75px"}},[e._v("车位号：")]),t("a-input",{attrs:{placeholder:"请输入车位号"},model:{value:e.pageInfo.position_num,callback:function(t){e.$set(e.pageInfo,"position_num",t)},expression:"pageInfo.position_num"}})],1),t("div",{staticClass:"search_item",staticStyle:{"margin-left":"20px"}},[t("label",{staticClass:"label_title"},[e._v("车库：")]),t("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption},on:{change:e.handleSelectChange},model:{value:e.pageInfo.garage_id,callback:function(t){e.$set(e.pageInfo,"garage_id",t)},expression:"pageInfo.garage_id"}},e._l(e.garageList,(function(i,a){return t("a-select-option",{attrs:{value:i.garage_id}},[e._v(" "+e._s(i.garage_num)+" ")])})),1)],1),t("div",{staticClass:"search_item",staticStyle:{"margin-left":"20px"}},[t("label",{staticClass:"label_title"},[e._v("车位模式：")]),t("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption},on:{change:e.handleSelectChange},model:{value:e.pageInfo.position_pattern,callback:function(t){e.$set(e.pageInfo,"position_pattern",t)},expression:"pageInfo.position_pattern"}},e._l(e.patternList,(function(i,a){return t("a-select-option",{attrs:{value:i.position_pattern}},[e._v(" "+e._s(i.name)+" ")])})),1)],1),1==e.children_type?t("div",{staticClass:"search_item",staticStyle:{"margin-left":"20px"}},[t("label",{staticClass:"label_title"},[e._v("车位类型：")]),t("a-select",{staticStyle:{width:"150px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption},on:{change:e.handleSelectChange},model:{value:e.pageInfo.children_type,callback:function(t){e.$set(e.pageInfo,"children_type",t)},expression:"pageInfo.children_type"}},e._l(e.childrenPositionList,(function(i,a){return t("a-select-option",{attrs:{value:i.children_type}},[e._v(" "+e._s(i.name)+" ")])})),1)],1):e._e(),t("div",{staticClass:"search_item",staticStyle:{"margin-left":"20px"}},[t("label",{staticClass:"label_title"},[e._v("租售状态：")]),t("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption},on:{change:e.handleSelectChange},model:{value:e.pageInfo.position_car_status,callback:function(t){e.$set(e.pageInfo,"position_car_status",t)},expression:"pageInfo.position_car_status"}},e._l(e.positionBindStatus,(function(i,a){return t("a-select-option",{attrs:{value:i.position_status}},[e._v(" "+e._s(i.label)+" ")])})),1)],1),t("div",{staticClass:"search_item",staticStyle:{"margin-left":"20px"}},[t("label",{staticClass:"label_title"},[e._v("车位状态：")]),t("a-select",{staticStyle:{width:"150px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption},on:{change:e.handleSelectChange},model:{value:e.pageInfo.position_status,callback:function(t){e.$set(e.pageInfo,"position_status",t)},expression:"pageInfo.position_status"}},e._l(e.positionStatus,(function(i,a){return t("a-select-option",{attrs:{value:i.position_status}},[e._v(" "+e._s(i.label)+" ")])})),1),t("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.queryThis}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-left":"10px"},on:{click:e.clearThis}},[e._v("清空")])],1),t("div",{staticClass:"search_item"},[t("a-button",{attrs:{type:"primary"},on:{click:e.addThis}},[e._v("添加车位")]),t("a-upload",{attrs:{showUploadList:!1,name:"file",data:e.uploadData,multiple:!1,action:"/v20/public/index.php/community/village_api.Parking/uplodePosition",headers:e.headers},on:{change:e.handleUploadChange}},[t("a-button",{staticClass:"operation_btn",attrs:{type:"primary"}},[e._v("导入车位")])],1),t("a-button",{staticClass:"operation_btn",attrs:{type:"primary",loading:e.exportLoadding2},on:{click:e.downModel}},[e._v("导出模板 ")]),t("a-button",{staticClass:"operation_btn",attrs:{type:"primary",loading:e.exportLoadding1},on:{click:e.downPosition}},[e._v("excel导出 ")]),t("a-button",{staticClass:"operation_btn",attrs:{type:"danger"},on:{click:e.deleteMany}},[e._v("多项删除")])],1)]),t("div",{staticClass:"table_content"},[t("a-table",{attrs:{columns:1==e.children_type?e.columns1:e.columns,"row-key":function(e){return e.position_id},pagination:e.pageInfo,loading:e.tableLoadding,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},"data-source":e.spaceList},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(i,a){return"虚拟车位"!=a.position_pattern_txt?t("span",{},[t("a",{on:{click:function(t){return e.editThis(a.position_id)}}},[e._v("编辑")]),1==e.children_type&&2==a.children_type?t("a-divider",{attrs:{type:"vertical"}}):e._e(),1==e.children_type&&2==a.children_type&&0==a.parent_position_id?t("a",{on:{click:function(t){return e.manualLiftingrod(a)}}},[e._v("绑定母车位")]):e._e(),1==e.children_type&&2==a.children_type&&a.parent_position_id>0?t("a-popconfirm",{attrs:{title:a.parent_position_status,"ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.unBindConfirm(a)},cancel:e.delCancel}},[t("a",[e._v("解绑")])]):e._e(),t("a-divider",{attrs:{type:"vertical"}}),t("a-popconfirm",{attrs:{title:"确定要删除该项吗?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.delConfirm(a)},cancel:e.delCancel}},[t("a",{staticStyle:{color:"red"}},[e._v("删除")])])],1):e._e()}}],null,!0)}),t("space-model",{attrs:{position_id:e.position_id,children_type:e.children_type,space_type:e.space_type,visible:e.spaceVisible,modelTitle:e.modelTitle},on:{closeSpace:e.closeSpace}}),t("a-modal",{attrs:{title:e.openTitle,width:500,visible:e.openGateVisible,maskClosable:!1},on:{ok:e.handleOk,cancel:e.handleCancel}},[t("a-form-model",{attrs:{"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[t("div",{staticClass:"add_black"},[t("a-form-model-item",{attrs:{label:"母车位列表",prop:"parent_position_id"}},[t("a-select",{staticStyle:{width:"200px"},attrs:{showSearch:!0,placeholder:"请选择母车位","default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":null,value:e.openGate.parent_position_id},on:{search:e.searchVal,change:e.handleSelectPositionChange}},e._l(e.searchList,(function(i,a){return t("a-select-option",{attrs:{value:i.position_id}},[e._v(" "+e._s(i.position_num)+" ")])})),1)],1)],1)])],1)],1)])},n=[],o=(i("075f"),i("c4d0")),s=i("a0e0"),r=[{title:"车库名称",dataIndex:"garage_num",key:"garage_num"},{title:"车位号",dataIndex:"position_num",key:"position_num"},{title:"车位模式",dataIndex:"position_pattern_txt",key:"position_pattern_txt"},{title:"车位状态",dataIndex:"position_status_txt",key:"position_status_txt"},{title:"车位面积",dataIndex:"position_area",key:"position_area"},{title:"备注",dataIndex:"position_note",key:"position_note",width:120},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],l=[{title:"车库名称",dataIndex:"garage_num",key:"garage_num"},{title:"车位号",dataIndex:"position_num",key:"position_num"},{title:"车位模式",dataIndex:"position_pattern_txt",key:"position_pattern_txt"},{title:"租售状态",dataIndex:"position_status_txt",key:"position_status_txt"},{title:"车位类型",dataIndex:"children_type_txt",key:"children_type_txt"},{title:"所属母车位",dataIndex:"parent_position_num",key:"parent_position_num"},{title:"车位状态",dataIndex:"car_status_txt",key:"car_status_txt"},{title:"车位面积",dataIndex:"position_area",key:"position_area"},{title:"备注",dataIndex:"position_note",key:"position_note",width:120},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],c={data:function(){var e=this;return{parentPositionList:[],openTitle:"绑定母车位",openGateVisible:!1,labelCol:{span:6},wrapperCol:{span:14},openGate:{position_id:"",parent_position_id:""},pageInfo:{current:1,pageSize:10,total:10,page:1,garage_id:"",position_num:"",children_type:"",position_status:"",position_pattern:1,position_car_status:void 0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共 ".concat(e," 条")},onShowSizeChange:function(t,i){return e.onTableChange(t,i)},onChange:function(t,i){return e.onTableChange(t,i)}},columns1:l,columns:r,tableLoadding:!1,spaceVisible:!1,selectedRowKeys:[],modelTitle:"",spaceList:[],garageList:[],positionStatus:[{position_status:0,label:"全部"},{position_status:1,label:"空置"},{position_status:2,label:"已使用"}],positionBindStatus:[{position_status:0,label:"全部"},{position_status:1,label:"未售出"},{position_status:2,label:"已售出"}],frequency:!1,position_id:"",children_type:0,space_type:"add",headers:{authorization:"authorization-text",village_id:0},select_names:[],select_names_str:"",exportLoadding1:!1,exportLoadding2:!1,is_show:!1,patternList:[{name:"真实车位",position_pattern:1},{name:"虚拟车位",position_pattern:2}],childrenPositionList:[{name:"母车位",children_type:1},{name:"子车位",children_type:2}],uploadData:{village_id:0},searchList:[]}},components:{spaceModel:o["default"]},mounted:function(){this.getSpaceList(),this.getGarageList()},methods:{handleOk:function(){var e=this;e.request("community/village_api.Parking/bindChildrenPosition",e.openGate).then((function(t){"0"!=t?e.$message.success("绑定成功！"):e.$message.error("绑定失败！"),e.openGateVisible=!1,e.openGate.parent_position_id="",e.openGate.position_id="",e.parentPositionList=[],e.searchList=[],e.getSpaceList()}))},handleCancel:function(){this.openGate.parent_position_id="",this.openGate.position_id="",this.parentPositionList=[],this.searchList=[],this.openGateVisible=!1},manualLiftingrod:function(e){var t=this;t.openGate.position_id=e.position_id,t.openGate.parent_position_id="",t.openGateVisible=!0,t.parentPositionList=[],t.searchList=[],t.request("community/village_api.Parking/getParentPositionList",{position_id:e.position_id}).then((function(e){t.parentPositionList=e.list}))},queryThis:function(){var e=this;if(this.frequency)this.$message.warn("请求频繁，请稍后再试");else{this.frequency=!0;var t=setTimeout((function(){e.frequency=!1,clearTimeout(t)}),2e3);this.pageInfo.page=1,this.getSpaceList()}},clearThis:function(){this.pageInfo={page:1,current:1,garage_id:void 0,position_num:"",position_status:void 0,position_car_status:void 0,pageSize:20,total:0,position_pattern:1},this.getSpaceList()},handleTableChange:function(e,t,i){this.pageInfo.current=e.current,this.pageInfo.page=e.current,this.getSpaceList()},onTableChange:function(e,t){this.pageInfo.current=e,this.pageInfo.pageSize=t,this.pageInfo.page=e,this.getSpaceList(),console.log("onTableChange==>",e,t)},getGarageList:function(){var e=this;e.request(s["a"].getGarageList,{}).then((function(t){e.garageList=t.list}))},handleSelectChange:function(e){this.pageInfo.page=1,this.pageInfo.current=1,console.log("selected ".concat(e))},handleSelectPositionChange:function(e){this.openGate.parent_position_id=e,this.$forceUpdate()},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},getSpaceList:function(){var e=this;e.tableLoadding=!0,e.request(s["a"].getPositionList,e.pageInfo).then((function(t){e.spaceList=t.list,e.children_type=t.children_type,e.pageInfo.total=t.count,e.uploadData.village_id=t.village_id,e.tableLoadding=!1}))},editThis:function(e){this.modelTitle="编辑车位",this.space_type="edit",this.spaceVisible=!0,this.position_id=e+""},delConfirm:function(e){var t=this;t.request(s["a"].delParkPosition,{position_id:e.position_id}).then((function(e){t.$message.success("删除成功！"),t.select_names_str="",t.selectedRowKeys=[],t.getSpaceList()}))},unBindConfirm:function(e){var t=this;t.request("community/village_api.Parking/unBindChildrenPosition",{position_id:e.position_id}).then((function(e){t.$message.success("解绑成功！"),t.select_names_str="",t.selectedRowKeys=[],t.getSpaceList()}))},delCancel:function(){},closeSpace:function(e){this.position_id="",this.spaceVisible=!1,e&&this.getSpaceList()},onSelectChange:function(e){var t=this;console.log("selectedRowKeys changed: ",e),this.selectedRowKeys=e,this.select_names=[],this.select_names_str="",this.spaceList.map((function(i){e.map((function(e,a){e==i.position_id&&t.select_names.push(i)}))})),this.select_names.map((function(e,i){i+1<t.select_names.length?t.select_names_str+=e.position_num+"、":t.select_names_str+=e.position_num}))},deleteMany:function(){var e=this;0!=e.selectedRowKeys.length?e.$confirm({title:"提示",content:"确定要删除【"+e.select_names_str+"】这些数据吗",onOk:function(){e.request(s["a"].delAllParkPosition,{position_id:e.selectedRowKeys}).then((function(t){e.$message.success("删除成功！"),e.select_names_str="",e.selectedRowKeys=[],e.getSpaceList()}))},onCancel:function(){}}):e.$message.warn("请选择要删除的项")},addThis:function(){this.modelTitle="添加车位",this.space_type="add",this.spaceVisible=!0},handleUploadChange:function(e){console.log("info0513",e),"done"===e.file.status?1e3==e.file.response.status?(this.$message.success("上传成功！"),e.file.response.data.url?window.location.href=e.file.response.data.url:this.getSpaceList()):this.$message.error(e.file.response.msg):"error"===e.file.status&&this.$message.error("上传失败！")},downPosition:function(){var e=this,t=this;t.exportLoadding1=!0,t.request("/community/village_api.Parking/downPosition",t.pageInfo).then((function(i){0==i.error?(window.location.href=i.url,e.$message.success("导出成功！")):e.$message.error("导出失败！"),t.exportLoadding1=!1})).catch((function(e){t.exportLoadding1=!1}))},downModel:function(){var e=this,t=this;t.exportLoadding2=!0,t.request("/community/village_api.Parking/downPositionModel",t.pageInfo).then((function(i){0==i.error?(window.location.href=i.url,e.$message.success("导出成功！")):e.$message.error("导出失败！"),t.exportLoadding2=!1})).catch((function(e){t.exportLoadding2=!1}))},searchVal:function(e){this.openGateVisible&&this.getSearchList(e)},getSearchList:function(e){var t=this,i={position_id:t.openGate.position_id,position_num:e};t.request("/community/village_api.Parking/getParentPositionList",i).then((function(e){var i=setTimeout((function(){t.searchList=e.list,clearTimeout(i),i=null}),300)})).catch((function(e){}))}}},p=c,d=(i("34dcd"),i("0b56")),u=Object(d["a"])(p,a,n,!1,null,"26b0fece",null);t["default"]=u.exports},"34dcd":function(e,t,i){"use strict";i("0660")},4544:function(e,t,i){},7801:function(e,t,i){"use strict";i("4544")},c4d0:function(e,t,i){"use strict";i.r(t);i("54f8");var a=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.modelTitle,width:900,visible:e.visible,"confirm-loading":e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleSubCancel}},[t("a-form-model",{ref:"ruleForm",attrs:{model:e.spaceForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},["添加车位"==e.modelTitle?t("div",{staticClass:"add_space"},[t("a-form-model-item",{attrs:{label:"车库名称",prop:"garage_id"}},[e.visible?t("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption},on:{change:function(t){return e.handleSelectChange(t,"garage_id")}}},e._l(e.garageList,(function(i,a){return t("a-select-option",{attrs:{value:i.garage_id}},[e._v(" "+e._s(i.garage_num)+" ")])})),1):e._e()],1),t("a-form-model-item",{attrs:{label:"车位号",prop:"position_num",extra:"不能用中文"}},[t("a-input",{attrs:{placeholder:"请输入车位号"},model:{value:e.spaceForm.position_num,callback:function(t){e.$set(e.spaceForm,"position_num",t)},expression:"spaceForm.position_num"}})],1),t("a-form-model-item",{attrs:{label:"绑定业主",prop:"pigcms_id"}},[t("div",{staticStyle:{display:"flex","flex-direction":"column","margin-top":"5px"}},[t("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"手机号或业主姓名搜索业主"},on:{change:function(t){return e.searchUser()}},model:{value:e.searchVal,callback:function(t){e.searchVal=t},expression:"searchVal"}}),e.searchUserList.length>0?t("a-select",{staticStyle:{width:"200px"},attrs:{open:!0,"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.spaceForm.pigcms_id},on:{change:function(t){return e.handleSelectChange(t,"pigcms_id")}}},e._l(e.searchUserList,(function(i,a){return t("a-select-option",{attrs:{value:i.pigcms_id}},[e._v(" "+e._s(i.name)+" ")])})),1):e._e()],1)]),e.children_type?t("a-form-model-item",{attrs:{label:"车位类型",prop:"children_position_type"}},[t("a-radio-group",{attrs:{name:"radioGroup"},model:{value:e.spaceForm.children_type,callback:function(t){e.$set(e.spaceForm,"children_type",t)},expression:"spaceForm.children_type"}},[t("a-radio",{attrs:{value:1}},[e._v("母车位")]),t("a-radio",{attrs:{value:2}},[e._v("子车位")])],1)],1):e._e(),t("a-form-model-item",{attrs:{label:"车位面积",prop:"position_area"}},[t("a-input",{attrs:{placeholder:"请输入车位面积"},model:{value:e.spaceForm.position_area,callback:function(t){e.$set(e.spaceForm,"position_area",t)},expression:"spaceForm.position_area"}})],1),t("a-form-model-item",{attrs:{label:"备注",prop:"position_note"}},[t("a-textarea",{staticStyle:{padding:"5px",width:"200px",height:"100px",resize:"none"},attrs:{placeholder:"请输入"},model:{value:e.spaceForm.position_note,callback:function(t){e.$set(e.spaceForm,"position_note",t)},expression:"spaceForm.position_note"}})],1)],1):t("div",{staticClass:"edit_space"},[t("a-form-model-item",{attrs:{label:"车库",prop:"garage_id"}},[t("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.spaceForm.garage_id},on:{change:function(t){return e.handleSelectChange(t,"garage_id")}}},e._l(e.garageList,(function(i,a){return t("a-select-option",{attrs:{value:i.garage_id}},[e._v(" "+e._s(i.garage_num)+" ")])})),1)],1),t("a-form-model-item",{attrs:{label:"车位号",prop:"position_num",extra:"不能用中文"}},[t("a-input",{attrs:{placeholder:"请输入车位号"},model:{value:e.spaceForm.position_num,callback:function(t){e.$set(e.spaceForm,"position_num",t)},expression:"spaceForm.position_num"}})],1),t("a-form-model-item",{attrs:{label:"当前绑定业主",prop:"current"}},[e._v(" 【姓名】"+e._s(e.spaceForm.name?e.spaceForm.name:"暂无")+" 【手机号】"+e._s(e.spaceForm.phone?e.spaceForm.phone:"暂无")+" ")]),t("a-form-model-item",{attrs:{label:"绑定业主",prop:"pigcms_id"}},[t("div",{staticStyle:{display:"flex","flex-direction":"column","margin-top":"5px"}},[t("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"手机号或业主姓名搜索业主"},on:{change:function(t){return e.searchUser()}},model:{value:e.searchVal,callback:function(t){e.searchVal=t},expression:"searchVal"}}),e.searchUserList.length>0?t("a-select",{staticStyle:{width:"200px"},attrs:{open:!0,"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.spaceForm.pigcms_id},on:{change:function(t){return e.handleSelectChange(t,"pigcms_id")}}},e._l(e.searchUserList,(function(i,a){return t("a-select-option",{attrs:{value:i.pigcms_id}},[e._v(" "+e._s(i.name)+" ")])})),1):e._e()],1)]),e.visible?t("a-form-model-item",{attrs:{label:"停车场到期时间",prop:"end_time"}},[e.spaceForm.end_time?t("a-date-picker",{attrs:{placeholder:"请选择停车场到期时间",disabled:e.disabled,value:e.moment(e.spaceForm.end_time,e.dateFormat)},on:{change:e.ondateChange}}):t("a-date-picker",{attrs:{placeholder:"请选择停车场到期时间",disabled:e.disabled},on:{change:e.ondateChange}})],1):e._e(),e.spaceForm.children_position_type?t("a-form-model-item",{attrs:{label:"车位类型",prop:"children_position_type"}},[t("a-radio-group",{model:{value:e.spaceForm.children_type,callback:function(t){e.$set(e.spaceForm,"children_type",t)},expression:"spaceForm.children_type"}},[t("a-radio",{staticStyle:{"padding-right":"10px"},attrs:{value:1}},[e._v("母车位")]),t("a-radio",{attrs:{value:2}},[e._v("子车位")])],1)],1):e._e(),t("a-form-model-item",{attrs:{label:"车位面积",prop:"position_area"}},[t("a-input",{attrs:{placeholder:"请输入车位面积","addon-after":"平方米"},model:{value:e.spaceForm.position_area,callback:function(t){e.$set(e.spaceForm,"position_area",t)},expression:"spaceForm.position_area"}})],1),t("a-form-model-item",{attrs:{label:"备注",prop:"position_note"}},[t("a-textarea",{staticStyle:{padding:"5px",width:"200px",height:"100px",resize:"none"},attrs:{placeholder:"请输入"},model:{value:e.spaceForm.position_note,callback:function(t){e.$set(e.spaceForm,"position_note",t)},expression:"spaceForm.position_note"}})],1),t("a-form-model-item",{attrs:{label:"租售状态",prop:"position_type"}},[t("a-input",{attrs:{disabled:!0,placeholder:"请输入租售状态"},model:{value:e.spaceForm.position_status_txt,callback:function(t){e.$set(e.spaceForm,"position_status_txt",t)},expression:"spaceForm.position_status_txt"}})],1)],1)])],1)},n=[],o=(i("19f1"),i("075f"),i("a0e0")),s=i("2f42"),r=i.n(s),l={props:{position_id:{type:String,default:""},children_type:{type:[String,Number],default:0},visible:{type:Boolean,default:!1},modelTitle:{type:String,default:""},space_type:{type:String,default:"add"}},watch:{position_id:{immediate:!0,handler:function(e){"edit"==this.space_type&&this.getSpaceInfo()}}},mounted:function(){this.getGarageList()},data:function(){return{confirmLoading:!1,children_type_show:!1,labelCol:{span:4},wrapperCol:{span:14},spaceForm:{garage_id:"",children_type:1},rules:{garage_id:[{required:!0,message:"请选择车场",trigger:"blur"}],position_num:[{required:!0,message:"请输入车位号",trigger:"blur"}]},garageList:[],dateFormat:"YYYY/MM/DD",disabled:!1,searchVal:"",searchUserList:[]}},methods:{moment:r.a,getSpaceInfo:function(){var e=this;this.position_id&&e.request(o["a"].getPositionInfo,{position_id:this.position_id}).then((function(t){e.spaceForm=t,2==e.spaceForm.children_type?e.disabled=!0:e.disabled=!1}))},getGarageList:function(){var e=this;e.request(o["a"].getGarageList,{}).then((function(t){e.garageList=t.list}))},clearForm:function(){this.spaceForm={garage_id:"",children_type:1},this.searchVal=""},handleSubmit:function(e){var t=this;this.confirmLoading=!0,this.$refs.ruleForm.validate((function(e){if(!e)return t.confirmLoading=!1,!1;var i=t,a=o["a"].addParkPosition;"edit"==t.space_type&&(a=o["a"].editParkPosition),i.request(a,i.spaceForm).then((function(e){"edit"==t.space_type?i.$message.success("编辑成功！"):i.$message.success("添加成功！"),t.$emit("closeSpace",!0),t.clearForm(),t.confirmLoading=!1})).catch((function(e){t.confirmLoading=!1}))}))},handleSubCancel:function(e){this.$refs.ruleForm.resetFields(),this.confirmLoading=!1,this.$emit("closeSpace",!1),this.clearForm()},handleSelectChange:function(e,t){var i=this;this.spaceForm[t]=e,"pigcms_id"==t&&this.searchUserList.map((function(t){t.pigcms_id==e&&(i.searchVal=t.name,i.searchUserList=[],console.log("v.pigcms_id=====>",t.pigcms_id))})),this.$forceUpdate()},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},ondateChange:function(e,t){this.spaceForm.end_time=t},searchUser:function(){var e=this;this.searchVal?e.request(o["a"].getParkUserInfo,{value:this.searchVal}).then((function(t){e.searchUserList=t})):(e.searchUserList=[],e.spaceForm.pigcms_id="")}}},c=l,p=(i("7801"),i("0b56")),d=Object(p["a"])(c,a,n,!1,null,"8fd23be8",null);t["default"]=d.exports}}]);