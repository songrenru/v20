(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ece7c47e"],{"5c2c":function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticStyle:{height:"100%"}},[t("div",{staticClass:"iframe-container"},e._l(e.paramArr,(function(o){return t("iframe",{directives:[{name:"show",rawName:"v-show",value:e.srcUrl===o.src,expression:"srcUrl === item.src"}],key:o.name,ref:o.name,refInFor:!0,staticClass:"iframe-style",attrs:{src:o.src,frameborder:"no",scrolling:"yes",height:"100%"},on:{load:e.iframeOnload}})})),0),t("iframe-dialog",{ref:"iframeModel",staticStyle:{"z-index":"999999991"},on:{handleOk:e.handleOK,handleClose:e.handleClose}}),t("iframe-dialog",{ref:"iframeModel2",staticStyle:{"z-index":"999999992"},on:{handleOk:e.handleOK,handleClose:e.handleClose}}),t("iframe-dialog",{ref:"iframeModel3",staticStyle:{"z-index":"999999993"},on:{handleOk:e.handleOK,handleClose:e.handleClose}}),e.imgModalInfo?t("a-modal",{attrs:{footer:null,title:e.imgModalInfo.title,visible:e.imgModalVisiable,width:e.imgModalInfo.width+50,destroyOnClose:""},on:{cancel:e.handleImgPreviewClose}},[t("img",{style:{width:e.imgModalInfo.width+"px",height:e.imgModalInfo.height+"px"},attrs:{src:e.imgModalInfo.url},on:{click:e.imgClick}})]):e._e(),t("IframeDrawer",{ref:"iframeDrawerModel1",on:{handleDrawerClose:e.handleDrawerClose}})],1)},i=[],r=(t("b0c0"),t("4de4"),t("d3b7"),t("ac1f"),t("1276"),t("5319"),t("8bbf")),l=t.n(r),a=t("7a16"),s=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("a-drawer",{attrs:{title:e.title,placement:e.placement,closable:e.closable,visible:e.visible,zIndex:e.zIndex,width:e.width,height:e.height,destroyOnClose:""},on:{close:e.handleDrawerClose}},[t("iframe",{ref:"childIframe",staticClass:"drawer-iframe",style:e.drawerIframeStyle,attrs:{src:e.url,frameborder:"no",name:"Openadd"}})])],1)},c=[],d=(t("b64b"),t("159b"),{name:"IframeDrawer",props:{},data:function(){return{url:"",id:"",title:"",placement:"right",closable:!1,visible:!1,width:"256",height:"256",zIndex:1e3,drawerIframeStyle:{width:"100%",height:"100%"}}},methods:{openDrawer:function(e){var o=this;this.visible=!0,console.log(e,"IframeDrawer"),Object.keys(e).length&&Object.keys(e).forEach((function(t){o[t]=e[t]}))},handleDrawerClose:function(){this.$emit("handleDrawerClose")},closeVisible:function(){this.visible=!1}}}),f=d,m=(t("a443"),t("2877")),h=Object(m["a"])(f,s,c,!1,null,"2c3703c2",null),u=h.exports,g=t("7a6b"),w=t("ca00"),p=t("4360"),v=t("a18c"),$=null,b=[0,0,0],M=!1,I={name:"IframePage",inject:["reload"],components:{IframeDialog:a["a"],CustomTooltip:g["a"],IframeDrawer:u},data:function(){return{url:"",iframeDom:null,routers:[],currentItem:null,srcUrl:"",pathName:"",param:"",paramArr:[],imgModalVisiable:!1,imgModalInfo:null,dialogAllRefreshList:[]}},watch:{"$route.path":{handler:function(e){console.log("val----",e),-1!=e.indexOf("iframe")&&(M=!1,this.getMenuList())}}},mounted:function(){$=this,this.getMenuList(),console.log("iframePage------------iframePage")},methods:{setLinkBases:function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"platform",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"h5";this.$LinkBases({source:o,type:t,handleOkBtn:function(o){console.log("handleOk",o),e.url=o.url}})},getMenuList:function(){var e=Object(w["j"])(this.$route.path)+"_system_menu";this.routers=l.a.ls.get(e),this.routers&&this.routers.length&&this.getPath()},getPath:function(){var e=this.$route.name;this.pathName=e;for(var o=!1,t=0;t<this.routers.length;t++){var n=this.routers[t];if(n.name==e){this.currentItem=n;var i=decodeURIComponent(n.src),r=this.$route.query;if(r&&r.url&&(i=decodeURIComponent(r.url)),this.srcUrl=i,this.paramArr&&"null"!=this.paramArr&&this.paramArr.length){var l=this.paramArr.filter((function(o){return o.name==e}));0==l.length&&(r&&r.url&&this.paramArr.push({name:e+"_with_url",src:i}),this.paramArr.push({name:e,src:i}))}else this.paramArr.push({name:e,src:i});return void(o=!0)}}o||(console.log("没有找到当前路由的iframe地址",e,this.routers),this.$message.error("当前页面可能已过期，请按F5刷新"),this.srcUrl="",this.currentItem=null)},iframeOnload:function(){var e=this.$refs[this.pathName][0];this.iframeDom=e,console.log(e.contentWindow,"iframeDom.contentWindow");try{setTimeout((function(){var o=e.contentWindow.document.documentElement.scrollHeight,t=e.contentWindow.document.body.scrollHeight,n=document.documentElement.clientHeight-120,i=t?t+100:o;e.style.minHeight=n>i?n+"px":i+"px"}),20)}catch(o){console.log("iframe高度获取失败了")}},handleOK:function(e){if(M)this.$message.warning("请勿重复提交！");else{var o=null;o=b[2]?this.$refs.iframeModel3.$refs.childIframe:b[1]?this.$refs.iframeModel2.$refs.childIframe:this.$refs.iframeModel.$refs.childIframe;var t=o.contentWindow;if(t.document.body){var n=t.document.getElementById("dosubmit");n?(n.click(),this.dialogAllRefreshList=JSON.parse(JSON.stringify(b))):"function"==typeof t.dialogConfirm&&t.dialogConfirm()}else this.$message.error("操作失败，请重试！");"function"==typeof this.iframeDom.contentWindow.dialogConfirm&&this.iframeDom.contentWindow.dialogConfirm()}},handleClose:function(e){var o=null;b[2]?(b[2]=0,o=this.$refs.iframeModel3.$refs.childIframe,this.$refs.iframeModel3.visible=!1):b[1]?(b[1]=0,o=this.$refs.iframeModel2.$refs.childIframe,this.$refs.iframeModel2.visible=!1):(b[0]=0,o=this.$refs.iframeModel.$refs.childIframe,this.$refs.iframeModel.visible=!1);var t=o.contentWindow;"function"==typeof t.dialogCancel&&t.dialogCancel(),"function"==typeof this.iframeDom.contentWindow.dialogCancel&&this.iframeDom.contentWindow.dialogCancel()},imgClick:function(){this.imgModalInfo.click&&window.open(this.imgModalInfo.url)},handleImgPreviewClose:function(){this.imgModalVisiable=!1},handleDrawerClose:function(){$.$refs.iframeDrawerModel1.closeVisible()},dialogAllRefresh:function(){var e=this.dialogAllRefreshList.filter((function(e){return 1==e})),o=e.length;2==o&&$.$refs.iframeModel.$refs.childIframe.contentWindow.location.reload(!0),3==o&&$.$refs.iframeModel2.$refs.childIframe.contentWindow.location.reload(!0),this.dialogAllRefreshList=[]}}};function y(){var e=0;return e=document.body.clientHeight&&document.documentElement.clientHeight?document.body.clientHeight<document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight:document.body.clientHeight>document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight,e}window["artiframe"]=function(e,o,t,n,i,r,l,a,s,c,d,f,m,h){-1==e.indexOf("#")&&(-1!==e.indexOf("?")?e+="&frame=1":e+="?frame=1"),t||(t="auto"),n?n>.8*y()&&(n=.8*y()):n="auto",i||(i=!1),r||(r=!1),l||(l="black"),d||(d=null),a||(a=null),f||(f="50%"),m||(m="38.2%"),s||(s=null),c||(c=!1),h||(h=0);var u={url:e,title:o,width:t,height:n,lock:i,resize:r,background:l,button:a,id:s,fixeds:c,closefun:d,left:f,top:m,padding:h};console.log(u,"params"),$.$refs.iframeModel.visible?$.$refs.iframeModel2.visible?$.$refs.iframeModel3.visible||(b=[1,1,1],$.$refs.iframeModel3.openDialog(u)):(b=[1,1,0],$.$refs.iframeModel2.openDialog(u)):(b=[1,0,0],$.$refs.iframeModel.openDialog(u))},window["iframeDrawer"]=function(e){$.$refs.iframeDrawerModel1.visible||$.$refs.iframeDrawerModel1.openDrawer(e)},window["closeIframeDrawer"]=function(){$.$refs.iframeDrawerModel1.closeVisible()},window["msg"]=function(e,o,t,n){console.log("1111111",e),2==e?(M=!0,$.$message.loading(o,1)):1==e?(M=!1,setTimeout((function(){$.$message.success(o)}),1e3)):(M=!1,e?setTimeout((function(){$.$message.success(o)}),1e3):setTimeout((function(){$.$message.error(o)}),1e3))},window["main_refresh"]=function(){$.iframeDom.contentWindow.location.reload(!0),setTimeout((function(){$.dialogAllRefresh()}),500)};var k=null;window["art"]={dialog:function(e){e.content&&(k=$.$confirm({title:e.title,content:e.content,okText:e.okText?e.okText:"确认",okType:e.okType?e.okType:"danger",cancelText:e.cancelText?e.cancelText:"取消",onOk:function(){e.ok&&"function"==typeof e.ok&&e.ok()},onCancel:function(){e.cancel&&"function"==typeof e.cancel&&e.cancel()}}))},preview:function(e){$.imgModalInfo=e,$.imgModalVisiable=!0}},window.closeArt=function(){k&&k.destroy()},window.art.dialog.data=function(e,o){console.log(e,"t1"),console.log(o,"t2")},window["closeiframe"]=function(){$.handleClose()},window["layer"]={open:function(e){var o={title:e.title};e.content?o["url"]=e.content:e.url&&(o["url"]=e.url),e.height&&(o["height"]=e.height),e.width&&(o["width"]=e.width),console.log("params",o),$.$refs.iframeModel.visible?$.$refs.iframeModel2.visible?$.$refs.iframeModel3.visible||$.$refs.iframeModel3.openDialog(o):$.$refs.iframeModel2.openDialog(o):$.$refs.iframeModel.openDialog(o)},close:function(e){$.$refs.iframeModel.handleClose(),e&&$.iframeDom.contentWindow.location.reload(!0)}},window.addIframe=function(e,o,t,n){if(console.log("window.addIframe",e,o,t,n),t)if(-1!=t.indexOf("platform")||-1!=t.indexOf("village")||(-1!=t.indexOf("merchant")||-1!=t.indexOf("storestaff"))&&-1==t.indexOf(".php")){var i=n||{};$.$router.push({path:t,query:i})}else if(-1==t.indexOf("http")){var r=location.origin+t;$.iframeDom.contentWindow.location.href=r}else window.open(t)},window.frames=function(e){return 1==b[2]?$.$refs.iframeModel2.$refs.childIframe.contentWindow:$.$refs.iframeModel.$refs.childIframe.contentWindow},window.getTopIframe=function(){return $.iframeDom.contentWindow},window.getParentIframe=function(){return 1==b[2]?(console.log(2,"dialogs"),$.$refs.iframeModel2.$refs.childIframe.contentWindow):1==b[1]?(console.log(1,"dialogs"),$.$refs.iframeModel.$refs.childIframe.contentWindow):(console.log(0,"dialogs"),$.iframeDom.contentWindow)},window.contentScrollToTop=function(){window.document.getElementById("contentView").scrollTop=0},window.goV20Url=function(e){$.$router.push(e)},window.setLinkBases=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"platform",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"h5";console.log(e,"currentIframe"),$.$LinkBases({source:o,type:t,handleOkBtn:function(o){e&&e.getLinkBasesUrl&&e.getLinkBasesUrl(o.url)}})},window.openNewTab=function(e){var o=e.split("#")[1];$.$router.push(o)},window.GenerateRoutes=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";o||(o=Object(w["j"])(location.hash)+"_access_token"),p["a"].dispatch("GetInfo",{tokenName:o}).then((function(t){var n=t&&t.role,i="";e&&(i=e.replace("v20/public/platform/#/","")),console.log("GenerateRoutesURL",i),p["a"].dispatch("GenerateRoutes",{roles:n,tokenName:o,url:i}).then((function(){v["a"].addRoutes(p["a"].getters.addRouters),p["a"].dispatch("SetConfig"),console.log("GenerateRoutes",e),console.log("tokenName",o),e&&setTimeout((function(){console.log("1GenerateRoutes",e),window.goV20Url(i)}),1e3)}))})).catch((function(){notification.error({message:"登录超时",description:"请重新登录"}),p["a"].dispatch("Logout",o).then((function(){next({path:loginPath})}))}))};var D=I,C=(t("e0b9"),Object(m["a"])(D,n,i,!1,null,"143ad165",null));o["default"]=C.exports},9592:function(e,o,t){},a443:function(e,o,t){"use strict";t("dbe8")},dbe8:function(e,o,t){},e0b9:function(e,o,t){"use strict";t("9592")}}]);