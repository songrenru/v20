(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cb73a1e","chunk-2d0a310a"],{"011d":function(t,e,a){"use strict";var l={getSearchHotList:"/mall/platform.MallSearchHot/getSearchHotList",getHotRecord:"/mall/platform.MallSearchHot/getHotRecord",addOrEditSearchHot:"/mall/platform.MallSearchHot/addOrEditSearchHot",getEditSearchHot:"/mall/platform.MallSearchHot/getEditSearchHot",delSearchHot:"/mall/platform.MallSearchHot/delSearchHot",saveSort:"/mall/platform.MallSearchHot/saveSort",getGoodsList:"/mall/platform.MallPlatformGoods/getGoodsList",getMerOrStoreList:"/mall/platform.MallPlatformGoods/getMerOrStoreList",goodsCategoryList:"/mall/platform.MallGoodsCategory/goodsCategoryList",goodsSetSort:"/mall/platform.MallPlatformGoods/setSort",getGoodsListByName:"/mall/platform.MallPlatformGoods/getGoodsListByName",exportGoods:"/mall/platform.MallPlatformGoods/exportGoods",goodsSetIntegral:"/mall/platform.MallPlatformGoods/setIntegral",goodsSetCommission:"/mall/platform.MallPlatformGoods/setCommission",goodsSetVirtual:"/mall/platform.MallPlatformGoods/setVirtual",goodsSetStatus:"/mall/platform.MallPlatformGoods/setStatus",goodsSetFirst:"/mall/platform.MallPlatformGoods/setFirst",merchantGoodsEdit:"/mall/platform.mallPlatformGoods/merchantGoodsEdit",getActivityRecommendList:"/mall/platform.MallActivityRecommend/getActivityRecommendList",getLimitedRecommendList:"/mall/platform.mallActivityRecommend/getLimitedRecommendList",getBargainRecommendList:"/mall/platform.mallActivityRecommend/getBargainRecommendList",getGroupRecommendList:"/mall/platform.mallActivityRecommend/getGroupRecommendList",editLimitedRecommend:"/mall/platform.mallActivityRecommend/editLimitedRecommend",editBargainRecommend:"/mall/platform.mallActivityRecommend/editBargainRecommend",editGroupRecommend:"/mall/platform.mallActivityRecommend/editGroupRecommend",setFirstLimited:"/mall/platform.mallActivityRecommend/setFirstLimited",setFirstBargain:"/mall/platform.mallActivityRecommend/setFirstBargain",setFirstGroup:"/mall/platform.mallActivityRecommend/setFirstGroup",setSortGroup:"/mall/platform.mallActivityRecommend/setSortGroup",setSortLimited:"/mall/platform.mallActivityRecommend/setSortLimited",setSortBargain:"/mall/platform.mallActivityRecommend/setSortBargain",bannerList:"/mall/platform.mallActivityRecommend/bannerList",addOrEditBanner:"/mall/platform.mallActivityRecommend/addOrEditBanner",delBanner:"/mall/platform.mallActivityRecommend/delBanner",getReplyList:"/mall/platform.MallPlatformReply/searchReply",getReplyDetails:"/mall/platform.MallPlatformReply/getReplyDetails",delReply:"/mall/platform.MallPlatformReply/delReply",getOrderList:"/mall/platform.MallOrder/searchOrders",getOrderDetails:"/mall/platform.MallOrder/getOrderDetails",getStores:"/mall/platform.MallOrder/getStores",getMers:"/mall/platform.MallOrder/getMers",loginMer:"/mall/platform.MallOrder/loginMer",loginStore:"/mall/platform.MallOrder/loginStore",getAllArea:"/mall/platform.MallOrder/getAllArea",getDiscount:"/mall/platform.MallOrder/getDiscount",getOrderLog:"/mall/platform.MallOrder/getOrderLog",exportOrder:"/mall/platform.MallOrder/exportOrder",getList:"mall/platform.MallHomeDecorate/getList",getDel:"mall/platform.MallHomeDecorate/getDel",getEdit:"mall/platform.MallHomeDecorate/getEdit",addOrEditDecorate:"mall/platform.MallHomeDecorate/addOrEdit",getSixList:"mall/platform.MallHomeDecorate/getSixList",getSixEdit:"mall/platform.MallHomeDecorate/getSixEdit",addOrEditSixAdver:"mall/platform.MallHomeDecorate/addOrEditSixAdver",delSixAdver:"mall/platform.MallHomeDecorate/delSixAdver",getRecList:"mall/platform.MallHomeDecorate/getRecList",addOrEditRec:"mall/platform.MallHomeDecorate/addOrEditRec",getRecEdit:"mall/platform.MallHomeDecorate/getRecEdit",delRecAdver:"mall/platform.MallHomeDecorate/delRecAdver",recDisplay:"mall/platform.MallHomeDecorate/recDisplay",getActGoods:"mall/platform.MallHomeDecorate/getActGoods",addRelatedGoods:"mall/platform.MallHomeDecorate/addRelatedGoods",getUrlAndRecSwitch:"mall/platform.MallHomeDecorate/getUrlAndRecSwitch",getRelatedList:"mall/platform.MallHomeDecorate/getRelatedList",saveRelatedSort:"/mall/platform.MallHomeDecorate/saveRelatedSort",delOne:"/mall/platform.MallHomeDecorate/delOne",viewLogistics:"/mall/platform.MallOrder/viewLogistics",getPeriodicList:"/mall/platform.MallOrder/getPeriodicList",setRecommend:"/mall/platform.MallPlatformGoods/setRecommend",cancelRecommend:"/mall/platform.MallPlatformGoods/cancelRecommend",isShowReply:"/mall/platform.MallPlatformReply/isShowReply",getMallBrowse:"/mall/platform.MallBrowse/getMallBrowse",MallBrowseExport:"/mall/platform.MallBrowse/export",exportBrowseTotalExport:"/mall/platform.MallBrowse/exportBrowseTotal",getAuditGoodsList:"/mall/platform.MallPlatformGoods/getAuditGoodsList",auditGoods:"/mall/platform.MallPlatformGoods/auditGoods",loginMerchant:"/mall/platform.MallPlatformGoods/loginMerchant",orderPrintTicket:"/mall/platform.MallOrder/printOrder"};e["a"]=l},"03f2":function(t,e,a){"use strict";a("fdf1")},cfc3:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-10 mb-20 pt-20 pl-20 pr-20 pb-20 bg-ff br-10"},[a("a",{staticClass:"title"},[t._v("商城商品审核")]),a("a-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[a("div",{staticClass:"status",staticStyle:{"margin-left":"0"}},[a("p",[t._v("商品名称:")]),a("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入商品名称"},on:{search:t.onSearch},model:{value:t.queryParams.keyword,callback:function(e){t.$set(t.queryParams,"keyword",e)},expression:"queryParams.keyword"}})],1),a("div",{staticClass:"status"},[a("p",[t._v("状态:")]),a("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":"-1"},on:{change:t.handleChangeFlag}},[a("a-select-option",{attrs:{value:"-1"}},[t._v(" 全部 ")]),a("a-select-option",{attrs:{value:"0"}},[t._v(" 待审核 ")]),a("a-select-option",{attrs:{value:"1"}},[t._v(" 审核成功 ")]),a("a-select-option",{attrs:{value:"2"}},[t._v(" 审核失败 ")])],1)],1),a("a-button",{staticStyle:{margin:"10px 10px 10px 6%"},attrs:{type:"primary"},on:{click:t.quickAudit}},[t._v(t._s(t.L("快速审核")))])],1),a("a-table",{staticStyle:{background:"#ffffff"},attrs:{columns:t.columns,rowKey:"goods_id","data-source":t.dataList,pagination:t.pagination,rowSelection:{onChange:t.onSelectChange,selectedRowKeys:t.selectedRowKeys}},on:{change:t.changePage},scopedSlots:t._u([{key:"goods_name",fn:function(e,l){return[a("div",{staticClass:"flex align-center oven"},[a("img",{staticStyle:{width:"50px",height:"50px","margin-right":"6px"},attrs:{src:l.image,alt:""}}),a("span",{attrs:{title:l.goods_name}},[t._v(t._s(l.goods_name))])])]}},{key:"money",fn:function(e){return a("span",{},[t._v(" ￥"+t._s(e)+" ")])}},{key:"tools_title",fn:function(e,l){return a("span",{},[a("span",[t._v(t._s(l.tools_title))]),t._v("( "),0==l.tools_audit_status?a("span",{staticStyle:{color:"#faad14"}},[t._v(t._s(l.tools_audit_status_text))]):1==l.tools_audit_status?a("span",{staticStyle:{color:"#52c41a"}},[t._v(t._s(l.tools_audit_status_text))]):2==l.tools_audit_status?a("span",{staticStyle:{color:"#f5222d"}},[t._v(t._s(l.tools_audit_status_text))]):t._e(),t._v(") ")])}},{key:"stock_num",fn:function(e){return a("span",{},[t._v(t._s(-1==e?"无限量":e)+" ")])}},{key:"audit_status",fn:function(e,l){return a("span",{},[0==l.audit_status?a("span",{staticStyle:{color:"#faad14"}},[t._v(t._s(l.audit_status_text))]):1==l.audit_status?a("span",{staticStyle:{color:"#52c41a"}},[t._v(t._s(l.audit_status_text))]):2==l.audit_status?a("span",{staticStyle:{color:"#f5222d"}},[t._v(t._s(l.audit_status_text))]):t._e()])}},{key:"add_audit_time",fn:function(e){return a("span",{},[t._v(t._s(e||"无"))])}},{key:"audit_msg",fn:function(e){return a("span",{attrs:{title:e}},[t._v(t._s(e||"无"))])}},{key:"operation",fn:function(e,l){return a("a",{on:{click:function(e){return t.examine(l)}}},[t._v(t._s(0==l.audit_status?"审核":"重新审核"))])}}])}),a("a-modal",{attrs:{destroyOnClose:"",title:t.L("快速审核"),width:"46%",centered:"",visible:t.visible,okText:"提交"},on:{ok:t.handleOk,cancel:function(){t.visible=!1}}},[a("div",{staticStyle:{padding:"0 40px"}},[a("div",{staticClass:"info"},[a("span",[t._v(t._s(t.L("是否审核通过：")))]),a("a-radio-group",{attrs:{options:t.plainOptions,"default-value":t.value1},on:{change:t.onExamineChange}})],1),a("div",{staticClass:"info"},[a("span",[t._v(t._s(t.L("驳回原因：")))]),a("a-textarea",{attrs:{"auto-size":{minRows:3,maxRows:6}},model:{value:t.examineParams.audit_msg,callback:function(e){t.$set(t.examineParams,"audit_msg",e)},expression:"examineParams.audit_msg"}})],1)])])],1)},o=[],s=a("011d"),i={components:{},data:function(){return{tabList:[{key:0,tab:this.L("体育审核")},{key:1,tab:this.L("门票审核")}],dataList:[],visible:!1,value1:"",plainOptions:[{value:"1",label:this.L("同意")},{value:"2",label:this.L("驳回")}],selectedRowKeys:[],pagination:{pageSize:10,total:0,current:1,page:1},queryParams:{pageSize:0,page:1,keyword:""},examineParams:{goods_ids:[],audit_msg:"",audit_status:""},columns:[{title:this.L("商品名称"),dataIndex:"goods_name",key:"goods_name",width:200,scopedSlots:{customRender:"goods_name"}},{title:this.L("浏览量"),dataIndex:"browse_num"},{title:this.L("商家名称"),dataIndex:"mer_name",key:"mer_name",ellipsis:!0,width:200,scopedSlots:{customRender:"mer_name"}},{title:this.L("店铺名称"),dataIndex:"store_name",key:"store_name",ellipsis:!0,width:200,scopedSlots:{customRender:"store_name"}},{title:this.L("售价"),dataIndex:"price",key:"price",scopedSlots:{customRender:"price"}},{title:this.L("当前库存"),dataIndex:"stock_num",key:"stock_num",scopedSlots:{customRender:"stock_num"}},{title:this.L("提交时间"),dataIndex:"add_audit_time",key:"add_audit_time",scopedSlots:{customRender:"add_audit_time"}},{title:this.L("状态"),dataIndex:"audit_status",key:"audit_status",scopedSlots:{customRender:"audit_status"}},{title:this.L("备注"),dataIndex:"audit_msg",key:"audit_msg",ellipsis:!0,scopedSlots:{customRender:"audit_msg"}},{title:this.L("操作"),dataIndex:"operation",key:"operation",scopedSlots:{customRender:"operation"}}],paramsUrl:""}},created:function(){this.paramsUrl=s["a"].getAuditGoodsList,this.getLifeToolsList()},beforeRouteLeave:function(t,e,a){this.$destroy(),a()},methods:{handleChangeFlag:function(t){this.pagination.current=1,this.queryParams.audit_status=t,-1==t&&delete this.queryParams.audit_status,this.getLifeToolsList()},onSelectChange:function(t){this.selectedRowKeys=t},examine:function(t){var e=this,a={mer_id:t.mer_id};this.request(s["a"].loginMerchant,a).then((function(a){e.$router.push({path:"/mall/platform.MallCommodityExamine/goodsAudit",query:{goods_id:t.goods_id,store_id:t.store_id,disabled:1}})}))},quickAudit:function(){0!=this.selectedRowKeys.length?(this.visible=!0,this.examineParams.audit_msg="",this.examineParams.audit_status="",this.examineParams.goods_ids=this.selectedRowKeys):this.$message.warning(this.L("请选择一条或者多条列表再审核"))},examineParamsSubmit:function(){var t=this;this.request(s["a"].auditGoods,this.examineParams).then((function(e){t.$message.success(t.L(e.msg)),t.selectedRowKeys=[],t.visible=!1,t.getLifeToolsList()}))},handleOk:function(){""!=this.examineParams.audit_status?2!=this.examineParams.audit_status||""!=this.examineParams.audit_msg?this.examineParamsSubmit():this.$message.warning(this.L("请填写驳回原因")):this.$message.warning(this.L("请选择是否审核通过单选框"))},onExamineChange:function(t){this.examineParams.audit_status=t.target.value},getLifeToolsList:function(){var t=this;this.queryParams.pageSize=this.pagination.pageSize,this.queryParams.page=this.pagination.current,this.request(this.paramsUrl,this.queryParams).then((function(e){t.dataList=e.data,t.pagination.total=e.total}))},changePage:function(t,e){this.pagination.current=t.current,this.getLifeToolsList()},onSearch:function(t){this.pagination.current=1,this.getLifeToolsList()}}},r=i,m=(a("03f2"),a("2877")),d=Object(m["a"])(r,l,o,!1,null,"599a1892",null);e["default"]=d.exports},fdf1:function(t,e,a){}}]);