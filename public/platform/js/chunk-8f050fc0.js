(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f050fc0"],{"2a269":function(e,t,o){"use strict";o("72c8")},"72c8":function(e,t,o){},9686:function(e,t,o){"use strict";var a={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList",getStoreList:"/common/common.DecoratePage/getStore"};t["a"]=a},da20:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-modal",{attrs:{title:e.L("微页面"),visible:e.visible,destroyOnClose:!0,width:"60%",cancelText:e.L("取消"),okText:e.L("确定")},on:{ok:e.handleOk,cancel:e.handleCancel}},[o("a-row",{staticClass:"mb-20",attrs:{type:"flex",justify:"space-between"}},[o("a-col",[o("a-button",{staticClass:"mr-20",on:{click:function(t){return e.addCustomPageOpt()}}},[e._v(" "+e._s(e.L("新建")))]),o("a-button",{on:{click:function(t){return e.refreshOpt()}}},[e._v(" "+e._s(e.L("刷新")))])],1)],1),o("a-table",{attrs:{"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,type:"radio"},columns:e.columns,rowKey:"id",scroll:{y:442},customRow:e.customRow,pagination:e.pagination,"data-source":e.dataList},scopedSlots:e._u([{key:"page_title",fn:function(t,a){return o("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){return t.stopPropagation(),e.previewOpt(a)}}},[e._v(" "+e._s(t)+" ")])}}])})],1)},n=[],i=(o("4de4"),o("d3b7"),o("9686")),s={props:{isCustomModule:{type:Boolean,default:!1}},data:function(){var e=this;return{visible:!1,dataList:[],selectedRowKeys:[],columns:[{title:this.L("标题"),dataIndex:"page_title",key:"page_title",scopedSlots:{customRender:"page_title"}},{title:this.L("创建时间"),dataIndex:"create_time",key:"create_time"}],pagination:{current:1,pageSize:10,total:0,"show-total":function(t){return!!t&&e.L("共 X1 条记录",{X1:t})},"show-size-changer":!0,"show-quick-jumper":!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange},pageId:"",sourceInfo:""}},computed:{current:function(){var e=this,t="";return this.dataList.length&&this.selectedRowKeys.length&&(t=this.dataList.filter((function(t){if(t.id==e.selectedRowKeys[0])return t}))[0]||""),t}},methods:{openModal:function(e){this.pageId=e.id||"",this.pageId&&(this.selectedRowKeys=[this.pageId]),this.sourceInfo=e.sourceInfo||"",this.visible=!0,this.getCustomPageList()},getCustomPageList:function(){var e=this,t={source:this.sourceInfo.source,source_id:this.sourceInfo.source_id,keyword:"",page:this.pagination.current,pageSize:this.pagination.pageSize};this.request(i["a"].getMicroPageList,t).then((function(t){e.dataList=t.list||[],!e.selectedRowKeys.length&&e.dataList.length&&(e.selectedRowKeys=e.dataList[0].id?[e.dataList[0].id]:[]),e.$set(e.pagination,"total",t.total)}))},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.getCustomPageList()},onPageSizeChange:function(e,t){this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",t),this.getCustomPageList()},onSelectChange:function(e){console.log(e,"selectedRowKeys"),this.selectedRowKeys=e},customRow:function(e,t){var o=this;return{on:{click:function(t){o.selectedRowKeys=[e.id]}}}},handleOk:function(){var e=this;if(this.isCustomModule)return this.handleCancel(),void this.$emit("getIndexPageOpt",{current:this.current});var t={id:this.selectedRowKeys[0],source:this.sourceInfo.source,source_id:this.sourceInfo.source_id};this.request(i["a"].setHomePage,t).then((function(t){e.handleCancel()}))},handleCancel:function(){this.visible=!1,this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10)},refreshOpt:function(){this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10),this.getCustomPageList()},addCustomPageOpt:function(){var e=this.$store.state.customPage["".concat(this.sourceInfo.source,"CustomPage")],t=this.$router.resolve({path:e,query:{source:this.sourceInfo.source,source_id:this.sourceInfo.source_id}});window.open(t.href,"_blank")},previewOpt:function(e){var t=e.link_url||"";t&&window.open(t)}}},c=s,r=(o("2a269"),o("0c7c")),g=Object(r["a"])(c,a,n,!1,null,"fcb9b41a",null);t["default"]=g.exports}}]);