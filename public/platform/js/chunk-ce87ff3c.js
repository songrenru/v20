(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce87ff3c","chunk-72139018"],{"08f5":function(t,o,e){"use strict";e.r(o);var r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("a-modal",{attrs:{title:t.title,width:960,height:860,visible:t.visible},on:{cancel:t.handelCancle,ok:t.handelOK}},[e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"message-suggestions-list-box"},[e("a-page-header",{staticStyle:{padding:"0 0 16px 0"}},[e("template",{slot:"extra"},[e("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(o){return t.$refs.createModal.add(t.now_cat_id)}}},[t._v("新建分类")])],1)],2),e("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,rowKey:"custom_id",pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"custom_id",fn:function(o,r){return[e("a-button",{staticClass:"pcButton",on:{click:function(o){return t.getManage(r)}}},[t._v("去管理")])]}},{key:"action",fn:function(o,r){return e("span",{},[[e("a",{on:{click:function(o){return t.$refs.createModal.edit(r.custom_id,r.cat_id)}}},[t._v("编辑")]),e("a-divider",{attrs:{type:"vertical"}})],e("a",{on:{click:function(o){return t.removeCustom(r)}}},[t._v("删除")])],2)}}])}),e("create-custom",{ref:"createModal",on:{loaddata:t.getList}})],1)])],1)},a=[],i=(e("d81d"),e("8a11")),u=e("30cd"),n={name:"GroupCustomList",components:{CreateCustom:u["default"]},data:function(){return{visible:!1,title:"",queryParam:{cat_id:"0"},pagination:{pageSize:10,total:10,"show-total":function(t){return"共 ".concat(t," 条记录")}},page:1,data:[],now_cat_id:0,columns:[{title:"排序",dataIndex:"sort",width:"8%"},{title:"推荐标题",dataIndex:"title",width:"15%"},{title:"副标题",dataIndex:"sub_title",width:"15%"},{title:"团购类型",dataIndex:"category",width:"15%"},{title:"店铺管理",dataIndex:"custom_id",width:"8%",scopedSlots:{customRender:"custom_id"}},{title:"操作",dataIndex:"action",width:"10%",scopedSlots:{customRender:"action"}}]}},created:function(){},activated:function(){},mounted:function(){},methods:{getList:function(t){var o=this;console.log(t),this.visible=!0,this.title=t.title,this.queryParam["page"]=this.page,this.queryParam["cat_id"]=t.cat_id,this.now_cat_id=t.cat_id,this.columns.map((function(o){return"custom_id"==o.dataIndex&&(0==t.cat_id?o.title="店铺管理":o.title="商品管理"),o})),this.request(i["a"].getRenovationCustomList,this.queryParam).then((function(t){console.log(t.list),o.data=t.list,o.pagination.total=t.count}))},tableChange:function(t){this.queryParam["pageSize"]=t.pageSize,this.queryParam["page"]=t.current,t.current&&t.current>0&&(this.page=t.current),this.getList({cat_id:this.now_cat_id,page:this.page})},removeCustom:function(t){var o=this;this.$confirm({title:"是否确定删除该店铺活动推荐分类吗?",centered:!0,onOk:function(){o.request(i["a"].delRenovationCustom,{custom_id:t.custom_id,cat_id:t.cat_id}).then((function(t){o.$message.success("操作成功！"),o.getList({cat_id:o.now_cat_id,page:o.page})}))},onCancel:function(){}})},getManage:function(t){0==t.cat_id?this.$router.push({path:"/group/platform.groupRenovationCustomStore/index",query:{custom_id:t.custom_id}}):this.$router.push({path:"/group/platform.groupRenovationCustomGroup/index",query:{custom_id:t.custom_id}}),this.visible=!1},handelCancle:function(){this.visible=!1},handelOK:function(){this.visible=!1}}},s=n,l=(e("b77c"),e("0c7c")),p=Object(l["a"])(s,r,a,!1,null,"0935c6b5",null);o["default"]=p.exports},"30cd":function(t,o,e){"use strict";e.r(o);var r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("a-modal",{attrs:{title:t.title,width:840,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("div",{staticStyle:{margin:"0px 0px 40px 0px"}},[e("h3",[t._v("商品管理规则")]),e("div",[t._v("1.店铺展示按距离默认展示，可手动进行商品排序，且手动排序的店铺展示的优先级最高")]),e("div",[t._v("2.商品类型即团购商品所有类型，在所有类型中，可进行多选")])]),e("a-spin",{attrs:{spinning:t.confirmLoading}},[e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"推荐标题",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:t.detail.title,rules:[{required:!0,message:"请输入推荐标题"},{max:4,message:"字数限制为4个字",trigger:"blur"}]}],expression:"['title', {initialValue:detail.title,rules: [{required: true, message: '请输入推荐标题'},{ max: 4, message: '字数限制为4个字', trigger: 'blur' }]}]"}]})],1),e("a-form-item",{attrs:{label:"副标题",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sub_title",{initialValue:t.detail.sub_title,rules:[{required:!0,message:"请输入副标题"},{max:4,message:"字数限制为4个字",trigger:"blur"}]}],expression:"['sub_title', {initialValue:detail.sub_title,rules: [{required: true, message: '请输入副标题'},{ max: 4, message: '字数限制为4个字', trigger: 'blur' }]}]"}]})],1),e("a-form-item",{attrs:{label:"团购类型",labelCol:t.labelCol,wrapperCol:t.wrapperCol,help:"不选择则为全部"}},[e("a-tree-select",{staticStyle:{width:"100%"},attrs:{value:t.formData.ids,dropdownStyle:{height:"200px"},"tree-data":t.cat_sel,"search-placeholder":"全部",replaceFields:{title:"cat_name",value:"cat_id",key:"key",disabled:!0,children:"children"}},on:{change:t.handleChange}})],1),e("a-form-item",{attrs:{label:"排序",labelCol:t.labelCol,wrapperCol:t.wrapperCol,help:"值越大越靠前"}},[e("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:t.detail.sort}],expression:"['sort',{initialValue:detail.sort}]"}],attrs:{min:0}})],1)],1)],1)],1)},a=[],i=e("53ca"),u=(e("a9e3"),e("8a11")),n={props:{category_id:{type:[String,Number],default:"0"},cat_id_t:{type:[String,Number],default:"0"}},data:function(){return{size:"default",title:"新建店铺活动推荐",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),dataList:[],type:"0",showMethod:[],detail:{custom_id:0,title:"",sub_title:"",sort:"",type:""},cat_id:"",cat_type:"",custom_id:0,queryParam:{cat_id:this.cat_id_t,category_id:""},cat_sel:[],formData:{cat_id:this.cat_id_t,title:"",description:"",type:1,ids:0,show_sort_type:1,show_type:1,sort:0}}},mounted:function(){},methods:{handleChange:function(t){console.log(t,"selectedItems"),this.formData.ids=t,console.log(this.formData.ids,"this.formData.ids===this.formData.ids")},getLists:function(){var t=this;this.request(u["a"].getGroupCategoryList).then((function(o){t.cat_sel=o.list}))},add:function(t){this.visible=!0,this.title=0==t?"新建店铺活动推荐":"新建团购分类展示",this.cat_type=t,this.custom_id=0,this.queryParam.cat_id=this.cat_id,this.queryParam.category_id=this.category_id,this.formData.cat_id=0,this.getLists(),this.detail={custom_id:0,title:"",sub_title:"",sort:"",type:[]}},edit:function(t,o){this.visible=!0,this.cat_type=o,this.custom_id=t,this.getEditInfo(),this.queryParam.cat_id=this.cat_id,this.queryParam.category_id=this.category_id,this.formData.cat_id=this.cat_id,this.getLists(),this.custom_id>0?this.title=0==o?"编辑店铺活动推荐":"编辑团购分类展示":this.title=0==o?"新建店铺活动推荐":"新建团购分类展示"},handleTypeChange:function(t){console.log("Selected: ".concat(t))},handleSubmit:function(){var t=this,o=this.form.validateFields;this.confirmLoading=!0,o((function(o,e){console.log(e),o?t.confirmLoading=!1:(e.custom_id=t.custom_id,e.cat_id=t.cat_type,e.type=t.formData.ids,t.request(u["a"].addRenovationCustom,e).then((function(o){t.custom_id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1;var o={};0==t.cat_type?o["title"]="店铺活动推荐":o["title"]="团购分类展示",o["cat_id"]=t.cat_type,t.$emit("loaddata",o)}),1500)})).catch((function(o){t.confirmLoading=!1})))}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.fid="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(u["a"].getRenovationCustomInfo,{custom_id:this.custom_id}).then((function(o){t.showMethod=o.showMethod,t.detail={title:"",sub_title:"",sort:""},"object"==Object(i["a"])(o.detail)&&(t.detail=o.detail,t.formData.ids=o.detail.type),console.log("detail",t.detail)}))},change:function(t){this.detail.fid=t}}},s=n,l=e("0c7c"),p=Object(l["a"])(s,r,a,!1,null,null,null);o["default"]=p.exports},"8a11":function(t,o,e){"use strict";var r={groupCombineList:"/group/platform.groupCombine/groupCombinelist",getGroupCombineDetail:"/group/platform.groupCombine/getGroupCombineDetail",editGroupCombine:"/group/platform.groupCombine/editGroupCombine",getGroupCombineGoodsList:"/group/platform.group/getGroupCombineGoodsList",getGroupCombineOrderList:"/group/platform.groupOrder/getGroupCombineOrderList",exportCombineOrder:"/group/platform.groupOrder/exportCombineOrder",getRobotList:"/group/platform.groupCombine/getRobotList",addRobot:"/group/platform.groupCombine/addRobot",delRobot:"/group/platform.groupCombine/delRobot",editSpreadNum:"/group/platform.groupCombine/editSpreadNum",getGroupGoodsList:"/group/platform.group/getGroupGoodsList",getGroupFirstCategorylist:"/group/platform.groupCategory/getGroupFirstCategorylist",getCategoryTree:"/group/platform.groupCategory/getCategoryTree",getPayMethodList:"/group/platform.groupOrder/getPayMethodList",getOrderDetail:"/group/platform.groupOrder/getOrderDetail",editOrderNote:"/group/platform.groupOrder/editOrderNote",getCfgInfo:"/group/platform.groupRenovation/getInfo",editCfgInfo:"/group/platform.groupRenovation/editCfgInfo",editCfgSort:"/group/platform.groupRenovation/editCfgSort",getRenovationGoodsList:"/group/platform.groupRenovation/getRenovationGoodsList",editCombineCfgInfo:"/group/platform.groupRenovation/editCombineCfgInfo",editCombineCfgSort:"/group/platform.groupRenovation/editCombineCfgSort",getRenovationCombineGoodsList:"/group/platform.groupRenovation/getRenovationCombineGoodsList",getRenovationCustomList:"/group/platform.groupRenovation/getRenovationCustomList",addRenovationCustom:"/group/platform.groupRenovation/addRenovationCustom",getRenovationCustomInfo:"/group/platform.groupRenovation/getRenovationCustomInfo",delRenovationCustom:"/group/platform.groupRenovation/delRenovationCustom",getGroupCategoryList:"/group/platform.group/getGroupCategoryList",getRenovationCustomStoreSortList:"/group/platform.groupRenovation/getRenovationCustomStoreSortList",editRenovationCustomStoreSort:"/group/platform.groupRenovation/editRenovationCustomStoreSort",getRenovationCustomGroupSortList:"/group/platform.groupRenovation/getRenovationCustomGroupSortList",editRenovationCustomGroupSort:"/group/platform.groupRenovation/editRenovationCustomGroupSort",getGroupCategorylist:"/group/platform.groupCategory/getGroupCategorylist",delGroupCategory:"/group/platform.groupCategory/delGroupCategory",addGroupCategory:"/group/platform.groupCategory/addGroupCategory",configGroupCategory:"/common/platform.index/config",uploadPictures:"/common/common.UploadFile/uploadPictures",getGroupCategoryInfo:"/group/platform.groupCategory/getGroupCategoryInfo",groupCategorySaveSort:"/group/platform.groupCategory/saveSort",getGroupCategoryCueList:"/group/platform.groupCategory/getGroupCategoryCueList",getGroupCategoryCatFieldList:"/group/platform.groupCategory/getCatFieldList",getGroupCategoryWriteFieldList:"/group/platform.groupCategory/getWriteFieldList",delGroupCategoryCue:"/group/platform.groupCategory/delGroupCategoryCue",delGroupCategoryWriteField:"/group/platform.groupCategory/delWriteField",groupCategoryCatFieldShow:"/group/platform.groupCategory/catFieldShow",editGroupCategoryCue:"/group/platform.groupCategory/editGroupCategoryCue",groupCategoryAddWriteField:"/group/platform.groupCategory/addWriteField",groupCategoryAddCatField:"/group/platform.groupCategory/addCatField",getAdverList:"/group/platform.groupAdver/getAdverList",getAllArea:"/common/common.area/getAllArea",addGroupAdver:"/group/platform.groupAdver/addGroupAdver",delGroupAdver:"/group/platform.groupAdver/delGroupAdver",getEditAdver:"/group/platform.groupAdver/getEditAdver",updateGroupCategoryBgColor:"/group/platform.groupCategory/updateGroupCategoryBgColor",getGroupSearchHotList:"/group/platform.groupSearchHot/getGroupSearchHotList",addGroupSearchHot:"/group/platform.groupSearchHot/addGroupSearchHot",getGroupSearchHotInfo:"/group/platform.groupSearchHot/getGroupSearchHotInfo",saveSearchHotSort:"/group/platform.groupSearchHot/saveSearchHotSort",delSearchHot:"/group/platform.groupSearchHot/delSearchHot",getUrl:"/group/platform.group/getUrl",changeShow:"/group/platform.groupHomeMenu/changeShow",getShow:"/group/platform.groupHomeMenu/getShow",groupOrderShareList:"/villageGroup/platform.GroupOrder/groupOrderShareList"};o["a"]=r},aaa9:function(t,o,e){},b77c:function(t,o,e){"use strict";e("aaa9")}}]);