(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73ecf394","chunk-5d6bf89a","chunk-21e6c6fa"],{"07ca":function(t,e,i){"use strict";var a={getCommentList:"/grow_grass/platform.GrowGrassArticleReply/getCommentList",updateGrowGrassArticleReply:"/grow_grass/platform.GrowGrassArticleReply/updateGrowGrassArticleReply",getCategoryList:"/grow_grass/api.Category/getCategoryList",getCategoryEdit:"/grow_grass/api.Category/getCategoryEdit",getCategoryDetail:"/grow_grass/api.Category/getCategoryDetail",getCategoryDel:"/grow_grass/api.Category/getCategoryDel",getCategorySort:"/grow_grass/api.Category/getCategorySort",getCategoryClass:"/grow_grass/api.Category/getCategoryClass",getArticleLists:"/grow_grass/api.Article/getArticleLists",getEditArticle:"/grow_grass/api.Article/getEditArticle",getArticleDetails:"/grow_grass/api.Article/getArticleDetails",getArticleCategoryDetails:"/grow_grass/api.Article/getArticleCategoryDetails",getArticle:"/grow_grass/api.Article/getArticleEditInfo"};e["a"]=a},"0ea4":function(t,e,i){"use strict";i.r(e);i("54f8"),i("6073"),i("2c5c");var a=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:810,height:640,visible:t.visible,footer:null},on:{cancel:t.handleCancel}},[e("div",[e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:21}},[e("span",[t._v(" "+t._s(t.detail.name))])])],1),e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:22}},[e("viewer",{attrs:{images:t.detail.img}},t._l(t.detail.img,(function(t,i){return e("img",{key:i,attrs:{src:t}})})),0)],1)],1),e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:21}},[e("span",[t._v(" "+t._s(t.detail.description))])])],1)],1)])},s=[],n=i("07ca"),r=(i("0a71"),i("eece")),o=i.n(r),l=i("8bbf"),c=i.n(l),u=i("e248");i("6cc6");c.a.use(o.a);var d={components:{videoPlayer:u["videoPlayer"]},data:function(){return{title:"话题内容",visible:!1,rpl_id:0,detail:{name:"",description:"",img:[]}}},methods:{showCategory:function(t){var e=this;this.visible=!0,this.id=t,this.request(n["a"].getArticleCategoryDetails,{id:this.id}).then((function(t){e.detail=t,console.log(e.detail)}))},handleCancel:function(){this.detail.reply_mv_nums=2,this.visible=!1}}},p=d,f=(i("eb96"),i("0b56")),g=Object(f["a"])(p,a,s,!1,null,"5bd666e6",null);e["default"]=g.exports},3371:function(t,e,i){"use strict";i("a764")},3872:function(t,e,i){"use strict";i.r(e);i("54f8");var a=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:810,height:640,visible:t.visible,footer:null},on:{cancel:t.handleCancel}},[e("div",[e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:21}},[e("span",[t._v(" "+t._s(t.detail.name))])])],1),t.detail.img?e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:22}},[e("viewer",{attrs:{images:t.detail.img}},t._l(t.detail.img,(function(t,i){return e("img",{key:i,attrs:{src:t}})})),0)],1)],1):t._e(),t.detail.video_url?e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:22}},[e("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:t.playerOptions}})],1)],1):t._e(),e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:21}},[e("span",[t._v(" "+t._s(t.detail.content))])])],1)],1)])},s=[],n=i("07ca"),r=(i("0a71"),i("eece")),o=i.n(r),l=i("8bbf"),c=i.n(l),u=i("e248");i("6cc6");c.a.use(o.a);var d={components:{videoPlayer:u["videoPlayer"]},data:function(){return{title:"文章内容",visible:!1,rpl_id:0,detail:{name:"",content:"",img:[],video_img:"",video_url:""},playerOptions:{playbackRates:[.5,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:""}],poster:"",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}}}},methods:{showArticle:function(t){var e=this;this.visible=!0,this.id=t,this.request(n["a"].getArticleDetails,{id:this.id}).then((function(t){e.detail=t,e.playerOptions.sources[0]["src"]=t.video_url,e.playerOptions.poster=t.video_img,console.log(e.detail)}))},handleCancel:function(){this.detail.reply_mv_nums=2,this.visible=!1}}},p=d,f=(i("6b65"),i("0b56")),g=Object(f["a"])(p,a,s,!1,null,"43e9e06b",null);e["default"]=g.exports},4504:function(t,e,i){},"5dbc":function(t,e,i){"use strict";i.r(e);i("54f8");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[e("div",{staticStyle:{width:"100%","padding-bottom":"30px"}},[e("div",{staticStyle:{float:"left","font-size":"26px"}},[t._v("发布管理")]),e("a-form-model",{staticStyle:{"text-align":"right"},attrs:{layout:"inline",model:t.searchForm}},[e("a-form-model-item",[e("a-select",{staticStyle:{width:"115px"},model:{value:t.searchForm.category_id,callback:function(e){t.$set(t.searchForm,"category_id",e)},expression:"searchForm.category_id"}},t._l(t.categoryList,(function(i){return e("a-select-option",{key:i.category_id,attrs:{category_id:i.category_id}},[t._v(t._s(i.name)+" ")])})),1)],1),e("a-form-model-item",[e("a-select",{staticStyle:{width:"115px"},model:{value:t.searchForm.store_id,callback:function(e){t.$set(t.searchForm,"store_id",e)},expression:"searchForm.store_id"}},t._l(t.storeList,(function(i){return e("a-select-option",{key:i.store_id,attrs:{store_id:i.store_id}},[t._v(t._s(i.name)+" ")])})),1)],1),e("a-form-model-item",[e("a-select",{staticStyle:{width:"115px"},model:{value:t.searchForm.status,callback:function(e){t.$set(t.searchForm,"status",e)},expression:"searchForm.status"}},[e("a-select-option",{attrs:{value:-1}},[t._v(" 发布状态")]),e("a-select-option",{attrs:{value:10}},[t._v(" 待审核")]),e("a-select-option",{attrs:{value:20}},[t._v(" 发布中")]),e("a-select-option",{attrs:{value:30}},[t._v(" 未发布")])],1)],1),e("a-form-model-item",{attrs:{label:""}},[e("a-input",{staticStyle:{width:"160px"},attrs:{placeholder:"请输入关键字"},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),e("a-form-model-item",[e("a-button",{staticClass:"ml-20",attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.submitForm(!0)}}},[t._v(" 查询")])],1)],1)],1),e("div",[e("a-tabs",{attrs:{"default-active-key":"0"},on:{change:t.statusChange}},[e("a-tab-pane",{key:"0",attrs:{tab:"全部"}}),e("a-tab-pane",{key:"1",attrs:{tab:"待审核"}}),e("a-tab-pane",{key:"2",attrs:{tab:"已发布"}}),e("a-tab-pane",{key:"3",attrs:{tab:"未发布"}})],1)],1),e("a-table",{attrs:{rowKey:"article_id",columns:t.columns,"data-source":t.dataList,pagination:t.pagination},scopedSlots:t._u([{key:"status",fn:function(i){return e("span",{},[10==i?e("a-badge",{attrs:{status:"default",text:"待审核"}}):t._e(),20==i?e("a-badge",{attrs:{status:"success",text:"发布中"}}):t._e(),30==i?e("a-badge",{attrs:{status:"success",text:"未发布"}}):t._e()],1)}},{key:"name",fn:function(i){return e("span",{},[e("a",{staticClass:"ml-10 inline-block",on:{click:function(e){return t.$refs.articleModel.showArticle(i.id)}}},[t._v(t._s(i.name))])])}},{key:"category_name",fn:function(i){return e("span",{},[e("a",{staticClass:"ml-10 inline-block",on:{click:function(e){return t.$refs.categoryModel.showCategory(i.id)}}},[t._v(t._s(i.name))])])}},{key:"action",fn:function(i){return e("span",{},[10==i.status?e("a",{staticClass:"ml-10 inline-block",on:{click:function(e){return t.articleRelease(i.id)}}},[t._v("发布")]):t._e(),10==i.status?e("a",{staticClass:"ml-10 inline-block",on:{click:function(e){return t.articleNoRelease(i.id)}}},[t._v("不予发布")]):t._e(),30==i.status?e("a",{staticClass:"ml-10 inline-block",on:{click:function(e){return t.articleRelease(i.id)}}},[t._v("发布")]):t._e(),20==i.status?e("a",{staticClass:"ml-10 inline-block",on:{click:function(e){return t.articleNoRelease(i.id)}}},[t._v("不予发布")]):t._e(),e("a",{staticClass:"ml-10 inline-block",on:{click:function(e){return t.articleDel(i.id)}}},[t._v("删除")])])}}])}),e("article-detail",{ref:"articleModel",on:{loadRefresh:t.getDataList}}),e("article-category-detail",{ref:"categoryModel",on:{loadRefresh:t.getDataList}})],1)},s=[],n=i("8ee2"),r=i("2f42"),o=i.n(r),l=i("3872"),c=i("0ea4"),u=i("07ca"),d=(i("0a71"),i("eece")),p=i.n(d),f=i("8bbf"),g=i.n(f),h=i("e248");i("6cc6"),i("7100");g.a.use(p.a);var m={name:"CorrList",components:{ArticleDetail:l["default"],ArticleCategoryDetail:c["default"],videoPlayer:h["videoPlayer"]},data:function(){return{categoryList:[],storeList:[],searchForm:{name:"",store_id:"-1",category_id:"-1",status:-1},store_list:[],columns:[{title:"发布标题",dataIndex:"id_name",key:"id_name",scopedSlots:{customRender:"name"}},{title:"发布人",dataIndex:"user_name",key:"user_name"},{title:"关联话题",dataIndex:"category_id_name",key:"category_id_name",scopedSlots:{customRender:"category_name"}},{title:"关联店铺",dataIndex:"store_name",scopedSlots:{customRender:"store_name"}},{title:"关联商品",dataIndex:"goods_name",scopedSlots:{customRender:"goods_name"}},{title:"查看数",dataIndex:"views_num",scopedSlots:{customRender:"views_num"}},{title:"评论数",dataIndex:"reply_num",scopedSlots:{customRender:"reply_num"}},{title:"发布时间",dataIndex:"publish_time",key:"publish_time"},{title:"发布状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作",dataIndex:"actions",key:"actions",scopedSlots:{customRender:"action"}}],dataList:[],pagination:{current:1,total:0,type:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}}}},created:function(){this.getDataList({is_search:!1})},methods:{moment:o.a,getDataList:function(t){var e=this,i=Object(n["a"])({},this.searchForm);delete i.time,1==t.is_search?(i.page=1,this.$set(this.pagination,"current",1)):(i.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),this.pagination.type?i.type=this.pagination.type:i.type=0,this.pagination.total>0&&Math.ceil(this.pagination.total/this.pagination.pageSize)<i.page&&(this.pagination.current=0,i.page=1),1==t.is_page&&(i.page=1),i.pageSize=this.pagination.pageSize,this.request(u["a"].getArticleLists,i).then((function(i){e.dataList=i.list,e.categoryList=i.categoryList,e.storeList=i.storeList,1==t.is_del&&0==i.list_count&&(e.getDataList({is_search:!1,is_page:!0}),e.pagination.current=1),e.$set(e.pagination,"total",i.count)}))},statusChange:function(t){this.pagination.type=t,this.getDataList({is_search:!1,type:t})},onDateRangeChange:function(t,e){this.$set(this.searchForm,"time",[t[0],t[1]]),this.$set(this.searchForm,"begin_time",e[0]),this.$set(this.searchForm,"end_time",e[1])},submitForm:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(n["a"])({},this.searchForm);delete e.time,e.is_search=t,this.getDataList(e)},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.submitForm()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.submitForm()},resetForm:function(){this.$set(this,"searchForm",{content:"",begin_time:"",end_time:"",type:1,status:2}),this.$set(this.pagination,"current",1),this.getDataList({store_id:this.store_id,is_search:!1})},showArticle:function(){},showCategory:function(){},articleRelease:function(t){var e=this;this.$confirm({title:"是否标记为发布?",centered:!0,onOk:function(){e.request(u["a"].getEditArticle,{id:t,type:1}).then((function(t){e.$message.success("操作成功！"),e.getDataList({is_search:!1})}))},onCancel:function(){}})},articleNoRelease:function(t){var e=this;this.$confirm({title:"是否标记为不予发布?",centered:!0,onOk:function(){e.request(u["a"].getEditArticle,{id:t,type:2}).then((function(t){e.$message.success("操作成功！"),e.getDataList({is_search:!1})}))},onCancel:function(){}})},articleDel:function(t){var e=this;this.$confirm({title:"是否删除?",centered:!0,onOk:function(){e.request(u["a"].getEditArticle,{id:t,type:3}).then((function(t){e.$message.success("操作成功！"),e.getDataList({is_search:!1,is_del:!0})}))},onCancel:function(){}})}}},y=m,_=(i("3371"),i("0b56")),v=Object(_["a"])(y,a,s,!1,null,"10502136",null);e["default"]=v.exports},"6b65":function(t,e,i){"use strict";i("4504")},7100:function(t,e,i){},a764:function(t,e,i){},e248:function(t,e,i){!function(e,a){t.exports=a(i("6767"))}(0,(function(t){return function(t){function e(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,a){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=3)}([function(e,i){e.exports=t},function(t,e,i){"use strict";function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),n=function(t){return t&&t.__esModule?t:{default:t}}(s),r=window.videojs||n.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),a=1;a<arguments.length;a++){var s=arguments[a];if(null!=s)for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(i[n]=s[n])}return i},writable:!0,configurable:!0});var o=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"];e.default={name:"video-player",props:{start:{type:Number,default:0},crossOrigin:{type:String,default:""},playsinline:{type:Boolean,default:!1},customEventName:{type:String,default:"statechanged"},options:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{controls:!0,controlBar:{remainingTimeDisplay:!1,playToggle:{},progressControl:{},fullscreenToggle:{},volumeMenuButton:{inline:!1,vertical:!0}},techOrder:["html5"],plugins:{}}}},globalEvents:{type:Array,default:function(){return[]}}},data:function(){return{player:null,reseted:!0}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()},methods:{initialize:function(){var t=this,e=Object.assign({},this.globalOptions,this.options);this.playsinline&&(this.$refs.video.setAttribute("playsinline",this.playsinline),this.$refs.video.setAttribute("webkit-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-video-player-type","h5"),this.$refs.video.setAttribute("x5-video-player-fullscreen",!1)),""!==this.crossOrigin&&(this.$refs.video.crossOrigin=this.crossOrigin,this.$refs.video.setAttribute("crossOrigin",this.crossOrigin));var i=function(e,i){e&&t.$emit(e,t.player),i&&t.$emit(t.customEventName,a({},e,i))};e.plugins&&delete e.plugins.__ob__;var s=this;this.player=r(this.$refs.video,e,(function(){for(var t=this,e=o.concat(s.events).concat(s.globalEvents),a={},n=0;n<e.length;n++)"string"==typeof e[n]&&void 0===a[e[n]]&&function(e){a[e]=null,t.on(e,(function(){i(e,!0)}))}(e[n]);this.on("timeupdate",(function(){i("timeupdate",this.currentTime())})),s.$emit("ready",this)}))},dispose:function(t){var e=this;this.player&&this.player.dispose&&("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),this.player.dispose(),this.player=null,this.$nextTick((function(){e.reseted=!1,e.$nextTick((function(){e.reseted=!0,e.$nextTick((function(){t&&t()}))}))})))}},watch:{options:{deep:!0,handler:function(t,e){var i=this;this.dispose((function(){t&&t.sources&&t.sources.length&&i.initialize()}))}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(1),s=i.n(a);for(var n in a)["default","default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);var r=i(5),o=i(4),l=o(s.a,r.a,!1,null,null,null);e.default=l.exports},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.install=e.videoPlayer=e.videojs=void 0;var s=i(0),n=a(s),r=i(2),o=a(r),l=window.videojs||n.default,c=function(t,e){e&&(e.options&&(o.default.props.globalOptions.default=function(){return e.options}),e.events&&(o.default.props.globalEvents.default=function(){return e.events})),t.component(o.default.name,o.default)},u={videojs:l,videoPlayer:o.default,install:c};e.default=u,e.videojs=l,e.videoPlayer=o.default,e.install=c},function(t,e){t.exports=function(t,e,i,a,s,n){var r,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,o=t.default);var c,u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId=s),n?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},u._ssrRegister=c):a&&(c=a),c){var d=u.functional,p=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(t,e){return c.call(e),p(t,e)}):u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:r,exports:o,options:u}}},function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.reseted?i("div",{staticClass:"video-player"},[i("video",{ref:"video",staticClass:"video-js"})]):t._e()},s=[],n={render:a,staticRenderFns:s};e.a=n}])}))},eb96:function(t,e,i){"use strict";i("eec8")},eec8:function(t,e,i){}}]);