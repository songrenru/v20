(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74f4f1b6","chunk-0a1b87c7"],{"0fd3":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t._self._c;return i("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[i("a-card",{attrs:{title:t.title2}},[i("div",[i("div",{staticClass:"header-func"},[t._v(" 使用方法：点击“选中”直接返回对应模块数据，或者点击“详细”选择具体的内容数据 ")]),i("div",{staticClass:"header-title"},[t._v(" 请选择模块： "),i("a",{on:{click:function(i){return t.selected_url("")}}},[i("div",{staticClass:"items-right"},[t._v("点击这里清除选择")])])])]),t._l(t.appList,(function(e,a){return i("div",{key:a,staticClass:"body-item"},[i("div",{staticClass:"items"},[i("div",{staticClass:"items-left"},[t._v(t._s(e.categoryname))]),i("a",{on:{click:function(i){return t.selected_url(e)}}},[i("div",{staticClass:"items-right"},[t._v("选中")])]),i("a",{on:{click:function(i){return t.$refs.createModal.navigations(e,t.xtype,t.cfromModel)}}},[i("div",{staticClass:"items-right"},[t._v("详细")])])])])})),i("material-details",{ref:"createModal",on:{ok:t.handleDetailOk}})],2)],1)},n=[],s=e("a0e0"),o=e("d309"),l={name:"HotwordMaterialLibrary",components:{materialDetails:o["default"]},data:function(){return{title:"关键词素材库",title2:"",visible:!1,index_str:"",cfromModel:"",confirmLoading:!1,appList:{title:"",url:""},xtype:1}},methods:{materialLibrary:function(t,i,e){this.title="关键词素材库",this.title2="关键词素材库",this.index_str=i,this.xtype=t,1==this.xtype?this.title2="文字回复素材库":2==this.xtype?this.title2="音频回复素材库":3==this.xtype&&(this.title2="图片回复素材库"),this.visible=!0,this.cfromModel=e||"",this.AppLists()},AppLists:function(){var t=this,i=s["a"].getHotWordMaterialLibrary,e={xtype:this.xtype};this.request(i,e).then((function(i){console.log("res",i),t.appList=i.list}))},selected_url:function(t){this.$emit("ok",t,"material_category",this.index_str),this.visible=!1},handleCancel:function(){this.visible=!1},handleDetailOk:function(t){this.$emit("ok",t,"material_content",this.index_str),this.visible=!1}}},r=l,c=(e("2948"),e("0b56")),d=Object(c["a"])(r,a,n,!1,null,null,null);i["default"]=d.exports},2948:function(t,i,e){"use strict";e("ab8c")},"84c6":function(t,i,e){},"8cf4":function(t,i,e){"use strict";e("84c6")},ab8c:function(t,i,e){},d309:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t._self._c;return i("a-modal",{attrs:{title:t.title,width:850,height:650,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[i("a-table",{attrs:{columns:t.columns,"data-source":t.navigationList,pagination:t.pagination,loading:t.loading,"row-key":function(t){return t.material_id}},on:{change:t.tableChange},scopedSlots:t._u([{key:"xcontentaction",fn:function(e,a,n){return i("div",{},[1==a.xtype?i("div",[t._v(" "+t._s(a.xcontent)+" ")]):2==a.xtype?i("div",[i("div",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v(t._s(a.xname))]),i("a",{attrs:{href:a.audio_url,target:"_blank"}},[t._v(t._s(a.audio_url))])]):3==a.xtype?i("div",{staticClass:"previewimg"},t._l(a.word_imgs,(function(t,e){return i("img",{staticStyle:{height:"80px","margin-right":"10px"},attrs:{src:t,preview:"1"}})})),0):t._e()])}},{key:"action",fn:function(e,a){return i("span",{},[i("a",{on:{click:function(i){return t.selected_url(a)}}},[t._v("选中")])])}}])})],1)},n=[],s=(e("aa48"),e("8f7e"),e("a0e0")),o=[{title:"编号",dataIndex:"material_id",key:"material_id"},{title:"回复内容",dataIndex:"xcontent",key:"xcontent",width:450,scopedSlots:{customRender:"xcontentaction"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],l={name:"HotwordMaterialDetails",data:function(){return{title:"",category:{},visible:!1,confirmLoading:!1,navigationList:[],pagination:{current:1,pageSize:20,total:20},search:{page:1},page:1,xtype:"",loading:!1,cfromModel:""}},computed:{columns:function(){return o}},methods:{navigations:function(t,i,e){this.title="【"+t.categoryname+"】详细",this.category=t,this.visible=!0,this.xtype=i,this.cfromModel=e||"",this.getList()},getList:function(){var t=this;t.loading=!0,t.search.cate_id=t.category.cate_id,t.search.xtype=t.xtype,t.search.page=t.pagination.current;var i=s["a"].getHotWordMaterialLibraryDetails;t.request(i,t.search).then((function(i){t.loading=!1,t.navigationList=i.list,t.pagination.total=i.count?i.count:0,t.pagination.pageSize=i.total_limit?i.total_limit:20}))},tableChange:function(t){var i=this;t.current&&t.current>0&&(i.pagination.current=t.current,i.getList())},selected_url:function(t){this.$emit("ok",t),this.visible=!1},handleCancel:function(){this.category={},this.visible=!1}}},r=l,c=(e("8cf4"),e("0b56")),d=Object(c["a"])(r,a,n,!1,null,"20db798c",null);i["default"]=d.exports}}]);