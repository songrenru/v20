(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bd15892","chunk-2d21e539"],{"033d":function(e,t,i){"use strict";i("4c7e")},"4c7e":function(e,t,i){},a194:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"video_preview"},[e.fullScreen?i("div",{staticClass:"left_menu"},[i("div",{staticClass:"search_con"},[i("a-input",{attrs:{placeholder:"请输入搜索内容"},model:{value:e.searchVal,callback:function(t){e.searchVal=t},expression:"searchVal"}}),i("a-button",{attrs:{icon:"search"},on:{click:e.searchThis}})],1),e._l(e.menuList,(function(t,o){return i("div",{key:o,staticClass:"menu_list",class:e.currentChoose==o?"active":"",on:{click:function(i){return e.chooseVideo(t,o)}}},[e._v(" "+e._s(t.camera_name)+" ")])}))],2):e._e(),i("div",{staticClass:"right_container",style:{width:e.fullScreen?"88vw":"100vw"}},[i("div",{staticClass:"top_tab"},[i("div",{staticClass:"left_view"},[e._l(e.tabList,(function(t,o){return i("div",{key:o,staticClass:"tab_list",class:e.currentIndex==o?"active":"",on:{click:function(t){return e.changeScreen(o)}}},[e._v(e._s(t.name))])})),i("div",{key:99999,staticClass:"tab_list",staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.openScreen()}}},[e._v(" "+e._s(e.fullScreen?"全屏":"取消全屏")+" ")])],2)]),e.reloadVideo?i("div",{staticClass:"bottom_container"},e._l(e.videoList,(function(t,o){return i("div",{key:o,staticClass:"video_list",style:e.styleList[e.currentIndex]},[i("div",{staticClass:"video_msg",staticStyle:{position:"absolute",top:"0",left:"0",color:"#fff","z-index":"999"}},[e._v(" 【设备名】："+e._s(t.camera_name)+"， 【设备状态】："+e._s(t.camera_status_txt)+" ")]),"flv"==t.lookUrlType&&e.reloadVideo?i("video",{staticClass:"videoPlayer",staticStyle:{width:"100%",height:"100%"},attrs:{id:"myVideo"+o,controls:"",autoplay:!0},domProps:{muted:!1}}):"hls"==t.lookUrlType&&e.reloadVideo?i("hlsVideo",{staticStyle:{width:"100%",height:"100%"},attrs:{videoType:t.lookUrlType,videoUrl:t.look_url,videoIndex:o}}):i("div",{staticClass:"no_video",staticStyle:{width:"100%",height:"100%","background-color":"#fff"}})],1)})),0):e._e()])])},n=[],s=(i("d81d"),i("a434"),i("fc78")),a=i.n(s),l=i("d4a4"),r={components:{hlsVideo:l["default"]},data:function(){return{tabList:[{name:"单屏幕",type:1},{name:"四分屏",type:2},{name:"九分屏",type:3},{name:"十六分屏",type:4}],currentIndex:0,videoList:[],styleList:[{width:"100%",height:"100%"},{width:"50%",height:"50%"},{width:"33.3%",height:"33.3%"},{width:"25%",height:"25%"}],videoSrc:"https://flvopen.ys7.com:9188/openlive/daac42b18e4b4bd1826e52d50f84add5.flv",flvPlayer:null,fullScreen:!0,options:{autoplay:!0,muted:!0,preload:"auto",controls:!0},player:null,videoId:"",pageInfo:{page:1,limit:1},totalCount:0,reloadVideo:!0,menuList:[],currentChoose:-1,searchVal:"",frequency:!1}},mounted:function(){this.getLeftMenuList()},beforeDestroy:function(){this.videoSrc&&this.destoryVideo()},methods:{searchThis:function(){var e=this;if(e.frequency)e.$message.warn("请求频繁，请稍后再试");else{e.frequency=!0;var t=setTimeout((function(){e.frequency=!1,clearTimeout(t)}),2e3);e.getLeftMenuList()}},chooseVideo:function(e,t){var i=this;if(t!=i.currentChoose){var o=!1;if(i.videoList.map((function(t,i){e.camera_id==t.camera_id&&(o=!0)})),o)i.$message.warn("当前视频已在预览中");else{i.currentChoose=t,i.destoryVideo();var n=[];i.videoList.map((function(e){n.push(e)})),n.splice(0,1),n.push(e),i.videoList=[],setTimeout((function(){i.reloadVideo=!0,i.videoList=n,i.$nextTick((function(){i.videoList.map((function(e,t){i.createVideo(e,t,e.lookUrlType)}))}))}),500)}}else console.log("重复")},openScreen:function(){this.fullScreen=!this.fullScreen},getVideoList:function(){var e=this;e.request("/community/village_api.CameraDevice/cameraDeviceLinks",e.pageInfo).then((function(t){e.totalCount=t.count,e.reloadVideo=!1,e.destoryVideo(),setTimeout((function(){e.reloadVideo=!0,e.videoList=t.list,e.$nextTick((function(){e.videoList.map((function(t,i){e.createVideo(t,i,t.lookUrlType)}))}))}),500)}))},getLeftMenuList:function(){var e=this;e.request("/community/village_api.CameraDevice/cameraDeviceLinks",{page:-1,name:e.searchVal}).then((function(t){e.menuList=t.list,e.videoList.length>0||(e.videoList=[t.list[0]],e.reloadVideo=!0,e.destoryVideo(),e.$nextTick((function(){t.list.length>0&&e.createVideo(t.list[0],0,t.list[0]["lookUrlType"])})))}))},changeScreen:function(e){var t=this;t.currentIndex!=e?(t.currentIndex=e,t.videoList=[],t.destoryVideo(),setTimeout((function(){t.reloadVideo=!0,t.menuList.map((function(i,o){o<(e+1)*(e+1)&&t.videoList.push(i)})),t.$nextTick((function(){t.videoList.map((function(e,i){t.createVideo(e,i,lookUrlType)}))}))}),500)):console.log("重复")},createVideo:function(e,t){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"flv";if("flv"==o&&a.a.isSupported()){var n=document.getElementById("myVideo"+t);if(this.flvPlayer=a.a.createPlayer({type:"flv",isLive:!0,hasAudio:!1,url:e.look_url}),!this.flvPlayer)return;this.flvPlayer.attachMediaElement(n),this.flvPlayer.load(),this.flvPlayer.play(),this.flvPlayer.on(a.a.Events.ERROR,(function(e,t){i.flvPlayer&&i.destoryVideo()}))}},destoryVideo:function(){this.flvPlayer&&(this.flvPlayer.pause(),this.flvPlayer.unload(),this.flvPlayer.detachMediaElement(),this.flvPlayer.destroy(),this.flvPlayer=null)}}},c=r,d=(i("033d"),i("0c7c")),u=Object(d["a"])(c,o,n,!1,null,"226933fc",null);t["default"]=u.exports},d4a4:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hls_video"},["hls"==e.videoType?i("video",{staticClass:"video-js",staticStyle:{width:"100%",height:"100%"},attrs:{id:"videoPlayer"+e.videoIndex,controls:"",options:e.options}}):e._e()])},n=[],s=(i("a9e3"),i("3d337")),a=i.n(s),l=(i("a151"),i("fda2"),{props:{videoType:{type:String,default:""},videoUrl:{type:String,default:""},videoIndex:{type:Number,default:0}},data:function(){return{options:{autoplay:!0,muted:!0,preload:"auto",controls:!0},singlePlayer:null,reloadVideo:!0}},mounted:function(){var e=this;e.$nextTick((function(){e.initHls()}))},methods:{initHls:function(){var e=this;e.singlePlayer=a()("videoPlayer"+this.videoIndex,e.options,(function(){})),e.singlePlayer.src([{src:e.videoUrl,type:"application/x-mpegURL"}]),e.singlePlayer.play()}},beforeDestroy:function(){var e=this;e.singlePlayer&&e.singlePlayer.dispose()}}),r=l,c=i("0c7c"),d=Object(c["a"])(r,o,n,!1,null,"0999f0b0",null);t["default"]=d.exports}}]);