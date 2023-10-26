(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a1738712","chunk-70e02548"],{1007:function(e,t,a){"use strict";a("ed3a")},"210c":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"parking_space"},[a("div",{staticClass:"header_search"},[a("div",{staticClass:"search_item"},[a("label",{staticClass:"label_title",staticStyle:{width:"120px"}},[e._v("车位号：")]),a("a-input",{attrs:{placeholder:"请输入车位号"},model:{value:e.pageInfo.position_num,callback:function(t){e.$set(e.pageInfo,"position_num",t)},expression:"pageInfo.position_num"}})],1),a("div",{staticClass:"search_item",staticStyle:{"margin-left":"20px"}},[a("label",{staticClass:"label_title"},[e._v("车库：")]),a("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption},on:{change:e.handleSelectChange},model:{value:e.pageInfo.garage_id,callback:function(t){e.$set(e.pageInfo,"garage_id",t)},expression:"pageInfo.garage_id"}},e._l(e.garageList,(function(t,i){return a("a-select-option",{attrs:{value:t.garage_id}},[e._v(" "+e._s(t.garage_num)+" ")])})),1)],1),a("div",{staticClass:"search_item",staticStyle:{"margin-left":"20px"}},[a("label",{staticClass:"label_title"},[e._v("车位模式：")]),a("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption},on:{change:e.handleSelectChange},model:{value:e.pageInfo.position_pattern,callback:function(t){e.$set(e.pageInfo,"position_pattern",t)},expression:"pageInfo.position_pattern"}},e._l(e.patternList,(function(t,i){return a("a-select-option",{attrs:{value:t.position_pattern}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),a("div",{staticClass:"search_item",staticStyle:{"margin-left":"20px"}},[a("label",{staticClass:"label_title"},[e._v("车位状态：")]),a("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption},on:{change:e.handleSelectChange},model:{value:e.pageInfo.position_status,callback:function(t){e.$set(e.pageInfo,"position_status",t)},expression:"pageInfo.position_status"}},e._l(e.positionStatus,(function(t,i){return a("a-select-option",{attrs:{value:t.position_status}},[e._v(" "+e._s(t.label)+" ")])})),1),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.queryThis}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},on:{click:e.clearThis}},[e._v("清空")])],1),a("div",{staticClass:"search_item"},[a("a-button",{attrs:{type:"primary"},on:{click:e.addThis}},[e._v("添加车位")]),a("a-upload",{attrs:{showUploadList:!1,name:"file",data:e.uploadData,multiple:!1,action:"/v20/public/index.php/community/village_api.Parking/uplodePosition",headers:e.headers},on:{change:e.handleUploadChange}},[a("a-button",{staticClass:"operation_btn",attrs:{type:"primary"}},[e._v("导入车位")])],1),a("a-button",{staticClass:"operation_btn",attrs:{type:"primary",loading:e.exportLoadding2},on:{click:e.downModel}},[e._v("导出模板")]),a("a-button",{staticClass:"operation_btn",attrs:{type:"primary",loading:e.exportLoadding1},on:{click:e.downPosition}},[e._v("excel导出")]),a("a-button",{staticClass:"operation_btn",attrs:{type:"danger"},on:{click:e.deleteMany}},[e._v("多项删除")])],1)]),a("div",{staticClass:"table_content"},[a("a-table",{attrs:{columns:e.columns,"row-key":function(e){return e.position_id},pagination:e.pageInfo,loading:e.tableLoadding,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},"data-source":e.spaceList},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,i){return"虚拟车位"!=i.position_pattern_txt?a("span",{},[a("a",{on:{click:function(t){return e.editThis(i.position_id)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定要删除该项吗?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.delConfirm(i)},cancel:e.delCancel}},[a("a",{staticStyle:{color:"red"}},[e._v("删除")])])],1):e._e()}}],null,!0)}),a("space-model",{attrs:{position_id:e.position_id,space_type:e.space_type,visible:e.spaceVisible,modelTitle:e.modelTitle},on:{closeSpace:e.closeSpace}})],1)])},s=[],o=(a("d81d"),a("c4d0")),n=a("a0e0"),r=[{title:"车库名称",dataIndex:"garage_num",key:"garage_num"},{title:"车位号",dataIndex:"position_num",key:"position_num"},{title:"车位模式",dataIndex:"position_pattern_txt",key:"position_pattern_txt"},{title:"车位状态",dataIndex:"position_status_txt",key:"position_status_txt"},{title:"车位面积",dataIndex:"position_area",key:"position_area"},{title:"备注",dataIndex:"position_note",key:"position_note",width:120},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],l={data:function(){return{pageInfo:{page:1,current:1,garage_id:"",position_num:"",position_status:"",pageSize:20,total:0,position_pattern:1},columns:r,tableLoadding:!1,spaceVisible:!1,selectedRowKeys:[],modelTitle:"",spaceList:[],garageList:[],positionStatus:[{position_status:1,label:"空置"},{position_status:2,label:"已使用"}],frequency:!1,position_id:"",space_type:"add",headers:{authorization:"authorization-text",village_id:0},select_names:[],select_names_str:"",exportLoadding1:!1,exportLoadding2:!1,patternList:[{name:"真实车位",position_pattern:1},{name:"虚拟车位",position_pattern:2}],uploadData:{village_id:0}}},components:{spaceModel:o["default"]},mounted:function(){this.getSpaceList(),this.getGarageList()},methods:{queryThis:function(){var e=this;if(this.frequency)this.$message.warn("请求频繁，请稍后再试");else{this.frequency=!0;var t=setTimeout((function(){e.frequency=!1,clearTimeout(t)}),2e3);this.getSpaceList()}},clearThis:function(){this.pageInfo={page:1,current:1,garage_id:"",position_num:"",position_status:"",pageSize:20,total:0,position_pattern:1},this.getSpaceList()},handleTableChange:function(e,t,a){this.pageInfo.current=e.current,this.pageInfo.page=e.current,this.getSpaceList()},getGarageList:function(){var e=this;e.request(n["a"].getGarageList,{}).then((function(t){e.garageList=t.list}))},handleSelectChange:function(e){this.pageInfo.page=1,this.pageInfo.current=1,console.log("selected ".concat(e))},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},getSpaceList:function(){var e=this;e.tableLoadding=!0,e.request(n["a"].getPositionList,e.pageInfo).then((function(t){e.spaceList=t.list,e.pageInfo.total=t.count,e.uploadData.village_id=t.village_id,e.tableLoadding=!1}))},editThis:function(e){this.modelTitle="编辑车位",this.space_type="edit",this.spaceVisible=!0,this.position_id=e+""},delConfirm:function(e){var t=this;t.request(n["a"].delParkPosition,{position_id:e.position_id}).then((function(e){t.$message.success("删除成功！"),t.select_names_str="",t.selectedRowKeys=[],t.getSpaceList()}))},delCancel:function(){},closeSpace:function(e){this.position_id="",this.spaceVisible=!1,e&&this.getSpaceList()},onSelectChange:function(e){var t=this;console.log("selectedRowKeys changed: ",e),this.selectedRowKeys=e,this.select_names=[],this.select_names_str="",this.spaceList.map((function(a){e.map((function(e,i){e==a.position_id&&t.select_names.push(a)}))})),this.select_names.map((function(e,a){a+1<t.select_names.length?t.select_names_str+=e.position_num+"、":t.select_names_str+=e.position_num}))},deleteMany:function(){var e=this;0!=e.selectedRowKeys.length?e.$confirm({title:"提示",content:"确定要删除【"+e.select_names_str+"】这些数据吗",onOk:function(){e.request(n["a"].delAllParkPosition,{position_id:e.selectedRowKeys}).then((function(t){e.$message.success("删除成功！"),e.select_names_str="",e.selectedRowKeys=[],e.getSpaceList()}))},onCancel:function(){}}):e.$message.warn("请选择要删除的项")},addThis:function(){this.modelTitle="添加车位",this.space_type="add",this.spaceVisible=!0},handleUploadChange:function(e){console.log("info0513",e),"done"===e.file.status?1e3==e.file.response.status?(this.$message.success("上传成功！"),e.file.response.data.url?window.location.href=e.file.response.data.url:this.getSpaceList()):this.$message.error(e.file.response.msg):"error"===e.file.status&&this.$message.error("上传失败！")},downPosition:function(){var e=this,t=this;t.exportLoadding1=!0,t.request("/community/village_api.Parking/downPosition",t.pageInfo).then((function(a){0==a.error?(window.location.href=a.url,e.$message.success("导出成功！")):e.$message.error("导出失败！"),t.exportLoadding1=!1})).catch((function(e){t.exportLoadding1=!1}))},downModel:function(){var e=this,t=this;t.exportLoadding2=!0,t.request("/community/village_api.Parking/downPositionModel",t.pageInfo).then((function(a){0==a.error?(window.location.href=a.url,e.$message.success("导出成功！")):e.$message.error("导出失败！"),t.exportLoadding2=!1})).catch((function(e){t.exportLoadding2=!1}))}}},c=l,p=(a("1007"),a("2877")),d=Object(p["a"])(c,i,s,!1,null,"053a4fba",null);t["default"]=d.exports},8986:function(e,t,a){"use strict";a("8af8")},"8af8":function(e,t,a){},c4d0:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.modelTitle,width:900,visible:e.visible,"confirm-loading":e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleSubCancel}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.spaceForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},["添加车位"==e.modelTitle?a("div",{staticClass:"add_space"},[a("a-form-model-item",{attrs:{label:"车库名称",prop:"garage_id"}},[e.visible?a("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption},on:{change:function(t){return e.handleSelectChange(t,"garage_id")}}},e._l(e.garageList,(function(t,i){return a("a-select-option",{attrs:{value:t.garage_id}},[e._v(" "+e._s(t.garage_num)+" ")])})),1):e._e()],1),a("a-form-model-item",{attrs:{label:"车位号",prop:"position_num",extra:"不能用中文"}},[a("a-input",{attrs:{placeholder:"请输入车位号"},model:{value:e.spaceForm.position_num,callback:function(t){e.$set(e.spaceForm,"position_num",t)},expression:"spaceForm.position_num"}})],1),a("a-form-model-item",{attrs:{label:"绑定业主",prop:"pigcms_id"}},[a("div",{staticStyle:{display:"flex","flex-direction":"column","margin-top":"5px"}},[a("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"手机号或业主姓名搜索业主"},on:{change:function(t){return e.searchUser()}},model:{value:e.searchVal,callback:function(t){e.searchVal=t},expression:"searchVal"}}),e.searchUserList.length>0?a("a-select",{staticStyle:{width:"200px"},attrs:{open:!0,"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.spaceForm.pigcms_id},on:{change:function(t){return e.handleSelectChange(t,"pigcms_id")}}},e._l(e.searchUserList,(function(t,i){return a("a-select-option",{attrs:{value:t.pigcms_id}},[e._v(" "+e._s(t.name)+" ")])})),1):e._e()],1)]),a("a-form-model-item",{attrs:{label:"车位面积",prop:"position_area"}},[a("a-input",{attrs:{placeholder:"请输入车位面积"},model:{value:e.spaceForm.position_area,callback:function(t){e.$set(e.spaceForm,"position_area",t)},expression:"spaceForm.position_area"}})],1),a("a-form-model-item",{attrs:{label:"备注",prop:"position_note"}},[a("a-textarea",{staticStyle:{padding:"5px width:200px",height:"100px",resize:"none"},attrs:{placeholder:"请输入"},model:{value:e.spaceForm.position_note,callback:function(t){e.$set(e.spaceForm,"position_note",t)},expression:"spaceForm.position_note"}})],1)],1):a("div",{staticClass:"edit_space"},[a("a-form-model-item",{attrs:{label:"车库",prop:"garage_id"}},[a("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.spaceForm.garage_id},on:{change:function(t){return e.handleSelectChange(t,"garage_id")}}},e._l(e.garageList,(function(t,i){return a("a-select-option",{attrs:{value:t.garage_id}},[e._v(" "+e._s(t.garage_num)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"车位号",prop:"position_num",extra:"不能用中文"}},[a("a-input",{attrs:{placeholder:"请输入车位号"},model:{value:e.spaceForm.position_num,callback:function(t){e.$set(e.spaceForm,"position_num",t)},expression:"spaceForm.position_num"}})],1),a("a-form-model-item",{attrs:{label:"当前绑定业主",prop:"current"}},[e._v(" 【姓名】"+e._s(e.spaceForm.name?e.spaceForm.name:"暂无")+" 【手机号】"+e._s(e.spaceForm.phone?e.spaceForm.phone:"暂无")+" ")]),a("a-form-model-item",{attrs:{label:"绑定业主",prop:"pigcms_id"}},[a("div",{staticStyle:{display:"flex","flex-direction":"column","margin-top":"5px"}},[a("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"手机号或业主姓名搜索业主"},on:{change:function(t){return e.searchUser()}},model:{value:e.searchVal,callback:function(t){e.searchVal=t},expression:"searchVal"}}),e.searchUserList.length>0?a("a-select",{staticStyle:{width:"200px"},attrs:{open:!0,"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.spaceForm.pigcms_id},on:{change:function(t){return e.handleSelectChange(t,"pigcms_id")}}},e._l(e.searchUserList,(function(t,i){return a("a-select-option",{attrs:{value:t.pigcms_id}},[e._v(" "+e._s(t.name)+" ")])})),1):e._e()],1)]),e.visible?a("a-form-model-item",{attrs:{label:"停车场到期时间",prop:"end_time"}},[e.spaceForm.end_time?a("a-date-picker",{attrs:{placeholder:"请选择停车场到期时间",value:e.moment(e.spaceForm.end_time,e.dateFormat)},on:{change:e.ondateChange}}):a("a-date-picker",{attrs:{placeholder:"请选择停车场到期时间"},on:{change:e.ondateChange}})],1):e._e(),a("a-form-model-item",{attrs:{label:"车位面积",prop:"position_area"}},[a("a-input",{attrs:{placeholder:"请输入车位面积","addon-after":"平方米"},model:{value:e.spaceForm.position_area,callback:function(t){e.$set(e.spaceForm,"position_area",t)},expression:"spaceForm.position_area"}})],1),a("a-form-model-item",{attrs:{label:"备注",prop:"position_note"}},[a("a-textarea",{staticStyle:{padding:"5px width:200px",height:"100px",resize:"none"},attrs:{placeholder:"请输入"},model:{value:e.spaceForm.position_note,callback:function(t){e.$set(e.spaceForm,"position_note",t)},expression:"spaceForm.position_note"}})],1),a("a-form-model-item",{attrs:{label:"车位状态",prop:"position_type"}},[a("a-input",{attrs:{disabled:!0,placeholder:"请输入车位状态"},model:{value:e.spaceForm.position_status_txt,callback:function(t){e.$set(e.spaceForm,"position_status_txt",t)},expression:"spaceForm.position_status_txt"}})],1)],1)])],1)},s=[],o=(a("d81d"),a("b0c0"),a("a0e0")),n=a("c1df"),r=a.n(n),l={props:{position_id:{type:String,default:""},visible:{type:Boolean,default:!1},modelTitle:{type:String,default:""},space_type:{type:String,default:"add"}},watch:{position_id:{immediate:!0,handler:function(e){"edit"==this.space_type&&this.getSpaceInfo()}}},mounted:function(){this.getGarageList()},data:function(){return{confirmLoading:!1,labelCol:{span:4},wrapperCol:{span:14},spaceForm:{garage_id:""},rules:{garage_id:[{required:!0,message:"请选择车场",trigger:"blur"}],position_num:[{required:!0,message:"请输入车位号",trigger:"blur"}]},garageList:[],dateFormat:"YYYY/MM/DD",searchVal:"",searchUserList:[]}},methods:{moment:r.a,getSpaceInfo:function(){var e=this;this.position_id&&e.request(o["a"].getPositionInfo,{position_id:this.position_id}).then((function(t){e.spaceForm=t}))},getGarageList:function(){var e=this;e.request(o["a"].getGarageList,{}).then((function(t){e.garageList=t.list}))},clearForm:function(){this.spaceForm={garage_id:""},this.searchVal=""},handleSubmit:function(e){var t=this;this.confirmLoading=!0,this.$refs.ruleForm.validate((function(e){if(!e)return t.confirmLoading=!1,!1;var a=t,i=o["a"].addParkPosition;"edit"==t.space_type&&(i=o["a"].editParkPosition),a.request(i,a.spaceForm).then((function(e){"edit"==t.space_type?a.$message.success("编辑成功！"):a.$message.success("添加成功！"),t.$emit("closeSpace",!0),t.clearForm(),t.confirmLoading=!1})).catch((function(e){t.confirmLoading=!1}))}))},handleSubCancel:function(e){this.$refs.ruleForm.resetFields(),this.confirmLoading=!1,this.$emit("closeSpace",!1),this.clearForm()},handleSelectChange:function(e,t){var a=this;this.spaceForm[t]=e,"pigcms_id"==t&&this.searchUserList.map((function(t){t.pigcms_id==e&&(a.searchVal=t.name,a.searchUserList=[],console.log("v.pigcms_id=====>",t.pigcms_id))})),this.$forceUpdate()},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},ondateChange:function(e,t){this.spaceForm.end_time=t},searchUser:function(){var e=this;this.searchVal?e.request(o["a"].getParkUserInfo,{value:this.searchVal}).then((function(t){e.searchUserList=t})):(e.searchUserList=[],e.spaceForm.pigcms_id="")}}},c=l,p=(a("8986"),a("2877")),d=Object(p["a"])(c,i,s,!1,null,"e52c67ea",null);t["default"]=d.exports},ed3a:function(e,t,a){}}]);