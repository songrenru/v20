(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38996e77"],{2975:function(e,t,a){"use strict";var s={getList:"/real_estate/platform.Process/getList",payNameList:"/real_estate/platform.Process/payNameList",add:"/real_estate/platform.Process/add",edit:"/real_estate/platform.Process/edit",show:"/real_estate/platform.Process/show",delete:"/real_estate/platform.Process/delete",changeSort:"/real_estate/platform.Process/changeSort",getProjectList:"real_estate/platform.Project/getList",addProjectList:"real_estate/platform.Project/add",editProjectList:"real_estate/platform.Project/edit",showProjectList:"real_estate/platform.Project/show",deleteProjectList:"real_estate/platform.Project/delete",getPropertyTypeList:"real_estate/platform.PropertyType/getList",addPropertyTypeList:"real_estate/platform.PropertyType/add",editPropertyTypeList:"real_estate/platform.PropertyType/edit",showPropertyTypeList:"real_estate/platform.PropertyType/show",deletePropertyTypeList:"real_estate/platform.PropertyType/delete",getOtherList:"real_estate/platform.Wish/getOtherList",getWishList:"real_estate/platform.Wish/getList",changeProcess:"real_estate/platform.Wish/changeProcess",changeStatus:"real_estate/platform.Wish/changeStatus",addWish:"real_estate/platform.Wish/add",editWish:"real_estate/platform.Wish/edit",showWish:"real_estate/platform.Wish/show",exportData:"real_estate/platform.Wish/exportData",deleteWish:"real_estate/platform.Wish/delete",getUserList:"real_estate/platform.Wish/getUserList"};t["a"]=s},6346:function(e,t,a){"use strict";a("da4e")},c307:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[a("a-tabs",{attrs:{"default-active-key":"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"推荐列表"}})],1),e.project_list.length>0||e.type_list.length>0||e.process_list.length>0||e.pay_name_list.length>0?a("a-row",{attrs:{type:"flex"}},[a("div",{staticStyle:{"margin-right":"30px"}},[a("span",[e._v("推荐项目：")]),a("a-select",{staticStyle:{width:"130px"},attrs:{"default-value":e.project_list[0]?e.project_list[0].value:""},on:{change:function(t){return e.selectChange(t,1)}}},e._l(e.project_list,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.value))])})),1)],1),a("div",{staticStyle:{"margin-right":"30px"}},[a("span",[e._v("房产类型：")]),a("a-select",{staticStyle:{width:"130px"},attrs:{"default-value":e.type_list[0]?e.type_list[0].value:""},on:{change:function(t){return e.selectChange(t,2)}}},e._l(e.type_list,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.value))])})),1)],1),a("div",{staticStyle:{"margin-right":"30px"}},[a("span",[e._v("当前状态：")]),a("a-select",{staticStyle:{width:"130px"},attrs:{"default-value":e.process_list[0]?e.process_list[0].value:""},on:{change:function(t){return e.selectChange(t,3)}}},e._l(e.process_list,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.value))])})),1)],1),a("div",{staticStyle:{"margin-right":"30px"}},[a("span",[e._v("付款状态：")]),a("a-select",{staticStyle:{width:"130px"},attrs:{"default-value":e.pay_name_list[0]?e.pay_name_list[0].value:""},on:{change:function(t){return e.selectChange(t,4)}}},e._l(e.pay_name_list,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.value))])})),1)],1),a("div",{staticStyle:{"margin-right":"20px"}},[a("span",[e._v("录入日期：")]),a("a-range-picker",{on:{change:e.onPickerChange}})],1)]):e._e(),a("a-row",{attrs:{type:"flex",align:"middle"}},[1==e.is_show?a("div",{staticStyle:{"margin-right":"30px"}},[a("span",[e._v("置业顾问筛选：")]),a("a-select",{staticStyle:{width:"130px"},attrs:{"default-value":0},model:{value:e.paramsData.user_id,callback:function(t){e.$set(e.paramsData,"user_id",t)},expression:"paramsData.user_id"}},e._l(e.userList,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.value))])})),1)],1):e._e(),a("div",[a("a-select",{staticStyle:{width:"130px","margin-right":"10px"},attrs:{"default-value":1,options:e.selectNameType},model:{value:e.paramsData.type,callback:function(t){e.$set(e.paramsData,"type",t)},expression:"paramsData.type"}}),a("a-input",{staticStyle:{width:"170px"},attrs:{allowClear:"",placeholder:"请输入"},model:{value:e.paramsData.search_kewords,callback:function(t){e.$set(e.paramsData,"search_kewords",t)},expression:"paramsData.search_kewords"}}),a("a-button",{staticStyle:{margin:"10px 20px"},attrs:{type:"primary"},on:{click:e.search}},[e._v(e._s(e.L("搜索")))])],1)]),a("div",{staticClass:"btn_list"},[a("a-button",{staticStyle:{margin:"10px 0px"},attrs:{type:"primary"},on:{click:e.addClick}},[e._v(e._s(e.L("新建")))]),a("div",[a("a-button",{staticStyle:{margin:"10px 0px","margin-right":"20px"},attrs:{type:"primary"},on:{click:e.batchModification}},[e._v(e._s(e.L("批量修改状态")))]),a("a-button",{staticStyle:{margin:"10px 0px"},attrs:{type:"primary"},on:{click:e.exportData}},[e._v(e._s(e.L("导出")))])],1)],1),a("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:e.columns,rowKey:"id","data-source":e.dataList,pagination:e.pagination,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onParkingChange}},scopedSlots:e._u([{key:"commission_pay",fn:function(t,s){return[a("a-switch",{attrs:{"checked-children":"已结清","un-checked-children":"未结清","default-checked":0!=s.commission_pay},on:{change:function(t){return e.switchOnChange(t,s)}}})]}},{key:"process_name",fn:function(t,s){return[a("span",{style:"color:"+s.font_color,attrs:{title:s.process_name}},[e._v(e._s(s.process_name))]),a("a",{on:{click:function(t){return e.setProcess_name(s)}}},[e._v("     编辑")])]}},{key:"action",fn:function(t,s){return a("span",{},[a("a",{staticClass:"inline-block",staticStyle:{"margin-right":"10px"},on:{click:function(t){return e.editTicket(s)}}},[e._v(e._s(e.L("编辑")))]),a("a",{staticClass:"inline-block",staticStyle:{color:"red"},on:{click:function(t){return e.delPackage(s)}}},[e._v(e._s(e.L("删除")))])])}}])}),a("a-modal",{attrs:{maskClosable:!1,centered:!0,destroyOnClose:"",width:"32%",title:e.titles},on:{ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.details?a("div",{staticClass:"newBox"},[a("a-form-model",{ref:"ruleForm",attrs:{rules:e.rules,model:e.formData,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"项目名称",prop:"project_id"}},[a("a-select",{attrs:{defaultValue:e.formData.project_id?e.formData.project_id:"",placeholder:"请选择"},on:{change:function(t){return e.selectChange(t,"11")}}},e._l(e.details.project_list,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.value))])})),1)],1),a("a-form-model-item",{attrs:{label:"位置"}},[a("span",[e._v(e._s(e.address?e.address.place:"暂无"))])]),a("a-form-model-item",{attrs:{label:"客户姓名",prop:"buyer_name"}},[a("a-input",{attrs:{placeholder:"请输入客户姓名"},model:{value:e.formData.buyer_name,callback:function(t){e.$set(e.formData,"buyer_name",t)},expression:"formData.buyer_name"}})],1),a("a-form-model-item",{attrs:{label:"客户手机号",prop:"buyer_phone"}},[a("a-input",{attrs:{placeholder:"请输入客户手机号"},model:{value:e.formData.buyer_phone,callback:function(t){e.$set(e.formData,"buyer_phone",t)},expression:"formData.buyer_phone"}})],1),a("a-form-model-item",{attrs:{label:"推荐人姓名",prop:"referee_name"}},[a("a-input",{attrs:{placeholder:"请输入推荐人姓名"},model:{value:e.formData.referee_name,callback:function(t){e.$set(e.formData,"referee_name",t)},expression:"formData.referee_name"}})],1),a("a-form-model-item",{attrs:{label:"推荐人手机号",prop:"referee_phone"}},[a("a-input",{attrs:{placeholder:"请输入推荐人手机号"},model:{value:e.formData.referee_phone,callback:function(t){e.$set(e.formData,"referee_phone",t)},expression:"formData.referee_phone"}})],1),a("a-form-model-item",{attrs:{label:"付款方式",prop:"pay_type"}},[a("a-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.pay_type,callback:function(t){e.$set(e.formData,"pay_type",t)},expression:"formData.pay_type"}},e._l(e.details.pay_name_list,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.value))])})),1)],1),a("a-form-model-item",{attrs:{label:"房产类型",prop:"type_id"}},[a("a-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.type_id,callback:function(t){e.$set(e.formData,"type_id",t)},expression:"formData.type_id"}},e._l(e.details.type_list,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.value))])})),1)],1),a("a-form-model-item",{attrs:{label:"当前状态",prop:"process_id"}},[a("a-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.process_id,callback:function(t){e.$set(e.formData,"process_id",t)},expression:"formData.process_id"}},e._l(e.details.process_list,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.value))])})),1)],1),a("a-form-model-item",{attrs:{label:"备注"}},[a("a-textarea",{attrs:{placeholder:"请输入备注","auto-size":{minRows:3,maxRows:6}},model:{value:e.formData.note,callback:function(t){e.$set(e.formData,"note",t)},expression:"formData.note"}})],1)],1)],1):e._e()]),a("a-modal",{attrs:{centered:!0,destroyOnClose:"",title:"修改当前状态"},on:{ok:e.handleOk1},model:{value:e.visible1,callback:function(t){e.visible1=t},expression:"visible1"}},[e.details&&e.details.process_list.length>0?a("div",{staticClass:"newBox aaa"},[a("a-select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择"},on:{change:e.selectChangeAll}},e._l(e.details.process_list,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.value))])})),1)],1):e._e()])],1)},i=[],r=(a("4de4"),a("d3b7"),a("159b"),a("b64b"),a("2975")),o={data:function(){return{labelCol:{span:6},wrapperCol:{span:15},rules:{buyer_name:[{required:!0,message:"请输入客户姓名",trigger:"blur"}],buyer_phone:[{required:!0,message:"请输入客户手机号",trigger:"blur"}],referee_name:[{required:!0,message:"请输入推荐人姓名",trigger:"blur"}],referee_phone:[{required:!0,message:"请输入推荐人手机号",trigger:"blur"}],project_id:[{required:!0,message:"请选择项目名称",trigger:"blur"}],process_id:[{required:!0,message:"请选择当前状态",trigger:"blur"}],type_id:[{required:!0,message:"请选择房产类型",trigger:"blur"}],pay_type:[{required:!0,message:"请选择付款方式",trigger:"blur"}]},visible:!1,visible1:!1,selectNameType:[{label:"客户名称",value:1},{label:"客户手机号",value:2}],pay_name_list:[],process_list:[],project_list:[],type_list:[],details:null,selectedRowKeys:[],formData:{buyer_name:"",buyer_phone:"",referee_name:"",referee_phone:"",project_id:"",process_id:"",type_id:"",pay_type:"",note:""},titles:"新建",columns:[{title:this.L("客户姓名"),dataIndex:"buyer_name",ellipsis:!0},{title:this.L("客户手机号"),dataIndex:"buyer_phone"},{title:this.L("推荐人姓名"),dataIndex:"referee_name",ellipsis:!0},{title:this.L("推荐人手机号"),dataIndex:"referee_phone",ellipsis:!0},{title:this.L("推荐项目"),dataIndex:"project_name",ellipsis:!0},{title:this.L("房产类型"),dataIndex:"type_name",ellipsis:!0},{title:this.L("付款方式"),dataIndex:"pay_type",ellipsis:!0},{title:this.L("当前状态"),dataIndex:"process_name",width:170,scopedSlots:{customRender:"process_name"}},{title:this.L("佣金是否支付"),dataIndex:"commission_pay",scopedSlots:{customRender:"commission_pay"},ellipsis:!0},{title:this.L("录入日期"),dataIndex:"add_time",scopedSlots:{customRender:"add_time"}},{title:this.L("备注"),dataIndex:"note",scopedSlots:{customRender:"note"},ellipsis:!0},{title:this.L("置业顾问"),dataIndex:"account",scopedSlots:{customRender:"account"},ellipsis:!0},{title:this.L("操作"),width:150,scopedSlots:{customRender:"action"}}],dataList:[],keywords:"",paramsData:{page:1,page_size:10,type:1,search_kewords:"",search_process:0,search_project:0,search_type:0,search_pay_type:0,search_sdate:"",search_edate:"",user_id:0},pagination:{current:1,total:0,pageSize:10,onChange:this.onPageChange},process_id:"",btn_type:"",address:null,formDataId:"",userList:[],is_show:0}},created:function(){var e=this;this.request(r["a"].getOtherList).then((function(t){e.details=JSON.parse(JSON.stringify(t)),e.pay_name_list=t.pay_name_list,e.pay_name_list.unshift({id:0,value:"全部"}),e.process_list=t.process_list,e.process_list.unshift({id:0,value:"全部"}),e.project_list=t.project_list,e.project_list.unshift({id:0,value:"全部"}),e.type_list=t.type_list,e.type_list.unshift({id:0,value:"全部"}),e.request(r["a"].getUserList).then((function(t){e.userList=t.data,e.is_show=t.is_show}))})),this.getDataList()},methods:{switchOnChange:function(e,t){var a=this;this.request(r["a"].changeStatus,{id:t.id,status:e}).then((function(e){a.$message.success("修改状态成功"),a.getDataList()}))},batchModification:function(){0!=this.selectedRowKeys.length?this.visible1=!0:this.$message.warning("请选择单个或多个")},selectChangeAll:function(e){this.process_id=e},handleOk1:function(){this.setChangeProcess(this.selectedRowKeys)},setProcess_name:function(e){this.visible1=!0,this.selectedRowKeys=[e.id]},setChangeProcess:function(e){var t=this;this.request(r["a"].changeProcess,{id:e,process_id:this.process_id}).then((function(e){t.$message.success("修改状态成功"),t.selectedRowKeys=[],t.visible1=!1,t.getDataList()}))},selectChange:function(e,t){1==t?this.paramsData.search_project=e:2==t?this.paramsData.search_type=e:3==t?this.paramsData.search_process=e:4==t?this.paramsData.search_pay_type=e:"11"==t&&(this.formData.project_id=e,this.address=this.project_list.filter((function(t){return t.id==e}))[0])},onPickerChange:function(e,t){this.paramsData.search_sdate=t[0],this.paramsData.search_edate=t[1],this.getDataList()},getDataList:function(){var e=this;this.paramsData.page=this.pagination.current,this.paramsData.page_size=this.pagination.pageSize,this.request(r["a"].getWishList,this.paramsData).then((function(t){e.dataList=t.data,e.$set(e.pagination,"total",t.total)}))},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.getDataList()},toSetPage:function(e){var t=Math.ceil((this.pagination.total-(1==e?1:this.dataList.length))/this.pagination.pageSize);this.pagination.current=this.pagination.current>t?t:this.pagination.current,this.pagination.current=this.pagination.current<1?1:this.pagination.current},delPackage:function(e){var t=this;this.$confirm({title:"是否删除该条数据?",centered:!0,onOk:function(){t.request(r["a"].deleteWish,{id:[e.id]}).then((function(e){t.toSetPage(1),t.$message.success("删除成功"),t.getDataList()}))},onCancel:function(){}})},exportData:function(){var e=this;this.request(r["a"].exportData,this.paramsData).then((function(t){var a=t.filename;a&&window.open(a),e.$message.success({content:"下载成功!",key:"updatable",duration:2})}))},search:function(){this.pagination.current=1,this.getDataList()},addClick:function(){var e=this;this.titles="新建",this.visible=!0,this.btn_type="add",this.address=null,Object.keys(this.formData).forEach((function(t){return e.formData[t]=""}))},editTicket:function(e){var t=this;this.titles="编辑",this.btn_type="deit",this.request(r["a"].showWish,{id:e.id}).then((function(e){console.log(e),t.address=t.project_list.filter((function(t){return t.id==e.project_id}))[0],t.formDataId=e.id,t.visible=!0,t.formData=JSON.parse(JSON.stringify(e)),delete t.formData.add_time,delete t.formData.id,delete t.formData.commission_pay,delete t.formData.uid,delete t.formData.update_time}))},handleOk:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;"add"==e.btn_type?e.request(r["a"].addWish,e.formData).then((function(t){e.visible=!1,e.$message.success("添加成功"),e.getDataList()})):(e.formData.id=e.formDataId,e.request(r["a"].editWish,e.formData).then((function(t){e.visible=!1,e.$message.success("编辑成功"),e.getDataList()})))}))},onParkingChange:function(e){this.selectedRowKeys=e}}},l=o,n=(a("6346"),a("0c7c")),c=Object(n["a"])(l,s,i,!1,null,"a388a03e",null);t["default"]=c.exports},da4e:function(e,t,a){}}]);