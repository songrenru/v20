(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bb4d142"],{"1aad":function(t,e,i){"use strict";i("e21b")},e21b:function(t,e,i){},f7e3:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:1300,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[i("div",{attrs:{id:t.table_id}},[t.is_title?i("span",{staticStyle:{width:"100%","text-align":"center",display:"inline-block","font-size":"20px","font-weight":"bold"}},[t._v(t._s(t.print_title))]):t._e(),3!=t.printType?i("div",{staticClass:"header_show",staticStyle:{width:"100%",display:"flex","flex-wrap":"wrap"}},t._l(t.list1,(function(e,n){return"标题"!=e.title?i("div",{key:n,staticClass:"page_header_item",staticStyle:{"flex-shrink":"0",margin:"5px 0","word-break":"break-word"},style:{width:"换行"==e.title?"100%":e.width?e.width:1/t.col_num*100+"%",margin:"换行"==e.title?"0":"5px 0"}},["换行"!=e.title?i("div",{staticStyle:{"margin-left":"10px"},style:t.font1style},[t._v(" "+t._s(e.title)+"："+t._s(e.value)+" ")]):t._e()]):t._e()})),0):i("a-descriptions",{class:"template"+t.printType+"type",staticStyle:{"padding-top":"10px"},attrs:{column:t.col_num}},t._l(t.list1,(function(e,n){return"换行"!==e.title?i("a-descriptions-item",{key:n+30,staticStyle:{"white-space":"nowrap"},scopedSlots:t._u([{key:"label",fn:function(){return[i("span",{style:t.font1style},[t._v(" "+t._s(e.title)+"： ")])]},proxy:!0}],null,!0)},[i("span",{style:t.font1style},[t._v(t._s(e.value))])]):t._e()})),1),i("div",{staticClass:"module_two",staticStyle:{display:"flex","flex-direction":"column"}},[1*t.printType==2||1*t.printType==3?i("div",{directives:[{name:"show",rawName:"v-show",value:t.printList4.length>0,expression:"printList4.length>0"}],staticClass:"table_top",staticStyle:{border:"0.5px solid #999999",display:"flex","align-items":"center","justify-content":"space-between",width:"100%",height:"27px"}},t._l(t.printList4,(function(e,n){return i("div",{key:n,staticClass:"header_item",staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"},style:{marginLeft:0==n?"10px":"",marginRight:n==t.printList4.length-1?"20px":""}},[i("span",{style:t.font4style},[t._v(t._s(e.title)+"："+t._s(e.value))])])})),0):t._e(),i("div",{staticClass:"table_container",staticStyle:{display:"flex","align-items":"center",width:"100%","border-left":"0.5px solid #999999"}},t._l(t.printList2,(function(e,n){return i("div",{key:n,staticClass:"table_item",staticStyle:{border:"0.5px solid #999999","border-left":"0",height:"27px",display:"flex","align-items":"center","justify-content":"center","font-weight":"bold","word-break":"break-all"},style:{width:1/t.printList2.length*100+"%"}},[i("span",{style:t.font2style},[t._v(t._s(e.title))])])})),0),t._l(t.tableList,(function(e,n){return i("div",{key:n+30,staticClass:"table_container",staticStyle:{display:"flex","align-items":"center",width:"100%","border-left":"0.5px solid #999999"}},t._l(e,(function(e,s){return i("div",{key:s+n,staticClass:"table_item",staticStyle:{border:"0.5px solid #999999","border-left":"0",height:"27px",display:"flex","align-items":"center","justify-content":"center","font-size":"12px","word-break":"break-all"},style:{width:1/t.printList2.length*100+"%"}},[i("span",{style:t.font2style},[t._v(t._s(e))])])})),0)})),t._l(t.blankline,(function(e){return t.blankline>0?i("div",{key:e+"_blankline",staticClass:"table_container",staticStyle:{display:"flex","align-items":"center",width:"100%","border-left":"0.5px solid #999999"}},t._l(t.printList2,(function(e,n){return i("div",{key:n+"_2blankline",staticClass:"table_item",staticStyle:{border:"0.5px solid #999999","border-left":"0",height:"27px",display:"flex","align-items":"center","justify-content":"center","font-size":"12px"},style:{width:1/t.printList2.length*100+"%"}},[i("span")])})),0):t._e()})),t._l(t.printList7,(function(e,n){return 1*t.printType==3?i("div",{staticClass:"table_footer_two print_list7",staticStyle:{display:"flex","align-items":"center","justify-content":"center",width:"100%","border-left":"0.5px solid #999999"}},[i("div",{staticClass:"left_title",staticStyle:{height:"27px",width:"25%",border:"0.5px solid #999999","border-left":"0",display:"flex","align-items":"center","padding-left":"10px"}},[i("span",{style:t.font7style},[t._v(t._s(e.title)+"：")])]),i("div",{staticClass:"right_71",staticStyle:{height:"27px",width:"12.5%",border:"0.5px solid #999999","border-left":"0",display:"flex","align-items":"center","padding-left":"10px"},style:t.font7style},[t._v("人民币大写")]),i("div",{staticClass:"right_72",staticStyle:{height:"27px",width:"40.4%",border:"0.5px solid #999999","border-left":"0",display:"flex","align-items":"center","padding-left":"10px"},style:t.font7style},[t._v(t._s(e.value.value2?e.value.value1:""))]),i("div",{staticClass:"right_73",staticStyle:{height:"27px",width:"22%",border:"0.5px solid #999999","border-left":"0",display:"flex","align-items":"center","padding-left":"10px"},style:t.font7style},[t._v(t._s(e.value.value2?e.value.value2:""))])]):t._e()})),t._l(t.active5List,(function(e,n){return 1*t.printType==2||1*t.printType==3?i("div",{staticClass:"table_footer_one print_list5",staticStyle:{display:"flex","align-items":"center","justify-content":"center",width:"100%","border-left":"0.5px solid #999999"}},t._l(e,(function(n,s){return i("div",{staticClass:"table_item",staticStyle:{border:"0.5px solid #999999","border-left":"0",height:"27px",display:"flex","align-items":"center","padding-left":"10px"},style:{width:1/e.length*100+"%"}},[3==t.printType?i("div",{staticStyle:{width:"100%",height:"100%",display:"flex"},style:t.font5style},[i("span",{staticStyle:{"border-right":"0.5px solid #999999",height:"27px",display:"flex",width:"50%"}},[t._v(t._s(n.title))]),i("span",{staticStyle:{height:"27px",display:"flex",width:"50%","margin-left":"10px"}},[t._v(t._s(n.value))])]):i("span",[t._v(t._s(n.title)+"："+t._s(n.value))])])})),0):t._e()})),t._l(t.printList6,(function(e,n){return 1*t.printType==2||1*t.printType==3?i("div",{key:n,staticClass:"table_footer_two print_list6",staticStyle:{display:"flex","align-items":"center","justify-content":"center",width:"100%","border-left":"0.5px solid #999999"}},[i("div",{staticClass:"left_title",staticStyle:{height:"27px",width:"25%",border:"0.5px solid #999999","border-left":"0",display:"flex","align-items":"center","padding-left":"10px"}},[i("span",{style:t.font6style},[t._v(t._s(e.title)+"：")])]),i("div",{staticClass:"right_content",staticStyle:{height:"27px",width:"75%",border:"0.5px solid #999999","border-left":"0",display:"flex","align-items":"center","justify-content":"space-between","padding-left":"10px"}},[e.value.value1?i("div",{staticStyle:{width:"100%",display:"flex","align-items":"center","justify-content":"space-between"}},[i("span",{style:t.font6style},[t._v(t._s(e.value.value1))]),i("span",{staticStyle:{"margin-right":"20px"},style:t.font6style},[t._v(t._s(e.value.value2))])]):i("span",{style:t.font6style},[t._v(t._s(e.value))])])]):t._e()}))],2),1*t.printType==3&&t.print_desc.length>0?i("div",{staticStyle:{margin:"10px","text-align":"center","font-size":"16px","font-weight":"bold",color:"#000"}},[i("span",[t._v(t._s(t.print_desc))]),t._v(" "),i("span",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(t.print_time_str))])]):t._e(),t.not_house_rate_desc.length>0?i("div",{staticStyle:{margin:"10px","text-align":"center","font-size":"16px","font-weight":"bold",color:"#000"}},[i("span",[t._v(t._s(t.not_house_rate_desc))])]):t._e(),3!=t.printType?i("div",{staticClass:"header_show",staticStyle:{width:"100%",display:"flex","flex-wrap":"wrap"}},t._l(t.list2,(function(e,n){return"标题"!=e.title?i("div",{key:n,staticClass:"page_header_item",staticStyle:{"flex-shrink":"0",margin:"5px 0","word-break":"break-word"},style:{width:"换行"==e.title?"100%":e.width?e.width:1/t.col_num*100+"%",margin:"换行"==e.title?"0":"5px 0"}},["换行"!=e.title?i("div",{staticStyle:{"margin-left":"10px"},style:t.font1style},[t._v(" "+t._s(e.title)+"："+t._s(e.value)+" ")]):t._e()]):t._e()})),0):i("a-descriptions",{class:"template"+t.printType+"type",staticStyle:{"margin-top":"10px"},attrs:{column:t.col_num}},t._l(t.list2,(function(e,n){return"换行"!==e.title?i("a-descriptions-item",{key:n,staticStyle:{"white-space":"nowrap"},scopedSlots:t._u([{key:"label",fn:function(){return[78==e.configure_id?i("span",{style:t.font3style},[t._v(" "+t._s(e.title)+" ")]):i("span",{style:t.font3style},[t._v(" "+t._s(e.title)+"： ")])]},proxy:!0}],null,!0)},[i("span",{style:t.font3style},[t._v(t._s(e.value))])]):t._e()})),1)],1),t.is_show?i("span",{staticClass:"table-operator",staticStyle:{"text-align":"center",display:"inline-block",width:"100%"}},[i("a-button",{attrs:{type:"primary"},on:{click:t.print}},[t._v("打印")])],1):t._e()])},s=[],o=(i("d3b7"),i("d81d"),i("159b"),i("a0e0")),l=(i("add5"),[]),a=[],r={components:{},data:function(){return{title:"打印预览",list1:[],list2:[],print_title:"",is_show:!0,labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,is_title:!1,data:a,columns:l,order_id:0,template_id:0,choice_ids:[],pigcms_id:0,id:0,col_num:3,tableList:[],printList1:[],printList2:[],printList3:[],printList4:[],printList5:[],printList6:[],printList7:[],printType:1,active5List:[],printRecordStatus:!0,table_id:"",font_set:{font1:{print_type:1,size:"",weight:"",style:"",textdecoration:""},font2:{print_type:2,size:"",weight:"",style:"",textdecoration:""},font3:{print_type:3,size:"",weight:"",style:"",textdecoration:""},font4:{print_type:4,size:"",weight:"",style:"",textdecoration:""},font5:{print_type:5,size:"",weight:"",style:"",textdecoration:""},font6:{print_type:6,size:"",weight:"",style:"",textdecoration:""},font7:{print_type:7,size:"",weight:"",style:"",textdecoration:""}},font1style:"",font2style:"",font3style:"",font4style:"",font5style:"",font6style:"",font7style:"",print_desc:"",print_time_str:"",blankline:0,not_house_rate_desc:""}},mounted:function(){},methods:{getReduceRes:function(t){var e=this,i=t.reduce((function(t,i,n,s){return 0==n&&"换行"==i.title?e.col_num-1:0==n&&"标题"==i.title?-1:0==n?0:"换行"==i.title&&(t+2)%e.col_num==0?t+1:"换行"==i.title&&(t+2)%e.col_num!=0?t+e.col_num-(t+1+1)%e.col_num+1:"标题"==i.title?t:"换行"!=i.title&&"标题"!=i.title?t+1:void 0}),0);return i},pageHeaderMap:function(){var t=this,e=[];this.list1.map((function(i){e.push(i),i.realIndex=t.getReduceRes(e)})),this.list1.map((function(e,i){if("换行"==e.title){var n="";n=(t.list1[i-1]["realIndex"]+1)%t.col_num==0?(1-(t.list1[i-1]["realIndex"]+1)%t.col_num)/t.col_num*100+"%":(t.col_num+1-(t.list1[i-1]["realIndex"]+1)%t.col_num)/t.col_num*100+"%",t.list1[i-1]["width"]=n}})),console.log("this.list1===>",this.list1)},pageFooterMap:function(){var t=this,e=[];this.list2.map((function(i){e.push(i),i.realIndex=t.getReduceRes(e)})),this.list2.map((function(e,i){if("换行"==e.title){var n="";n=(t.list2[i-1]["realIndex"]+1)%t.col_num==0?(1-(t.list2[i-1]["realIndex"]+1)%t.col_num)/t.col_num*100+"%":(t.col_num+1-(t.list2[i-1]["realIndex"]+1)%t.col_num)/t.col_num*100+"%",t.list2[i-1]["width"]=n}})),console.log("this.list2===>",this.list2)},add:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];this.table_id="print_"+parseInt(900*Math.random()+999)+"_"+(new Date).getTime(),this.title="打印预览",this.visible=!0,this.is_title=!1,this.is_show=!0,this.printRecordStatus=!0,this.order_id=t,this.template_id=e,this.pigcms_id=i,this.choice_ids=n,this.data=[],this.columns=[],this.print_title="",this.getPrintInfo()},getPrintInfo:function(){var t=this;this.confirmLoading=!0,this.request(o["a"].getPrintInfo,{order_id:this.order_id,template_id:this.template_id,pigcms_id:this.pigcms_id,choice_ids:this.choice_ids}).then((function(e){if(t.confirmLoading=!1,console.log("res",e),t.printList1=e.printList1,t.printList2=e.printList2,t.printList3=e.printList3,t.printList4=e.printList4,t.printList5=e.printList5,t.printList6=e.printList6,t.printList7=e.printList7,t.tableList=e.tab_list,t.printType=e.type,t.print_title=e.print_title,t.col_num=e.col,t.is_title=e.is_title,t.list1=e.printList1,console.log("list1===========",t.list1),t.data=e.data_order,t.list2=e.printList3,t.pageHeaderMap(),t.pageFooterMap(),e.printList2.forEach((function(e){t.columns.push({title:e.title,dataIndex:e.field_name,key:e.field_name})})),void 0!=e.font_set&&e.font_set)for(var i in e.font_set)t.font_set[i]=e.font_set[i],t.handleFontStyle(t.font_set[i].print_type);void 0!=e.blankline&&e.blankline>0&&(t.blankline=e.blankline),void 0!=e.not_house_rate_desc&&e.not_house_rate_desc.length>0&&(t.not_house_rate_desc=e.not_house_rate_desc),t.active5List=[],e.printList5&&e.printList5.length>0&&e.printList5.forEach((function(e,i){var n=i/3,s=Math.floor(n);void 0!=t.active5List[s]||(t.active5List[s]=[]),t.active5List[s].push(e)})),3==e.type?(0==e.prints_num?t.print_desc="第1次打印，打印人："+e.print_name:t.print_desc="第"+(e.prints_num+1)+"次打印，请避免重复做账。补打人："+e.print_name,t.print_time_str=e.print_time):(t.print_time_str="",t.print_desc=""),void 0!=e.is_notpay_print&&1==e.is_notpay_print&&(t.print_time_str="",t.print_desc=""),console.log("active5List",t.active5List),console.log("columns",t.columns),setTimeout((function(){t.print()}),500)})).catch((function(e){t.visible=!1}))},handleFontStyle:function(t){if(1==t){var e="";void 0!=this.font_set.font1&&(this.font_set.font1.size&&this.font_set.font1.size>0&&(e+="font-size:"+this.font_set.font1.size+"px;"),this.font_set.font1.weight&&this.font_set.font1.weight.length>0&&(e+="font-weight:"+this.font_set.font1.weight+";"),this.font_set.font1.style&&this.font_set.font1.style.length>0&&(e+="font-style:"+this.font_set.font1.style+";"),this.font_set.font1.textdecoration&&this.font_set.font1.textdecoration.length>0&&(e+="text-decoration:"+this.font_set.font1.textdecoration+";"),this.font1style=e)}else if(2==t){var i="";void 0!=this.font_set.font2&&(this.font_set.font2.size&&this.font_set.font2.size>0&&(i+="font-size:"+this.font_set.font2.size+"px;"),this.font_set.font2.weight&&this.font_set.font2.weight.length>0&&(i+="font-weight:"+this.font_set.font2.weight+";"),this.font_set.font2.style&&this.font_set.font2.style.length>0&&(i+="font-style:"+this.font_set.font2.style+";"),this.font_set.font2.textdecoration&&this.font_set.font2.textdecoration.length>0&&(i+="text-decoration:"+this.font_set.font2.textdecoration+";"),this.font2style=i)}else if(3==t){var n="";void 0!=this.font_set.font3&&(this.font_set.font3.size&&this.font_set.font3.size>0&&(n+="font-size:"+this.font_set.font3.size+"px;"),this.font_set.font3.weight&&this.font_set.font3.weight.length>0&&(n+="font-weight:"+this.font_set.font3.weight+";"),this.font_set.font3.style&&this.font_set.font3.style.length>0&&(n+="font-style:"+this.font_set.font3.style+";"),this.font_set.font3.textdecoration&&this.font_set.font3.textdecoration.length>0&&(n+="text-decoration:"+this.font_set.font3.textdecoration+";")),this.font3style=n}else if(4==t){var s="";void 0!=this.font_set.font4&&(this.font_set.font4.size&&this.font_set.font4.size>0&&(s+="font-size:"+this.font_set.font4.size+"px;"),this.font_set.font4.weight&&this.font_set.font4.weight.length>0&&(s+="font-weight:"+this.font_set.font4.weight+";"),this.font_set.font4.style&&this.font_set.font4.style.length>0&&(s+="font-style:"+this.font_set.font4.style+";"),this.font_set.font4.textdecoration&&this.font_set.font4.textdecoration.length>0&&(s+="text-decoration:"+this.font_set.font4.textdecoration+";")),this.font4style=s}else if(5==t){var o="";void 0!=this.font_set.font5&&(this.font_set.font5.size&&this.font_set.font5.size>0&&(o+="font-size:"+this.font_set.font5.size+"px;"),this.font_set.font5.weight&&this.font_set.font5.weight.length>0&&(o+="font-weight:"+this.font_set.font5.weight+";"),this.font_set.font5.style&&this.font_set.font5.style.length>0&&(o+="font-style:"+this.font_set.font5.style+";"),this.font_set.font5.textdecoration&&this.font_set.font5.textdecoration.length>0&&(o+="text-decoration:"+this.font_set.font5.textdecoration+";")),this.font5style=o}else if(6==t){var l="";void 0!=this.font_set.font6&&(this.font_set.font6.size&&this.font_set.font6.size>0&&(l+="font-size:"+this.font_set.font6.size+"px;"),this.font_set.font6.weight&&this.font_set.font6.weight.length>0&&(l+="font-weight:"+this.font_set.font6.weight+";"),this.font_set.font6.style&&this.font_set.font6.style.length>0&&(l+="font-style:"+this.font_set.font6.style+";"),this.font_set.font6.textdecoration&&this.font_set.font6.textdecoration.length>0&&(l+="text-decoration:"+this.font_set.font6.textdecoration+";")),this.font6style=l}else if(7==t){var a="";void 0!=this.font_set.font7&&(this.font_set.font7.size&&this.font_set.font7.size>0&&(a+="font-size:"+this.font_set.font7.size+"px;"),this.font_set.font7.weight&&this.font_set.font7.weight.length>0&&(a+="font-weight:"+this.font_set.font7.weight+";"),this.font_set.font7.style&&this.font_set.font7.style.length>0&&(a+="font-style:"+this.font_set.font7.style+";"),this.font_set.font7.textdecoration&&this.font_set.font7.textdecoration.length>0&&(a+="text-decoration:"+this.font_set.font7.textdecoration+";")),this.font7style=a}},print:function(){var t=this,e="";e=3==this.printType?'@page {  } @media print { .ant-table-tbody > tr > td {border-bottom: 1px solid #000000;-webkit-transition: all 0.3s, border 0s;transition: all 0.3s, border 0s;}   .ant-table-bordered .ant-table-thead > tr > th, .ant-table-bordered .ant-table-tbody > tr > td {border-right: 1px solid #000000;}  .ant-table-bordered .ant-table-header > table, .ant-table-bordered .ant-table-body > table, .ant-table-bordered .ant-table-fixed-left table, .ant-table-bordered .ant-table-fixed-right table {border: 1px solid #000000;border-right: 0;border-bottom: 0;} .ant-table-thead > tr > th {color: rgba(0, 0, 0, 1);font-weight: 600;text-align: left;background: #fafafa;border-bottom: 1px solid #000000;-webkit-transition: background 0.3s ease;transition: background 0.3s ease;} .ant-descriptions-item-colon::after {content:"";} .ant-table table {width: 100%;} .ant-descriptions-row td { width:3% } .template3type {text-align: center;} .template3type .ant-descriptions-item:last-child {text-align: right;} .template3type .ant-descriptions-item:first-child {text-align: left;}':'@page {  } @media print { .ant-table-tbody > tr > td {border-bottom: 1px solid #000000;-webkit-transition: all 0.3s, border 0s;transition: all 0.3s, border 0s;}   .ant-table-bordered .ant-table-thead > tr > th, .ant-table-bordered .ant-table-tbody > tr > td {border-right: 1px solid #000000;}  .ant-table-bordered .ant-table-header > table, .ant-table-bordered .ant-table-body > table, .ant-table-bordered .ant-table-fixed-left table, .ant-table-bordered .ant-table-fixed-right table {border: 1px solid #000000;border-right: 0;border-bottom: 0;} .ant-table-thead > tr > th {color: rgba(0, 0, 0, 1);font-weight: 600;text-align: left;background: #fafafa;border-bottom: 1px solid #000000;-webkit-transition: background 0.3s ease;transition: background 0.3s ease;} .ant-descriptions-item-colon::after {content:"";} .ant-table table {width: 100%;} .ant-descriptions-row td { width:3% } ',printJS({printable:this.table_id,type:"html",targetStyles:["*"],maxWidth:"100%",style:e,scanStyles:!1,onPrintDialogClose:function(){console.log("回调================",t.printRecordStatus),t.printRecordStatus&&(t.printRecordStatus=!1,t.request(o["a"].printRecordUrl,{order_id:t.order_id,pigcms_id:t.pigcms_id,choice_ids:t.choice_ids}).then((function(e){t.printRecordStatus=!0})))}})},handleCancel:function(){var t=this;this.visible=!1,this.printRecordStatus=!0,this.print_desc="",setTimeout((function(){t.form=t.$form.createForm(t)}),500)},jscolspan:function(t,e,i){return void 0===t?1:"换行"===t.title?this.col_num:"换行"!==t.title?1:void 0}}},f=r,d=(i("1aad"),i("0c7c")),h=Object(d["a"])(f,n,s,!1,null,"b16e99f0",null);e["default"]=h.exports}}]);