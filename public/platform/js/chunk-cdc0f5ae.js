(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cdc0f5ae","chunk-758e3d78"],{"12be":function(t,e,i){},"73a4":function(t,e,i){"use strict";i("12be")},"84b2":function(t,e,i){"use strict";i("e281")},ce95:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:500,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",{attrs:{label:"选择打印模板",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-col",{attrs:{span:18}},[i("a-select",{staticStyle:{width:"117px"},attrs:{placeholder:"请选择打印模板"},model:{value:t.template_id,callback:function(e){t.template_id=e},expression:"template_id"}},t._l(t.template_list,(function(e,a){return i("a-select-option",{key:a,attrs:{value:e.template_id}},[t._v(" "+t._s(e.title)+" ")])})),1)],1)],1)],1)],1),i("print-order",{ref:"PrintModel"})],1)},n=[],s=i("a0e0"),l=i("f7e3"),o={components:{PrintOrder:l["default"]},data:function(){return{title:"选择打印模板",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,order_id:0,template_id:"",template_list:[],pigcms_id:0,choice_ids:[]}},mounted:function(){},methods:{add:function(t,e){this.title="选择打印模板",this.visible=!0,this.template_id="",this.pigcms_id=e,this.template_list=[],this.order_id=t,this.choice_ids=[],this.getTemplate()},arrUnique:function(t){for(var e=[],i=0,a=t.length;i<a;i++)-1===e.indexOf(t[i]["pigcms_id"])&&e.push(t[i]["pigcms_id"]);return e},batchPrint:function(t){var e=this,i=0;return t.length<1?(e.$message.error("请勾选账单"),!1):(i=this.arrUnique(t).length,i>1?(e.$message.error("当前仅支持同一个缴费人进行批量打印已缴账单"),!1):t.length>8?(e.$message.error("最多可选择8个账单打印，您当前选中"+t.length+"个"),!1):(e.title="选择打印模板",e.visible=!0,e.template_id="",e.template_list=[],e.order_id=0,e.pigcms_id=0,e.choice_ids=t,void e.getTemplate()))},getTemplate:function(){var t=this;this.request(s["a"].getTemplate).then((function(e){t.template_list=e}))},handleSubmit:function(){if(!this.template_id)return this.$message.error("选择打印模板"),!1;this.$emit("ok"),this.$refs.PrintModel.add(this.order_id,this.template_id,this.pigcms_id,this.choice_ids)},handleCancel:function(){this.visible=!1}}},r=o,d=(i("73a4"),i("2877")),c=Object(d["a"])(r,a,n,!1,null,null,null);e["default"]=c.exports},e281:function(t,e,i){},f7e3:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:1300,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[i("div",{attrs:{id:"print_table"}},[t.is_title?i("span",{staticStyle:{width:"100%","text-align":"center",display:"inline-block","font-size":"20px","font-weight":"bold"}},[t._v(t._s(t.print_title))]):t._e(),i("a-descriptions",{staticStyle:{"padding-top":"10px"},attrs:{column:t.col_num}},t._l(t.list1,(function(e,a){return"换行"!==e.title?i("a-descriptions-item",{key:a+30,staticStyle:{"white-space":"nowrap"},attrs:{span:t.jscolspan(t.list1[a+1],a,t.list1[a-1]),label:e.title}},[t._v(" "+t._s(e.value)+" ")]):t._e()})),1),i("div",[i("a-table",{attrs:{bordered:"",columns:t.columns,"data-source":t.data,pagination:!1,loading:t.confirmLoading}})],1),i("a-descriptions",{staticStyle:{"margin-top":"10px"},attrs:{column:t.col_num}},t._l(t.list2,(function(e,a){return"换行"!==e.title?i("a-descriptions-item",{key:a,staticStyle:{"white-space":"nowrap"},attrs:{span:t.jscolspan(t.list2[a+1],a,t.list2[a-1]),label:e.title}},[t._v(" "+t._s(e.value)+" ")]):t._e()})),1)],1),t.is_show?i("span",{staticClass:"table-operator",staticStyle:{"padding-left":"320px"}},[i("a-button",{attrs:{type:"primary"},on:{click:t.print}},[t._v("打印")])],1):t._e()])},n=[],s=(i("159b"),i("a0e0")),l=(i("add5"),[]),o=[],r={components:{},data:function(){return{title:"打印预览",list1:[],list2:[],print_title:"",is_show:!0,labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,is_title:!1,data:o,columns:l,order_id:0,template_id:0,choice_ids:[],pigcms_id:0,id:0,col_num:3}},mounted:function(){},methods:{add:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];this.title="打印预览",this.visible=!0,this.is_title=!1,this.is_show=!0,this.order_id=t,this.template_id=e,this.pigcms_id=i,this.choice_ids=a,this.data=[],this.columns=[],this.print_title="",this.getPrintInfo()},getPrintInfo:function(){var t=this;this.confirmLoading=!0,this.request(s["a"].getPrintInfo,{order_id:this.order_id,template_id:this.template_id,pigcms_id:this.pigcms_id,choice_ids:this.choice_ids}).then((function(e){t.confirmLoading=!1,console.log("res",e),t.print_title=e.print_title,t.col_num=e.col,t.is_title=e.is_title,t.list1=e.printList1,console.log("list1===========",t.list1),t.data=e.data_order,t.list2=e.printList3,e.printList2.forEach((function(e){t.columns.push({title:e.title,dataIndex:e.field_name,key:e.field_name})})),console.log("data",t.data),console.log("columns",t.columns),setTimeout((function(){t.print()}),500)}))},print:function(){console.log({printable:"print_table",type:"html",targetStyles:["*"],maxWidth:"100%",style:t,scanStyles:!1});var t='@page {  } @media print { .ant-table-tbody > tr > td {border-bottom: 1px solid #000000;-webkit-transition: all 0.3s, border 0s;transition: all 0.3s, border 0s;}   .ant-table-bordered .ant-table-thead > tr > th, .ant-table-bordered .ant-table-tbody > tr > td {border-right: 1px solid #000000;}  .ant-table-bordered .ant-table-header > table, .ant-table-bordered .ant-table-body > table, .ant-table-bordered .ant-table-fixed-left table, .ant-table-bordered .ant-table-fixed-right table {border: 1px solid #000000;border-right: 0;border-bottom: 0;} .ant-table-thead > tr > th {color: rgba(0, 0, 0, 1);font-weight: 600;text-align: left;background: #fafafa;border-bottom: 1px solid #000000;-webkit-transition: background 0.3s ease;transition: background 0.3s ease;} .ant-descriptions-item-colon::after {content:":";} .ant-table table {width: 100%;} .ant-descriptions-row td { width:3% } ';printJS({printable:"print_table",type:"html",targetStyles:["*"],maxWidth:"100%",style:t,scanStyles:!1})},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.post.id=0,t.form=t.$form.createForm(t)}),500)},jscolspan:function(t,e,i){return void 0===t?1:"换行"===t.title?this.col_num:"换行"!==t.title?1:void 0}}},d=r,c=(i("84b2"),i("2877")),p=Object(c["a"])(d,a,n,!1,null,null,null);e["default"]=p.exports}}]);