(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28974238","chunk-e89ba936"],{"01ac":function(t,s,a){},3543:function(t,s,a){"use strict";a("c6a9")},"590c":function(t,s,a){"use strict";a("01ac")},c6a9:function(t,s,a){},e53b:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[t.isShow?a("a-icon",{ref:"breathing_lamp",staticClass:"breathing_lamp",style:{fontSize:"60px",color:"#08c"},attrs:{type:"exclamation-circle",theme:"twoTone"},on:{click:function(s){return t.closeOld()}}}):t._e(),t.isLoading?a("div",{staticClass:"loading"},[a("a-spin",{attrs:{size:"large"}})],1):a("div",[t.mainBasicData&&Number(t.mainBasicData.speed_progress)<100&&t.mainBasicData.help_list&&t.mainBasicData.help_list.length?a("a-card",{staticClass:"margin-top-10 section-1",attrs:{bordered:!1}},[a("section",{staticClass:"flex-title"},[a("div",[t.settingFinished?a("a-icon",{staticClass:"color-green",attrs:{type:"check-circle",theme:"filled"}}):a("a-icon",{staticClass:"color-red",attrs:{type:"warning",theme:"filled"}}),a("span",{staticClass:"desc emphasize"},[t._v(t._s(t.mainBasicData.description))]),a("div",{staticClass:"progress"},[a("span",[t._v("进度：")]),a("a-progress",{staticStyle:{"max-width":"180px",display:"inline-block"},attrs:{strokeColor:t.strokeColor,percent:Number(t.mainBasicData.speed_progress),size:"small"}})],1)],1),t.mainBasicData.help_list?a("div",{staticClass:"pointer",staticStyle:{width:"100px"},on:{click:t.basicDataFold}},[t.showBasicData?a("div",[a("span",{staticClass:"desc"},[t._v("收起")]),a("a-icon",{attrs:{type:"up"}})],1):a("div",[a("span",{staticClass:"desc"},[t._v("展开")]),a("a-icon",{attrs:{type:"down"}})],1)]):t._e()]),a("transition",{attrs:{name:"sub-comments"}},[t.mainBasicData.help_list&&t.showBasicData?a("section",{staticClass:"settings"},t._l(t.mainBasicData.help_list,(function(s,i){return a("div",{key:i},[a("div",{staticClass:"name"},[t._v(t._s(s.cat_name))]),s.item_list&&s.item_list.length?a("div",{staticClass:"content"},t._l(s.item_list,(function(s,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"col-1"},["warn"==s.level?a("a-icon",{staticClass:"icon color-red",attrs:{type:"exclamation-circle"}}):t._e(),"recommend"==s.level?a("a-icon",{staticClass:"icon color-blue",attrs:{type:"info-circle"}}):t._e(),"safe"==s.level?a("a-icon",{staticClass:"icon color-green",attrs:{type:"check-circle"}}):t._e(),a("span",{staticClass:"item-title"},[t._v(t._s(s.title)+" ")]),s.link_url?a("span",{staticClass:"color-blue pointer jiaocheng no-wrap",on:{click:function(a){return t.goUrl(s.link_type,s.link_url)}}},[t._v(t._s("new_blank"==s.link_type?"教程":"前往")+">>")]):t._e()],1),a("div",{staticClass:"item-desc"},[t._v(" "+t._s(s.info)+" ")])])})),0):t._e()])})),0):t._e()])],1):t._e(),t.mainBasicData&&t.mainBasicData.statistics_data?a("a-card",{staticClass:"section-2",class:t.mainBasicData.help_list&&t.mainBasicData.help_list.length?"section":"margin-top-10",attrs:{bordered:!1}},[a("div",{staticClass:"flex-title"},[a("div",{staticClass:"emphasize"},[t._v("实时概况")]),a("div",{staticClass:"right"},[a("span",{staticClass:"mr-10 cr-66"},[t._v("更新时间："+t._s(t.mainBasicData.statistics_data.now_time))]),a("div",{staticClass:"cr-66"},[a("span",{staticClass:"color-blue pointer",on:{click:function(s){return t.goUrl(t.mainBasicData.statistics_data.link_type,t.mainBasicData.statistics_data.statistics_url)}}},[t._v("更多数据 ")]),a("a-tooltip",{attrs:{placement:"bottomLeft",arrowPointAtCenter:""}},[a("template",{slot:"title"},[a("div",{staticClass:"tooltip"},[a("div",{staticClass:"col"},[a("span",{staticClass:"title"},[t._v("实收总额/总订单数：")]),a("span",{staticClass:"desc"},[t._v("统计时间内，订单实付总金额与总订单数，含自有支付与退款订单")])]),a("div",{staticClass:"col"},[a("span",{staticClass:"title"},[t._v("总用户数/今日新增用户数：")]),a("span",{staticClass:"desc"},[t._v(" 统计时间内，平台注册用户总数与今日新增注册用户数，含未绑定手机号的用户")])]),a("div",{staticClass:"col"},[a("span",{staticClass:"title"},[t._v(" 平台抽成总金额/今日抽成总金额：")]),a("span",{staticClass:"desc"},[t._v("统计时间内，平台总抽成金额与今日抽成金额，含自有支付与退款订单的抽成金额")])]),a("div",{staticClass:"col"},[a("span",{staticClass:"title"},[t._v(" 充值总额/总订单数：")]),a("span",{staticClass:"desc"},[t._v(" 统计时间内，用户的平台余额在线充值总额/充值总订单数，不含线下充值金额")])])])]),a("a-icon",{staticClass:"ml-10",attrs:{type:"info-circle"}})],2)],1)])]),t.statisticsList.length?t._e():a("div",{staticClass:"no-data"},[t._v("暂无实时数据")])]):t._e(),t.mainBasicData&&t.statisticsList.length?a("div",{staticStyle:{"margin-top":"10px"}},[a("a-row",{attrs:{gutter:24}},[t.statisticsList.length>0?a("a-col",{attrs:{sm:24,md:12,xl:6}},[a("chart-card",{attrs:{title:t.statisticsList[0].cat_name,currency:"￥",decimals:2,total:t.statisticsList[0].total_money}},[a("div",[a("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:t.statisticsList[0].week_percent_type}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("周同比")]),t._v(" "+t._s(t.statisticsList[0].week_percent+"%")+" ")]),a("trend",{attrs:{flag:t.statisticsList[0].today_percent_type}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("日同比")]),t._v(" "+t._s(t.statisticsList[0].today_percent+"%")+" ")])],1),a("template",{slot:"footer"},[t._v("今日总订单数"),a("span",{staticClass:"ml-5"},[t._v(t._s(t.statisticsList[0].total_count))])])],2)],1):t._e(),t.statisticsList.length>1?a("a-col",{attrs:{sm:24,md:12,xl:6}},[a("chart-card",{attrs:{title:t.statisticsList[1].cat_name,total:t.statisticsList[1].total_count}},[a("div",[a("mini-area",{attrs:{data:t.statisticsList[1].list}})],1),a("template",{slot:"footer"},[a("trend",{attrs:{flag:t.statisticsList[1].today_percent_type}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("日同比")]),t._v(" "+t._s(t.statisticsList[1].today_percent+"%")+" ")])],1)],2)],1):t._e(),t.statisticsList.length>2?a("a-col",{attrs:{sm:24,md:12,xl:6}},[a("chart-card",{attrs:{title:t.statisticsList[2].cat_name,currency:"￥",decimals:2,total:t.statisticsList[2].total_money}},[a("div",[a("mini-bar",{attrs:{data:t.statisticsList[2].list}})],1),a("template",{slot:"footer"},[a("trend",{attrs:{flag:t.statisticsList[2].today_percent_type}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("日同比")]),t._v(" "+t._s(t.statisticsList[2].today_percent+"%")+" ")])],1)],2)],1):t._e(),t.statisticsList.length>3?a("a-col",{attrs:{sm:24,md:12,xl:6}},[a("chart-card",{attrs:{title:t.statisticsList[3].cat_name,currency:"￥",decimals:2,total:t.statisticsList[3].total_money}},[a("div",[a("mini-area",{attrs:{data:t.statisticsList[3].list}})],1),a("template",{slot:"footer"},[t._v(" 充值订单数"),a("span",{staticClass:"ml-5"},[t._v(t._s(t.statisticsList[3].total_count))])])],2)],1):t._e()],1)],1):t._e(),a("a-card",{staticClass:"section section-3",attrs:{bordered:!1}},[a("div",[a("a-tabs",{attrs:{"default-active-key":"sales_money",size:"large","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}},on:{change:t.middleTabChange}},[a("div",{attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[a("div",[a("span",{staticClass:"pointer",class:"month"==t.middleTimeType?"color-blue":"",on:{click:function(s){return t.changeMiddleTime("month")}}},[t._v("本月")]),a("span",{staticClass:"pointer ml-20",class:"week"==t.middleTimeType?"color-blue":"",on:{click:function(s){return t.changeMiddleTime("week")}}},[t._v("本周")]),a("span",{staticClass:"pointer ml-20",class:"year"==t.middleTimeType?"color-blue":"",on:{click:function(s){return t.changeMiddleTime("year")}}},[t._v("本年")])])]),a("a-tab-pane",{key:"sales_money",attrs:{loading:"true",tab:"销售额"}},[a("a-row",[a("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[t.barData.length?a("bar",{attrs:{data:t.barData,title:"销售额排行"}}):a("div",{staticClass:"no-data"},[t._v("暂无销售额统计数据")])],1),a("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[t.rankList.length?a("rank-list",{attrs:{title:"商家销售额排行榜（元）",list:t.rankList}}):a("div",{staticClass:"no-data"},[t._v("暂无销售排行数据")])],1)],1)],1),a("a-tab-pane",{key:"order_count",attrs:{tab:"订单量"}},[a("a-row",[a("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[t.barData.length?a("bar",{attrs:{data:t.barData,title:"订单量排行"}}):a("div",{staticClass:"no-data"},[t._v("暂无订单统计数据")])],1),a("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[t.rankList.length?a("rank-list",{attrs:{title:"商家销售订单量排行榜（笔）",list:t.rankList}}):a("div",{staticClass:"no-data"},[t._v("暂无订单排行数据")])],1)],1)],1)],1)],1)]),a("a-card",{staticClass:"section section-4",attrs:{bordered:!1}},[a("div",{staticClass:"emphasize"},[t._v("待办事项")]),t.todoList.length?a("div",{staticClass:"todo-list"},[a("a-row",{attrs:{gutter:24}},t._l(t.todoList,(function(s,i){return a("a-col",{key:i,staticClass:"col",attrs:{xl:4,lg:12,md:12,sm:24,xs:24},on:{click:function(a){return t.goUrl(s.link_type,s.link_url)}}},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"count"},[t._v(t._s(s.count))])])})),1)],1):a("div",{staticClass:"no-data"},[t._v("暂无数据")])]),a("a-card",{staticClass:"section section-5",attrs:{bordered:!1}},[a("div",{staticClass:"flex-title"},[a("div",{staticClass:"emphasize"},[t._v("常用功能")]),a("a-button",{attrs:{type:"primary"},on:{click:t.editMenu}},[t._v(" 编辑 ")])],1),t.menuList.length?a("div",{staticClass:"menu-list"},t._l(t.menuList,(function(s,i){return a("div",{key:i,staticClass:"col",on:{click:function(a){return t.goUrl(s.link_type,s.link_url)}}},[a("div",{staticClass:"icon"},[a("img",{attrs:{src:s.image}})]),a("div",{staticClass:"name no-wrap"},[t._v(t._s(s.plugin_name))])])})),0):a("div",{staticClass:"no-data"},[t._v("暂未添加常用功能，点击右上角编辑即可添加哦~")])])],1),a("add-menu",{ref:"addMenu",attrs:{"selected-list":t.menuList,"all-list":t.allMenuList},on:{ok:t.editMenuSuccess}})],1)},e=[],n=(a("a9e3"),a("d81d"),a("ac1f"),a("1276"),a("f96f")),l=a("fb04"),c=a("2af9"),o=(a("f91a"),null),r=null,d={name:"PlatformIndex",components:{ChartCard:c["d"],MiniArea:c["i"],MiniBar:c["j"],RankList:c["m"],Bar:c["c"],Trend:c["r"],NumberInfo:c["l"],MiniSmoothArea:c["k"],AddMenu:l["default"]},data:function(){return{isShow:0,mainBasicData:null,showBasicData:!1,strokeColor:"#F22735",statisticsList:[],middleDataType:"sales_money",middleTimeType:"week",isLoading:!1,barData:[],rankList:[],todoList:[],menuList:[],allMenuList:[]}},computed:{settingFinished:function(){return 100==Number(this.mainBasicData.speed_progress)}},mounted:function(){this.init()},beforeDestroy:function(){this.clearTimer()},beforeRouteEnter:function(t,s,a){a((function(t){o&&r||t.getNowData()}))},beforeRouteLeave:function(t,s,a){this.clearTimer()&&a(),a()},methods:{init:function(){this.getMainBasicData(!0),this.getMiddleStatisticsData(),this.getBacklog(),this.getHotMenu(),this.getCloseOldShow()},getNowData:function(){var t=this;o&&clearInterval(o),r&&clearInterval(r),o=setInterval((function(){t.getMainBasicData()}),1e4),r=setInterval((function(){t.getBacklog()}),6e5)},clearTimer:function(){return clearInterval(o),clearInterval(r),o=null,r=null,!0},getMainBasicData:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isLoading=s,this.request(n["a"].getMainBasicData).then((function(a){var i=Number(a.speed_progress);i<50&&s&&(t.showBasicData=!0),t.strokeColor=i<30?"#F22735":i<70?"#2593FC":"#57C22D",t.mainBasicData=a,a&&a.statistics_data&&a.statistics_data.statistics_list&&a.statistics_data.statistics_list.length&&(t.statisticsList=a.statistics_data.statistics_list.map((function(s){return 1==s.week_percent_type?s.week_percent_type="up":-1==s.week_percent_type?s.week_percent_type="down":s.week_percent_type="",1==s.today_percent_type?s.today_percent_type="up":-1==s.today_percent_type?s.today_percent_type="down":s.today_percent_type="",s.list&&(s.list=t.transformChartData(s.list)),s})),t.isLoading=!1)}))},getMiddleStatisticsData:function(){var t=this;this.request(n["a"].getMiddleStatisticsData,{type:this.middleDataType,time_type:this.middleTimeType}).then((function(s){s&&(s.statistics_list&&s.statistics_list.length&&(t.barData=t.transformChartData(s.statistics_list)),s.mer_list&&s.mer_list.length&&(t.rankList=s.mer_list))}))},getBacklog:function(){var t=this;this.request(n["a"].getBacklog).then((function(s){s&&s.list&&s.list.length&&(t.todoList=s.list)}))},getHotMenu:function(){var t=this;this.request(n["a"].getHotMenu).then((function(s){s&&s.list&&s.list.length&&(t.menuList=s.list)}))},transformChartData:function(t){return t&&t.length?t.map((function(t){return{x:t.title,y:Number(t.value)}})):[]},editMenu:function(){this.$refs.addMenu.openDialog()},editMenuSuccess:function(){this.getHotMenu()},middleTabChange:function(t){this.middleDataType=t,this.getMiddleStatisticsData()},changeMiddleTime:function(t){this.middleTimeType=t,this.getMiddleStatisticsData()},goUrl:function(t,s){"new_blank"==t&&window.open(s),"new_tab"==t&&(-1!=s.indexOf("#")&&(s=s.split("#")[1]),this.$router.push(s))},basicDataFold:function(){this.showBasicData=!this.showBasicData},getCloseOldShow:function(){var t=this;this.request(n["a"].closeOldShow).then((function(s){t.isShow=s.isShow}))},closeOld:function(){var t="",s="";t="温馨提示",s="您好，旧版餐饮和商城已经停止维护，为了更好的用户体验，欢迎大家使用新版商城和餐饮，如需关闭旧版餐饮和商城，请点击“我已知晓，永久关闭”";var a=this,i=30,e=this.$confirm({title:t,content:s,okText:"倒计时"+i+"s）",okType:"primary",cancelText:"我再想想",okButtonProps:{props:{disabled:!0}},onOk:function(){a.request(n["a"].closeOld).then((function(t){a.$message.success(a.L("关闭成功")),a.isShow=0}))},onCancel:function(){}}),l=i,c=setInterval((function(){e.update({okText:l>0?"倒计时（"+l+"s）":"我已知晓，永久关闭"}),0===l&&(clearInterval(c),e.update({okButtonProps:{props:{disabled:!1}}})),l--}),1e3)}}},u=d,m=(a("3543"),a("2877")),p=Object(m["a"])(u,i,e,!1,null,"40b80ec1",null);s["default"]=p.exports},f91a:function(t,s,a){"use strict";var i={searchMerchant:"/qa/platform.Ask/searchMerchant",storeLists:"/merchant/merchant.Store/getStoreList",askLists:"/qa/merchant.Ask/lists",setIndexShow:"/qa/merchant.Ask/setIndexShow",saveLabels:"/qa/merchant.Ask/saveLabels",getLabels:"/qa/merchant.Ask/getLabels",saveAskLabel:"/qa/merchant.Ask/saveAskLabel",askDetail:"/qa/merchant.Ask/askDetail",getAll:"/qa/platform.Ask/getAll",delete:"/qa/platform.Ask/delete",showDetail:"/qa/platform.Ask/askDetail"};s["a"]=i},f96f:function(t,s,a){"use strict";var i={getMainBasicData:"/common/platform.Main/getMainBasicData",getMiddleStatisticsData:"/common/platform.Main/getMiddleStatisticsData",getBacklog:"/common/platform.Main/getBacklog",getHotMenu:"/common/platform.plugin/getHotMenu",editHotMenu:"/common/platform.plugin/editHotMenu",getAllMenuTree:"/common/platform.plugin/getAllMenuTree",closeOldShow:"/common/platform.Main/closeOldShow",closeOld:"/common/platform.Main/closeOld"};s["a"]=i},fb04:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"add-menu"},[a("a-modal",{staticClass:"modal",attrs:{width:"60%",title:"自定义功能",centered:""},on:{ok:t.handleOk,cancel:t.handleClose},model:{value:t.visible,callback:function(s){t.visible=s},expression:"visible"}},[a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[t._v("已选功能："),a("span",{staticClass:"desc"},[t._v("（点击拖动调整排序）")])]),a("a-input-search",{staticStyle:{width:"200px"},attrs:{placeholder:"输入功能名称",allowClear:""},on:{change:t.inputChange,search:t.onSearch},model:{value:t.keywords,callback:function(s){t.keywords=s},expression:"keywords"}})],1),a("div",{staticClass:"selected"},[t.sList.length?a("div",{staticClass:"list"},[a("draggable",t._b({model:{value:t.sList,callback:function(s){t.sList=s},expression:"sList"}},"draggable",t.dragOptions,!1),[a("transition-group",{attrs:{type:"transition",name:"flip-list"}},t._l(t.sList,(function(s,i){return a("div",{key:i,staticClass:"item move"},[a("div",{staticClass:"icon"},[a("img",{attrs:{src:s.image}})]),a("div",{staticClass:"name no-wrap"},[t._v(t._s(s.plugin_name))]),a("a-icon",{staticClass:"delete color-red",attrs:{type:"close-circle"},on:{click:function(s){return s.stopPropagation(),t.deleteMenu(i)}}})],1)})),0)],1)],1):a("div",{staticClass:"no-data"},[t._v("暂未设置常用功能~")])]),a("div",{staticClass:"all"},[t.allList.length?a("block",t._l(t.allList,(function(s,i){return a("div",{key:i},[a("div",{staticClass:"title"},[t._v(t._s(s.cat_name))]),s.plugin_list&&s.plugin_list.length?a("div",{staticClass:"list"},t._l(s.plugin_list,(function(s,e){return a("div",{key:e,staticClass:"item"},[a("div",{staticClass:"icon"},[a("img",{attrs:{src:s.image}})]),a("div",{staticClass:"name no-wrap"},[t._v(t._s(s.plugin_name))]),s.add?t._e():a("a-icon",{staticClass:"add",attrs:{type:"plus-circle"},on:{click:function(a){return a.stopPropagation(),t.addMenu(i,e,s)}}})],1)})),0):a("div",{staticClass:"no-data"},[t._v("此分类下暂无常用功能~")])])})),0):a("div",{staticClass:"no-data"},[t._v("暂无记录~")])],1)])],1)},e=[],n=(a("d81d"),a("d3b7"),a("159b"),a("a434"),a("f96f")),l=a("b76a"),c=a.n(l),o={name:"PlatformAddMenu",components:{draggable:c.a},props:{selectedList:{type:Array,default:function(){return[]}}},computed:{dragOptions:function(){return{animation:0,group:"description",disabled:!1,ghostClass:"ghost"}}},data:function(){return{visible:!1,keywords:"",sList:[],allList:[]}},methods:{handleOk:function(){var t=this,s=this.sList.map((function(t,s){return{plugin_id:t.plugin_id,sort:s+1}}));this.request(n["a"].editHotMenu,{menu_list:s}).then((function(s){t.$message.success("编辑成功~"),t.$emit("ok"),t.handleClose()}))},onSearch:function(t){this.getAllMenu()},inputChange:function(t){console.log(this.keywords),this.keywords||this.getAllMenu()},getAllMenu:function(){var t=this,s={};this.keywords&&(s.keyword=this.keywords),this.request(n["a"].getAllMenuTree,s).then((function(s){s&&(t.allList=s.map((function(s){return s.plugin_list&&s.plugin_list.length&&(s.plugin_list=t.handleList(s.plugin_list,t.sList)),s})))}))},handleList:function(t,s){return t.length&&t.forEach((function(t){t.add=!1,s.forEach((function(s){t.plugin_id==s.plugin_id&&(t.add=!0)}))})),t},addMenu:function(t,s,a){a.add=!0,this.sList.push(a),this.$set(this.allList[t].plugin_list,s,a),this.$set(this.allList,t,this.allList[t])},deleteMenu:function(t){var s=this;this.sList.splice(t,1),console.log(this.sList),this.allList.forEach((function(t){t.plugin_list&&t.plugin_list.length&&(t.plugin_list=s.handleList(t.plugin_list,s.sList))})),this.$set(this,"allList",this.allList)},openDialog:function(){this.sList=JSON.parse(JSON.stringify(this.selectedList)),this.getAllMenu(),this.visible=!0},handleClose:function(){this.visible=!1}}},r=o,d=(a("590c"),a("2877")),u=Object(d["a"])(r,i,e,!1,null,"25475a0c",null);s["default"]=u.exports}}]);