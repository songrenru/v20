(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-896d84e6"],{"1b639":function(t,e,a){"use strict";a("a1fb")},"32f8":function(t,e,a){var i=a("862d"),r=a("3eba");r.extendSeriesModel({type:"series.liquidFill",visualColorAccessPath:"textStyle.normal.color",optionUpdated:function(){var t=this.option;t.gridSize=Math.max(Math.floor(t.gridSize),4)},getInitialData:function(t,e){var a=i(["value"],t.data),l=new r.List(a,this);return l.initData(t.data),l},defaultOption:{color:["#294D99","#156ACF","#1598ED","#45BDFF"],center:["50%","50%"],radius:"50%",amplitude:"8%",waveLength:"80%",phase:"auto",period:"auto",direction:"right",shape:"circle",waveAnimation:!0,animationEasing:"linear",animationEasingUpdate:"linear",animationDuration:2e3,animationDurationUpdate:1e3,outline:{show:!0,borderDistance:8,itemStyle:{color:"none",borderColor:"#294D99",borderWidth:8,shadowBlur:20,shadowColor:"rgba(0, 0, 0, 0.25)"}},backgroundStyle:{color:"#E3F7FF"},itemStyle:{opacity:.95,shadowBlur:50,shadowColor:"rgba(0, 0, 0, 0.4)"},label:{show:!0,color:"#294D99",insideColor:"#fff",fontSize:50,fontWeight:"bold",align:"center",baseline:"middle",position:"inside"},emphasis:{itemStyle:{opacity:.8}}}})},a1fb:function(t,e,a){},a98e:function(t,e,a){var i=a("3eba");a("32f8"),a("cb7d"),i.registerVisual(i.util.curry(a("98e7"),"liquidFill"))},cb7d:function(t,e,a){var i=a("3eba"),r=i.number,l=a("a15a"),n=r.parsePercent,s=a("ccf7");i.extendChartView({type:"liquidFill",render:function(t,e,a){var r=this.group;r.removeAll();var o=t.getData(),h=o.getItemModel(0),c=h.get("center"),u=h.get("radius"),d=a.getWidth(),v=a.getHeight(),p=Math.min(d,v),g=0,f=0,m=t.get("outline.show");m&&(g=t.get("outline.borderDistance"),f=n(t.get("outline.itemStyle.borderWidth"),p));var w,y,b,_=n(c[0],d),C=n(c[1],v),S=!1,M=t.get("shape");if("container"===M?(S=!0,w=[d/2,v/2],y=[w[0]-f/2,w[1]-f/2],b=[n(g,d),n(g,v)],u=[Math.max(y[0]-b[0],0),Math.max(y[1]-b[1],0)]):(w=n(u,p)/2,y=w-f/2,b=n(g,p),u=Math.max(y-b,0)),m){var L=A();L.style.lineWidth=f,r.add(A())}var P=S?0:_-u,I=S?0:C-u,x=null;r.add(D());var F=this._data,E=[];function k(t,e){if(M){if(0===M.indexOf("path://")){var a=i.graphic.makePath(M.slice(7),{}),r=a.getBoundingRect(),n=r.width,s=r.height;n>s?(s*=2*t/n,n=2*t):(n*=2*t/s,s=2*t);var o=e?0:_-n/2,h=e?0:C-s/2;return a=i.graphic.makePath(M.slice(7),{},new i.graphic.BoundingRect(o,h,n,s)),e&&(a.position=[-n/2,-s/2]),a}if(S){var c=e?-t[0]:_-t[0],u=e?-t[1]:C-t[1];return l.createSymbol("rect",c,u,2*t[0],2*t[1])}c=e?-t:_-t,u=e?-t:C-t;return"pin"===M?u+=t:"arrow"===M&&(u-=t),l.createSymbol(M,c,u,2*t,2*t)}return new i.graphic.Circle({shape:{cx:e?0:_,cy:e?0:C,r:t}})}function A(){var e=k(w);return e.style.fill=null,e.setStyle(t.getModel("outline.itemStyle").getItemStyle()),e}function D(){var e=k(u);e.setStyle(t.getModel("backgroundStyle").getItemStyle()),e.style.fill=null,e.z2=5;var a=k(u);a.setStyle(t.getModel("backgroundStyle").getItemStyle()),a.style.stroke=null;var r=new i.graphic.Group;return r.add(e),r.add(a),r}function z(e,a,r){var l=S?u[0]:u,h=S?v/2:u,c=o.getItemModel(e),d=c.getModel("itemStyle"),p=c.get("phase"),g=n(c.get("amplitude"),2*h),f=n(c.get("waveLength"),2*l),m=o.get("value",e),w=h-m*h*2;p=r?r.shape.phase:"auto"===p?e*Math.PI/4:p;var y=d.getItemStyle();if(!y.fill){var b=t.get("color"),M=e%b.length;y.fill=b[M]}var L=2*l,P=new s({shape:{waveLength:f,radius:l,radiusY:h,cx:L,cy:0,waterLevel:w,amplitude:g,phase:p,inverse:a},style:y,position:[_,C]});P.shape._waterLevel=w;var I=c.getModel("emphasis.itemStyle").getItemStyle();I.lineWidth=0,i.graphic.setHoverStyle(P,I);var x=k(u,!0);return x.setStyle({fill:"white"}),P.setClipPath(x),P}function T(t,e,a){var i=o.getItemModel(t),r=i.get("period"),l=i.get("direction"),n=o.get("value",t),s=i.get("phase");s=a?a.shape.phase:"auto"===s?t*Math.PI/4:s;var h=function(e){var a=o.count();return 0===a?e:e*(.2+(a-t)/a*.8)},c=0;c="auto"===r?h(5e3):"function"===typeof r?r(n,t):r;var u=0;"right"===l||null==l?u=Math.PI:"left"===l?u=-Math.PI:"none"===l?u=0:console.error("Illegal direction value for liquid fill."),"none"!==l&&i.get("waveAnimation")&&e.animate("shape",!0).when(0,{phase:s}).when(c/2,{phase:u+s}).when(c,{phase:2*u+s}).during((function(){x&&x.dirty(!0)})).start()}function Y(e){var a=h.getModel("label");function r(){var e=t.getFormattedLabel(0,"normal"),a=100*o.get("value",0),i=o.getName(0)||t.name;return isNaN(a)||(i=a.toFixed(0)+"%"),null==e?i:e}var l={z2:10,shape:{x:P,y:I,width:2*(S?u[0]:u),height:2*(S?u[1]:u)},style:{fill:"transparent",text:r(),textAlign:a.get("align"),textVerticalAlign:a.get("baseline")},silent:!0},n=new i.graphic.Rect(l),s=a.get("color");i.graphic.setText(n.style,a,s);var c=new i.graphic.Rect(l),d=a.get("insideColor");i.graphic.setText(c.style,a,d),c.style.textFill=d;var v=new i.graphic.Group;v.add(n),v.add(c);var p=k(u,!0);return x=new i.graphic.CompoundPath({shape:{paths:e},position:[_,C]}),x.setClipPath(p),c.setClipPath(x),v}o.diff(F).add((function(e){var a=z(e,!1),l=a.shape.waterLevel;a.shape.waterLevel=S?v/2:u,i.graphic.initProps(a,{shape:{waterLevel:l}},t),a.z2=2,T(e,a,null),r.add(a),o.setItemGraphicEl(e,a),E.push(a)})).update((function(e,a){for(var l=F.getItemGraphicEl(a),n=z(e,!1,l),s={},h=["amplitude","cx","cy","phase","radius","radiusY","waterLevel","waveLength"],c=0;c<h.length;++c){var u=h[c];n.shape.hasOwnProperty(u)&&(s[u]=n.shape[u])}var d={},p=["fill","opacity","shadowBlur","shadowColor"];for(c=0;c<p.length;++c){u=p[c];n.style.hasOwnProperty(u)&&(d[u]=n.style[u])}S&&(s.radiusY=v/2),i.graphic.updateProps(l,{shape:s},t),l.useStyle(d),l.position=n.position,l.setClipPath(n.clipPath),l.shape.inverse=n.inverse,T(e,l,l),r.add(l),o.setItemGraphicEl(e,l),E.push(l)})).remove((function(t){var e=F.getItemGraphicEl(t);r.remove(e)})).execute(),h.get("label.show")&&r.add(Y(E)),this._data=o},dispose:function(){}})},ccf7:function(t,e,a){var i=a("3eba");function r(t,e,a,i){return 0===e?[[t+.5*a/Math.PI/2,i/2],[t+.5*a/Math.PI,i],[t+a/4,i]]:1===e?[[t+.5*a/Math.PI/2*(Math.PI-2),i],[t+.5*a/Math.PI/2*(Math.PI-1),i/2],[t+a/4,0]]:2===e?[[t+.5*a/Math.PI/2,-i/2],[t+.5*a/Math.PI,-i],[t+a/4,-i]]:[[t+.5*a/Math.PI/2*(Math.PI-2),-i],[t+.5*a/Math.PI/2*(Math.PI-1),-i/2],[t+a/4,0]]}t.exports=i.graphic.extendShape({type:"ec-liquid-fill",shape:{waveLength:0,radius:0,radiusY:0,cx:0,cy:0,waterLevel:0,amplitude:0,phase:0,inverse:!1},buildPath:function(t,e){null==e.radiusY&&(e.radiusY=e.radius);var a=Math.max(2*Math.ceil(2*e.radius/e.waveLength*4),8);while(e.phase<2*-Math.PI)e.phase+=2*Math.PI;while(e.phase>0)e.phase-=2*Math.PI;var i=e.phase/Math.PI/2*e.waveLength,l=e.cx-e.radius+i-2*e.radius;t.moveTo(l,e.waterLevel);for(var n=0,s=0;s<a;++s){var o=s%4,h=r(s*e.waveLength/4,o,e.waveLength,e.amplitude);t.bezierCurveTo(h[0][0]+l,-h[0][1]+e.waterLevel,h[1][0]+l,-h[1][1]+e.waterLevel,h[2][0]+l,-h[2][1]+e.waterLevel),s===a-1&&(n=h[2][0])}e.inverse?(t.lineTo(n+l,e.cy-e.radiusY),t.lineTo(l,e.cy-e.radiusY),t.lineTo(l,e.waterLevel)):(t.lineTo(n+l,e.cy+e.radiusY),t.lineTo(l,e.cy+e.radiusY),t.lineTo(l,e.waterLevel)),t.closePath()}})},e2d1:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"event_list"},[t.params.nav_left?a("div",{staticClass:"left_view"},[t._v(t._s(t.params.nav_left.title)),a("span",{staticStyle:{"margin-left":"2px",color:"#fff","margin-top":"3px"}},[t._v(t._s(t.params.nav_left.value))])]):t._e(),a("div",{staticClass:"right_view"},[a("div",{staticClass:"top_chart"},[a("div",{staticClass:"first_floor"},[a("div",{staticClass:"middle_con"},[t.params.nav_list?a("div",{staticClass:"title"},[t._v(t._s(t.params.nav_list[0].title))]):t._e(),t.params.nav_list?a("div",{staticClass:"value"},[t._v(t._s(t.params.nav_list[0].value))]):t._e()]),t._m(0)]),t._m(1)]),a("div",{staticClass:"bottom_table"},t._l(t.params.tj_list,(function(e,i){return a("div",{key:i,staticClass:"item",style:{backgroundColor:i%2==0?"rgba(65,97,138,.7)":""}},[a("div",{staticClass:"left_title"},[t._v(t._s(e.title))]),a("div",{staticClass:"right_value",style:{color:e.color}},[t._v(t._s(e.value))])])})),0)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right_icon"},[a("img",{attrs:{src:"https://hf.pigcms.com/static/wxapp/cockpitScreen/right_arrow.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"second_floor"},[a("div",{staticClass:"chart_1",attrs:{id:"eventListChart1"}}),a("div",{staticClass:"chart_2",attrs:{id:"eventListChart2"}}),a("div",{staticClass:"chart_3",attrs:{id:"eventListChart3"}})])}],l=a("313e"),n=(a("a98e"),{props:{params:{type:Object,default:function(){return{}}}},data:function(){return{list:[{title:"摄像头报警",value:"事件数",color:"#C01C38"},{title:"摄像头报警",value:"已处置",color:"#11A56A"},{title:"摄像头报警",value:"事件数",color:"#C01C38"},{title:"摄像头报警",value:"处置中",color:"#E5CC4C"}]}},mounted:function(){},watch:{params:{handler:function(t){this.setChart("eventListChart1"),this.setChart("eventListChart2"),this.setChart("eventListChart3")}}},methods:{setChart:function(t){var e=l["init"](document.getElementById(t)),a="",i="",r="",n=0,s="";"eventListChart1"==t?(a="rgba(255,0,0, .5)",s="rgba(255,0,0, 1)",i=1*this.params.nav_list[1].value,r=this.params.nav_list[1].title,n=1*i/this.params.nav_list[0].value*1):"eventListChart2"==t?(a="rgba(255,222,0, .5)",s="rgba(255,222,0, 1)",i=1*this.params.nav_list[2].value,r=this.params.nav_list[2].title,n=1*i/this.params.nav_list[0].value*1):"eventListChart3"==t&&(a="rgba(0,255,58, .5)",s="rgba(0,255,58, 1)",i=1*this.params.nav_list[3].value,r=this.params.nav_list[3].title,n=1*i/this.params.nav_list[0].value*1);var o={series:[{type:"liquidFill",radius:"85%",center:["50%","50%"],data:[n],backgroundStyle:{borderWidth:1,color:"rgba(255, 255, 255, 0)"},color:[a],label:{normal:{formatter:function(t){return i+"\n\n"+r},textStyle:{fontSize:10,color:s}}},outline:{show:!1}},{type:"pie",center:["50%","50%"],radius:["90%","100%"],hoverAnimation:!1,data:[{name:"",value:23,label:{show:!0,position:"center",color:"rgba(0,0,0,0)",fontSize:12,fontWeight:"bold",formatter:function(t){return i}},itemStyle:{color:new l["graphic"].LinearGradient(0,0,0,1,[{offset:0,color:"rgba(84, 224, 254, .2)"},{offset:1,color:"rgba(84, 224, 254, .5)"}])}},{name:"",value:.3,label:{show:!1},itemStyle:{color:"RGBA(28, 84, 147, 1)"},labelLine:{normal:{show:!1}}}]},{type:"pie",center:["50%","52%"],radius:["80%","90%"],hoverAnimation:!1,data:[{name:"",value:0,label:{show:!1,position:"center",color:"rgba(0,0,0,0)",fontSize:12,fontWeight:"bold",formatter:function(t){return i}},itemStyle:{color:new l["graphic"].LinearGradient(0,0,0,1,[{offset:0,color:"#5089FE"},{offset:1,color:"#52C5FF"}])}},{name:"",value:2,label:{show:!1},itemStyle:{color:"rgba(0,0,0,0)"}}]}]};e.setOption(o)}}}),s=n,o=(a("1b639"),a("0c7c")),h=Object(o["a"])(s,i,r,!1,null,"627b5232",null);e["default"]=h.exports}}]);