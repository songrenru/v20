(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a394f7ee"],{"05ba":function(t,e,i){"use strict";i("09d4")},"09d4":function(t,e,i){},"230a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.detail.title,width:810,height:640,visible:t.visible,footer:null},on:{cancel:t.handleCancel}},[e("div",{staticStyle:{"margin-top":"-14px","font-width":"bold"}},[t._v(t._s(t.detail.add_time)),e("a",{staticStyle:{"padding-left":"10px"}},[t._v("本站")])]),e("div",[e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:22}},[e("viewer",{attrs:{images:t.detail.img}},t._l(t.detail.img,(function(t,i){return e("img",{key:i,staticStyle:{"max-width":"680px"},attrs:{src:t}})})),0)],1)],1),e("a-row",{staticClass:"mb-20"},[e("a-col",{attrs:{span:1}}),e("a-col",{attrs:{span:21}},[e("span",{domProps:{innerHTML:t._s(t.detail.content)}},[t._v(" "+t._s(t.detail.content))])])],1)],1)])},a=[],s=i("ba1b"),o=(i("0a71"),i("eece")),r=i.n(o),c=i("8bbf"),l=i.n(c),d=i("e248");i("6cc6");l.a.use(r.a);var u={components:{videoPlayer:d["videoPlayer"]},data:function(){return{title:"文章内容",visible:!1,rpl_id:0,detail:{name:"",content:"",img:[]}}},methods:{view:function(t){var e=this;this.visible=!0,this.id=t,this.request(s["a"].getAtlasArticleDetail,{id:this.id}).then((function(t){e.detail=t,console.log(e.detail)}))},handleCancel:function(){this.detail.reply_mv_nums=2,this.visible=!1}}},f=u,h=(i("05ba"),i("0b56")),p=Object(h["a"])(f,n,a,!1,null,"6022361a",null);e["default"]=p.exports},"352b":function(t,e,i){"use strict";i.r(e);i("54f8");var n=function(){var t=this,e=t._self._c;return e("div",{ref:"content",staticClass:"card-list"},[e("a-card",{staticClass:"ant-pro-components-tag-select",attrs:{bordered:!1}},[e("div",{staticStyle:{"font-size":"26px","line-height":"30px","margin-bottom":"30px"}},[t._v("图文列表")]),e("a-form-model",{attrs:{form:t.form,layout:"inline"}},[e("div",{staticStyle:{"line-height":"40px",float:"left",width:"70px"}},[t._v("一级分类：")]),e("standard-form-row",{staticStyle:{"padding-bottom":"11px"},attrs:{block:""}},[e("a-form-item",{staticClass:"select-list",staticStyle:{width:"88%"},style:t.isShowNameType?t.activeNameStyle:t.showNameStyle},t._l(t.catList,(function(i){return e("a",{key:i.cat_id,staticClass:"categoryone",attrs:{cat_id:i.cat_id},on:{click:function(e){return t.categoryList(i.cat_id)}}},[t.category_id==i.cat_id?e("span",{staticStyle:{color:"#299dff"}},[t._v(t._s(i.cat_name))]):t._e(),t.category_id!=i.cat_id?e("span",[t._v(t._s(i.cat_name))]):t._e()])})),0)],1),t.isShowNameType?e("span",{staticStyle:{color:"rgb(41, 157, 255)",cursor:"pointer"},on:{click:t.handleIsShowNameType}},[t._v("展开∨")]):t._e(),t.isShowNameType?t._e():e("span",{staticStyle:{color:"rgb(41, 157, 255)",cursor:"pointer"},on:{click:t.handleIsShowNameType}},[t._v("收起∧")])],1),""!=t.secondList?e("a-form-model",{attrs:{form:t.form,layout:"inline"}},[e("span",{staticStyle:{"line-height":"40px"}},[t._v("二级分类：")]),e("standard-form-row",{staticStyle:{"padding-bottom":"11px"},attrs:{block:""}},[e("a-form-item",t._l(t.secondList,(function(i){return e("a",{key:i.cat_id,staticClass:"categoryone",attrs:{cat_id:i.cat_id},on:{click:function(e){return t.category(i.cat_id)}}},[t.searchForm.cat_id==i.cat_id?e("span",{staticStyle:{color:"#299dff"}},[t._v(t._s(i.cat_name))]):t._e(),t.searchForm.cat_id!=i.cat_id?e("span",[t._v(t._s(i.cat_name))]):t._e()])})),0)],1)],1):t._e(),e("a-form-model",{attrs:{layout:"inline",model:t.searchForm}},[e("a-form-model-item",{attrs:{label:"发布时间"}},[e("a-date-picker",{staticStyle:{width:"120px"},on:{change:t.onChange},model:{value:t.searchForm.edit_time,callback:function(e){t.$set(t.searchForm,"edit_time",e)},expression:"searchForm.edit_time"}})],1),e("a-form-model-item",{attrs:{label:"图文标题"}},[e("a-input",{staticStyle:{width:"160px"},attrs:{placeholder:"请输入图文标题"},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),e("a-form-model-item",[e("a-button",{staticClass:"ml-20",staticStyle:{"margin-top":"3px","line-height":"20px",color:"#fff"},attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.submitForm(!0)}}},[t._v(" 查询")])],1)],1)],1),e("div",{staticStyle:{height:"30px"}}),e("a-list",{attrs:{rowKey:"id",grid:{gutter:24,lg:4,md:2,sm:1,xs:1},dataSource:t.dataSource,pagination:t.pagination},scopedSlots:t._u([{key:"renderItem",fn:function(i){return e("a-list-item",{},[i&&void 0!==i.id?[e("a-card",{attrs:{hoverable:!0},scopedSlots:t._u([{key:"cover",fn:function(){return[e("img",{staticStyle:{width:"100%",height:"160px"},attrs:{src:i.pic}})]},proxy:!0}],null,!0)},[e("a-card-meta",[e("a",{staticStyle:{"font-size":"14px"},attrs:{slot:"title"},on:{click:function(e){return t.view(i.id)}},slot:"title"},[t._v(t._s(i.title))]),e("div",{staticClass:"meta-content",staticStyle:{"font-size":"12px"},attrs:{slot:"description"},slot:"description"},[e("span",{staticStyle:{float:"left"}},[t._v("更新于 　 "+t._s(i.edit_time))]),e("span",{staticStyle:{float:"right"}},[t._v(t._s(i.views_num))])])]),e("a",{staticClass:"actions",on:{click:function(e){return t.edit(i.id)}}},[e("img",{staticClass:"img_create",attrs:{src:i.create}})]),e("a",{staticClass:"actions dek",on:{click:function(e){return t.delOne(i.id)}}},[e("img",{staticClass:"img_create img_del",attrs:{src:i.del}})])],1)]:[e("a-button",{staticClass:"new-btn",staticStyle:{height:"256px","font-weight":"bold","font-size":"16px"},attrs:{type:"dashed"},on:{click:function(e){return t.add()}}},[e("a-icon",{staticStyle:{"font-size":"60px","font-weight":"normal"},attrs:{type:"plus"}}),e("br"),e("br"),t._v(" 新增图文 ")],1)]],2)}}])}),e("atlas-article-create",{ref:"createModal",on:{loaddata:t.getList}}),e("atlas-article-view",{ref:"viewModel",on:{loadRefresh:t.getList}})],1)},a=[],s=i("8ee2"),o=i("c619"),r=i("230a"),c=i("ba1b"),l=i("2af9"),d={name:"GroupSearchHotList",components:{atlasArticleView:r["default"],atlasArticleCreate:o["default"],StandardFormRow:l["default"]},data:function(){return{cat_id:0,cat_fid:0,category_id:0,catList:[],secondList:[],searchForm:{name:"",edit_time:"",cat_id:0,cat_fid:0},dataSource:[{}],pagination:{current:1,total:0,pageSize:20,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}},activeNameStyle:"height: 40px; overflow: hidden;",showNameStyle:"min-height: 40px;",isShowNameType:!0,activeNameIndex:null}},mounted:function(){this.getList({is_search:!1})},methods:{handleIsShowNameType:function(){this.isShowNameType=!this.isShowNameType},selectNameType:function(t,e){this.activeNameIndex=t},categoryList:function(t){var e=this;this.cat_fid=t,this.request(c["a"].getAtlasArticleSecond,{cat_id:t}).then((function(i){e.secondList=i,e.category_id=t})),this.searchForm.cat_id=0,this.searchForm.cat_fid=this.cat_fid,this.getList({is_search:!1})},category:function(t){console.log("----------------------",this.cat_fid),this.searchForm.cat_id=t,this.searchForm.cat_fid=this.cat_fid,this.getList({is_search:!1})},add:function(){this.$refs.createModal.add()},edit:function(t){this.$refs.createModal.edit(t)},view:function(t){this.$refs.viewModel.view(t)},delOne:function(t){var e=this;this.$confirm({title:"提示",content:"确定删除吗？",onOk:function(){e.request(c["a"].getAtlasArticleDel,{id:t}).then((function(t){e.getList({is_search:!1})}))},onCancel:function(){}})},getList:function(t){var e=this,i=Object(s["a"])({},this.searchForm);delete i.time,1==t.is_search?(i.page=1,this.$set(this.pagination,"current",1)):(i.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),i.pageSize=this.pagination.pageSize,this.request(c["a"].getAtlasArticleList,i).then((function(t){e.dataSource=t.list,e.catList=t.catList,e.$set(e.pagination,"total",t.count)}))},submitForm:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(s["a"])({},this.searchForm);delete e.time,e.is_search=t,e.tablekey=1,this.getList(e)},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.submitForm()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.submitForm()},onChange:function(t,e){},testFun:function(){this.$message.info("快速开始被点击！")}}},u=d,f=(i("c208"),i("0b56")),h=Object(f["a"])(u,n,a,!1,null,"4da2e78c",null);e["default"]=h.exports},"922a":function(t,e,i){},c208:function(t,e,i){"use strict";i("922a")},e248:function(t,e,i){!function(e,n){t.exports=n(i("6767"))}(0,(function(t){return function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=3)}([function(e,i){e.exports=t},function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0});var a=i(0),s=function(t){return t&&t.__esModule?t:{default:t}}(a),o=window.videojs||s.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var a=arguments[n];if(null!=a)for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(i[s]=a[s])}return i},writable:!0,configurable:!0});var r=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"];e.default={name:"video-player",props:{start:{type:Number,default:0},crossOrigin:{type:String,default:""},playsinline:{type:Boolean,default:!1},customEventName:{type:String,default:"statechanged"},options:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{controls:!0,controlBar:{remainingTimeDisplay:!1,playToggle:{},progressControl:{},fullscreenToggle:{},volumeMenuButton:{inline:!1,vertical:!0}},techOrder:["html5"],plugins:{}}}},globalEvents:{type:Array,default:function(){return[]}}},data:function(){return{player:null,reseted:!0}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()},methods:{initialize:function(){var t=this,e=Object.assign({},this.globalOptions,this.options);this.playsinline&&(this.$refs.video.setAttribute("playsinline",this.playsinline),this.$refs.video.setAttribute("webkit-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-video-player-type","h5"),this.$refs.video.setAttribute("x5-video-player-fullscreen",!1)),""!==this.crossOrigin&&(this.$refs.video.crossOrigin=this.crossOrigin,this.$refs.video.setAttribute("crossOrigin",this.crossOrigin));var i=function(e,i){e&&t.$emit(e,t.player),i&&t.$emit(t.customEventName,n({},e,i))};e.plugins&&delete e.plugins.__ob__;var a=this;this.player=o(this.$refs.video,e,(function(){for(var t=this,e=r.concat(a.events).concat(a.globalEvents),n={},s=0;s<e.length;s++)"string"==typeof e[s]&&void 0===n[e[s]]&&function(e){n[e]=null,t.on(e,(function(){i(e,!0)}))}(e[s]);this.on("timeupdate",(function(){i("timeupdate",this.currentTime())})),a.$emit("ready",this)}))},dispose:function(t){var e=this;this.player&&this.player.dispose&&("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),this.player.dispose(),this.player=null,this.$nextTick((function(){e.reseted=!1,e.$nextTick((function(){e.reseted=!0,e.$nextTick((function(){t&&t()}))}))})))}},watch:{options:{deep:!0,handler:function(t,e){var i=this;this.dispose((function(){t&&t.sources&&t.sources.length&&i.initialize()}))}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),a=i.n(n);for(var s in n)["default","default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var o=i(5),r=i(4),c=r(a.a,o.a,!1,null,null,null);e.default=c.exports},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.install=e.videoPlayer=e.videojs=void 0;var a=i(0),s=n(a),o=i(2),r=n(o),c=window.videojs||s.default,l=function(t,e){e&&(e.options&&(r.default.props.globalOptions.default=function(){return e.options}),e.events&&(r.default.props.globalEvents.default=function(){return e.events})),t.component(r.default.name,r.default)},d={videojs:c,videoPlayer:r.default,install:l};e.default=d,e.videojs=c,e.videoPlayer=r.default,e.install=l},function(t,e){t.exports=function(t,e,i,n,a,s){var o,r=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,r=t.default);var l,d="function"==typeof r?r.options:r;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),i&&(d.functional=!0),a&&(d._scopeId=a),s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=l):n&&(l=n),l){var u=d.functional,f=u?d.render:d.beforeCreate;u?(d._injectStyles=l,d.render=function(t,e){return l.call(e),f(t,e)}):d.beforeCreate=f?[].concat(f,l):[l]}return{esModule:o,exports:r,options:d}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.reseted?i("div",{staticClass:"video-player"},[i("video",{ref:"video",staticClass:"video-js"})]):t._e()},a=[],s={render:n,staticRenderFns:a};e.a=s}])}))}}]);