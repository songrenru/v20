(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-741ca24d","chunk-2d21e539"],{"5e98":function(e,t,i){},"6df6":function(e,t,i){"use strict";i("5e98")},a194:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"video_preview"},[i("div",{staticClass:"top_tab",style:{width:e.fullScreen?"75%":"100%"}},[i("div",{staticClass:"left_view"},[e._l(e.tabList,(function(t,o){return i("div",{key:o,staticClass:"tab_list",class:e.currentIndex==o?"active":"",on:{click:function(t){return e.changeScreen(o)}}},[e._v(e._s(t.name))])})),i("div",{key:99999,staticClass:"tab_list",staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.openScreen()}}},[e._v(" "+e._s(e.fullScreen?"全屏":"取消全屏")+" ")])],2),i("div",{staticClass:"right_view"},[i("a-pagination",{staticStyle:{"margin-left":"300px"},attrs:{current:e.pageInfo.page,pageSize:e.pageInfo.limit,total:e.totalCount},on:{change:e.paginationChange}})],1)]),e.reloadVideo?i("div",{staticClass:"bottom_container",style:{width:e.fullScreen?"75%":"100%"}},e._l(e.videoList,(function(t,o){return i("div",{key:o,staticClass:"video_list",style:e.styleList[e.currentIndex]},[i("div",{staticClass:"video_msg",staticStyle:{position:"absolute",top:"0",left:"0",color:"#fff","z-index":"999"}},[e._v(" 【设备名】："+e._s(t.camera_name)+"， 【设备状态】："+e._s(t.camera_status_txt)+" ")]),"flv"==t.lookUrlType&&e.reloadVideo?i("video",{staticClass:"videoPlayer",staticStyle:{width:"100%",height:"100%"},attrs:{id:"myVideo"+o,controls:"",autoplay:!0},domProps:{muted:!1}}):"hls"==t.lookUrlType&&e.reloadVideo?i("hlsVideo",{staticStyle:{width:"100%",height:"100%"},attrs:{videoType:t.lookUrlType,videoUrl:t.look_url,videoIndex:o}}):i("div",{staticClass:"no_video",staticStyle:{width:"100%",height:"100%","background-color":"#fff"}})],1)})),0):e._e()])},a=[],n=(i("d81d"),i("fc78")),l=i.n(n),s=i("d4a4"),r={components:{hlsVideo:s["default"]},data:function(){return{tabList:[{name:"单屏幕",type:1},{name:"四分屏",type:2},{name:"九分屏",type:3},{name:"十六分屏",type:4}],currentIndex:0,videoList:[{name:"1"}],styleList:[{width:"100%",height:"100%"},{width:"50%",height:"50%"},{width:"33.3%",height:"33.3%"},{width:"25%",height:"25%"}],videoSrc:"https://flvopen.ys7.com:9188/openlive/daac42b18e4b4bd1826e52d50f84add5.flv",flvPlayer:null,fullScreen:!0,options:{autoplay:!0,muted:!0,preload:"auto",controls:!0},player:null,videoId:"",pageInfo:{page:1,limit:1},totalCount:0,reloadVideo:!0}},mounted:function(){this.getVideoList()},beforeDestroy:function(){this.videoSrc&&this.destoryVideo()},methods:{paginationChange:function(e){this.pageInfo.page=e,this.getVideoList()},openScreen:function(){this.fullScreen=!this.fullScreen},getVideoList:function(){var e=this;e.request("/community/village_api.CameraDevice/cameraDeviceLinks",e.pageInfo).then((function(t){e.totalCount=t.count,e.reloadVideo=!1,e.destoryVideo(),setTimeout((function(){e.reloadVideo=!0,e.videoList=t.list,e.$nextTick((function(){e.videoList.map((function(t,i){"flv"==t.lookUrlType&&e.createVideo(t,i)}))}))}),500)}))},changeScreen:function(e){this.currentIndex!=e?(this.currentIndex=e,this.pageInfo.page=1,0==e?this.pageInfo.limit=1:1==e?this.pageInfo.limit=4:2==e?this.pageInfo.limit=9:3==e&&(this.pageInfo.limit=16),this.getVideoList()):console.log("重复")},createVideo:function(e,t){var i=this;if(l.a.isSupported()){var o=document.getElementById("myVideo"+t);if(this.flvPlayer=l.a.createPlayer({type:"flv",isLive:!0,hasAudio:!1,url:e.look_url}),!this.flvPlayer)return;this.flvPlayer.attachMediaElement(o),this.flvPlayer.load(),this.flvPlayer.play(),this.flvPlayer.on(l.a.Events.ERROR,(function(e,t){i.flvPlayer&&(i.destoryVideo(),i.createVideo())}))}},destoryVideo:function(){this.flvPlayer&&(this.flvPlayer.pause(),this.flvPlayer.unload(),this.flvPlayer.detachMediaElement(),this.flvPlayer.destroy(),this.flvPlayer=null)}}},d=r,c=(i("6df6"),i("0c7c")),u=Object(c["a"])(d,o,a,!1,null,"5d526b70",null);t["default"]=u.exports},d4a4:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hls_video"},["hls"==e.videoType?i("video",{staticClass:"video-js",staticStyle:{width:"100%",height:"100%"},attrs:{id:"videoPlayer"+e.videoIndex,controls:"",options:e.options}}):e._e()])},a=[],n=(i("a9e3"),i("3d337")),l=i.n(n),s=(i("a151"),i("fda2"),{props:{videoType:{type:String,default:""},videoUrl:{type:String,default:""},videoIndex:{type:Number,default:0}},data:function(){return{options:{autoplay:!0,muted:!0,preload:"auto",controls:!0},singlePlayer:null,reloadVideo:!0}},mounted:function(){var e=this;e.$nextTick((function(){e.initHls()}))},methods:{initHls:function(){var e=this;e.singlePlayer=l()("videoPlayer"+this.videoIndex,e.options,(function(){})),e.singlePlayer.src([{src:e.videoUrl,type:"application/x-mpegURL"}]),e.singlePlayer.play()}},beforeDestroy:function(){var e=this;e.singlePlayer&&e.singlePlayer.dispose()}}),r=s,d=i("0c7c"),c=Object(d["a"])(r,o,a,!1,null,"0999f0b0",null);t["default"]=c.exports}}]);