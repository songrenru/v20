(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29c9912a"],{3675:function(t,i,e){"use strict";e("5304")},5304:function(t,i,e){},f7e3:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("a-modal",{attrs:{title:t.title,width:1300,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[e("div",{attrs:{id:t.table_id}},[t.is_title?e("span",{staticStyle:{width:"100%","text-align":"center",display:"inline-block","font-size":"20px","font-weight":"bold"}},[t._v(t._s(t.print_title))]):t._e(),e("a-descriptions",{staticStyle:{"padding-top":"10px"},attrs:{column:t.col_num}},t._l(t.list1,(function(i,s){return"换行"!==i.title?e("a-descriptions-item",{key:s+30,staticStyle:{"white-space":"nowrap"},attrs:{span:t.jscolspan(t.list1[s+1],s,t.list1[s-1]),label:i.title}},[t._v(" "+t._s(i.value)+" ")]):t._e()})),1),e("div",{staticClass:"module_two",staticStyle:{display:"flex","flex-direction":"column"}},[1*t.printType==2?e("div",{directives:[{name:"show",rawName:"v-show",value:t.printList4.length>0,expression:"printList4.length>0"}],staticClass:"table_top",staticStyle:{border:"0.5px solid #999999",display:"flex","align-items":"center","justify-content":"space-between",width:"100%",height:"27px"}},t._l(t.printList4,(function(i,s){return e("div",{key:s,staticClass:"header_item",staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"},style:{marginLeft:0==s?"10px":"",marginRight:s==t.printList4.length-1?"20px":""}},[t._v(t._s(i.title)+"："+t._s(i.value))])})),0):t._e(),e("div",{staticClass:"table_container",staticStyle:{display:"flex","align-items":"center",width:"100%","border-left":"0.5px solid #999999"}},t._l(t.printList2,(function(i,s){return e("div",{key:s,staticClass:"table_item",staticStyle:{border:"0.5px solid #999999","border-left":"0",height:"27px",display:"flex","align-items":"center","justify-content":"center","font-weight":"bold"},style:{width:1/t.printList2.length*100+"%"}},[t._v(" "+t._s(i.title))])})),0),t._l(t.tableList,(function(i,s){return e("div",{key:s+30,staticClass:"table_container",staticStyle:{display:"flex","align-items":"center",width:"100%","border-left":"0.5px solid #999999"}},t._l(i,(function(i,n){return e("div",{key:n+s,staticClass:"table_item",staticStyle:{border:"0.5px solid #999999","border-left":"0",height:"27px",display:"flex","align-items":"center","justify-content":"center","font-size":"12px"},style:{width:1/t.printList2.length*100+"%"}},[t._v(t._s(i))])})),0)})),1*t.printType==2?e("div",{staticClass:"table_footer_one",staticStyle:{display:"flex","align-items":"center","justify-content":"center",width:"100%","border-left":"0.5px solid #999999"}},t._l(t.printList5,(function(i,s){return e("div",{key:s,staticClass:"table_item",staticStyle:{border:"0.5px solid #999999","border-left":"0",height:"27px",display:"flex","align-items":"center","padding-left":"10px"},style:{width:1/t.printList5.length*100+"%",borderLeft:t.printList5.length-1?"0px":"0.5px solid #999999"}},[t._v(t._s(i.title)+"："+t._s(i.value))])})),0):t._e(),t._l(t.printList6,(function(i,s){return 1*t.printType==2?e("div",{key:s,staticClass:"table_footer_two",staticStyle:{display:"flex","align-items":"center","justify-content":"center",width:"100%","border-left":"0.5px solid #999999"}},[e("div",{staticClass:"left_title",staticStyle:{height:"27px",width:"25%",border:"0.5px solid #999999","border-left":"0",display:"flex","align-items":"center","padding-left":"10px"}},[t._v(t._s(i.title)+"：")]),e("div",{staticClass:"right_content",staticStyle:{height:"27px",width:"75%",border:"0.5px solid #999999","border-left":"0",display:"flex","align-items":"center","justify-content":"space-between","padding-left":"10px"}},[i.value.value1?e("div",{staticStyle:{width:"100%",display:"flex","align-items":"center","justify-content":"space-between"}},[e("span",[t._v(t._s(i.value.value1))]),e("span",{staticStyle:{"margin-right":"20px"}},[t._v(t._s(i.value.value2))])]):e("span",[t._v(t._s(i.value))])])]):t._e()}))],2),e("a-descriptions",{staticStyle:{"margin-top":"10px"},attrs:{column:t.col_num}},t._l(t.list2,(function(i,s){return"换行"!==i.title?e("a-descriptions-item",{key:s,staticStyle:{"white-space":"nowrap"},attrs:{span:t.jscolspan(t.list2[s+1],s,t.list2[s-1]),label:i.title}},[t._v(" "+t._s(i.value)+" ")]):t._e()})),1)],1),t.is_show?e("span",{staticClass:"table-operator",staticStyle:{"text-align":"center",display:"inline-block",width:"100%"}},[e("a-button",{attrs:{type:"primary"},on:{click:t.print}},[t._v("打印")])],1):t._e()])},n=[],l=(e("159b"),e("a0e0")),a=(e("add5"),[]),r=[],o={components:{},data:function(){return{title:"打印预览",list1:[],list2:[],print_title:"",is_show:!0,labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,is_title:!1,data:r,columns:a,order_id:0,template_id:0,choice_ids:[],pigcms_id:0,id:0,col_num:3,tableList:[],printList1:[],printList2:[],printList3:[],printList4:[],printList5:[],printList6:[],printType:1,printRecordStatus:!0,table_id:""}},mounted:function(){},methods:{add:function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];this.table_id="print_"+parseInt(900*Math.random()+999)+"_"+(new Date).getTime(),this.title="打印预览",this.visible=!0,this.is_title=!1,this.is_show=!0,this.order_id=t,this.template_id=i,this.pigcms_id=e,this.choice_ids=s,this.data=[],this.columns=[],this.print_title="",this.getPrintInfo()},getPrintInfo:function(){var t=this;this.confirmLoading=!0,this.request(l["a"].getPrintInfo,{order_id:this.order_id,template_id:this.template_id,pigcms_id:this.pigcms_id,choice_ids:this.choice_ids}).then((function(i){t.confirmLoading=!1,console.log("res",i),t.printList1=i.printList1,t.printList2=i.printList2,t.printList3=i.printList3,t.printList4=i.printList4,t.printList5=i.printList5,t.printList6=i.printList6,t.tableList=i.tab_list,t.printType=i.type,t.print_title=i.print_title,t.col_num=i.col,t.is_title=i.is_title,t.list1=i.printList1,console.log("list1===========",t.list1),t.data=i.data_order,t.list2=i.printList3,i.printList2.forEach((function(i){t.columns.push({title:i.title,dataIndex:i.field_name,key:i.field_name})})),console.log("data",t.data),console.log("columns",t.columns),setTimeout((function(){t.print()}),500)})).catch((function(i){t.visible=!1}))},print:function(){var t=this;console.log({printable:this.table_id,type:"html",targetStyles:["*"],maxWidth:"100%",style:i,scanStyles:!1});var i='@page {  } @media print { .ant-table-tbody > tr > td {border-bottom: 1px solid #000000;-webkit-transition: all 0.3s, border 0s;transition: all 0.3s, border 0s;}   .ant-table-bordered .ant-table-thead > tr > th, .ant-table-bordered .ant-table-tbody > tr > td {border-right: 1px solid #000000;}  .ant-table-bordered .ant-table-header > table, .ant-table-bordered .ant-table-body > table, .ant-table-bordered .ant-table-fixed-left table, .ant-table-bordered .ant-table-fixed-right table {border: 1px solid #000000;border-right: 0;border-bottom: 0;} .ant-table-thead > tr > th {color: rgba(0, 0, 0, 1);font-weight: 600;text-align: left;background: #fafafa;border-bottom: 1px solid #000000;-webkit-transition: background 0.3s ease;transition: background 0.3s ease;} .ant-descriptions-item-colon::after {content:":";} .ant-table table {width: 100%;} .ant-descriptions-row td { width:3% } ';printJS({printable:this.table_id,type:"html",targetStyles:["*"],maxWidth:"100%",style:i,scanStyles:!1,onPrintDialogClose:function(){console.log("回调================",t.printRecordStatus),t.printRecordStatus&&(t.printRecordStatus=!1,t.request(l["a"].printRecordUrl,{order_id:t.order_id,pigcms_id:t.pigcms_id,choice_ids:t.choice_ids}).then((function(i){t.printRecordStatus=!0})))}})},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.form=t.$form.createForm(t)}),500)},jscolspan:function(t,i,e){return void 0===t?1:"换行"===t.title?this.col_num:"换行"!==t.title?1:void 0}}},d=o,c=(e("3675"),e("2877")),p=Object(c["a"])(d,s,n,!1,null,"78222d74",null);i["default"]=p.exports}}]);