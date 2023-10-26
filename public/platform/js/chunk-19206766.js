(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19206766","chunk-2d0c06af"],{"2b72":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[a("a-form-model",{attrs:{layout:"inline",model:t.searchForm},on:{submit:t.getOrderList},nativeOn:{submit:function(t){t.preventDefault()}}},[a("a-form-item",{staticClass:"a-form-item"},[a("a-input-group",{attrs:{compact:""}},[a("a-select",{staticStyle:{width:"30%"},attrs:{placeholder:"请选择"},model:{value:t.searchForm.search_time_type,callback:function(e){t.$set(t.searchForm,"search_time_type",e)},expression:"searchForm.search_time_type"}},t._l(t.search_time_type_options,(function(e){return a("a-select-option",{key:e.value},[t._v(" "+t._s(e.label)+" ")])})),1),a("a-range-picker",{staticStyle:{width:"70%","font-size":"10px"},attrs:{ranges:{"今日":[t.moment(),t.moment()],"近7天":[t.moment().subtract("days",6),t.moment()],"近15天":[t.moment().subtract("days",14),t.moment()],"近30天":[t.moment().subtract("days",29),t.moment()]},value:t.time,format:"YYYY-MM-DD"},on:{change:t.onDateRangeChange}})],1)],1),a("a-form-item",{staticClass:"a-form-item",attrs:{label:"手动搜索："}},[a("a-input-group",{attrs:{compact:""}},[a("a-select",{staticStyle:{width:"40%"},attrs:{placeholder:"请选择"},model:{value:t.searchForm.search_type,callback:function(e){t.$set(t.searchForm,"search_type",e)},expression:"searchForm.search_type"}},t._l(t.search_type_options,(function(e){return a("a-select-option",{key:e.value},[t._v(" "+t._s(e.label)+" ")])})),1),a("a-input",{staticStyle:{width:"60%"},attrs:{placeholder:"请输入搜索内容"},model:{value:t.searchForm.content,callback:function(e){t.$set(t.searchForm,"content",e)},expression:"searchForm.content"}})],1)],1),a("a-form-item",{staticClass:"a-form-item",attrs:{label:"城市区域："}},[a("a-cascader",{staticClass:"input-class",attrs:{"field-names":{label:"area_name",value:"area_id",children:"children"},options:t.areaList,placeholder:"请选择省市区"},model:{value:t.searchForm.areaList,callback:function(e){t.$set(t.searchForm,"areaList",e)},expression:"searchForm.areaList"}})],1),a("a-form-item",{staticClass:"a-form-item",attrs:{label:"支付方式"}},[a("a-select",{staticClass:"input-class",staticStyle:{"min-width":"135px"},attrs:{placeholder:"请选择"},model:{value:t.searchForm.pay,callback:function(e){t.$set(t.searchForm,"pay",e)},expression:"searchForm.pay"}},t._l(t.pay_options,(function(e){return a("a-select-option",{key:e.value},[t._v(" "+t._s(e.label)+" ")])})),1)],1),a("a-form-item",{staticClass:"a-form-item",attrs:{label:"配送方式"}},[a("a-select",{staticClass:"input-class",attrs:{placeholder:"请选择"},model:{value:t.searchForm.express_type,callback:function(e){t.$set(t.searchForm,"express_type",e)},expression:"searchForm.express_type"}},t._l(t.express_type_options,(function(e){return a("a-select-option",{key:e.value},[t._v(" "+t._s(e.label)+" ")])})),1)],1),a("a-form-item",{staticClass:"a-form-item",attrs:{label:"订单来源"}},[a("a-select",{staticClass:"input-class",attrs:{placeholder:"请选择"},model:{value:t.searchForm.source,callback:function(e){t.$set(t.searchForm,"source",e)},expression:"searchForm.source"}},t._l(t.source_options,(function(e){return a("a-select-option",{key:e.value},[t._v(" "+t._s(e.label)+" ")])})),1)],1),a("a-form-item",{staticClass:"a-form-item",attrs:{label:"营销活动"}},[a("a-select",{staticClass:"input-class",staticStyle:{"min-width":"135px"},attrs:{placeholder:"请选择"},model:{value:t.searchForm.act,callback:function(e){t.$set(t.searchForm,"act",e)},expression:"searchForm.act"}},t._l(t.act_Options,(function(e){return e.show?a("a-select-option",{key:e.value},[t._v(" "+t._s(e.label)+" ")]):t._e()})),1)],1),a("a-form-item",{staticClass:"a-form-item",attrs:{label:"所属店铺"}},[a("a-input",{staticClass:"input-class",staticStyle:{width:"230px"},attrs:{placeholder:"请输入完整店铺名搜索"},model:{value:t.searchForm.store_name,callback:function(e){t.$set(t.searchForm,"store_name",e)},expression:"searchForm.store_name"}})],1),a("a-form-item",{staticClass:"a-form-item",attrs:{label:"核销方式"}},[a("a-select",{staticClass:"input-class",staticStyle:{"min-width":"135px"},attrs:{placeholder:"请选择"},model:{value:t.searchForm.verify,callback:function(e){t.$set(t.searchForm,"verify",e)},expression:"searchForm.verify"}},t._l(t.verify_status,(function(e){return e.show?a("a-select-option",{key:e.value},[t._v(" "+t._s(e.label)+" ")]):t._e()})),1)],1),a("a-form-model-item",[a("a-button",{attrs:{type:"primary",icon:"search","html-type":"submit"}},[t._v(" 查询")]),a("a-button",{staticClass:"ml-20",attrs:{icon:"refresh"},on:{click:t.resetForm}},[t._v(" 重置")])],1),a("a-form-model-item",[a("a-button",{attrs:{icon:"download"},on:{click:t.getExport}},[t._v(" 导出订单")])],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.statisticsData,expression:"statisticsData"}],staticClass:"mt-50"},[a("a-card",[a("a-row",{attrs:{type:"flex",justify:"space-around",align:"middle"}},t._l(t.statisticsOptions,(function(e){return a("a-col",{key:e.prop,attrs:{span:6}},[a("a-row",[a("a-col",{staticClass:"text-center pointer"},[a("a-tooltip",[a("template",{slot:"title"},[t._v(" "+t._s(e.desc)+" ")]),t._v(" "+t._s(e.title)+" "),a("a-icon",{attrs:{type:"exclamation-circle"}})],2)],1),a("a-col",{staticClass:"text-center"},[a("span",{staticClass:"statisticsData"},[t._v(" "+t._s(t.statisticsData[e.prop]||0)+t._s(e.unit)+" ")])])],1)],1)})),1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.tabList.length,expression:"tabList.length"}],staticClass:"mt-50"},[a("a-tabs",{attrs:{animated:!1,activeKey:t.searchForm.status,"default-active-key":t.defaultActiveKey},on:{change:t.tabsChange}},t._l(t.tabList,(function(e){return a("a-tab-pane",{key:e.status},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-badge",{on:{click:function(a){return t.changeColor(e.status)}}},[t._v(" "+t._s(e.label)+" ")]),a("br"),a("a-badge",{class:t.isTrue==1*e.status?"colorBlue":"colorRed",attrs:{align:"middle"},on:{click:function(a){return t.changeColor(e.status)}}},[t._v(" "+t._s(e.num)+" ")])],1),a("div",{staticClass:"order-header"},[a("a-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("a-col",{attrs:{span:8}},[a("a-row",{attrs:{type:"flex",justify:"space-between"}},[a("a-col",{staticClass:"padding-left-24",attrs:{span:12}},[t._v("商品")]),a("a-col",{staticClass:"text-center",attrs:{span:6}},[t._v("单价")]),a("a-col",{staticClass:"text-center",attrs:{span:6}},[t._v("数量")])],1)],1),a("a-col",{attrs:{span:16}},[a("a-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("a-col",{staticClass:"text-center",attrs:{span:4}},[t._v("收货人/手机/地址")]),a("a-col",{staticClass:"text-center pointer",attrs:{span:4}},[a("a-tooltip",[a("template",{slot:"title"},[t._v(" 商品总价是订单内所有商品价格之和；总优惠代表所有优惠金额总和。")]),t._v(" 付款金额 "),a("a-icon",{attrs:{type:"exclamation-circle"}})],2)],1),a("a-col",{staticClass:"text-center",attrs:{span:4}},[t._v("物流方式")]),a("a-col",{staticClass:"text-center",attrs:{span:4}},[t._v("订单状态")]),a("a-col",{staticClass:"text-center",attrs:{span:4}},[t._v("店铺名称")]),a("a-col",{staticClass:"text-center",attrs:{span:4}},[t._v("操作")])],1)],1)],1)],1),a("div",{staticClass:"order-body"},[t.spinning?a("div",{staticClass:"spinning"},[a("a-spin",{attrs:{spinning:t.spinning,size:"large"}})],1):a("a-row",[t.orderList.length?a("a-row",t._l(t.orderList,(function(e,s){return a("div",{key:s},[a("orderItem",{key:e.order_id,attrs:{order:e},on:{getOrderList:t.updateList,updateItem:t.updateItem}})],1)})),0):a("a-row",{staticStyle:{"margin-top":"100px"}},[a("a-empty",{attrs:{image:t.simpleImage}})],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.orderList.length,expression:"orderList.length"}],staticClass:"mt-20 text-right"},[a("a-pagination",{attrs:{current:t.searchForm.page,pageSize:t.searchForm.pageSize,total:t.total,"show-size-changer":"","show-quick-jumper":"","show-total":function(t){return"共 "+t+" 条记录"}},on:{"update:pageSize":function(e){return t.$set(t.searchForm,"pageSize",e)},"update:page-size":function(e){return t.$set(t.searchForm,"pageSize",e)},change:t.onPageChange,showSizeChange:t.onPageSizeChange}})],1)])})),1)],1),a("export-add",{ref:"ExportAddModal",attrs:{exportUrl:t.exportUrl,queryParam:t.searchForm}})],1)},r=[],l=(a("06f4"),a("fc25")),i=(a("d3b7"),a("159b"),a("25f0"),a("99af"),a("d81d"),a("ac1f"),a("c1df")),o=a.n(i),n=a("011d"),c=a("dafd"),u=a("4261"),m={name:"OrderManage",data:function(){return{isTrue:3,time:[],areaList:[],store_list:[],searchForm:{type:"pc",content:"",search_type:"1",search_time_type:"create_time",page:1,pageSize:10,begin_time:"",end_time:"",act:"all",pay:"all",express_type:"0",source:"",status:"3",areaList:[],store_name:void 0,verify:"all"},search_type_options:[{label:"订单编号",value:"1"},{label:"第三方支付号",value:"2"},{label:"客户姓名",value:"3"},{label:"客户电话",value:"4"},{label:"商品名称",value:"5"}],search_time_type_options:[{label:"下单时间",value:"create_time"},{label:"支付时间",value:"pay_time"},{label:"消费时间",value:"complete_time"},{label:"退款时间",value:"refund_time"}],act_Options:[{label:"全部",value:"all",show:!0},{label:"拼团活动",value:"group",show:!0},{label:"秒杀活动",value:"limited",show:!0},{label:"砍价活动",value:"bargain",show:!0},{label:"预售活动",value:"prepare",show:!0},{label:"周期购活动",value:"periodic",show:!0},{label:"N元N件活动",value:"reached",show:!1},{label:"满包邮活动",value:"shipping",show:!1},{label:"满赠活动",value:"give",show:!1},{label:"满减活动",value:"minus",show:!1},{label:"满折活动",value:"discount",show:!1}],pay_options:[{label:"全部",value:"all"},{label:"微信支付",value:"wechat"},{label:"支付宝支付",value:"alipay"},{label:"线下支付",value:"offline_pay"},{label:"云闪付",value:"quick_pass"},{label:"翼支付",value:"win_pay"},{label:"商家余额支付",value:"merchant_balance"},{label:"平台支付",value:"platform_balance"},{label:"员工卡余额支付",value:"employee_money_pay"},{label:"员工卡积分支付",value:"employee_score_pay"}],express_type_options:[{label:"全部",value:"0"},{label:"快递配送",value:"2"},{label:"同城自提",value:"3"},{label:"骑手速运",value:"1"}],source_options:[{label:"全部",value:""},{label:"安卓APP",value:"androidapp"},{label:"苹果APP",value:"iosapp"},{label:"微信小程序",value:"wechat_mini"},{label:"微信公众号",value:"wechat_h5"},{label:"移动网页",value:"h5"}],statisticsOptions:[{title:"实收总金额",desc:"用户支付总费用加上平台补贴费用，扣除平台服务费，商家实际得到金额",prop:"sh_money",unit:"元"},{title:"支付总金额",desc:"用户支付总费用",prop:"zf_money",unit:"元"},{title:"订单笔数",desc:"用户总共下单的次数",prop:"jianshu",unit:"笔"},{title:"退款总金额",desc:"用户申请退款成功总金额",prop:"tk_money",unit:"元"}],statisticsData:"",tabList:[{label:"全部订单",num:0,status:1},{label:"待付款",num:0,status:2},{label:"待发货",num:0,status:3},{label:"已发货",num:0,status:4},{label:"已完成",num:0,status:5},{label:"已取消",num:0,status:6},{label:"售后中",num:0,status:7},{label:"已退款",num:0,status:8}],verify_status:[{label:"全部",value:"all",show:!0},{label:"手动核销（移动端）",value:"1",show:!0},{label:"手动核销（pc端）",value:"2",show:!0},{label:"扫码核销",value:"3",show:!0}],exportUrl:n["a"].exportOrder,defaultActiveKey:"3",total:0,orderList:[],simpleImage:"",spinning:!0}},components:{ExportAdd:u["default"],orderItem:c["default"]},beforeCreate:function(){this.simpleImage=l["a"].PRESENTED_IMAGE_SIMPLE},created:function(){this.getOrderList(),this.getAllArea()},methods:{moment:o.a,changeColor:function(t){this.isTrue=t},getOrderList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log(this.searchForm,"this.searchForm----getOrderList"),e?this.spinning=!1:(this.orderList=[],this.spinning=!0),this.request(n["a"].getOrderList,this.searchForm).then((function(a){var s=a.list,r=void 0===s?[]:s,l=a.status_num,i=void 0===l?[]:l,o=a.collect_num,n=void 0===o?"":o,c=a.count,u=void 0===c?0:c,m=a.store_list,p=void 0===m?[]:m;t.statisticsData=n,t.store_list=p,i.length?i.forEach((function(e){t.tabList.forEach((function(t){t.status=t.status.toString(),e.status=e.status.toString(),t.status==e.status&&(t.num=e.num||0==e.num?e.num:0,t.show_text="".concat(t.label,"（").concat(t.num,"）"))}))})):t.tabList=t.$options.data().tabList.map((function(t){return t.status=t.status.toString(),t.show_text=""!=t.num||0==t.num?"".concat(t.label,"（").concat(t.num,"）"):t.label,t})),t.total=u;var h=/^[0-9]+.?[0-9]*$/;e&&h.test(e)&&r.length?r.forEach((function(a,s){a.order_id==e&&t.$set(t.orderList,s,a)})):t.orderList=r,t.spinning=!1})).catch((function(e){t.spinning=!1}))},onDateRangeChange:function(t,e){this.time=[t[0],t[1]],this.$set(this.searchForm,"begin_time",e[0]),this.$set(this.searchForm,"end_time",e[1])},resetForm:function(){Object.assign(this.$data,this.$options.data()),this.getOrderList()},tabsChange:function(t){this.$set(this.searchForm,"status",t),this.$set(this.searchForm,"page",1),this.$set(this.searchForm,"pageSize",10),this.orderList=[],this.getOrderList()},onPageChange:function(t,e){this.$set(this.searchForm,"page",t),this.getOrderList()},onPageSizeChange:function(t,e){this.$set(this.searchForm,"pageSize",e),this.$set(this.searchForm,"page",1),this.getOrderList()},updateList:function(){this.orderList=[],this.getOrderList()},updateItem:function(t){this.getOrderList(t.order_id)},getAllArea:function(){var t=this;this.request(n["a"].getAllArea).then((function(e){console.log(e),t.areaList=e}))},getExport:function(){var t=this;this.orderList.length?this.request(this.exportUrl,this.searchForm).then((function(e){t.$message.loading({content:"加载中,请耐心等待,数量越多时间越长。",key:"updatable",duration:0});var a=e.file_url;a&&window.open(a),t.$message.success({content:"下载成功!",key:"updatable",duration:2})})):this.$message.warn("当前没有可以导出的内容")}}},p=m,h=(a("4287"),a("2877")),d=Object(h["a"])(p,s,r,!1,null,"845a427c",null);e["default"]=d.exports},4261:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"primary"}},[t._v(" Open the message box ")])},r=[],l={downloadExportFile:"/common/common.export/downloadExportFile"},i=l,o="updatable",n={props:{exportUrl:"",queryParam:{}},data:function(){return{file_date:"",file_url:""}},mounted:function(){},methods:{exports:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中,请耐心等待,数量越多时间越长。";this.request(this.exportUrl,this.queryParam).then((function(a){t.$message.loading({content:e,key:o,duration:0}),console.log("添加导出计划任务成功"),t.file_url=i.downloadExportFile+"?id="+a.export_id,t.file_date=a,t.CheckStatus()}))},CheckStatus:function(){var t=this;this.request(this.file_url,{id:this.file_date.export_id}).then((function(e){0==e.error?(t.$message.success({content:"下载成功!",key:o,duration:2}),location.href=e.url):setTimeout((function(){t.CheckStatus(),console.log("重复请求")}),1e3)}))}}},c=n,u=a("2877"),m=Object(u["a"])(c,s,r,!1,null,"dd2f8128",null);e["default"]=m.exports},4287:function(t,e,a){"use strict";a("b96a")},b96a:function(t,e,a){}}]);