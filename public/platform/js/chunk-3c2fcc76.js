(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c2fcc76","chunk-d1be9e14","chunk-2d0b3786"],{"0085":function(t,e,i){"use strict";i("6310")},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var s=i("6b75");function o(t){if(Array.isArray(t))return Object(s["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var n=i("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return o(t)||a(t)||Object(n["a"])(t)||r()}},"474a":function(t,e,i){"use strict";var s={getShopSeckillIndex:"/common/platform.viewpage.ShopSeckill/getDefaultInfo",getCategoryDetail:"/common/platform.viewpage.ShopSeckill/getCategoryDetail",editCategory:"/common/platform.viewpage.ShopSeckill/editCategory",getCategoryList:"/common/platform.viewpage.ShopSeckill/getCategoryList",delCategory:"/common/platform.viewpage.ShopSeckill/delCategory",getCategoryGoodsList:"/common/platform.viewpage.ShopSeckill/getCategoryGoodsList",editCategoryGoodsSort:"/common/platform.viewpage.ShopSeckill/editCategoryGoodsSort",delCategoryGoods:"/common/platform.viewpage.ShopSeckill/delCategoryGoods",addCategoryGoods:"/common/platform.viewpage.ShopSeckill/addCategoryGoods"};e["a"]=s},5067:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:640,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("div",[i("a-spin",{attrs:{spinning:t.confirmLoading}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",{attrs:{label:"分类名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:t.detail.name,rules:[{required:!0,message:"请输入分类名称！"}]}],expression:"[\n              'name',\n              { initialValue: detail.name, rules: [{ required: true, message: '请输入分类名称！' }] },\n            ]"}],attrs:{disabled:1==t.detail.cat_id}})],1),i("a-form-item",{attrs:{label:"覆盖城市",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[1!=t.detail.cat_id?i("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["city",{initialValue:t.selectCityList,rules:[{required:!0,message:"请选择覆盖城市！"}]}],expression:"[\n              'city',\n              { initialValue: selectCityList, rules: [{ required: true, message: '请选择覆盖城市！' }] },\n            ]"}],staticStyle:{width:"100%"},attrs:{"tree-data":t.areaList,treeCheckStrictly:!0,"tree-checkable":"","show-checked-strategy":t.SHOW_PARENT,"search-placeholder":"请选择城市",dropdownStyle:{maxHeight:"200px"}},model:{value:t.selectCityList,callback:function(e){t.selectCityList=e},expression:"selectCityList"}}):t._e(),1==t.detail.cat_id?i("label",[t._v("全国")]):t._e()],1),i("a-form-item",{attrs:{label:"排序值",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[1!=t.detail.cat_id?i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort,rules:[{required:!0,message:"请输入排序值！"}]}],expression:"[\n              'sort',\n              { initialValue: detail.sort, rules: [{ required: true, message: '请输入排序值！' }] },\n            ]"}],staticStyle:{width:"200px"}}):t._e(),1==t.detail.cat_id?i("label",[t._v("默认展示第一排")]):t._e()],1),i("a-form-item",{attrs:{label:"状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==t.detail.status,valuePropName:"checked"}],expression:"['status', { initialValue: detail.status == 1 ? true : false, valuePropName: 'checked' }]"}],attrs:{"checked-children":"开启","un-checked-children":"关闭"}})],1)],1)],1)],1)])},o=[],a=(i("98a7"),i("7bec")),n=(i("99af"),i("474a")),r=i("b59a"),c=i("7a6b"),l=i("7b3f"),d=a["a"].SHOW_PARENT,u={components:{CustomTooltip:c["a"]},data:function(){return{title:"新建分类",visible:!1,labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},confirmLoading:!1,uploadImg:"/v20/public/index.php"+l["a"].uploadImg+"?upload_dir=/group/group_combine",form:this.$form.createForm(this),shareImageFileList:[],headers:{authorization:"authorization-text"},detail:{cat_id:0,name:""},areaList:[],selectCityList:[],SHOW_PARENT:d}},mounted:function(){},methods:{add:function(){this.visible=!0,this.id="0",this.detail={cat_id:0,name:"",sort:0},this.title="新建分类",this.selectCityList=[],this.getSelectProvinceAndCity()},edit:function(t){this.visible=!0,this.cat_id=t,this.selectCityList=[],this.getSelectProvinceAndCity(),this.getEditInfo(),this.cat_id>0?this.title="编辑分类":this.title="新建分类"},getEditInfo:function(){var t=this;this.request(n["a"].getCategoryDetail,{cat_id:this.cat_id}).then((function(e){t.detail=e,t.selectCityList=e.city_list}))},getSelectProvinceAndCity:function(){var t=this;this.request(r["a"].getSelectProvinceAndCity,{cat_id:this.cat_id}).then((function(e){t.areaList=[{title:"全部",value:"all",key:"all"}],t.areaList=t.areaList.concat(e)}))},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,i){if(e)t.confirmLoading=!1;else{if(i.cat_id=t.cat_id,i.city_list=t.selectCityList,0==t.selectCityList.length&&1!=t.detail.cat_id)return t.$message.error("请选择覆盖城市"),void(t.confirmLoading=!1);t.request(n["a"].editCategory,i).then((function(e){t.cat_id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("handleUpdate",i)}),1500)})).catch((function(e){t.confirmLoading=!1}))}}))},handleCancel:function(){this.visible=!1,this.cat_id="0",this.form=this.$form.createForm(this)}}},h=u,m=i("2877"),p=Object(m["a"])(h,s,o,!1,null,null,null);e["default"]=p.exports},6310:function(t,e,i){},"7b3f":function(t,e,i){"use strict";var s={uploadImg:"/common/common.UploadFile/uploadImg"};e["a"]=s},"8c74":function(t,e,i){"use strict";i("9fc5")},9060:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"components-layout-demo-basic"}},[i("a-card",{attrs:{bordered:!1}},[i("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px"}},[i("div",[t._v("只可选择进行中的限时优惠商品，如果商品限时优惠已过期则不展示在前端")]),i("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[i("div",{staticStyle:{"margin-right":"20px"}},[i("a-button",{attrs:{type:"primary"},on:{click:t.selectGoodsClick}},[i("a-icon",{attrs:{type:"plus"}}),t._v("关联商品 ")],1),i("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(e){return t.deleteGoods()},cancel:t.cancel}},[t.selectedGoodsDetailList.length?i("a-button",{staticStyle:{"margin-left":"20px"}},[t._v("删除")]):t._e()],1)],1),i("div",[i("a-input-search",{staticStyle:{width:"200px"},attrs:{placeholder:"输入商品/商家/店铺名称"},on:{search:t.onSearch,change:t.onSearchChange},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1)])]),i("a-table",{attrs:{columns:t.columns,"data-source":t.selectedGoodsDetailList,pagination:t.pagination,rowKey:"id","row-selection":{selectedRowKeys:t.selectedGoodsList,onChange:t.onSelectChange},scroll:{y:this.clientHeight-330},loading:t.loading},on:{change:t.tableChange},scopedSlots:t._u([{key:"goods_count",fn:function(e,s){return i("router-link",{attrs:{to:{path:"/common/platform.viewpage/ShopSeckillCategoryGoods",query:{cat_id:s.cat_id}}}},[t._v(" "+t._s(e)+"个 "),i("a-button",[t._v("去管理")])],1)}},{key:"stock",fn:function(e,s){return i("span",{},[s.is_spec?i("div",[t._v("多规格")]):t._e(),s.is_spec?t._e():i("div",[t._v(t._s("-1"==e?"无限":e))])])}},{key:"end_date",fn:function(e,s){return i("span",{},[t._v(" "+t._s(e)+" "+t._s(s.end_time)+" "),s.over_time?i("span",{staticClass:"red"},[t._v("已过期")]):t._e()])}},{key:"price",fn:function(e,s){return i("span",{},[s.is_spec?i("div",[i("div",{staticClass:"red"},[t._v(" ￥"+t._s(s.mini_price)+t._s(s.mini_price!=s.max_price?"-"+s.max_price:"")+" ")]),i("div",{staticClass:"red"},[t._v(" "+t._s(s.mini_discount)+"折"+t._s(s.mini_discount!=s.max_discount?"-"+s.max_discount+"折":"")+" ")])]):t._e(),s.is_spec?t._e():i("div",[i("div",{staticClass:"red"},[t._v("￥"+t._s(e))]),i("div",{staticClass:"red"},[t._v(t._s(s.discount)+"折")])])])}},{key:"product_price",fn:function(e,s){return i("span",{},[s.is_spec?i("div",[i("div",[t._v("￥"+t._s(s.product_price_min)+t._s(s.product_price_min!=e?"-"+e:""))])]):t._e(),s.is_spec?t._e():i("div",[i("div",[t._v("￥"+t._s(e))])])])}},{key:"status",fn:function(e,s){return i("span",{},[0==s.goods_status?i("span",{staticStyle:{display:"inline-block",color:"red"}},[t._v(" 下架 ")]):t._e(),1==s.goods_status?i("span",{staticStyle:{display:"inline-block"}},[t._v(" 上架 ")]):t._e()])}},t._l(["sort"],(function(e){return{key:e,fn:function(s,o){return[i("div",{key:e},[o.editable?i("a-tooltip",{attrs:{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[i("template",{slot:"title"},[t._v("值越大，商品排序越靠前")]),i("a-input-number",{staticStyle:{margin:"-5px 2px",width:"100px"},attrs:{value:s},on:{change:function(i){return t.handleChangeSort(i,o.id,e)}}})],2):[t._v(" "+t._s(s)+" ")],i("span",{staticClass:"editable-row-operations"},[o.editable?i("span",[i("a",{on:{click:function(){return t.save(o.id)}}},[t._v("保存")]),i("a-divider",{attrs:{type:"vertical"}}),i("a",{on:{click:function(){return t.cancel(o.id)}}},[t._v("取消")])],1):i("span",[i("a",{attrs:{disabled:""!==t.editingKey},on:{click:function(){return t.edit(o.id)}}},[t._v("编辑")])])])],2)]}}})),{key:"action",fn:function(e,s){return i("span",{},[i("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(e){return t.deleteGoods(s.id)},cancel:t.cancel}},[i("a-button",{staticStyle:{"margin-left":"-30px"},attrs:{type:"link"}},[t._v("删除")])],1)],1)}}],null,!0)})],1),i("select-goods-list",{ref:"selectGoodsListModal",attrs:{visible:t.selectGoodsVisible,list:t.selectGoodsList,total:t.goodsTotal,selectedList:t.selectedGoodsDetailListAll},on:{"update:visible":function(e){t.selectGoodsVisible=e},submit:t.onGoodsSelect,onSearch:t.goodsOnSearch}})],1)},o=[],a=i("ade3"),n=i("2909"),r=i("5530"),c=(i("d81d"),i("4de4"),i("474a")),l={getSeckillGoodsList:"/shop/platform.goods/getSeckillGoodsList"},d=l,u=(i("5067"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{staticClass:"dialog",attrs:{title:"选择商品",width:"800",centered:"",visible:t.dialogVisible,destroyOnClose:!0,bodyStyle:{height:"700px"}},on:{ok:t.handleOk,cancel:t.handleCancel}},[i("div",{staticClass:"select-goods"},[i("div",{staticClass:"right"},[i("div",{staticClass:"top"},[i("a-input-search",{staticClass:"search right",attrs:{placeholder:"支持商品/店铺/商家名称/商品ID搜索"},on:{search:t.onSearch,change:t.onSearchChange},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),i("div",{staticClass:"bottom"},[i("a-table",{attrs:{"row-selection":t.rowSelection,pagination:t.pagination,columns:t.columns,"data-source":t.list,rowKey:"goods_id",scroll:{y:500}},on:{change:t.tableChange},scopedSlots:t._u([{key:"name",fn:function(e,s){return i("span",{},[i("div",{staticClass:"product-info flex align-center"},[i("div",[i("div",{staticClass:"img-wrap"},[i("a-popover",{attrs:{placement:"right"}},[i("template",{slot:"content"}),i("img",{staticClass:"goods-image",attrs:{src:s.image}})],2),0==s.goods_status?i("div",{staticClass:"yxj"},[t._v("已下架")]):t._e()],1)]),i("div",{staticStyle:{"margin-left":"10px"}},[i("p",{staticClass:"product-name"},[t._v(t._s(e))])])])])}},{key:"price",fn:function(e,s){return i("span",{},[s.is_spec?i("div",[i("div",{staticClass:"red"},[t._v(" ￥"+t._s(s.mini_price)+t._s(s.mini_price!=s.max_price?"-"+s.max_price:"")+" ")]),i("div",{staticClass:"red"},[t._v(" "+t._s(s.mini_discount)+"折"+t._s(s.mini_discount!=s.max_discount?"-"+s.max_discount+"折":"")+" ")])]):t._e(),s.is_spec?t._e():i("div",[i("div",{staticClass:"red"},[t._v("￥"+t._s(e))]),i("div",{staticClass:"red"},[t._v(t._s(s.discount)+"折")])])])}},{key:"merchant_name",fn:function(e,s){return i("span",{},[t._v(" "+t._s(e)+"/"+t._s(s.store_name)+" ")])}},{key:"end_date",fn:function(e,s){return i("span",{},[t._v(" "+t._s(e)+" "+t._s(s.end_time)+" ")])}}])})],1)])])])}),h=[],m=(i("a9e3"),i("159b"),i("a434"),{name:"SelectGoods",props:{visible:{type:Boolean,default:!1},menuList:{type:Array,default:function(){return[]}},list:{type:Array,default:function(){return[]}},selectedList:{type:Array,default:function(){return[]}},total:{type:[Number,String],default:function(){return[]}}},data:function(){return{dialogVisible:!1,rootSubmenuKeys:[],openKeys:[],columns:[{title:"商品名称",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"优惠价",dataIndex:"price",scopedSlots:{customRender:"price"}},{title:"所属商家/店铺",dataIndex:"merchant_name",scopedSlots:{customRender:"merchant_name"}},{title:"活动截止时间",dataIndex:"end_date",scopedSlots:{customRender:"end_date"}}],pagination:{pageSize:10,total:1,"show-total":function(t){return"共 ".concat(t," 条记录")}},menuId:0,selectedRowKeys:[],selectedRows:[],defaultSelectedKey:[],keywords:"",sList:[]}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onSelect:this.onRowSelect,onSelectAll:this.onSelectAll,getCheckboxProps:function(t){return{props:{disabled:!0===t.selected}}}}}},watch:{visible:function(t,e){this.dialogVisible=t,t&&this.handleList()},list:function(){this.handleList()},selectedList:function(t){this.sList=JSON.parse(JSON.stringify(t))},total:function(t){console.log("total",this.total),this.$set(this.pagination,"total",this.total)}},mounted:function(){this.dialogVisible=this.visible,this.handleList(),this.sList=JSON.parse(JSON.stringify(this.selectedList))},methods:{init:function(){this.rootSubmenuKeys=[],this.openKeys=[],this.defaultSelectedKey=[],this.keywords="",this.currentPage=1},handleList:function(){var t=this;this.selectedRowKeys=[],this.sList.length&&this.sList.forEach((function(e){e.selected=!0,t.selectedRowKeys.push(e.goods_id)})),this.list.length&&this.selectedList.length&&this.list.forEach((function(e){var i=!1;t.selectedList.forEach((function(t){t.goods_id==e.goods_id&&(i=!0)})),e.selected=i})),this.selectedRows=this.sList},handleOk:function(){var t=this.selectedRowKeys,e=this.sList;e.length?this.$emit("submit",{ids:t,goods:e}):this.$message.error("请选择商品")},handleCancel:function(){this.init(),this.dialogVisible=!1,this.$emit("update:visible",this.dialogVisible),this.$emit("onSearch",{id:this.menuId,keywords:"",page:1})},onSearch:function(t){this.menuId="",this.openKeys=[],this.defaultSelectedKey=[],this.$emit("onSearch",{id:this.menuId,keywords:t})},onSearchChange:function(t){this.onSearch(this.keywords)},onRowSelect:function(t,e,i){e?(this.sList.push(t),this.selectedRowKeys.push(t.goods_id)):(this.sList.remove(t),this.selectedRowKeys.remove(t.goods_id))},onSelectAll:function(t,e,i){var s=this;t?i.map((function(t){s.selectedRowKeys.push(t.goods_id),s.sList.push(t)})):i.map((function(t){s.sList.remove(t),s.selectedRowKeys.remove(t.goods_id)}))},tableChange:function(t){t.current&&t.current>0&&this.$emit("onSearch",{id:this.menuId,keywords:this.keywords,page:t.current})}}});Array.prototype.remove=function(t){var e=this.indexOf(t),i=-1;e>-1?this.splice(e,1):(this.map((function(e,s){e.goods_id==t.goods_id&&(i=s)})),i>-1&&this.splice(i,1))};var p=m,g=(i("0085"),i("2877")),f=Object(g["a"])(p,u,h,!1,null,"0454a9cb",null),y=f.exports,_=[],v={name:"goodsList",components:{SelectGoodsList:y},data:function(){return this.cacheData=_.map((function(t){return Object(r["a"])({},t)})),{selectGoodsVisible:!1,selectGoodsList:[],selectedGoodsDetailList:[],selectedGoodsDetailListAll:[],selectedGoodsList:[],keywords:"",editingKey:"",form:this.$form.createForm(this),pagination:{pageSize:10,total:1,"show-total":function(t){return"共 ".concat(t," 条记录")}},goodsTotal:1,detail:{},queryParam:{page:1},queryParamShop:{page:1},cat_id:0,columns:[{title:"商品名称",dataIndex:"name",width:"12%"},{title:"商家名称",dataIndex:"merchant_name",width:"8%"},{title:"店铺名称",dataIndex:"store_name",width:"8%"},{title:"原价",dataIndex:"product_price",scopedSlots:{customRender:"product_price"},width:"10%"},{title:"优惠价",dataIndex:"price",width:"8%",scopedSlots:{customRender:"price"}},{title:"当前库存",dataIndex:"stock",width:"6%",scopedSlots:{customRender:"stock"}},{title:"活动截止时间",width:"15%",dataIndex:"end_date",scopedSlots:{customRender:"end_date"}},{title:"商品状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"排序",dataIndex:"sort",width:"15%",scopedSlots:{customRender:"sort"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],data:_,godosList:[],clientHeight:0,oldSort:0,loading:!1}},watch:{$route:{handler:function(t){t&&-1!=t.fullPath.indexOf("ShopSeckillCategoryGoods")&&(console.log("watch=========",t),this.queryParam.cat_id=t.query.cat_id,this.queryParam.keywords="",this.keywords="",this.queryParam.page="1",this.pagination.current=1,this.getCategoryGoodsList(),this.queryParamShop.keywords="",this.queryParamShop.page="1",this.getShopGoodsList(),this.getCategoryGoodsListAll())}}},created:function(){console.log(this.$route.query.store_id)},filters:{},mounted:function(){var t=this;this.queryParam.cat_id=this.$route.query.cat_id,this.clientHeight=window.document.body.clientHeight,window.onresize=function(){t.clientHeight=window.document.body.clientHeight},this.getCategoryGoodsList(),this.getShopGoodsList(),this.getCategoryGoodsListAll(),console.log("mounted=========")},computed:{hasSelected:function(){}},methods:Object(a["a"])({getCategoryGoodsList:function(){var t=this;this.loading=!0,this.request(c["a"].getCategoryGoodsList,this.queryParam).then((function(e){t.selectedGoodsDetailList=e.list,t.pagination.total=e.total?e.total:0,t.loading=!1}))},getCategoryGoodsListAll:function(){var t=this,e=this.queryParam;e.page=1,e.pageSize=1e6,this.request(c["a"].getCategoryGoodsList,e).then((function(e){t.selectedGoodsDetailListAll=e.list}))},getShopGoodsList:function(){var t=this;this.request(d.getSeckillGoodsList,this.queryParamShop).then((function(e){t.selectGoodsList=e.list,t.goodsTotal=e.total}))},selectGoodsClick:function(){this.selectGoodsVisible=!0},onGoodsSelect:function(t){var e=this;this.selectGoodsVisible=!1,t.ids.length>0&&this.request(c["a"].addCategoryGoods,{goods_ids:t.ids,cat_id:this.queryParam.cat_id}).then((function(i){if(1==i.status)return e.$message.error("请选择商品"),!1;e.getCategoryGoodsList(),e.getCategoryGoodsListAll(),e.queryParamShop.page=t.page||1,e.getShopGoodsList()}))},goodsOnSearch:function(t){this.queryParamShop.keywords=t.keywords,this.queryParamShop.page=t.page||1,this.getShopGoodsList()},tableChange:function(t){console.log(t,"tableChange--------------"),console.log(this.queryParam["page"],"page--------------"),t.current&&t.current>0&&this.queryParam["page"]!=t.current&&(this.queryParam["page"]=t.current,this.getCategoryGoodsList())},onSelectChange:function(t){this.selectedGoodsList=t},deleteGoods:function(t){var e=this;if(t)t=[t];else t=this.selectedGoodsList;0!=t.length?this.request(c["a"].delCategoryGoods,{goods_ids:t,cat_id:this.queryParam.cat_id}).then((function(t){e.$message.success("删除成功"),e.getCategoryGoodsList(),e.getCategoryGoodsListAll(),e.selectedGoodsList=[]})).catch((function(t){e.confirmLoading=!1})):this.$message.error("请选择商品")},cancel:function(){},onSearch:function(t){this.queryParam.keywords=t,this.queryParam.page=1,this.getCategoryGoodsList()},onSearchChange:function(t){this.queryParam.keywords=this.keywords,this.queryParam.page=1,this.getCategoryGoodsList()},handleChangeSort:function(t,e,i){var s=Object(n["a"])(this.selectedGoodsDetailList),o=s.filter((function(t){return e===t.id}))[0];o&&(o[i]=t,this.selectedGoodsDetailList=s)},edit:function(t){var e=Object(n["a"])(this.selectedGoodsDetailList),i=e.filter((function(e){return t===e.id}))[0];this.editingKey=t,i&&(i.editable=!0,this.selectedGoodsDetailList=e)},save:function(t){var e=this,i=Object(n["a"])(this.selectedGoodsDetailList),s=Object(n["a"])(this.cacheData),o=i.filter((function(e){return t===e.id}))[0];s.filter((function(e){return t===e.id}))[0];o&&(delete o.editable,this.selectedGoodsDetailList=i,Object.assign(o,this.cacheData.filter((function(e){return t===e.id}))[0]),this.cacheData=s),console.log(o),this.request(c["a"].editCategoryGoodsSort,{id:o.id,sort:o.sort}).then((function(t){e.getCategoryGoodsList()})),this.editingKey=""}},"cancel",(function(t){var e=Object(n["a"])(this.selectedGoodsDetailList),i=e.filter((function(e){return t===e.id}))[0];this.editingKey="",i&&(Object.assign(i,this.cacheData.filter((function(e){return t===e.id}))[0]),delete i.editable,this.selectedGoodsDetailList=e),this.getCategoryGoodsList()}))},S=v,C=(i("8c74"),Object(g["a"])(S,s,o,!1,null,"4112bdff",null));e["default"]=C.exports},"9fc5":function(t,e,i){},b59a:function(t,e,i){"use strict";var s={getSelectProvince:"/common/platform.area.area/getSelectProvince",getSelectCity:"/common/platform.area.area/getSelectCity",getSelectArea:"/common/platform.area.area/getSelectArea",getSelectPropertyProvince:"/merchant/merchant.system.area/getProvinceList",getSelectPropertyCity:"/merchant/merchant.system.area/getCityList",getSelectPropertyArea:"/merchant/merchant.system.area/getAreaList",getSelectStreet:"/common/platform.area.area/getSelectStreet",getSelectProvinceAndCity:"/common/platform.area.area/getSelectProvinceAndCity"};e["a"]=s}}]);