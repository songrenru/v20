(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14f86e0c"],{"148c":function(t,e,i){"use strict";var o={getActivityList:"/employee/platform.EmployeeActivity/getActivityList",delActivity:"/employee/platform.EmployeeActivity/delActivity",getActivityEdit:"/employee/platform.EmployeeActivity/getActivityEdit",employActivityAddOrEdit:"/employee/platform.EmployeeActivity/employActivityAddOrEdit",getActivityGoods:"/employee/platform.EmployeeActivity/getActivityGoods",getActivityAdverList:"/employee/platform.EmployeeActivity/getActivityAdverList",activityAdverDel:"/employee/platform.EmployeeActivity/activityAdverDel",getAllArea:"/employee/platform.EmployeeActivity/getAllArea",addOrEditActivityAdver:"/employee/platform.EmployeeActivity/addOrEditActivityAdver",getActivityAdver:"/employee/platform.EmployeeActivity/getActivityAdver",getShopGoodsList:"/employee/platform.EmployeeActivity/getShopGoodsList",addActivityShopGoods:"/employee/platform.EmployeeActivity/addActivityShopGoods",setActivityGoodsSort:"/employee/platform.EmployeeActivity/setActivityGoodsSort",delActivityGoods:"/employee/platform.EmployeeActivity/delActivityGoods",getlableAll:"/employee/platform.EmployeeActivity/getlableAll",getPickTimeSetting:"/employee/platform.EmployeeActivity/getPickTimeSetting",pickTimeSetting:"/employee/platform.EmployeeActivity/pickTimeSetting"};e["a"]=o},"41ff":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("a-form-model",{ref:"ruleForm",attrs:{model:t.form,"label-col":{span:8},"wrapper-col":{span:16}}},[i("a-form-model-item",{attrs:{label:t.L("是否开启员工专区商家自提时间")}},[i("a-switch",{attrs:{"checked-children":t.L("开"),"un-checked-children":t.L("关")},model:{value:t.form.open_pick_time,callback:function(e){t.$set(t.form,"open_pick_time",e)},expression:"form.open_pick_time"}})],1),i("a-form-model-item",{attrs:{label:t.L("员工专区商家自提时间段")}},[i("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.addDate()}}},[t._v(t._s(t.L("新增自提日期")))])],1),t._l(t.form.pick_time,(function(e,o){return[i("a-form-model-item",t._b({key:o,attrs:{label:t.L("选择日期")}},"a-form-model-item",t.formItemLayout,!1),[i("div",[i("a-date-picker",{staticStyle:{width:"calc(128px * 2 + 45px)"},attrs:{"disabled-date":t.disabledDate,value:e.select_date?t.moment(e.select_date,"YYYY-MM-DD"):null,type:"date"},on:{change:function(e,i){t.selectDateChange(e,i,o)}}}),i("a-button",{attrs:{type:"link"},on:{click:function(e){return t.addTime(o)}}},[t._v(t._s(t.L("新增时间段")))]),i("a-button",{staticStyle:{color:"red"},attrs:{type:"link"},on:{click:function(e){return t.delDate(o)}}},[t._v(t._s(t.L("删除")))]),i("label",{staticStyle:{"padding-left":"20px"}},[t._v("每日限购数量(-1为不限购)：")]),i("a-input",{staticStyle:{width:"80px"},attrs:{type:"number"},model:{value:t.form.pick_time[o].limit_num,callback:function(e){t.$set(t.form.pick_time[o],"limit_num",e)},expression:"form.pick_time[index].limit_num"}})],1),t._l(e.time_list,(function(e,m){return i("div",{key:m,staticClass:"mt-5"},[i("a-time-picker",{attrs:{value:e.start_time?t.moment(e.start_time,"HH:mm"):null,placeholder:t.L("请选择时间"),format:"HH:mm"},on:{change:function(e){t.selectTimeChange(e,"start_time",o,m)}}}),i("span",{staticClass:"ml-20 mr-20"},[t._v("-")]),i("a-time-picker",{attrs:{value:e.end_time?t.moment(e.end_time,"HH:mm"):null,placeholder:t.L("请选择时间"),format:"HH:mm",disabledHours:function(){return t.disabledHours(o,m)},disabledMinutes:function(e){return t.disabledMinutes(e,o,m)}},on:{change:function(e){t.selectTimeChange(e,"end_time",o,m)}}}),i("a-button",{staticStyle:{color:"red"},attrs:{type:"link"},on:{click:function(e){return t.delTime(o,m)}}},[t._v(t._s(t.L("删除")))])],1)}))],2)]})),i("a-form-model-item",t._b({},"a-form-model-item",t.formItemLayout,!1),[i("div",{staticClass:"flex align-center justify-center mt-50"},[i("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.savePickTime()}}},[t._v(t._s(t.L("保存")))])],1)])],2)],1)},m=[],r=(i("ac1f"),i("1276"),i("4de4"),i("d3b7"),i("d81d"),i("a630"),i("3ca3"),i("6062"),i("ddb0"),i("159b"),i("a9e3"),i("c1df")),n=i.n(r),a=i("148c"),c={data:function(){return{formItemLayout:{labelCol:{span:8},wrapperCol:{span:16}},form:{open_pick_time:!0,pick_time:[]}}},created:function(){this.getPickTimeSetting()},methods:{moment:n.a,getPickTimeSetting:function(){var t=this;this.request(a["a"].getPickTimeSetting,{}).then((function(e){var i=e.open_pick_time,o=void 0===i?1:i,m=e.pick_time,r=void 0===m?[]:m;t.$set(t.form,"open_pick_time",1==o),t.$set(t.form,"pick_time",r)}))},addDate:function(){var t=this.form.pick_time;t.push({select_date:null,time_list:[{start_time:"",end_time:""}],limit_num:0}),this.$set(this.form,"pick_time",t)},delDate:function(t){var e=this;this.$confirm({title:"提示",content:"确定删除该日期吗？",onOk:function(){e.$delete(e.form.pick_time,t)},onCancel:function(){}})},selectDateChange:function(t,e,i){this.$set(this.form.pick_time[i],"select_date",t?n()(t).format("YYYY-MM-DD"):"")},disabledDate:function(t){return t&&t<n()().subtract(1,"days")},addTime:function(t){var e=this.form.pick_time[t]["time_list"];e.push({start_time:"",end_time:""}),this.$set(this.form.pick_time[t],"time_list",e)},delTime:function(t,e){var i=this;this.$confirm({title:"提示",content:"确定删除该时间段吗？",onOk:function(){i.$delete(i.form.pick_time[t]["time_list"],e)},onCancel:function(){}})},selectTimeChange:function(t,e,i,o){this.$set(this.form.pick_time[i]["time_list"][o],e,t?n()(t).format("HH:mm"):"")},disabledHours:function(t,e){for(var i=[],o=this.form.pick_time[t]["time_list"][e]["start_time"],m=o.split(":"),r=0;r<parseInt(m[0]);r++)i.push(r);return i},disabledMinutes:function(t,e,i){var o=this.form.pick_time[e]["time_list"][i]["start_time"],m=o.split(":"),r=[];if(t==parseInt(m[0]))for(var n=0;n<parseInt(m[1]);n++)r.push(n);return r},judgeTimeList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];for(var e in t)if(!this.judge(e,t))return!1;return!0},judge:function(t,e){for(var i in e)if(t!==i){if(e[i].start_time<=e[t].start_time&&e[i].end_time>e[t].start_time)return!1;if(e[i].start_time<e[t].end_time&&e[i].end_time>=e[t].end_time)return!1}return!0},savePickTime:function(){var t=this;if(!this.form.open_pick_time||this.form.pick_time.length){var e=this.form,i=e.open_pick_time,o=void 0===i||i,m=e.pick_time,r=void 0===m?[]:m,n=r.filter((function(t){if(!t.select_date)return t}))||[];if(n.length)this.$message.error(this.L("请选择自提日期"));else{var c=r.map((function(t){return t.select_date})),l=Array.from(new Set(c));if(l.length==c.length){var s="";try{r.forEach((function(e,i){e.time_list&&e.time_list.length&&e.time_list.forEach((function(i,o){if(i.start_time&&i.end_time||(s="请选择时间"),i.start_time&&i.end_time){var m=i.start_time.split(":")[0],r=i.start_time.split(":")[1],n=60*Number(m)+Number(r),a=i.end_time.split(":")[0],c=i.end_time.split(":")[1],l=60*Number(a)+Number(c);l<=n&&(s="结束时间不能大于开始时间")}if(t.judgeTimeList(e.time_list)||(s="".concat(e.select_date," 时间段重叠")),s)throw Error(s)}))}))}catch(d){return void this.$message.error(this.L(s))}var p={open_pick_time:o?1:0,pick_time:r};this.request(a["a"].pickTimeSetting,p).then((function(e){t.$message.success(t.L("设置成功"))}))}else this.$message.error(this.L("自提日期重复"))}}else this.$message.error(this.L("请设置自提时间段"))}}},l=c,s=(i("6bec"),i("2877")),p=Object(s["a"])(l,o,m,!1,null,"1df4033b",null);e["default"]=p.exports},"6bec":function(t,e,i){"use strict";i("89ca")},"89ca":function(t,e,i){}}]);