(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c5bc450","chunk-51b63d03","chunk-b22b1f98"],{"147b":function(t,e,o){},"721e":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-modal",{attrs:{title:t.title,width:350,visible:t.visible,footer:null},on:{cancel:t.handleCancel}},[o("div",{staticClass:"content"},[o("div",{staticClass:"code-box"},[o("div",{staticClass:"code"},[t.h5Qrcode?o("img",{attrs:{src:t.h5Qrcode}}):t._e()])])])])},s=[],r=(o("ea1d"),{components:{},data:function(){return{title:"查看网址二维码",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},id:0,image:"",visible:!1,h5Qrcode:""}},mounted:function(){},methods:{showModal:function(t){this.visible=!0,this.id=IDBCursor,this.qrcodeUrl=t,this.getH5Code()},getH5Code:function(){var t=encodeURIComponent(this.qrcodeUrl);this.h5Qrcode=location.origin+"/index.php?g=Index&c=Recognition&a=get_own_qrcode&qrCon="+t},handleCancel:function(){this.visible=!1}}}),a=r,n=(o("8dd0"),o("0c7c")),l=Object(n["a"])(a,i,s,!1,null,"7310db8a",null);e["default"]=l.exports},"8a11":function(t,e,o){"use strict";var i={groupCombineList:"/group/platform.groupCombine/groupCombinelist",getGroupCombineDetail:"/group/platform.groupCombine/getGroupCombineDetail",editGroupCombine:"/group/platform.groupCombine/editGroupCombine",getGroupCombineGoodsList:"/group/platform.group/getGroupCombineGoodsList",getGroupCombineOrderList:"/group/platform.groupOrder/getGroupCombineOrderList",exportCombineOrder:"/group/platform.groupOrder/exportCombineOrder",getRobotList:"/group/platform.groupCombine/getRobotList",addRobot:"/group/platform.groupCombine/addRobot",delRobot:"/group/platform.groupCombine/delRobot",editSpreadNum:"/group/platform.groupCombine/editSpreadNum",getGroupGoodsList:"/group/platform.group/getGroupGoodsList",getGroupFirstCategorylist:"/group/platform.groupCategory/getGroupFirstCategorylist",getCategoryTree:"/group/platform.groupCategory/getCategoryTree",getPayMethodList:"/group/platform.groupOrder/getPayMethodList",getOrderDetail:"/group/platform.groupOrder/getOrderDetail",editOrderNote:"/group/platform.groupOrder/editOrderNote",getCfgInfo:"/group/platform.groupRenovation/getInfo",editCfgInfo:"/group/platform.groupRenovation/editCfgInfo",editCfgSort:"/group/platform.groupRenovation/editCfgSort",getRenovationGoodsList:"/group/platform.groupRenovation/getRenovationGoodsList",editCombineCfgInfo:"/group/platform.groupRenovation/editCombineCfgInfo",editCombineCfgSort:"/group/platform.groupRenovation/editCombineCfgSort",getRenovationCombineGoodsList:"/group/platform.groupRenovation/getRenovationCombineGoodsList",getRenovationCustomList:"/group/platform.groupRenovation/getRenovationCustomList",addRenovationCustom:"/group/platform.groupRenovation/addRenovationCustom",getRenovationCustomInfo:"/group/platform.groupRenovation/getRenovationCustomInfo",delRenovationCustom:"/group/platform.groupRenovation/delRenovationCustom",getGroupCategoryList:"/group/platform.group/getGroupCategoryList",getRenovationCustomStoreSortList:"/group/platform.groupRenovation/getRenovationCustomStoreSortList",editRenovationCustomStoreSort:"/group/platform.groupRenovation/editRenovationCustomStoreSort",getRenovationCustomGroupSortList:"/group/platform.groupRenovation/getRenovationCustomGroupSortList",editRenovationCustomGroupSort:"/group/platform.groupRenovation/editRenovationCustomGroupSort",getGroupCategorylist:"/group/platform.groupCategory/getGroupCategorylist",delGroupCategory:"/group/platform.groupCategory/delGroupCategory",addGroupCategory:"/group/platform.groupCategory/addGroupCategory",configGroupCategory:"/common/platform.index/config",uploadPictures:"/common/common.UploadFile/uploadPictures",getGroupCategoryInfo:"/group/platform.groupCategory/getGroupCategoryInfo",groupCategorySaveSort:"/group/platform.groupCategory/saveSort",getGroupCategoryCueList:"/group/platform.groupCategory/getGroupCategoryCueList",getGroupCategoryCatFieldList:"/group/platform.groupCategory/getCatFieldList",getGroupCategoryWriteFieldList:"/group/platform.groupCategory/getWriteFieldList",delGroupCategoryCue:"/group/platform.groupCategory/delGroupCategoryCue",delGroupCategoryWriteField:"/group/platform.groupCategory/delWriteField",groupCategoryCatFieldShow:"/group/platform.groupCategory/catFieldShow",editGroupCategoryCue:"/group/platform.groupCategory/editGroupCategoryCue",groupCategoryAddWriteField:"/group/platform.groupCategory/addWriteField",groupCategoryAddCatField:"/group/platform.groupCategory/addCatField",getAdverList:"/group/platform.groupAdver/getAdverList",getAllArea:"/common/common.area/getAllArea",addGroupAdver:"/group/platform.groupAdver/addGroupAdver",delGroupAdver:"/group/platform.groupAdver/delGroupAdver",getEditAdver:"/group/platform.groupAdver/getEditAdver",updateGroupCategoryBgColor:"/group/platform.groupCategory/updateGroupCategoryBgColor",getGroupSearchHotList:"/group/platform.groupSearchHot/getGroupSearchHotList",addGroupSearchHot:"/group/platform.groupSearchHot/addGroupSearchHot",getGroupSearchHotInfo:"/group/platform.groupSearchHot/getGroupSearchHotInfo",saveSearchHotSort:"/group/platform.groupSearchHot/saveSearchHotSort",delSearchHot:"/group/platform.groupSearchHot/delSearchHot",getUrl:"/group/platform.group/getUrl",changeShow:"/group/platform.groupHomeMenu/changeShow",getShow:"/group/platform.groupHomeMenu/getShow"};e["a"]=i},"8dd0":function(t,e,o){"use strict";o("9a14")},"9a14":function(t,e,o){},b2cc:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-modal",{staticClass:"dialog",attrs:{title:"选择商品",width:"800",centered:"",visible:t.dialogVisible,destroyOnClose:!0},on:{ok:t.handleOk,cancel:t.handleCancel}},[o("div",{staticClass:"select-goods"},[o("div",{staticClass:"left scrollbar"},[o("a-menu",{attrs:{mode:"inline","open-keys":t.openKeys,selectedKeys:t.defaultSelectedKey},on:{openChange:t.onOpenChange,select:t.onSelect}},[t._l(t.menuList,(function(e){return[e.children&&e.children.length?o("a-sub-menu",{key:e.sort_id},[o("span",{attrs:{slot:"title"},slot:"title"},[o("span",[t._v(t._s(e.sort_name))])]),e.children&&e.children.length?[t._l(e.children,(function(e){return[e.children&&e.children.length?[o("a-sub-menu",{key:e.sort_id,attrs:{title:e.sort_name}},t._l(e.children,(function(e){return o("a-menu-item",{key:e.sort_id},[t._v(t._s(e.sort_name))])})),1)]:[o("a-menu-item",{key:e.sort_id},[t._v(t._s(e.sort_name))])]]}))]:t._e()],2):o("a-menu-item",{key:e.sort_id},[t._v(t._s(e.sort_name))])]}))],2)],1),o("div",{staticClass:"right"},[o("div",{staticClass:"top"},[o("span",{staticClass:"tips"}),o("a-input-search",{staticClass:"search",attrs:{placeholder:"组合名称"},on:{search:t.onSearch,change:t.onSearchChange},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),o("div",{staticClass:"bottom"},[o("a-table",{attrs:{"row-selection":t.rowSelection,columns:t.columns,"data-source":t.list,rowKey:"combine_id",scroll:{y:500}},scopedSlots:t._u([{key:"start_time",fn:function(e,i){return o("span",{},[t._v(" "+t._s(e)+"至"+t._s(i.end_time)+" ")])}},{key:"can_use_day",fn:function(e){return o("span",{},[t._v(" "+t._s(e)+"天 ")])}},{key:"selected",fn:function(e,i){return o("span",{},[e?o("div",{staticStyle:{color:"#1890ff"}},[t._v("已选择")]):t._e()])}},{key:"name",fn:function(e,i){return o("span",{},[o("div",{staticClass:"product-info"},[o("div",[o("img",{attrs:{src:i.image}})]),o("div",{staticStyle:{"margin-left":"10px"}},[o("p",{staticClass:"product-name"},[t._v(t._s(e))])])])])}}])})],1)])])])},s=[],r=(o("d3b7"),o("159b"),o("7db0"),o("d81d"),o("a434"),{name:"SelectGoods",props:{visible:{type:Boolean,default:!1},menuList:{type:Array,default:function(){return[]}},list:{type:Array,default:function(){return[]}},selectedList:{type:Array,default:function(){return[]}}},data:function(){return{dialogVisible:!1,rootSubmenuKeys:[],openKeys:[],columns:[{title:"优惠组合名称",dataIndex:"title",scopedSlots:{customRender:"title"}},{title:"优惠组合类型",dataIndex:"cat_name"},{title:"优惠组合活动时间",dataIndex:"start_time",width:"15%",scopedSlots:{customRender:"start_time"}},{title:"优惠组合有效期",dataIndex:"can_use_day",width:"15%",scopedSlots:{customRender:"can_use_day"}},{title:"状态",dataIndex:"selected",scopedSlots:{customRender:"selected"}}],menuId:0,selectedRowKeys:[],selectedRows:[],defaultSelectedKey:[],keywords:"",sList:[],merIdArr:[]}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onSelect:this.onRowSelect,onSelectAll:this.onSelectAll,hideDefaultSelections:!0,getCheckboxProps:function(t){return{props:{}}}}}},watch:{visible:function(t,e){this.dialogVisible=t,t&&(this.handleMenuList(),this.handleList())},menuList:function(){this.handleMenuList()},list:function(){this.handleList()},selectedList:function(t){this.sList=JSON.parse(JSON.stringify(t))}},mounted:function(){this.dialogVisible=this.visible,this.handleMenuList(),this.handleList(),this.sList=JSON.parse(JSON.stringify(this.selectedList))},methods:{init:function(){this.rootSubmenuKeys=[],this.openKeys=[],this.defaultSelectedKey=[],this.keywords="",this.currentPage=1},handleMenuList:function(){var t=this;this.init(),console.log(this.menuList," this.menuList"),this.menuList.forEach((function(e,o){if(t.rootSubmenuKeys.push(e.sort_id),e.children&&e.children.length){0==o&&t.openKeys.push(e.sort_id);var i=e.children;i.forEach((function(e,i){if(e.children&&e.children.length){0==i&&t.openKeys.push(e.sort_id);var s=e.children;s.forEach((function(e,s){0==o&&0==i&&0==s&&(t.menuId=e.sort_id)}))}else 0==o&&0==i&&(t.menuId=e.sort_id)}))}else 0==o&&(t.menuId=e.sort_id)})),this.defaultSelectedKey.push(this.menuId),this.onSelect({key:this.menuId})},handleList:function(){var t=this;console.log("-----------1",this.sList),this.selectedRowKeys=[],this.merIdArr=[],this.sList.length&&this.sList.forEach((function(e){t.selectedRowKeys.push(e.combine_id)})),this.list.length&&this.list.forEach((function(e,o){-1!=t.selectedRowKeys.indexOf(e.combine_id)?t.list[o].selected=1:t.list[o].selected=0})),this.selectedRows=this.sList},handleOk:function(){var t=this.selectedRowKeys,e=this.sList;e.length?this.$emit("submit",{ids:t,goods:e}):this.$message.error("请选择商品")},handleCancel:function(){this.init(),this.dialogVisible=!1,this.$emit("update:visible",this.dialogVisible)},onSelect:function(t){var e=t.key;console.log("menu id selected:",e),this.menuId=e,this.defaultSelectedKey=[e],this.$emit("onMenuSelect",{id:e})},onOpenChange:function(t){var e=this,o=t.find((function(t){return-1===e.openKeys.indexOf(t)}));-1===this.rootSubmenuKeys.indexOf(o)?this.openKeys=t:this.openKeys.push(o)},onSearch:function(t){this.keywords?(this.menuId="",this.openKeys=[],this.defaultSelectedKey=[],this.$emit("onSearch",{id:this.menuId,keywords:t})):this.$message.warning("请输入组合名称！")},onSearchChange:function(t){this.keywords?this.onSearch(this.keywords):this.handleMenuList()},onRowSelect:function(t,e,o){var i=this;e?(this.sList.push(t),this.selectedRowKeys.push(t.combine_id)):-1!=this.selectedRowKeys.indexOf(t.combine_id)&&(this.merIdArr.remove(t.mer_id),this.sList.remove(t),this.selectedRowKeys.remove(t.combine_id)),this.list.length&&this.list.forEach((function(t,e){-1!=i.selectedRowKeys.indexOf(t.combine_id)?i.list[e].selected=1:i.list[e].selected=0}))},onSelectAll:function(t,e,o){var i=this;t?o.map((function(t){i.selectedRowKeys.push(t.combine_id),i.sList.push(t)})):o.map((function(t){i.sList.remove(t),i.selectedRowKeys.remove(t.combine_id)}))}}});Array.prototype.remove=function(t){var e=this.indexOf(t),o=-1;e>-1?this.splice(e,1):(this.map((function(e,i){e.combine_id==t.combine_id&&(o=i)})),o>-1&&this.splice(o,1))};var a=r,n=(o("cb4c1"),o("0c7c")),l=Object(n["a"])(a,i,s,!1,null,"5ed2178a",null);e["default"]=l.exports},c31b:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mt-20 ml-10 mr-10 mb-20"},[t.ajaxData?o("a-form",{attrs:{form:t.form,"label-col":{span:4},"wrapper-col":{span:10}},on:{submit:t.handleSubmit}},[o("a-card",{attrs:{title:t.title,bordered:!1}},[o("a-form-item",{attrs:{label:"活动名称"}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:t.ajaxData.title,rules:[{required:!0,message:"请输入活动名称！"},{max:6,message:"字数限制为6个字",trigger:"blur"}]}],expression:"[\n            'title',\n            { initialValue: ajaxData.title, rules: [{ required: true, message: '请输入活动名称！' },{ max: 6, message: '字数限制为6个字', trigger: 'blur' }] },\n          ]"}],attrs:{placeholder:"填写活动名称"}})],1),o("a-form-item",{attrs:{label:"商品活动描述"}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["desc",{initialValue:t.ajaxData.desc}],expression:"[\n            'desc',\n            { initialValue: ajaxData.desc },\n          ]"}],attrs:{placeholder:"填写商品活动描述"}})],1),o("a-form-item",{attrs:{label:t.t_label}},[o("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1==t.ajaxData.status,valuePropName:"checked"}],expression:"['status', { initialValue: ajaxData.status == 1 ? true : false, valuePropName: 'checked' }]"}],attrs:{"checked-children":"是","un-checked-children":"否"},on:{change:t.switchStatus}})],1)],1),o("a-card",{staticStyle:{"margin-top":"20px"},attrs:{title:"商品信息",bordered:!1}},[o("a-row",{attrs:{type:"flex",justify:"space-between"}},[o("a-col",[o("div",[o("div",[o("h1",[o("b",[t._v(t._s(t.title)+"列表")])])]),o("div",{staticStyle:{"font-size":"12px"}},[t._v("已过期组合前端过滤不展示")])])]),o("a-col",[o("div",[o("a-button",{attrs:{type:"primary"},on:{click:t.selectGoodsClick}},[t._v("添加组合")]),t.selectedGoodsDetailList.length?o("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"danger"},on:{click:t.delGoodsClick}},[t._v("删除 ")]):t._e()],1)])],1),[o("div",[o("a-table",{attrs:{"row-selection":{selectedRowKeys:t.selectedGoodsList,onChange:t.onSelectChange},rowKey:"combine_id",columns:t.goodsColumns,"data-source":t.selectedGoodsDetailList},scopedSlots:t._u([{key:"detail_url",fn:function(e){return o("span",{},[o("a",{staticClass:"ant-btn-link pointer",on:{click:function(o){return t.$refs.SeeH5QrcodeModal.showModal(e)}}},[t._v("查看二维码")])])}},{key:"cfg_sort",fn:function(e,i){return o("span",{},[o("a-input-number",{staticStyle:{width:"100px"},attrs:{min:0,step:"1"},model:{value:i.cfg_sort,callback:function(e){t.$set(i,"cfg_sort",e)},expression:"record.cfg_sort"}})],1)}},{key:"start_time",fn:function(e,i){return o("span",{},[t._v(" "+t._s(e)+"至"+t._s(i.end_time)+" ")])}},{key:"can_use_day",fn:function(e){return o("span",{},[t._v(" "+t._s(e)+"天 ")])}},{key:"action",fn:function(e,i){return o("span",{},[o("a",{on:{click:function(e){return t.delGoods(i.combine_id)}}},[t._v("删除")])])}}],null,!1,2793029513)})],1)],o("select-combine-goods",{attrs:{visible:t.selectGoodsVisible,menuList:t.goodsSortList,list:t.selectGoodsList,selectedList:t.selectedGoodsDetailList},on:{"update:visible":function(e){t.selectGoodsVisible=e},submit:t.onGoodsSelect,onMenuSelect:t.onMenuSelect,onSearch:t.goodsOnSearch}}),o("see-h5-qrcode",{ref:"SeeH5QrcodeModal"})],2),o("a-form-item",{staticClass:"text-left",staticStyle:{margin:"20px 0"},attrs:{wrapperCol:{span:24}}},[o("a-button",{attrs:{htmlType:"submit",type:"primary"}},[t._v("提交")])],1)],1):t._e()],1)},s=[],r=(o("d81d"),o("8a11")),a=o("b2cc"),n=o("721e"),l=[{title:"优惠组合名称",dataIndex:"title",scopedSlots:{customRender:"title"}},{title:"优惠组合类型",dataIndex:"cat_name"},{title:"查看二维码",dataIndex:"detail_url",scopedSlots:{customRender:"detail_url"},width:"10%"},{title:"排序",dataIndex:"cfg_sort",width:"10%",scopedSlots:{customRender:"cfg_sort"}},{title:"优惠组合活动时间",dataIndex:"start_time",width:"15%",scopedSlots:{customRender:"start_time"}},{title:"优惠组合有效期",dataIndex:"can_use_day",width:"15%",scopedSlots:{customRender:"can_use_day"}},{title:"状态",dataIndex:"status",width:"8%",scopedSlots:{customRender:"status"}},{title:"操作",dataIndex:"action",width:"15%",scopedSlots:{customRender:"action"}}],d={name:"ShopForm",components:{SelectCombineGoods:a["default"],SeeH5Qrcode:n["default"]},data:function(){return{queryParam:{type:2,page:0,cat_id:0,is_renovation:1},ajaxData:{title:"",desc:"",status:2},catArr:[],selectGoodsVisible:!1,goodsColumns:l,form:null,goodsSortList:[],selectedGoodsDetailList:[],selectedGoodsList:[],selectGoodsList:[],title:"超值组合设置",t_label:"是否展示超值组合"}},created:function(){this.getData(),this.setTitle()},mounted:function(){this.getData(),this.getCategoryListAll(),this.setTitle()},watch:{"$route.query.type":function(){this.queryParam.cat_id=this.$route.query.cat_id,this.queryParam.type=this.$route.query.type,this.getData(),this.getCategoryListAll(),this.setTitle()}},methods:{switchStatus:function(t){},getData:function(){var t=this;this.selectedGoodsDetailList=[],this.form=this.$form.createForm(this),this.queryParam["cat_id"]=this.$route.query.cat_id,console.log("请求数据。。。。"),console.log(this.queryParam),this.request(r["a"].getCfgInfo,this.queryParam).then((function(e){t.ajaxData=e.info,t.selectedGoodsDetailList=e.group_list,t.$forceUpdate()}))},getCategoryListAll:function(){var t=this;this.request(r["a"].getCategoryTree,{cat_id:this.$route.query.cat_id}).then((function(e){if(e.map((function(t){return t.children=[],t})),0==t.$route.query.cat_id){var o={sort_name:"其他",sort_id:0,key:0,children:[]};e.unshift(o)}t.goodsSortList=e}))},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t,o){if(!t){if(o.status=o.status?1:0,o.cat_id=e.$route.query.cat_id,o.type=e.$route.query.type,o.goods_list=e.selectedGoodsDetailList,console.log(o,"values"),!o.goods_list.length)return e.$message.error("请添加商品"),!1;e.request(r["a"].editCombineCfgInfo,o).then((function(t){e.$message.success("保存成功"),e.form=e.$form.createForm(e),e.$route.query.cat_id>0?e.$router.push("/group/platform.groupCategory/edit?cat_id="+e.$route.query.cat_id+"&cat_fid=0&key=2"):e.$router.push("/group/platform.decorate/index")}))}}))},getSelectGoodsList:function(){var t=this;this.request(r["a"].groupCombineList,this.queryParam).then((function(e){t.selectGoodsList=e.list}))},selectGoodsClick:function(){this.selectGoodsVisible=!0},onGoodsSelect:function(t){var e=this;console.log(t,"onGoodsSelect");var o=[];this.selectedGoodsDetailList.map((function(t){o.push(t.combine_id)})),t.goods.map((function(t){-1==o.indexOf(t.combine_id)&&e.selectedGoodsDetailList.push(t)})),this.selectGoodsVisible=!1},onMenuSelect:function(t){this.queryParam.cat_id=t.id,this.queryParam.keywords="",this.getSelectGoodsList()},delGoodsClick:function(){for(var t=[],e=0;e<this.selectedGoodsDetailList.length;e++)-1==this.selectedGoodsList.indexOf(this.selectedGoodsDetailList[e].combine_id)&&t.push(this.selectedGoodsDetailList[e]);this.selectedGoodsDetailList=t,this.selectedGoodsList=[]},delGoods:function(t){for(var e=[],o=[],i=0;i<this.selectedGoodsList.length;i++)t!=this.selectedGoodsList[i]&&e.push(this.selectedGoodsList[i]);for(i=0;i<this.selectedGoodsDetailList.length;i++)this.selectedGoodsDetailList[i].combine_id!=t&&o.push(this.selectedGoodsDetailList[i]);this.selectedGoodsList=e,this.selectedGoodsDetailList=o},goodsOnSearch:function(t){this.queryParam.sort_id=t.id,this.queryParam.keyword=t.keywords,this.getSelectGoodsList()},onSelectChange:function(t){this.selectedGoodsList=t},handleSortChange:function(t,e){var o=this;this.request(r["a"].editCombineCfgSort,{id:e,sort:t}).then((function(t){o.request(r["a"].getRenovationCombineGoodsList,o.queryParam).then((function(t){t.group_list.length&&(o.selectedGoodsDetailList=t.group_list)}))}))},setTitle:function(){this.queryParam.cat_id>0?(this.title="超值联盟设置",this.t_label="是否展示超值联盟"):(this.title="超值组合设置",this.t_label="是否展示超值组合")}}},u=d,c=o("0c7c"),p=Object(c["a"])(u,i,s,!1,null,"42e10d70",null);e["default"]=p.exports},cb4c1:function(t,e,o){"use strict";o("147b")},ea1d:function(t,e,o){"use strict";var i={seeWxQrcode:"/merchant/merchant.qrcode.index/seeWxQrcode",seeH5Qrcode:"/merchant/merchant.qrcode.index/seeH5Qrcode"};e["a"]=i}}]);