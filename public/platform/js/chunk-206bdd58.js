(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-206bdd58","chunk-0436e629"],{"4e48":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:"60%",visible:t.visible,bodyStyle:{height:"600px","overflow-y":"scroll"}},on:{cancel:t.handleCancel}},[a("a-card",{attrs:{bordered:!1}},[a("a-form",{staticClass:"form-content",attrs:{layout:"inline"}},[a("a-row",{attrs:{type:"flex",justify:"space-between"}},[a("a-col",[a("a-form-item",[a("a-input",{staticStyle:{width:"180px"},attrs:{"allow-clear":"",placeholder:"请输入修改人"},model:{value:t.queryParam.keywords,callback:function(e){t.$set(t.queryParam,"keywords",e)},expression:"queryParam.keywords"}})],1),a("a-form-item",{attrs:{label:"修改时间"}},[a("a-range-picker",{attrs:{allowClear:!0},on:{change:t.onDateChange},model:{value:t.search_date,callback:function(e){t.search_date=e},expression:"search_date"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),a("a-form-item",[a("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchBtn()}}},[t._v("搜索")])],1)],1)],1)],1),a("div",{staticClass:"table-content"},[a("a-table",{attrs:{columns:t.columns,"data-source":t.data,rowKey:"id",pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"edit_people",fn:function(e){return a("span",{},[a("a-tooltip",{attrs:{placement:"top",title:e}},[a("label",{staticClass:"simple-title text-els"},[t._v(t._s(e))])])],1)}},{key:"pre_content",fn:function(e,n){return a("span",{},["images"==n.type||"cover_image"==n.type?a("img",{staticClass:"image-change",attrs:{src:e}}):t._e(),"images"!=n.type&&"cover_image"!=n.type?a("span",[a("a-tooltip",{attrs:{placement:"top",title:e}},[a("label",{staticClass:"simple-title text-els"},[t._v(" "+t._s(e||"--")+" ")])])],1):t._e()])}},{key:"content",fn:function(e,n){return a("span",{},["images"==n.type||"cover_image"==n.type?a("img",{staticClass:"image-change",attrs:{src:e}}):t._e(),"images"!=n.type&&"cover_image"!=n.type?a("span",[a("a-tooltip",{attrs:{placement:"top",title:e}},[a("label",{staticClass:"simple-title text-els"},[t._v(" "+t._s(e||"--")+" ")])])],1):t._e()])}}])})],1)],1),a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:t.handleCancel}},[t._v(" 关闭 ")])],1)],2)},i=[],s=a("b706"),o=a("c1df"),l=a.n(o),r=[],c={data:function(){return{title:this.L("修改日志"),visible:!1,search_date:[],queryParam:{keywords:"",start_time:"",end_time:""},pagination:{pageSize:6,total:0,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-quick-jumper":!0},page:1,columns:[{title:"修改人",dataIndex:"edit_people",scopedSlots:{customRender:"edit_people"}},{title:"修改时间",dataIndex:"add_time_txt"},{title:"修改项目",dataIndex:"title"},{title:"变更前",dataIndex:"pre_content",scopedSlots:{customRender:"pre_content"}},{title:"变更后",dataIndex:"content",scopedSlots:{customRender:"content"}}],data:r}},mounted:function(){},methods:{moment:l.a,show:function(t){this.visible=!0,this.queryParam.banking_id=t,this.page=1,this.getList()},handleCancel:function(){this.visible=!1},getList:function(){var t=this;this.queryParam["page"]=this.page,this.request(s["a"].getBankingLogList,this.queryParam).then((function(e){t.data=e.data,t.pagination.total=e.total}))},searchBtn:function(){this.page=1,this.getList()},onDateChange:function(t,e){this.queryParam.start_time=e[0],this.queryParam.end_time=e[1]},tableChange:function(t,e,a){this.queryParam["pageSize"]=t.pageSize,this.queryParam["page"]=t.current,t.current&&t.current>0&&(this.page=t.current),this.getList()}}},d=c,p=(a("95bf"),a("0c7c")),u=Object(p["a"])(d,n,i,!1,null,"2d0dc16a",null);e["default"]=u.exports},"71d6":function(t,e,a){"use strict";a("c1bd")},"95bf":function(t,e,a){"use strict";a("c815")},a8ec:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-tabs",{attrs:{"default-active-key":"loans"},on:{change:t.callback},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[a("a-tab-pane",{key:"loans",attrs:{tab:"贷款"}}),a("a-tab-pane",{key:"credit_card",attrs:{tab:"信用卡","force-render":""}}),a("a-tab-pane",{key:"ecard",attrs:{tab:"E支付","force-render":""}}),a("a-tab-pane",{key:"deposit",attrs:{tab:"存款","force-render":""}})],1),a("a-card",{attrs:{bordered:!1}},[a("a-form",{staticClass:"form-content",attrs:{layout:"inline"}},[a("a-row",{attrs:{type:"flex",justify:"space-between"}},[a("a-col",[a("a-form-item",["loans"==t.type?a("a-select",{staticStyle:{width:"110px"},attrs:{"default-value":"queryParam.search_type"},on:{change:t.changeSearchType},model:{value:t.queryParam.search_type,callback:function(e){t.$set(t.queryParam,"search_type",e)},expression:"queryParam.search_type"}},t._l(t.catArr,(function(e){return a("a-select-option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.name))])})),1):t._e(),a("a-input",{staticStyle:{width:"235px"},attrs:{"allow-clear":"",placeholder:t.placeholder},model:{value:t.queryParam.keywords,callback:function(e){t.$set(t.queryParam,"keywords",e)},expression:"queryParam.keywords"}})],1),"loans"==t.type?a("a-form-item",{attrs:{label:"贷款类型"}},[a("a-select",{staticStyle:{width:"110px"},attrs:{"default-value":"queryParam.loans_type"},model:{value:t.queryParam.loans_type,callback:function(e){t.$set(t.queryParam,"loans_type",e)},expression:"queryParam.loans_type"}},t._l(t.loansTypeArr,(function(e){return a("a-select-option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.name)+" ")])})),1)],1):t._e(),a("a-form-item",[a("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchBtn()}}},[t._v("搜索")])],1)],1),a("a-col",[a("a-form-item",[a("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"danger"},on:{click:function(e){return t.delBanking()}}},[t._v("删除")])],1),a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.edit()}}},[t._v("新建"+t._s(t.typeArr[t.type]))])],1)],1)],1)],1),a("div",{staticClass:"message-suggestions-list-box"},[a("a-table",{staticClass:"components-table-demo-nested",staticStyle:{"min-height":"700px"},attrs:{columns:t.columns,"data-source":t.data,rowKey:"banking_id",pagination:t.pagination,"row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}},on:{change:t.tableChange},scopedSlots:t._u([{key:"banking_title",fn:function(e){return a("span",{},[a("a-tooltip",{attrs:{placement:"top",title:e}},[a("label",{staticClass:"banking_title text-els"},[t._v(t._s(e))])])],1)}},{key:"loans_method",fn:function(e){return a("span",{},[a("a-tooltip",{attrs:{placement:"top",title:e}},[a("label",{staticClass:"banking_title text-els"},[t._v(t._s(e))])])],1)}},{key:"loans_repayment_method",fn:function(e){return a("span",{},[a("a-tooltip",{attrs:{placement:"top",title:e}},[a("label",{staticClass:"banking_title text-els"},[t._v(t._s(e))])])],1)}},{key:"label",fn:function(e){return a("span",{},[a("a-tooltip",{attrs:{placement:"top",title:e}},[a("label",{staticClass:"banking_title text-els"},[t._v(t._s(e))])])],1)}},{key:"introduce",fn:function(e){return a("span",{},[a("a-tooltip",{attrs:{placement:"top",title:e}},[a("label",{staticClass:"banking_title text-els"},[t._v(t._s(e))])])],1)}},{key:"edit_log",fn:function(e,n){return a("span",{},[a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.$refs.BankingEditLogModal.show(n.banking_id)}}},[t._v("查看详情")])],1)}},{key:"loans_type_txt",fn:function(e,n){return a("span",{},[a("a-badge",{attrs:{status:1==n.loans_type?"success":"processing"}}),t._v(t._s(e)+" ")],1)}},{key:"deposit_term",fn:function(e,n){return a("span",{},[t._v(" "+t._s(e)+t._s(n.deposit_term_type_txt)+" ")])}},{key:"action",fn:function(e,n){return a("span",{},[a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.delBanking(n.banking_id)}}},[t._v("删除")]),t._v("| "),a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.edit(n.banking_id)}}},[t._v("编辑")])],1)}}])})],1)],1),a("banking-edit-log",{ref:"BankingEditLogModal"})],1)},i=[],s=a("b706"),o=a("4e48"),l=a("c1df"),r=a.n(l),c=[],d="loans",p={loans:"贷款",credit_card:"信用卡",ecard:"E支付",deposit:"存款"},u={name:"BankingList",components:{BankingEditLog:o["default"]},data:function(){return{typeArr:p,type:d,selectedRowKeys:[],editUrl:"/banking/platform.banking/BankingLoansEdit",catArr:[{value:"title",name:"贷款名称"},{value:"release_people",name:"发布人"}],loansTypeArr:[{value:"0",name:"全部"},{value:"1",name:"个人贷"},{value:"2",name:"企业贷"}],placeholder:"请输入贷款名称",queryParam:{search_type:"title",type:"loans",loans_type:"0",start_time:"",end_time:""},pagination:{pageSize:10,total:0,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-quick-jumper":!0},page:1,columns:[],loansColumns:[{title:"贷款名称",dataIndex:"title",scopedSlots:{customRender:"banking_title"}},{title:"最高额度",dataIndex:"loans_highest_amount",sorter:function(t,e){return t.loans_highest_amount-e.loans_highest_amount}},{title:"贷款类型",dataIndex:"loans_type_txt",scopedSlots:{customRender:"loans_type_txt"}},{title:"标签",dataIndex:"label",scopedSlots:{customRender:"label"}},{title:"贷款方式",dataIndex:"loans_method",scopedSlots:{customRender:"loans_method"}},{title:"还款方式",dataIndex:"loans_repayment_method",scopedSlots:{customRender:"loans_repayment_method"}},{title:"阅读人数",dataIndex:"view_count"},{title:"发布人",dataIndex:"release_people"},{title:"发布时间",dataIndex:"add_time_txt"},{title:"修改记录",dataIndex:"edit_log",scopedSlots:{customRender:"edit_log"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],credit_cardColumns:[{title:"信用卡名称",dataIndex:"title",scopedSlots:{customRender:"banking_title"}},{title:"信用卡简介",dataIndex:"introduce",scopedSlots:{customRender:"introduce"}},{title:"阅读人数",dataIndex:"view_count"},{title:"发布人",dataIndex:"release_people"},{title:"发布时间",dataIndex:"add_time_txt"},{title:"修改记录",dataIndex:"edit_log",scopedSlots:{customRender:"edit_log"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],depositColumns:[{title:"存款名称",dataIndex:"title"},{title:"起始金额",dataIndex:"deposit_start_money",sorter:function(t,e){return t.deposit_start_money-e.deposit_start_money}},{title:"年利率",dataIndex:"deposit_interest_rate"},{title:"存期",dataIndex:"deposit_term",scopedSlots:{customRender:"deposit_term"}},{title:"阅读人数",dataIndex:"view_count"},{title:"发布人",dataIndex:"release_people"},{title:"发布时间",dataIndex:"add_time_txt"},{title:"修改记录",dataIndex:"edit_log",scopedSlots:{customRender:"edit_log"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],ecardColumns:[{title:"E支付名称",dataIndex:"title",scopedSlots:{customRender:"banking_title"}},{title:"阅读人数",dataIndex:"view_count"},{title:"发布人",dataIndex:"release_people"},{title:"发布时间",dataIndex:"add_time_txt"},{title:"修改记录",dataIndex:"edit_log",scopedSlots:{customRender:"edit_log"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],data:c}},created:function(){},activated:function(){var t=localStorage.getItem("bankingTypeTab");t&&(this.type=t,this.callback(this.type),localStorage.removeItem("bankingTypeTab"))},mounted:function(){var t=localStorage.getItem("bankingTypeTab");t?(this.type=t,this.callback(this.type),localStorage.removeItem("bankingTypeTab")):(this.columns=this.loansColumns,this.getList())},methods:{moment:r.a,setTabValue:function(){localStorage.setItem("bankingTypeTab",this.type)},getList:function(){var t=this;this.queryParam["page"]=this.page,this.request(s["a"].getBankingList,this.queryParam).then((function(e){t.data=e.data,t.pagination.total=e.total}))},searchBtn:function(){this.page=1,this.getList()},tableChange:function(t,e,a){a.order?(this.queryParam["sort_name"]=a.field,this.queryParam["sort_type"]="descend"==a.order?"desc":"asc"):(this.queryParam["sort_name"]="",this.queryParam["sort_type"]=""),this.queryParam["pageSize"]=t.pageSize,this.queryParam["page"]=t.current,t.current&&t.current>0&&(this.page=t.current),this.getList()},changeSearchType:function(t){console.log(t,"changeLoansType"),this.placeholder="title"==t?"请输入"+p["loans"]+"名称":"请输入发布人名称"},onSelectChange:function(t){this.selectedRowKeys=t},callback:function(t){switch(this.type=t,this.setTabValue(),console.log(t,"callback"),this.placeholder="请输入"+p[t]+"名称",this.queryParam.loans_type="0",t){case"loans":this.editUrl="/banking/platform.banking/BankingLoansEdit";break;case"credit_card":this.editUrl="/banking/platform.banking/BankingCreditCardEdit";break;case"ecard":this.editUrl="/banking/platform.banking/BankingEcardEdit";break;case"deposit":this.editUrl="/banking/platform.banking/BankingDepositEdit";break}this.columns=this[t+"Columns"],this.queryParam.type=t,this.page=1,this.getList()},edit:function(t){this.setTabValue(),t?this.$router.push({path:this.editUrl,query:{banking_id:t}}):this.$router.push({path:this.editUrl})},delBanking:function(t){var e=this,a=[];if(t)a.push(t);else{if(!this.selectedRowKeys.length)return void this.$message.warning("请选择产品");a=this.selectedRowKeys}this.$confirm({title:"确认要删除产品吗?",centered:!0,okText:"确定",cancelText:"取消",onOk:function(){e.request(s["a"].delBanking,{id:a}).then((function(t){e.$message.success("删除成功"),e.getList()}))},onCancel:function(){}})}}},g=u,m=(a("71d6"),a("0c7c")),_=Object(m["a"])(g,n,i,!1,null,"1cc83cc3",null);e["default"]=_.exports},b706:function(t,e,a){"use strict";var n={getBankingList:"/banking/platform.Banking/getList",getBankingDetail:"/banking/platform.Banking/getDetail",saveBanking:"/banking/platform.Banking/saveBanking",getBankingLogList:"/banking/platform.Banking/getLogList",delBanking:"/banking/platform.Banking/delBanking",getApplyList:"/banking/platform.BankingApply/getList",changeStatus:"/banking/platform.BankingApply/changeStatus",exportUrl:"/banking/platform.BankingApply/export",getVillageList:"/banking/platform.BankingApply/getVillageList",getBankingConfigList:"/banking/platform.Banking/getConfigDataList",editSeting:"/banking/platform.Banking/editSeting",getInformationList:"/banking/platform.Banking/getInformationList",delInformation:"/banking/platform.Banking/delInformation",getInformationData:"/banking/platform.Banking/getInformationData",editOrAddInformation:"/banking/platform.Banking/editOrAddInformation"};e["a"]=n},c1bd:function(t,e,a){},c815:function(t,e,a){}}]);