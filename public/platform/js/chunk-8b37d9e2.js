(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b37d9e2"],{3445:function(e,t,r){"use strict";var i={getMerchantList:"/recruit/platform.RecruitMerchant/getMerchantList",updateMerchant:"/recruit/platform.RecruitMerchant/updateMerchant",categoryList:"/recruit/platform.RecruitJobCategory/categoryList",childList:"/recruit/platform.RecruitJobCategory/childList",addCategory:"/recruit/platform.RecruitJobCategory/addCategory",editCategory:"/recruit/platform.RecruitJobCategory/editCategory",updateCategory:"/recruit/platform.RecruitJobCategory/updateCategory",delCategory:"/recruit/platform.RecruitJobCategory/delCategory",delCategorys:"/recruit/platform.RecruitJobCategory/delCategorys",changeSort:"/recruit/platform.RecruitJobCategory/changeSort",childChangeSort:"/recruit/platform.RecruitJobCategory/childChangeSort",getCategory:"/recruit/platform.RecruitJobCategory/getCategory",byOtherCategory:"/recruit/platform.RecruitJobCategory/byOtherCategory",getChildCategory:"/recruit/platform.RecruitJobCategory/getChildCategory",updateChildCategory:"/recruit/platform.RecruitJobCategory/updateChildCategory",getJobList:"/recruit/platform.RecruitMerchant/getJobList",updateJob:"/recruit/platform.RecruitMerchant/updateJob",delJob:"/recruit/platform.RecruitMerchant/delJob",getJobSearch:"/recruit/platform.RecruitMerchant/getJobSearch",getJobDetail:"/recruit/platform.RecruitMerchant/getJobDetail",getRecruitBannerList:"/recruit/platform.RecruitBanner/getRecruitBannerList",getRecruitBannerCreate:"/recruit/platform.RecruitBanner/getRecruitBannerCreate",getRecruitBannerInfo:"/recruit/platform.RecruitBanner/getRecruitBannerInfo",getRecruitBannerSort:"/recruit/platform.RecruitBanner/getRecruitBannerSort",getRecruitBannerDis:"/recruit/platform.RecruitBanner/getRecruitBannerDis",getRecruitBannerDel:"/recruit/platform.RecruitBanner/getRecruitBannerDel",getRecruitIndustryList:"/recruit/platform.RecruitIndustry/getRecruitIndustryList",getRecruitIndustryCreate:"/recruit/platform.RecruitIndustry/getRecruitIndustryCreate",getRecruitIndustryInfo:"/recruit/platform.RecruitIndustry/getRecruitIndustryInfo",getRecruitIndustrySort:"/recruit/platform.RecruitIndustry/getRecruitIndustrySort",getRecruitIndustryDis:"/recruit/platform.RecruitIndustry/getRecruitIndustryDis",getRecruitIndustryDel:"/recruit/platform.RecruitIndustry/getRecruitIndustryDel",getRecruitIndustryLevelList:"/recruit/platform.RecruitIndustry/getRecruitIndustryLevelList",getRecruitIndustryLevelCreate:"/recruit/platform.RecruitIndustry/getRecruitIndustryLevelCreate",getRecruitIndustryLevelDel:"/recruit/platform.RecruitIndustry/getRecruitIndustryLevelDel",getRecruitWelfareList:"/recruit/platform.RecruitWelfare/getRecruitWelfareList",getRecruitWelfareCreate:"/recruit/platform.RecruitWelfare/getRecruitWelfareCreate",getRecruitWelfareInfo:"/recruit/platform.RecruitWelfare/getRecruitWelfareInfo",getRecruitWelfareDis:"/recruit/platform.RecruitWelfare/getRecruitWelfareDis",getRecruitWelfareDel:"/recruit/platform.RecruitWelfare/getRecruitWelfareDel",getList:"/recruit/platform.TalentManagement/getList",getLibMsgLIst:"/recruit/platform.TalentManagement/getLibMsgLIst",getResumeMsg:"/recruit/platform.TalentManagement/getResumeMsg"};t["a"]=i},4299:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.detail.title,width:810,height:640,visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[t("div",{staticStyle:{"margin-top":"-14px","font-width":"bold"}},[e._v(e._s(e.detail.add_time)),t("a",{staticStyle:{"padding-left":"10px"}},[e._v("本站")])]),t("div",[t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:22}},[t("viewer",{attrs:{images:e.detail.img}},e._l(e.detail.img,(function(e,r){return t("img",{key:r,staticStyle:{"max-width":"680px"},attrs:{src:e}})})),0)],1)],1),t("a-row",{staticClass:"mb-20"},[t("a-col",{attrs:{span:1}}),t("a-col",{attrs:{span:21}},[t("span",{domProps:{innerHTML:e._s(e.detail.content)}},[e._v(" "+e._s(e.detail.content))])])],1)],1)])},n=[],a=r("3445"),o=(r("0808"),r("6944")),u=r.n(o),s=r("8bbf"),l=r.n(s),c=r("d6d3");r("fda2");l.a.use(u.a);var d={components:{videoPlayer:c["videoPlayer"]},data:function(){return{title:"文章内容",visible:!1,rpl_id:0,detail:{name:"",content:"",img:[]}}},methods:{view:function(e){var t=this;this.visible=!0,this.id=e,this.request(a["a"].getAtlasArticleDetail,{id:this.id}).then((function(e){t.detail=e,console.log(t.detail)}))},handleCancel:function(){this.detail.reply_mv_nums=2,this.visible=!1}}},f=d,p=(r("b189"),r("2877")),g=Object(p["a"])(f,i,n,!1,null,"0d43a6fd",null);t["default"]=g.exports},b189:function(e,t,r){"use strict";r("d7e7")},d6d3:function(e,t,r){!function(t,i){e.exports=i(r("3d337"))}(0,(function(e){return function(e){function t(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=3)}([function(t,r){t.exports=e},function(e,t,r){"use strict";function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o=window.videojs||a.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(e),i=1;i<arguments.length;i++){var n=arguments[i];if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},writable:!0,configurable:!0});var u=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"];t.default={name:"video-player",props:{start:{type:Number,default:0},crossOrigin:{type:String,default:""},playsinline:{type:Boolean,default:!1},customEventName:{type:String,default:"statechanged"},options:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{controls:!0,controlBar:{remainingTimeDisplay:!1,playToggle:{},progressControl:{},fullscreenToggle:{},volumeMenuButton:{inline:!1,vertical:!0}},techOrder:["html5"],plugins:{}}}},globalEvents:{type:Array,default:function(){return[]}}},data:function(){return{player:null,reseted:!0}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()},methods:{initialize:function(){var e=this,t=Object.assign({},this.globalOptions,this.options);this.playsinline&&(this.$refs.video.setAttribute("playsinline",this.playsinline),this.$refs.video.setAttribute("webkit-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-video-player-type","h5"),this.$refs.video.setAttribute("x5-video-player-fullscreen",!1)),""!==this.crossOrigin&&(this.$refs.video.crossOrigin=this.crossOrigin,this.$refs.video.setAttribute("crossOrigin",this.crossOrigin));var r=function(t,r){t&&e.$emit(t,e.player),r&&e.$emit(e.customEventName,i({},t,r))};t.plugins&&delete t.plugins.__ob__;var n=this;this.player=o(this.$refs.video,t,(function(){for(var e=this,t=u.concat(n.events).concat(n.globalEvents),i={},a=0;a<t.length;a++)"string"==typeof t[a]&&void 0===i[t[a]]&&function(t){i[t]=null,e.on(t,(function(){r(t,!0)}))}(t[a]);this.on("timeupdate",(function(){r("timeupdate",this.currentTime())})),n.$emit("ready",this)}))},dispose:function(e){var t=this;this.player&&this.player.dispose&&("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),this.player.dispose(),this.player=null,this.$nextTick((function(){t.reseted=!1,t.$nextTick((function(){t.reseted=!0,t.$nextTick((function(){e&&e()}))}))})))}},watch:{options:{deep:!0,handler:function(e,t){var r=this;this.dispose((function(){e&&e.sources&&e.sources.length&&r.initialize()}))}}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),n=r.n(i);for(var a in i)["default","default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(a);var o=r(5),u=r(4),s=u(n.a,o.a,!1,null,null,null);t.default=s.exports},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.install=t.videoPlayer=t.videojs=void 0;var n=r(0),a=i(n),o=r(2),u=i(o),s=window.videojs||a.default,l=function(e,t){t&&(t.options&&(u.default.props.globalOptions.default=function(){return t.options}),t.events&&(u.default.props.globalEvents.default=function(){return t.events})),e.component(u.default.name,u.default)},c={videojs:s,videoPlayer:u.default,install:l};t.default=c,t.videojs=s,t.videoPlayer=u.default,t.install=l},function(e,t){e.exports=function(e,t,r,i,n,a){var o,u=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,u=e.default);var l,c="function"==typeof u?u.options:u;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),n&&(c._scopeId=n),a?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):i&&(l=i),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(e,t){return l.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:o,exports:u,options:c}}},function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.reseted?r("div",{staticClass:"video-player"},[r("video",{ref:"video",staticClass:"video-js"})]):e._e()},n=[],a={render:i,staticRenderFns:n};t.a=a}])}))},d7e7:function(e,t,r){}}]);