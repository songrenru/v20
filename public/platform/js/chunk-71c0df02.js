(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71c0df02","chunk-0a50265e","chunk-0b1f93fd","chunk-2d0b6a79","chunk-2d0b3786"],{"132b":function(e,t,i){},"1da1":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i("d3b7");function s(e,t,i,s,a,n,r){try{var o=e[n](r),l=o.value}catch(c){return void i(c)}o.done?t(l):Promise.resolve(l).then(s,a)}function a(e){return function(){var t=this,i=arguments;return new Promise((function(a,n){var r=e.apply(t,i);function o(e){s(r,a,n,o,l,"next",e)}function l(e){s(r,a,n,o,l,"throw",e)}o(void 0)}))}}},2909:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var s=i("6b75");function a(e){if(Array.isArray(e))return Object(s["a"])(e)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var r=i("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return a(e)||n(e)||Object(r["a"])(e)||o()}},"3bf9":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bg-box"},[i("div",{staticClass:"left_box",style:e.right_show?"":"width:0%;"},[e._m(0),i("div",{staticClass:"left_center_box"},[i("div",{staticClass:"text_title"},[e._v("物业评分")]),i("div",{staticClass:"echarts"},[i("div",{staticClass:"tip_box"},e._l(e.tipsItem,(function(t,s){return i("div",{staticClass:"tips",style:s==e.num_1?"background: #2C6FFF;color: #FFFFFF;":"",on:{click:function(i){return e.selectde_start(t.type-1)}}},[e._v(" "+e._s(t.name)+" ")])})),0),i("div",{staticClass:"echarts_box"},[e.property_rating&&""!=e.property_rating?i("div",{staticClass:"mini_box_1"},[i("div",{staticClass:"table-right"},[i("div",{staticClass:"table-scroll_right"},e._l(e.property_rating,(function(t,s){return i("div",{staticClass:"table-flex_body_right"},e._l(t,(function(t,a){return i("div",{staticClass:"text_1",on:{mouseenter:function(i){return e.enters(i,t.title,s)},mouseleave:function(t){return e.leaver()}}},[e._v(e._s(t.title))])})),0)})),0)])]):i("div",{staticClass:"tip_text_box"},[i("div",{staticClass:"tip_text"},[e._v("暂无记录")])])])])]),e._m(1),i("div",{staticClass:"right_btn",style:e.right_show?"":"left:10px",on:{click:e.rightshow}},[e._v(e._s(e.right_show?"<":">")+" ")])]),i("div",{staticClass:"right_box",style:e.right_show?"":"width:100%"},[e._m(2),i("div",{staticClass:"top_box",staticStyle:{height:"130px","margin-top":"10px"}},e._l(e.work_label_list,(function(t,s){return i("div",{key:s,staticClass:"worker_order_list"},[i("div",{staticClass:"name"},[e._v(e._s(t.name))]),i("div",{staticClass:"value"},[e._v(e._s(t.value)+"/起")])])})),0),i("div",{staticClass:"center_box"},[i("div",{staticClass:"text_1"},[e._v("分类：")]),i("a-select",{staticClass:"select_1",staticStyle:{width:"100px"},attrs:{"default-value":"全部"},on:{change:e.handleChange}},[i("a-icon",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"suffixIcon",type:"caret-down"},slot:"suffixIcon"}),i("a-select-option",{attrs:{value:"0"}},[e._v(" 全部 ")]),e._l(e.subject_list,(function(t,s){return i("a-select-option",{attrs:{value:t.category_id}},[e._v(" "+e._s(t.subject_name)+" ")])}))],2),i("a-select",{staticClass:"select_1",staticStyle:{width:"100px"},on:{change:e.handleChange2},model:{value:e.secondCate,callback:function(t){e.secondCate=t},expression:"secondCate"}},[i("a-icon",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"suffixIcon",type:"caret-down"},slot:"suffixIcon"}),i("a-select-option",{attrs:{value:"0"}},[e._v(" 全部 ")]),e._l(e.options,(function(t,s){return i("a-select-option",{attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])}))],2),i("a-select",{staticClass:"select_1",staticStyle:{width:"170px",color:"#86869D"},attrs:{"default-value":"筛选条件"},on:{change:e.handleChange3}},[i("a-icon",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"suffixIcon",type:"caret-down"},slot:"suffixIcon"}),e._l(e.shaixuanList,(function(t,s){return i("a-select-option",{attrs:{value:t.value}},[i("a-tooltip",{attrs:{title:t.name}},[e._v(" "+e._s(t.name)+" ")])],1)}))],2),e.is_show?i("a-input",{staticClass:"input_1",attrs:{placeholder:"请输入"},model:{value:e.search.search,callback:function(t){e.$set(e.search,"search",t)},expression:"search.search"}}):e.is_room?i("a-cascader",{staticClass:"input_1",staticStyle:{width:"150px",border:"none"},attrs:{options:e.options1,"load-data":e.loadDataFunc1,placeholder:"请选择房间","change-on-select":""},on:{change:e.setVisionsFunc1},model:{value:e.search.room_ids,callback:function(t){e.$set(e.search,"room_ids",t)},expression:"search.room_ids"}}):i("a-select",{staticClass:"select_1",staticStyle:{width:"140px"},on:{change:e.publicAreaChange},model:{value:e.search.public_id,callback:function(t){e.$set(e.search,"public_id",t)},expression:"search.public_id"}},e._l(e.publicAreaList,(function(t,s){return i("a-select-option",{attrs:{value:t.public_area_id}},[i("a-tooltip",{attrs:{title:t.public_area_name}},[e._v(" "+e._s(t.public_area_name)+" ")])],1)})),1),i("a-select",{staticClass:"select_1",staticStyle:{width:"140px"},attrs:{"default-value":"全部状态"},on:{change:e.handleChange4}},[i("a-icon",{staticStyle:{color:"#FFFFFF"},attrs:{slot:"suffixIcon",type:"caret-down"},slot:"suffixIcon"}),i("a-select-option",{attrs:{value:"0"}},[e._v(" 全部状态 ")]),i("a-select-option",{attrs:{value:"10"}},[e._v(" 未指派 ")]),i("a-select-option",{attrs:{value:"20"}},[e._v(" 已指派 ")]),i("a-select-option",{attrs:{value:"30"}},[e._v(" 处理中 ")]),i("a-select-option",{attrs:{value:"40"}},[e._v(" 已办结 ")]),i("a-select-option",{attrs:{value:"50"}},[e._v(" 已撤回 ")]),i("a-select-option",{attrs:{value:"60"}},[e._v(" 已关闭 ")]),i("a-select-option",{attrs:{value:"70"}},[e._v(" 已评价 ")])],1),i("div",{staticClass:"text_1"},[e._v("上报时间：")]),i("a-range-picker",{staticClass:"select_time",attrs:{placeholder:["请选择开始时间","请选择结束时间"],separator:"至"},on:{change:e.onChange}},[i("a-icon",{attrs:{slot:"suffixIcon",type:"none"},slot:"suffixIcon"})],1),i("div",{staticClass:"btn",on:{click:function(t){return e.findAll()}}},[e._v("查询")]),i("div",{staticClass:"btn",on:{click:function(t){return e.addWorkerOrder()}}},[e._v("添加工单")])],1),i("div",{staticClass:"bottom_box"},[i("a-table",{staticClass:"table_1",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"operation",fn:function(t,s){return i("span",{},[i("a",{on:{click:function(t){return e.get_detail(s.order_id)}}},[e._v("详情")])])}},{key:"status_txt",fn:function(t,s){return i("span",{},[i("span",{style:"color:"+s.color},[e._v(e._s(s.status_txt))])])}},{key:"order_content",fn:function(t,s){return i("span",{},[s.order_content.length>8?i("a-tooltip",{attrs:{placement:"topLeft"}},[i("template",{slot:"title"},[i("span",[e._v(e._s(s.order_content))])]),i("span",[e._v(e._s(s.order_content))])],2):i("span",[e._v(e._s(s.order_content))])],1)}}])})],1)]),i("a-drawer",{attrs:{title:"查看详情",width:"700",maskClosable:!1,closable:!0,visible:e.visible},on:{close:e.onClose}},[e.visible?i("a-tabs",{attrs:{type:"card","default-active-key":"1"},on:{change:e.callback}},[i("a-tab-pane",{key:"1",attrs:{tab:"工单详情"}},[i("div",{staticClass:"content_box"},[i("div",{staticClass:"item_box"},e._l(e.detail.order_detail_arr,(function(t,s){return i("div",{staticClass:"list"},[i("div",{staticClass:"text_1"},[e._v(e._s(t.title)+"：")]),i("div",{staticClass:"text_2"},[e._v(e._s(t.content?t.content:"无"))])])})),0),e.detail.order_detail.order_imgs.length>0?i("div",{staticClass:"list_2"},[i("div",{staticClass:"text_1"},[e._v("上报图例：")]),i("viewer",{attrs:{images:e.detail.order_detail.order_imgs}},e._l(e.detail.order_detail.order_imgs,(function(e,t){return i("img",{key:t,staticClass:"img_1",staticStyle:{"margin-left":"5px"},attrs:{src:e}})})),0)],1):e._e(),i("div",{staticClass:"list_3"},[i("div",{staticClass:"text_1"},[e._v("状态：")]),i("div",{staticClass:"text_2",style:"color:"+e.detail.order_detail.event_status_color},[e._v(" "+e._s(e.detail.order_detail.event_status_txt)+" ")])]),i("div",{staticClass:"title"},[e._v("处理记录")]),i("div",{staticClass:"list_4"},[i("div",{staticClass:"list_box"},[e._l(e.detail.order_detail.log_info.children,(function(t,s){return i("div",{staticClass:"list"},[i("div",{staticClass:"text_1"},[e._v(e._s(t.title)+"：")]),i("div",{staticClass:"text_2"},[e._v(e._s(t.content?t.content:"无"))])])})),i("div",{staticClass:"list_2"},[i("div",{staticClass:"text_1"},[e._v("图例：")]),e.detail.order_detail.log_info&&e.detail.order_detail.log_info.imgs&&e.detail.order_detail.log_info.imgs[0]?i("viewer",{attrs:{images:e.detail.order_detail.log_info.imgs}},e._l(e.detail.order_detail.log_info.imgs,(function(e,t){return i("img",{key:t,staticClass:"img_1",staticStyle:{"margin-left":"5px"},attrs:{src:e}})})),0):i("div",[e._v("无")])],1)],2)]),e.show?i("div",{staticClass:"list_5"},[i("div",{staticClass:"tab_box"},e._l(e.tab_arr,(function(t,s){return i("div",{staticClass:"tab",style:e.num==s?"":"background-color: #FFFFFF;color: rgb(49, 88, 255);z-index:10",on:{click:function(t){return e.changeCurrent(s)}}},[e._v(e._s(t.name))])})),0),0==e.num?i("div",{staticClass:"right_box1"},[i("a-button",{staticStyle:{width:"160px","margin-top":"20px","margin-left":"80px"},attrs:{type:"primary",ghost:""},on:{click:function(t){return e.$refs.createModal.add(1,0)}}},[e._v(" "+e._s(e.worker_name)+" ")])],1):e._e(),1==e.num?i("div",{staticClass:"right_box2"},[i("a-input",{staticClass:"input_area",attrs:{placeholder:"请输入回复内容",type:"textarea"},model:{value:e.content_1,callback:function(t){e.content_1=t},expression:"content_1"}})],1):e._e()]):e._e()]),i("div",{style:{bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[e.is_footer?i("a-button",{staticStyle:{marginRight:"8px"},on:{click:e.onClose}},[e._v(" 取消 ")]):e._e(),e.is_footer?i("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(" 确定 ")]):e._e()],1)]),i("a-tab-pane",{key:"2",attrs:{tab:"处理记录"}},[0==e.event_log_arr.length?i("div",{staticClass:"loading"},[e._v(" 加载中... ")]):e._e(),e._l(e.event_log_arr,(function(t,s){return i("a-timeline-item",{staticClass:"time_line"},[i("div",[i("div",{staticClass:"list_4"},[i("div",{staticClass:"list_box"},[i("div",{staticClass:"list"},[i("div",{staticClass:"text_1"},[e._v("类型：")]),i("div",{staticClass:"text_2"},[e._v(e._s(t.title?t.title:"无"))])]),e._l(t.tip,(function(t,s){return i("div",{staticClass:"list"},[""!=t.title?i("div",{staticClass:"text_1"},[e._v(e._s(t.title?t.title:"无")+"：")]):i("div",{staticClass:"text_1"},[e._v("图例：")]),""!=t.title?i("div",{staticClass:"text_2"},[e._v(e._s(t.content?t.content:"无"))]):i("div",{staticClass:"text_2"},[t.imgs.length>0?i("viewer",{attrs:{images:t.imgs}},e._l(t.imgs,(function(e,t){return i("img",{key:t,staticClass:"img_1",staticStyle:{"margin-left":"5px",height:"60px",width:"60px"},attrs:{src:e}})})),0):e._e()],1)])}))],2),i("div",{staticClass:"right_time",staticStyle:{float:"right",width:"200px"}},[e._v(" "+e._s(t.log_time)+" ")])])])])}))],2)],1):e._e()],1),i("choose-tree",{ref:"createModal",attrs:{height:800,width:1e3},on:{ok:e.handleOks}}),i("addWorkerOlder",{attrs:{workVisible:e.showWorker},on:{closeWorker:e.closeWorker}})],1)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"left_top_box"},[i("div",{staticClass:"text_title"},[e._v("工单处理数据")]),i("div",{staticClass:"my_echarts_1",attrs:{id:"main1"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"left_bottom_box"},[i("div",{staticClass:"text_title"},[e._v("工单结案率")]),i("div",{staticClass:"my_echarts_1",attrs:{id:"main2"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"top_box"},[s("img",{staticStyle:{margin:"15px"},attrs:{src:i("86eee"),alt:""}}),s("div",{staticClass:"title"},[e._v("工单处理中心")])])}],n=i("1da1"),r=i("2909"),o=i("5530"),l=i("ade3"),c=(i("96cf"),i("ac1f"),i("841c"),i("d81d"),i("4de4"),i("1276"),i("b0c0"),i("d3b7"),i("7db0"),i("313e"),i("a0e0")),d=(i("0808"),i("6944")),h=i.n(d),u=i("8bbf"),_=i.n(u),p=i("af3c"),f=i("ca00"),g=i("ec89"),m=i("e087");_.a.use(h.a);var v=[{title:"序号",dataIndex:"order_id",width:"5%"},{title:"工单详情",dataIndex:"order_content",width:"10%",scopedSlots:{customRender:"order_content"}},{title:"工单类目",dataIndex:"subject_name",width:"10%"},{title:"上报分类",dataIndex:"cate_name",width:"20%"},{title:"上报位置",dataIndex:"address_txt",width:"15%"},{title:"上报人员",dataIndex:"name",width:"6%"},{title:"手机号码",dataIndex:"phone",width:"10%"},{title:"上报时间",dataIndex:"add_time_txt",width:"10%"},{title:"状态  ",dataIndex:"status_txt",width:"7%",scopedSlots:{customRender:"status_txt"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"}}],b={name:"orderTongji",components:{TagSelectOption:g["a"],chooseTree:p["default"],addWorkerOlder:m["default"]},data:function(){return{secondCate:"全部",right_show:!0,data:[],show:1,is_footer:0,columns:v,pagination:{},loading:!1,editingKey:"",visible:!1,search:{category_id:0,cat_fid:0,type_id:0,cat_id:0,search:"",type:"",start_time:"",end_time:"",event_status:0,single_id:0,floor_id:0,layer_id:0,room_id:0,room_ids:[],public_id:"请选择区域"},workers:[],worker_id:0,worker_name:"请选择处理人员",event_log_arr:[],detail:{order_detail_arr:[],event_log_arr:[],event_log_img:[],order_detail:{area_id:"",area_type:0,bind_id:0,cat_fid:0,cat_fname:"",cat_id:0,cat_name:"",event_status:0,event_status_color:"",event_status_txt:"",grid_member_id:0,grid_range_id:0,last_time:0,name:"",now_role:0,order_address:"",order_content:"",order_go_by_center:0,order_id:0,order_imgs:[],order_status:0,order_time:1,order_time_txt:"",order_type:0,order_worker_id:0,phone:"",polygon_name:"",uid:0,log_info:[]},event_log:[]},childrenDrawer:!1,tab_arr:[{name:"指派给"},{name:"直接回复"}],selected:"请选择处理人员",num:0,num_1:"",content_1:"",todayCount:[],rate:0,subject_list:[],f_cat_list:[],select_default:"全部",screenHeight:document.body.clientHeight,scroll_height:650,tipsItem:[],property_rating:[],series:[],legend:[],xAxis:[],options:[],options1:[],is_show:!0,tokenName:"",sysName:"",delayRequest:!1,work_label_list:[],shaixuanList:[{value:"name",name:"上报人员"},{value:"phone",name:"手机号码"},{value:"address",name:"上报位置-小区名称"},{value:"public_area",name:"上报位置-公共区域"}],is_room:!1,publicAreaList:[],showWorker:!1}},mounted:function(){this.get_today_event_count(),this.event_data(),this.get_subject_list(0),this.getPropertyRating(1),this.fetch(),document.title="工单处理中心",this.scroll_height=this.screenHeight-55-68-150,this.getFinshOrder()},inject:["reload"],methods:{addWorkerOrder:function(){this.showWorker=!0},closeWorker:function(e){this.showWorker=!1,e&&this.fetch(this.search)},enters:function(e,t,i){},leaver:function(){},callback:function(e){console.log(e),2==e&&this.seerecord(this.detail.order_detail.order_id)},getFinshOrder:function(){var e=this;this.request(c["a"].getFinshOrder,{}).then((function(t){var i=[];t.map((function(e){i.push({name:e.subject_name,value:e.rate})})),e.myEchars2(i)}))},myEcharts1:function(){var e=this.$echarts.init(document.getElementById("main1")),t={legend:{data:this.legend,icon:"rect",itemGap:10,itemWidth:10,itemHeight:10,textStyle:{padding:[4,0,0,0],color:"#CAF2F5",fontSize:12,verticalAlign:"middle"}},calculable:!0,xAxis:[{type:"category",data:this.xAxis,axisLine:{show:!0},axisTick:{show:!1},axisLabel:{color:"rgba(255,255,255, 1)"},splitLine:{show:!1}}],yAxis:[Object(l["a"])({type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"rgba(255,255,255, 0.5)"},splitLine:{show:!1}},"splitLine",{show:!0,lineStyle:{type:"dashed",color:"rgba(255,255,255,0.1)",width:2}})],series:this.series};e.setOption(t)},myEchars2:function(e){var t=this.$echarts.init(document.getElementById("main2")),i={series:[{name:"",type:"pie",radius:[20,57],center:["50%","40%"],roseType:"radius",itemStyle:{borderRadius:50},data:e}]};t.setOption(i)},selectde_start:function(e){this.num_1=e,this.getPropertyRating(e+1)},onSubmit:function(){var e=this;if(1==this.num){if(""==this.content_1)return this.$message.warning("请输入回复内容"),!1;this.request(c["a"].updateWorkOrder,{order_id:this.detail.order_detail.order_id,log_content:this.content_1,event_status_type:"center_reply_submit"}).then((function(t){console.log(t),e.get_order_detail(e.detail.order_detail.order_id),e.$message.success("回复成功")}))}else{if(0==this.worker_id)return this.$message.warning("请选择指派的工作人员"),!1;this.request(c["a"].updateWorkOrder,{type:1,order_id:this.detail.order_detail.order_id,worker_id:this.worker_id,order_content:"",event_status_type:"center_assign_work"}).then((function(t){console.log(t),e.get_order_detail(e.detail.order_detail.order_id),e.$message.success("指派成功")}))}},handleTableChange:function(e,t,i){console.log(e);var s=Object(o["a"])({},this.pagination);s.current=e.current,this.pagination=s,this.fetch(Object(o["a"])(Object(o["a"])({results:e.pageSize,page:e.current,sortField:i.field,sortOrder:i.order},t),this.search))},fetch:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,this.request(c["a"].RepairOrderList,t).then((function(t){var i=Object(o["a"])({},e.pagination);i.total=t.total,i.pageSize=t.limit,e.loading=!1,e.data=t.list,e.pagination=i}))},findAll:function(){this.fetch(this.search)},get_today_event_count:function(){var e=this;this.request(c["a"].getTongji,{}).then((function(t){e.todayCount=t,e.work_label_list=[{name:"超时工单",value:0},{name:"今日上报工单",value:t.submit_count},{name:"今日回复工单",value:t.reply_count},{name:"今日处理工单",value:t.handle_count}],console.log("todayCount",t)}))},getPropertyRating:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i={},s=Object(f["i"])(location.hash);s?(this.tokenName=s+"_access_token",this.sysName=s):(this.sysName="village",this.tokenName="village_access_token"),i.tokenName=this.tokenName,i.type=t,this.request(c["a"].getPropertyRating,i).then((function(t){console.log("getPropertyRating",t),e.tipsItem=t.list,e.property_rating=t.info}))},event_data:function(){var e=this;this.request(c["a"].orderTongji,{}).then((function(t){console.log("orderTongji",t),e.series=t.series,e.legend=t.legend,e.xAxis=t.xAxis,e.myEcharts1()}))},get_subject_list:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.request(c["a"].getSubject,{id:t}).then((function(t){e.subject_list=t}))},get_event_center:function(){this.request(c["a"].getWorkerOrderLists,{}).then((function(e){console.log("sdfds",e)}))},get_detail:function(e){this.visible=!0,this.content_1="",this.num=0,this.show=1,this.get_order_detail(e)},get_order_detail:function(e){var t=this;this.request(c["a"].getWorkOrderDetail,{order_id:e}).then((function(e){console.log("wsedre",e),t.detail=e,e.order_detail.event_status>=20?(t.show=0,t.is_footer=0):(t.show=1,t.is_footer=1)}))},worker_list:function(){var e=this;this.request(c["a"].getWorkers,{}).then((function(t){e.workers=t}))},changeCurrent:function(e){this.num=e,0==e&&(this.content_1="")},rightshow:function(){this.right_show=!this.right_show},seerecord:function(e){var t=this;this.request(c["a"].repairGetOrderLog,{order_id:e}).then((function(e){console.log("log_list",e),t.event_log_arr=e.log.info,console.log("this.detail.event_log_arr",t.detail.event_log_arr)}))},showDrawer:function(){this.visible=!0},onChildrenDrawerClose:function(){this.childrenDrawer=!1,this.visible=!0},onClose:function(){this.visible=!1,this.event_log_arr=[]},onChange:function(e,t){console.log(e,t),this.search.start_time=t[0],this.search.end_time=t[1]},Change:function(){},handleChange:function(e,t,i){if(1*e==0)return this.options=[],this.search.cat_fid=0,this.search.cat_id=0,this.search.category_id=0,void(this.secondCate="全部");this.search.category_id=e,this.search.cat_fid=e,this.secondCate="全部",this.search.cat_id="",this.getCate(e)},handleChange2:function(e,t,i){var s=this;1*e==0?(this.secondCate="全部",this.search.cat_id=0):this.options.map((function(t){t.value==e&&(s.secondCate=t.label,s.search.cat_id=t.value)}))},handleChange3:function(e,t,i){this.search.type=e,this.search.public_id="请选择区域",this.search.single_id=0,this.search.floor_id=0,this.search.layer_id=0,this.search.room_id=0,this.search.room_ids=[],this.search.search="","address"==e?(this.getSingleListByVillage("room"),this.is_show=!1,this.is_room=!0):"public_area"==e?(this.getSingleListByVillage("public_area"),this.is_show=!1,this.is_room=!1):(this.is_show=!0,this.is_room=!1)},handleChange4:function(e,t,i){this.search.event_status=e},publicAreaChange:function(e,t,i){this.search.public_id=e},edit:function(e){this.visible=!0},save:function(e){var t=Object(r["a"])(this.data),i=Object(r["a"])(this.cacheData),s=t.filter((function(t){return e===t.key}))[0],a=i.filter((function(t){return e===t.key}))[0];s&&a&&(delete s.editable,this.data=t,Object.assign(a,s),this.cacheData=i),this.editingKey=""},cancel:function(e){var t=Object(r["a"])(this.data),i=t.filter((function(t){return e===t.key}))[0];this.editingKey="",i&&(Object.assign(i,this.cacheData.filter((function(t){return e===t.key}))[0]),delete i.editable,this.data=t)},handleOks:function(e){console.log("value",e);var t=e[0],i=t.split("-");this.worker_id=i[0],this.worker_name=i[1]},getCate:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.request(c["a"].getCate,{category_id:t}).then((function(t){if(console.log("+++++++getCate",t),t){var i=[];t.map((function(e){i.push({label:e.name,value:e.id,isLeaf:!1})})),e.options=i,console.log("this.options============>",e.options)}}))},getFidCate:function(e,t){var i=this;return new Promise((function(s){i.request(c["a"].getFidCate,{type_id:e,type:t}).then((function(e){console.log("+++++++Single",e),console.log("resolve",s),s(e)}))}))},loadDataFunc:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=e[e.length-1],i.loading=!0,setTimeout((function(){i.loading=!1}),100);case 3:case"end":return t.stop()}}),t)})))()},setVisionsFunc:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){var s,a,n,o,l,c,d;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(1!==e.length){i.next=13;break}return s=Object(r["a"])(t.options),i.next=4,t.getFidCate(e[0],"subject_id");case 4:a=i.sent,t.search.type_id=e[0],console.log("res",a),n=[],a.map((function(e){return n.push({label:e.name,value:e.id,isLeaf:!1}),s["children"]=n,!0})),s.find((function(t){return t.value===e[0]}))["children"]=n,t.options=s,i.next=27;break;case 13:if(2!==e.length){i.next=26;break}return i.next=16,t.getFidCate(e[1],"parent_id");case 16:o=i.sent,t.search.cat_fid=e[1],l=Object(r["a"])(t.options),c=[],o.map((function(e){return c.push({label:e.name,value:e.id,isLeaf:!0}),!0})),d=l.find((function(t){return t.value===e[0]})),d.children.find((function(t){return t.value===e[1]}))["children"]=c,t.options=l,i.next=27;break;case 26:3===e.length&&(t.search.cat_id=e[2]);case 27:case"end":return i.stop()}}),i)})))()},getSingleListByVillage:function(e){var t=this;this.request(c["a"].getSingleListByVillage,{xtype:e}).then((function(i){if(console.log("+++++++Single",i),i)if("public_area"!=e){var s=[];i.map((function(e){s.push({label:e.name,value:e.id,isLeaf:!1})})),t.options1=s}else t.publicAreaList=i}))},getFloorList:function(e){var t=this;return new Promise((function(i){t.request(c["a"].getFloorList,{pid:e}).then((function(e){console.log("+++++++Single",e),console.log("resolve",i),i(e)}))}))},getLayerList:function(e){var t=this;return new Promise((function(i){t.request(c["a"].getLayerList,{pid:e}).then((function(e){console.log("+++++++Single",e),e&&i(e)}))}))},getVacancyList:function(e){var t=this;return new Promise((function(i){t.request(c["a"].getVacancyList,{pid:e}).then((function(e){console.log("+++++++Single",e),e&&i(e)}))}))},loadDataFunc1:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=e[e.length-1],i.loading=!0,setTimeout((function(){i.loading=!1}),100);case 3:case"end":return t.stop()}}),t)})))()},setVisionsFunc1:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){var s,a,n,o,l,c,d,h,u,_,p,f;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(console.log("setVisionsFunc1",e),1!==e.length){i.next=17;break}return s=Object(r["a"])(t.options1),i.next=5,t.getFloorList(e[0]);case 5:a=i.sent,t.search.single_id=e[0],t.search.floor_id=0,t.search.layer_id=0,t.search.room_id=0,console.log("res",a),n=[],a.map((function(e){return n.push({label:e.name,value:e.id,isLeaf:!1}),s["children"]=n,!0})),s.find((function(t){return t.value===e[0]}))["children"]=n,t.options1=s,i.next=49;break;case 17:if(2!==e.length){i.next=32;break}return i.next=20,t.getLayerList(e[1]);case 20:o=i.sent,t.search.floor_id=e[1],t.search.layer_id=0,t.search.room_id=0,l=Object(r["a"])(t.options1),c=[],o.map((function(e){return c.push({label:e.name,value:e.id,isLeaf:!1}),!0})),d=l.find((function(t){return t.value===e[0]})),d.children.find((function(t){return t.value===e[1]}))["children"]=c,t.options1=l,i.next=49;break;case 32:if(3!==e.length){i.next=48;break}return i.next=35,t.getVacancyList(e[2]);case 35:h=i.sent,t.search.layer_id=e[2],t.search.room_id=0,u=Object(r["a"])(t.options1),_=[],h.map((function(e){return _.push({label:e.name,value:e.id,isLeaf:!0}),!0})),p=u.find((function(t){return t.value===e[0]})),f=p.children.find((function(t){return t.value===e[1]})),f.children.find((function(t){return t.value===e[2]}))["children"]=_,t.options1=u,console.log("_this.options",t.options1),i.next=49;break;case 48:4==e.length&&(t.search.room_id=e[3]);case 49:case"end":return i.stop()}}),i)})))()}}},y=b,w=(i("d474"),i("2877")),C=Object(w["a"])(y,s,a,!1,null,"2a6d766b",null);t["default"]=C.exports},"3c06":function(e,t,i){"use strict";i("715e")},"715e":function(e,t,i){},"86eee":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAACeElEQVRIS+2VS0gVYRTHf2e0a49NDyzbZIuKIOzhnUmxWhQF0iIIW+WibBURUek6ah89IHFTUVAQCEEQBPaggjS8c71ZUVBEYEWgIhgRdHPmxHzOvU7X0W51N0UfzGbO/3y/850HR/iFoy5Xgd2hS4fYHCjWXYoVBrq/D6QpmhAeiM1w3Es1TSNQhY+PxXtJcm8KXZIxElJHT86eT52m2AVcQ3hOli3SwEjsJYrxEUFj7X2swTMBlFNGo9SOw4yTPmEFYzwFKoyz0oPNhtxlmsHBZz/KZqDaKOAtyl18OqSOfuP2mEWU8wyoDIP4BKwUm48TL3I5CxxC+IzPTnG4oy6zEc6h7M0FFfMKH6WDIVplO1/V5ShwMtS1ic2p/ItMNEFKXC4AneJwS/uZQ5YuhIYiO7OLQXYYWIrjWIxKktOTalR4mfZyCYs9kf9DWJzHI42iWCaAfcC8vEY5Iw5H4gKLnSNNU4/SHUnXfbI0FTaI9lKFxQ1gfVhbD4/VUs+LQlg8yOUK0ByK3wE1YjMa22WPWEgFL4H5IaxdHA4WCwrmaEEobs0VdKpaqcsJ4FhofyM2y34K0j4q8RmM5L1WHDLTNYSm2YTy0GgEn5nMklVkoz6iLpcjl7bzjRESvI6IqsVmYFqQSw2YOcyduVgsxaMNoSL4AtDEhFtsRRjA49Ufg2AjcDPf3j+APBpIMFwSkLINoXMClOJ2JHWHmUG2RKB1CC1TDqxmWF4KUOE4TJqj/6CgBhrT3rGp04zpeScs3GIwKyN3mlEzwIIV7qvA4lOGkAhFSyKrIfgVrJUvxlZOt6zlw/jiS9OCcnG6ofxtm9AkSa7/e6Dvn9QHphiQr/YAAAAASUVORK5CYII="},"88bb":function(e,t,i){},9044:function(e,t,i){"use strict";i("88bb")},af3c:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:600,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[e.visible&&e.firstKey?i("a-tree",{attrs:{checkable:e.is_show,defaultExpandedKeys:[e.firstKey],"tree-data":e.treeData,"default-selected-keys":[],"default-checked-keys":e.checkedKeysArr,"auto-expand-parent":e.show,"default-expand-parent":e.show},on:{select:e.onSelect,check:e.onCheck}}):e._e()],1)},a=[],n=i("a0e0"),r={data:function(){return{show:!0,is_show:!1,title:"添加",treeData:[],visible:!1,confirmLoading:!1,id:0,type:0,selectedKey:[],checkedKey:[],checkedKeysArr:[],checkedKeysArrTemp:[],index:0,firstKey:""}},methods:{add:function(e,t,i){this.selectedKey=[],this.checkedKey=[],this.checkedKeysArrTemp=[],void 0!=i&&i&&i.length>0?this.checkedKeysArrTemp=i:this.checkedKeysArrTemp=[],this.checkedKey=this.checkedKeysArrTemp,console.log("checkedKeysArr",i),this.index=t,this.type=e,this.is_show=2==e,console.log("type",e,"is_show",this.is_show),this.title="添加",this.getDirectortree()},onSelect:function(e,t){this.selectedKey=e,console.log("selected",e,t)},onCheck:function(e,t){this.checkedKey=e,console.log("onCheck",e,t)},getDirectortree:function(){var e=this;this.request(n["a"].getDirectortree).then((function(t){e.treeData=t.res,console.log("resTree",t.res),t.res[0].key&&(e.firstKey=t.res[0].key),e.checkedKeysArr=e.checkedKeysArrTemp,e.visible=!0,e.show=!0,setTimeout((function(){e.show=!0}),5e3)}))},handleSubmit:function(){this.visible=!1,this.is_show=!1,this.confirmLoading=!1,console.log("type",this.type),1==this.type?(console.log("selectedKey",this.selectedKey,this.index),this.$emit("ok",this.selectedKey,this.index)):(console.log("checkedKey",this.checkedKey,this.index),this.$emit("ok",this.checkedKey,this.index))},handleCancel:function(){this.selectedKey=[],this.checkedKey=[],this.visible=!1,this.is_show=!1,this.checkedKeysArr=[],this.checkedKeysArrTemp=[]}}},o=r,l=(i("9044"),i("2877")),c=Object(l["a"])(o,s,a,!1,null,"f5018bba",null);t["default"]=c.exports},d474:function(e,t,i){"use strict";i("132b")},e087:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-drawer",{attrs:{title:"添加工单",placement:"right",closable:!1,visible:e.workVisible,width:900},on:{close:e.onClose}},[i("a-form-model",{ref:"ruleForm",attrs:{model:e.workerForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[e.workVisible?i("a-form-model-item",{attrs:{label:"对应位置",prop:"address_id"}},[i("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"",placeholder:"请选择"},on:{change:function(t){return e.housePositionChange1(t,0)}}},e._l(e.housePositionList,(function(t,s){return i("a-select-option",{attrs:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])})),1),0!=e.positionChild1.length?i("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"",placeholder:"请选择"},on:{change:function(t){return e.housePositionChange1(t,1)}}},e._l(e.positionChild1,(function(t,s){return i("a-select-option",{attrs:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])})),1):e._e(),0!=e.positionChild2.length?i("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"",placeholder:"请选择"},on:{change:function(t){return e.housePositionChange1(t,2)}}},e._l(e.positionChild2,(function(t,s){return i("a-select-option",{attrs:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])})),1):e._e(),0!=e.positionChild3.length?i("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"",placeholder:"请选择"},on:{change:function(t){return e.housePositionChange1(t,3)}}},e._l(e.positionChild3,(function(t,s){return i("a-select-option",{attrs:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])})),1):e._e()],1):e._e(),i("a-form-model-item",{attrs:{label:"工单类目",prop:"cat_fid"}},[i("a-select",{attrs:{value:e.workerForm.cat_fid,placeholder:"请选择工单类目"},on:{change:function(t){return e.handleSelectChange(t,"cat_fid")}}},e._l(e.orderCategory,(function(t,s){return i("a-select-option",{attrs:{value:t.category_id}},[e._v(" "+e._s(t.subject_name)+" ")])})),1)],1),i("a-form-model-item",{attrs:{label:"工单分类",prop:"cat_id"}},[i("a-select",{attrs:{value:e.workerForm.cat_id,placeholder:"请选择工单分类"},on:{change:function(t){return e.handleSelectChange(t,"cat_id")}}},e._l(e.orderClassification,(function(t,s){return i("a-select-option",{attrs:{value:t.cat_id}},[e._v(" "+e._s(t.cate_name)+" ")])})),1)],1),i("a-form-model-item",{attrs:{label:"标签",prop:"label_txt"}},[i("a-transfer",{attrs:{locale:{itemUnit:"【已选】",itemsUnit:"【全部】",notFoundContent:"列表为空",searchPlaceholder:"请输入搜索内容"},"show-search":"",rowKey:function(e){return e.key},"data-source":e.labelList,"list-style":{width:"200px",height:"270px"},render:e.renderItem,"show-select-all":!0,"target-keys":e.targetKeys},on:{change:e.handleTransferChange}})],1),i("a-form-model-item",{attrs:{label:"补充内容",prop:"order_content"}},[i("a-textarea",{staticStyle:{padding:"5px width:200px",height:"100px",resize:"none"},attrs:{placeholder:"请输入"},model:{value:e.workerForm.order_content,callback:function(t){e.$set(e.workerForm,"order_content",t)},expression:"workerForm.order_content"}})],1),e.workVisible?i("a-form-model-item",{attrs:{label:"",prop:"order_imgs"}},[i("a-upload",{staticStyle:{transform:"translateX(140px)"},attrs:{action:"/v20/public/index.php/community/village_api.ContentEngine/uploadFile","list-type":"picture-card","file-list":e.fileList,"before-upload":e.beforeUpload},on:{preview:e.handlePreview,change:e.handleUploadChange}},[e.fileList.length<8?i("div",[i("a-icon",{attrs:{type:"plus"}}),i("div",{staticClass:"ant-upload-text"},[e._v(" Upload ")])],1):e._e()]),i("div",{staticClass:"desc",staticStyle:{transform:"translateX(140px)"}},[e._v(" 已上传"+e._s(e.fileList.length)+"张, 最多可上传8张 ")]),i("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[i("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1):e._e(),e.workVisible?i("a-form-model-item",{attrs:{label:"上门时间",prop:"go_time"}},[i("a-date-picker",{on:{change:e.onDateChange}}),i("a-time-picker",{staticStyle:{"margin-left":"10px"},attrs:{format:"HH:mm"},on:{change:e.onTimeChange}})],1):e._e(),i("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[i("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(" 提交 ")])],1)],1)],1)},a=[],n=i("1da1"),r=(i("5cad"),i("7b2d")),o=(i("96cf"),i("d3b7"),i("a630"),i("3ca3"),i("6062"),i("ddb0"),i("d81d"),i("b0c0"),i("8bbf"),i("a0e0"));function l(e){return new Promise((function(t,i){var s=new FileReader;s.readAsDataURL(e),s.onload=function(){return t(s.result)},s.onerror=function(e){return i(e)}}))}var c={props:{workVisible:{type:Boolean,default:!1}},components:{"a-transfer":r["a"]},data:function(){return{workerForm:{address_id:"",cat_id:"",cat_fid:"",go_time:""},labelCol:{span:4},wrapperCol:{span:14},rules:{cat_fid:[{required:!0,message:"请选择工单类目",trigger:"blur"}],cat_id:[{required:!0,message:"请选择工单类目",trigger:"blur"}],order_content:[{required:!0,message:"请输入补充内容",trigger:"blur"}],address_id:[{required:!1,message:"请选择位置",trigger:"blur"}],go_time:[{required:!1,message:"请选择上门时间",trigger:"blur"}]},previewVisible:!1,previewImage:"",fileList:[],options:[],targetKeys:[],labelList:[],orderCategory:[],orderClassification:[],housePositionList:[],positionChild1:[],positionChild2:[],positionChild3:[],timeStr:""}},mounted:function(){this.getHousePosition(),this.getSubject()},methods:{onTimeChange:function(e,t){this.timeStr=t,console.log("timeString===>",t)},onSubmit:function(){var e=this,t=this;""==t.timeStr||""==t.workerForm.go_time?t.workerForm.go_time="":t.workerForm.go_time=t.workerForm.go_time+" "+t.timeStr,t.$refs.ruleForm.validate((function(i){if(!i)return console.log("error submit!!"),!1;t.request(o["a"].repairOrderAdd,t.workerForm).then((function(i){t.$message.success("添加成功！"),e.clearForm(),e.$refs.ruleForm.resetFields(),e.$emit("closeWorker",!0)}))}))},resetForm:function(){this.clearForm(),this.$refs.ruleForm.resetFields(),this.$emit("closeWorker",!1)},onClose:function(){this.clearForm(),this.$refs.ruleForm.resetFields(),this.$emit("closeWorker",!1)},uniqueKey:function(e){return Array.from(new Set(e))},handleCancel:function(){this.previewVisible=!1},housePositionChange1:function(e,t){var i=this;console.log(e,t),0==t?(i.positionChild1=[],i.positionChild2=[],i.positionChild3=[],i.housePositionList.map((function(s){s.name==e&&"public"!=s.type?(i.workerForm.address_type=s.type,i.workerForm.address_id=s.id,i.getHousePositionChidren(s.id,s.type,t)):s.name==e&&"public"==s.type&&(i.workerForm.address_type=s.type,i.workerForm.address_id=s.id)}))):1==t?(i.positionChild2=[],i.positionChild3=[],i.positionChild1.map((function(s){s.name==e&&"public"!=s.type?(i.workerForm.address_type=s.type,i.workerForm.address_id=s.id,i.getHousePositionChidren(s.id,s.type,t)):s.name==e&&"public"==s.type&&(i.workerForm.address_type=s.type,i.workerForm.address_id=s.id)}))):2==t?(i.positionChild3=[],i.positionChild2.map((function(s){s.name==e&&"public"!=s.type?(i.workerForm.address_type=s.type,i.workerForm.address_id=s.id,i.getHousePositionChidren(s.id,s.type,t)):s.name==e&&"public"==s.type&&(i.workerForm.address_type=s.type,i.workerForm.address_id=s.id)}))):3==t&&i.positionChild3.map((function(t){t.name==e&&(i.workerForm.address_type=t.type,i.workerForm.address_id=t.id)}))},handlePreview:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e.url||e.preview){i.next=4;break}return i.next=3,l(e.originFileObj);case 3:e.preview=i.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return i.stop()}}),i)})))()},beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||this.$message.error("You can only upload JPG file!");var i=e.size/1024/1024<2;return i||this.$message.error("Image must smaller than 2MB!"),t&&i},handleUploadChange:function(e){var t=e.fileList,i=this;i.fileList=t,i.workerForm.order_imgs=[],i.fileList.map((function(e){e.response&&e.response.data&&e.response.data.url&&i.workerForm.order_imgs.push(e.response.data.url)}))},handleSelectChange:function(e,t){this.workerForm[t]=e,this.$forceUpdate(),"cat_fid"==t?(this.workerForm.cat_id="",this.getRepairCate(e)):"cat_id"==t&&(this.labelList=[],this.targetKeys=[],this.getLabel(e))},renderItem:function(e){var t=this.$createElement,i=t("span",{class:"custom-item"},[e.title]);return{label:i,value:e.title}},handleTransferChange:function(e,t,i){this.targetKeys=e,this.workerForm.label_txt=e},clearForm:function(){this.positionChild1=[],this.positionChild2=[],this.positionChild3=[],this.labelList=[],this.workerForm={cat_id:"",cat_fid:"",go_time:""},this.targetKeys=[],this.fileList=[],this.timeStr=""},getLabelList:function(){var e=this;e.request(o["a"].getLabelList,{}).then((function(t){e.labelList=[],t.list.map((function(t){e.labelList.push({key:t.id+"",title:t.label_name})}))}))},getHousePosition:function(){var e=this;e.request(o["a"].getHousePosition,{}).then((function(t){e.housePositionList=t}))},getHousePositionChidren:function(e,t,i){var s=this;s.request(o["a"].getHousePositionChidren,{id:e,type:t}).then((function(e){0==i?s.positionChild1=e:1==i?s.positionChild2=e:2==i&&(s.positionChild3=e)}))},getSubject:function(){var e=this;this.request(o["a"].getSubjectOrders,{}).then((function(t){e.orderCategory=t}))},getRepairCate:function(e){var t=this;this.request(o["a"].getRepairCate,{subject_id:e}).then((function(e){t.orderClassification=e}))},getLabel:function(e){var t=this;this.request(o["a"].getLabel,{cat_id:e}).then((function(e){e.map((function(e){t.labelList.push({key:e.id+"",title:e.name})}))}))},onDateChange:function(e,t){this.workerForm.go_time=t}}},d=c,h=(i("3c06"),i("2877")),u=Object(h["a"])(d,s,a,!1,null,"7de8267d",null);t["default"]=u.exports}}]);