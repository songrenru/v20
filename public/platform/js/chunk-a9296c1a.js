(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9296c1a"],{2406:function(e,t,n){"use strict";var i={getStoreCategoryList:"/merchant/platform.MerchantStoreCategory/getStoreCategoryList",editStoreCategory:"/merchant/platform.MerchantStoreCategory/editStoreCategory",saveStoreCategory:"/merchant/platform.MerchantStoreCategory/saveStoreCategory",delStoreCategory:"/merchant/platform.MerchantStoreCategory/delStoreCategory",updateSort:"/merchant/platform.MerchantStoreCategory/updateSort",getCorrList:"/merchant/platform.Corr/searchCorr",getCorrDetails:"/merchant/platform.Corr/getCorrDetails",getEditCorr:"/merchant/platform.Corr/getEditCorr",getPositionList:"/merchant/platform.Position/getPositionList",getPositionCreate:"/merchant/platform.Position/getPositionCreate",getPositionInfo:"/merchant/platform.Position/getPositionInfo",getPositionCategoryList:"/merchant/platform.Position/getPositionCategoryList",getPositionDelAll:"/merchant/platform.Position/getPositionDelAll",getTechnicianList:"/merchant/platform.Technician/getTechnicianList",getTechnicianView:"/merchant/platform.Technician/getTechnicianView",getTechnicianExamine:"/merchant/platform.Technician/getTechnicianExamine",getTechnicianDel:"/merchant/platform.Technician/getTechnicianDel"};t["a"]=i},"26d6":function(e,t,n){"use strict";n("36af")},"36af":function(e,t,n){},dc95:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:810,height:640,visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[t("div",[t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:22}},[t("viewer",{attrs:{images:e.detail.pic}},e._l(e.detail.pic,(function(e,n){return t("img",{key:n,attrs:{src:e}})})),0)],1)],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:21}},[t("span",[e._v(" "+e._s(e.detail.content))])])],1)],1)])},r=[],o=n("2406"),a=(n("0a71"),n("eece")),s=n.n(a),l=n("8bbf"),c=n.n(l),u=n("e248");n("6cc6");c.a.use(s.a);var f={components:{videoPlayer:u["videoPlayer"]},data:function(){return{title:"反馈内容",visible:!1,rpl_id:0,detail:{content:"",pic:[]}}},methods:{showCorr:function(e){var t=this;this.visible=!0,this.id=e,this.request(o["a"].getCorrDetails,{id:this.id}).then((function(e){t.detail=e,console.log(t.detail)}))},handleCancel:function(){this.detail.reply_mv_nums=2,this.visible=!1}}},d=f,p=(n("26d6"),n("0b56")),h=Object(p["a"])(d,i,r,!1,null,"886abf42",null);t["default"]=h.exports},e248:function(e,t,n){!function(t,i){e.exports=i(n("6767"))}(0,(function(e){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a=window.videojs||o.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},writable:!0,configurable:!0});var s=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"];t.default={name:"video-player",props:{start:{type:Number,default:0},crossOrigin:{type:String,default:""},playsinline:{type:Boolean,default:!1},customEventName:{type:String,default:"statechanged"},options:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{controls:!0,controlBar:{remainingTimeDisplay:!1,playToggle:{},progressControl:{},fullscreenToggle:{},volumeMenuButton:{inline:!1,vertical:!0}},techOrder:["html5"],plugins:{}}}},globalEvents:{type:Array,default:function(){return[]}}},data:function(){return{player:null,reseted:!0}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()},methods:{initialize:function(){var e=this,t=Object.assign({},this.globalOptions,this.options);this.playsinline&&(this.$refs.video.setAttribute("playsinline",this.playsinline),this.$refs.video.setAttribute("webkit-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-video-player-type","h5"),this.$refs.video.setAttribute("x5-video-player-fullscreen",!1)),""!==this.crossOrigin&&(this.$refs.video.crossOrigin=this.crossOrigin,this.$refs.video.setAttribute("crossOrigin",this.crossOrigin));var n=function(t,n){t&&e.$emit(t,e.player),n&&e.$emit(e.customEventName,i({},t,n))};t.plugins&&delete t.plugins.__ob__;var r=this;this.player=a(this.$refs.video,t,(function(){for(var e=this,t=s.concat(r.events).concat(r.globalEvents),i={},o=0;o<t.length;o++)"string"==typeof t[o]&&void 0===i[t[o]]&&function(t){i[t]=null,e.on(t,(function(){n(t,!0)}))}(t[o]);this.on("timeupdate",(function(){n("timeupdate",this.currentTime())})),r.$emit("ready",this)}))},dispose:function(e){var t=this;this.player&&this.player.dispose&&("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),this.player.dispose(),this.player=null,this.$nextTick((function(){t.reseted=!1,t.$nextTick((function(){t.reseted=!0,t.$nextTick((function(){e&&e()}))}))})))}},watch:{options:{deep:!0,handler:function(e,t){var n=this;this.dispose((function(){e&&e.sources&&e.sources.length&&n.initialize()}))}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=n.n(i);for(var o in i)["default","default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var a=n(5),s=n(4),l=s(r.a,a.a,!1,null,null,null);t.default=l.exports},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.install=t.videoPlayer=t.videojs=void 0;var r=n(0),o=i(r),a=n(2),s=i(a),l=window.videojs||o.default,c=function(e,t){t&&(t.options&&(s.default.props.globalOptions.default=function(){return t.options}),t.events&&(s.default.props.globalEvents.default=function(){return t.events})),e.component(s.default.name,s.default)},u={videojs:l,videoPlayer:s.default,install:c};t.default=u,t.videojs=l,t.videoPlayer=s.default,t.install=c},function(e,t){e.exports=function(e,t,n,i,r,o){var a,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,s=e.default);var c,u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId=r),o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=i),c){var f=u.functional,d=f?u.render:u.beforeCreate;f?(u._injectStyles=c,u.render=function(e,t){return c.call(t),d(e,t)}):u.beforeCreate=d?[].concat(d,c):[c]}return{esModule:a,exports:s,options:u}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.reseted?n("div",{staticClass:"video-player"},[n("video",{ref:"video",staticClass:"video-js"})]):e._e()},r=[],o={render:i,staticRenderFns:r};t.a=o}])}))}}]);