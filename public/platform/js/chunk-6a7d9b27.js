(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a7d9b27"],{"5ffa":function(e,t,o){},"8a97":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"bg-ff listPage"},[o("a-row",{staticClass:"mt-20 mb-20",attrs:{type:"flex",justify:"space-between"}},[o("a-col",[o("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.addCustomPageOpt()}}},[e._v(" "+e._s(e.L("新建微页面"))+" ")])],1),o("a-col",[o("a-input",{attrs:{placeholder:e.L("搜索")},on:{change:e.inputChange,pressEnter:e.inputChange},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[o("a-icon",{attrs:{slot:"prefix",type:"search"},slot:"prefix"})],1)],1)],1),o("a-table",{attrs:{columns:e.columns,rowKey:"id",scroll:{y:570},pagination:e.pagination,"data-source":e.dataList},scopedSlots:e._u([{key:"page_title",fn:function(t,a){return o("a",{staticClass:"inline-block flex",attrs:{href:a.link_url,target:"_blank"}},[o("span",[e._v(e._s(t))]),1==a.is_home_page&&"platform"!=e.sourceInfo.source?o("a-button",{staticClass:"ml-10",attrs:{size:"small",type:"primary"}},[e._v(e._s("merchant"==e.sourceInfo.source?e.L("商家主页"):e.L("店铺主页")))]):e._e()],1)}},{key:"qrcode",fn:function(t){return o("span",{},[o("a-popover",{attrs:{trigger:"click"}},[o("img",{attrs:{slot:"content",src:t,alt:e.L("二维码")},slot:"content"}),o("a",{attrs:{href:"javascript:void(0);"}},[e._v(e._s(e.L("查看")))])])],1)}},{key:"action",fn:function(t,a){return o("span",{},[o("a",{staticClass:"inline-block",attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.editOpt(a)}}},[e._v(e._s(e.L("编辑")))]),o("a",{staticClass:"ml-10 inline-block",attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.removeOpt(a)}}},[e._v(e._s(e.L("删除")))]),"platform"!=e.sourceInfo.source?o("span",[a.is_home_page&&1==a.is_home_page?o("span",{staticClass:"ml-10 inline-block color-gray"},[e._v(" "+e._s(e.L("已为主页"))+" ")]):o("a",{staticClass:"ml-10 inline-block",attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.setHomePageOpt(a)}}},[e._v(" "+e._s(e.L("设为主页"))+" ")])]):e._e()])}}])})],1)},s=[],i=(o("498a"),o("9686")),n={data:function(){var e=this;return{keyword:"",dataList:[],columns:[{title:this.L("标题"),dataIndex:"page_title",key:"page_title",scopedSlots:{customRender:"page_title"}},{title:this.L("创建时间"),dataIndex:"create_time",key:"create_time"},{title:this.L("浏览数"),dataIndex:"brows_times",key:"brows_times"},{title:this.L("商品数量"),dataIndex:"goods_nums",key:"goods_nums"},{title:this.L("二维码"),dataIndex:"qrcode",key:"qrcode",scopedSlots:{customRender:"qrcode"}},{title:this.L("操作"),dataIndex:"id",key:"id",scopedSlots:{customRender:"action"},align:"center"}],pagination:{current:1,pageSize:10,total:0,"show-total":function(t){return!!t&&e.L("共 X1 条记录",{X1:t})},"show-size-changer":!0,"show-quick-jumper":!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange}}},computed:{sourceInfo:function(){return this.$store.state.customPage.sourceInfo},refreshCustomPageList:function(){return this.$store.state.customPage.refreshCustomPageList}},watch:{refreshCustomPageList:{immediate:!0,handler:function(e){e&&(this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10),this.keyword="",this.getCustomPageList())}}},mounted:function(){this.refreshCustomPageList||this.getCustomPageList()},methods:{getCustomPageList:function(){var e=this,t={source:this.sourceInfo.source,source_id:this.sourceInfo.source_id,keyword:this.keyword.trim(),page:this.pagination.current,pageSize:this.pagination.pageSize};this.request(i["a"].getMicroPageList,t).then((function(t){e.dataList=t.list||[],e.$set(e.pagination,"total",t.total),1!=e.pagination.current&&t.total>0&&!e.dataList.length&&(e.$set(e.pagination,"current",e.pagination.current-1),e.getCustomPageList()),e.$store.dispatch("updateCustomPageList",!1)}))},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.getCustomPageList()},onPageSizeChange:function(e,t){this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",t),this.getCustomPageList()},inputChange:function(){""===this.keyword.trim()&&0!=this.keyword||(this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10),this.getCustomPageList())},addCustomPageOpt:function(){this.$router.push({path:this.$store.state.customPage["".concat(this.sourceInfo.source,"CustomPage")],query:{source:this.sourceInfo.source,source_id:this.sourceInfo.source_id}})},editOpt:function(e){this.$router.push({path:this.$store.state.customPage["".concat(this.sourceInfo.source,"CustomPage")],query:{source:e.source||this.sourceInfo.source,source_id:e.source_id||this.sourceInfo.source_id,pageId:e.id}})},removeOpt:function(e){var t=this;this.$confirm({title:this.L("是否确定删除该微页面?"),centered:!0,onOk:function(){t.request(i["a"].delMicroPage,{id:e.id}).then((function(e){t.$message.success(t.L("操作成功！")),t.getCustomPageList()}))}})},setHomePageOpt:function(e){var t=this,o={id:e.id,source:e.source||this.sourceInfo.source,source_id:e.source_id||this.sourceInfo.source_id};this.request(i["a"].setHomePage,o).then((function(e){t.$message.success(t.L("操作成功！")),t.getCustomPageList()}))}}},c=n,r=(o("9a65"),o("2877")),g=Object(r["a"])(c,a,s,!1,null,"4ef0be3a",null);t["default"]=g.exports},9686:function(e,t,o){"use strict";var a={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList",getStoreList:"/common/common.DecoratePage/getStore"};t["a"]=a},"9a65":function(e,t,o){"use strict";o("5ffa")}}]);