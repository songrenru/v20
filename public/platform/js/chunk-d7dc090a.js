(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7dc090a","chunk-7766781a","chunk-2d0e87ff"],{"1db9":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t._self._c;return e("a-modal",{staticClass:"dialog",attrs:{title:"选择商品",width:"800",centered:"",visible:t.dialogVisible,destroyOnClose:!0},on:{ok:t.handleOk,cancel:t.handleCancel}},[e("div",{staticClass:"select-goods"},[e("div",{staticClass:"left scrollbar"},[e("a-menu",{attrs:{mode:"inline","open-keys":t.openKeys,selectedKeys:t.defaultSelectedKey},on:{openChange:t.onOpenChange,select:t.onSelect}},[t._l(t.menuList,(function(o){return[o.children&&o.children.length?e("a-sub-menu",{key:o.sort_id},[e("span",{attrs:{slot:"title"},slot:"title"},[e("span",[t._v(t._s(o.sort_name))])]),o.children&&o.children.length?[t._l(o.children,(function(o){return[o.children&&o.children.length?[e("a-sub-menu",{key:o.sort_id,attrs:{title:o.sort_name}},t._l(o.children,(function(o){return e("a-menu-item",{key:o.sort_id},[t._v(t._s(o.sort_name))])})),1)]:[e("a-menu-item",{key:o.sort_id},[t._v(t._s(o.sort_name))])]]}))]:t._e()],2):e("a-menu-item",{key:o.sort_id},[t._v(t._s(o.sort_name))])]}))],2)],1),e("div",{staticClass:"right"},[e("div",{staticClass:"top"},[1==t.selectType?e("span",{staticClass:"tips"},[t._v("同一商家只可选择一个商品参与组合活动")]):e("span",{staticClass:"tips"}),e("a-input-search",{staticClass:"search",attrs:{placeholder:"商品名称/商家名称/商品id"},on:{search:t.onSearch,change:t.onSearchChange},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),e("div",{staticClass:"bottom"},[e("a-table",{attrs:{"row-selection":t.rowSelection,columns:t.columns,"data-source":t.list,rowKey:"group_id",scroll:{y:500}},scopedSlots:t._u([{key:"selected",fn:function(o,r){return e("span",{},[o?e("div",{staticStyle:{color:"#1890ff"}},[t._v("已选择")]):t._e()])}},{key:"name",fn:function(o,r){return e("span",{},[e("div",{staticClass:"product-info"},[e("div",[e("img",{attrs:{src:r.image}})]),e("div",{staticStyle:{"margin-left":"10px"}},[e("p",{staticClass:"product-name"},[t._v(t._s(o))])])])])}}])})],1)])])])},s=[],i=(o("19f1"),o("c5cb"),o("08c7"),o("4868"),o("075f"),o("4afa"),{name:"SelectGoods",props:{visible:{type:Boolean,default:!1},selectType:{type:Number,default:1},menuList:{type:Array,default:function(){return[]}},list:{type:Array,default:function(){return[]}},selectedList:{type:Array,default:function(){return[]}}},data:function(){return{dialogVisible:!1,rootSubmenuKeys:[],openKeys:[],columns:[{title:"商品名称",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"商家名称",dataIndex:"merchant_name"},{title:"价格",dataIndex:"price"},{title:"团购状态",dataIndex:"status_str"},{title:"状态",dataIndex:"selected",scopedSlots:{customRender:"selected"}}],menuId:0,selectedRowKeys:[],selectedRows:[],defaultSelectedKey:[],keywords:"",sList:[],merIdArr:[]}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onSelect:this.onRowSelect,hideDefaultSelections:!0,getCheckboxProps:function(t){return{props:{}}}}}},watch:{visible:function(t,e){this.dialogVisible=t,t&&(this.handleMenuList(),this.handleList())},menuList:function(){this.handleMenuList()},list:function(){this.handleList()},selectedList:function(t){this.sList=JSON.parse(JSON.stringify(t))}},mounted:function(){this.dialogVisible=this.visible,this.handleMenuList(),this.handleList(),this.sList=JSON.parse(JSON.stringify(this.selectedList))},methods:{init:function(){this.rootSubmenuKeys=[],this.openKeys=[],this.defaultSelectedKey=[],this.keywords="",this.currentPage=1},handleMenuList:function(){var t=this;this.init(),console.log(this.menuList," this.menuList"),this.menuList.forEach((function(e,o){if(t.rootSubmenuKeys.push(e.sort_id),e.children&&e.children.length){0==o&&t.openKeys.push(e.sort_id);var r=e.children;r.forEach((function(e,r){if(e.children&&e.children.length){0==r&&t.openKeys.push(e.sort_id);var s=e.children;s.forEach((function(e,s){0==o&&0==r&&0==s&&(t.menuId=e.sort_id)}))}else 0==o&&0==r&&(t.menuId=e.sort_id)}))}else 0==o&&(t.menuId=e.sort_id)})),this.defaultSelectedKey.push(this.menuId),this.onSelect({key:this.menuId})},handleList:function(){var t=this;console.log("-----------1",this.sList),this.selectedRowKeys=[],this.merIdArr=[],this.sList.length&&this.sList.forEach((function(e){t.selectedRowKeys.push(e.group_id),t.merIdArr.push(e.mer_id)})),this.list.length&&this.list.forEach((function(e,o){-1!=t.selectedRowKeys.indexOf(e.group_id)?t.list[o].selected=1:t.list[o].selected=0})),this.selectedRows=this.sList},handleOk:function(){var t=this.selectedRowKeys,e=this.sList;e.length?this.$emit("submit",{ids:t,goods:e}):this.$message.error("请选择商品")},handleCancel:function(){this.init(),this.dialogVisible=!1,this.$emit("update:visible",this.dialogVisible)},onSelect:function(t){var e=t.key;console.log("menu id selected:",e),this.menuId=e,this.defaultSelectedKey=[e],this.$emit("onMenuSelect",{id:e})},onOpenChange:function(t){var e=this,o=t.find((function(t){return-1===e.openKeys.indexOf(t)}));-1===this.rootSubmenuKeys.indexOf(o)?this.openKeys=t:this.openKeys.push(o)},onSearch:function(t){this.keywords?(this.menuId="",this.openKeys=[],this.defaultSelectedKey=[],this.$emit("onSearch",{id:this.menuId,keywords:t})):this.$message.warning("请输入商品名称！")},onSearchChange:function(t){this.keywords?this.onSearch(this.keywords):this.handleMenuList()},onRowSelect:function(t,e,o){var r=this;if(e)if("group_renovation"==t.flag)this.sList.push(t),this.selectedRowKeys.push(t.group_id),this.merIdArr.push(t.mer_id);else{if(-1!=this.merIdArr.indexOf(t.mer_id))return this.$message.error("该商家已选过一个商品"),!1;this.sList.push(t),this.selectedRowKeys.push(t.group_id),this.merIdArr.push(t.mer_id)}else-1!=this.selectedRowKeys.indexOf(t.group_id)&&(this.merIdArr.remove(t.mer_id),this.sList.remove(t),this.selectedRowKeys.remove(t.group_id));this.list.length&&this.list.forEach((function(t,e){-1!=r.selectedRowKeys.indexOf(t.group_id)?r.list[e].selected=1:r.list[e].selected=0}))},onSelectAll:function(t,e,o){var r=this;t?o.map((function(t){if(-1!=r.merIdArr.indexOf(t.mer_id))return r.$message.error("该商家已选过一个商品"),!1;r.selectedRowKeys.push(t.group_id),r.sList.push(t),r.merIdArr.push(t.mer_id)})):o.map((function(t){r.sList.remove(t),r.selectedRowKeys.remove(t.group_id),r.merIdArr.remove(t.mer_id)}))}}});Array.prototype.remove=function(t){var e=this.indexOf(t),o=-1;e>-1?this.splice(e,1):(this.map((function(e,r){e.group_id==t.group_id&&(o=r)})),o>-1&&this.splice(o,1))};var a=i,n=(o("faf2"),o("0b56")),u=Object(n["a"])(a,r,s,!1,null,"0db84022",null);e["default"]=u.exports},49283:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-20 ml-10 mr-10 mb-20"},[t.ajaxData?e("a-form",{attrs:{form:t.form,"label-col":{span:4},"wrapper-col":{span:10}},on:{submit:t.handleSubmit}},[e("a-card",{attrs:{title:t.title,bordered:!1}},[e("a-form-item",{attrs:{label:"活动名称"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:t.ajaxData.title,rules:[{required:!0,message:"请输入活动名称！"},{max:6,message:"字数限制为6个字",trigger:"blur"}]}],expression:"[\n            'title',\n            { initialValue: ajaxData.title, rules: [{ required: true, message: '请输入活动名称！' },{ max: 6, message: '字数限制为6个字', trigger: 'blur' }] },\n          ]"}],attrs:{placeholder:"填写活动名称"}})],1),e("a-form-item",{attrs:{label:"商品活动描述"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["desc",{initialValue:t.ajaxData.desc}],expression:"[\n            'desc',\n            { initialValue: ajaxData.desc },\n          ]"}],attrs:{placeholder:"填写商品活动描述"}})],1),e("a-form-item",{attrs:{label:t.t_label}},[e("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==t.ajaxData.status,valuePropName:"checked"}],expression:"['status', { initialValue: ajaxData.status == 1 ? true : false, valuePropName: 'checked' }]"}],attrs:{"checked-children":"是","un-checked-children":"否"},on:{change:t.switchStatus}})],1)],1),e("a-card",{staticStyle:{"margin-top":"20px"},attrs:{title:"商品信息",bordered:!1}},[e("a-row",{attrs:{type:"flex",justify:"space-between"}},[e("a-col",[e("div",[e("div",[e("h1",[e("b",[t._v(t._s(t.title)+"列表")])])]),e("div",{staticStyle:{"font-size":"12px"}},[t._v("已过期商品前端过滤不展示")])])]),e("a-col",[e("div",[e("a-button",{attrs:{type:"primary"},on:{click:t.selectGoodsClick}},[t._v("添加商品")]),t.selectedGoodsDetailList.length?e("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"danger"},on:{click:t.delGoodsClick}},[t._v("删除 ")]):t._e()],1)])],1),[e("div",[e("div",{staticStyle:{"margin-bottom":"16px"}},[e("span",{staticStyle:{"margin-left":"8px"}})]),e("a-table",{attrs:{"row-selection":{selectedRowKeys:t.selectedGoodsList,onChange:t.onSelectChange},rowKey:"group_id",columns:t.goodsColumns,"data-source":t.selectedGoodsDetailList},scopedSlots:t._u([{key:"cfg_sort",fn:function(o,r){return e("span",{},[e("a-input-number",{staticStyle:{width:"100px"},attrs:{min:0,step:"1"},model:{value:r.cfg_sort,callback:function(e){t.$set(r,"cfg_sort",e)},expression:"record.cfg_sort"}})],1)}},{key:"use_count",fn:function(o,r){return e("span",{},[2==t.ajaxData.use_rule?e("a-input-number",{staticStyle:{width:"100px"},attrs:{min:0},model:{value:r.use_count,callback:function(e){t.$set(r,"use_count",e)},expression:"record.use_count"}}):t._e(),1==t.ajaxData.use_rule?e("span",[t._v("不限次数")]):t._e()],1)}},{key:"time",fn:function(o,r){return e("span",{},[t._v(" 开始时间："+t._s(r.begin_time)+"结束时间："+t._s(r.end_time)+" ")])}},{key:"sale_count",fn:function(o,r){return e("span",{},[t._v(" 售出："+t._s(r.sale_count)+" 份 原始库存： "+t._s(r.count_num>0?r.count_num:"无限制")+" 虚拟："+t._s(r.virtual_num)+" 人 ")])}},{key:"action",fn:function(o,r){return e("span",{},[e("a",{on:{click:function(e){return t.delGoods(r.group_id)}}},[t._v("删除")])])}}],null,!1,2461515044)})],1)],e("select-goods",{attrs:{visible:t.selectGoodsVisible,menuList:t.goodsSortList,list:t.selectGoodsList,selectType:2,selectedList:t.selectedGoodsDetailList},on:{"update:visible":function(e){t.selectGoodsVisible=e},submit:t.onGoodsSelect,onMenuSelect:t.onMenuSelect,onSearch:t.goodsOnSearch}})],2),e("a-form-item",{staticClass:"text-left",staticStyle:{margin:"20px 0"},attrs:{wrapperCol:{span:24}}},[e("a-button",{attrs:{htmlType:"submit",type:"primary"}},[t._v("提交")])],1)],1):t._e()],1)},s=[],i=o("8a11"),a=o("1db9"),n=[{title:"编号",dataIndex:"group_id",width:"8%"},{title:"名称",dataIndex:"name",width:"10%"},{title:"商家名称",dataIndex:"merchant_name",width:"10%"},{title:"价格",dataIndex:"price",width:"8%"},{title:"销售概览",dataIndex:"sale_count",width:"10%",scopedSlots:{customRender:"sale_count"}},{title:"时间",dataIndex:"time",width:"15%",scopedSlots:{customRender:"time"}},{title:"排序",dataIndex:"cfg_sort",width:"10%",scopedSlots:{customRender:"cfg_sort"}},{title:"团购状态",dataIndex:"status_str",width:"10%"},{title:"操作",dataIndex:"action",width:"15%",scopedSlots:{customRender:"action"}}],u={name:"ShopForm",components:{SelectGoods:a["default"]},data:function(){return{queryParam:{type:1},ajaxData:{title:"",desc:"",status:2},catArr:[],selectGoodsVisible:!1,goodsColumns:n,form:null,goodsSortList:[],selectedGoodsDetailList:[],selectedGoodsList:[],selectGoodsList:[],title:"优选商品",t_label:"是否展示优选商品"}},created:function(){this.queryParam.cat_id=this.$route.query.cat_id,this.queryParam.type=this.$route.query.type,this.setTitle()},mounted:function(){this.getData(),this.getCategoryListAll(),this.setTitle()},activated:function(){this.getData()},watch:{"$route.query.cat_id":function(){this.queryParam.cat_id=this.$route.query.cat_id,this.getData(),this.getCategoryListAll(),this.setTitle()}},methods:{switchStatus:function(t){},getData:function(){var t=this;this.selectedGoodsDetailList=[],this.form=this.$form.createForm(this),console.log("请求数据。。。。"),this.request(i["a"].getCfgInfo,this.queryParam).then((function(e){t.ajaxData=e.info,t.selectedGoodsDetailList=e.group_list,t.$forceUpdate()}))},getCategoryList:function(){var t=this;this.request(i["a"].getGroupFirstCategorylist).then((function(e){var o={cat_id:0,cat_name:"其他"};e.push(o),t.catArr=e}))},getCategoryListAll:function(){var t=this;this.request(i["a"].getCategoryTree,{cat_id:this.$route.query.cat_id}).then((function(e){t.goodsSortList=e}))},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t,o){t||(o.status=o.status?1:0,o.cat_id=e.$route.query.cat_id,o.type=e.$route.query.type,o.goods_list=e.selectedGoodsDetailList,console.log(o,"values"),e.request(i["a"].editCfgInfo,o).then((function(t){e.$message.success("保存成功"),e.form=e.$form.createForm(e),e.$route.query.cat_id>0?e.$router.push("/group/platform.groupCategory/edit?cat_id="+e.$route.query.cat_id+"&cat_fid=0&key=2"):e.$router.push("/group/platform.decorate/index")})))}))},getSelectGoodsList:function(){var t=this;this.queryParam["flag"]="group_renovation",this.request(i["a"].getGroupGoodsList,this.queryParam).then((function(e){t.selectGoodsList=e.list}))},selectGoodsClick:function(){this.selectGoodsVisible=!0},onGoodsSelect:function(t){console.log(t,"onGoodsSelect"),this.selectedGoodsDetailList=t.goods,this.selectGoodsVisible=!1},onMenuSelect:function(t){this.queryParam.sort_id=t.id,this.queryParam.keywords="",this.getSelectGoodsList()},delGoodsClick:function(){for(var t=[],e=0;e<this.selectedGoodsDetailList.length;e++)-1==this.selectedGoodsList.indexOf(this.selectedGoodsDetailList[e].group_id)&&t.push(this.selectedGoodsDetailList[e]);this.selectedGoodsDetailList=t,this.selectedGoodsList=[]},delGoods:function(t){for(var e=[],o=[],r=0;r<this.selectedGoodsList.length;r++)t!=this.selectedGoodsList[r]&&e.push(this.selectedGoodsList[r]);for(r=0;r<this.selectedGoodsDetailList.length;r++)this.selectedGoodsDetailList[r].group_id!=t&&o.push(this.selectedGoodsDetailList[r]);this.selectedGoodsList=e,this.selectedGoodsDetailList=o},goodsOnSearch:function(t){this.queryParam.sort_id=t.id,this.queryParam.keywords=t.keywords,this.getSelectGoodsList()},onSelectChange:function(t){this.selectedGoodsList=t},handleSortChange:function(t,e){var o=this;this.request(i["a"].editCfgSort,{id:e,sort:t}).then((function(t){o.request(i["a"].getRenovationGoodsList,o.queryParam).then((function(t){t.group_list.length&&(o.selectedGoodsDetailList=t.group_list)}))}))},setTitle:function(){this.queryParam.cat_id>0?(this.title="精选商品",this.t_label="是否展示精选商品"):(this.title="优选商品",this.t_label="是否展示优选商品")}}},l=u,d=o("0b56"),c=Object(d["a"])(l,r,s,!1,null,"7c19794c",null);e["default"]=c.exports},"8a11":function(t,e,o){"use strict";var r={groupCombineList:"/group/platform.groupCombine/groupCombinelist",getGroupCombineDetail:"/group/platform.groupCombine/getGroupCombineDetail",editGroupCombine:"/group/platform.groupCombine/editGroupCombine",getGroupCombineGoodsList:"/group/platform.group/getGroupCombineGoodsList",getGroupCombineOrderList:"/group/platform.groupOrder/getGroupCombineOrderList",exportCombineOrder:"/group/platform.groupOrder/exportCombineOrder",getRobotList:"/group/platform.groupCombine/getRobotList",addRobot:"/group/platform.groupCombine/addRobot",delRobot:"/group/platform.groupCombine/delRobot",editSpreadNum:"/group/platform.groupCombine/editSpreadNum",getGroupGoodsList:"/group/platform.group/getGroupGoodsList",getGroupFirstCategorylist:"/group/platform.groupCategory/getGroupFirstCategorylist",getCategoryTree:"/group/platform.groupCategory/getCategoryTree",getPayMethodList:"/group/platform.groupOrder/getPayMethodList",getOrderDetail:"/group/platform.groupOrder/getOrderDetail",editOrderNote:"/group/platform.groupOrder/editOrderNote",getCfgInfo:"/group/platform.groupRenovation/getInfo",editCfgInfo:"/group/platform.groupRenovation/editCfgInfo",editCfgSort:"/group/platform.groupRenovation/editCfgSort",getRenovationGoodsList:"/group/platform.groupRenovation/getRenovationGoodsList",editCombineCfgInfo:"/group/platform.groupRenovation/editCombineCfgInfo",editCombineCfgSort:"/group/platform.groupRenovation/editCombineCfgSort",getRenovationCombineGoodsList:"/group/platform.groupRenovation/getRenovationCombineGoodsList",getRenovationCustomList:"/group/platform.groupRenovation/getRenovationCustomList",addRenovationCustom:"/group/platform.groupRenovation/addRenovationCustom",getRenovationCustomInfo:"/group/platform.groupRenovation/getRenovationCustomInfo",delRenovationCustom:"/group/platform.groupRenovation/delRenovationCustom",getGroupCategoryList:"/group/platform.group/getGroupCategoryList",getRenovationCustomStoreSortList:"/group/platform.groupRenovation/getRenovationCustomStoreSortList",editRenovationCustomStoreSort:"/group/platform.groupRenovation/editRenovationCustomStoreSort",getRenovationCustomGroupSortList:"/group/platform.groupRenovation/getRenovationCustomGroupSortList",editRenovationCustomGroupSort:"/group/platform.groupRenovation/editRenovationCustomGroupSort",getGroupCategorylist:"/group/platform.groupCategory/getGroupCategorylist",delGroupCategory:"/group/platform.groupCategory/delGroupCategory",addGroupCategory:"/group/platform.groupCategory/addGroupCategory",configGroupCategory:"/common/platform.index/config",uploadPictures:"/common/common.UploadFile/uploadPictures",getGroupCategoryInfo:"/group/platform.groupCategory/getGroupCategoryInfo",groupCategorySaveSort:"/group/platform.groupCategory/saveSort",getGroupCategoryCueList:"/group/platform.groupCategory/getGroupCategoryCueList",getGroupCategoryCatFieldList:"/group/platform.groupCategory/getCatFieldList",getGroupCategoryWriteFieldList:"/group/platform.groupCategory/getWriteFieldList",delGroupCategoryCue:"/group/platform.groupCategory/delGroupCategoryCue",delGroupCategoryWriteField:"/group/platform.groupCategory/delWriteField",groupCategoryCatFieldShow:"/group/platform.groupCategory/catFieldShow",editGroupCategoryCue:"/group/platform.groupCategory/editGroupCategoryCue",groupCategoryAddWriteField:"/group/platform.groupCategory/addWriteField",groupCategoryAddCatField:"/group/platform.groupCategory/addCatField",getAdverList:"/group/platform.groupAdver/getAdverList",getAllArea:"/common/common.area/getAllArea",addGroupAdver:"/group/platform.groupAdver/addGroupAdver",delGroupAdver:"/group/platform.groupAdver/delGroupAdver",getEditAdver:"/group/platform.groupAdver/getEditAdver",updateGroupCategoryBgColor:"/group/platform.groupCategory/updateGroupCategoryBgColor",getGroupSearchHotList:"/group/platform.groupSearchHot/getGroupSearchHotList",addGroupSearchHot:"/group/platform.groupSearchHot/addGroupSearchHot",getGroupSearchHotInfo:"/group/platform.groupSearchHot/getGroupSearchHotInfo",saveSearchHotSort:"/group/platform.groupSearchHot/saveSearchHotSort",delSearchHot:"/group/platform.groupSearchHot/delSearchHot",getUrl:"/group/platform.group/getUrl",changeShow:"/group/platform.groupHomeMenu/changeShow",getShow:"/group/platform.groupHomeMenu/getShow",groupOrderShareList:"/villageGroup/platform.GroupOrder/groupOrderShareList"};e["a"]=r},c1c7:function(t,e,o){},faf2:function(t,e,o){"use strict";o("c1c7")}}]);