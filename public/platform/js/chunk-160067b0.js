(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-160067b0","chunk-7477f697","chunk-7477f697"],{49420:function(t,e){var i={getrem:function(){var t=1/window.devicePixelRatio;document.write('<meta name="viewport" content="width=device-width,initial-scale='+t+",minimum-scale="+t+",maximum-scale="+t+'" />');var e=document.getElementsByTagName("html")[0],i=e.getBoundingClientRect().width;e.style.fontSize=i/10+"px"}};t.exports=i},"7f95":function(t,e,i){},"933d":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container_box"},[t.show_img?t._e():i("div",{ref:"canvas",staticClass:"workshopCanvas",on:{click:t.selectPoint}},[i("img",{staticStyle:{position:"absolute",left:"0px",top:"0px",width:"1920px",height:"937px"},attrs:{src:t.ctxPic}}),i("canvas",{staticStyle:{position:"absolute",top:"0",left:"0"},attrs:{id:"myCanvas",width:"1920",height:"937"}})]),t.show_img?i("div",{ref:"canvas_img",staticClass:"imgBox"},[i("canvas",{attrs:{id:"myCanvas_img",width:"1920",height:"937"},on:{click:t.getWorkShop}})]):t._e(),i("div",{staticClass:"btn",on:{click:t.isok}},[t._v("完成")]),i("div",{staticClass:"btn_1",on:{click:t.isedit}},[t._v(t._s(t.edit_text))]),i("a-modal",{attrs:{title:"选择楼栋",width:500,centered:!0,closable:!0,visible:t.visible,maskClosable:!1},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("a-select",{staticStyle:{width:"200px"},attrs:{"default-value":t.single_id},on:{change:t.handleChange}},t._l(t.singleList,(function(e,o){return i("a-select-option",{attrs:{value:e.id}},[t._v(" "+t._s(e.single_name)+" ")])})),1)],1)],1)},n=[],s=(i("a434"),i("d81d"),i("159b"),i("cb29"),i("a0e0")),c=(i("49420"),i("8bbf"),{inject:["reload"],data:function(){return{visible:!1,offsetList:[],pointNum:0,ctxPic:"",imgUrl:"",pointData:[],detailData:[],imgsrc:"",ctx:null,canvasImg:!1,actionStatus:"click",singleList:[],single_id:"",url:"",show_img:!0,imgList:[],is_edit:!1,isSingle_id:"",edit_text:"编辑"}},activated:function(){console.log("你好")},created:function(){this.isSingle_id=this.$route.query.single_id,this.is_edit=sessionStorage.getItem("is_edit"),console.log("this.is_edit",this.is_edit,this.isSingle_id),"true"==this.is_edit?(this.show_img=!1,this.edit_text="编辑中",this.getVillageArea(),this.getSingleList(),this.renderCanvas(),console.log("加载---1",this.is_edit)):"false"==this.is_edit&&(this.edit_text="编辑",this.show_img=!0,this.initCanvas(),console.log("加载---2",this.is_edit))},mounted:function(){},methods:{getSingleList:function(){var t=this;this.request(s["a"].getSingleList,{},"post").then((function(e){t.singleList=e,t.single_id=e[0].id,console.log("getSingleList=============>",e,e)}))},getVillageArea:function(){var t=this;this.request(s["a"].getVillageArea,{},"post").then((function(e){t.ctxPic=e.village_floor,t.imgUrl=e.village_floor,t.url=e.url,console.log("getVillageArea=============>",e,e)}))},addVillgeArea:function(){var t=this;this.request(s["a"].addVillgeArea,{area:this.offsetList[this.offsetList.length-1].area,single_id:this.single_id,img:this.ctxPic},"post").then((function(e){t.$message.success({content:"添加楼栋成功!",key:1,duration:3}),t.visible=!1,sessionStorage.removeItem("is_edit");var i=!1;sessionStorage.setItem("is_edit",i),t.reload(),console.log("addVillgeArea=============>",e,e)}))},editVillgeArea:function(){var t=this;this.request(s["a"].editVillgeArea,{area:this.offsetList[this.offsetList.length-1].area,single_id:this.isSingle_id,img:this.ctxPic},"post").then((function(e){t.$message.success({content:"编辑楼栋成功!",key:1,duration:3}),t.visible=!1,sessionStorage.removeItem("is_edit");var i=!1;sessionStorage.setItem("is_edit",i),t.reload(),console.log("editVillgeArea=============>",e,e)}))},handleChange:function(t){console.log("数据---1",t),this.single_id=t},renderCanvas:function(){var t=this;this.request(s["a"].getVillgeAreaList,{single_id:this.isSingle_id},"post").then((function(e){if(t.ctxPic=e.img,t.imgUrl=e.img,""==e.img)return!1;if(t.isCurrentShow=!0,t.offsetList=e.list,-1!=t.isSingle_id){for(var i in console.log("是否进入了具体的楼栋",t.offsetList),t.offsetList)t.offsetList[i].single_id==t.isSingle_id&&t.offsetList.splice(i,1);console.log("是否进入了具体的楼栋--1",t.offsetList)}t.clearCanvas(),t.canvasImg=!0,t.ctxPic=t.imgUrl,t.$forceUpdate();var o=t,n="rgba(21, 236, 255, 0.5)",s=new Image;s.crossOrigin="Anonymous",s.src=o.ctxPic;var c=document.getElementById("myCanvas");o.ctx=c.getContext("2d"),console.log("_this.ctx",o.ctx,s),s.onload=function(){console.log("画点--4",o.pointNum,s,o.ctx,o.offsetList);var t=document.documentElement.clientWidth||document.body.clientWidth,e=document.documentElement.clientHeight||document.body.clientHeight;console.log("宽高度",t,e),o.ctx.drawImage(s,0,0,1920,937),c.getContext&&(o.ctx=c.getContext("2d"),o.drawCanvasimg(o.offsetList,"",n),console.log("画点--5_this.ctx",o.ctx,o.offsetList))},console.log("getVillgeAreaList=============>",e,e)}))},selectPoint:function(t,e){var i=this;if(console.log("画点",t,e),"detail"==this.actionStatus)return this.getWorkShop(t,e),!1;var o=this.offsetList;console.log("画点--7",this.offsetList,o),this.pointNum++,console.log("画点--8",this.pointNum);var n={};n.x=t.offsetX,n.y=t.offsetY;var s=this;s.pointData.push(n),console.log("画点--1",s.pointData,s.pointNum);var c="rgba(21, 236, 255, 0.5)";if(s.pointData.map((function(t,e){s.detailData.offsetPoints=new Array;var i=JSON.stringify(s.pointData[e]);s.detailData.offsetPoints.push(i)})),console.log("画点--6",s.detailData),s.checkNum(s.pointData[0].x,s.pointData[s.pointNum-1].x)&&s.checkNum(s.pointData[0].y,s.pointData[s.pointNum-1].y)&&1!=s.pointNum){console.log("画点--5",s.pointNum,s.pointData,s.ctx),s.pointData[s.pointNum-1].x=s.pointData[0].x,s.pointData[s.pointNum-1].y=s.pointData[0].y,this.clearCanvas(),this.canvasImg=!0,this.ctxPic=this.imgUrl,this.$forceUpdate();var a=new Image;a.crossOrigin="Anonymous",a.src=s.ctxPic;var l=document.getElementById("myCanvas");s.ctx=l.getContext("2d"),console.log("_this.ctx",s.ctx,a),a.onload=function(){if(console.log("画点--4",s.pointNum,a,s.ctx),s.ctx.drawImage(a,0,0,1920,937),l.getContext){s.ctx=l.getContext("2d");var t={};t["area"]=s.pointData,s.offsetList.push(t),console.log("看看组装的数据",s.pointData),s.drawCanvasimg(s.offsetList,"",c),console.log("_this.ctx",s.ctx,s.offsetList),s.pointData=[],s.pointNum=0,s.ctxPic=s.convertCanvasToImage(l),console.log("_this.ctxPic",s.ctxPic),i.actionStatus="detail"}}}else{a=new Image;a.crossOrigin="Anonymous",a.src=s.ctxPic;l=document.getElementById("myCanvas");s.ctx=l.getContext("2d"),a.onload=function(){s.ctx.drawImage(a,0,0,1920,937),l.getContext&&(console.log("_this",s),s.ctx=l.getContext("2d"),s.pointData.map((function(t){s.ctx.fillStyle="#BF001E",s.ctx.fillRect(t.x,t.y,4,4),s.ctx.beginPath(),s.ctx.moveTo(t.x,t.y),s.ctx.lineTo(t.x,t.y),s.ctx.closePath(),s.ctx.strokeStyle="#BF001E",s.ctx.stroke()})),s.drawCanvasimg(s.offsetList,"",c),console.log("_this.ctx",s.ctx,s.offsetList),s.ctx.font="12px bold Microsoft YaHei",s.imgsrc=s.convertCanvasToImage(l))}}},checkNum:function(t,e){var i=t+8,o=t-8;if(e>o&&e<i)return!0},drawCanvas:function(t,e,i){console.log("绘图有数据吗",t);var o=this;t.forEach((function(t,n){o.ctx.beginPath(),t.forEach((function(t,e){0==t?o.ctx.moveTo(t.x,t.y):o.ctx.lineTo(t.x,t.y)})),o.ctx.closePath(),o.ctx.strokeStyle="rgb(235,190,30)",o.ctx.stroke(),o.ctx.fillStyle=i,console.log("_this.ctx",o.ctx),o.ctx.fill(),console.log("_this.ctx",o.ctx),e&&(o.ctx.font="14px bold 黑体",o.ctx.fillStyle="#000",o.ctx.fillText(e,point1.x,point1.y+18))}))},drawCanvasimg:function(t,e,i){var o=this;t.forEach((function(t,i){o.ctx.beginPath(),t.area.forEach((function(t,e){0==t?o.ctx.moveTo(t.x,t.y):o.ctx.lineTo(t.x,t.y)})),o.ctx.closePath(),o.ctx.strokeStyle="rgb(235,190,30)",o.ctx.stroke(),o.ctx.fillStyle=t.bgColor,console.log("_this.ctx",o.ctx),o.ctx.fill(),console.log("_this.ctx",o.ctx),e&&(o.ctx.font="14/@rem * 1rem bold 黑体",o.ctx.fillStyle="#000",o.ctx.fillText(e,point1.x,point1.y+18))}))},convertCanvasToImage:function(t){var e=new Image;return e.src=t.toDataURL("image/png"),e},clearCanvas:function(){var t=this,e=this.ctxPic;if(t.ctxPic=e,console.log("画图---2",t.ctxPic),t.show_img)var i=document.getElementById("myCanvas_img");else i=document.getElementById("myCanvas");i.getContext("2d");console.log("画图---3",t.ctxPic),this.$forceUpdate()},isok:function(){this.isSingle_id<0?this.visible=!0:this.editVillgeArea()},isedit:function(){sessionStorage.removeItem("is_edit");var t=!0;sessionStorage.setItem("is_edit",t),this.reload()},initCanvas:function(){var t=this;this.request(s["a"].getVillgeAreaList,{single_id:this.isSingle_id},"post").then((function(e){if(t.ctxPic=e.img,t.imgUrl=e.img,""==e.img)return!1;t.isCurrentShow=!0,t.imgList=e.list,t.clearCanvas(),t.canvasImg=!0,t.ctxPic=t.imgUrl,t.$forceUpdate();var i=t,o="rgba(21, 236, 255, 0.5)",n=new Image;n.crossOrigin="Anonymous",n.src=i.ctxPic;var s=document.getElementById("myCanvas_img");i.ctx=s.getContext("2d"),console.log("_this.ctx",i.ctx,n),n.onload=function(){console.log("画点--4",i.pointNum,n,i.ctx,i.imgList);var t=document.documentElement.clientWidth||document.body.clientWidth,e=document.documentElement.clientHeight||document.body.clientHeight;console.log("宽高度",t,e),i.ctx.drawImage(n,0,0,1920,937),s.getContext&&(i.ctx=s.getContext("2d"),i.drawCanvasimg(i.imgList,"",o),console.log("画点--5_this.ctx",i.ctx,i.imgList),i.ctxPic=i.convertCanvasToImage(s))},console.log("getVillgeAreaList=============>",e,e)}))},getWorkShop:function(t,e){var i=this;console.log(""),console.log("检测元素--4",this.$refs.canvas,t,e);var o=this.$refs.canvas.clientWidth,n=this.$refs.canvas.clientHeight,s=t.offsetX,c=t.offsetY;document.documentElement.clientWidth||document.body.clientWidth,document.documentElement.clientHeight||document.body.clientHeight;console.log("宽高度",s,c);var a=parseInt(1920*s/o),l=parseInt(937*c/n);this.toplength=c-150,this.leftlength=s-45;var g=JSON.parse(JSON.stringify(this.imgList));if(console.log("检测元素--2",g,this.imgList,n,c),g.length>0){var r={x:a,y:l};console.log("检测元素--3",r,a,l);try{g.forEach((function(t){var e=i.judge(r,t.area);if(console.log("在里面",e),e)throw console.log("在里面"),console.log("里面的数据咋回事",t),i.text_show=!0,i.single_name=t.single_name,i.single_id=t.single_id,new Error("end");i.text_show=!1,console.log("000000000000000000000000000000",t)}))}catch(d){console.log("err",d)}}},judge:function(t,e,i){console.log("检查元素--1",e,t),i=i||1,console.log("检查元素--4",e,i,t);var o=t.x,n=t.y,s=0,c=0,a=0;console.log("检查元素--6",e.length);for(var l=0;l<e.length-1;l++){console.log("检查元素--5",e);var g=e[l],r=e[l+1];if(g.x!==r.x){var d=(r.y-g.y)/(r.x-g.x),h=(n-g.y)/d+g.x;o>h||(r.x>g.x&&h>=g.x&&h<=r.x&&(s++,d>=0?c++:a++),r.x<g.x&&h>=r.x&&h<=g.x&&(s++,d>=0?a++:c++))}else{if(o>g.x)continue;r.y>g.y&&n>=g.y&&n<=r.y&&(c++,s++),r.y<g.y&&n>=r.y&&n<=g.y&&(a++,s++)}}return console.log("检查元素--9",e),1===i?c-a!==0:s%2===1},handleSubmit:function(){console.log("数据---2",this.offsetList),this.addVillgeArea()},handleCancel:function(){this.visible=!1}}}),a=c,l=(i("c116"),i("2877")),g=Object(l["a"])(a,o,n,!1,null,"4986a778",null);e["default"]=g.exports},c116:function(t,e,i){"use strict";i("7f95")}}]);