(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-450e2298","chunk-2d0c06af"],{3466:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-20 pl-20 pr-20 pb-20 bg-ff"},[e("a-form-model",{attrs:{layout:"inline",model:t.searchForm}},[e("a-row",{attrs:{type:"flex",justify:"space-between"}},[e("a-col",{attrs:{xxl:8,xl:6,lg:12}},[e("a-form-item",{staticClass:"search a-form-item",attrs:{label:"搜索"}},[e("span",{staticClass:"input-class flex align-center"},[e("a-input",{staticClass:"flex-sub",attrs:{placeholder:"请输入搜索内容"},model:{value:t.searchForm.content,callback:function(e){t.$set(t.searchForm,"content",e)},expression:"searchForm.content"}}),e("span",{staticClass:"ml-10"},[e("a-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择",getPopupContainer:function(t){return t.parentNode}},model:{value:t.searchForm.search_type,callback:function(e){t.$set(t.searchForm,"search_type",e)},expression:"searchForm.search_type"}},t._l(t.search_type_options,(function(a){return e("a-select-option",{key:a.value},[t._v(" "+t._s(a.label)+" ")])})),1)],1)],1)])],1),e("a-col",{attrs:{xxl:6,xl:6,lg:12}},[e("a-form-model-item",{staticClass:"a-form-item",attrs:{label:"下单时间"}},[e("a-range-picker",{staticClass:"input-class",attrs:{ranges:{"今日":[t.moment(),t.moment()],"近7天":[t.moment().subtract(6,"days"),t.moment()],"近15天":[t.moment().subtract(14,"days"),t.moment()],"近30天":[t.moment().subtract(29,"days"),t.moment()]},value:t.time,format:"YYYY-MM-DD",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateRangeChange}})],1)],1),e("a-col",{attrs:{xxl:5,xl:6,lg:12}},[e("a-form-item",{staticClass:"a-form-item",attrs:{label:"营销活动"}},[e("a-select",{staticClass:"input-class",attrs:{placeholder:"请选择",getPopupContainer:function(t){return t.parentNode}},model:{value:t.searchForm.act,callback:function(e){t.$set(t.searchForm,"act",e)},expression:"searchForm.act"}},[t._l(t.act_Options,(function(a){return[a.show?e("a-select-option",{key:a.value},[t._v(" "+t._s(a.label)+" ")]):t._e()]}))],2)],1)],1),e("a-col",{attrs:{xxl:5,xl:6,lg:12}},[e("a-form-item",{staticClass:"a-form-item",attrs:{label:"支付方式"}},[e("a-select",{staticClass:"input-class",attrs:{placeholder:"请选择",getPopupContainer:function(t){return t.parentNode}},model:{value:t.searchForm.pay,callback:function(e){t.$set(t.searchForm,"pay",e)},expression:"searchForm.pay"}},t._l(t.pay_options,(function(a){return e("a-select-option",{key:a.value},[t._v(" "+t._s(a.label)+" ")])})),1)],1)],1)],1),e("a-row",{staticClass:"mt-10",attrs:{type:"flex"}},[e("a-col",{attrs:{xxl:8,xl:6,lg:12}},[e("a-form-item",{staticClass:"a-form-item",attrs:{label:"配送方式"}},[e("a-select",{staticClass:"input-class",attrs:{placeholder:"请选择",getPopupContainer:function(t){return t.parentNode}},model:{value:t.searchForm.express_type,callback:function(e){t.$set(t.searchForm,"express_type",e)},expression:"searchForm.express_type"}},t._l(t.express_type_options,(function(a){return e("a-select-option",{key:a.value},[t._v(" "+t._s(a.label)+" ")])})),1)],1)],1),e("a-col",{attrs:{xxl:6,xl:6,lg:12}},[e("a-form-item",{staticClass:"a-form-item",attrs:{label:"订单来源"}},[e("a-select",{staticClass:"input-class",attrs:{placeholder:"请选择",getPopupContainer:function(t){return t.parentNode}},model:{value:t.searchForm.source,callback:function(e){t.$set(t.searchForm,"source",e)},expression:"searchForm.source"}},t._l(t.source_options,(function(a){return e("a-select-option",{key:a.value},[t._v(" "+t._s(a.label)+" ")])})),1)],1)],1),e("a-col",{attrs:{xxl:8,xl:8,lg:12}},[e("a-form-model-item",[e("a-button",{staticStyle:{"margin-left":"65px"},attrs:{type:"primary"},on:{click:function(e){return t.getOrderList("",!0)}}},[t._v(" 查询")]),e("a-button",{staticClass:"ml-20",on:{click:function(e){return t.resetForm()}}},[t._v(" 重置")]),e("a-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:t.getExport}},[t._v(" 导出订单")])],1)],1)],1),e("a-row",{staticClass:"mt-10",attrs:{type:"flex"}},[e("a-col",{attrs:{xxl:5,xl:6,lg:12}},[e("a-form-item",{staticClass:"a-form-item",attrs:{label:"核销方式"}},[e("a-select",{staticClass:"input-class",attrs:{placeholder:"请选择"},model:{value:t.searchForm.verify,callback:function(e){t.$set(t.searchForm,"verify",e)},expression:"searchForm.verify"}},t._l(t.verify_status,(function(a){return e("a-select-option",{key:a.value},[t._v(" "+t._s(a.label)+" ")])})),1)],1)],1)],1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.statisticsData,expression:"statisticsData"}],staticClass:"mt-row"},[e("a-card",[e("a-row",{attrs:{type:"flex",justify:"space-around",align:"middle"}},t._l(t.statisticsOptions,(function(a){return e("a-col",{key:a.prop,attrs:{span:6}},[e("a-row",[e("a-col",{staticClass:"text-center pointer"},[e("a-tooltip",[e("template",{slot:"title"},[t._v(" "+t._s(a.desc)+" ")]),t._v(" "+t._s(a.title)+" "),e("a-icon",{attrs:{type:"exclamation-circle"}})],2)],1),e("a-col",{staticClass:"text-center"},[e("span",{staticClass:"statisticsData"},[t._v(" "+t._s(t.statisticsData[a.prop]||0)+t._s(a.unit)+" ")])])],1)],1)})),1)],1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.tabList.length,expression:"tabList.length"}],staticClass:"mt-row"},[e("a-tabs",{attrs:{animated:!1,activeKey:t.searchForm.status,"default-active-key":t.defaultActiveKey},on:{change:t.tabsChange}},t._l(t.tabList,(function(a){return e("a-tab-pane",{key:a.status},[e("span",{attrs:{slot:"tab"},slot:"tab"},[e("a-badge",{on:{click:function(e){return t.changeColor(a.status)}}},[t._v(" "+t._s(a.label)+" ")]),e("br"),e("a-badge",{class:t.isTrue==1*a.status?"colorBlue":"colorRed",attrs:{align:"middle"},on:{click:function(e){return t.changeColor(a.status)}}},[t._v(" "+t._s(a.num)+" ")])],1),t._v(" "),e("div",{staticClass:"order-header"},[e("a-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[e("a-col",{attrs:{span:10}},[e("a-row",{attrs:{type:"flex",justify:"space-between"}},[e("a-col",{staticClass:"padding-left-24",attrs:{span:12}},[t._v("商品")]),e("a-col",{staticClass:"text-center",attrs:{span:6}},[t._v("单价")]),e("a-col",{staticClass:"text-center",attrs:{span:6}},[t._v("数量")])],1)],1),e("a-col",{attrs:{span:14}},[e("a-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[e("a-col",{staticClass:"text-center",attrs:{span:4}},[t._v("收货人/手机")]),e("a-col",{staticClass:"text-center",attrs:{span:4}},[t._v("收货地址")]),e("a-col",{staticClass:"text-center pointer",attrs:{span:4}},[e("a-tooltip",[e("template",{slot:"title"},[t._v(" 商品总价是订单内所有商品价格之和；总优惠代表所有优惠金额总和。 ")]),t._v(" 付款金额 "),e("a-icon",{attrs:{type:"exclamation-circle"}})],2)],1),e("a-col",{staticClass:"text-center",attrs:{span:4}},[t._v("物流方式")]),e("a-col",{staticClass:"text-center",attrs:{span:4}},[t._v("订单状态")]),e("a-col",{staticClass:"text-center",attrs:{span:4}},[t._v("店员备注")]),e("a-col",{staticClass:"text-center",attrs:{span:4}},[t._v("店铺名称")]),e("a-col",{staticClass:"text-center",attrs:{span:4}},[t._v("操作")])],1)],1)],1)],1),e("div",{staticClass:"order-body"},[t.orderList.length?e("a-row",t._l(t.orderList,(function(a,s){return e("div",{key:s},[e("orderItemCopy",{attrs:{order:a,tabStatus:t.searchForm.status},on:{getOrderList:t.updateList,updateItem:t.updateItem}})],1)})),0):e("a-row",{staticStyle:{"margin-top":"50px"}},[e("a-empty",{attrs:{image:t.simpleImage}})],1)],1),t.spinning?e("div",{staticClass:"spinning"},[e("a-spin",{attrs:{spinning:t.spinning,size:"large"}})],1):t.orderList.length||t.spinning?t._e():e("a-table",{staticClass:"mt-10",attrs:{showHeader:!1,"data-source":[],bordered:!0}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.orderList.length,expression:"orderList.length"}],staticClass:"mt-20 text-right"},[e("a-pagination",{attrs:{current:t.searchForm.page,pageSize:t.searchForm.pageSize,total:t.total,"show-size-changer":"","show-quick-jumper":"","show-total":function(t){return"共 ".concat(t," 条记录")}},on:{"update:pageSize":function(e){return t.$set(t.searchForm,"pageSize",e)},"update:page-size":function(e){return t.$set(t.searchForm,"pageSize",e)},change:t.onPageChange,showSizeChange:t.onPageSizeChange}})],1)],1)})),1)],1),e("export-add",{ref:"ExportAddModal",attrs:{exportUrl:t.exportUrl,queryParam:t.searchForm}})],1)},r=[],l=(a("74a0"),a("0ca7")),o=(a("54f8"),a("c5cb"),a("08c7"),a("a532"),a("6e84"),a("075f"),a("2f42")),n=a.n(o),i=a("5f66"),c=a("99a5"),u=a("4261"),p={name:"OrderManage",data:function(){return{time:[],isTrue:3,searchForm:{type:"pc",content:"",search_type:"1",page:1,pageSize:10,begin_time:"",end_time:"",act:"all",pay:"all",express_type:"0",source:"",status:"3",verify:"all"},search_type_options:[{label:"订单编号",value:"1"},{label:"第三方支付号",value:"2"},{label:"客户姓名",value:"3"},{label:"客户电话",value:"4"}],act_Options:[{label:"全部",value:"all",show:!0},{label:"拼团活动",value:"group",show:!0},{label:"秒杀活动",value:"limited",show:!0},{label:"砍价活动",value:"bargain",show:!0},{label:"预售活动",value:"prepare",show:!0},{label:"周期购活动",value:"periodic",show:!0},{label:"N元N件活动",value:"reached",show:!1},{label:"满包邮活动",value:"shipping",show:!1},{label:"满赠活动",value:"give",show:!1},{label:"满减活动",value:"minus",show:!1},{label:"满折活动",value:"discount",show:!1},{label:"普通订单",value:"ordinary",show:!0}],pay_options:[{label:"全部",value:"all"},{label:"微信支付",value:"wechat"},{label:"支付宝支付",value:"alipay"},{label:"线下支付",value:"offline_pay"},{label:"云闪付",value:"quick_pass"},{label:"翼支付",value:"win_pay"},{label:"商家余额支付",value:"merchant_balance"},{label:"平台支付",value:"platform_balance"},{label:"员工卡余额支付",value:"employee_money_pay"},{label:"员工卡积分支付",value:"employee_score_pay"}],express_type_options:[{label:"全部",value:"0"},{label:"快递配送",value:"2"},{label:"同城自提",value:"3"},{label:"骑手速运",value:"1"}],source_options:[{label:"全部",value:""},{label:"安卓APP",value:"androidapp"},{label:"苹果APP",value:"iosapp"},{label:"微信小程序",value:"wechat_mini"},{label:"微信公众号",value:"wechat_h5"},{label:"移动网页",value:"h5"}],statisticsOptions:[{title:"实收总金额",desc:"用户支付总费用加上平台补贴费用，扣除平台服务费，商家实际得到金额",prop:"sh_money",unit:"元"},{title:"支付总金额",desc:"用户支付总费用",prop:"zf_money",unit:"元"},{title:"订单笔数",desc:"用户总共下单的笔数",prop:"jianshu",unit:"笔"},{title:"退款总金额",desc:"用户申请退款成功总金额",prop:"tk_money",unit:"元"}],statisticsData:"",tabList:[{label:"全部订单",num:0,status:1},{label:"待付款",num:0,status:2},{label:"待发货",num:0,status:3},{label:"已发货",num:0,status:4},{label:"已完成",num:0,status:5},{label:"已取消",num:0,status:6},{label:"售后中",num:0,status:7},{label:"已退款",num:0,status:8}],verify_status:[{label:"全部",value:"all",show:!0},{label:"手动核销（移动端）",value:"1",show:!0},{label:"手动核销（pc端）",value:"2",show:!0},{label:"扫码核销",value:"3",show:!0}],exportUrl:i["a"].exportOrder,defaultActiveKey:"3",total:0,orderList:[],simpleImage:"",spinning:!0}},components:{ExportAdd:u["default"],orderItemCopy:c["default"]},beforeRouteEnter:function(t,e,a){console.log(t,"to"),"orderDetail"==e.name?t.meta.keepAlive=!0:t.meta.keepAlive=!1,a()},beforeCreate:function(){this.simpleImage=l["a"].PRESENTED_IMAGE_SIMPLE},created:function(){console.log("created"),this.getOrderList()},activated:function(){console.log("activated"),this.getOrderList()},methods:{moment:n.a,getPopupContainer:function(t,e){},changeColor:function(t){this.isTrue=t},getOrderList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];console.log(this.searchForm,"this.searchForm----getOrderList"),this.spinning=!e,1==a&&(this.$set(this.searchForm,"page",1),this.$set(this.searchForm,"pageSize",10)),this.request(i["a"].getOrderListCopy,this.searchForm).then((function(a){var s=a.list,r=void 0===s?[]:s,l=a.status_num,o=void 0===l?[]:l,n=a.collect_num,i=void 0===n?"":n,c=a.count,u=void 0===c?0:c;t.statisticsData=i,o.length?o.forEach((function(e){t.tabList.forEach((function(t){t.status=t.status.toString(),e.status=e.status.toString(),t.status==e.status&&(t.num=e.num||0==e.num?e.num:0,t.show_text="".concat(t.label,"（").concat(t.num,"）"))}))})):t.tabList=t.$options.data().tabList.map((function(t){return t.status=t.status.toString(),t.show_text=""!=t.num||0==t.num?"".concat(t.label,"（").concat(t.num,"）"):t.label,t})),t.total=u,e&&r.length?r&&r.length?r.forEach((function(a,s){if(a.order_id==e&&(t.$set(t.orderList,s,a),a.children&&a.children.length&&t.$set(t.orderList[s],"children",a.children),a.button))for(var r in t.$set(t.orderList[s],"button",a.button),a.button)t.$set(t.orderList[s]["button"],r,a.button[r]);t.$forceUpdate()})):t.orderList=[]:(t.orderList=[],r&&r.length&&r.forEach((function(e,a){if(t.$set(t.orderList,a,e),e.children&&e.children.length&&t.$set(t.orderList[a],"children",e.children),e.button)for(var s in t.$set(t.orderList[a],"button",e.button),e.button)t.$set(t.orderList[a]["button"],s,e.button[s]);t.$forceUpdate()})),console.log(t.orderList,"this.orderList")),t.spinning=!1})).catch((function(e){t.spinning=!1}))},onDateRangeChange:function(t,e){this.time=[t[0],t[1]],this.$set(this.searchForm,"begin_time",e[0]),this.$set(this.searchForm,"end_time",e[1])},resetForm:function(){Object.assign(this.$data,this.$options.data()),this.getOrderList()},tabsChange:function(t){this.$set(this.searchForm,"status",t),this.$set(this.searchForm,"page",1),this.$set(this.searchForm,"pageSize",10),this.getOrderList()},onPageChange:function(t,e){this.$set(this.searchForm,"page",t),this.getOrderList()},onPageSizeChange:function(t,e){this.$set(this.searchForm,"pageSize",e),this.$set(this.searchForm,"page",1),this.getOrderList()},updateList:function(){this.orderList=[],this.getOrderList()},updateItem:function(t){this.getOrderList(t.order_id)},getExport:function(){var t=this;this.orderList.length?this.request(this.exportUrl,this.searchForm).then((function(e){t.$message.loading({content:"加载中,请耐心等待,数量越多时间越长。",key:"updatable",duration:0});var a=e.file_url;a&&window.open(a),t.$message.success({content:"下载成功!",key:"updatable",duration:2})})):this.$message.warn("当前没有可以导出的内容")}}},h=p,m=(a("f45a"),a("0b56")),d=Object(m["a"])(h,s,r,!1,null,"1ae34c00",null);e["default"]=d.exports},4261:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("a-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"primary"}},[t._v(" Open the message box ")])},r=[],l={downloadExportFile:"/common/common.export/downloadExportFile"},o=l,n="updatable",i={props:{exportUrl:"",queryParam:{}},data:function(){return{file_date:"",file_url:""}},mounted:function(){},methods:{exports:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中,请耐心等待,数量越多时间越长。";this.request(this.exportUrl,this.queryParam).then((function(a){t.$message.loading({content:e,key:n,duration:0}),console.log("添加导出计划任务成功"),t.file_url=o.downloadExportFile+"?id="+a.export_id,t.file_date=a,t.CheckStatus()}))},CheckStatus:function(){var t=this;this.request(this.file_url,{id:this.file_date.export_id}).then((function(e){0==e.error?(t.$message.success({content:"下载成功!",key:n,duration:2}),location.href=e.url):setTimeout((function(){t.CheckStatus(),console.log("重复请求")}),1e3)}))}}},c=i,u=a("0b56"),p=Object(u["a"])(c,s,r,!1,null,"dd2f8128",null);e["default"]=p.exports},db35:function(t,e,a){},f45a:function(t,e,a){"use strict";a("db35")}}]);