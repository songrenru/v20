(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21e6c6fa"],{"07ca":function(e,t,i){"use strict";var r={getCommentList:"/grow_grass/platform.GrowGrassArticleReply/getCommentList",updateGrowGrassArticleReply:"/grow_grass/platform.GrowGrassArticleReply/updateGrowGrassArticleReply",getCategoryList:"/grow_grass/api.Category/getCategoryList",getCategoryEdit:"/grow_grass/api.Category/getCategoryEdit",getCategoryDetail:"/grow_grass/api.Category/getCategoryDetail",getCategoryDel:"/grow_grass/api.Category/getCategoryDel",getCategorySort:"/grow_grass/api.Category/getCategorySort",getCategoryClass:"/grow_grass/api.Category/getCategoryClass",getArticleLists:"/grow_grass/api.Article/getArticleLists",getEditArticle:"/grow_grass/api.Article/getEditArticle",getArticleDetails:"/grow_grass/api.Article/getArticleDetails",getArticleCategoryDetails:"/grow_grass/api.Article/getArticleCategoryDetails",getArticle:"/grow_grass/api.Article/getArticleEditInfo"};t["a"]=r},3872:function(e,t,i){"use strict";i.r(t);i("54f8");var r=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:810,height:640,visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[t("div",[t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:21}},[t("span",[e._v(" "+e._s(e.detail.name))])])],1),e.detail.img?t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:22}},[t("viewer",{attrs:{images:e.detail.img}},e._l(e.detail.img,(function(e,i){return t("img",{key:i,attrs:{src:e}})})),0)],1)],1):e._e(),e.detail.video_url?t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:22}},[t("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.playerOptions}})],1)],1):e._e(),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:21}},[t("span",[e._v(" "+e._s(e.detail.content))])])],1)],1)])},n=[],s=i("07ca"),a=(i("0a71"),i("eece")),o=i.n(a),l=i("8bbf"),u=i.n(l),c=i("e248");i("6cc6");u.a.use(o.a);var p={components:{videoPlayer:c["videoPlayer"]},data:function(){return{title:"文章内容",visible:!1,rpl_id:0,detail:{name:"",content:"",img:[],video_img:"",video_url:""},playerOptions:{playbackRates:[.5,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:""}],poster:"",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}}}},methods:{showArticle:function(e){var t=this;this.visible=!0,this.id=e,this.request(s["a"].getArticleDetails,{id:this.id}).then((function(e){t.detail=e,t.playerOptions.sources[0]["src"]=e.video_url,t.playerOptions.poster=e.video_img,console.log(t.detail)}))},handleCancel:function(){this.detail.reply_mv_nums=2,this.visible=!1}}},d=p,f=(i("6b65"),i("0b56")),g=Object(f["a"])(d,r,n,!1,null,"43e9e06b",null);t["default"]=g.exports},4504:function(e,t,i){},"6b65":function(e,t,i){"use strict";i("4504")},e248:function(e,t,i){!function(t,r){e.exports=r(i("6767"))}(0,(function(e){return function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=3)}([function(t,i){t.exports=e},function(e,t,i){"use strict";function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),s=function(e){return e&&e.__esModule?e:{default:e}}(n),a=window.videojs||s.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),r=1;r<arguments.length;r++){var n=arguments[r];if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=n[s])}return i},writable:!0,configurable:!0});var o=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"];t.default={name:"video-player",props:{start:{type:Number,default:0},crossOrigin:{type:String,default:""},playsinline:{type:Boolean,default:!1},customEventName:{type:String,default:"statechanged"},options:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{controls:!0,controlBar:{remainingTimeDisplay:!1,playToggle:{},progressControl:{},fullscreenToggle:{},volumeMenuButton:{inline:!1,vertical:!0}},techOrder:["html5"],plugins:{}}}},globalEvents:{type:Array,default:function(){return[]}}},data:function(){return{player:null,reseted:!0}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()},methods:{initialize:function(){var e=this,t=Object.assign({},this.globalOptions,this.options);this.playsinline&&(this.$refs.video.setAttribute("playsinline",this.playsinline),this.$refs.video.setAttribute("webkit-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-video-player-type","h5"),this.$refs.video.setAttribute("x5-video-player-fullscreen",!1)),""!==this.crossOrigin&&(this.$refs.video.crossOrigin=this.crossOrigin,this.$refs.video.setAttribute("crossOrigin",this.crossOrigin));var i=function(t,i){t&&e.$emit(t,e.player),i&&e.$emit(e.customEventName,r({},t,i))};t.plugins&&delete t.plugins.__ob__;var n=this;this.player=a(this.$refs.video,t,(function(){for(var e=this,t=o.concat(n.events).concat(n.globalEvents),r={},s=0;s<t.length;s++)"string"==typeof t[s]&&void 0===r[t[s]]&&function(t){r[t]=null,e.on(t,(function(){i(t,!0)}))}(t[s]);this.on("timeupdate",(function(){i("timeupdate",this.currentTime())})),n.$emit("ready",this)}))},dispose:function(e){var t=this;this.player&&this.player.dispose&&("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),this.player.dispose(),this.player=null,this.$nextTick((function(){t.reseted=!1,t.$nextTick((function(){t.reseted=!0,t.$nextTick((function(){e&&e()}))}))})))}},watch:{options:{deep:!0,handler:function(e,t){var i=this;this.dispose((function(){e&&e.sources&&e.sources.length&&i.initialize()}))}}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(1),n=i.n(r);for(var s in r)["default","default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(s);var a=i(5),o=i(4),l=o(n.a,a.a,!1,null,null,null);t.default=l.exports},function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.install=t.videoPlayer=t.videojs=void 0;var n=i(0),s=r(n),a=i(2),o=r(a),l=window.videojs||s.default,u=function(e,t){t&&(t.options&&(o.default.props.globalOptions.default=function(){return t.options}),t.events&&(o.default.props.globalEvents.default=function(){return t.events})),e.component(o.default.name,o.default)},c={videojs:l,videoPlayer:o.default,install:u};t.default=c,t.videojs=l,t.videoPlayer=o.default,t.install=u},function(e,t){e.exports=function(e,t,i,r,n,s){var a,o=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,o=e.default);var u,c="function"==typeof o?o.options:o;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),i&&(c.functional=!0),n&&(c._scopeId=n),s?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):r&&(u=r),u){var p=c.functional,d=p?c.render:c.beforeCreate;p?(c._injectStyles=u,c.render=function(e,t){return u.call(t),d(e,t)}):c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:a,exports:o,options:c}}},function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.reseted?i("div",{staticClass:"video-player"},[i("video",{ref:"video",staticClass:"video-js"})]):e._e()},n=[],s={render:r,staticRenderFns:n};t.a=s}])}))}}]);