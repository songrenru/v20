(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ff6a9ee","chunk-c1d2e480"],{"1a00":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"信息查看",width:600,height:640,visible:e.visible,footer:null},on:{cancel:e.handleCancel}},[a("p",{staticStyle:{"margin-left":"206px"}},[a("img",{staticStyle:{width:"120px",height:"120px","border-radius":"50%"},attrs:{src:e.detail.headimg}})]),a("p",{staticStyle:{"text-align":"center","font-weight":"bold"}},[e._v(e._s(e.detail.name))]),a("p",{staticStyle:{"text-align":"center"}},[e._v(e._s(e.detail.desc))]),a("p",{staticStyle:{"text-align":"left"}},[e._v(e._s(e.detail.pos_name)+" | 从业"+e._s(e.detail.job_time))]),a("p",{staticStyle:{"text-align":"left"}},[e._v(e._s(e.detail.store_name))]),a("p",{staticStyle:{"text-align":"left"}},[e._v(e._s(e.detail.province_name)+e._s(e.detail.city_name))]),a("p",{staticStyle:{"text-align":"left"}},[e._v("详细描述：")]),a("p",{staticStyle:{"text-align":"left"}},[e._v(e._s(e.detail.detail))])])},i=[],n=a("7af2"),o=(a("0808"),a("6944")),s=a.n(o),l=a("8bbf"),c=a.n(l),d=a("d6d3");a("fda2");c.a.use(s.a);var u={components:{videoPlayer:d["videoPlayer"]},data:function(){return{title:"文章内容",visible:!1,rpl_id:0,detail:{name:"",content:"",img:[]}}},methods:{view:function(e){var t=this;this.visible=!0,this.id=e,this.request(n["a"].getPersonView,{id:this.id}).then((function(e){t.detail=e,console.log(t.detail)}))},handleCancel:function(){this.detail.reply_mv_nums=2,this.visible=!1}}},g=u,p=(a("a470"),a("2877")),f=Object(p["a"])(g,r,i,!1,null,"6caab2b1",null);t["default"]=f.exports},"451f":function(e,t,a){},6685:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[a("div",[a("a-tabs",{attrs:{"default-active-key":"1"}},[a("a-tab-pane",{attrs:{tab:"高手列表"}})],1)],1),a("a-form-model",{staticStyle:{float:"right","margin-bottom":"30px"},attrs:{layout:"inline",model:e.searchForm}},[a("a-form-model-item",{attrs:{label:"岗位筛选"}},[a("a-select",{staticStyle:{width:"160px"},model:{value:e.searchForm.position,callback:function(t){e.$set(e.searchForm,"position",t)},expression:"searchForm.position"}},e._l(e.position_list,(function(t){return a("a-select-option",{key:t.id,attrs:{id:t.id}},[e._v(e._s(t.name)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"条件筛选"}},[a("a-select",{staticStyle:{width:"160px"},model:{value:e.searchForm.type_id,callback:function(t){e.$set(e.searchForm,"type_id",t)},expression:"searchForm.type_id"}},[a("a-select-option",{attrs:{value:0}},[e._v(" 商家名称")]),a("a-select-option",{attrs:{value:1}},[e._v(" 店铺名称")]),a("a-select-option",{attrs:{value:2}},[e._v(" 联系电话")])],1)],1),a("a-form-model-item",{attrs:{label:""}},[a("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入名称"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),a("a-form-model-item",[a("a-button",{staticClass:"ml-20",attrs:{type:"primary",icon:"search"},on:{click:function(t){return e.submitForm(!0)}}},[e._v(" 查询")])],1)],1),a("div",{staticStyle:{height:"30px"}}),a("a-table",{staticClass:"mt-20",attrs:{rowKey:"cat_id",columns:e.columns,"data-source":e.dataList,pagination:e.pagination},scopedSlots:e._u([{key:"headimg",fn:function(e){return a("span",{},[a("img",{staticStyle:{width:"30px",height:"30px"},attrs:{src:e}})])}},{key:"action",fn:function(t){return a("span",{},[a("a",{staticClass:"ml-10 inline-block",on:{click:function(a){return e.$refs.createModal.view(t)}}},[e._v("查看")]),a("a",{staticClass:"ml-10 inline-block",on:{click:function(a){return e.del(t)}}},[e._v("拉黑")])])}}])}),a("person-view",{ref:"createModal",on:{loaddata:e.getDataList}})],1)},i=[],n=a("5530"),o=a("c1df"),s=a.n(o),l=a("1a00"),c=a("7af2"),d=(a("0808"),a("6944")),u=a.n(d),g=a("8bbf"),p=a.n(g),f=a("d6d3");a("fda2"),a("451f");p.a.use(u.a);var h={name:"CategoryList",components:{PersonView:l["default"],videoPlayer:f["videoPlayer"]},data:function(){return{searchForm:{category:0,position:0,type_id:0,name:""},selectedRowKeys:[],category_list:[],position_list:[],columns:[{title:"头像",dataIndex:"headimg",key:"headimg",scopedSlots:{customRender:"headimg"}},{title:"名称",dataIndex:"name",key:"name"},{title:"岗位",dataIndex:"pos_name",key:"pos_name"},{title:"从业年限",dataIndex:"job_time",key:"job_time"},{title:"手机号",dataIndex:"phone",key:"phone"},{title:"归属商家",dataIndex:"mer_name",key:"mer_name"},{title:"所在店铺",dataIndex:"store_name",key:"store_name"},{title:"操作",dataIndex:"id",key:"id",width:"12%",scopedSlots:{customRender:"action"}}],dataList:[],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(e){return"共 ".concat(e," 条记录")}}}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.handleRowSelectChange}}},mounted:function(){this.getDataList({is_search:!1})},methods:{moment:s.a,handleSortChange:function(e,t){var a=this;this.request(c["a"].getCategorySort,{cat_id:t,sort:e}).then((function(e){a.getDataList({is_search:!1})}))},handleRowSelectChange:function(e){this.selectedRowKeys=e},getDataList:function(e){var t=this,a=Object(n["a"])({},this.searchForm);delete a.time,1==e.is_search?(a.page=1,this.$set(this.pagination,"current",1)):(a.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),a.pageSize=this.pagination.pageSize,this.request(c["a"].getPersonList,a).then((function(e){t.dataList=e.list,t.category_list=e.categoryList,t.position_list=e.positionList,console.log(e),t.$set(t.pagination,"total",e.count)}))},onDateRangeChange:function(e,t){this.$set(this.searchForm,"time",[e[0],e[1]]),this.$set(this.searchForm,"begin_time",t[0]),this.$set(this.searchForm,"end_time",t[1])},submitForm:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(n["a"])({},this.searchForm);delete t.time,t.is_search=e,this.getDataList(t)},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.submitForm()},onPageSizeChange:function(e,t){this.$set(this.pagination,"pageSize",t),this.submitForm()},resetForm:function(){this.$set(this,"searchForm",{remarks:"",cat_id:0}),this.$set(this.pagination,"current",1),this.getDataList({is_search:!1})},showCorr:function(){},del:function(e){var t=this,a=this.$confirm({title:"确定要拉黑吗?",centered:!0,onOk:function(){t.request(c["a"].getPersonDel,{id:e}).then((function(e){t.$message.success("拉黑成功！"),t.getDataList({is_search:!1}),a.destroy()}))}})}}},m=h,y=(a("c6bd"),a("2877")),_=Object(y["a"])(m,r,i,!1,null,"1aaf9935",null);t["default"]=_.exports},"7af2":function(e,t,a){"use strict";var r={toolList:"/marriage_helper/platform.MarriageTool/toolList",childList:"/marriage_helper/platform.MarriageTool/childList",changeSort:"/marriage_helper/platform.MarriageTool/changeSort",childChangeSort:"/marriage_helper/platform.MarriageTool/childChangeSort",editCategory:"/marriage_helper/platform.MarriageTool/editCategory",delCategory:"/marriage_helper/platform.MarriageTool/delCategory",updateCategory:"/marriage_helper/platform.MarriageTool/updateCategory",addCategory:"/marriage_helper/platform.MarriageTool/addCategory",planCategoryList:"/marriage_helper/platform.MarriagePlan/planCategoryList",childPlanList:"/marriage_helper/platform.MarriagePlan/childPlanList",addPlanCategory:"/marriage_helper/platform.MarriagePlan/addCategory",updatePlanCategory:"/marriage_helper/platform.MarriagePlan/updateCategory",editPlanCategory:"/marriage_helper/platform.MarriagePlan/editCategory",delPlanCategory:"/marriage_helper/platform.MarriagePlan/delCategory",delPlan:"/marriage_helper/platform.MarriagePlan/delPlan",changePlanSort:"/marriage_helper/platform.MarriagePlan/changeSort",getSelCategory:"/marriage_helper/platform.MarriagePlan/getSelCategory",byOtherCategory:"/marriage_helper/platform.MarriagePlan/byOtherCategory",addPlan:"/marriage_helper/platform.MarriagePlan/addPlan",updatePlan:"/marriage_helper/platform.MarriagePlan/updatePlan",editPlan:"/marriage_helper/platform.MarriagePlan/editPlan",getBudgetList:"/marriage_helper/platform.MarriageBudget/getBudgetList",getBudgetCreate:"/marriage_helper/platform.MarriageBudget/getBudgetCreate",getBudgetInfo:"/marriage_helper/platform.MarriageBudget/getBudgetInfo",getBudgetScaleCreate:"/marriage_helper/platform.MarriageBudget/getBudgetScaleCreate",getBudgetScaleInfo:"/marriage_helper/platform.MarriageBudget/getBudgetScaleInfo",getBudgetDel:"/marriage_helper/platform.MarriageBudget/getBudgetDel",getPersonList:"/marriage_helper/platform.JobPerson/getPersonList",getPersonView:"/marriage_helper/platform.JobPerson/getPersonView",getPersonDel:"/marriage_helper/platform.JobPerson/getPersonDel",getCategoryList:"/marriage_helper/platform.MarriageCategory/getCategoryList",getCategoryCreate:"/marriage_helper/platform.MarriageCategory/getCategoryCreate",getCategoryInfo:"/marriage_helper/platform.MarriageCategory/getCategoryInfo",getCategoryPositionList:"/marriage_helper/platform.MarriageCategory/getCategoryPositionList",getCategorySort:"/marriage_helper/platform.MarriageCategory/getCategorySort",getCategoryDelAll:"/marriage_helper/platform.MarriageCategory/getCategoryDelAll"};t["a"]=r},a470:function(e,t,a){"use strict";a("e05e5")},c6bd:function(e,t,a){"use strict";a("d339")},d339:function(e,t,a){},d6d3:function(e,t,a){!function(t,r){e.exports=r(a("3d337"))}(0,(function(e){return function(e){function t(r){if(a[r])return a[r].exports;var i=a[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=3)}([function(t,a){t.exports=e},function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0});var i=a(0),n=function(e){return e&&e.__esModule?e:{default:e}}(i),o=window.videojs||n.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var a=Object(e),r=1;r<arguments.length;r++){var i=arguments[r];if(null!=i)for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(a[n]=i[n])}return a},writable:!0,configurable:!0});var s=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"];t.default={name:"video-player",props:{start:{type:Number,default:0},crossOrigin:{type:String,default:""},playsinline:{type:Boolean,default:!1},customEventName:{type:String,default:"statechanged"},options:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{controls:!0,controlBar:{remainingTimeDisplay:!1,playToggle:{},progressControl:{},fullscreenToggle:{},volumeMenuButton:{inline:!1,vertical:!0}},techOrder:["html5"],plugins:{}}}},globalEvents:{type:Array,default:function(){return[]}}},data:function(){return{player:null,reseted:!0}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()},methods:{initialize:function(){var e=this,t=Object.assign({},this.globalOptions,this.options);this.playsinline&&(this.$refs.video.setAttribute("playsinline",this.playsinline),this.$refs.video.setAttribute("webkit-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-video-player-type","h5"),this.$refs.video.setAttribute("x5-video-player-fullscreen",!1)),""!==this.crossOrigin&&(this.$refs.video.crossOrigin=this.crossOrigin,this.$refs.video.setAttribute("crossOrigin",this.crossOrigin));var a=function(t,a){t&&e.$emit(t,e.player),a&&e.$emit(e.customEventName,r({},t,a))};t.plugins&&delete t.plugins.__ob__;var i=this;this.player=o(this.$refs.video,t,(function(){for(var e=this,t=s.concat(i.events).concat(i.globalEvents),r={},n=0;n<t.length;n++)"string"==typeof t[n]&&void 0===r[t[n]]&&function(t){r[t]=null,e.on(t,(function(){a(t,!0)}))}(t[n]);this.on("timeupdate",(function(){a("timeupdate",this.currentTime())})),i.$emit("ready",this)}))},dispose:function(e){var t=this;this.player&&this.player.dispose&&("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),this.player.dispose(),this.player=null,this.$nextTick((function(){t.reseted=!1,t.$nextTick((function(){t.reseted=!0,t.$nextTick((function(){e&&e()}))}))})))}},watch:{options:{deep:!0,handler:function(e,t){var a=this;this.dispose((function(){e&&e.sources&&e.sources.length&&a.initialize()}))}}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),i=a.n(r);for(var n in r)["default","default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);var o=a(5),s=a(4),l=s(i.a,o.a,!1,null,null,null);t.default=l.exports},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.install=t.videoPlayer=t.videojs=void 0;var i=a(0),n=r(i),o=a(2),s=r(o),l=window.videojs||n.default,c=function(e,t){t&&(t.options&&(s.default.props.globalOptions.default=function(){return t.options}),t.events&&(s.default.props.globalEvents.default=function(){return t.events})),e.component(s.default.name,s.default)},d={videojs:l,videoPlayer:s.default,install:c};t.default=d,t.videojs=l,t.videoPlayer=s.default,t.install=c},function(e,t){e.exports=function(e,t,a,r,i,n){var o,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(o=e,s=e.default);var c,d="function"==typeof s?s.options:s;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),a&&(d.functional=!0),i&&(d._scopeId=i),n?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},d._ssrRegister=c):r&&(c=r),c){var u=d.functional,g=u?d.render:d.beforeCreate;u?(d._injectStyles=c,d.render=function(e,t){return c.call(t),g(e,t)}):d.beforeCreate=g?[].concat(g,c):[c]}return{esModule:o,exports:s,options:d}}},function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.reseted?a("div",{staticClass:"video-player"},[a("video",{ref:"video",staticClass:"video-js"})]):e._e()},i=[],n={render:r,staticRenderFns:i};t.a=n}])}))},e05e5:function(e,t,a){}}]);