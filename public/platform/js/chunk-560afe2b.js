(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-560afe2b","chunk-bfa5f482"],{2406:function(t,e,i){"use strict";var n={getStoreCategoryList:"/merchant/platform.MerchantStoreCategory/getStoreCategoryList",editStoreCategory:"/merchant/platform.MerchantStoreCategory/editStoreCategory",saveStoreCategory:"/merchant/platform.MerchantStoreCategory/saveStoreCategory",delStoreCategory:"/merchant/platform.MerchantStoreCategory/delStoreCategory",updateSort:"/merchant/platform.MerchantStoreCategory/updateSort",getCorrList:"/merchant/platform.Corr/searchCorr",getCorrDetails:"/merchant/platform.Corr/getCorrDetails",getEditCorr:"/merchant/platform.Corr/getEditCorr",getPositionList:"/merchant/platform.Position/getPositionList",getPositionCreate:"/merchant/platform.Position/getPositionCreate",getPositionInfo:"/merchant/platform.Position/getPositionInfo",getPositionCategoryList:"/merchant/platform.Position/getPositionCategoryList",getPositionDelAll:"/merchant/platform.Position/getPositionDelAll",getTechnicianList:"/merchant/platform.Technician/getTechnicianList",getTechnicianView:"/merchant/platform.Technician/getTechnicianView",getTechnicianExamine:"/merchant/platform.Technician/getTechnicianExamine",getTechnicianDel:"/merchant/platform.Technician/getTechnicianDel",getContractList:"/common/platform.merchant.MerchantContract/getList",addResignTip:"/common/platform.merchant.MerchantContract/addResignTip"};e["a"]=n},"451f":function(t,e,i){},5673:function(t,e,i){"use strict";i("65c4")},"65c4":function(t,e,i){},"940d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[i("div",[i("a-tabs",{attrs:{"default-active-key":"1"}},[i("a-tab-pane",{attrs:{tab:"岗位列表"}})],1)],1),i("a-form-model",{staticStyle:{"margin-bottom":"20px","margin-left":"20px"},attrs:{layout:"inline",model:t.searchForm}},[i("a-form-model-item",{attrs:{label:"职位分类"}},[i("a-select",{staticStyle:{width:"160px"},model:{value:t.searchForm.cat_id,callback:function(e){t.$set(t.searchForm,"cat_id",e)},expression:"searchForm.cat_id"}},[i("a-select-option",{attrs:{value:0}},[t._v(" 全部")]),t._l(t.categoryList,(function(e){return i("a-select-option",{key:e.cat_id,attrs:{cat_id:e.cat_id}},[t._v(t._s(e.cat_name)+" ")])}))],2)],1),i("a-form-model-item",{attrs:{label:"岗位名称"}},[i("a-input",{staticStyle:{width:"160px"},attrs:{placeholder:"请输入岗位名称"},model:{value:t.searchForm.remarks,callback:function(e){t.$set(t.searchForm,"remarks",e)},expression:"searchForm.remarks"}})],1),i("a-form-model-item",[i("a-button",{staticClass:"ml-20",attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.submitForm(!0)}}},[t._v(" 查询")]),i("a-button",{staticClass:"ml-20",on:{click:function(e){return t.resetForm()}}},[t._v(" 重置")])],1)],1),i("div",[i("a-form-model-item",[i("a-button",{staticClass:"ml-20 maxbox",attrs:{type:"primary"},on:{click:function(e){return t.$refs.createModal.add()}}},[t._v(" 添加岗位")]),i("a-button",{staticClass:"ml-20 maxbox",on:{click:function(e){return t.delAll()}}},[t._v(" 删除")])],1)],1),i("a-table",{staticClass:"mt-20",attrs:{rowKey:"id",columns:t.columns,"data-source":t.dataList,"row-selection":t.rowSelection,pagination:t.pagination},scopedSlots:t._u([{key:"action",fn:function(e,n){return i("span",{},[i("a",{staticClass:"ml-10 inline-block",on:{click:function(i){return t.$refs.createModal.edit(e)}}},[t._v("编辑")]),n.people_number<1?i("a",{staticClass:"ml-10 inline-block",on:{click:function(i){return t.delAll(e)}}},[t._v("删除")]):t._e()])}}])}),i("position-create",{ref:"createModal",on:{loaddata:t.getDataList}})],1)},a=[],r=i("5530"),o=i("c1df"),s=i.n(o),l=i("d699"),c=i("2406"),u=(i("0808"),i("6944")),d=i.n(u),f=i("8bbf"),h=i.n(f),m=i("d6d3");i("fda2"),i("451f");h.a.use(d.a);var p={name:"PositionList",components:{PositionCreate:l["default"],videoPlayer:m["videoPlayer"]},data:function(){return{searchForm:{cat_id:0,remarks:""},categoryList:[],selectedRowKeys:[],store_list:[],columns:[{title:"岗位名称",dataIndex:"name",key:"name"},{title:"分类",dataIndex:"cat_name",key:"cat_name"},{title:"职位绑定人数",dataIndex:"people_number",key:"people_number",width:"12%"},{title:"操作",dataIndex:"id",key:"id",width:"12%",scopedSlots:{customRender:"action"}}],dataList:[],pagination:{current:1,total:0,pageSize:10,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}}}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.handleRowSelectChange}}},mounted:function(){this.getDataList({is_search:!1})},methods:{moment:s.a,handleRowSelectChange:function(t){console.log(t),this.selectedRowKeys=t},getDataList:function(t){var e=this,i=Object(r["a"])({},this.searchForm);delete i.time,1==t.is_search?(i.page=1,this.$set(this.pagination,"current",1)):(i.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),i.pageSize=this.pagination.pageSize,this.request(c["a"].getPositionList,i).then((function(t){e.dataList=t.list,e.categoryList=t.categoryList,e.$set(e.pagination,"total",t.count)}))},onDateRangeChange:function(t,e){this.$set(this.searchForm,"time",[t[0],t[1]]),this.$set(this.searchForm,"begin_time",e[0]),this.$set(this.searchForm,"end_time",e[1])},submitForm:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(r["a"])({},this.searchForm);delete e.time,e.is_search=t,console.log(e),this.getDataList(e)},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.submitForm()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.submitForm()},resetForm:function(){this.$set(this,"searchForm",{remarks:"",cat_id:0}),this.$set(this.pagination,"current",1),this.getDataList({is_search:!1})},showCorr:function(){},delAll:function(t){var e=this,i=[];if(i=t?[t]:this.selectedRowKeys,i.length){var n=this.$confirm({title:"确定要删除选择的岗位吗?",centered:!0,onOk:function(){e.request(c["a"].getPositionDelAll,{ids:i}).then((function(t){e.$message.success("删除成功！"),e.getDataList({is_search:!1}),n.destroy()}))}});console.log(i)}else this.$message.warning("请先选择要删除的岗位~")}}},g=p,v=(i("5673"),i("2877")),y=Object(v["a"])(g,n,a,!1,null,"aa3a576a",null);e["default"]=y.exports},d699:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:640,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",{attrs:{label:"选择店铺分类",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_id",{initialValue:t.detail.cat_id,rules:[{required:!0,message:"请选择店铺分类"}]}],expression:"['cat_id', {initialValue:detail.cat_id,rules: [{required: true, message: '请选择店铺分类'}]}]"}],attrs:{placeholder:"请选择店铺分类"}},t._l(t.categoryList,(function(e){return i("a-select-option",{key:e.cat_id,attrs:{cat_id:e.cat_id}},[t._v(t._s(e.cat_name)+" ")])})),1)],1),i("a-form-item",{attrs:{label:"岗位名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol,help:"1-6个字符"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入名称"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入名称'}]}]"}],attrs:{placeholder:"请输入名称",maxLength:6}})],1),i("a-form-item",{attrs:{label:"备注",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remarks",{initialValue:t.detail.remarks,rules:[{required:!1}]}],expression:"['remarks', {initialValue:detail.remarks,rules: [{required: false}]}]"}],attrs:{placeholder:"添加备注","auto-size":{minRows:3,maxRows:5}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1)],1)],1)},a=[],r=i("2406"),o={data:function(){return{categoryList:[],title:"添加岗位",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,cat_id:"",name:"",remarks:""},id:0}},mounted:function(){},methods:{edit:function(t){this.visible=!0,this.id=t,this.getEditInfo(),this.getPositionCategoryList(),this.id>0?this.title="编辑岗位":this.title="添加岗位"},add:function(){this.title="添加岗位",this.getPositionCategoryList(),this.visible=!0,this.detail={id:0,name:"",remarks:""}},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,i){e?t.confirmLoading=!1:(i.id=t.detail.id,t.request(r["a"].getPositionCreate,i).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("loaddata",t.id)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(r["a"].getPositionInfo,{id:this.id}).then((function(e){t.detail={id:0,name:"",remarks:""},e&&(t.detail=e)}))},getPositionCategoryList:function(){var t=this;this.request(r["a"].getPositionCategoryList,{id:this.id}).then((function(e){e&&(t.categoryList=e)}))}}},s=o,l=i("2877"),c=Object(l["a"])(s,n,a,!1,null,null,null);e["default"]=c.exports},d6d3:function(t,e,i){!function(e,n){t.exports=n(i("3d337"))}(0,(function(t){return function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=3)}([function(e,i){e.exports=t},function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0});var a=i(0),r=function(t){return t&&t.__esModule?t:{default:t}}(a),o=window.videojs||r.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var a=arguments[n];if(null!=a)for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i[r]=a[r])}return i},writable:!0,configurable:!0});var s=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"];e.default={name:"video-player",props:{start:{type:Number,default:0},crossOrigin:{type:String,default:""},playsinline:{type:Boolean,default:!1},customEventName:{type:String,default:"statechanged"},options:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{controls:!0,controlBar:{remainingTimeDisplay:!1,playToggle:{},progressControl:{},fullscreenToggle:{},volumeMenuButton:{inline:!1,vertical:!0}},techOrder:["html5"],plugins:{}}}},globalEvents:{type:Array,default:function(){return[]}}},data:function(){return{player:null,reseted:!0}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()},methods:{initialize:function(){var t=this,e=Object.assign({},this.globalOptions,this.options);this.playsinline&&(this.$refs.video.setAttribute("playsinline",this.playsinline),this.$refs.video.setAttribute("webkit-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-video-player-type","h5"),this.$refs.video.setAttribute("x5-video-player-fullscreen",!1)),""!==this.crossOrigin&&(this.$refs.video.crossOrigin=this.crossOrigin,this.$refs.video.setAttribute("crossOrigin",this.crossOrigin));var i=function(e,i){e&&t.$emit(e,t.player),i&&t.$emit(t.customEventName,n({},e,i))};e.plugins&&delete e.plugins.__ob__;var a=this;this.player=o(this.$refs.video,e,(function(){for(var t=this,e=s.concat(a.events).concat(a.globalEvents),n={},r=0;r<e.length;r++)"string"==typeof e[r]&&void 0===n[e[r]]&&function(e){n[e]=null,t.on(e,(function(){i(e,!0)}))}(e[r]);this.on("timeupdate",(function(){i("timeupdate",this.currentTime())})),a.$emit("ready",this)}))},dispose:function(t){var e=this;this.player&&this.player.dispose&&("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),this.player.dispose(),this.player=null,this.$nextTick((function(){e.reseted=!1,e.$nextTick((function(){e.reseted=!0,e.$nextTick((function(){t&&t()}))}))})))}},watch:{options:{deep:!0,handler:function(t,e){var i=this;this.dispose((function(){t&&t.sources&&t.sources.length&&i.initialize()}))}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),a=i.n(n);for(var r in n)["default","default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);var o=i(5),s=i(4),l=s(a.a,o.a,!1,null,null,null);e.default=l.exports},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.install=e.videoPlayer=e.videojs=void 0;var a=i(0),r=n(a),o=i(2),s=n(o),l=window.videojs||r.default,c=function(t,e){e&&(e.options&&(s.default.props.globalOptions.default=function(){return e.options}),e.events&&(s.default.props.globalEvents.default=function(){return e.events})),t.component(s.default.name,s.default)},u={videojs:l,videoPlayer:s.default,install:c};e.default=u,e.videojs=l,e.videoPlayer=s.default,e.install=c},function(t,e){t.exports=function(t,e,i,n,a,r){var o,s=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,s=t.default);var c,u="function"==typeof s?s.options:s;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),a&&(u._scopeId=a),r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):n&&(c=n),c){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(t,e){return c.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:o,exports:s,options:u}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.reseted?i("div",{staticClass:"video-player"},[i("video",{ref:"video",staticClass:"video-js"})]):t._e()},a=[],r={render:n,staticRenderFns:a};e.a=r}])}))}}]);