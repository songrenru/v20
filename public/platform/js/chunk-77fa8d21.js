(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77fa8d21","chunk-d51510c2","chunk-2d0b3786","chunk-2d0a310a"],{"011d":function(t,e,a){"use strict";var l={getSearchHotList:"/mall/platform.MallSearchHot/getSearchHotList",getHotRecord:"/mall/platform.MallSearchHot/getHotRecord",addOrEditSearchHot:"/mall/platform.MallSearchHot/addOrEditSearchHot",getEditSearchHot:"/mall/platform.MallSearchHot/getEditSearchHot",delSearchHot:"/mall/platform.MallSearchHot/delSearchHot",saveSort:"/mall/platform.MallSearchHot/saveSort",getGoodsList:"/mall/platform.MallPlatformGoods/getGoodsList",getMerOrStoreList:"/mall/platform.MallPlatformGoods/getMerOrStoreList",goodsCategoryList:"/mall/platform.MallGoodsCategory/goodsCategoryList",goodsSetSort:"/mall/platform.MallPlatformGoods/setSort",getGoodsListByName:"/mall/platform.MallPlatformGoods/getGoodsListByName",exportGoods:"/mall/platform.MallPlatformGoods/exportGoods",goodsSetIntegral:"/mall/platform.MallPlatformGoods/setIntegral",goodsSetCommission:"/mall/platform.MallPlatformGoods/setCommission",goodsSetVirtual:"/mall/platform.MallPlatformGoods/setVirtual",goodsSetStatus:"/mall/platform.MallPlatformGoods/setStatus",goodsSetFirst:"/mall/platform.MallPlatformGoods/setFirst",merchantGoodsEdit:"/mall/platform.mallPlatformGoods/merchantGoodsEdit",getActivityRecommendList:"/mall/platform.MallActivityRecommend/getActivityRecommendList",getLimitedRecommendList:"/mall/platform.mallActivityRecommend/getLimitedRecommendList",getBargainRecommendList:"/mall/platform.mallActivityRecommend/getBargainRecommendList",getGroupRecommendList:"/mall/platform.mallActivityRecommend/getGroupRecommendList",editLimitedRecommend:"/mall/platform.mallActivityRecommend/editLimitedRecommend",editBargainRecommend:"/mall/platform.mallActivityRecommend/editBargainRecommend",editGroupRecommend:"/mall/platform.mallActivityRecommend/editGroupRecommend",setFirstLimited:"/mall/platform.mallActivityRecommend/setFirstLimited",setFirstBargain:"/mall/platform.mallActivityRecommend/setFirstBargain",setFirstGroup:"/mall/platform.mallActivityRecommend/setFirstGroup",setSortGroup:"/mall/platform.mallActivityRecommend/setSortGroup",setSortLimited:"/mall/platform.mallActivityRecommend/setSortLimited",setSortBargain:"/mall/platform.mallActivityRecommend/setSortBargain",bannerList:"/mall/platform.mallActivityRecommend/bannerList",addOrEditBanner:"/mall/platform.mallActivityRecommend/addOrEditBanner",delBanner:"/mall/platform.mallActivityRecommend/delBanner",getReplyList:"/mall/platform.MallPlatformReply/searchReply",getReplyDetails:"/mall/platform.MallPlatformReply/getReplyDetails",delReply:"/mall/platform.MallPlatformReply/delReply",getOrderList:"/mall/platform.MallOrder/searchOrders",getOrderDetails:"/mall/platform.MallOrder/getOrderDetails",getStores:"/mall/platform.MallOrder/getStores",getMers:"/mall/platform.MallOrder/getMers",loginMer:"/mall/platform.MallOrder/loginMer",loginStore:"/mall/platform.MallOrder/loginStore",getAllArea:"/mall/platform.MallOrder/getAllArea",getDiscount:"/mall/platform.MallOrder/getDiscount",getOrderLog:"/mall/platform.MallOrder/getOrderLog",exportOrder:"/mall/platform.MallOrder/exportOrder",getList:"mall/platform.MallHomeDecorate/getList",getDel:"mall/platform.MallHomeDecorate/getDel",getEdit:"mall/platform.MallHomeDecorate/getEdit",addOrEditDecorate:"mall/platform.MallHomeDecorate/addOrEdit",getSixList:"mall/platform.MallHomeDecorate/getSixList",getSixEdit:"mall/platform.MallHomeDecorate/getSixEdit",addOrEditSixAdver:"mall/platform.MallHomeDecorate/addOrEditSixAdver",delSixAdver:"mall/platform.MallHomeDecorate/delSixAdver",getRecList:"mall/platform.MallHomeDecorate/getRecList",addOrEditRec:"mall/platform.MallHomeDecorate/addOrEditRec",getRecEdit:"mall/platform.MallHomeDecorate/getRecEdit",delRecAdver:"mall/platform.MallHomeDecorate/delRecAdver",recDisplay:"mall/platform.MallHomeDecorate/recDisplay",getActGoods:"mall/platform.MallHomeDecorate/getActGoods",addRelatedGoods:"mall/platform.MallHomeDecorate/addRelatedGoods",getUrlAndRecSwitch:"mall/platform.MallHomeDecorate/getUrlAndRecSwitch",getRelatedList:"mall/platform.MallHomeDecorate/getRelatedList",saveRelatedSort:"/mall/platform.MallHomeDecorate/saveRelatedSort",delOne:"/mall/platform.MallHomeDecorate/delOne",viewLogistics:"/mall/platform.MallOrder/viewLogistics",getPeriodicList:"/mall/platform.MallOrder/getPeriodicList",setRecommend:"/mall/platform.MallPlatformGoods/setRecommend",cancelRecommend:"/mall/platform.MallPlatformGoods/cancelRecommend",isShowReply:"/mall/platform.MallPlatformReply/isShowReply",getMallBrowse:"/mall/platform.MallBrowse/getMallBrowse",MallBrowseExport:"/mall/platform.MallBrowse/export",exportBrowseTotalExport:"/mall/platform.MallBrowse/exportBrowseTotal",getAuditGoodsList:"/mall/platform.MallPlatformGoods/getAuditGoodsList",auditGoods:"/mall/platform.MallPlatformGoods/auditGoods",loginMerchant:"/mall/platform.MallPlatformGoods/loginMerchant",orderPrintTicket:"/mall/platform.MallOrder/printOrder"};e["a"]=l},"187a":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-page-header",{staticStyle:{padding:"0 0 16px 0"},attrs:{title:"搜索词列表"}},[a("template",{slot:"extra"},[a("a-popconfirm",{attrs:{placement:"left","ok-text":"去添加热词","cancel-text":"去了解搜索偏好"},on:{confirm:function(e){return t.$refs.createModal.add()},cancel:t.showDrawer}},[a("template",{slot:"title"},[a("h4",[t._v("操作说明")]),a("p",[t._v("添加热搜关键词时，您可点击"),a("span",{staticStyle:{color:"red"}},[t._v("搜索偏好")]),a("br"),t._v("提前了解一下用户的最近搜索习惯哦~")])]),a("a-button",{key:"3",attrs:{type:"primary",icon:"plus"},on:{click:t.add}},[t._v(" 新建搜索词 ")])],2),a("a-button",{key:"2",attrs:{type:"default",icon:"rise"},on:{click:t.showDrawer}},[t._v(" 搜索偏好 ")]),a("a-drawer",{attrs:{width:"740",title:"搜索偏好",placement:"right",closable:!1,visible:t.visible,"after-visible-change":t.afterVisibleChange},on:{close:t.onClose}},[a("div",{staticClass:"ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0"}},[a("a-page-header",{staticStyle:{border:"1px solid rgb(235, 237, 240)"}},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:12,sm:12}},[a("a-form-item",[a("a-range-picker",{attrs:{ranges:{"近7天":[t.moment().subtract(7,"days"),t.moment()],"近15天":[t.moment().subtract(15,"days"),t.moment()],"近30天":[t.moment().subtract(30,"days"),t.moment()]},allowClear:!0},on:{change:t.dateOnChange},model:{value:t.search_data,callback:function(e){t.search_data=e},expression:"search_data"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1)],1)],1)],1),a("a-divider",{attrs:{orientation:"left"}},[t._v(" 数据解读 ")]),a("p",[t._v(" 该数据为您显示：查看买家自发性的商品迫切需求"),a("br")]),a("p",[t._v(" 该数据是根据用户搜索关键词进行大数据统计，为您添加关键词进行数据性参考"),a("br")]),a("a-divider"),a("a-table",{attrs:{columns:t.columns1,"data-source":t.hotRecord}})],1)])],1)],2),a("a-card",{staticClass:"table-wrap",attrs:{bordered:!1}},[a("a-table",{attrs:{"row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange},columns:t.columns,"data-source":t.searchHotList,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"sort",fn:function(e,l){return[a("a-input-number",{staticClass:"sort-input",attrs:{"default-value":e||0,precision:0,min:0},on:{blur:function(a){return t.handleSortChange(a,e,l)}},model:{value:l.sort,callback:function(e){t.$set(l,"sort",e)},expression:"record.sort"}})]}},{key:"is_first",fn:function(e){return a("span",{},[a("a-badge",{attrs:{status:t._f("statusTypeFilter")(e),text:t._f("statusFilter")(e)}})],1)}},{key:"type",fn:function(e){return a("span",{},[a("a-badge",{attrs:{status:t._f("statusTypeFilter")(e),text:t._f("statusFilter")(e)}})],1)}},{key:"hottest",fn:function(e){return a("span",{},[a("a-badge",{attrs:{status:t._f("statusTypeFilter")(e),text:t._f("statusFilter")(e)}})],1)}},{key:"action",fn:function(e,l){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModal.edit(l.id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(e){return t.deleteConfirm(l.id)},cancel:t.cancel}},[a("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}}])}),a("div",{staticStyle:{position:"relative",top:"-48px",width:"100px"}},[a("a-popconfirm",{attrs:{disabled:0==this.selectedRowKeys.length,title:"确认删除?","ok-text":"确定","cancel-text":"取消"},on:{confirm:t.deleteColumn}},[a("a-button",{key:"1",attrs:{disabled:0==this.selectedRowKeys.length}},[t._v(" 删除 ")])],1)],1),a("create-search-hot",{ref:"createModal",on:{ok:t.handleOk}})],1)],1)},o=[],r=a("2909"),i=a("5530"),s=(a("d81d"),a("4e82"),a("4de4"),a("d3b7"),a("011d")),n=a("3f7b"),c=a("c1df"),d=a.n(c),m=[{title:"TOP",dataIndex:"id",width:"30%",scopedSlots:{customRender:"id"}},{title:"关键字",dataIndex:"content",width:"40%",scopedSlots:{customRender:"content"}},{title:"热搜次数",dataIndex:"times",width:"30%",scopedSlots:{customRender:"times"}}],u=[],f={0:{status:"default",text:"否"},1:{status:"success",text:"是"}},p=[],h={name:"hotSearch",components:{CreateSearchHot:n["default"]},data:function(){return this.cacheData=u.map((function(t){return Object(i["a"])({},t)})),{buttonWidth:70,visible:!1,sortedInfo:null,searchHotList:u,selectedRowKeys:[],selectedRows:[],hotRecord:[],columns1:m,search_data:[],queryParam:{page:1,pageSize:10},pagination:{pageSize:10,total:0,"show-total":function(t){return"共 ".concat(t," 条记录")},"show-size-changer":!0,"show-quick-jumper":!0},editingKey:""}},mounted:function(){this.getSearchHotList(),this.getHotRecord()},filters:{statusFilter:function(t){return f[t].text},statusTypeFilter:function(t){return f[t].status}},computed:{columns:function(){var t=this.sortedInfo,e=this.filteredInfo;t=t||{},e=e||{};var a=[{title:"关键词",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"推荐至首页",dataIndex:"is_first",scopedSlots:{customRender:"is_first"}},{title:"连接",dataIndex:"type",scopedSlots:{customRender:"type"}},{title:"高亮",dataIndex:"hottest",scopedSlots:{customRender:"hottest"}},{title:"排序",dataIndex:"sort",width:"20%",scopedSlots:{customRender:"sort"},sorter:function(t,e){return t.sort-e.sort}},{title:"操作",dataIndex:"",scopedSlots:{customRender:"action"}}];return a},hasSelected:function(){return this.selectedRowKeys.length>0}},methods:{moment:d.a,getHotRecord:function(){var t=this;this.request(s["a"].getHotRecord).then((function(e){t.hotRecord=e.list,console.log(t.HotRecord)}))},dateOnChange:function(t,e){var a=this;this.queryParam.start_time=e[0],this.queryParam.end_time=e[1],this.request(s["a"].getHotRecord,{start_time:this.queryParam.start_time,end_time:this.queryParam.end_time}).then((function(t){a.hotRecord=t.list}))},initList:function(){this.search_data=[d()().subtract(7,"days"),d()()],this.queryParam.start_time=d()().subtract(7,"days").format("YYYY-MM-DD"),this.queryParam.end_time=d()().format("YYYY-MM-DD")},afterVisibleChange:function(t){console.log("visible",t)},showDrawer:function(){this.visible=!0},onClose:function(){this.visible=!1},getSearchHotList:function(){var t=this;this.request(s["a"].getSearchHotList,this.queryParam).then((function(e){console.log(e.list),t.searchHotList=e.list,t.pagination.total=e.count}))},handleChange:function(t,e,a){var l=Object(r["a"])(this.searchHotList),o=l.filter((function(t){return e===t.id}))[0];o&&(o[a]=t,this.searchHotList=l)},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e},edit:function(t){var e=Object(r["a"])(this.searchHotList),a=e.filter((function(e){return t===e.id}))[0];this.editingKey=t,console.log(t),console.log(a),a&&(a.editable=!0,this.searchHotList=e)},handleSortChange:function(t,e,a){var l=this,o={id:a.id,sort:e};this.request(s["a"].saveSort,o).then((function(t){l.searchHotList=l.searchHotList.map((function(t){return a.id==t.id&&(t.sort=e),l.getSearchHotList(),t}))}))},cancelsort:function(t){var e=Object(r["a"])(this.searchHotList),a=e.filter((function(e){return t===e.id}))[0];this.editingKey="",a&&(Object.assign(a,this.cacheData.filter((function(e){return t===e.id}))[0]),delete a.editable,this.searchHotList=e),this.getSearchHotList()},deleteConfirm:function(t){var e=this;this.request(s["a"].delSearchHot,{ids:[t]}).then((function(t){e.getSearchHotList(),e.$message.success("删除成功"),e.selectedRowKeys.length=0}))},deleteColumn:function(){for(var t=this,e=0;e<this.selectedRows.length;e++)p.push(this.selectedRows[e]["id"]);this.request(s["a"].delSearchHot,{ids:p}).then((function(e){t.getSearchHotList(),t.selectedRowKeys.length=0,t.$message.success("删除成功")}))},cancel:function(){},tableChange:function(t){this.queryParam["pageSize"]=t.pageSize,t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getSearchHotList())},add:function(){},confirm:function(){},handleOk:function(){this.getSearchHotList()}}},g=h,v=(a("d359"),a("0c7c")),y=Object(v["a"])(g,l,o,!1,null,"3f61bf5a",null);e["default"]=y.exports},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var l=a("6b75");function o(t){if(Array.isArray(t))return Object(l["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var i=a("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t){return o(t)||r(t)||Object(i["a"])(t)||s()}},"3f7b":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:640,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading}},[a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"关键词名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入搜索词名称"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入搜索词名称'}]}]"}]})],1),a("a-form-item",{attrs:{label:"关键词类型",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:t.detail.type}],expression:"[ 'type',{  initialValue:detail.type }]"}],on:{change:t.change}},[a("a-radio",{attrs:{value:0}},[t._v("关键词搜索商品")]),a("a-radio",{attrs:{value:1}},[t._v("链接页面")])],1)],1),1==t.detail.type?a("a-form-item",{attrs:{label:"链接地址",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{initialValue:t.detail.url}],expression:"['url', {initialValue:detail.url}]"}],staticStyle:{width:"228px"}}),a("a",{staticClass:"ant-form-text",on:{click:t.setLinkBases}},[t._v(" 从功能库选择 ")])],1):t._e(),a("a-form-item",{attrs:{label:"是否推荐至首页",labelCol:t.labelCol,wrapperCol:t.wrapperCol,help:"设置后，该关键词将显示在商城首页的热搜区域中"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["is_first",{initialValue:1==t.detail.is_first,valuePropName:"checked"}],expression:"['is_first',{initialValue:detail.is_first==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{"checked-children":"是","un-checked-children":"否"}})],1),a("a-form-item",{attrs:{label:"是否高亮",labelCol:t.labelCol,wrapperCol:t.wrapperCol,help:"设置后，在页面展示时会有高亮的标识"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["hottest",{initialValue:1==t.detail.hottest,valuePropName:"checked"}],expression:"['hottest',{initialValue:detail.hottest==1 ? true : false,valuePropName: 'checked'}]"}],attrs:{"checked-children":"是","un-checked-children":"否"}})],1)],1)],1)],1)},o=[],r=a("011d"),i={data:function(){return{title:"新建搜索词",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:"",url:"",type:0,is_first:0,hottest:0},id:"0"}},mounted:function(){console.log(this.catFid)},methods:{add:function(){this.visible=!0,this.id="0",this.detail={id:0,type:0,name:"",url:"",is_first:0,hottest:0}},edit:function(t){this.visible=!0,this.id=t,this.getEditInfo(),this.id>0?this.title="编辑搜索词":this.title="新建搜索词"},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,a){e?t.confirmLoading=!1:(a.id=t.id,t.request(r["a"].addOrEditSearchHot,a).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok",a)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){this.visible=!1,this.id="0",this.form=this.$form.createForm(this)},getEditInfo:function(){var t=this;this.request(r["a"].getEditSearchHot,{id:this.id}).then((function(e){t.detail=e}))},change:function(t){this.detail.type=t.target.value,console.log(t),console.log(this.type)},setLinkBases:function(){var t=this;this.$LinkBases({source:"platform",type:"h5",handleOkBtn:function(e){console.log("handleOk",e),t.url=e.url,t.$nextTick((function(){t.form.setFieldsValue({url:t.url})}))}})}}},s=i,n=a("0c7c"),c=Object(n["a"])(s,l,o,!1,null,null,null);e["default"]=c.exports},"4b18":function(t,e,a){},d359:function(t,e,a){"use strict";a("4b18")}}]);