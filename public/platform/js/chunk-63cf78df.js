(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63cf78df"],{1433:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"charts_container_15"}},[o("video",{staticClass:"videoPlayer2",attrs:{id:"myFlvVideo2",controls:"",autoplay:""},domProps:{muted:!1}})])},l=[],a=o("567c"),r=o("fc78"),s=o.n(r),n={data:function(){return{videoSrc:"",flvPlayer:null}},mounted:function(){this.getData()},beforeDestroy:function(){self.videoSrc&&this.destoryVideo()},methods:{getData:function(){console.log("视频简介2",a["a"].getEventVideo2Statistics);var e=this;e.request(a["a"].getEventVideo2Statistics,{}).then((function(t){e.videoSrc=t.url,e.videoSrc&&e.createVideo()}))},createVideo:function(){var e=this;if(console.log("flvjs====>",s.a.isSupported()),s.a.isSupported()){var t=document.getElementById("myFlvVideo2");this.flvPlayer=s.a.createPlayer({type:"flv",isLive:!0,hasAudio:!1,url:this.videoSrc}),this.flvPlayer.attachMediaElement(t),this.flvPlayer.load(),this.flvPlayer.play(),this.flvPlayer.on(s.a.Events.ERROR,(function(t,o){console.log("errorType:",t),console.log("errorDetail:",o),e.flvPlayer&&(e.destoryVideo(),e.createVideo())}))}},destoryVideo:function(){this.flvPlayer&&(this.flvPlayer.pause(),this.flvPlayer.unload(),this.flvPlayer.detachMediaElement(),this.flvPlayer.destroy(),this.flvPlayer=null)}}},c=n,d=(o("6ce5"),o("2877")),f=Object(d["a"])(c,i,l,!1,null,"0679dd17",null);t["default"]=f.exports},"6ce5":function(e,t,o){"use strict";o("8262")},8262:function(e,t,o){}}]);