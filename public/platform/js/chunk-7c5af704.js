(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c5af704"],{7445:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"community_fire_protection"},[a("div",{staticClass:"left_view"},t._l(t.params.nav_list,(function(e,o){return a("div",{key:o,staticClass:"label_item"},[a("div",{staticClass:"left_con"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"title"},[a("a-tooltip",{attrs:{placement:"topRight"}},[a("template",{slot:"title"},[a("span",[t._v(t._s(e.title)+"：")])]),t._v(" "+t._s(e.title)+"： ")],2)],1)]),a("div",{staticClass:"right_value",style:{color:e.color}},[a("a-tooltip",{attrs:{placement:"topRight"}},[a("template",{slot:"title"},[a("span",[t._v(t._s(e.value))])]),t._v(" "+t._s(e.value)+" ")],2)],1)])})),0),a("div",{staticClass:"right_chart",attrs:{id:"fireProtectionChart"}})])},i=[],l=(a("d3b7"),a("159b"),a("b0c0"),a("313e")),s={props:{params:{type:Object,default:function(){return{}}}},data:function(){return{left_list:[{title:"消防总人力",value:82,color:"#1ABFF1"},{title:"消防站",value:"正常",color:"#1AF17A"}]}},mounted:function(){},watch:{params:{handler:function(t){this.setCharts()}}},methods:{setCharts:function(){var t=l["init"](document.getElementById("fireProtectionChart")),e=this.getSeriesV(),a={title:{text:this.params.tj_title,bottom:0,left:"center",textStyle:{color:"#fff",fontStyle:"normal",fontWeight:"bold",fontFamily:"sans-serif",fontSize:12}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:this.params.chart_title,top:"0%",left:"5%",textStyle:{color:"rgba(255, 255, 255, .9)",fontSize:12}},grid:{top:"25%",left:"3%",right:"4%",bottom:"10%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:this.params.chart_x,axisLabel:{show:!0,textStyle:{color:"RGBA(255, 255, 255, 0.7)"}}},yAxis:{type:"value",splitLine:{show:!0,lineStyle:{type:"dashed",color:"RGBA(1, 100, 173, 0.7)"}},axisLabel:{textStyle:{color:"RGBA(255, 255, 255, 0.7)",margin:15}}},series:e};t.setOption(a)},getSeriesV:function(){var t=this.params.chart_y,e=[];return t&&t.forEach((function(t){var a={name:t.name,smooth:!0,symbolSize:1,data:t.data,type:"line",itemStyle:{normal:{color:t.color,lineStyle:{color:t.color}}},areaStyle:{normal:{color:new l["graphic"].LinearGradient(0,0,0,1,[{offset:0,color:t.color},{offset:.8,color:"RGBA(26, 129, 246, 0)"}],!1),shadowColor:"RGBA(26, 129, 246, 0)",shadowBlur:10}}};e.push(a)})),e}}},r=s,n=(a("944a0"),a("0c7c")),c=Object(n["a"])(r,o,i,!1,null,"2fc26622",null);e["default"]=c.exports},"944a0":function(t,e,a){"use strict";a("cebc")},cebc:function(t,e,a){}}]);