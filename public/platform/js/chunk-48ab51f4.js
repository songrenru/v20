(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48ab51f4","chunk-8edfacdc","chunk-2d0b3786"],{2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var o=a("6b75");function s(t){if(Array.isArray(t))return Object(o["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var n=a("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return s(t)||i(t)||Object(n["a"])(t)||r()}},9686:function(t,e,a){"use strict";var o={getMicroPageList:"/common/common.DecoratePage/getMicroPageList",getpersonalDec:"/common/common.DecoratePage/getpersonalDec",delMicroPage:"/common/common.DecoratePage/delMicroPage",setHomePage:"/common/common.DecoratePage/setHomePage",addOrEditpersonalDec:"/common/common.DecoratePage/addOrEditpersonalDec",getNavBottomDec:"/common/common.DecoratePage/getNavBottomDec",addOrEditNavBottom:"/common/common.DecoratePage/addOrEditNavBottom",getSuspendedWindow:"/common/common.DecoratePage/getSuspendedWindow",addOrEditSuspendedWindow:"/common/common.DecoratePage/addOrEditSuspendedWindow",getIndexPage:"/common/common.DecoratePage/getIndexPage",getEditMicoPage:"/common/common.DecoratePage/getEditMicoPage",getCoupons:"/common/common.DecoratePage/getCoupons",getActInfo:"/common/common.DecoratePage/getActInfo",getMallActInfo:"/common/common.DecoratePage/getMallActInfo",getMallGoods:"/common/common.DecoratePage/getMallGoods",getMallGoodsGroup:"/common/common.DecoratePage/getMallGoodsGroup",getShopGoodsGroup:"/common/common.DecoratePage/getShopGoodsGroup",getShopGoods:"/common/common.DecoratePage/getShopGoods",addOrEditMicroPage:"/common/common.DecoratePage/addOrEditMicroPage",getMerchantStoreMsg:"/common/common.DecoratePage/getMerchantStoreMsg",getDiypageModel:"/common/platform.diypage/getDiypageModel",getDiypageDetail:"/common/platform.diypage/getDiypageDetail",getFeedCategoryList:"/common/platform.diypage/getFeedCategoryList",getSearchHotList:"/common/platform.diypage/getSearchHotList",saveDiypage:"/common/platform.diypage/saveDiypage",getMerchantCategoryChildList:"/common/platform.diypage/getMerchantCategoryChildList",getStoreList:"/common/common.DecoratePage/getStore"};e["a"]=o},a2f8:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.content?a("div",{staticClass:"wrap",class:{borderNone:t.borderNone}},[a("div",{staticClass:"title"},[t._v(t._s(t.L(t.content.title)))]),a("div",{staticClass:"desc"},[t._v(t._s(t.L(t.content.desc)))])]):t._e()},s=[],i={props:{content:{type:[String,Object],default:""},borderNone:{type:Boolean,default:!1}}},n=i,r=(a("f0ca"),a("2877")),l=Object(r["a"])(n,o,s,!1,null,"9947987e",null);e["default"]=l.exports},ad65:function(t,e,a){},d743:function(t,e,a){},d8cd:function(t,e,a){"use strict";a("ad65")},e094:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.formDataDecorate?a("div",{key:t.componentId,staticClass:"mallGoodsDecorateWrap"},[a("componentDesc",{attrs:{content:t.desc}}),a("div",[a("a-form-model",{attrs:{model:t.formDataDecorate,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,labelAlign:"left"}},[a("a-tabs",{on:{change:function(e){return t.initList(e,"goods_type")}},model:{value:t.formDataDecorate.goods_type,callback:function(e){t.$set(t.formDataDecorate,"goods_type",e)},expression:"formDataDecorate.goods_type"}},[a("a-tab-pane",{key:"1",attrs:{tab:t.L("商品")}}),a("a-tab-pane",{key:"2",attrs:{tab:t.L("商品分组")}})],1),"1"==t.formDataDecorate.goods_type?a("div",{staticClass:"content mt-20"},[a("a-form-model-item",{attrs:{label:t.L("添加商品")}},[a("a-row",[a("a-col",{staticClass:"text-right"},[a("a-radio-group",{on:{change:function(e){return t.initList(e,"goods_type_val")}},model:{value:t.formDataDecorate.goods_type_val,callback:function(e){t.$set(t.formDataDecorate,"goods_type_val",e)},expression:"formDataDecorate.goods_type_val"}},[a("a-radio",{attrs:{value:"1"}},[t._v(t._s(t.L("商品")))]),a("a-radio",{attrs:{value:"2"}},[t._v(t._s(t.L("商品分组")))])],1)],1)],1)],1),a("div",{staticClass:"add-goods-wrap mb-20"},["1"==t.formDataDecorate.goods_type_val?a("div",{staticClass:"flex flex-wrap"},[t._l(t.formDataDecorate.list,(function(e,o){return a("div",{key:e.goods_id,staticClass:"add-goods-btn flex justify-center align-center goods-list-item"},[a("img",{attrs:{src:e.image,alt:""}}),a("a-icon",{staticClass:"delIcon",attrs:{type:"close-circle"},on:{click:function(a){return t.goodsDelOpt(e,o)}}})],1)})),a("div",[a("div",{staticClass:"add-goods-btn flex justify-center align-center pointer cr-primary",on:{click:function(e){return t.addGoodsOpt()}}},[a("a-icon",{attrs:{type:"plus"}})],1),t.formDataDecorate.list&&t.formDataDecorate.list.length?t._e():a("div",{staticClass:"cr-red mt-10"},[t._v(" "+t._s(t.L("请添加商品"))+" ")])])],2):a("div",[!t.formDataDecorate.list||t.formDataDecorate.list&&!t.formDataDecorate.list.length?a("div",{staticClass:"mt-20 mb-20"},[a("a-button",{attrs:{block:""},on:{click:function(e){return t.addGoodsOpt()}}},[a("a-icon",{attrs:{type:"plus"}}),t._v(t._s(t.L("添加商品分组"))+" ")],1)],1):a("div",t._l(t.formDataDecorate.list,(function(e,o){return a("div",{key:e.id,staticClass:"flex justify-between goods-group"},[a("span",{staticClass:"flex-1 no-wrap"},[t._v(t._s(e.cat_name))]),a("div",[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.addGoodsOpt()}}},[a("a-icon",{staticClass:"ml-10",attrs:{type:"edit"}})],1),a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.goodsDelOpt(e,o)}}},[a("a-icon",{staticClass:"ml-10",attrs:{type:"delete"}})],1)])])})),0)])])],1):t._e(),"2"==t.formDataDecorate.goods_type?a("div",{staticClass:"content mt-20"},[a("a-form-model-item",{attrs:{label:t.L("添加分组")}},[a("span",{staticClass:"ant-form-explain"},[t._v(t._s(t.L("最多添加X1个商品分组",{X1:15})))])]),a("div",{staticClass:"add-goods-wrap mb-20"},[a("draggable",{attrs:{disabled:t.isDisabled},model:{value:t.formDataDecorate.list,callback:function(e){t.$set(t.formDataDecorate,"list",e)},expression:"formDataDecorate.list"}},t._l(t.formDataDecorate.list,(function(e,o){return a("div",{key:o,staticClass:"group-menu-wrap",on:{click:function(e){e.stopPropagation(),t.isDisabled=!1}}},[a("a-icon",{staticClass:"delIcon",attrs:{type:"close-circle"},on:{click:function(a){return t.goodsDelOpt(e,o)}}}),a("a-form-model-item",{attrs:{label:t.L("商品来源")}},[a("div",{staticClass:"flex justify-between"},[a("span",{staticClass:"flex-1 no-wrap"},[t._v(" "+t._s(e.cat_name)+" ")]),"all"!=e.id?a("div",{staticClass:"ml-10",on:{click:function(a){return t.goodsGroupEdit(o,e.id)}}},[a("a",{attrs:{href:"javascript:void(0);"}},[a("a-icon",{attrs:{type:"edit"}})],1)]):t._e()])]),a("a-form-model-item",{attrs:{label:t.L("菜单名称")}},[a("a-input",{on:{mouseenter:function(e){t.isDisabled=!0},mouseleave:function(e){t.isDisabled=!1},click:function(e){e.stopPropagation(),t.isDisabled=!0}},model:{value:e.cat_name,callback:function(a){t.$set(e,"cat_name",a)},expression:"item.cat_name"}})],1),a("a-form-model-item",{attrs:{label:t.L("显示个数")}},[a("a-radio-group",{on:{change:function(a){return t.showNumChange(a,e,o)}},model:{value:e.show_num,callback:function(a){t.$set(e,"show_num",a)},expression:"item.show_num"}},[a("a-radio",{attrs:{value:"1"}},[2==e.show_num?a("a-input-number",{attrs:{placeholder:t.L("自定义"),disabled:""}}):a("a-input-number",{attrs:{placeholder:t.L("自定义"),min:1,max:e.children.length},on:{change:function(a){return t.showNumValChange(a,e,o)},mouseenter:function(e){t.isDisabled=!0},mouseleave:function(e){t.isDisabled=!1},click:function(e){e.stopPropagation(),t.isDisabled=!0}},model:{value:e.show_num_val,callback:function(a){t.$set(e,"show_num_val",a)},expression:"item.show_num_val"}})],1),a("a-radio",{attrs:{value:"2"}},[t._v(t._s(t.L("全部")))])],1)],1)],1)})),0),!t.formDataDecorate.list||t.formDataDecorate.list&&t.formDataDecorate.list.length<15?a("div",{staticClass:"mt-20 mb-20"},[a("a-button",{attrs:{block:""},on:{click:function(e){return t.addGoodsOpt()}}},[a("a-icon",{attrs:{type:"plus"}}),t._v(t._s(t.L("添加商品分组"))+" ")],1)],1):t._e()],1)],1):t._e(),a("a-divider"),"2"==t.formDataDecorate.goods_type?a("div",{staticClass:"content"},[a("a-form-model-item",{attrs:{label:t.L("展示模板")}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(" "+t._s(t.getLabel(t.goodsClassifyTypeOptions,t.formDataDecorate.goods_classify_type))+" ")]),a("div",[a("a-radio-group",{attrs:{"button-style":"solid"},on:{change:t.goodsClassifyTypeChange},model:{value:t.formDataDecorate.goods_classify_type,callback:function(e){t.$set(t.formDataDecorate,"goods_classify_type",e)},expression:"formDataDecorate.goods_classify_type"}},t._l(t.goodsClassifyTypeOptions,(function(t){return a("a-radio-button",{key:t.value,attrs:{value:t.value}},[a("IconFont",{staticClass:"itemIcon",class:"2"==t.value?"rotate-icon":"",attrs:{type:t.icon}})],1)})),1)],1)])]),"1"==t.formDataDecorate.goods_classify_type?a("a-form-model-item",{attrs:{label:t.L("全部分组")}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(" "+t._s("1"==t.formDataDecorate.show_allClassify?t.L("显示"):t.L("不显示"))+" ")]),a("a-checkbox",{attrs:{checked:"1"==t.formDataDecorate.show_allClassify},on:{change:t.showAllClassifyChange}})],1)]):t._e(),"1"==t.formDataDecorate.goods_classify_type?a("a-form-model-item",{attrs:{label:t.L("菜单样式")}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(" "+t._s(t.getLabel(t.goodsClassifyStyleOptions,t.formDataDecorate.goods_classify_style))+" ")]),a("div",[a("a-radio-group",{attrs:{"button-style":"solid"},model:{value:t.formDataDecorate.goods_classify_style,callback:function(e){t.$set(t.formDataDecorate,"goods_classify_style",e)},expression:"formDataDecorate.goods_classify_style"}},t._l(t.goodsClassifyStyleOptions,(function(t){return a("a-radio-button",{key:t.value,attrs:{value:t.value}},[a("IconFont",{staticClass:"itemIcon",attrs:{type:t.icon}})],1)})),1)],1)])]):t._e()],1):t._e(),"2"==t.formDataDecorate.goods_type?a("a-divider"):t._e(),a("div",{staticClass:"content"},["1"==t.formDataDecorate.goods_classify_type?a("a-form-model-item",{attrs:{label:t.L("列表样式")}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(t._s(t.getLabel(t.$store.state.customPage.styleTypeOptions,t.formDataDecorate.style_type)))]),a("div",[a("a-radio-group",{attrs:{"button-style":"solid"},on:{change:t.styleTypechange},model:{value:t.formDataDecorate.style_type,callback:function(e){t.$set(t.formDataDecorate,"style_type",e)},expression:"formDataDecorate.style_type"}},t._l(t.$store.state.customPage.styleTypeOptions,(function(t){return a("a-radio-button",{key:t.value,attrs:{value:t.value}},[a("IconFont",{staticClass:"itemIcon",attrs:{type:t.icon}})],1)})),1)],1)])]):t._e(),"2"!=t.formDataDecorate.goods_classify_type?a("a-form-model-item",{attrs:{label:t.L("商品样式")}},[a("a-row",[a("a-col",{staticClass:"text-right"},[a("a-radio-group",{attrs:{"button-style":"solid"},model:{value:t.formDataDecorate.goods_style,callback:function(e){t.$set(t.formDataDecorate,"goods_style",e)},expression:"formDataDecorate.goods_style"}},t._l(t.goodsStyleOptions,(function(e){return a("a-radio-button",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1)],1)],1)],1):t._e(),a("a-form-model-item",{attrs:{label:t.L("商品倒角")}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(t._s(t.getLabel(t.goodsRadiusOptions,t.formDataDecorate.goods_radius)))]),a("div",[a("a-radio-group",{attrs:{"button-style":"solid"},model:{value:t.formDataDecorate.goods_radius,callback:function(e){t.$set(t.formDataDecorate,"goods_radius",e)},expression:"formDataDecorate.goods_radius"}},t._l(t.goodsRadiusOptions,(function(t){return a("a-radio-button",{key:t.value,attrs:{value:t.value}},[a("IconFont",{staticClass:"itemIcon",attrs:{type:t.icon}})],1)})),1)],1)])]),a("a-form-model-item",{attrs:{label:t.L("文本样式")}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(t._s(t.getLabel(t.fontWeightOptions,t.formDataDecorate.font_weight)))]),a("div",[a("a-radio-group",{attrs:{"button-style":"solid"},model:{value:t.formDataDecorate.font_weight,callback:function(e){t.$set(t.formDataDecorate,"font_weight",e)},expression:"formDataDecorate.font_weight"}},t._l(t.fontWeightOptions,(function(t){return a("a-radio-button",{key:t.value,attrs:{value:t.value}},[a("IconFont",{staticClass:"itemIcon",attrs:{type:t.icon}})],1)})),1)],1)])]),a("a-form-model-item",{attrs:{label:t.L("文本对齐")}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(t._s(t.getLabel(t.textAlignOptions,t.formDataDecorate.text_align)))]),a("div",[a("a-radio-group",{attrs:{"button-style":"solid"},model:{value:t.formDataDecorate.text_align,callback:function(e){t.$set(t.formDataDecorate,"text_align",e)},expression:"formDataDecorate.text_align"}},t._l(t.textAlignOptions,(function(e){return a("a-radio-button",{key:e.value,attrs:{value:e.value,disabled:"4"==t.formDataDecorate.style_type&&"2"==t.formDataDecorate.goods_classify_type&&"center"==e.value}},[a("IconFont",{staticClass:"itemIcon",attrs:{type:e.icon}})],1)})),1)],1)])]),a("a-form-model-item",{attrs:{label:t.L("页面边距")}},[a("a-row",{attrs:{type:"flex"}},[a("a-col",{attrs:{span:17}},[a("a-slider",{attrs:{max:30,min:0},model:{value:t.formDataDecorate.page_distance,callback:function(e){t.$set(t.formDataDecorate,"page_distance",e)},expression:"formDataDecorate.page_distance"}})],1),a("a-col",{attrs:{span:6,offset:1}},[a("a-input-number",{attrs:{min:0,max:30},model:{value:t.formDataDecorate.page_distance,callback:function(e){t.$set(t.formDataDecorate,"page_distance",e)},expression:"formDataDecorate.page_distance"}})],1)],1)],1),a("a-form-model-item",{attrs:{label:t.L("商品边距")}},[a("a-row",{attrs:{type:"flex"}},[a("a-col",{attrs:{span:17}},[a("a-slider",{attrs:{max:30,min:0},model:{value:t.formDataDecorate.goods_distance,callback:function(e){t.$set(t.formDataDecorate,"goods_distance",e)},expression:"formDataDecorate.goods_distance"}})],1),a("a-col",{attrs:{span:6,offset:1}},[a("a-input-number",{attrs:{min:0,max:30},model:{value:t.formDataDecorate.goods_distance,callback:function(e){t.$set(t.formDataDecorate,"goods_distance",e)},expression:"formDataDecorate.goods_distance"}})],1)],1)],1),t.formDataDecorate.show_filed&&t.formDataDecorate.show_filed.length?a("a-row",t._l(t.formDataDecorate.show_filed,(function(e,o){return a("a-col",{key:e.value},[e.is_show?a("a-form-model-item",{attrs:{label:t.L(e.label)}},[a("div",{staticClass:"flex align-center justify-between"},[a("span",[t._v(t._s(1==e.is_checked?t.L("显示"):t.L("不显示")))]),a("a-checkbox",{attrs:{checked:1==e.is_checked,disabled:"2"==t.formDataDecorate.goods_classify_type&&"goods_name"==e.value},on:{change:function(e){return t.showFiledChange(e,o)}}})],1),"buy_btn"==e.value&&e.is_checked?a("div",{staticClass:"buy-btn"},[a("a-form-model-item",[a("a-row",[a("a-col",[a("a-radio-group",{model:{value:t.formDataDecorate.buyBtn_style,callback:function(e){t.$set(t.formDataDecorate,"buyBtn_style",e)},expression:"formDataDecorate.buyBtn_style"}},t._l(t.buyBtnStyleOptions,(function(e){return a("a-radio",{key:e.value,attrs:{value:e.value,disabled:"5"==t.formDataDecorate.style_type&&("3"==e.value||"4"==e.value)}},[t._v(" "+t._s(e.label)+" ")])})),1)],1)],1)],1)],1):t._e(),"goods_badge"==e.value&&e.is_checked?a("div",[a("a-form-model-item",[a("a-row",[a("a-col",[a("a-radio-group",{model:{value:t.formDataDecorate.goodsBadge_style,callback:function(e){t.$set(t.formDataDecorate,"goodsBadge_style",e)},expression:"formDataDecorate.goodsBadge_style"}},t._l(t.goodsBadgeOptions,(function(e){return a("a-radio",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),"5"==t.formDataDecorate.goodsBadge_style?a("a-col",[a("a-upload",{attrs:{name:"reply_pic",action:t.$store.state.customPage.uploadAction,"show-upload-list":!1,data:t.uploadData},on:{change:function(e){return t.handleUploadChange(e,"goodsBadge_style_val")}}},[a("div",{staticClass:"upload-wrap"},[t.formDataDecorate.goodsBadge_style_val?a("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.formDataDecorate.goodsBadge_style_val,alt:""}}):a("div",{staticClass:"flex align-center justify-center flex-column",staticStyle:{height:"100%"}},[a("a-icon",{attrs:{type:"plus"}}),a("span",[t._v(t._s(t.L("添加图片")))])],1)])]),a("div",[t.formDataDecorate.goodsBadge_style_val?t._e():a("span",{staticClass:"cr-red mr-10"},[t._v(t._s(t.L("请添加图片")))]),a("span",{staticClass:"ant-form-explain"},[t._v(" "+t._s(t.L("推荐使用100x100像素的 .png 图片"))+" ")])])],1):t._e()],1)],1)],1):t._e()]):t._e()],1)})),1):t._e()],1)],1)],1),a("a-modal",{attrs:{title:1==t.formDataDecorate.goods_type_val?t.L("商品列表"):t.L("商品分组"),visible:t.visible,destroyOnClose:!0,width:"60%",cancelText:t.L("取消"),okText:t.L("确定")},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-row",{staticClass:"mb-20",attrs:{type:"flex",justify:"space-between"}},[a("a-col",[a("a-button",{on:{click:function(e){return t.initGetList(!0)}}},[t._v(" "+t._s(t.L("刷新"))+" ")])],1),a("a-col",{staticClass:"flex align-center"},[a("a-input",{attrs:{placeholder:t.L("搜索")},on:{change:t.inputChange,pressEnter:t.inputChange},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[a("a-icon",{attrs:{slot:"prefix",type:"search"},slot:"prefix"})],1)],1)],1),a("a-table",{attrs:{"row-selection":{type:t.rowSelectionType,selectedRowKeys:t.selectedRowKeys,getCheckboxProps:t.getCheckboxProps,onChange:t.onSelectChange},columns:t.columns,rowKey:"id",scroll:{y:442},pagination:t.pagination,childrenColumnName:null,"data-source":t.dataList}})],1)],1):t._e()},s=[],i=a("2909"),n=(a("d3b7"),a("159b"),a("d81d"),a("a434"),a("b0c0"),a("4de4"),a("498a"),a("a9e3"),a("fb6a"),a("99af"),a("a2f8")),r=a("5bb2"),l=a("9686"),c=a("b76a"),d=a.n(c),m={components:{componentDesc:n["default"],IconFont:r["a"],draggable:d.a},props:{formContent:{type:[String,Object],default:""}},data:function(){var t=this;return{desc:{title:"商品"},labelCol:{span:4},wrapperCol:{span:20},formDataDecorate:"",dataList:[],visible:!1,rowSelectionType:"checkbox",pagination:{current:1,pageSize:10,total:0,"show-total":function(e){return!!e&&t.L("共 X1 条记录",{X1:e})},"show-size-changer":!0,"show-quick-jumper":!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange},selectedRowKeys:[],keyword:"",buyBtnStyleOptions:[{value:"1",label:this.L("样式一")},{value:"2",label:this.L("样式二")},{value:"3",label:this.L("样式三")},{value:"4",label:this.L("样式四")}],goodsBadgeOptions:[{value:"1",label:this.L("新品")},{value:"2",label:this.L("热卖")},{value:"3",label:"NEW"},{value:"4",label:"HOT"},{value:"5",label:this.L("自定义")}],goodsStyleOptions:[{value:"1",label:this.L("无边白底")},{value:"2",label:this.L("卡片投影")},{value:"3",label:this.L("描边白底")}],goodsRadiusOptions:[{value:"1",label:this.L("圆角"),icon:"iconCustomPageBorderRadius"},{value:"2",label:this.L("直角"),icon:"iconCustomPageRightAngle"}],fontWeightOptions:[{value:"normal",label:this.L("常规体"),icon:"iconCustomPageFontNormal"},{value:"bold",label:this.L("加粗体"),icon:"iconCustomPageFontBold"}],textAlignOptions:[{value:"left",label:this.L("左对齐"),icon:"iconCustomPageTextLeft"},{value:"center",label:this.L("居中对齐"),icon:"iconCustomPageTextCenter"}],goodsClassifyTypeOptions:[{value:"1",label:this.L("顶部菜单"),icon:"iconCustomPageMallGoodsTopMenu"},{value:"2",label:this.L("侧边菜单"),icon:"iconCustomPageMallGoodsTopMenu"}],goodsClassifyStyleOptions:[{value:"1",label:this.L("样式一"),icon:"iconCustomPageGoodsClassifyStyle1"},{value:"2",label:this.L("样式二"),icon:"iconCustomPageGoodsClassifyStyle2"},{value:"3",label:this.L("样式三"),icon:"iconCustomPageGoodsClassifyStyle3"}],groupIndex:-1,dataListAll:[],isDisabled:!1,isEditGoodsGroup:!1}},watch:{formDataDecorate:{deep:!0,handler:function(t){this.$emit("updatePageInfo",t)}}},computed:{sourceInfo:function(){return this.$store.state.customPage.sourceInfo},componentId:function(){return this.$store.state.customPage.componentId},uploadData:function(){return{upload_dir:"/decorate/images",source:this.sourceInfo.source,source_id:this.sourceInfo.source_id,is_decorate:1}},columns:function(){return"1"==this.formDataDecorate.goods_type&&"1"==this.formDataDecorate.goods_type_val?[{title:this.L("商品名称"),dataIndex:"goods_name",key:"goods_name",align:"center"},{title:this.L("商家名称"),dataIndex:"mer_name",key:"mer_name",align:"center"},{title:this.L("店铺名称"),dataIndex:"store_name",key:"store_name",align:"center"},{title:this.L("最后修改时间"),dataIndex:"update_time",key:"update_time",align:"center"}]:"1"==this.formDataDecorate.goods_type&&"2"==this.formDataDecorate.goods_type_val||"2"==this.formDataDecorate.goods_type?[{title:this.L("分组名称"),dataIndex:"cat_name",key:"cat_name",align:"left"},{title:this.L("商家"),dataIndex:"mer_name",key:"mer_name",align:"left"},{title:this.L("店铺名称"),dataIndex:"store_name",key:"store_name",align:"center"}]:void 0}},mounted:function(){if(this.formContent)for(var t in this.formDataDecorate={},this.formContent)this.$set(this.formDataDecorate,t,this.formContent[t]);this.$store.dispatch("updateStyleTypeOptions")},methods:{getLabel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a="";return t.length&&t.forEach((function(t){t.value==e&&(a=t.label)})),a},styleTypechange:function(t){this.$set(this.formDataDecorate,"style_type",t.target.value),this.$store.dispatch("updatePageScroll",!0)},showFiledChange:function(t,e){this.$set(this.formDataDecorate["show_filed"][e],"is_checked",t.target.checked)},goodsClassifyTypeChange:function(t){var e=this.formDataDecorate.show_filed||[];if(e.length&&(e=e.map((function(e){return"2"==t.target.value&&"goods_badge"==e.value?(e.is_show=!1,e.is_checked=!1):("goods_name"==e.value&&(e.is_checked=!0),e.is_show=!0),e})),this.$set(this.formDataDecorate,"show_filed",e)),this.$set(this.formDataDecorate,"goods_classify_type",t.target.value),"2"==t.target.value){this.$set(this.formDataDecorate,"style_type","4"),this.$set(this.formDataDecorate,"goods_style","1"),this.$set(this.formDataDecorate,"show_allClassify","2"),this.$set(this.formDataDecorate,"goodsBadge_style","1");var a=this.formDataDecorate.list||[];a.forEach((function(t,e){"all"==t.id&&a.splice(e,1)})),this.$set(this.formDataDecorate,"list",a)}else this.$set(this.formDataDecorate,"style_type","1")},onPageChange:function(t,e){this.$set(this.pagination,"current",t)},onPageSizeChange:function(t,e){this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",e)},onSelectChange:function(t){"2"==this.formDataDecorate.goods_type&&t.length&&t.length>15?this.$message.error(this.L("最多添加15个商品分组")):this.selectedRowKeys=t},getCheckboxProps:function(t){return{props:{disabled:this.checkDisabled(t)}}},checkDisabled:function(t){var e=this,a=!1,o=this.formDataDecorate,s=o.goods_type,i=void 0===s?"1":s,n=o.goods_type_val,r=void 0===n?"2":n,l=o.list,c=void 0===l?[]:l;return("1"!=i||"2"!=r)&&"2"!=i||t.children&&(!t.children||t.children.length)||(a=!0),this.isEditGoodsGroup&&this.selectedRowKeys&&this.selectedRowKeys.length&&c.length&&c.forEach((function(o){o.id==t.id&&t.id!=e.selectedRowKeys[0]&&(a=!0)})),a},initList:function(t,e){"goods_type"==e?(this.$set(this.formDataDecorate,"goods_type",t),this.$set(this.formDataDecorate,"goods_classify_type","1"),this.$set(this.formDataDecorate,"goods_type_val","1")):"goods_type_val"==e&&this.$set(this.formDataDecorate,"goods_type_val",t.target.value),this.$set(this.formDataDecorate,"list",[]),"2"==this.formDataDecorate.goods_type&&(this.rowSelectionType="checkbox"),this.$set(this.formDataDecorate,"goods_classify_type","1"),this.$set(this.formDataDecorate,"show_allClassify","2"),this.$set(this.formDataDecorate,"style_type","1"),this.$set(this.formDataDecorate,"goods_style","1"),this.$set(this.formDataDecorate,"goods_radius","1"),this.$set(this.formDataDecorate,"font_weight","normal"),this.$set(this.formDataDecorate,"text_align","left"),this.$set(this.formDataDecorate,"goodsBadge_style","1"),this.$set(this.formDataDecorate,"buyBtn_style","1"),this.$set(this.formDataDecorate,"goodsBadge_style_val",""),this.$set(this.formDataDecorate,"goods_classify_style","1");var a=this.formDataDecorate.show_filed||[];a.length&&(a=a.map((function(t){return t.is_checked=!0,t.is_show=!0,t})),this.$set(this.formDataDecorate,"show_filed",a))},addBtn:function(){this.visible=!0,this.initGetList()},initGetList:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.keyword="",this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10),this.getList(t)},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a={source:this.sourceInfo.source,source_id:this.sourceInfo.source_id,keyword:this.keyword};"mallGoods"==this.componentId?this.$set(a,"hd_type",this.formDataDecorate.hd_type):a.hd_type&&this.$delete(a,"hd_type");var o="getMallGoods";"2"==this.formDataDecorate.goods_type_val||"2"==this.formDataDecorate.goods_type?"mallGoods"==this.componentId?o="getMallGoodsGroup":"shopGoods"==this.componentId&&(o="getShopGoodsGroup"):"shopGoods"==this.componentId&&(o="getShopGoods"),this.request(l["a"][o],a).then((function(a){"1"==t.formDataDecorate.goods_type&&"1"==t.formDataDecorate.goods_type_val&&a.list&&(a.list=a.list.map((function(e){return e.id=e.goods_id,"shopGoods"==t.componentId&&(e.update_time=e.last_time),e}))),("1"==t.formDataDecorate.goods_type&&"2"==t.formDataDecorate.goods_type_val||"2"==t.formDataDecorate.goods_type)&&a.list&&(a.list=a.list.map((function(e){return"mallGoods"==t.componentId&&(e.id=e.cat_id),"shopGoods"==t.componentId&&(e.cat_name=e.name),e}))),t.dataList=a.list||[],t.$set(t.pagination,"total",parseInt(a.total)),(e||!t.dataListAll.length)&&a.list&&a.list.length&&(t.dataListAll=a.list)}))},addGoodsOpt:function(){var t=this.formDataDecorate.list||[];t.length&&(this.selectedRowKeys=t.map((function(t){return t.id}))),this.visible=!0,"1"==this.formDataDecorate.goods_type?"1"==this.formDataDecorate.goods_type_val?this.rowSelectionType="checkbox":"2"==this.formDataDecorate.goods_type_val&&(this.rowSelectionType="radio"):"2"==this.formDataDecorate.goods_type&&(this.rowSelectionType="checkbox"),this.initGetList()},goodsDelOpt:function(t,e){var a=this.formDataDecorate.list||[];a.length&&a.splice(e,1),this.selectedRowKeys&&this.selectedRowKeys.length&&(this.selectedRowKeys=this.selectedRowKeys.filter((function(e){return e!=t.id}))),"all"==t.id&&this.$set(this.formDataDecorate,"show_allClassify","2"),this.$set(this.formDataDecorate,"list",a)},goodsGroupEdit:function(t,e){this.groupIndex=t,this.rowSelectionType="radio",this.selectedRowKeys=[e],this.visible=!0,this.isEditGoodsGroup=!0,this.initGetList()},inputChange:function(){""===this.keyword.trim()&&0!=this.keyword||(this.$set(this.pagination,"current",1),this.$set(this.pagination,"pageSize",10),this.getList())},handleOk:function(){var t=this;if(!this.dataList.length||this.selectedRowKeys.length){var e=[];if(this.selectedRowKeys.length&&this.dataListAll.length){var a=this.formDataDecorate,o=a.goods_type,s=void 0===o?"1":o,i=a.goods_type_val,n=void 0===i?"1":i;this.selectedRowKeys.forEach((function(a){t.dataListAll.forEach((function(o){a==o.id&&(("2"==s||"1"==s&&"2"==n)&&(t.$set(o,"cat_name",o.cat_name),t.$set(o,"show_num","1"),t.$set(o,"show_num_val",6),o.children&&o.children.length&&(o.children=o.children.map((function(t,e){return"1"==o.show_num&&o.show_num_val&&e<Number(o.show_num_val)?t.show=!0:t.show=!1,t})),t.$set(o,"children",o.children))),"2"==s&&-1!=t.groupIndex?(e=t.formDataDecorate.list||[],e.length&&t.$set(e,t.groupIndex,o)):e.push(o))}))}))}this.$set(this.formDataDecorate,"list",e),this.handleCancel()}else this.$message.error(this.L("请至少选择一个选项"))},handleCancel:function(){this.visible=!1,this.selectedRowKeys=[],this.dataListAll=[],this.keyword="",this.groupIndex=-1,this.isEditGoodsGroup=!1},handleUploadChange:function(t,e){var a=this,o=Object(i["a"])(t.fileList);o=o.slice(-1),o=o.map((function(t){if("done"===t.status&&"1000"==t.response.status){var o=t.response.data;a.$set(a.formDataDecorate,e,o)}return t})),"done"===t.file.status||"error"===t.file.status&&this.$message.error(this.L("X1上传失败.",{X1:t.file.name}))},showNumValChange:function(t,e,a){var o=this,s=Number(t),i=this.formDataDecorate.list||[];i.length&&(i=i.map((function(t){return t.children&&t.children.length&&("all"!=t.id&&t.id==e.id?t.children=t.children.map((function(t,a){return"2"==e.show_num?t.show=!0:t.show=!!(s&&a<s),t})):"all"==t.id&&e.id==t.id&&(t.children=JSON.parse(JSON.stringify(o.getShowGoods(o.formDataDecorate.list))),e.id==t.id&&"1"==e.show_num&&(t.children=t.children.map((function(t,e){return t.show=!!(s&&e<s),t}))))),t}))),"all"!=e.id&&"1"==this.formDataDecorate.show_allClassify&&(i=i.map((function(t){return"all"==t.id&&o.$set(t,"children",o.getShowGoods(i)),t}))),this.$set(this.formDataDecorate,"list",i)},showNumChange:function(t,e,a){"2"==t.target.value?this.showNumValChange("",e,a):this.showNumValChange(e.show_num_val,e,a)},showAllClassifyChange:function(t){this.$set(this.formDataDecorate,"show_allClassify",t.target.checked?"1":"2");var e=this.formDataDecorate.list||[],a={id:"all",cat_name:this.L("全部"),children:[],show_num:"2",show_num_val:"6"};"1"==this.formDataDecorate.show_allClassify&&e.length?(a.children=a.children.concat(this.getShowGoods(this.formDataDecorate.list)),e.splice(0,0,a)):e.forEach((function(t,a){"all"==t.id&&e.splice(a,1)})),this.$set(this.formDataDecorate,"list",e)},handleAllClassify:function(){var t=this,e=this.formDataDecorate,a=e.list,o=void 0===a?[]:a,s=e.goods_type,i=void 0===s?"1":s,n=e.goods_type_val,r=void 0===n?"1":n,l=e.goods_classify_type,c=void 0===l?"1":l,d=e.show_allClassify,m=void 0===d?"2":d;"1"==i&&"1"==r&&o.length&&"1"==c&&"1"==m&&(o=o.map((function(e){"all"==e.id&&"2"==e.show_num&&(e.children=t.getShowGoods(t.formDataDecorate.list))})))},getShowGoods:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[];return t.length&&t.forEach((function(t){"all"!=t.id&&t.children&&t.children.length&&t.children.forEach((function(t){t.show&&e.push(t)}))})),e}}},u=m,h=(a("d8cd"),a("2877")),f=Object(h["a"])(u,o,s,!1,null,"37de340e",null);e["default"]=f.exports},f0ca:function(t,e,a){"use strict";a("d743")}}]);