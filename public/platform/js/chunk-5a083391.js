(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a083391","chunk-6b219d7c"],{"86f4":function(e,t,o){},"956e":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.formDataDecorate?o("div",[o("componentDesc",{attrs:{content:e.desc}}),o("div",{staticClass:"content"},[o("a-form-model",{attrs:{model:e.formDataDecorate,"label-col":e.labelCol,"wrapper-col":e.wrapperCol,labelAlign:"left"}},[o("div",[o("a-form-model-item",{attrs:{label:e.L("展示样式")}},[o("a-radio-group",{model:{value:e.formDataDecorate.show_merDetail,callback:function(t){e.$set(e.formDataDecorate,"show_merDetail",t)},expression:"formDataDecorate.show_merDetail"}},e._l(e.showMerDetail,(function(t){return o("a-radio",{key:t.value,attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),1)],1),o("a-form-model-item",{attrs:{label:e.L("公告")}},[o("a-input",{staticStyle:{resize:"none"},attrs:{placeholder:e.L("请输入"),autoSize:"",type:"textarea"},model:{value:e.formDataDecorate.notice,callback:function(t){e.$set(e.formDataDecorate,"notice",t)},expression:"formDataDecorate.notice"}})],1)],1),e.formDataDecorate.list&&e.formDataDecorate.list.length?o("div",{staticClass:"group-wrap"},[o("draggable",{attrs:{disabled:e.isDisabled},model:{value:e.formDataDecorate.list,callback:function(t){e.$set(e.formDataDecorate,"list",t)},expression:"formDataDecorate.list"}},e._l(e.formDataDecorate.list,(function(t,a){return o("div",{key:t.id,staticClass:"group-menu-wrap",on:{click:function(t){t.stopPropagation(),e.isDisabled=!1}}},[o("a-icon",{staticClass:"delIcon",attrs:{type:"close-circle"},on:{click:function(o){return e.goodsDelOpt(t,a)}}}),o("a-form-model-item",{attrs:{label:e.L("商品来源")}},[o("span",{staticClass:"group-name"},[e._v(e._s(t.name))])]),o("a-form-model-item",{attrs:{label:e.L("显示商品数量"),labelCol:{span:6},wrapperCol:{span:18}}},[o("a-radio-group",{model:{value:t.show_num_type,callback:function(o){e.$set(t,"show_num_type",o)},expression:"item.show_num_type"}},[o("a-radio",{attrs:{value:"1"}},[o("a-input-number",{attrs:{placeholder:e.L("自定义"),min:1,max:t.children.length},on:{mouseenter:function(t){e.isDisabled=!0},mouseleave:function(t){e.isDisabled=!1},click:function(t){e.isDisabled=!0}},model:{value:t.show_num,callback:function(o){e.$set(t,"show_num",o)},expression:"item.show_num"}})],1),o("a-radio",{attrs:{value:"2"}},[e._v(e._s(e.L("全部")))])],1)],1)],1)})),0)],1):e._e(),o("div",{staticClass:"mt-20 mb-20 padding-24"},[o("a-button",{attrs:{block:""},on:{click:function(t){return e.addBtn()}}},[o("a-icon",{attrs:{type:"plus"}}),e._v(e._s(e.L("添加商品分组"))+" ")],1)],1)])],1),o("a-modal",{attrs:{title:e.L("商品分组"),visible:e.visible,destroyOnClose:!0,width:"60%",cancelText:e.L("取消"),okText:e.L("确定")},on:{ok:e.handleOk,cancel:e.handleCancel}},[o("a-row",{staticClass:"mb-20",attrs:{type:"flex",justify:"space-between"}},[o("a-col",[o("a-button",{on:{click:function(t){return e.initGetList()}}},[e._v(" "+e._s(e.L("刷新"))+" ")])],1),o("a-col",{staticClass:"flex align-center"},[o("a-input",{attrs:{placeholder:e.L("搜索")},on:{change:e.inputChange,pressEnter:e.inputChange},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[o("a-icon",{attrs:{slot:"prefix",type:"search"},slot:"prefix"})],1)],1)],1),o("a-table",{attrs:{"row-selection":{selectedRowKeys:e.selectedRowKeys,getCheckboxProps:e.getCheckboxProps,onChange:e.onSelectChange},columns:e.columns,rowKey:"id",scroll:{y:442},pagination:e.pagination,childrenColumnName:null,"data-source":e.dataList}})],1)],1):e._e()},n=[],s=(o("d3b7"),o("159b"),o("d81d"),o("99af"),o("a434"),o("4de4"),o("498a"),o("a2f8")),i=o("9686"),c=o("b76a"),r=o.n(c),l={components:{componentDesc:s["default"],draggable:r.a},props:{formContent:{type:[String,Object],default:""}},data:function(){var e=this;return{desc:{title:"外卖菜单",desc:"单页面中外卖模块具有唯一性和永久置底性；选择商品来源后，左侧实时预览暂不支持显示其包含的商品数据。"},labelCol:{span:4},wrapperCol:{span:20},formDataDecorate:"",showMerDetail:[{value:"1",label:this.L("显示商家详情")},{value:"2",label:this.L("不显示商家详情")}],visible:!1,dataList:[],selectedRowKeys:[],columns:[{title:this.L("分组名称"),dataIndex:"name",key:"name",align:"left"}],keyword:"",pagination:{current:1,pageSize:10,total:0,"show-total":function(t){return!!t&&e.L("共 X1 条记录",{X1:t})},"show-size-changer":!0,"show-quick-jumper":!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange},dataListAll:[],isDisabled:!1}},watch:{formDataDecorate:{deep:!0,handler:function(e){this.$emit("updatePageInfo",e)}}},mounted:function(){if(this.formContent)for(var e in this.formContent)if("list"==e&&this.formContent[e]&&this.formContent[e].length){var t=this.formContent[e];t.forEach((function(e){void 0==e.show_num_type&&(e.show_num_type=-1==e.show_num?"2":"1")}))}this.formDataDecorate=this.formContent||""},methods:{addBtn:function(){var e=this.formDataDecorate.list||[];e.length&&(this.selectedRowKeys=e.map((function(e){return e.id}))),this.visible=!0,this.initGetList()},onPageChange:function(e,t){this.$set(this.pagination,"current",e),this.getList()},onPageSizeChange:function(e,t){this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",t),this.getList()},onSelectChange:function(e){"2"==this.formDataDecorate.goods_type&&e.length&&e.length>15?this.$message.error(this.L("最多添加15个商品分组")):this.selectedRowKeys=e},getCheckboxProps:function(e){return{props:{disabled:!e.children||e.children&&!e.children.length}}},initGetList:function(){this.keyword="",this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10),this.getList()},getList:function(){var e=this,t={source:this.$store.state.customPage.sourceInfo.source,source_id:this.$store.state.customPage.sourceInfo.source_id,keyword:this.keyword,page:this.pagination.current,pageSize:this.pagination.pageSize};this.request(i["a"].getShopGoodsGroup,t).then((function(t){if(e.dataList=t.list||[],e.$set(e.pagination,"total",parseInt(t.total)),e.dataListAll=e.dataListAll.concat(t.list)||[],e.dataListAll.length){var o={};e.dataListAll=e.dataListAll.reduce((function(e,t){return!o[t.id]&&(o[t.id]=e.push(t)),e}),[])}}))},goodsDelOpt:function(e,t){var o=this.formDataDecorate.list||[];o.length&&o.splice(t,1),this.selectedRowKeys&&this.selectedRowKeys.length&&(this.selectedRowKeys=this.selectedRowKeys.filter((function(t){return t!=e.id}))),this.$set(this.formDataDecorate,"list",o)},inputChange:function(){""===this.keyword.trim()&&0!=this.keyword||(this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10),this.getList())},handleOk:function(){var e=this,t=[];this.selectedRowKeys.length&&this.dataListAll.length&&this.selectedRowKeys.forEach((function(o){e.dataListAll.forEach((function(a){o==a.id&&(e.$set(a,"show_num","10"),e.$set(a,"show_num_type","1"),t.push(a))}))})),this.$set(this.formDataDecorate,"list",t),this.selectedRowKeys=[],this.dataListAll=[],this.visible=!1,console.log("this.formDataDecorate",this.formDataDecorate)},handleCancel:function(){this.visible=!1,this.selectedRowKeys=[],this.dataListAll=[],this.keyword=""},showNumTypeChange:function(){console.log("showNumTypeChange---formDataDecorate",this.formDataDecorate),this.$emit("updatePageInfo",this.formDataDecorate)}}},m=l,d=(o("b51b"),o("0c7c")),g=Object(d["a"])(m,a,n,!1,null,"2ffa2e5a",null);t["default"]=g.exports},9686:function(e,t,o){"use strict";var a={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList"};t["a"]=a},a2f8:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.content?o("div",{staticClass:"wrap",class:{borderNone:e.borderNone}},[o("div",{staticClass:"title"},[e._v(e._s(e.L(e.content.title)))]),o("div",{staticClass:"desc"},[e._v(e._s(e.L(e.content.desc)))])]):e._e()},n=[],s={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},i=s,c=(o("f0ca"),o("0c7c")),r=Object(c["a"])(i,a,n,!1,null,"9947987e",null);t["default"]=r.exports},b51b:function(e,t,o){"use strict";o("86f4")},e063:function(e,t,o){},f0ca:function(e,t,o){"use strict";o("e063")}}]);