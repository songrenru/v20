(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-061f44ed","chunk-15d14042"],{"1c7f":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"message-suggestions-list-box"},[i("div",{staticClass:"search-box",staticStyle:{"padding-bottom":"20px"}},[i("a-row",[i("a-col",{staticClass:"suggestions_col",attrs:{md:6,sm:24}},[i("a-input-group",{attrs:{compact:""}},[i("label",{staticStyle:{"margin-top":"5px"}},[t._v("关键词名称：")]),t._v(" "),i("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入关键词名称"},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1)],1),i("a-col",{staticClass:"suggestions_col",attrs:{md:7,sm:24}},[i("label",{staticStyle:{"margin-top":"5px"}},[t._v("时间筛选：")]),i("a-range-picker",{staticStyle:{width:"300px"},attrs:{allowClear:!0},on:{change:t.dateOnChange}},[i("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),i("a-col",{staticClass:"suggestions_col_btn",attrs:{md:2,sm:24}},[i("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")])],1)],1)],1),i("a-row",[i("a-col",{staticStyle:{width:"400px","margin-left":"50px","padding-top":"15px"},attrs:{md:2,sm:24}},[1==t.role_addword?i("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.hotWordAddOrEdit.editword(0)}}},[t._v("新建关键词")]):t._e(),1==t.role_copyword?i("a-button",{staticStyle:{"margin-left":"50px"},attrs:{type:"primary"},on:{click:function(e){return t.$refs.copyOtherWordList.copyOtherWord()}}},[t._v(" 从其他小区复制 ")]):t._e()],1)],1),i("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading,"row-key":function(t){return t.id}},on:{change:t.table_change},scopedSlots:t._u([{key:"actionstatus",fn:function(e,a,s){return i("span",{},[1==a.status?i("span",{staticClass:"statusopen"},[t._v("已启用")]):t._e(),a.status<1?i("span",{staticClass:"statusclose"},[t._v("已禁用")]):t._e()])}},{key:"action",fn:function(e,a,s){return i("span",{},[1*a.status==1?i("a-popconfirm",{attrs:{title:"您确定将此条关键词禁用？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(e){return t.setWordStatus(a,0)}}},[i("a",{attrs:{href:"#"}},[t._v(" 设为禁用 ")])]):i("a-popconfirm",{attrs:{title:"您确定将此条关键词设置为启用？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(e){return t.setWordStatus(a,1)}}},[i("a",{attrs:{href:"#"}},[t._v(" 设为启用 ")])]),1==t.role_editword?i("a-divider",{attrs:{type:"vertical"}}):t._e(),1==t.role_editword?i("a",{on:{click:function(e){return t.$refs.hotWordAddOrEdit.editword(a.id)}}},[t._v(" 编辑关键词 ")]):t._e(),1==t.role_delword?i("a-divider",{attrs:{type:"vertical"}}):t._e(),1==t.role_delword?i("a",{on:{click:function(e){return t.delHotWord(a)}}},[t._v(" 删 除 ")]):t._e()],1)}}])}),i("hot-word-add-or-edit",{ref:"hotWordAddOrEdit",on:{ok:t.bindOk}}),i("copy-other-word-list",{ref:"copyOtherWordList",on:{ok:t.bindOk}})],1)},s=[],n=(i("7d24"),i("dfae")),r=(i("ac1f"),i("841c"),i("a0e0")),o=i("7047"),c=i("4e2e"),l=[{title:"关键词名称",dataIndex:"wordname",key:"wordname",width:310},{title:"关键词类型",dataIndex:"xtype_str",key:"xtype_str",width:310},{title:"更新时间",dataIndex:"update_time_str",key:"update_time_str",width:200},{title:"状态",dataIndex:"status",key:"status",align:"center",width:200,scopedSlots:{customRender:"actionstatus"}},{title:"操作",dataIndex:"",key:"",align:"center",scopedSlots:{customRender:"action"}}],d=[],h={name:"hotWordManageList",filters:{},components:{hotWordAddOrEdit:o["default"],copyOtherWordList:c["default"],"a-collapse":n["a"],"a-collapse-panel":n["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},pagination:{pageSize:10,total:10,current:1},search:{keyword:""},loading:!1,data:d,columns:l,page:1,confirmLoading:!1,role_addword:0,role_copyword:0,role_delword:0,role_editword:0}},activated:function(){this.getList()},methods:{getList:function(){var t=this;this.loading=!0,this.search["page"]=this.page,this.request(r["a"].getHouseHotWordLists,this.search).then((function(e){t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10,t.data=e.list,t.role_addword=e.role_addword,t.role_copyword=e.role_copyword,t.role_delword=e.role_delword,t.role_editword=e.role_editword,t.loading=!1}))},bindOk:function(){this.getList()},setWordStatus:function(t,e){var i=this,a={word_id:t.id,status:e};this.request(r["a"].setHouseHotWordStatus,a).then((function(t){i.$message.success("操作成功！"),i.getList()}))},delHotWord:function(t){var e=this,i={word_id:t.id,village_id:t.village_id};this.$confirm({title:"确认删除",content:"您确认要删除此条关键字为【"+t.wordname+"】的数据吗？",onOk:function(){e.request(r["a"].deleteHouseHotWord,i).then((function(t){e.$message.success("删除成功"),setTimeout((function(){e.confirmLoading=!1,e.getList()}),1500)}))},onCancel:function(){}})},table_change:function(t){console.log("e",t),t.current&&t.current>0&&(this.pagination.current=t.current,this.page=t.current,this.getList())},dateOnChange:function(t,e){this.search.date=e,console.log("search",this.search)},searchList:function(){console.log("search",this.search),this.page=1;var t={current:1,pageSize:10,total:10};console.log("searchList"),this.table_change(t)},resetList:function(){this.search={keyword:"",page:1},this.page=1,this.getList()}}},u=h,_=(i("a55f"),i("2877")),p=Object(_["a"])(u,a,s,!1,null,"4e382664",null);e["default"]=p.exports},"4e2e":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-drawer",{attrs:{title:t.title,width:1400,visible:t.visible,maskClosable:!1,placement:"right"},on:{close:t.handleCancel}},[i("div",{staticClass:"search-box"},[i("a-row",[i("a-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{description:"温馨提示：只能复制关键词类型是【功能链接】的状态是启用的关键词",type:"info"}}),i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"250px"},attrs:{span:18}},[i("label",{staticStyle:{"margin-top":"5px"}},[t._v("选择省市区县：")]),i("a-select",{staticStyle:{width:"150px"},attrs:{"default-value":"全部省",placeholder:"请选择省"},on:{change:t.handleSelectProvince},model:{value:t.search.province_id,callback:function(e){t.$set(t.search,"province_id",e)},expression:"search.province_id"}},[i("a-select-option",{attrs:{value:"0"}},[t._v(" 全部省 ")]),t._l(t.province_list,(function(e,a){return i("a-select-option",{attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"155px"},attrs:{span:18}},[i("a-select",{staticStyle:{width:"150px"},attrs:{"default-value":"全部城市",placeholder:"请选择城市"},on:{change:t.handleSelectCity},model:{value:t.search.city_id,callback:function(e){t.$set(t.search,"city_id",e)},expression:"search.city_id"}},[i("a-select-option",{attrs:{value:"0"}},[t._v(" 全部城市 ")]),t._l(t.city_list,(function(e,a){return i("a-select-option",{attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"170px"},attrs:{span:18}},[i("a-select",{staticStyle:{width:"150px"},attrs:{"default-value":"全部区县",placeholder:"请选择区县"},on:{change:t.handleSelectArea},model:{value:t.search.area_id,callback:function(e){t.$set(t.search,"area_id",e)},expression:"search.area_id"}},[i("a-select-option",{attrs:{value:"0"}},[t._v(" 全部区县 ")]),t._l(t.area_list,(function(e,a){return i("a-select-option",{attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"170px"},attrs:{span:18}},[i("a-select",{staticStyle:{width:"150px"},attrs:{"default-value":"全部街道/乡镇",placeholder:"街道/乡镇"},on:{change:t.handleSelectStreet},model:{value:t.search.street_id,callback:function(e){t.$set(t.search,"street_id",e)},expression:"search.street_id"}},[i("a-select-option",{attrs:{value:"0"}},[t._v(" 全部街道/乡镇 ")]),t._l(t.street_list,(function(e,a){return i("a-select-option",{attrs:{value:e.area_id}},[t._v(" "+t._s(e.area_name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"170px"},attrs:{span:18}},[i("a-select",{staticStyle:{width:"150px"},attrs:{"default-value":"全部社区/村",placeholder:"社区/村"},on:{change:t.handleSelectCommunity},model:{value:t.search.community_id,callback:function(e){t.$set(t.search,"community_id",e)},expression:"search.community_id"}},[i("a-select-option",{attrs:{value:"0"}},[t._v(" 全部社区/村 ")]),t._l(t.community_list,(function(e,a){return i("a-select-option",{attrs:{value:e.area_id}},[t._v(" "+t._s(e.area_name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"200px"},attrs:{span:18}},[i("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入小区名称",autocomplete:"off"},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1),i("a-col",{staticStyle:{"padding-left":"100px","padding-bottom":"15px","padding-top":"20px"},attrs:{span:18}},[i("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")]),i("a-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"},on:{click:function(e){return t.resetList()}}},[t._v(" 重置 ")])],1)],1)],1),i("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading,"row-key":function(t){return t.village_id}},on:{change:t.table_change},scopedSlots:t._u([{key:"action",fn:function(e,a,s){return i("span",{},[a.is_select?i("a",{staticStyle:{color:"green"},on:{click:function(e){return t.cancelSelectVillage(a)}}},[t._v("取消选择")]):i("a",{staticStyle:{color:"red"},on:{click:function(e){return t.selectVillageHandle(a)}}},[t._v("选择")])])}}])}),i("a-card",{staticStyle:{"text-align":"center"},attrs:{bordered:!1}},[i("a-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.handleSubmit()}}},[t._v("确认复制")])],1)],1)},s=[],n=(i("7d24"),i("dfae")),r=(i("ac1f"),i("841c"),i("d81d"),i("d3b7"),i("159b"),i("a0e0")),o=i("c1df"),c=i.n(o),l=[{title:"小区ID",dataIndex:"village_id",key:"village_id"},{title:"小区名称",dataIndex:"village_name",key:"village_name"},{title:"小区地址",dataIndex:"village_address",key:"village_address"},{title:"请选择",dataIndex:"",key:"",scopedSlots:{customRender:"action"}}],d=[],h={name:"copyOtherWordList",filters:{},components:{"a-collapse":n["a"],"a-collapse-panel":n["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},search:{keyword:"",province_id:"0",city_id:"0",area_id:"0",street_id:"0",community_id:"0",page:1},form:this.$form.createForm(this),pagination:{current:1,pageSize:10,total:10},visible:!1,loading:!1,data:d,columns:l,dateFormat:"YYYY-MM-DD HH:mm:ss",title:"",province_list:[],city_list:[],area_list:[],street_list:[],community_list:[],select_village_id:0,select_record:{}}},activated:function(){},methods:{moment:c.a,copyOtherWord:function(){this.select_village_id=0,this.select_record={},this.getPropertyvillage(),this.getProvinceCityAreas(0,0),this.visible=!0},handleSelectChange:function(t,e){this.group_id=0!=t&&"0"!=t&&t?1*t:0},handleCancel:function(){this.select_village_id=0,this.select_record={},this.city_list=[],this.area_list=[],this.street_list=[],this.community_list=[],this.search={keyword:"",province_id:"0",city_id:"0",area_id:"0",street_id:"0",community_id:"0",page:1},this.visible=!1},selectVillageHandle:function(t){var e=this;this.select_record=t;var i=1*t.village_id;this.select_village_id=i,console.log("village_id",i),this.data.map((function(t,a){1*t.village_id==i?(console.log("v.village_id",t.village_id),t.is_select=!0):t.is_select=!1,e.data[a]=t})),this.$forceUpdate()},cancelSelectVillage:function(t){var e=this,i=1*t.village_id;this.select_village_id=0,this.select_record={},console.log("village_id",i),this.data.forEach((function(t,a){1*t.village_id==i?t.is_select=!1:t.is_select=!0,e.data[a]=t})),this.$forceUpdate()},handleSubmit:function(){this.select_village_id<1&&this.$message.error("请先选择一个小区!");var t={other_village_id:this.select_village_id};this.loading=!0;var e=this;this.$confirm({title:"确认复制",content:"您确认要从小区【"+this.select_record.village_name+"】复制数据吗？",onOk:function(){e.request(r["a"].copyAvillageKeyword,t).then((function(t){e.loading=!1,e.$message.success("操作成功!"),setTimeout((function(){e.handleCancel(),e.$emit("ok")}),1500)})).catch((function(t){e.loading=!1}))},onCancel:function(){e.loading=!1}})},getPropertyvillage:function(){var t=this;this.search.page=this.pagination.current,this.request(r["a"].getHotWordAllVillages,this.search).then((function(e){t.data=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},searchList:function(){this.pagination.current=1,this.getPropertyvillage()},getProvinceCityAreas:function(t,e){var i=this,a={xtype:t,pid:e};this.request(r["a"].getProvinceCityAreas,a).then((function(e){0==t?i.province_list=e:1==t?i.city_list=e:2==t&&(i.area_list=e)}))},getStreetCommunitys:function(t,e){var i=this,a={xtype:t,pid:e};this.request(r["a"].getAreaStreetCommunity,a).then((function(e){"street"==t?i.street_list=e.list:"community"==t&&(i.community_list=e.list)}))},handleSelectProvince:function(t,e){this.city_list=[],this.area_list=[],this.street_list=[],this.community_list=[],this.search.city_id="0",this.search.area_id="0",this.search.street_id="0",this.search.community_id="0",0!=t&&"0"!=t&&t?(this.search.province_id=t,this.getProvinceCityAreas(1,this.search.province_id)):this.search.province_id="0"},handleSelectCity:function(t,e){this.area_list=[],this.street_list=[],this.community_list=[],this.search.area_id="0",this.search.street_id="0",this.search.community_id="0",0!=t&&"0"!=t&&t?(this.search.city_id=t,this.getProvinceCityAreas(2,this.search.city_id)):this.search.city_id="0"},handleSelectArea:function(t,e){this.street_list=[],this.community_list=[],this.search.street_id="0",this.search.community_id="0",0!=t&&"0"!=t&&t?(this.search.area_id=t,this.getStreetCommunitys("street",this.search.area_id)):this.search.area_id="0"},handleSelectStreet:function(t,e){this.community_list=[],this.search.community_id="0",0!=t&&"0"!=t&&t?(this.search.street_id=t,this.getStreetCommunitys("community",this.search.street_id)):this.search.street_id="0"},handleSelectCommunity:function(t,e){this.search.community_id=0!=t&&"0"!=t&&t?t:"0"},date_moment:function(t,e){return t?c()(t,e):""},resetList:function(){this.city_list=[],this.area_list=[],this.search={keyword:"",province_id:"0",city_id:"0",area_id:"0",street_id:"0",community_id:"0",page:1},this.getPropertyvillage()},table_change:function(t){var e=this;t.current&&t.current>0&&(e.pagination.current=t.current,e.getPropertyvillage())}}},u=h,_=(i("d6b8"),i("2877")),p=Object(_["a"])(u,a,s,!1,null,"2702be38",null);e["default"]=p.exports},"9e58":function(t,e,i){},a55f:function(t,e,i){"use strict";i("9e58")},d6b8:function(t,e,i){"use strict";i("f9c5")},f9c5:function(t,e,i){}}]);