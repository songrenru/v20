(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4771ba2a"],{"4e2e":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-drawer",{attrs:{title:t.title,width:1400,visible:t.visible,maskClosable:!1,placement:"right"},on:{close:t.handleCancel}},[i("div",{staticClass:"search-box"},[i("a-row",[i("a-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{description:"温馨提示：只能复制关键词类型是【功能链接】的状态是启用的关键词",type:"info"}}),i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"250px"},attrs:{span:18}},[i("label",{staticStyle:{"margin-top":"5px"}},[t._v("选择省市区县：")]),i("a-select",{staticStyle:{width:"150px"},attrs:{"default-value":"全部省",placeholder:"请选择省"},on:{change:t.handleSelectProvince},model:{value:t.search.province_id,callback:function(e){t.$set(t.search,"province_id",e)},expression:"search.province_id"}},[i("a-select-option",{attrs:{value:"0"}},[t._v(" 全部省 ")]),t._l(t.province_list,(function(e,a){return i("a-select-option",{attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"155px"},attrs:{span:18}},[i("a-select",{staticStyle:{width:"150px"},attrs:{"default-value":"全部城市",placeholder:"请选择城市"},on:{change:t.handleSelectCity},model:{value:t.search.city_id,callback:function(e){t.$set(t.search,"city_id",e)},expression:"search.city_id"}},[i("a-select-option",{attrs:{value:"0"}},[t._v(" 全部城市 ")]),t._l(t.city_list,(function(e,a){return i("a-select-option",{attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"170px"},attrs:{span:18}},[i("a-select",{staticStyle:{width:"150px"},attrs:{"default-value":"全部区县",placeholder:"请选择区县"},on:{change:t.handleSelectArea},model:{value:t.search.area_id,callback:function(e){t.$set(t.search,"area_id",e)},expression:"search.area_id"}},[i("a-select-option",{attrs:{value:"0"}},[t._v(" 全部区县 ")]),t._l(t.area_list,(function(e,a){return i("a-select-option",{attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"170px"},attrs:{span:18}},[i("a-select",{staticStyle:{width:"150px"},attrs:{"default-value":"全部街道/乡镇",placeholder:"街道/乡镇"},on:{change:t.handleSelectStreet},model:{value:t.search.street_id,callback:function(e){t.$set(t.search,"street_id",e)},expression:"search.street_id"}},[i("a-select-option",{attrs:{value:"0"}},[t._v(" 全部街道/乡镇 ")]),t._l(t.street_list,(function(e,a){return i("a-select-option",{attrs:{value:e.area_id}},[t._v(" "+t._s(e.area_name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"170px"},attrs:{span:18}},[i("a-select",{staticStyle:{width:"150px"},attrs:{"default-value":"全部社区/村",placeholder:"社区/村"},on:{change:t.handleSelectCommunity},model:{value:t.search.community_id,callback:function(e){t.$set(t.search,"community_id",e)},expression:"search.community_id"}},[i("a-select-option",{attrs:{value:"0"}},[t._v(" 全部社区/村 ")]),t._l(t.community_list,(function(e,a){return i("a-select-option",{attrs:{value:e.area_id}},[t._v(" "+t._s(e.area_name)+" ")])}))],2)],1),i("a-col",{staticStyle:{"padding-left":"1px","padding-right":"1px",width:"200px"},attrs:{span:18}},[i("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入小区名称",autocomplete:"off"},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1),i("a-col",{staticStyle:{"padding-left":"100px","padding-bottom":"15px","padding-top":"20px"},attrs:{span:18}},[i("a-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.searchList()}}},[t._v(" 查询 ")]),i("a-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"},on:{click:function(e){return t.resetList()}}},[t._v(" 重置 ")])],1)],1)],1),i("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading,"row-key":function(t){return t.village_id}},on:{change:t.table_change},scopedSlots:t._u([{key:"action",fn:function(e,a,s){return i("span",{},[a.is_select?i("a",{staticStyle:{color:"green"},on:{click:function(e){return t.cancelSelectVillage(a)}}},[t._v("取消选择")]):i("a",{staticStyle:{color:"red"},on:{click:function(e){return t.selectVillageHandle(a)}}},[t._v("选择")])])}}])}),i("a-card",{staticStyle:{"text-align":"center"},attrs:{bordered:!1}},[i("a-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.handleSubmit()}}},[t._v("确认复制")])],1)],1)},s=[],l=(i("7d24"),i("dfae")),n=(i("ac1f"),i("841c"),i("d81d"),i("d3b7"),i("159b"),i("a0e0")),c=i("c1df"),r=i.n(c),o=[{title:"小区ID",dataIndex:"village_id",key:"village_id"},{title:"小区名称",dataIndex:"village_name",key:"village_name"},{title:"小区地址",dataIndex:"village_address",key:"village_address"},{title:"请选择",dataIndex:"",key:"",scopedSlots:{customRender:"action"}}],d=[],h={name:"copyOtherWordList",filters:{},components:{"a-collapse":l["a"],"a-collapse-panel":l["a"].Panel},data:function(){return{labelCol:{xs:{span:10},sm:{span:3}},search:{keyword:"",province_id:"0",city_id:"0",area_id:"0",street_id:"0",community_id:"0",page:1},form:this.$form.createForm(this),pagination:{current:1,pageSize:10,total:10},visible:!1,loading:!1,data:d,columns:o,dateFormat:"YYYY-MM-DD HH:mm:ss",title:"",province_list:[],city_list:[],area_list:[],street_list:[],community_list:[],select_village_id:0,select_record:{}}},activated:function(){},methods:{moment:r.a,copyOtherWord:function(){this.select_village_id=0,this.select_record={},this.getPropertyvillage(),this.getProvinceCityAreas(0,0),this.visible=!0},handleSelectChange:function(t,e){this.group_id=0!=t&&"0"!=t&&t?1*t:0},handleCancel:function(){this.select_village_id=0,this.select_record={},this.city_list=[],this.area_list=[],this.street_list=[],this.community_list=[],this.search={keyword:"",province_id:"0",city_id:"0",area_id:"0",street_id:"0",community_id:"0",page:1},this.visible=!1},selectVillageHandle:function(t){var e=this;this.select_record=t;var i=1*t.village_id;this.select_village_id=i,console.log("village_id",i),this.data.map((function(t,a){1*t.village_id==i?(console.log("v.village_id",t.village_id),t.is_select=!0):t.is_select=!1,e.data[a]=t})),this.$forceUpdate()},cancelSelectVillage:function(t){var e=this,i=1*t.village_id;this.select_village_id=0,this.select_record={},console.log("village_id",i),this.data.forEach((function(t,a){1*t.village_id==i?t.is_select=!1:t.is_select=!0,e.data[a]=t})),this.$forceUpdate()},handleSubmit:function(){this.select_village_id<1&&this.$message.error("请先选择一个小区!");var t={other_village_id:this.select_village_id};this.loading=!0;var e=this;this.$confirm({title:"确认复制",content:"您确认要从小区【"+this.select_record.village_name+"】复制数据吗？",onOk:function(){e.request(n["a"].copyAvillageKeyword,t).then((function(t){e.loading=!1,e.$message.success("操作成功!"),setTimeout((function(){e.handleCancel(),e.$emit("ok")}),1500)})).catch((function(t){e.loading=!1}))},onCancel:function(){e.loading=!1}})},getPropertyvillage:function(){var t=this;this.search.page=this.pagination.current,this.request(n["a"].getHotWordAllVillages,this.search).then((function(e){t.data=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},searchList:function(){this.pagination.current=1,this.getPropertyvillage()},getProvinceCityAreas:function(t,e){var i=this,a={xtype:t,pid:e};this.request(n["a"].getProvinceCityAreas,a).then((function(e){0==t?i.province_list=e:1==t?i.city_list=e:2==t&&(i.area_list=e)}))},getStreetCommunitys:function(t,e){var i=this,a={xtype:t,pid:e};this.request(n["a"].getAreaStreetCommunity,a).then((function(e){"street"==t?i.street_list=e.list:"community"==t&&(i.community_list=e.list)}))},handleSelectProvince:function(t,e){this.city_list=[],this.area_list=[],this.street_list=[],this.community_list=[],this.search.city_id="0",this.search.area_id="0",this.search.street_id="0",this.search.community_id="0",0!=t&&"0"!=t&&t?(this.search.province_id=t,this.getProvinceCityAreas(1,this.search.province_id)):this.search.province_id="0"},handleSelectCity:function(t,e){this.area_list=[],this.street_list=[],this.community_list=[],this.search.area_id="0",this.search.street_id="0",this.search.community_id="0",0!=t&&"0"!=t&&t?(this.search.city_id=t,this.getProvinceCityAreas(2,this.search.city_id)):this.search.city_id="0"},handleSelectArea:function(t,e){this.street_list=[],this.community_list=[],this.search.street_id="0",this.search.community_id="0",0!=t&&"0"!=t&&t?(this.search.area_id=t,this.getStreetCommunitys("street",this.search.area_id)):this.search.area_id="0"},handleSelectStreet:function(t,e){this.community_list=[],this.search.community_id="0",0!=t&&"0"!=t&&t?(this.search.street_id=t,this.getStreetCommunitys("community",this.search.street_id)):this.search.street_id="0"},handleSelectCommunity:function(t,e){this.search.community_id=0!=t&&"0"!=t&&t?t:"0"},date_moment:function(t,e){return t?r()(t,e):""},resetList:function(){this.city_list=[],this.area_list=[],this.search={keyword:"",province_id:"0",city_id:"0",area_id:"0",street_id:"0",community_id:"0",page:1},this.getPropertyvillage()},table_change:function(t){var e=this;t.current&&t.current>0&&(e.pagination.current=t.current,e.getPropertyvillage())}}},_=h,u=(i("d6b8"),i("0c7c")),p=Object(u["a"])(_,a,s,!1,null,"2702be38",null);e["default"]=p.exports},d6b8:function(t,e,i){"use strict";i("fd37")},fd37:function(t,e,i){}}]);