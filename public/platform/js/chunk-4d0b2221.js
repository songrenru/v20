(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d0b2221","chunk-161ead2e"],{"03c3":function(t,e,a){"use strict";a("4127")},"30b0":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.formDataDecorate?a("div",{key:t.componentId,staticClass:"mall-activities-decorate-wrap"},[a("componentDesc",{attrs:{content:t.desc}}),a("div",{staticClass:"content"},[a("a-form-model",{attrs:{model:t.formDataDecorate,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,rules:t.rules,labelAlign:"left"}},[a("a-form-model-item",{attrs:{label:t.L("标题内容"),prop:"title"}},[a("a-input",{attrs:{placeholder:t.L("请输入"),maxLength:8},model:{value:t.formDataDecorate.title,callback:function(e){t.$set(t.formDataDecorate,"title",e)},expression:"formDataDecorate.title"}})],1),a("a-form-model-item",{attrs:{label:t.L("排列样式")}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(t._s(t.getLabel(t.$store.state.customPage.styleTypeOptions,t.formDataDecorate.style_type)))]),a("div",[a("a-radio-group",{attrs:{"button-style":"solid"},on:{change:t.styleTypechange},model:{value:t.formDataDecorate.style_type,callback:function(e){t.$set(t.formDataDecorate,"style_type",e)},expression:"formDataDecorate.style_type"}},t._l(t.$store.state.customPage.styleTypeOptions,(function(t){return a("a-radio-button",{key:t.value,attrs:{value:t.value}},[a("IconFont",{staticClass:"itemIcon",attrs:{type:t.icon}})],1)})),1)],1)])]),a("a-form-model-item",{attrs:{label:t.L("显示内容")}},[t.formDataDecorate.show_filed&&t.formDataDecorate.show_filed.length?a("a-row",t._l(t.formDataDecorate.show_filed,(function(e,o){return a("a-col",{key:e.value,attrs:{span:12}},[e.is_show?a("a-checkbox",{attrs:{checked:1==e.is_checked},on:{change:function(e){return t.showFiledChange(e,o)}}},[t._v(" "+t._s(e.label)+" ")]):t._e()],1)})),1):t._e()],1),"5"!=t.formDataDecorate.style_type&&t.isShowFiled("buy_btn")?a("a-form-model-item",{attrs:{label:t.L("购买按钮样式"),labelCol:{span:6},wrapperCol:{span:18}}},[a("a-row",[a("a-col",{staticClass:"text-right"},[a("a-radio-group",{attrs:{"button-style":"solid",size:"small"},model:{value:t.formDataDecorate.buyBtn_style,callback:function(e){t.$set(t.formDataDecorate,"buyBtn_style",e)},expression:"formDataDecorate.buyBtn_style"}},t._l(t.buyBtnStyleOptions,(function(e){return a("a-radio-button",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1)],1)],1)],1):t._e(),"5"!=t.formDataDecorate.style_type&&t.isShowFiled("buy_btn")?a("a-form-model-item",{attrs:{label:t.L("按钮名称"),prop:"buyBtn_name"}},[a("a-input",{attrs:{maxLength:4,placeholder:t.L("请输入按钮名称")},model:{value:t.formDataDecorate.buyBtn_name,callback:function(e){t.$set(t.formDataDecorate,"buyBtn_name",e)},expression:"formDataDecorate.buyBtn_name"}})],1):t._e(),a("a-form-model-item",{attrs:{label:t.L("隐藏已售罄的活动"),labelCol:{span:7},wrapperCol:{span:17}}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(t._s(1==t.formDataDecorate.is_showSellOut?t.L("已隐藏"):t.L("不隐藏")))]),a("a-checkbox",{attrs:{checked:1==t.formDataDecorate.is_showSellOut},on:{change:function(e){return t.isShowChange(e,"is_showSellOut")}}})],1)]),a("a-form-model-item",{attrs:{label:t.L("隐藏已结束的活动"),labelCol:{span:7},wrapperCol:{span:17}}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(t._s(1==t.formDataDecorate.is_showActivityEnd?t.L("已隐藏"):t.L("不隐藏")))]),a("a-checkbox",{attrs:{checked:1==t.formDataDecorate.is_showActivityEnd},on:{change:function(e){return t.isShowChange(e,"is_showActivityEnd")}}})],1)])],1)],1),t.formDataDecorate.list&&t.formDataDecorate.list.length?a("div",{staticClass:"list-wrap"},[a("draggable",{model:{value:t.formDataDecorate.list,callback:function(e){t.$set(t.formDataDecorate,"list",e)},expression:"formDataDecorate.list"}},t._l(t.formDataDecorate.list,(function(e){return a("div",{key:e.coupon_id,staticClass:"flex list-item"},[a("div",{staticClass:"text-nowrap"},[a("a-icon",{staticClass:"mr-10",attrs:{type:"menu"}}),t._v(t._s(t.desc.title)+"：")],1),a("div",{staticClass:"flex-1 text-wrap"},[t._v(" "+t._s(e.goods_name)+" ")])])})),0)],1):t._e(),a("div",{staticClass:"mt-20 mb-20 padding-24"},[a("a-button",{attrs:{block:""},on:{click:function(e){return t.addBtn()}}},[a("a-icon",{attrs:{type:"plus"}}),t._v(t._s(t.L("添加活动"))+" ")],1)],1),a("a-modal",{attrs:{title:t.L("活动商品"),visible:t.visible,destroyOnClose:!0,width:"60%",cancelText:t.L("取消"),okText:t.L("确定")},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-row",{staticClass:"mb-20",attrs:{type:"flex",justify:"space-between"}},[a("a-col",[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.getList()}}},[t._v(" "+t._s(t.L("刷新"))+" ")])],1),a("a-col",{staticClass:"flex align-center"},[a("a-input",{attrs:{placeholder:t.L("搜索")},on:{change:t.inputChange,pressEnter:t.inputChange},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[a("a-icon",{attrs:{slot:"prefix",type:"search"},slot:"prefix"})],1)],1)],1),a("a-table",{attrs:{"row-selection":{selectedRowKeys:t.selectedRowKeys,onSelect:t.onSelect,onSelectAll:t.onSelectAll},columns:t.columns,rowKey:"goods_id",scroll:{y:442},pagination:t.pagination,"data-source":t.dataList}})],1)],1):t._e()},n=[],s=(a("d81d"),a("d3b7"),a("159b"),a("b64b"),a("99af"),a("498a"),a("c740"),a("4de4"),a("a2f8")),i=a("5bb2"),c=a("9686"),r=a("b76a"),l=a.n(r),m={components:{componentDesc:s["default"],IconFont:i["a"],draggable:l.a},props:{formContent:{type:[String,Object],default:""}},data:function(){var t=this;return{labelCol:{span:5},wrapperCol:{span:19},formDataDecorate:"",columns:[{title:this.L("活动ID"),dataIndex:"act_id",key:"act_id",align:"center"},{title:this.L("商品名称"),dataIndex:"goods_name",key:"goods_name",align:"center"},{title:this.L("开始时间"),dataIndex:"start_time",key:"start_time",align:"center"},{title:this.L("结束时间"),dataIndex:"end_time",key:"end_time",align:"center"}],rules:{title:{required:!0,message:this.L("标题内容必填"),trigger:""},buyBtn_name:{required:!0,message:this.L("按钮名称必填"),trigger:""}},dataList:[],visible:!1,pagination:{current:1,pageSize:10,total:0,"show-total":function(e){return!!e&&t.L("共 X1 条记录",{X1:e})},"show-size-changer":!0,"show-quick-jumper":!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange},keyword:"",buyBtnStyleOptions:[{value:"1",label:this.L("方形线框")},{value:"2",label:this.L("方形实心")},{value:"3",label:this.L("圆角线框")},{value:"4",label:this.L("圆角实心")}],selectList:[]}},watch:{formDataDecorate:{deep:!0,handler:function(t){this.$emit("updatePageInfo",t)}}},computed:{sourceInfo:function(){return this.$store.state.customPage.sourceInfo},componentId:function(){return this.$store.state.customPage.componentId},desc:function(){var t="";return"mallLimited"==this.componentId?t=this.L("限时秒杀"):"mallBargain"==this.componentId?t=this.L("砍价"):"mallGroup"==this.componentId?t=this.L("拼团"):"mallPeriod"==this.componentId&&(t=this.L("周期购")),{title:t}},selectedRowKeys:function(){var t=this.selectList||[];return t.length?t.map((function(t){return t.goods_id})):[]}},mounted:function(){if(this.formContent)for(var t in this.formDataDecorate={},this.formContent)this.$set(this.formDataDecorate,t,this.formContent[t]);this.$store.dispatch("updateStyleTypeOptions")},methods:{getLabel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a="";return t.length&&t.forEach((function(t){t.value==e&&(a=t.label)})),a},isShowFiled:function(t){var e=this.formDataDecorate.show_filed||[],a=!0;return e.length&&e.forEach((function(e){e.value==t&&(a=e.is_checked)})),a},isShowChange:function(t,e){this.$set(this.formDataDecorate,e,t.target.checked?1:2)},styleTypechange:function(t){var e=this;this.$set(this.formDataDecorate,"style_type",t.target.value);var a=this.formDataDecorate.show_filed||[];a.length&&(a=a.map((function(a){return"buy_btn"==a.value&&("5"==t.target.value?a.is_show=!1:a.is_show=!0),"mallLimited"==e.componentId&&"reduce_money"==a.value&&"5"==t.target.value?a.is_show=!1:a.is_show=!0,a}))),this.$set(this.formDataDecorate,"show_filed",a),this.$store.dispatch("updatePageScroll",!0)},showFiledChange:function(t,e){this.$set(this.formDataDecorate["show_filed"][e],"is_checked",t.target.checked)},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.getList()},onPageSizeChange:function(t,e){this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",e),this.getList()},addBtn:function(){this.selectList=this.formDataDecorate.list?JSON.parse(JSON.stringify(this.formDataDecorate.list)):[],this.visible=!0,this.keyword="",this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10),this.getList()},getList:function(){var t=this,e={source:this.sourceInfo.source,source_id:this.sourceInfo.source_id,keyword:this.keyword,hd_type:this.formDataDecorate.hd_type,page:this.pagination.current,pageSize:this.pagination.pageSize};this.request(c["a"].getMallActInfo,e).then((function(e){e.list&&e.list.length&&(e.list=e.list.map((function(t){return t.key="".concat(t.act_id,"_").concat(t.goods_id),t}))),t.dataList=e.list||[],t.$set(t.pagination,"total",parseInt(e.total))}))},inputChange:function(){""===this.keyword.trim()&&0!=this.keyword||(this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10),this.getList())},handleOk:function(){this.$set(this.formDataDecorate,"list",this.selectList),this.handleCancel()},handleCancel:function(){this.visible=!1,this.keyword="",this.selectList=[]},onSelect:function(t,e,a,o){if(e)this.selectList.push(t);else if(this.selectList.length){var n=this.selectList.findIndex((function(e){return e.goods_id==t.goods_id}));-1!=n&&this.$delete(this.selectList,n)}},onSelectAll:function(t,e,a){this.selectList=t?this.selectList.concat(a):this.selectList.concat(a).filter((function(t){return-1==a.findIndex((function(e){return e.goods_id==t.goods_id}))}))}}},d=m,u=(a("03c3"),a("0c7c")),g=Object(u["a"])(d,o,n,!1,null,"04a8c850",null);e["default"]=g.exports},4127:function(t,e,a){},9686:function(t,e,a){"use strict";var o={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList",getStoreList:"/common/common.DecoratePage/getStore"};e["a"]=o},a2f8:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.content?a("div",{staticClass:"wrap",class:{borderNone:t.borderNone}},[a("div",{staticClass:"title"},[t._v(t._s(t.L(t.content.title)))]),a("div",{staticClass:"desc"},[t._v(t._s(t.L(t.content.desc)))])]):t._e()},n=[],s={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},i=s,c=(a("f0ca"),a("0c7c")),r=Object(c["a"])(i,o,n,!1,null,"9947987e",null);e["default"]=r.exports},d4a6:function(t,e,a){},f0ca:function(t,e,a){"use strict";a("d4a6")}}]);