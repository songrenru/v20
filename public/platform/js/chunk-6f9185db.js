(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f9185db"],{"837b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-modal",{attrs:{title:t.title,width:1200,visible:t.visible,footer:null,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[n("span",{staticClass:"add-banner sel"},[n("a",{on:{click:function(t){}}},[t._v(t._s(t.title)+"-列表")])]),n("span",{staticClass:"add-banner"},[n("a",{on:{click:function(e){return t.$refs.createModal.addSlideShows(t.cat_id)}}},[t._v("添加广告")])]),n("hr"),n("div",{staticClass:"prompt"},[t._v("广告背景颜色自定义")]),n("a-card",{attrs:{bordered:!1}},[n("a-table",{attrs:{columns:t.columns,"data-source":t.BannerList,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(e,a){return n("span",{},[n("a",{on:{click:function(e){return t.$refs.createModal.editSlideShows(a.id,t.cat_id)}}},[t._v("编辑")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(a.id)},cancel:t.cancel}},[n("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}},{key:"bg_color",fn:function(t){return n("span",{},[n("colorPicker",{attrs:{disabled:""},model:{value:t,callback:function(e){t=e},expression:"text"}})],1)}},{key:"url",fn:function(e){return n("span",{},[n("a",{attrs:{href:e,target:"_blank"}},[t._v("访问链接")])])}},{key:"status",fn:function(e){return n("span",{},[n("a-badge",{attrs:{status:t._f("statusTypeFilter")(e),text:t._f("statusFilter")(e)}})],1)}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last)+" ")]}}])})],1),n("add-slide-show",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOks}})],1)},i=[],s=(n("ac1f"),n("841c"),n("567c")),o=n("a7f9"),r={1:{status:"success",text:"正常"},2:{status:"default",text:"关闭"}},c={name:"FourAdvertising",components:{addSlideShow:o["default"]},data:function(){return{title:"广告图",visible:!1,confirmLoading:!1,sortedInfo:null,BannerList:[],pagination:{pageSize:10,total:10},search:{page:1},page:1,cat_id:0,cat_key:"street_four_adver",prompt:""}},filters:{statusFilter:function(t){return r[t].text},statusTypeFilter:function(t){return r[t].status}},mounted:function(){this.BannerLists()},computed:{columns:function(){var t=this.sortedInfo;t=t||{};var e=[{title:"编号",dataIndex:"id",key:"id"},{title:"名称",dataIndex:"name",key:"name"},{title:"链接地址",key:"url",dataIndex:"url",scopedSlots:{customRender:"url"}},{title:"背景色",key:"bg_color",dataIndex:"bg_color",scopedSlots:{customRender:"bg_color"}},{title:"最后操作时间",key:"last_time",dataIndex:"last_time"},{title:"状态",key:"status",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}];return e}},methods:{slideshowList:function(){this.title="广告图",this.visible=!0,this.BannerLists()},BannerLists:function(){var t=this;this.search["page"]=this.page,this.search["cat_key"]=this.cat_key;this.request(s["a"].getBannerList,this.search).then((function(e){console.log("res",e),t.BannerList=e.list,t.cat_id=e.cat_id,t.title=e.now_category.cat_name,t.prompt=e.now_category.size_info,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.BannerLists())},handleOks:function(){this.BannerLists()},deleteConfirm:function(t){var e=this;this.request(s["a"].bannerDel,{id:t}).then((function(t){e.BannerLists(),e.$message.success("删除成功")}))},cancel:function(){},handleCancel:function(){this.visible=!1},customExpandIcon:function(t){var e=this.$createElement;return console.log(t.record.children),void 0!=t.record.children?t.record.children.length>0?t.expanded?e("a",{style:{color:"black",marginRight:"8px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-down"},style:{fontSize:16}})]):e("a",{style:{color:"black",marginRight:"4px"},on:{click:function(e){t.onExpand(t.record,e)}}},[e("a-icon",{attrs:{type:"caret-right"},style:{fontSize:16}})]):e("span",{style:{marginRight:"8px"}}):e("span",{style:{marginRight:"20px"}})}}},l=c,d=(n("eefa"),n("2877")),u=Object(d["a"])(l,a,i,!1,null,null,null);e["default"]=u.exports},"89b4":function(t,e,n){},eefa:function(t,e,n){"use strict";n("89b4")}}]);