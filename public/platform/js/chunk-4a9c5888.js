(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a9c5888"],{1767:function(e,o,n){"use strict";n("5f88")},3156:function(e,o,n){},"5c2c":function(e,o,n){"use strict";n.r(o);var i=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticStyle:{height:"100%"}},[n("div",{staticClass:"iframe-container"},e._l(e.paramArr,(function(o){return n("iframe",{directives:[{name:"show",rawName:"v-show",value:e.srcUrl===o.src,expression:"srcUrl === item.src"}],key:o.name,ref:o.name,refInFor:!0,staticClass:"iframe-style",attrs:{src:o.src,frameborder:"no",scrolling:"yes",height:"100%"},on:{load:e.iframeOnload}})})),0),n("iframe-dialog",{ref:"iframeModel",staticStyle:{"z-index":"999999991"},on:{handleOk:e.handleOK,handleClose:e.handleClose}}),n("iframe-dialog",{ref:"iframeModel2",staticStyle:{"z-index":"999999992"},on:{handleOk:e.handleOK,handleClose:e.handleClose}}),n("iframe-dialog",{ref:"iframeModel3",staticStyle:{"z-index":"999999993"},on:{handleOk:e.handleOK,handleClose:e.handleClose}}),e.imgModalInfo?n("a-modal",{attrs:{footer:null,title:e.imgModalInfo.title,visible:e.imgModalVisiable,width:e.imgModalInfo.width+50,destroyOnClose:""},on:{cancel:e.handleImgPreviewClose}},[n("img",{style:{width:e.imgModalInfo.width+"px",height:e.imgModalInfo.height+"px"},attrs:{src:e.imgModalInfo.url},on:{click:e.imgClick}})]):e._e(),n("IframeDrawer",{ref:"iframeDrawerModel1",on:{handleDrawerClose:e.handleDrawerClose}})],1)},t=[],r=(n("b0c0"),n("4de4"),n("d3b7"),n("ac1f"),n("1276"),n("5319"),n("8bbf")),a=n.n(r),l=n("7a16"),s=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",[n("a-drawer",{attrs:{title:e.title,placement:e.placement,closable:e.closable,visible:e.visible,zIndex:e.zIndex,width:e.width,height:e.height,destroyOnClose:""},on:{close:e.handleDrawerClose}},[n("iframe",{ref:"childIframe",staticClass:"drawer-iframe",style:e.drawerIframeStyle,attrs:{src:e.url,frameborder:"no",name:"Openadd"}})])],1)},c=[],f=(n("b64b"),n("159b"),{name:"IframeDrawer",props:{},data:function(){return{url:"",id:"",title:"",placement:"right",closable:!1,visible:!1,width:"256",height:"256",zIndex:1e3,drawerIframeStyle:{width:"100%",height:"100%"}}},methods:{openDrawer:function(e){var o=this;this.visible=!0,console.log(e,"IframeDrawer"),Object.keys(e).length&&Object.keys(e).forEach((function(n){o[n]=e[n]}))},handleDrawerClose:function(){this.$emit("handleDrawerClose")},closeVisible:function(){this.visible=!1}}}),d=f,m=(n("a443"),n("2877")),h=Object(m["a"])(d,s,c,!1,null,"2c3703c2",null),u=h.exports,g=n("7a6b"),w=n("ca00"),p=n("4360"),$=n("a18c"),v=null,b=[0,0,0],M=!1,I={name:"IframePage",inject:["reload"],components:{IframeDialog:l["a"],CustomTooltip:g["a"],IframeDrawer:u},data:function(){return{url:"",iframeDom:null,routers:[],currentItem:null,srcUrl:"",pathName:"",param:"",paramArr:[],imgModalVisiable:!1,imgModalInfo:null}},watch:{"$route.path":{handler:function(e){console.log("val----",e),-1!=e.indexOf("iframe")&&(M=!1,this.getMenuList())}}},mounted:function(){v=this,this.getMenuList(),console.log("iframePage------------iframePage")},methods:{setLinkBases:function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"platform",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"h5";this.$LinkBases({source:o,type:n,handleOkBtn:function(o){console.log("handleOk",o),e.url=o.url}})},getMenuList:function(){var e=Object(w["i"])(this.$route.path)+"_system_menu";this.routers=a.a.ls.get(e),this.routers&&this.routers.length&&this.getPath()},getPath:function(){var e=this.$route.name;this.pathName=e;for(var o=!1,n=0;n<this.routers.length;n++){var i=this.routers[n];if(i.name==e){this.currentItem=i;var t=decodeURIComponent(i.src),r=this.$route.query;if(r&&r.url&&(t=decodeURIComponent(r.url)),this.srcUrl=t,this.paramArr&&"null"!=this.paramArr&&this.paramArr.length){var a=this.paramArr.filter((function(o){return o.name==e}));0==a.length&&(r&&r.url&&this.paramArr.push({name:e+"_with_url",src:t}),this.paramArr.push({name:e,src:t}))}else this.paramArr.push({name:e,src:t});return void(o=!0)}}o||(console.log("没有找到当前路由的iframe地址",e,this.routers),this.$message.error("当前页面可能已过期，请按F5刷新"),this.srcUrl="",this.currentItem=null)},iframeOnload:function(){var e=this.$refs[this.pathName][0];this.iframeDom=e,console.log(e.contentWindow,"iframeDom.contentWindow");try{setTimeout((function(){var o=e.contentWindow.document.documentElement.scrollHeight,n=e.contentWindow.document.body.scrollHeight,i=document.documentElement.clientHeight-120,t=n?n+100:o;e.style.minHeight=i>t?i+"px":t+"px"}),20)}catch(o){console.log("iframe高度获取失败了")}},handleOK:function(e){var o=this;if(M)this.$message.warning("请勿重复提交！");else{var n=null;n=b[2]?this.$refs.iframeModel3.$refs.childIframe:b[1]?this.$refs.iframeModel2.$refs.childIframe:this.$refs.iframeModel.$refs.childIframe;var i=n.contentWindow;if(i.document.body){var t=i.document.getElementById("dosubmit");t?(t.click(),setTimeout((function(){o.dialogAllRefresh()}),300)):"function"==typeof i.dialogConfirm&&i.dialogConfirm()}else this.$message.error("操作失败，请重试！");"function"==typeof this.iframeDom.contentWindow.dialogConfirm&&this.iframeDom.contentWindow.dialogConfirm()}},handleClose:function(e){var o=null;b[2]?(b[2]=0,o=this.$refs.iframeModel3.$refs.childIframe,this.$refs.iframeModel3.visible=!1):b[1]?(b[1]=0,o=this.$refs.iframeModel2.$refs.childIframe,this.$refs.iframeModel2.visible=!1):(b[0]=0,o=this.$refs.iframeModel.$refs.childIframe,this.$refs.iframeModel.visible=!1);var n=o.contentWindow;"function"==typeof n.dialogCancel&&n.dialogCancel(),"function"==typeof this.iframeDom.contentWindow.dialogCancel&&this.iframeDom.contentWindow.dialogCancel()},imgClick:function(){this.imgModalInfo.click&&window.open(this.imgModalInfo.url)},handleImgPreviewClose:function(){this.imgModalVisiable=!1},handleDrawerClose:function(){v.$refs.iframeDrawerModel1.closeVisible()},dialogAllRefresh:function(){v.$refs.iframeModel.visible&&v.$refs.iframeModel.$refs.childIframe.contentWindow.location.reload(!0),v.$refs.iframeModel2.visible&&v.$refs.iframeModel2.$refs.childIframe.contentWindow.location.reload(!0),v.$refs.iframeModel3.visible&&v.$refs.iframeModel3.$refs.childIframe.contentWindow.location.reload(!0)}}};function D(){var e=0;return e=document.body.clientHeight&&document.documentElement.clientHeight?document.body.clientHeight<document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight:document.body.clientHeight>document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight,e}window["artiframe"]=function(e,o,n,i,t,r,a,l,s,c,f,d,m,h){-1==e.indexOf("#")&&(-1!==e.indexOf("?")?e+="&frame=1":e+="?frame=1"),n||(n="auto"),i?i>.8*D()&&(i=.8*D()):i="auto",t||(t=!1),r||(r=!1),a||(a="black"),f||(f=null),l||(l=null),d||(d="50%"),m||(m="38.2%"),s||(s=null),c||(c=!1),h||(h=0);var u={url:e,title:o,width:n,height:i,lock:t,resize:r,background:a,button:l,id:s,fixeds:c,closefun:f,left:d,top:m,padding:h};console.log(u,"params"),v.$refs.iframeModel.visible?v.$refs.iframeModel2.visible?v.$refs.iframeModel3.visible||(b=[1,1,1],v.$refs.iframeModel3.openDialog(u)):(b=[1,1,0],v.$refs.iframeModel2.openDialog(u)):(b=[1,0,0],v.$refs.iframeModel.openDialog(u))},window["iframeDrawer"]=function(e){v.$refs.iframeDrawerModel1.visible||v.$refs.iframeDrawerModel1.openDrawer(e)},window["closeIframeDrawer"]=function(){v.$refs.iframeDrawerModel1.closeVisible()},window["msg"]=function(e,o,n,i){console.log("1111111",e),2==e?(M=!0,v.$message.loading(o,1)):1==e?(M=!1,setTimeout((function(){v.$message.success(o)}),1e3)):(M=!1,e?setTimeout((function(){v.$message.success(o)}),1e3):setTimeout((function(){v.$message.error(o)}),1e3))},window["main_refresh"]=function(){v.iframeDom.contentWindow.location.reload(!0)},window["art"]={dialog:function(e){console.log(e,"d"),e.content&&v.$confirm({title:e.title,content:e.content,okText:"确认",okType:"danger",cancelText:"取消",onOk:function(){e.ok()},onCancel:function(){}})},preview:function(e){v.imgModalInfo=e,v.imgModalVisiable=!0}},window.art.dialog.data=function(e,o){console.log(e,"t1"),console.log(o,"t2")},window["closeiframe"]=function(){v.handleClose()},window["layer"]={open:function(e){var o={title:e.title};e.content?o["url"]=e.content:e.url&&(o["url"]=e.url),e.height&&(o["height"]=e.height),e.width&&(o["width"]=e.width),console.log("params",o),v.$refs.iframeModel.visible?v.$refs.iframeModel2.visible?v.$refs.iframeModel3.visible||v.$refs.iframeModel3.openDialog(o):v.$refs.iframeModel2.openDialog(o):v.$refs.iframeModel.openDialog(o)},close:function(e){v.$refs.iframeModel.handleClose(),e&&v.iframeDom.contentWindow.location.reload(!0)}},window.addIframe=function(e,o,n,i){if(console.log("window.addIframe",e,o,n,i),n)if(-1!=n.indexOf("platform")||-1!=n.indexOf("village")||(-1!=n.indexOf("merchant")||-1!=n.indexOf("storestaff"))&&-1==n.indexOf(".php")){var t=i||{};v.$router.push({path:n,query:t})}else if(-1==n.indexOf("http")){var r=location.origin+n;v.iframeDom.contentWindow.location.href=r}else window.open(n)},window.frames=function(e){return 1==b[2]?v.$refs.iframeModel2.$refs.childIframe.contentWindow:v.$refs.iframeModel.$refs.childIframe.contentWindow},window.getTopIframe=function(){return v.iframeDom.contentWindow},window.getParentIframe=function(){return 1==b[2]?(console.log(2,"dialogs"),v.$refs.iframeModel2.$refs.childIframe.contentWindow):1==b[1]?(console.log(1,"dialogs"),v.$refs.iframeModel.$refs.childIframe.contentWindow):(console.log(0,"dialogs"),v.iframeDom.contentWindow)},window.contentScrollToTop=function(){window.document.getElementById("contentView").scrollTop=0},window.goV20Url=function(e){v.$router.push(e)},window.setLinkBases=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"platform",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"h5";console.log(e,"currentIframe"),v.$LinkBases({source:o,type:n,handleOkBtn:function(o){e&&e.getLinkBasesUrl&&e.getLinkBasesUrl(o.url)}})},window.openNewTab=function(e){var o=e.split("#")[1];v.$router.push(o)},window.GenerateRoutes=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";o||(o=Object(w["i"])(location.hash)+"_access_token"),p["a"].dispatch("GetInfo",{tokenName:o}).then((function(n){var i=n&&n.role,t="";e&&(t=e.replace("v20/public/platform/#/","")),console.log("GenerateRoutesURL",t),p["a"].dispatch("GenerateRoutes",{roles:i,tokenName:o,url:t}).then((function(){$["a"].addRoutes(p["a"].getters.addRouters),p["a"].dispatch("SetConfig"),console.log("GenerateRoutes",e),console.log("tokenName",o),e&&setTimeout((function(){console.log("1GenerateRoutes",e),window.goV20Url(t)}),1e3)}))})).catch((function(){notification.error({message:"登录超时",description:"请重新登录"}),p["a"].dispatch("Logout",o).then((function(){next({path:loginPath})}))}))};var y=I,C=(n("1767"),Object(m["a"])(y,i,t,!1,null,"1cc225f4",null));o["default"]=C.exports},"5f88":function(e,o,n){},a443:function(e,o,n){"use strict";n("3156")}}]);