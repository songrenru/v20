(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a5256bb","chunk-0549636e"],{"12be":function(t,e,i){},"73a4":function(t,e,i){"use strict";i("12be")},ce95:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:500,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",{attrs:{label:"选择打印模板",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-col",{attrs:{span:18}},[i("a-select",{staticStyle:{width:"117px"},attrs:{placeholder:"请选择打印模板"},model:{value:t.template_id,callback:function(e){t.template_id=e},expression:"template_id"}},t._l(t.template_list,(function(e,s){return i("a-select-option",{key:s,attrs:{value:e.template_id}},[t._v(" "+t._s(e.title)+" ")])})),1)],1)],1)],1)],1),i("print-order",{ref:"PrintModel"})],1)},n=[],l=i("a0e0"),a=i("f7e3"),r={components:{PrintOrder:a["default"]},data:function(){return{title:"选择打印模板",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,order_id:0,template_id:"",template_list:[],pigcms_id:0,choice_ids:[]}},mounted:function(){},methods:{add:function(t,e){this.title="选择打印模板",this.visible=!0,this.template_id="",this.pigcms_id=e,this.template_list=[],this.order_id=t,this.choice_ids=[],this.getTemplate()},arrUnique:function(t){for(var e=[],i=0,s=t.length;i<s;i++)-1===e.indexOf(t[i]["pigcms_id"])&&e.push(t[i]["pigcms_id"]);return e},batchPrint:function(t){var e=this,i=0;return t.length<1?(e.$message.error("请勾选账单"),!1):(i=this.arrUnique(t).length,i>1?(e.$message.error("当前仅支持同一个缴费人进行批量打印已缴账单"),!1):t.length>8?(e.$message.error("最多可选择8个账单打印，您当前选中"+t.length+"个"),!1):(e.title="选择打印模板",e.visible=!0,e.template_id="",e.template_list=[],e.order_id=0,e.pigcms_id=0,e.choice_ids=t,void e.getTemplate()))},getTemplate:function(){var t=this;this.request(l["a"].getTemplate).then((function(e){t.template_list=e}))},handleSubmit:function(){if(!this.template_id)return this.$message.error("选择打印模板"),!1;this.$emit("ok"),this.$refs.PrintModel.add(this.order_id,this.template_id,this.pigcms_id,this.choice_ids)},handleCancel:function(){this.visible=!1}}},o=r,d=(i("73a4"),i("2877")),c=Object(d["a"])(o,s,n,!1,null,null,null);e["default"]=c.exports},e9dc:function(t,e,i){},f148:function(t,e,i){"use strict";i("e9dc")},f7e3:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:1300,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[i("div",{attrs:{id:"print_table"}},[t.is_title?i("span",{staticStyle:{width:"100%","text-align":"center",display:"inline-block","font-size":"20px","font-weight":"bold"}},[t._v(t._s(t.print_title))]):t._e(),i("a-descriptions",{staticStyle:{"padding-top":"10px"},attrs:{column:t.col_num}},t._l(t.list1,(function(e,s){return"换行"!==e.title?i("a-descriptions-item",{key:s+30,staticStyle:{"white-space":"nowrap"},attrs:{span:t.jscolspan(t.list1[s+1],s,t.list1[s-1]),label:e.title}},[t._v(" "+t._s(e.value)+" ")]):t._e()})),1),i("div",{staticClass:"module_two",staticStyle:{display:"flex","flex-direction":"column"}},[1*t.printType==2?i("div",{directives:[{name:"show",rawName:"v-show",value:t.printList4.length>0,expression:"printList4.length>0"}],staticClass:"table_top",staticStyle:{border:"0.5px solid #999999",display:"flex","align-items":"center","justify-content":"space-between",width:"100%",height:"27px"}},t._l(t.printList4,(function(e,s){return i("div",{key:s,staticClass:"header_item",staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"},style:{marginLeft:0==s?"10px":"",marginRight:s==t.printList4.length-1?"20px":""}},[t._v(t._s(e.title)+"："+t._s(e.value))])})),0):t._e(),i("div",{staticClass:"table_container",staticStyle:{display:"flex","align-items":"center",width:"100%","border-left":"0.5px solid #999999"}},t._l(t.printList2,(function(e,s){return i("div",{key:s,staticClass:"table_item",staticStyle:{border:"0.5px solid #999999","border-left":"0",height:"27px",display:"flex","align-items":"center","justify-content":"center","font-weight":"bold"},style:{width:1/t.printList2.length*100+"%"}},[t._v(" "+t._s(e.title))])})),0),t._l(t.tableList,(function(e,s){return i("div",{key:s+30,staticClass:"table_container",staticStyle:{display:"flex","align-items":"center",width:"100%","border-left":"0.5px solid #999999"}},t._l(e,(function(e,n){return i("div",{key:n+s,staticClass:"table_item",staticStyle:{border:"0.5px solid #999999","border-left":"0",height:"27px",display:"flex","align-items":"center","justify-content":"center"},style:{width:1/t.printList2.length*100+"%"}},[t._v(t._s(e))])})),0)})),t._l(2,(function(e,s){return i("div",{key:s+100,staticClass:"table_container",staticStyle:{display:"flex","align-items":"center",width:"100%","border-left":"0.5px solid #999999"}},t._l(t.printList2,(function(e,n){return i("div",{key:n+s,staticClass:"table_item",staticStyle:{border:"0.5px solid #999999","border-left":"0",height:"27px",display:"flex","align-items":"center","justify-content":"center"},style:{width:1/t.printList2.length*100+"%"}})})),0)})),1*t.printType==2?i("div",{staticClass:"table_footer_one",staticStyle:{display:"flex","align-items":"center","justify-content":"center",width:"100%","border-left":"0.5px solid #999999"}},t._l(t.printList5,(function(e,s){return i("div",{key:s,staticClass:"table_item",staticStyle:{border:"0.5px solid #999999","border-left":"0",height:"27px",display:"flex","align-items":"center","padding-left":"10px"},style:{width:1/t.printList5.length*100+"%",borderLeft:t.printList5.length-1?"0px":"0.5px solid #999999"}},[t._v(t._s(e.title)+"："+t._s(e.value))])})),0):t._e(),t._l(t.printList6,(function(e,s){return 1*t.printType==2?i("div",{key:s,staticClass:"table_footer_two",staticStyle:{display:"flex","align-items":"center","justify-content":"center",width:"100%","border-left":"0.5px solid #999999"}},[i("div",{staticClass:"left_title",staticStyle:{height:"27px",width:"25%",border:"0.5px solid #999999","border-left":"0",display:"flex","align-items":"center","padding-left":"10px"}},[t._v(t._s(e.title)+"：")]),i("div",{staticClass:"right_content",staticStyle:{height:"27px",width:"75%",border:"0.5px solid #999999","border-left":"0",display:"flex","align-items":"center","justify-content":"space-between","padding-left":"10px"}},[e.value.value1?i("div",{staticStyle:{width:"100%",display:"flex","align-items":"center","justify-content":"space-between"}},[i("span",[t._v(t._s(e.value.value1))]),i("span",{staticStyle:{"margin-right":"20px"}},[t._v(t._s(e.value.value2))])]):i("span",[t._v(t._s(e.value))])])]):t._e()}))],2),i("a-descriptions",{staticStyle:{"margin-top":"10px"},attrs:{column:t.col_num}},t._l(t.list2,(function(e,s){return"换行"!==e.title?i("a-descriptions-item",{key:s,staticStyle:{"white-space":"nowrap"},attrs:{span:t.jscolspan(t.list2[s+1],s,t.list2[s-1]),label:e.title}},[t._v(" "+t._s(e.value)+" ")]):t._e()})),1)],1),t.is_show?i("span",{staticClass:"table-operator",staticStyle:{"padding-left":"320px"}},[i("a-button",{attrs:{type:"primary"},on:{click:t.print}},[t._v("打印")])],1):t._e()])},n=[],l=(i("159b"),i("a0e0")),a=(i("add5"),[]),r=[],o={components:{},data:function(){return{title:"打印预览",list1:[],list2:[],print_title:"",is_show:!0,labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,is_title:!1,data:r,columns:a,order_id:0,template_id:0,choice_ids:[],pigcms_id:0,id:0,col_num:3,tableList:[],printList1:[],printList2:[],printList3:[],printList4:[],printList5:[],printList6:[],printType:1,printRecordStatus:!0}},mounted:function(){},methods:{add:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];this.title="打印预览",this.visible=!0,this.is_title=!1,this.is_show=!0,this.order_id=t,this.template_id=e,this.pigcms_id=i,this.choice_ids=s,this.data=[],this.columns=[],this.print_title="",this.getPrintInfo()},getPrintInfo:function(){var t=this;this.confirmLoading=!0,this.request(l["a"].getPrintInfo,{order_id:this.order_id,template_id:this.template_id,pigcms_id:this.pigcms_id,choice_ids:this.choice_ids}).then((function(e){t.confirmLoading=!1,console.log("res",e),t.printList1=e.printList1,t.printList2=e.printList2,t.printList3=e.printList3,t.printList4=e.printList4,t.printList5=e.printList5,t.printList6=e.printList6,t.tableList=e.tab_list,t.printType=e.type,t.print_title=e.print_title,t.col_num=e.col,t.is_title=e.is_title,t.list1=e.printList1,console.log("list1===========",t.list1),t.data=e.data_order,t.list2=e.printList3,e.printList2.forEach((function(e){t.columns.push({title:e.title,dataIndex:e.field_name,key:e.field_name})})),console.log("data",t.data),console.log("columns",t.columns),setTimeout((function(){t.print()}),500)}))},print:function(){var t=this;console.log({printable:"print_table",type:"html",targetStyles:["*"],maxWidth:"100%",style:e,scanStyles:!1});var e='@page {  } @media print { .ant-table-tbody > tr > td {border-bottom: 1px solid #000000;-webkit-transition: all 0.3s, border 0s;transition: all 0.3s, border 0s;}   .ant-table-bordered .ant-table-thead > tr > th, .ant-table-bordered .ant-table-tbody > tr > td {border-right: 1px solid #000000;}  .ant-table-bordered .ant-table-header > table, .ant-table-bordered .ant-table-body > table, .ant-table-bordered .ant-table-fixed-left table, .ant-table-bordered .ant-table-fixed-right table {border: 1px solid #000000;border-right: 0;border-bottom: 0;} .ant-table-thead > tr > th {color: rgba(0, 0, 0, 1);font-weight: 600;text-align: left;background: #fafafa;border-bottom: 1px solid #000000;-webkit-transition: background 0.3s ease;transition: background 0.3s ease;} .ant-descriptions-item-colon::after {content:":";} .ant-table table {width: 100%;} .ant-descriptions-row td { width:3% } ';printJS({printable:"print_table",type:"html",targetStyles:["*"],maxWidth:"100%",style:e,scanStyles:!1,onPrintDialogClose:function(){console.log("回调================",t.printRecordStatus),t.printRecordStatus&&(t.printRecordStatus=!1,t.request(l["a"].printRecordUrl,{order_id:t.order_id,pigcms_id:t.pigcms_id,choice_ids:t.choice_ids}).then((function(e){t.printRecordStatus=!0})))}})},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.form=t.$form.createForm(t)}),500)},jscolspan:function(t,e,i){return void 0===t?1:"换行"===t.title?this.col_num:"换行"!==t.title?1:void 0}}},d=o,c=(i("f148"),i("2877")),p=Object(c["a"])(d,s,n,!1,null,"16f295dd",null);e["default"]=p.exports}}]);