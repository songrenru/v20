(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39a28a3c"],{"026b":function(t,e){var a="\\ud800-\\udfff",n="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",o=n+r+i,s="\\ufe0e\\ufe0f",c="\\u200d",l=RegExp("["+c+a+o+s+"]");function u(t){return l.test(t)}t.exports=u},"086e":function(t,e){var a="\\ud800-\\udfff",n="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",o=n+r+i,s="\\ufe0e\\ufe0f",c="["+a+"]",l="["+o+"]",u="\\ud83c[\\udffb-\\udfff]",d="(?:"+l+"|"+u+")",f="[^"+a+"]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",h="\\u200d",v=d+"?",g="["+s+"]?",b="(?:"+h+"(?:"+[f,p,m].join("|")+")"+g+v+")*",y=g+v+b,_="(?:"+[f+l+"?",l,p,m,c].join("|")+")",x=RegExp(u+"(?="+u+")|"+_+y,"g");function w(t){var e=x.lastIndex=0;while(x.test(t))++e;return e}t.exports=w},"1a62":function(t,e,a){"use strict";a.r(e);a("54f8"),a("aa48"),a("8f7e");var n=function(){var t=this,e=t._self._c;return e("a-card",{staticClass:"marketing-order-info",attrs:{bordered:!1}},[e("a-form-model",t._b({attrs:{model:t.searchForm}},"a-form-model",t.searchFormLayout,!1),[e("a-row",[e("a-col",{attrs:{span:9}},[e("a-form-model-item",{attrs:{label:"区域"}},[e("a-cascader",{attrs:{options:t.areaList,placeholder:"请选择区域"},model:{value:t.selectArea,callback:function(e){t.selectArea=e},expression:"selectArea"}})],1)],1),e("a-col",{attrs:{span:4}},[e("a-form-model-item",{attrs:{label:""}},[e("a-select",{staticStyle:{width:"110%"},attrs:{placeholder:"请选择区域代理人"},on:{select:t.onAreaPersonSelect},model:{value:t.searchForm.area_uid,callback:function(e){t.$set(t.searchForm,"area_uid",e)},expression:"searchForm.area_uid"}},t._l(t.areaPersonList,(function(a){return e("a-select-option",{key:a.id,attrs:{value:a.id}},[t._v(" "+t._s(a.name)+" ")])})),1)],1)],1),e("a-col",{attrs:{span:5}},[e("a-form-model-item",{attrs:{label:""}},[e("a-select",{attrs:{placeholder:"请选择区域团队"},model:{value:t.searchForm.team_id,callback:function(e){t.$set(t.searchForm,"team_id",e)},expression:"searchForm.team_id"}},t._l(t.teamList,(function(a){return e("a-select-option",{key:a.id,attrs:{value:a.id}},[t._v(" "+t._s(a.name)+" ")])})),1)],1)],1),e("a-col",{attrs:{span:6}},[e("a-form-model-item",[e("a-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v(" 搜索 ")]),e("a-button",{staticClass:"ml-10",on:{click:t.reset}},[t._v(" 重置 ")])],1)],1)],1),e("a-row",[e("a-col",{attrs:{span:9}},[e("a-form-model-item",{attrs:{label:"手动搜索"}},[e("a-input-group",{attrs:{compact:""}},[e("a-select",{staticStyle:{width:"30%"},on:{select:t.handleContentTypeChange},model:{value:t.contentType,callback:function(e){t.contentType=e},expression:"contentType"}},[e("a-select-option",{attrs:{value:"1"}},[t._v(" 订单编号 ")]),e("a-select-option",{attrs:{value:"2"}},[t._v(" 商家名称 ")]),e("a-select-option",{attrs:{value:"5"}},[t._v(" 物业名称 ")]),e("a-select-option",{attrs:{value:"3"}},[t._v(" 团队名称 ")]),e("a-select-option",{attrs:{value:"4"}},[t._v(" 业务员名称 ")])],1),e("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"请输入搜索内容"},on:{change:t.handleInputChange},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)],1),e("a-col",{attrs:{span:9}},[e("a-form-model-item",{attrs:{label:"下单时间"}},[e("a-range-picker",{staticStyle:{width:"100%"},attrs:{ranges:{"今日":[t.moment(),t.moment()],"近7天":[t.moment().subtract("days",6),t.moment()],"近15天":[t.moment().subtract("days",14),t.moment()],"近30天":[t.moment().subtract("days",29),t.moment()]},value:t.time,format:"YYYY-MM-DD"},on:{change:t.onDateRangeChange}})],1)],1),e("a-col",{attrs:{span:6}})],1),e("a-row",[e("a-col",{attrs:{span:9}},[e("a-form-model-item",{attrs:{label:"订单类型"}},[e("a-select",{attrs:{placeholder:"请选择订单类型"},model:{value:t.searchForm.type,callback:function(e){t.$set(t.searchForm,"type",e)},expression:"searchForm.type"}},[e("a-select-option",{attrs:{value:0}},[t._v(" 新订单 ")]),e("a-select-option",{attrs:{value:1}},[t._v(" 续费订单 ")])],1)],1)],1),e("a-col",{attrs:{span:9}},[e("a-form-model-item",{attrs:{label:"订单业务"}},[e("a-select",{attrs:{placeholder:"请选择订单业务"},model:{value:t.searchForm.order_business,callback:function(e){t.$set(t.searchForm,"order_business",e)},expression:"searchForm.order_business"}},[e("a-select-option",{attrs:{value:0}},[t._v(" 店铺 ")]),e("a-select-option",{attrs:{value:1}},[t._v(" 社区 ")])],1)],1)],1),e("a-col",{attrs:{span:6}})],1)],1),e("a-row",{staticStyle:{"box-shadow":"2px 2px 10px 2px #eee","text-align":"center",padding:"15px 0","border-radius":"5px"},attrs:{type:"flex",align:"middle"}},[e("a-col",{attrs:{span:11}},[e("statistic",{attrs:{title:"成交订单数",value:t.dealOrderNums}})],1),e("a-col",{attrs:{span:1}},[e("a-divider",{staticStyle:{height:"45px"},attrs:{type:"vertical"}})],1),e("a-col",{attrs:{span:11}},[e("statistic",{attrs:{title:"成交总金额",value:t.dealTotalMoney}})],1)],1),e("a-table",{staticClass:"mt-20",attrs:{columns:t.columns,"row-key":function(t){return t.order_id},"data-source":t.dataList,pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"order_business",fn:function(a){return[e("span",0==a?[t._v("店铺")]:[t._v("社区")])]}},{key:"action",fn:function(a,n){return[e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.goDetail(a,n)}}},[t._v("查看详情")])]}}])}),e("a-drawer",{attrs:{title:"查看详情",placement:"right",closable:!0,visible:t.detailVisible,width:"60%"},on:{close:t.handleDrawerClose}},[e("order-detail",{attrs:{orderId:t.orderId,orderBusiness:t.orderType,type:"mer"}})],1)],1)},r=[],i=a("8ee2"),o=(a("707a"),a("b9de")),s=a("2f42"),c=a.n(s),l=a("126e"),u=a("aa80"),d={name:"MarkeringOrderInfo",components:{statistic:o["a"],OrderDetail:u["default"]},data:function(){return{selectArea:[],areaList:[],areaPersonList:[],teamList:[],time:[],searchForm:{begin_time:"",end_time:"",type:void 0,province_id:void 0,city_id:void 0,area_id:void 0,area_uid:void 0,team_id:void 0,order_business:void 0},contentType:"1",content:"",searchFormLayout:f,loading:!1,columns:p,dataList:[],pagination:{current:1,pageSize:10,total:0},order:0,detailVisible:!1,dealOrderNums:0,dealTotalMoney:0,currency:"￥",orderId:"",orderType:0}},watch:{selectArea:function(t){var e=this;t.length&&(this.searchForm.province_id=t[0],this.searchForm.city_id=t[1],this.searchForm.area_id=t[2],this.request(l["a"].getAreaUidByProvince,{province_id:t[0],city_id:t[1],area_id:t[2]}).then((function(t){e.areaPersonList=t||[]})))}},created:function(){this.getDataList()},methods:{moment:c.a,onAreaPersonSelect:function(t){var e=this;this.request(l["a"].getTeamIdByAreaUid,{area_uid:t}).then((function(t){e.teamList=t||[]}))},handleContentTypeChange:function(t){delete this.searchForm.orderid,delete this.searchForm.name,delete this.searchForm.property_name,delete this.searchForm.team_name,delete this.searchForm.person_name,this.resetSeachContent()},handleInputChange:function(t){this.content&&this.resetSeachContent()},resetSeachContent:function(){1==this.contentType?this.searchForm.orderid=this.content:2==this.contentType?this.searchForm.name=this.content:3==this.contentType?this.searchForm.team_name=this.content:4==this.contentType?this.searchForm.person_name=this.content:5==this.contentType&&(this.searchForm.property_name=this.content)},onDateRangeChange:function(t,e){this.$set(this,"time",[t[0],t[1]]),this.searchForm.begin_time=e[0],this.searchForm.end_time=e[1]},search:function(){this.$set(this.pagination,"current",1),this.getDataList()},reset:function(){this.$set(this,"searchForm",this.$options.data().searchForm),this.$set(this,"time",[]),this.contentType="1",this.content="",this.teamList=[],this.areaPersonList=[],this.selectArea=[],this.$set(this.pagination,"current",1),this.getDataList()},handleTableChange:function(t,e,a){var n=t.current;n==this.pagination.current&&(a.order?this.order="ascend"==a.order?2:1:this.order=0,n=1),this.$set(this.pagination,"current",n),this.getDataList()},getDataList:function(){var t=this;this.request(l["a"].getOrderList,Object(i["a"])(Object(i["a"])({},this.searchForm),{},{page:this.pagination.current,pageSize:this.pagination.pageSize,order:this.order})).then((function(e){e.areaList&&!t.areaList.length&&(t.areaList=e.areaList),e.list&&(t.$set(t.pagination,"total",e.count),t.dealOrderNums=e.count,t.dealTotalMoney=t.currency+e.total_price,t.dataList=e.list||[])}))},goDetail:function(t,e){this.detailVisible=!0,this.orderType=e.order_business,this.orderId=t},handleDrawerClose:function(){this.detailVisible=!1}}},f={labelCol:{span:4},wrapperCol:{span:18}},p=[{title:"订单编号",dataIndex:"orderid",align:"center"},{title:"商家/物业名称",dataIndex:"mer_name",align:"center"},{title:"订单业务",dataIndex:"order_business",align:"center",scopedSlots:{customRender:"order_business"}},{title:"下单店铺/套餐",dataIndex:"store_name",align:"center"},{title:"订单总金额",dataIndex:"total_price",align:"center"},{title:"业务员",dataIndex:"per_name",align:"center"},{title:"购买数量",dataIndex:"total_num",align:"center"},{title:"店铺数量",dataIndex:"buy_num",align:"center"},{title:"订单类型",dataIndex:"order_type_status",align:"center"},{title:"支付时间",dataIndex:"place_time",sorter:!0,align:"center"},{title:"操作",dataIndex:"order_id",scopedSlots:{customRender:"action"},align:"center"}],m=d,h=(a("8d9a"),a("0b56")),v=Object(h["a"])(m,n,r,!1,null,"0be0919a",null);e["default"]=v.exports},2297:function(t,e,a){var n=a("30fc0"),r=a("282f"),i=a("f0b8"),o=a("700f");function s(t,e,a){t=o(t),e=i(e);var s=e?r(t):0;return e&&s<e?n(e-s,a)+t:t}t.exports=s},"24c0":function(t,e,a){},"282f":function(t,e,a){var n=a("ccf3"),r=a("026b"),i=a("086e");function o(t){return r(t)?i(t):n(t)}t.exports=o},"2bbb":function(t,e,a){var n=a("30fc0"),r=a("282f"),i=a("f0b8"),o=a("700f");function s(t,e,a){t=o(t),e=i(e);var s=e?r(t):0;return e&&s<e?t+n(e-s,a):t}t.exports=s},"30fc0":function(t,e,a){var n=a("9b3c"),r=a("5eff"),i=a("9d34"),o=a("026b"),s=a("282f"),c=a("ff8d"),l=Math.ceil;function u(t,e){e=void 0===e?" ":r(e);var a=e.length;if(a<2)return a?n(e,t):e;var u=n(e,l(t/s(e)));return o(e)?i(c(u),0,t).join(""):u.slice(0,t)}t.exports=u},"707a":function(t,e,a){"use strict";a("f7d0"),a("24c0")},"8d9a":function(t,e,a){"use strict";a("f7c4")},"9b3c":function(t,e){var a=9007199254740991,n=Math.floor;function r(t,e){var r="";if(!t||e<1||e>a)return r;do{e%2&&(r+=t),e=n(e/2),e&&(t+=t)}while(e);return r}t.exports=r},"9d34":function(t,e,a){var n=a("291a");function r(t,e,a){var r=t.length;return a=void 0===a?r:a,!e&&a>=r?t:n(t,e,a)}t.exports=r},b9b2:function(t,e){var a="\\ud800-\\udfff",n="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",o=n+r+i,s="\\ufe0e\\ufe0f",c="["+a+"]",l="["+o+"]",u="\\ud83c[\\udffb-\\udfff]",d="(?:"+l+"|"+u+")",f="[^"+a+"]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",h="\\u200d",v=d+"?",g="["+s+"]?",b="(?:"+h+"(?:"+[f,p,m].join("|")+")"+g+v+")*",y=g+v+b,_="(?:"+[f+l+"?",l,p,m,c].join("|")+")",x=RegExp(u+"(?="+u+")|"+_+y,"g");function w(t){return t.match(x)||[]}t.exports=w},b9de:function(t,e,a){"use strict";var n=a("6d2e"),r=a.n(n),i=a("eb38"),o=a("ddb1"),s=a("1626"),c=a("2bbb"),l=a.n(c),u={name:"AStatisticNumber",functional:!0,render:function(t,e){var a=e.props,n=a.value,r=a.formatter,i=a.precision,o=a.decimalSeparator,s=a.groupSeparator,c=void 0===s?"":s,u=a.prefixCls,d=void 0;if("function"===typeof r)d=r({value:n,h:t});else{var f=String(n),p=f.match(/^(-?)(\d*)(\.(\d+))?$/);if(p){var m=p[1],h=p[2]||"0",v=p[4]||"";h=h.replace(/\B(?=(\d{3})+(?!\d))/g,c),"number"===typeof i&&(v=l()(v,i,"0").slice(0,i)),v&&(v=""+o+v),d=[t("span",{key:"int",class:u+"-content-value-int"},[m,h]),v&&t("span",{key:"decimal",class:u+"-content-value-decimal"},[v])]}else d=f}return t("span",{class:u+"-content-value"},[d])}},d={prefixCls:i["a"].string,decimalSeparator:i["a"].string,groupSeparator:i["a"].string,format:i["a"].string,value:i["a"].oneOfType([i["a"].string,i["a"].number,i["a"].object]),valueStyle:i["a"].any,valueRender:i["a"].any,formatter:i["a"].any,precision:i["a"].number,prefix:i["a"].any,suffix:i["a"].any,title:i["a"].any},f={name:"AStatistic",props:Object(o["t"])(d,{decimalSeparator:".",groupSeparator:","}),inject:{configProvider:{default:function(){return s["a"]}}},render:function(){var t=arguments[0],e=this.$props,a=e.prefixCls,n=e.value,i=void 0===n?0:n,s=e.valueStyle,c=e.valueRender,l=this.configProvider.getPrefixCls,d=l("statistic",a),f=Object(o["g"])(this,"title"),p=Object(o["g"])(this,"prefix"),m=Object(o["g"])(this,"suffix"),h=Object(o["g"])(this,"formatter",{},!1),v=t(u,{props:r()({},this.$props,{prefixCls:d,value:i,formatter:h})});return c&&(v=c(v)),t("div",{class:d},[f&&t("div",{class:d+"-title"},[f]),t("div",{style:s,class:d+"-content"},[p&&t("span",{class:d+"-content-prefix"},[p]),v,m&&t("span",{class:d+"-content-suffix"},[m])])])}},p=a("e02c"),m=a.n(p),h=a("2f42"),v=a("7f1d"),g=a("f972"),b=a.n(g),y=a("2297"),_=a.n(y),x=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];function w(t,e){var a=t,n=/\[[^\]]*\]/g,r=(e.match(n)||[]).map((function(t){return t.slice(1,-1)})),i=e.replace(n,"[]"),o=x.reduce((function(t,e){var n=b()(e,2),r=n[0],i=n[1];if(-1!==t.indexOf(r)){var o=Math.floor(a/i);return a-=o*i,t.replace(new RegExp(r+"+","g"),(function(t){var e=t.length;return _()(o.toString(),e,"0")}))}return t}),i),s=0;return o.replace(n,(function(){var t=r[s];return s+=1,t}))}function F(t,e){var a=e.format,n=void 0===a?"":a,r=Object(v["a"])(h)(t).valueOf(),i=Object(v["a"])(h)().valueOf(),o=Math.max(r-i,0);return w(o,n)}var C=1e3/30;function S(t){return Object(v["a"])(h)(t).valueOf()}var T={name:"AStatisticCountdown",props:Object(o["t"])(d,{format:"HH:mm:ss"}),created:function(){this.countdownId=void 0},mounted:function(){this.syncTimer()},updated:function(){this.syncTimer()},beforeDestroy:function(){this.stopTimer()},methods:{syncTimer:function(){var t=this.$props.value,e=S(t);e>=Date.now()?this.startTimer():this.stopTimer()},startTimer:function(){var t=this;this.countdownId||(this.countdownId=window.setInterval((function(){t.$refs.statistic.$forceUpdate(),t.syncTimer()}),C))},stopTimer:function(){var t=this.$props.value;if(this.countdownId){clearInterval(this.countdownId),this.countdownId=void 0;var e=S(t);e<Date.now()&&this.$emit("finish")}},formatCountdown:function(t){var e=t.value,a=t.config,n=this.$props.format;return F(e,r()({},a,{format:n}))},valueRenderHtml:function(t){return t}},render:function(){var t=arguments[0];return t(f,m()([{ref:"statistic"},{props:r()({},this.$props,{valueRender:this.valueRenderHtml,formatter:this.formatCountdown}),on:Object(o["k"])(this)}]))}},I=a("1e51");f.Countdown=T,f.install=function(t){t.use(I["a"]),t.component(f.name,f),t.component(f.Countdown.name,f.Countdown)};e["a"]=f},c2f6:function(t,e){function a(t){return t.split("")}t.exports=a},ccf3:function(t,e,a){var n=a("1f3e"),r=n("length");t.exports=r},f7c4:function(t,e,a){},ff8d:function(t,e,a){var n=a("c2f6"),r=a("026b"),i=a("b9b2");function o(t){return r(t)?i(t):n(t)}t.exports=o}}]);