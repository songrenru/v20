(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c9f8aca","chunk-6b219d7c"],{9686:function(t,e,a){"use strict";var o={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList"};e["a"]=o},a2f8:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.content?a("div",{staticClass:"wrap",class:{borderNone:t.borderNone}},[a("div",{staticClass:"title"},[t._v(t._s(t.L(t.content.title)))]),a("div",{staticClass:"desc"},[t._v(t._s(t.L(t.content.desc)))])]):t._e()},s=[],i={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},n=i,r=(a("f0ca"),a("0c7c")),c=Object(r["a"])(n,o,s,!1,null,"9947987e",null);e["default"]=c.exports},c2ba:function(t,e,a){"use strict";a("f149")},e063:function(t,e,a){},ed7d:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.formDataDecorate?a("div",[a("componentDesc",{attrs:{content:t.desc}}),a("div",{staticClass:"content"},[a("a-form-model",{attrs:{model:t.formDataDecorate,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,rules:t.rules,labelAlign:"left"}},[a("a-form-model-item",{attrs:{label:t.L("标题内容"),prop:"title"}},[a("a-input",{attrs:{maxLength:8,placeholder:"请输入"},model:{value:t.formDataDecorate.title,callback:function(e){t.$set(t.formDataDecorate,"title",e)},expression:"formDataDecorate.title"}})],1),a("a-form-model-item",{attrs:{label:t.L("排列样式")}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(t._s(t.getLabel(t.$store.state.customPage.styleTypeOptions,t.formDataDecorate.style_type)))]),a("div",[a("a-radio-group",{attrs:{"button-style":"solid"},on:{change:function(e){return t.$store.dispatch("updatePageScroll",!0)}},model:{value:t.formDataDecorate.style_type,callback:function(e){t.$set(t.formDataDecorate,"style_type",e)},expression:"formDataDecorate.style_type"}},t._l(t.$store.state.customPage.styleTypeOptions,(function(t){return a("a-radio-button",{key:t.value,attrs:{value:t.value}},[a("IconFont",{staticClass:"itemIcon",attrs:{type:t.icon}})],1)})),1)],1)])]),a("a-form-model-item",{attrs:{label:t.L("隐藏已过期的活动"),labelCol:{span:7},wrapperCol:{span:17}}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(t._s(1==t.formDataDecorate.is_show?t.L("显示"):t.L("隐藏")))]),a("a-checkbox",{attrs:{checked:1==t.formDataDecorate.is_show},on:{change:t.isShowChange}})],1)])],1)],1),t.formDataDecorate.list&&t.formDataDecorate.list.length?a("div",{staticClass:"list-wrap"},[a("draggable",{model:{value:t.formDataDecorate.list,callback:function(e){t.$set(t.formDataDecorate,"list",e)},expression:"formDataDecorate.list"}},t._l(t.formDataDecorate.list,(function(e){return a("div",{key:e.coupon_id,staticClass:"flex list-item"},[a("div",{staticClass:"text-nowrap"},[a("a-icon",{staticClass:"mr-10",attrs:{type:"menu"}}),t._v(t._s(t.hdTypeLabel)+"：")],1),a("div",{staticClass:"flex-1 text-wrap"},[t._v(" "+t._s(e.name)+" ")])])})),0)],1):t._e(),a("div",{staticClass:"mt-20 mb-20 padding-24"},[a("a-button",{attrs:{block:""},on:{click:function(e){return t.addBtn()}}},[a("a-icon",{attrs:{type:"plus"}}),t._v(t._s(t.L("添加活动"))+" ")],1)],1),a("a-modal",{attrs:{title:t.L("活动商品"),visible:t.visible,destroyOnClose:!0,width:"60%",cancelText:t.L("取消"),okText:t.L("确定")},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-row",{staticClass:"mb-20",attrs:{type:"flex",justify:"space-between"}},[a("a-col",[a("a-radio-group",{attrs:{"default-value":t.hd_type,"button-style":"solid"},on:{change:t.hdTypeChange}},t._l(t.hdTypeOptions,(function(e){return a("a-radio-button",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),a("a-col",{staticClass:"flex align-center"},[a("a-input",{attrs:{placeholder:t.L("搜索")},on:{change:t.inputChange,pressEnter:t.inputChange},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[a("a-icon",{attrs:{slot:"prefix",type:"search"},slot:"prefix"})],1),a("a-button",{staticClass:"ml-20",attrs:{type:"primary"},on:{click:function(e){return t.getList()}}},[t._v(" "+t._s(t.L("刷新"))+" ")])],1)],1),a("a-table",{attrs:{"row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange},columns:t.columns,rowKey:"goods_id",scroll:{y:442},pagination:t.pagination,"data-source":t.dataList},scopedSlots:t._u([{key:"start_date",fn:function(e,o){return a("span",{},[t._v(" "+t._s(o.start_date)+" "+t._s(o.start_time)+" ")])}}],null,!1,4138419984)})],1)],1):t._e()},s=[],i=(a("d3b7"),a("159b"),a("d81d"),a("99af"),a("498a"),a("a2f8")),n=a("5bb2"),r=a("9686"),c=a("b76a"),l=a.n(c),d={components:{componentDesc:i["default"],IconFont:n["a"],draggable:l.a},props:{formContent:{type:[String,Object],default:""}},data:function(){var t=this;return{desc:{title:"营销活动"},labelCol:{span:5},wrapperCol:{span:19},formDataDecorate:"",columns:[{title:this.L("活动ID"),dataIndex:"id",key:"id",align:"center"},{title:this.L("商品名称"),dataIndex:"name",key:"name",align:"center"},{title:this.L("开始时间"),dataIndex:"start_date",key:"start_date",scopedSlots:{customRender:"start_date"},align:"center"}],rules:{title:{required:!0,message:this.L("标题内容必填,长度限制为8个字"),trigger:""}},dataList:[],visible:!1,pagination:{current:1,pageSize:10,total:0,"show-total":function(e){return!!e&&t.L("共 X1 条记录",{X1:e})},"show-size-changer":!0,"show-quick-jumper":!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange},selectedRowKeys:[],keyword:"",hdTypeOptions:[{value:"limited",label:this.L("秒杀")},{value:"bargain",label:this.L("砍价")},{value:"group",label:this.L("拼团")}],hd_type:"",dataListAll:[]}},watch:{formContent:{deep:!0,handler:function(t,e){if(t)for(var a in this.formDataDecorate={},t)this.$set(this.formDataDecorate,a,t[a]);else this.formDataDecorate=""}},formDataDecorate:{deep:!0,handler:function(t){this.$emit("updatePageInfo",t)}}},computed:{sourceInfo:function(){return this.$store.state.customPage.sourceInfo},hdTypeLabel:function(){var t="",e=this.formDataDecorate.hd_type;return e?"limited"==e?t=this.L("秒杀"):"bargain"==e?t=this.L("砍价"):"group"==e&&(t=this.L("拼团")):t=this.L("活动"),t}},mounted:function(){if(this.formContent)for(var t in this.formDataDecorate={},this.formContent)this.$set(this.formDataDecorate,t,this.formContent[t]);this.$store.dispatch("updateStyleTypeOptions")},methods:{getLabel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a="";return t.length&&t.forEach((function(t){t.value==e&&(a=t.label)})),a},isShowChange:function(t){this.$set(this.formDataDecorate,"is_show",t.target.checked?1:2)},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.getList()},onPageSizeChange:function(t,e){this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",e),this.getList()},onSelectChange:function(t){this.selectedRowKeys=t},addBtn:function(){var t=this.formDataDecorate.list||[];t.length&&(this.selectedRowKeys=t.map((function(t){return t.goods_id}))),this.visible=!0,this.keyword="",this.hd_type=this.formDataDecorate.hd_type||"limited",this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10),this.getList()},getList:function(){var t=this,e={source:this.sourceInfo.source,source_id:this.sourceInfo.source_id,keyword:this.keyword,hd_type:this.hd_type,page:this.pagination.current,pageSize:this.pagination.pageSize};this.request(r["a"].getActInfo,e).then((function(e){if(t.dataList=e.list||[],t.$set(t.pagination,"total",parseInt(e.total)),t.dataListAll=t.dataListAll.concat(e.list)||[],t.dataListAll.length){var a={};t.dataListAll=t.dataListAll.reduce((function(t,e){return!a[e.goods_id]&&(a[e.goods_id]=t.push(e)),t}),[])}}))},inputChange:function(){""===this.keyword.trim()&&0!=this.keyword||(this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10),this.getList())},hdTypeChange:function(t){this.hd_type=t.target.value,this.keyword="",this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10),this.dataList=[],this.dataListAll=[],this.getList()},handleOk:function(){var t=this,e=[];this.selectedRowKeys.length&&this.dataListAll.length&&this.selectedRowKeys.forEach((function(a){t.dataListAll.forEach((function(t){a==t.goods_id&&e.push(t)}))})),this.$set(this.formDataDecorate,"hd_type",this.hd_type),this.$set(this.formDataDecorate,"list",e),this.visible=!1,this.selectedRowKeys=[],this.dataListAll=[]},handleCancel:function(){this.visible=!1,this.selectedRowKeys=[],this.keyword="",this.dataListAll=[]}}},m=d,g=(a("c2ba"),a("0c7c")),h=Object(g["a"])(m,o,s,!1,null,"38eca234",null);e["default"]=h.exports},f0ca:function(t,e,a){"use strict";a("e063")},f149:function(t,e,a){}}]);