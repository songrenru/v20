(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bc36246","chunk-043ab736"],{1397:function(t,e,n){},"1a8f":function(t,e,n){},2406:function(t,e,n){"use strict";var i={getStoreCategoryList:"/merchant/platform.MerchantStoreCategory/getStoreCategoryList",editStoreCategory:"/merchant/platform.MerchantStoreCategory/editStoreCategory",saveStoreCategory:"/merchant/platform.MerchantStoreCategory/saveStoreCategory",delStoreCategory:"/merchant/platform.MerchantStoreCategory/delStoreCategory",updateSort:"/merchant/platform.MerchantStoreCategory/updateSort",getCorrList:"/merchant/platform.Corr/searchCorr",getCorrDetails:"/merchant/platform.Corr/getCorrDetails",getEditCorr:"/merchant/platform.Corr/getEditCorr",getPositionList:"/merchant/platform.Position/getPositionList",getPositionCreate:"/merchant/platform.Position/getPositionCreate",getPositionInfo:"/merchant/platform.Position/getPositionInfo",getPositionCategoryList:"/merchant/platform.Position/getPositionCategoryList",getPositionDelAll:"/merchant/platform.Position/getPositionDelAll",getTechnicianList:"/merchant/platform.Technician/getTechnicianList",getTechnicianView:"/merchant/platform.Technician/getTechnicianView",getTechnicianExamine:"/merchant/platform.Technician/getTechnicianExamine",getTechnicianDel:"/merchant/platform.Technician/getTechnicianDel"};e["a"]=i},"26d6":function(t,e,n){"use strict";n("1397")},"451f":function(t,e,n){},c392:function(t,e,n){"use strict";n("1a8f")},d6d3:function(t,e,n){!function(e,i){t.exports=i(n("3d337"))}(0,(function(t){return function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=3)}([function(e,n){e.exports=t},function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(a),r=window.videojs||o.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),i=1;i<arguments.length;i++){var a=arguments[i];if(null!=a)for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])}return n},writable:!0,configurable:!0});var s=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"];e.default={name:"video-player",props:{start:{type:Number,default:0},crossOrigin:{type:String,default:""},playsinline:{type:Boolean,default:!1},customEventName:{type:String,default:"statechanged"},options:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{controls:!0,controlBar:{remainingTimeDisplay:!1,playToggle:{},progressControl:{},fullscreenToggle:{},volumeMenuButton:{inline:!1,vertical:!0}},techOrder:["html5"],plugins:{}}}},globalEvents:{type:Array,default:function(){return[]}}},data:function(){return{player:null,reseted:!0}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()},methods:{initialize:function(){var t=this,e=Object.assign({},this.globalOptions,this.options);this.playsinline&&(this.$refs.video.setAttribute("playsinline",this.playsinline),this.$refs.video.setAttribute("webkit-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-video-player-type","h5"),this.$refs.video.setAttribute("x5-video-player-fullscreen",!1)),""!==this.crossOrigin&&(this.$refs.video.crossOrigin=this.crossOrigin,this.$refs.video.setAttribute("crossOrigin",this.crossOrigin));var n=function(e,n){e&&t.$emit(e,t.player),n&&t.$emit(t.customEventName,i({},e,n))};e.plugins&&delete e.plugins.__ob__;var a=this;this.player=r(this.$refs.video,e,(function(){for(var t=this,e=s.concat(a.events).concat(a.globalEvents),i={},o=0;o<e.length;o++)"string"==typeof e[o]&&void 0===i[e[o]]&&function(e){i[e]=null,t.on(e,(function(){n(e,!0)}))}(e[o]);this.on("timeupdate",(function(){n("timeupdate",this.currentTime())})),a.$emit("ready",this)}))},dispose:function(t){var e=this;this.player&&this.player.dispose&&("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),this.player.dispose(),this.player=null,this.$nextTick((function(){e.reseted=!1,e.$nextTick((function(){e.reseted=!0,e.$nextTick((function(){t&&t()}))}))})))}},watch:{options:{deep:!0,handler:function(t,e){var n=this;this.dispose((function(){t&&t.sources&&t.sources.length&&n.initialize()}))}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n.n(i);for(var o in i)["default","default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var r=n(5),s=n(4),c=s(a.a,r.a,!1,null,null,null);e.default=c.exports},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.install=e.videoPlayer=e.videojs=void 0;var a=n(0),o=i(a),r=n(2),s=i(r),c=window.videojs||o.default,l=function(t,e){e&&(e.options&&(s.default.props.globalOptions.default=function(){return e.options}),e.events&&(s.default.props.globalEvents.default=function(){return e.events})),t.component(s.default.name,s.default)},u={videojs:c,videoPlayer:s.default,install:l};e.default=u,e.videojs=c,e.videoPlayer=s.default,e.install=l},function(t,e){t.exports=function(t,e,n,i,a,o){var r,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(r=t,s=t.default);var l,u="function"==typeof s?s.options:s;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId=a),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=l):i&&(l=i),l){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(t,e){return l.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,l):[l]}return{esModule:r,exports:s,options:u}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.reseted?n("div",{staticClass:"video-player"},[n("video",{ref:"video",staticClass:"video-js"})]):t._e()},a=[],o={render:i,staticRenderFns:a};e.a=o}])}))},dc95:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-modal",{attrs:{title:t.title,width:810,height:640,visible:t.visible,footer:null},on:{cancel:t.handleCancel}},[n("div",[n("a-row",{staticClass:"mb-20"},[n("a-col",{attrs:{span:1}}),n("a-col",{attrs:{span:22}},[n("viewer",{attrs:{images:t.detail.pic}},t._l(t.detail.pic,(function(t,e){return n("img",{key:e,attrs:{src:t}})})),0)],1)],1),n("a-row",{staticClass:"mb-20"},[n("a-col",{attrs:{span:1}}),n("a-col",{attrs:{span:21}},[n("span",[t._v(" "+t._s(t.detail.content))])])],1)],1)])},a=[],o=n("2406"),r=(n("0808"),n("6944")),s=n.n(r),c=n("8bbf"),l=n.n(c),u=n("d6d3");n("fda2");l.a.use(s.a);var d={components:{videoPlayer:u["videoPlayer"]},data:function(){return{title:"反馈内容",visible:!1,rpl_id:0,detail:{content:"",pic:[]}}},methods:{showCorr:function(t){var e=this;this.visible=!0,this.id=t,this.request(o["a"].getCorrDetails,{id:this.id}).then((function(t){e.detail=t,console.log(e.detail)}))},handleCancel:function(){this.detail.reply_mv_nums=2,this.visible=!1}}},f=d,h=(n("26d6"),n("0c7c")),p=Object(h["a"])(f,i,a,!1,null,"886abf42",null);e["default"]=p.exports},f9d0:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[n("div",{staticStyle:{float:"left","font-size":"26px"}},[t._v("反馈列表")]),n("a-form-model",{staticStyle:{float:"right","margin-bottom":"30px"},attrs:{layout:"inline",model:t.searchForm}},[n("a-form-model-item",{attrs:{label:"反馈时间"}},[n("a-range-picker",{attrs:{ranges:{"过去30天":[t.moment().subtract(30,"days"),t.moment()],"过去15天":[t.moment().subtract(15,"days"),t.moment()],"过去7天":[t.moment().subtract(7,"days"),t.moment()],"今日":[t.moment(),t.moment()]},value:t.searchForm.time,format:"YYYY-MM-DD"},on:{change:t.onDateRangeChange}})],1),n("a-form-model-item",{attrs:{label:""}},[n("a-select",{staticStyle:{width:"115px"},model:{value:t.searchForm.status,callback:function(e){t.$set(t.searchForm,"status",e)},expression:"searchForm.status"}},[n("a-select-option",{attrs:{value:2}},[t._v(" 全部")]),n("a-select-option",{attrs:{value:0}},[t._v(" 未处理")]),n("a-select-option",{attrs:{value:1}},[t._v(" 已处理")])],1)],1),n("a-form-model-item",{attrs:{label:""}},[n("a-input",{staticStyle:{width:"160px"},attrs:{placeholder:"请输入店铺名称"},model:{value:t.searchForm.content,callback:function(e){t.$set(t.searchForm,"content",e)},expression:"searchForm.content"}})],1),n("a-form-model-item",[n("a-button",{staticClass:"ml-20",attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.submitForm(!0)}}},[t._v(" 查询")])],1)],1),n("a-table",{staticClass:"mt-20",attrs:{rowKey:"id",columns:t.columns,"data-source":t.dataList,pagination:t.pagination},scopedSlots:t._u([{key:"status",fn:function(e){return n("span",{},[0==e?n("a-badge",{attrs:{status:"default",text:"未处理"}}):t._e(),1==e?n("a-badge",{attrs:{status:"success",text:"已处理"}}):t._e()],1)}},{key:"content",fn:function(e){return n("span",{},[n("a",{staticClass:"ml-10 inline-block",on:{click:function(n){return t.$refs.corrModel.showCorr(e)}}},[t._v("查看")])])}},{key:"action",fn:function(e){return n("span",{},[0==e.status?n("a",{staticClass:"ml-10 inline-block",on:{click:function(n){return t.removeComment(e.id)}}},[t._v("标记为已处理")]):t._e()])}}])}),n("corr-detail",{ref:"corrModel",on:{loadRefresh:t.getDataList}})],1)},a=[],o=n("5530"),r=(n("4de4"),n("d3b7"),n("c1df")),s=n.n(r),c=n("dc95"),l=n("2406"),u=(n("0808"),n("6944")),d=n.n(u),f=n("8bbf"),h=n.n(f),p=n("d6d3");n("fda2"),n("451f");h.a.use(d.a);var m={name:"CorrList",components:{CorrDetail:c["default"],videoPlayer:p["videoPlayer"]},data:function(){return{searchForm:{content:"",type:1,time:[],begin_time:"",end_time:"",status:2},store_list:[],columns:[{title:"反馈内容",dataIndex:"id",key:"id",scopedSlots:{customRender:"content"}},{title:"店铺名称",dataIndex:"store_name",key:"store_name"},{title:"用户昵称",dataIndex:"user_name",key:"user_name"},{title:"用户手机号",dataIndex:"user_phone",scopedSlots:{customRender:"user_phone"}},{title:"时间",dataIndex:"add_time",key:"add_time"},{title:"团购状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作",dataIndex:"actions",key:"actions",scopedSlots:{customRender:"action"}}],dataList:[],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}}}},created:function(){this.getDataList({is_search:!1})},methods:{moment:s.a,getDataList:function(t){var e=this,n=Object(o["a"])({},this.searchForm);delete n.time,1==t.is_search?(n.page=1,this.$set(this.pagination,"current",1)):(n.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),n.pageSize=this.pagination.pageSize,this.request(l["a"].getCorrList,n).then((function(t){e.dataList=t.list,e.$set(e.pagination,"total",t.count),e.dataList&&e.dataList.length&&(e.dataList=e.dataList.filter((function(t){return t.comment&&t.comment.length>32&&(t.showCommentText=t.comment.substring(0,32)+"..."),t.pic.length||t.showCommentText?t.show=!1:t.show=!0,t})))}))},onDateRangeChange:function(t,e){this.$set(this.searchForm,"time",[t[0],t[1]]),this.$set(this.searchForm,"begin_time",e[0]),this.$set(this.searchForm,"end_time",e[1])},submitForm:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(o["a"])({},this.searchForm);delete e.time,e.is_search=t,console.log(e),this.getDataList(e)},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.submitForm()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.submitForm()},resetForm:function(){this.$set(this,"searchForm",{content:"",begin_time:"",end_time:"",type:1,status:2}),this.$set(this.pagination,"current",1),this.getDataList({store_id:this.store_id,is_search:!1})},showCorr:function(){},removeComment:function(t){var e=this;this.$confirm({title:"是否标记为已处理?",centered:!0,onOk:function(){e.request(l["a"].getEditCorr,{id:t}).then((function(t){e.$message.success("操作成功！"),e.getDataList({is_search:!1})}))},onCancel:function(){}})}}},g=m,v=(n("c392"),n("0c7c")),y=Object(v["a"])(g,i,a,!1,null,"7f730bec",null);e["default"]=y.exports}}]);