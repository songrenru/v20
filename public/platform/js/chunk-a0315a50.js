(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0315a50","chunk-60d33229"],{"0c98":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVQ4T6XTvyvFURjH8dcNfwEGE2WyWFn8iEFKShkNZPIH6I4yyh9gEoNRKSkZyI+F1WJSTAbXX4DSczsn324395SzPufz7jzP8z41/zy1NvkhbGAE86l+jifs4aWaaQWsYh/LuMVHutyLSRxjHYcZUgVMYAbbHbrawhXu4l4G9OENPYUj+cQAGhmwixucFQIWMIXNDLjACt4LAf04wlwGfKE7hacRfbY7MZ/rVGhmMiB6yv2XApqZDDjFWmVtnTqJtR5gMQN2cI+TTslUX8I46hkQ9j2jqxDwjeGwsipSWDhYKNJrtrFV5bAxLIsnPlTWGmsbSy2GrU0LqyZWXx5W1jGK2VS4xCNiVo2/PlPhCH6v/QDddDIRAGtWtQAAAABJRU5ErkJggg=="},1682:function(t,e,a){"use strict";a("c8cc")},2273:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXklEQVQ4T6XTMUjXQRjG8Y9Ti6OD4CIhhCA6hAlJQiGJiwhCoFMNDYEuYdgmbYXiouDgoJNCIIRLKFKgGFQ6GEIEES5Jg6NLm7xwB8cl/oduud/d+96X933e59fkP1fTFe/b8QyduJ3iR/iOZZyWb2rAYyzhF3bxNSX3YhA3MYm1DCkB97CHHYzhoqquGZt4iAHsRzwDWvAD65hqIMsiJnAL5xkwhwe4i78F4G36flTc3cAnfMCLDNhOfYd45fqYDver+xAz9BjKgD94WYqTHqyk/WkFCLFfozUDfmMaG1XibDq/qu7HMY+2DNjCTzyvElfT3GvAAjowkgFvMJxELMd3iLNILMAxzhDxPWYyINx3goMQpsEYQ/B+dEV1pZFCmCg5nBh6lOMMZowv+g4nPsmC11YON75LfX/B51RNH+4gKh3NLiydWFYdrpxBN3pS4BjfEFqdX/czNWj/3/AlpjBAEaEIpmUAAAAASUVORK5CYII="},"3ee2":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA50lEQVQ4T2NkoBAwUqifAa8BCv8NBH49f/XrmdSzb7gswmuA1G+tHQz//n97xn49iGQDpH5r1DP8Z2wAafzP8D/9OduNWdgMweoCqZ+aAQyMDOuRNTAyMBo+Zbt2Ad0QDAMkvmsoMDEzXmRgYOBDU3zkGdt1W4IGSP7S3A9TxMjA4ADxAsMBiBjjueds14pRXYYjdKR+a5Yx/GfoBEn/+/vf8QXnDaghqBpwxoLUL80sBgaGqWQbIP1LM+4/A8NCsg2Q/KkRxMjIuJZsA6R+aLj9Z2KsBAfi3/+NJIcBsXmEtpmJGFcAAJtkUxHL20m+AAAAAElFTkSuQmCC"},"5c5e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-modal",{attrs:{title:"选择企业成员",width:850,height:588,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[s("div",{staticClass:"container"},[s("div",{staticClass:"box_left"},[s("a-input-search",{staticStyle:{"margin-bottom":"8px"},attrs:{placeholder:"搜索成员"},on:{search:t.onSearch}}),s("a-tree",{attrs:{blockNode:t.blockNode,multiple:"","tree-data":t.treeData,"show-icon":"","default-expand-all":"",selectedKeys:t.enterprise_staff_arr},on:{select:t.onSelect}},[s("a-icon",{attrs:{slot:"switcherIcon",type:"down"},slot:"switcherIcon"}),s("a-icon",{attrs:{slot:"cluster",type:"cluster"},slot:"cluster"}),s("a-icon",{attrs:{slot:"user",type:"user"},slot:"user"})],1)],1),s("div",{staticClass:"box_right"},[s("span",[t._v("已选择的成员")]),""==t.enterprise_staff_arr?s("a-empty",{staticClass:"a-empty",attrs:{image:t.simpleImage}}):s("a-list",{attrs:{"item-layout":"horizontal","data-source":t.enterprise_staff_arr},scopedSlots:t._u([{key:"renderItem",fn:function(e,n){return s("a-list-item",{},[s("div",{staticClass:"list_box",staticStyle:{width:"7%"}},[s("img",{attrs:{src:a("694d")}})]),s("div",{staticClass:"list_box",staticStyle:{width:"83%"}},[t._v(t._s(e.split("-")[1]))]),s("div",{staticClass:"list_box",staticStyle:{width:"10%"},on:{click:function(e){return t.delStaff(n)}}},[s("img",{staticStyle:{"margin-right":"5px"},attrs:{src:a("0c98")}})])])}}])})],1)])])},n=[],i=(a("06f4"),a("fc25")),o=(a("4de4"),a("ac1f"),a("1276"),a("a0e0")),r=a("ca00"),l=[{}],c={data:function(){return{visible:!1,confirmLoading:!1,enterprise_staff_arr:[],simpleImage:i["a"].PRESENTED_IMAGE_SIMPLE,blockNode:!0,treeData:l,tokenName:"",sysName:""}},methods:{onSearch:function(t){var e=this;console.log(t);var a={};this.tokenName&&(a["tokenName"]=this.tokenName),a["name"]=t,this.request(o["a"].getWorker,a).then((function(t){if(""!=t){var a=e.enterprise_staff_arr.indexOf(t);a<0&&e.enterprise_staff_arr.push(t),console.log("0416",e.enterprise_staff_arr)}}))},choose:function(){var t=Object(r["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",this.visible=!0,this.getTissueNav(),this.enterprise_staff_arr=[]},getTissueNav:function(){var t=this,e={};this.tokenName&&(e["tokenName"]=this.tokenName),this.request(o["a"].getTissueNav,e).then((function(e){t.treeData=e}))},onSelect:function(t,e){console.log("onSelect",t,e),this.enterprise_staff_arr=t},delStaff:function(t){var e=this;console.log("enterprise_staff_arr",this.enterprise_staff_arr),e.enterprise_staff_arr=e.removeByIndex(e.enterprise_staff_arr,t)},removeByIndex:function(t,e){return t.filter((function(t,a){return e!==a}))},handleSubmit:function(){var t=this;t.visible=!1;var e=[];this.enterprise_staff_arr.filter((function(t,a){e[a]=t.split("-")[0]})),console.log("0319",e),t.$emit("change",e)},handleCancel:function(){this.visible=!1}}},h=c,d=(a("5db73"),a("2877")),u=Object(d["a"])(h,s,n,!1,null,"438e73a2",null);e["default"]=u.exports},"5db73":function(t,e,a){"use strict";a("6352")},6352:function(t,e,a){},"694d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVQ4T6XTvS5FQRTF8d+Ngl4ioRIK74DiKohaUHkBnwUPcKmFSHyVSgWNRnw0CpR6BVHxChqJTMxJjsk5ZyR2OXuv/6xZmd3yz2o16HswFPuv+KyarQNM4wDDUfSCFVylkCrACO5xjp0o2MAsxvFchlQBttGF9eS2XXRjOQe4xAnOEsAcDtGXAwTxE/YTwCpmMJEDdLCJAXzE4X68x/OtHCD0C8hdHG5XiUOvKsRC/IYyYPAvDgrxMZaSDI6wmELKDkbxgCnc1vzQSdxgDI/pE/ZicPOZ9TjFFxZSwAWuEaw21VoMuTcFhKRDFcHVQX7NNW1jxshP+xt2tSwRr0CjWQAAAABJRU5ErkJggg=="},"6b80":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"top"},[s("div",{staticClass:"container_box"},[s("div",{staticClass:"box_title"},[s("span",[t._v("昨日发起申请数")]),s("a-tooltip",{attrs:{placement:"top"}},[s("template",{slot:"title"},[s("span",[t._v("发起申请数，物业工作人员通过[搜索手机号]、[扫一扫]、[从微信好友中添加]、[从群聊中添加]、[添加共享、分配给我的用户]、[从新的联系人推荐中添加]等渠道主动向好友发起的申请数量")])]),s("img",{attrs:{src:a("2273")}})],2)],1),s("div",{staticClass:"box_center"},[s("span",[s("b",[t._v(t._s(t.detail.apply_friends_num[0]))])])]),s("div",{staticClass:"box_bottom"},[s("span",[t._v("比前日")]),t.detail.apply_friends_num[2]>=0?s("img",{attrs:{src:a("3ee2")}}):s("img",{attrs:{src:a("cf5e")}}),s("span",[t._v(t._s(t.detail.apply_friends_num[1]))])])]),s("div",{staticClass:"container_box"},[s("div",{staticClass:"box_title"},[s("span",[t._v("昨日新增住户数")]),s("a-tooltip",{attrs:{placement:"top"}},[s("template",{slot:"title"},[s("span",[t._v("新增业主数，物业工作人员新添加的业主数量")])]),s("img",{attrs:{src:a("2273")}})],2)],1),s("div",{staticClass:"box_center"},[s("span",[s("b",[t._v(t._s(t.detail.new_house_holds_num[0]))])])]),s("div",{staticClass:"box_bottom"},[s("span",[t._v("比前日")]),t.detail.new_house_holds_num[2]>=0?s("img",{attrs:{src:a("3ee2")}}):s("img",{attrs:{src:a("cf5e")}}),s("span",[t._v(t._s(t.detail.new_house_holds_num[1]))])])]),s("div",{staticClass:"container_box"},[s("div",{staticClass:"box_title"},[s("span",[t._v("昨日新增非住户数")]),s("a-tooltip",{attrs:{placement:"top"}},[s("template",{slot:"title"},[s("span",[t._v("新增非业主数，物业工作人员新添加的客户数量")])]),s("img",{attrs:{src:a("2273")}})],2)],1),s("div",{staticClass:"box_center"},[s("span",[s("b",[t._v(t._s(t.detail.new_non_residents_num[0]))])])]),s("div",{staticClass:"box_bottom"},[s("span",[t._v("比前日")]),t.detail.new_non_residents_num[2]>=0?s("img",{attrs:{src:a("3ee2")}}):s("img",{attrs:{src:a("cf5e")}}),s("span",[t._v(t._s(t.detail.new_non_residents_num[1]))])])]),s("div",{staticClass:"container_box"},[s("div",{staticClass:"box_title"},[s("span",[t._v("昨日拉黑/删除成员人数")]),s("a-tooltip",{attrs:{placement:"top"}},[s("template",{slot:"title"},[s("span",[t._v("删除/拉黑成员的客户数，即将物业工作人员删除或加入黑名单的客户和业主数。")])]),s("img",{attrs:{src:a("2273")}})],2)],1),s("div",{staticClass:"box_center"},[s("span",[s("b",[t._v(t._s(t.detail.block_num[0]))])])]),s("div",{staticClass:"box_bottom"},[s("span",[t._v("比前日")]),t.detail.block_num[2]>=0?s("img",{attrs:{src:a("3ee2")}}):s("img",{attrs:{src:a("cf5e")}}),s("span",[t._v(t._s(t.detail.block_num[1]))])])])]),s("div",{staticClass:"bottom"},[s("a-tabs",{on:{change:t.change}},[s("a-tab-pane",{key:"1",attrs:{tab:"发起申请数"}},[s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[0]},on:{click:function(e){return t.selected(1)}}},[t._v("按周")]),s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[1]},on:{click:function(e){return t.selected(2)}}},[t._v("按月")]),s("a-range-picker",{style:{display:t.display},attrs:{"default-value":[t.moment(t.month[0],t.dateFormat),t.moment(t.month[1],t.dateFormat)],format:t.dateFormat},on:{change:t.onChange}}),s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[2]},on:{click:function(e){return t.selected(3)}}},[t._v("按年")]),s("a-date-picker",{style:{display:t.display_of_year},attrs:{mode:"year",format:t.dateFormat1,value:t.yearValue,open:t.isOpen},on:{panelChange:t.selectYear,openChange:function(e){return t.onOpenChange(e,"isOpen")}}}),s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[3]},on:{click:function(e){return t.selected(4)}}},[t._v("选择成员")]),t.is_show?s("span",{staticStyle:{"margin-left":"10px",color:"red"}},[t._v("已选择"+t._s(t.enterprise_staff.length)+"个成员")]):t._e(),s("div",{staticStyle:{width:"90%",height:"300px"},attrs:{id:"main1"}})],1),s("a-tab-pane",{key:"2",attrs:{tab:"新增住户数"}},[s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[0]},on:{click:function(e){return t.selected(1)}}},[t._v("按周")]),s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[1]},on:{click:function(e){return t.selected(2)}}},[t._v("按月")]),s("a-range-picker",{style:{display:t.display},attrs:{"default-value":[t.moment(t.month[0],t.dateFormat),t.moment(t.month[1],t.dateFormat)],format:t.dateFormat},on:{change:t.onChange}}),s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[2]},on:{click:function(e){return t.selected(3)}}},[t._v("按年")]),s("a-date-picker",{style:{display:t.display_of_year},attrs:{mode:"year",format:t.dateFormat1,value:t.yearValue,open:t.isOpen2},on:{panelChange:t.selectYear,openChange:function(e){return t.onOpenChange(e,"isOpen2")}}}),s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[3]},on:{click:function(e){return t.selected(4)}}},[t._v("选择成员")]),t.is_show?s("span",{staticStyle:{"margin-left":"10px",color:"red"}},[t._v("已选择"+t._s(t.enterprise_staff.length)+"个成员")]):t._e(),s("div",{staticStyle:{width:"90%",height:"300px"},attrs:{id:"main2"}})],1),s("a-tab-pane",{key:"3",attrs:{tab:"新增非住户数"}},[s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[0]},on:{click:function(e){return t.selected(1)}}},[t._v("按周")]),s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[1]},on:{click:function(e){return t.selected(2)}}},[t._v("按月")]),s("a-range-picker",{style:{display:t.display},attrs:{"default-value":[t.moment(t.month[0],t.dateFormat),t.moment(t.month[1],t.dateFormat)],format:t.dateFormat},on:{change:t.onChange}}),s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[2]},on:{click:function(e){return t.selected(3)}}},[t._v("按年")]),s("a-date-picker",{style:{display:t.display_of_year},attrs:{mode:"year",format:t.dateFormat1,value:t.yearValue,open:t.isOpen3},on:{panelChange:t.selectYear,openChange:function(e){return t.onOpenChange(e,"isOpen3")}}}),s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[3]},on:{click:function(e){return t.selected(4)}}},[t._v("选择成员")]),t.is_show?s("span",{staticStyle:{"margin-left":"10px",color:"red"}},[t._v("已选择"+t._s(t.enterprise_staff.length)+"个成员")]):t._e(),s("div",{staticStyle:{width:"90%",height:"300px"},attrs:{id:"main3"}})],1),s("a-tab-pane",{key:"4",attrs:{tab:"被删除/拉黑人数"}},[s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[0]},on:{click:function(e){return t.selected(1)}}},[t._v("按周")]),s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[1]},on:{click:function(e){return t.selected(2)}}},[t._v("按月")]),s("a-range-picker",{style:{display:t.display},attrs:{"default-value":[t.moment(t.month[0],t.dateFormat),t.moment(t.month[1],t.dateFormat)],format:t.dateFormat},on:{change:t.onChange}}),s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[2]},on:{click:function(e){return t.selected(3)}}},[t._v("按年")]),s("a-date-picker",{style:{display:t.display_of_year},attrs:{mode:"year",format:t.dateFormat1,value:t.yearValue,open:t.isOpen4},on:{panelChange:t.selectYear,openChange:function(e){return t.onOpenChange(e,"isOpen4")}}}),s("a-button",{staticClass:"button_select",attrs:{type:t.button_type[3]},on:{click:function(e){return t.selected(4)}}},[t._v("选择成员")]),t.is_show?s("span",{staticStyle:{"margin-left":"10px",color:"red"}},[t._v("已选择"+t._s(t.enterprise_staff.length)+"个成员")]):t._e(),s("div",{staticStyle:{width:"90%",height:"300px"},attrs:{id:"main4"}})],1)],1),s("h3",[t._v("详细数据")]),s("a-table",{staticClass:"table_list",attrs:{columns:t.columns,"data-source":t.data}})],1),s("choose-enterprise-staff",{ref:"chooseEnterpriseStaffModal",on:{change:t.change_enterprise_staff}})],1)},n=[],i=(a("ac1f"),a("841c"),a("4de4"),a("a0e0")),o=a("5c5e"),r=a("ca00"),l=a("c1df"),c=a.n(l),h={components:{chooseEnterpriseStaff:o["default"]},name:"dataCenter",mounted:function(){var t=Object(r["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",this.get_tongji(),this.get_data(this.select_type,this.select_name)},data:function(){return{is_show:0,button_type:["primary","default","default","default"],xAxis_data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],series_data:[150,230,224,218,135,147,260],select_type:"week",select_name:"apply_friends_num",month:["2021-01","2021-12"],dateFormat:"YYYY-MM-DD",dateFormat1:"YYYY",search:{},detail:{apply_friends_num:[0,0],new_house_holds_num:[0,0],new_non_residents_num:[0,0],block_num:[0,0]},display:"none",display_of_year:"none",tokenName:"",sysName:"",enterprise_staff:[],data:[],yearValue:null,isOpen:!1,isOpen2:!1,isOpen3:!1,isOpen4:!1,columns:[{title:"时间",dataIndex:"time",key:"time",align:"center"},{title:"发起申请数",dataIndex:"num",key:"num",align:"center"}]}},methods:{moment:c.a,get_data:function(t,e){var a=this;if("month"==t){if(""==this.month)return!1;this.search.month_between=this.month}if("year"==t){if(""==this.yearValue)return!1;this.search.year=this.yearValue}this.search.selected_type=t,this.search.selected_name=e,this.search.tokenName=this.tokenName,this.search.enterprise_staff=this.enterprise_staff,this.request(i["a"].DataCenterIndex,this.search).then((function(t){console.log("sdf",t),a.xAxis_data=t.date_arr,a.series_data=t.sum_arr,"apply_friends_num"==e?a.myEcharts1():"new_house_holds_num"==e?a.myEcharts2():"new_non_residents_num"==e?a.myEcharts3():"block_num"==e&&a.myEcharts4();var s=[];t.date_arr.filter((function(e,a){s[a]={key:a,time:e,num:t.sum_arr[a]}})),a.data=s,console.log("data",a.data)}))},get_tongji:function(){var t=this;this.request(i["a"].DataCenterTongji,{tokenName:this.tokenName}).then((function(e){t.detail=e}))},change_enterprise_staff:function(t){this.enterprise_staff=t,this.enterprise_staff.length>0&&(this.is_show=1),this.get_data(this.select_type,this.select_name),console.log(123,this.enterprise_staff)},myEcharts1:function(){console.log(1);var t=this.$echarts.init(document.getElementById("main1")),e={xAxis:{type:"category",data:this.xAxis_data},yAxis:{type:"value"},toolbox:{show:!0,feature:{saveAsImage:{}}},series:[{data:this.series_data,type:"line"}]};t.setOption(e)},myEcharts2:function(){console.log(2);var t=this.$echarts.init(document.getElementById("main2")),e={xAxis:{type:"category",data:this.xAxis_data},yAxis:{type:"value"},toolbox:{show:!0,feature:{saveAsImage:{}}},series:[{data:this.series_data,type:"line"}]};t.setOption(e)},myEcharts3:function(){console.log(3);var t=this.$echarts.init(document.getElementById("main3")),e={xAxis:{type:"category",data:this.xAxis_data},yAxis:{type:"value"},toolbox:{show:!0,feature:{saveAsImage:{}}},series:[{data:this.series_data,type:"line"}]};t.setOption(e)},myEcharts4:function(){console.log(4);var t=this.$echarts.init(document.getElementById("main4")),e={xAxis:{type:"category",data:this.xAxis_data},yAxis:{type:"value"},toolbox:{show:!0,feature:{saveAsImage:{}}},series:[{data:this.series_data,type:"line"}]};t.setOption(e)},change:function(t){console.log(t),1==t?(this.select_name="apply_friends_num",this.get_data(this.select_type,this.select_name),this.columns=[{title:"时间",dataIndex:"time",key:"time",align:"center"},{title:"发起申请数",dataIndex:"num",key:"num",align:"center"}]):2==t?(this.select_name="new_house_holds_num",this.get_data(this.select_type,this.select_name),this.columns=[{title:"时间",dataIndex:"time",key:"time",align:"center"},{title:"新增住户数",dataIndex:"num",key:"num",align:"center"}]):3==t?(this.select_name="new_non_residents_num",this.get_data(this.select_type,this.select_name),this.columns=[{title:"时间",dataIndex:"time",key:"time",align:"center"},{title:"新增非住户数",dataIndex:"num",key:"num",align:"center"}]):4==t&&(this.select_name="block_num",this.get_data(this.select_type,this.select_name),this.columns=[{title:"时间",dataIndex:"time",key:"time",align:"center"},{title:"拉黑成员数",dataIndex:"num",key:"num",align:"center"}])},onChange:function(t,e){console.log(t,e),this.month=e,this.get_data(this.select_type,this.select_name)},selectYear:function(t,e){this.yearValue=t,this.isOpen=!1,this.isOpen2=!1,this.isOpen3=!1,this.isOpen4=!1,this.get_data(this.select_type,this.select_name)},onOpenChange:function(t,e){this[e]=t},selected:function(t){switch(t){case 1:this.select_type="week",this.display="none",this.display_of_year="none",this.yearValue=null,this.get_data(this.select_type,this.select_name);break;case 2:this.select_type="month",this.display="inline-block",this.display_of_year="none",this.yearValue=null,this.get_data(this.select_type,this.select_name);break;case 3:this.select_type="year",this.display="none",this.display_of_year="inline-block";break;case 4:this.display_of_year="none",this.$refs.chooseEnterpriseStaffModal.choose(),this.yearValue=null;break;default:this.select_type="week",this.yearValue=null,this.display="none"}this.button_type=["default","default","default","default"],this.button_type[t-1]="primary"}}},d=h,u=(a("1682"),a("2877")),_=Object(u["a"])(d,s,n,!1,null,"6ed47bd4",null);e["default"]=_.exports},c8cc:function(t,e,a){},cf5e:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4ElEQVQ4T7WTLQ7CQBCF3+wWDHdpGroCCYITkGA5AAcAh+TH4DgAlgSHwYBDtFNTzxUQOEgZsgSShlBo2jBmzbxv3szOEEoGldTjf4CrMU0tMrIOE2BcYd5+cpvpwAKUyM6KRKTjRNG6OICo54ThsjAAQF8zL4oDiAY6DGe5AIkxcxLxHr0DTfsSsH+JFXMrDfo4xJsxgYiYt4pnpZRHQXD8CbjU6w1NdEgnCtB1mFfvbWR+Y+L7AwCTp2CqmYe5ZpBOuvn+BiJVFUXtrJX/usriujULoDg+FQLkObTSx3QH06hQEXOHkIAAAAAASUVORK5CYII="}}]);