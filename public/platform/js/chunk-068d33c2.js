(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-068d33c2","chunk-5785107a","chunk-2dc1c66e","chunk-faafbbec","chunk-2d0c06af"],{"006d":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[a("a-row",[a("div",{staticClass:"card_tab"},[a("span",{staticClass:"on"},[e._v("商家员工卡列表")])]),a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employeeCardConsume"}},[a("span",[e._v("核销列表")])])],1),a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employeeCardRechargeList"}},[a("span",[e._v("充值记录")])])],1),a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employeeBillList"}},[a("span",[e._v("财务报表")])])],1),a("div",{staticClass:"card_tab"},[a("router-link",{attrs:{to:"/merchant/merchant.life_tools/employeeClearScoreList"}},[a("span",[e._v("积分清零记录")])])],1)]),a("a-form-model",{attrs:{layout:"inline",model:e.searchForm}},[a("a-row",[a("a-col",{staticStyle:{display:"flex","align-items":"center"},attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"搜索"}},[a("a-input-group",{attrs:{compact:""}},[a("a-select",{staticStyle:{width:"100px","margin-top":"0px"},model:{value:e.searchForm.type,callback:function(t){e.$set(e.searchForm,"type",t)},expression:"searchForm.type"}},[a("a-select-option",{attrs:{value:0}},[e._v(" 手机号")]),a("a-select-option",{attrs:{value:1}},[e._v(" 会员名称")]),a("a-select-option",{attrs:{value:2}},[e._v(" 会员卡号")]),a("a-select-option",{attrs:{value:3}},[e._v(" 会员部门")]),a("a-select-option",{attrs:{value:4}},[e._v(" 会员身份")]),a("a-select-option",{attrs:{value:5}},[e._v(" 会员标签")])],1),a("a-input-search",{staticStyle:{width:"70%","margin-top":"1px"},attrs:{placeholder:"请输入搜索内容","enter-button":"查询"},on:{search:function(t){return e.getSportList()}},model:{value:e.searchForm.content,callback:function(t){e.$set(e.searchForm,"content",t)},expression:"searchForm.content"}})],1)],1),a("a-button",{attrs:{type:"primary",placement:"top"},on:{click:function(t){return e.doDel()}}},[e._v(" 批量删除 ")]),a("a-popconfirm",{staticClass:"ml-20",attrs:{placement:"top","ok-text":"确定","cancel-text":"取消"},on:{confirm:e.onOpenGroup}},[a("template",{slot:"title"},[a("p",[e._v("是否开启选中的列表？")])]),a("a-button",{attrs:{type:"primary"}},[e._v(" 批量开启")])],2),a("a-popconfirm",{staticClass:"ml-20",attrs:{placement:"top","ok-text":"确定","cancel-text":"取消"},on:{confirm:e.onCloseGroup}},[a("template",{slot:"title"},[a("p",[e._v("是否关闭选中的列表？")])]),a("a-button",{attrs:{type:"primary"}},[e._v(" 批量关闭")])],2),a("a-button",{staticClass:"ml-20",attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.getExport()}}},[e._v("导出")])],1),a("a-col",{attrs:{span:4}}),a("a-col",{attrs:{span:2}},[a("a-button",{staticStyle:{width:"100px","font-size":"10px","padding-left":"10px","text-align":"center"},attrs:{type:"primary"},on:{click:function(t){return e.employLable()}}},[e._v(" 身份标签管理")])],1),a("a-col",{attrs:{span:2}},[a("a-button",{staticStyle:{width:"80px","font-size":"10px","padding-left":"10px","text-align":"center"},attrs:{type:"primary"},on:{click:function(t){return e.employEdit()}}},[e._v(" 编辑员工卡")])],1),a("a-col",{attrs:{span:2}},[a("a-button",{staticClass:"maxbox",staticStyle:{width:"80px","font-size":"10px"},attrs:{type:"primary"},on:{click:function(t){return e.employUserAdd()}}},[e._v("新增会员")])],1),a("a-col",{attrs:{span:2}},[a("a-upload",{attrs:{name:"file",action:e.upload,headers:e.headers,data:{upload_dir:e.upload_dir},"file-list":e.avatarFileList,"before-upload":e.beforeUploadFile},on:{change:e.handleChangeUpload}},[a("a-button",{staticStyle:{width:"100px"},attrs:{type:"primary"}},[a("a-icon",{attrs:{type:"upload"}}),e._v(" 导入表格 ")],1)],1)],1)],1)],1),a("div",[a("a-row",[a("a-col",{attrs:{span:2}},[a("span",[e._v("示例表格")]),a("a",{staticStyle:{"margin-left":"20px"},attrs:{href:"/static/file/employee/demo.xls",target:"_blank"}},[e._v("点击下载")])])],1)],1),a("a-table",{attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,rowKey:"user_id","row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"status",fn:function(t,o){return a("span",{},[1==o.status?a("a",{staticClass:"ml-10 inline-block"},[e._v("开启")]):e._e(),0==o.status?a("a",{staticClass:"ml-10 inline-block"},[e._v("关闭")]):e._e()])}},{key:"action",fn:function(t,o){return a("span",{},[a("a",{staticClass:"ml-10 inline-block",on:{click:function(t){return e.checkAct(o.user_id,o.card_id)}}},[e._v("消费记录")]),a("a",{staticClass:"ml-10 inline-block",on:{click:function(t){return e.editAct(o.user_id)}}},[e._v("编辑")]),0==o.card_money?a("a",{staticClass:"ml-10 inline-block",on:{click:function(t){return e.delAct(o.user_id)}}},[e._v("删除")]):e._e()])}}])},[a("span",{attrs:{slot:"card_money"},slot:"card_money"},[e._v(" 会员卡余额 "),a("a-tooltip",{attrs:{trigger:"hover"}},[a("template",{slot:"title"},[e._v("会员卡余额总数量："+e._s(e.all_card_money))]),a("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1),a("span",{attrs:{slot:"card_score"},slot:"card_score"},[e._v(" 会员卡积分 "),a("a-tooltip",{attrs:{trigger:"hover"}},[a("template",{slot:"title"},[e._v("会员卡积分总金额："+e._s(e.all_card_score))]),a("a-icon",{staticClass:"ml-10",attrs:{type:"question-circle"}})],2)],1)]),a("export-add",{ref:"ExportAddModal",attrs:{exportUrl:e.exportUrl,queryParam:e.searchForm}}),a("edit-employee-card-user",{ref:"editEmployeeCardUser",on:{getSportList:e.getSportList}}),a("employee-card-order",{ref:"editEmployeeCardOrder",on:{getSportList:e.getSportList}}),a("employLable",{attrs:{visible:e.employLableVisible},on:{getDataList:e.getSportList,handleCancel:function(t){e.employLableVisible=!1}}}),a("a-modal",{attrs:{visible:e.delvisible,title:"批量删除",width:"20%"},on:{cancel:e.delCancel,ok:e.onDeleteGroup}},[e._v(" 员工卡余额大于0时不得删除，请先检查所选数据"),a("br"),e._v(" 当前登陆账号："+e._s(e.mer.account)),a("br"),e._v(" 输入账号密码验证："),a("a-input",{attrs:{type:"text"},model:{value:e.pass,callback:function(t){e.pass=t},expression:"pass"}})],1)],1)},r=[],s=a("c5bf"),n=(a("202f"),a("0808"),a("6944")),i=a.n(n),l=a("8bbf"),c=a.n(l),d=a("da05"),m=a("740d"),p=a("1a88"),u=a("29c1"),h=a("4261");c.a.use(i.a);var f=[{title:"会员名称",dataIndex:"name",scopedSlots:{customRender:"name"},align:"center"},{title:"会员卡号",dataIndex:"card_number",scopedSlots:{customRender:"card_number"},align:"center"},{title:"会员标签",dataIndex:"lables",slots:{customRender:"lables"},align:"center"},{title:"会员身份",dataIndex:"identity",slots:{customRender:"identity"},align:"center"},{title:"会员部门",dataIndex:"department",scopedSlots:{customRender:"department"},align:"center"},{title:"会员手机号",dataIndex:"phone",scopedSlots:{customRender:"phone"},align:"center"},{dataIndex:"card_money",slots:{title:"card_money"},align:"center"},{dataIndex:"card_score",slots:{title:"card_score"},align:"center"},{title:"会员卡状态",dataIndex:"status",scopedSlots:{customRender:"status"},align:"center"},{title:"操作",dataIndex:"user_id",key:"user_id",scopedSlots:{customRender:"action"}}],g={name:"EmployeeCardList",props:{upload_dir:{type:String,default:"employee_file"}},components:{EmployeeCardOrder:p["default"],EditEmployeeCardUser:m["default"],ACol:d["b"],employLable:u["default"],ExportAdd:h["default"]},data:function(){var e=this;return{selectedRowKeys:[],upload:"/v20/public/index.php/common/common.UploadFile/uploadFile",employLableVisible:!1,avatarFileList:[],headers:{authorization:"authorization-text"},total_num:0,visible:!1,columns:f,data:[],areaList:[],card_id:0,formData:{},searchForm:{type:0,content:""},all_card_money:0,all_card_score:0,delvisible:!1,pass:"",mer:[],exportUrl:s["a"].exportUserCardList,pagination:{page:1,current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:function(t,a){return e.onPageChange(t,a)},onShowSizeChange:function(t,a){return e.onPageSizeChange(t,a)},showTotal:function(e){return"共 ".concat(e," 条")}}}},activated:function(){this.getSportList()},created:function(){this.getSportList()},methods:{onSelectChange:function(e){console.log("selectedRowKeys changed: ",e),this.selectedRowKeys=e},delCancel:function(){this.pass="",this.delvisible=!1},doDel:function(){if(!this.selectedRowKeys||0===this.selectedRowKeys.length)return this.$message.warning("请选择要删除的列表"),!1;this.delvisible=!0},onDeleteGroup:function(){var e=this;if(console.log(this.selectedRowKeys,"-----批量删除----------"),!this.selectedRowKeys||0===this.selectedRowKeys.length)return this.$message.warning("请选择要删除的列表"),!1;""==this.pass&&this.$message.warning("请输入账号密码"),this.request(s["a"].delUserCard,{user_ids:this.selectedRowKeys,pass:this.pass}).then((function(t){console.log(t),e.data=[],e.selectedRowKeys=[],e.getSportList(),e.$message.success("删除成功"),e.delvisible=!1}))},onOpenGroup:function(){var e=this;if(!this.selectedRowKeys||0===this.selectedRowKeys.length)return this.$message.warning("请选择要开启的列表"),!1;this.request(s["a"].openUserCard,{user_ids:this.selectedRowKeys}).then((function(t){console.log(t),e.data=[],e.selectedRowKeys=[],e.getSportList(),e.$message.success("操作成功")}))},onCloseGroup:function(){var e=this;if(!this.selectedRowKeys||0===this.selectedRowKeys.length)return this.$message.warning("请选择要关闭的列表"),!1;this.request(s["a"].closeUserCard,{user_ids:this.selectedRowKeys}).then((function(t){console.log(t),e.data=[],e.selectedRowKeys=[],e.getSportList(),e.$message.success("操作成功")}))},reset:function(){this.data=[],this.getSportList()},beforeUploadFile:function(e){var t=e.size/1024/1024<20;return t?this.fileloading?(this.$message.warning("当前还有文件上传中，请等候上传完成!"),!1):t:(this.$message.error("上传图片最大支持20MB!"),!1)},handleChangeUpload:function(e){var t=this;if(console.log("########",e),e.file&&!e.file.status&&this.fileloading)return!1;if("uploading"===e.file.status){if(this.fileloading)return!1;this.fileloading=!0,this.avatarFileList=e.fileList}if("uploading"!==e.file.status&&(this.fileloading=!1,console.log(e.file,e.fileList)),"done"==e.file.status&&e.file&&e.file.response){var a=e.file.response;if(1e3===a.status){var o=a.data;this.avatarFileList=[],console.log("--------",a.data.url),this.request(s["a"].loadExcel,{fileUrl:o,card_id:this.card_id}).then((function(e){t.$message.success("上传成功"),t.getSportList()}))}}"removed"==e.file.status&&e.file&&console.log("data_arr1",this.data_arr)},employEdit:function(){this.$router.push({path:"/merchant/merchant.employee/editEmployeeCard"})},editAct:function(e){this.$refs.editEmployeeCardUser.edit(e)},checkAct:function(e,t){this.$refs.editEmployeeCardOrder.edit(e,t)},employUserAdd:function(){if(!this.card_id)return this.$message.error("请先编辑商家卡"),!1;this.$refs.editEmployeeCardUser.add(this.card_id)},getSportList:function(){var e=this;this.request(s["a"].getUserCardList,this.searchForm).then((function(t){e.data=t.list,e.total_num=t.total,e.card_id=t.card_id,e.all_card_money=t.all_card_money,e.all_card_score=t.all_card_score,e.$set(e.pagination,"total",t.total),e.mer=t.mer}))},delAct:function(e){var t=this;this.$confirm({title:"是否删除会员",content:"",okText:"确认",cancelText:"取消",onOk:function(){t.request(s["a"].delData,{user_id:e}).then((function(e){t.getSportList()}))},onCancel:function(){t.currentBtn=""},class:"test"})},handleUpdate:function(){this.getSportList()},handleTableChange:function(e){e.current&&e.current>0&&(this.pagination["page"]=e.current)},onPageChange:function(e,t){this.pagination.page=e,this.$set(this.pagination,"current",e)},onPageSizeChange:function(e,t){this.$set(this.pagination,"pageSize",t)},employLable:function(){this.employLableVisible=!0},getExport:function(){this.data.length>0?this.$refs.ExportAddModal.exports():this.$message.warn("当前没有可以导出的内容")}}},y=g,b=(a("db08"),a("0c7c")),_=Object(b["a"])(y,o,r,!1,null,"63797a8c",null);t["default"]=_.exports},"1a88":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:940,visible:e.visible,confirmLoading:e.confirmLoading,footer:null},on:{cancel:e.handleCancelModel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",{attrs:{layout:"inline",model:e.searchForm}},[a("a-row",[a("a-col",{attrs:{span:2,align:"right"}},[a("span",{staticClass:"label"},[e._v("消费类型：")])]),a("a-col",{staticStyle:{"padding-right":"10px"},attrs:{span:3}},[a("a-select",{model:{value:e.searchForm.verify_type,callback:function(t){e.$set(e.searchForm,"verify_type",t)},expression:"searchForm.verify_type"}},[a("a-select-option",{attrs:{value:0}},[e._v("全部")]),a("a-select-option",{attrs:{value:1}},[e._v("食堂刷卡")]),a("a-select-option",{attrs:{value:2}},[e._v("自动核销")]),a("a-select-option",{attrs:{value:3}},[e._v("余额消费")]),a("a-select-option",{attrs:{value:4}},[e._v("积分消费")])],1)],1),a("a-col",{attrs:{span:2,align:"right"}},[a("span",{staticClass:"label"},[e._v("变动类型：")])]),a("a-col",{staticStyle:{"padding-right":"10px"},attrs:{span:3}},[a("a-select",{model:{value:e.searchForm.change_type,callback:function(t){e.$set(e.searchForm,"change_type",t)},expression:"searchForm.change_type"}},[a("a-select-option",{attrs:{value:0}},[e._v("全部")]),a("a-select-option",{attrs:{value:1}},[e._v("增加")]),a("a-select-option",{attrs:{value:2}},[e._v("减少")])],1)],1),a("a-col",{attrs:{span:2,align:"right"}},[a("span",{staticClass:"label"},[e._v("消费时间：")])]),a("a-col",{attrs:{span:10}},[a("a-range-picker",{attrs:{ranges:{"过去30天":[e.moment().subtract(30,"days"),e.moment()],"过去15天":[e.moment().subtract(15,"days"),e.moment()],"过去7天":[e.moment().subtract(7,"days"),e.moment()],"今日":[e.moment(),e.moment()]},value:e.searchForm.time,"show-time":{hideDisabledOptions:!0,defaultValue:[e.moment("00:00","HH:mm"),e.moment("23:59","HH:mm")],format:"HH:mm"},format:"YYYY-MM-DD HH:mm"},on:{change:e.onDateRangeChange}})],1),a("a-col",{attrs:{span:2}},[a("a-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:function(t){return e.submitForm(!0)}}},[e._v("搜索")])],1)],1)],1),a("br"),a("a-table",{attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,rowKey:"order_id"},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"type",fn:function(t,o){return a("span",{},["1"==o.verify_type?a("a",{staticClass:"ml-10 inline-block"},[e._v("食堂刷卡")]):e._e(),"2"==o.verify_type?a("a",{staticClass:"ml-10 inline-block"},[e._v("自动核销")]):e._e(),"3"==o.verify_type?a("a",{staticClass:"ml-10 inline-block"},[e._v("余额消费")]):e._e(),"4"==o.verify_type?a("a",{staticClass:"ml-10 inline-block"},[e._v("积分消费")]):e._e()])}},{key:"change_type",fn:function(t,o){return a("span",{},["increase"==o.change_type?a("a",{staticClass:"ml-10 inline-block"},[e._v("增加")]):e._e(),"success"==o.change_type?a("a",{staticClass:"ml-10 inline-block"},[e._v("减少")]):e._e(),"decrease"==o.change_type?a("a",{staticClass:"ml-10 inline-block"},[e._v("减少")]):e._e()])}}])})],1)],1)},r=[],s=a("c5bf"),n=(a("202f"),a("0808"),a("6944")),i=a.n(n),l=a("8bbf"),c=a.n(l),d=a("da05"),m=a("c1df"),p=a.n(m);c.a.use(i.a);var u=[{title:"编号",dataIndex:"pigcms_id",scopedSlots:{customRender:"pigcms_id"},align:"center"},{title:"消费类型",dataIndex:"type",scopedSlots:{customRender:"type"},align:"center"},{title:"变动类型",dataIndex:"change_type",scopedSlots:{customRender:"change_type"},align:"center"},{title:"展示的信息",dataIndex:"description",slots:{customRender:"description"},align:"center"},{title:"消费时间",dataIndex:"add_time",slots:{customRender:"add_time"},align:"center"}],h={name:"employeeCardOrder",components:{ACol:d["b"]},data:function(){var e=this;return{title:"消费列表",total_num:0,visible:!1,confirmLoading:!0,columns:u,data:[],card_id:0,formData:{},searchForm:{type:0,content:"",time:[],begin_time:"",end_time:"",user_id:0,card_id:0,verify_type:0,change_type:0},pagination:{page:1,current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:function(t,a){return e.onPageChange(t,a)},onShowSizeChange:function(t,a){return e.onPageSizeChange(t,a)},showTotal:function(e){return"共 ".concat(e," 条")}}}},methods:{moment:p.a,edit:function(e,t){this.$set(this.searchForm,"user_id",e),this.$set(this.searchForm,"card_id",t),this.searchForm.verify_type=0,this.searchForm.change_type=0,this.getDataList()},getDataList:function(){var e=this;this.request(s["a"].orderList,this.searchForm).then((function(t){e.visible=!0,e.confirmLoading=!1,e.data=t.list,e.total_num=t.total,e.$set(e.pagination,"total",t.total)}))},submitForm:function(){this.$set(this.pagination,"current",1),this.getDataList()},handleTableChange:function(e){e.current&&e.current>0&&(this.pagination["page"]=e.current)},onPageChange:function(e,t){this.pagination.page=e,this.$set(this.pagination,"current",e)},onPageSizeChange:function(e,t){this.$set(this.pagination,"pageSize",t)},handleCancelModel:function(){this.searchForm={type:0,content:"",time:[],begin_time:"",end_time:""},this.visible=!1},onDateRangeChange:function(e,t){this.$set(this.searchForm,"time",[e[0],e[1]]),this.$set(this.searchForm,"begin_time",t[0]),this.$set(this.searchForm,"end_time",t[1])}}},f=h,g=(a("3766"),a("0c7c")),y=Object(g["a"])(f,o,r,!1,null,"58a87fd0",null);t["default"]=y.exports},"29b2":function(e,t,a){},"29c1":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{visible:e.visible,title:"身份标签列表",width:"40%"},on:{cancel:e.handleCancel,ok:e.handleOk}},[a("div",{staticStyle:{padding:"20px","background-color":"#fff"}},[a("a-form-model",{attrs:{layout:"inline",model:e.searchForm}},[a("a-form-model-item",[a("a-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("添加")])],1)],1),a("a-table",{attrs:{rowKey:"id",columns:e.columns,"data-source":e.datalist,pagination:e.pagination,bordered:""},scopedSlots:e._u([{key:"name",fn:function(t,o){return[a("a-input",{staticClass:"sort-input",attrs:{"default-value":t},on:{blur:function(a){return e.handleNameChange(a,t,o)}},model:{value:o.name,callback:function(t){e.$set(o,"name",t)},expression:"record.name"}})]}},{key:"action",fn:function(t,o){return a("span",{},[a("a",{on:{click:function(t){return e.showBindStore(o.id,o.bind_store_id,o.name)}}},[e._v("绑定店铺")]),e._v("  "),a("a-popconfirm",{attrs:{title:"确认删除？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(t){return e.handleDel(o.id)}}},[a("a",{attrs:{href:"#"}},[e._v("删除")])])],1)}}])}),a("a-modal",{attrs:{title:"添加身份标签",visible:e.addVisible,width:"500px"},on:{cancel:e.setCancel}},[a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:e.setCancel}},[e._v(" 取消 ")]),a("a-button",{key:"submit",attrs:{type:"primary"},on:{click:e.addOk}},[e._v(" 确定 ")])],1),a("a-form-model",{attrs:{layout:"horizontal",model:e.addForm,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"身份名称"}},[a("a-input",{attrs:{placeholder:"身份名称"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1)],1)],2),a("a-modal",{attrs:{title:"绑定店铺",visible:e.bindStoreVisible,width:"500px"},on:{cancel:e.bindStoreCancel}},[a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:e.bindStoreCancel}},[e._v(" 取消 ")]),a("a-button",{attrs:{type:"primary"},on:{click:e.bindStoreOk}},[e._v(" 确定 ")])],1),a("a-form-model",{attrs:{layout:"horizontal",model:e.addForm,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"身份名称"}},[a("a-input",{attrs:{placeholder:"身份名称",disabled:""},model:{value:e.bindStoreForm.name,callback:function(t){e.$set(e.bindStoreForm,"name",t)},expression:"bindStoreForm.name"}})],1),a("a-form-item",{attrs:{label:"店铺列表"}},[a("a-checkbox-group",{model:{value:e.bindStoreForm.store_ids,callback:function(t){e.$set(e.bindStoreForm,"store_ids",t)},expression:"bindStoreForm.store_ids"}},[a("a-row",[a("a-col",{staticStyle:{"line-height":"40px"},attrs:{span:24}},e._l(e.storeList,(function(t,o){return a("a-checkbox",{attrs:{value:o},on:{change:e.ckeckBindStore}},[e._v(" "+e._s(t)+" ")])})),1)],1)],1)],1)],1)],2)],1)])},r=[],s=a("5530"),n=(a("b0c0"),a("a434"),a("c5bf")),i=[{title:"序号",dataIndex:"id",key:"id"},{title:"身份名称",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],l={props:{visible:Boolean,title:String,scanId:null},data:function(){return{datalist:[],dateRange:[],storeList:[],selectStoreList:[],addVisible:!1,bindStoreVisible:!1,addForm:{name:""},bindStoreForm:{label_id:0,name:"",store_ids:[]},labelCol:{span:4},wrapperCol:{span:14},columns:i,searchForm:{},pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(e){return"共 ".concat(e," 条记录")}}}},created:function(){this.getDataList(!1),this.getStoreList()},methods:{getDataList:function(e){var t=this,a=Object(s["a"])({},this.searchForm);!0===e?(a.page=1,this.$set(this.pagination,"current",1)):(a.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),a.pageSize=this.pagination.pageSize,this.request(n["a"].employLableList,a).then((function(e){t.datalist=e.data,t.$set(t.pagination,"total",e.total)}))},getStoreList:function(){var e=this;this.request(n["a"].getStoreList).then((function(t){e.storeList=t}))},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.submitForm()},onPageSizeChange:function(e,t){this.$set(this.pagination,"pageSize",t),this.submitForm()},handleOk:function(){this.$emit("handleCancel")},handleCancel:function(){this.$emit("handleCancel")},handleNameChange:function(e,t,a){var o=this,r={id:a.id,name:t};this.request(n["a"].employLableAddOrEdit,r).then((function(e){o.getDataList()}))},handleAdd:function(){this.addVisible=!0},setCancel:function(){this.$set(this.addForm,"name",""),this.addVisible=!1},addOk:function(){var e=this;if(""==this.addForm.name)return this.$message.error("身份名称必填"),!1;this.request(n["a"].employLableAddOrEdit,this.addForm,"POST").then((function(t){e.$message.success("添加成功!",1),setTimeout((function(){e.setCancel(),e.getDataList()}),1e3)}))},handleDel:function(e){var t=this;this.request(n["a"].employLableDel,{id:e},"POST").then((function(e){t.$message.success("删除成功!",1),t.getDataList()}))},bindStoreOk:function(){var e=this;this.request(n["a"].lableBindStore,this.bindStoreForm).then((function(t){e.$message.success("操作成功"),e.bindStoreForm.label_id=0,e.bindStoreForm.store_ids=[],e.bindStoreVisible=!1,e.getDataList()}))},bindStoreCancel:function(){this.bindStoreForm.label_id=0,this.bindStoreForm.store_ids=[],this.bindStoreVisible=!1},showBindStore:function(e,t,a){this.bindStoreVisible=!0,this.bindStoreForm.label_id=e,this.bindStoreForm.store_ids=t,this.bindStoreForm.name=a},ckeckBindStore:function(e){var t=parseInt(e.target.value),a=this.bindStoreForm.store_ids.indexOf(t);e.target.checked&&-1===a&&this.bindStoreForm.store_ids.push(t),e.target.checked||-1===a||this.bindStoreForm.store_ids.splice(a,1)}}},c=l,d=a("0c7c"),m=Object(d["a"])(c,o,r,!1,null,null,null);t["default"]=m.exports},3766:function(e,t,a){"use strict";a("29b2")},4261:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"primary"}},[e._v(" Open the message box ")])},r=[],s={downloadExportFile:"/common/common.export/downloadExportFile"},n=s,i="updatable",l={props:{exportUrl:"",queryParam:{}},data:function(){return{file_date:"",file_url:""}},mounted:function(){},methods:{exports:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中,请耐心等待,数量越多时间越长。";this.request(this.exportUrl,this.queryParam).then((function(a){e.$message.loading({content:t,key:i,duration:0}),console.log("添加导出计划任务成功"),e.file_url=n.downloadExportFile+"?id="+a.export_id,e.file_date=a,e.CheckStatus()}))},CheckStatus:function(){var e=this;this.request(this.file_url,{id:this.file_date.export_id}).then((function(t){0==t.error?(e.$message.success({content:"下载成功!",key:i,duration:2}),location.href=t.url):setTimeout((function(){e.CheckStatus(),console.log("重复请求")}),1e3)}))}}},c=l,d=a("0c7c"),m=Object(d["a"])(c,o,r,!1,null,"dd2f8128",null);t["default"]=m.exports},"740d":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:940,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancelModel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{staticStyle:{"max-height":"600px","overflow-y":"scroll"},attrs:{form:e.formData}},[a("a-form-item",{attrs:{label:"会员手机号",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("a-input",{attrs:{placeholder:"请输入会员手机号",oninput:"if(value.length > 11)value = value.slice(0, 11)",type:"number",disabled:e.is_dis},on:{blur:function(t){return e.handleChange()}},model:{value:e.formData.phone,callback:function(t){e.$set(e.formData,"phone",t)},expression:"formData.phone"}})],1),a("a-form-item",{attrs:{label:"会员名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("a-input",{attrs:{placeholder:"请输入会员名称"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("a-form-item",{attrs:{label:"会员卡号",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("a-input",{attrs:{placeholder:"请输入会员卡号"},model:{value:e.formData.card_number,callback:function(t){e.$set(e.formData,"card_number",t)},expression:"formData.card_number"}})],1),a("a-form-item",{attrs:{label:"会员身份",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("a-input",{attrs:{placeholder:"请输入会员身份"},model:{value:e.formData.identity,callback:function(t){e.$set(e.formData,"identity",t)},expression:"formData.identity"}})],1),a("a-form-item",{attrs:{label:"会员部门",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:!0}},[a("a-input",{attrs:{placeholder:"请输入会员部门"},model:{value:e.formData.department,callback:function(t){e.$set(e.formData,"department",t)},expression:"formData.department"}})],1),a("a-form-item",{attrs:{label:"会员卡余额",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{attrs:{placeholder:"请输入会员卡余额"},model:{value:e.formData.card_money,callback:function(t){e.$set(e.formData,"card_money",t)},expression:"formData.card_money"}})],1),a("a-form-item",{attrs:{label:"会员卡积分数量",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{attrs:{placeholder:"请输入会员卡积分数量"},model:{value:e.formData.card_score,callback:function(t){e.$set(e.formData,"card_score",t)},expression:"formData.card_score"}})],1),a("a-form-item",{attrs:{label:"绑定身份标签",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-select",{attrs:{mode:"multiple"},model:{value:e.formData.lable_ids,callback:function(t){e.$set(e.formData,"lable_ids",t)},expression:"formData.lable_ids"}},e._l(e.lableList,(function(t){return a("a-select-option",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关",checked:1==e.formData.status},on:{change:e.isStatusChange}})],1)],1)],1)],1)},r=[],s=(a("b0c0"),a("c5bf")),n={name:"editEmployeeCardUser",data:function(){return{title:"添加员工卡",phone_check:!0,is_dis:!1,lableList:[],formData:{card_id:0,card_number:"",user_id:0,name:"",identity:"",status:1,department:"",phone:"",uid:0,card_money:0,card_score:0,lable_ids:void 0},visible:!1,confirmLoading:!1,labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}}}},created:function(){this.getLableList()},watch:{formData:function(){this.getLableList()}},methods:{edit:function(e){var t=this;this.getLableList(),this.request(s["a"].editCardUser,{user_id:e}).then((function(e){t.$nextTick((function(){Object.assign(t.$data,t.$options.data.call(t)),t.title="编辑员工卡",t.is_dis=!0,t.confirmLoading=!1,t.visible=!0,t.$set(t,"formData",e.user)}))}))},add:function(e){this.is_dis=!1,this.visible=!0,this.title="添加员工卡",this.formData={card_id:e,card_number:"",user_id:0,name:"",identity:"",status:1,department:"",phone:"",uid:0,card_money:0,card_score:0,lable_ids:void 0},this.$set(this,"formData",this.formData),this.getLableList()},getLableList:function(){var e=this;this.request(s["a"].employLableList,{page:0}).then((function(t){console.log(12121212,t.data),e.lableList=t.data,console.log(11111,e.lableList)}))},isStatusChange:function(e){this.formData.status=e?1:0},handleChange:function(){var e=this;""!=this.formData.phone&&void 0!=this.formData.phone&&null!=this.formData.phone&&this.request(s["a"].findUser,{phone:this.formData.phone,card_id:this.formData.card_id}).then((function(t){1*t.status==1?(e.phone_check=!0,e.formData.uid=t.data.uid,e.formData.name=t.data.nickname):1*t.status==2?(e.phone_check=!0,e.formData.uid=0,e.formData.name=void 0):(e.phone_check=!1,e.$message.error(t.msg),e.formData.uid=0,e.formData.name=void 0)}))},handleSubmit:function(){var e=this;return this.phone_check?""==this.formData.name?(this.$message.error("员工名称必填"),!1):""==this.formData.card_number?(this.$message.error("卡号必填"),!1):""==this.formData.phone?(this.$message.error("手机号号必填"),!1):""==this.formData.department?(this.$message.error("部门必填"),!1):""==this.formData.identity?(this.$message.error("身份必填"),!1):void this.request(s["a"].saveCardUser,this.formData).then((function(t){e.$message.success("成功"),e.lableList=[],e.visible=!1,e.$emit("getSportList")})):(this.$message.error("请输入正确手机号"),!1)},handleCancelModel:function(){this.lableList=[],this.visible=!1,this.$emit("getSportList")}}},i=n,l=a("0c7c"),c=Object(l["a"])(i,o,r,!1,null,"52597023",null);t["default"]=c.exports},afc9:function(e,t,a){},c5bf:function(e,t,a){"use strict";var o={getCardList:"/employee/merchant.EmployeeCard/getCardList",editCard:"/employee/merchant.EmployeeCard/editCard",saveCard:"/employee/merchant.EmployeeCard/saveCard",getCouponList:"/employee/merchant.EmployeeCard/getCouponList",editCoupon:"/employee/merchant.EmployeeCard/editCoupon",saveCoupon:"/employee/merchant.EmployeeCard/saveCoupon",delCoupon:"/employee/merchant.EmployeeCard/delCoupon",getUserCardList:"/employee/merchant.EmployeeCardUser/getUserCardList",exportUserCardList:"/employee/merchant.EmployeeCardUser/exportUserCardList",editCardUser:"/employee/merchant.EmployeeCardUser/editCardUser",saveCardUser:"/employee/merchant.EmployeeCardUser/saveCardUser",delData:"/employee/merchant.EmployeeCardUser/delData",findUser:"/employee/merchant.EmployeeCardUser/findUser",loadExcel:"/employee/merchant.EmployeeCardUser/loadExcel",orderList:"/employee/merchant.EmployeeCardUser/orderList",cardLogList:"/employee/merchant.EmployeeCard/cardLogList",cardLogStorestaffList:"/employee/storestaff.EmployeeCardOrder/cardLogList",paymentScan:"/employee/storestaff.EmployeePayCode/deductions",cardLogExport:"/employee/merchant.EmployeeCard/export",employLableList:"/employee/merchant.EmployeeCardUser/employLableList",employLableAddOrEdit:"/employee/merchant.EmployeeCardUser/employLableAddOrEdit",employLableDel:"/employee/merchant.EmployeeCardUser/employLableDel",dataStatistics:"/employee/merchant.EmployeeCardLog/dataStatistics",getStoreConsumerList:"/employee/merchant.EmployeeCardLog/getStoreConsumerList",dataRechargeStatistics:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderStatistics",dataRechargeStatisticsExport:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderStatisticsExport",dataRechargeOrderExport:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderExport",paymentMode:"/employee/merchant.EmployeeCardOrder/getPayType",getOrderList:"/employee/merchant.EmployeeCardOrder/getEmployeeOrderList",refundMoney:"/employee/merchant.EmployeeCardOrder/employeeOrderRefund",employeeCouponRefund:"/employee/merchant.EmployeeCardLog/employeeCouponRefund",isOpenUseMoney:"/employee/merchant.EmployeeCard/isOpenUseMoney",getLabelList:"/employee/merchant.EmployeeCardUser/getLabelList",getSendCouponDateList:"/employee/merchant.EmployeeCard/getSendCouponDateList",getCalcDateList:"/employee/merchant.EmployeeCard/getCalcDateList",getStaffDataStatistics:"/employee/storestaff.EmployeeCardLog/dataStatistics",delUserCard:"/employee/merchant.EmployeeCardUser/delUserCard",openUserCard:"/employee/merchant.EmployeeCardUser/openUserCard",closeUserCard:"/employee/merchant.EmployeeCardUser/closeUserCard",getClearScoreList:"/employee/merchant.EmployeeCard/getClearScoreList",staffRefundMoney:"/employee/storestaff.EmployeeCardOrder/employeeOrderRefund",openOrCloseUserCard:"/employee/merchant.EmployeeCardUser/openOrCloseUserCard",getStoreList:"/employee/merchant.EmployeeCardUser/getStoreList",lableBindStore:"/employee/merchant.EmployeeCardUser/lableBindStore"};t["a"]=o},db08:function(e,t,a){"use strict";a("afc9")}}]);