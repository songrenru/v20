(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65a31d96"],{"0c69":function(e,t,i){},a63e:function(e,t,i){"use strict";i("0c69")},bb46:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"charts_container_14"}},[i("video",{staticClass:"videoPlayer1",attrs:{id:"myFlvVideo1",controls:"",autoplay:""},domProps:{muted:!1}})])},o=[],l=i("567c"),r=i("fc78"),n=i.n(r),s={data:function(){return{videoSrc:"",flvPlayer:null}},mounted:function(){this.getData()},beforeDestroy:function(){self.videoSrc&&this.destoryVideo()},methods:{getData:function(){console.log("视频简介1",l["a"].getEventVideo1Statistics);var e=this;e.request(l["a"].getEventVideo1Statistics,{}).then((function(t){e.videoSrc=t.url,e.videoSrc&&e.createVideo()}))},createVideo:function(){var e=this;if(n.a.isSupported()){var t=document.getElementById("myFlvVideo1");this.flvPlayer=n.a.createPlayer({type:"flv",isLive:!0,hasAudio:!1,url:this.videoSrc}),this.flvPlayer.attachMediaElement(t),this.flvPlayer.load(),this.flvPlayer.play(),this.flvPlayer.on(n.a.Events.ERROR,(function(t,i){console.log("errorType:",t),console.log("errorDetail:",i),e.flvPlayer&&(e.destoryVideo(),e.createVideo())}))}},destoryVideo:function(){this.flvPlayer&&(this.flvPlayer.pause(),this.flvPlayer.unload(),this.flvPlayer.detachMediaElement(),this.flvPlayer.destroy(),this.flvPlayer=null)}}},c=s,d=(i("a63e"),i("2877")),u=Object(d["a"])(c,a,o,!1,null,"4255a3a4",null);t["default"]=u.exports}}]);