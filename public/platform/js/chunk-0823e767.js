(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0823e767"],{"43bb":function(t,e,o){"use strict";var a={getHouseHotWordLists:"/voice_robot/platform.HotWordManage/hotWordList",setHouseHotWordStatus:"/voice_robot/platform.HotWordManage/editHotWordStatus",saveHotWordData:"/voice_robot/platform.HotWordManage/editHotWord",deleteHouseHotWord:"/voice_robot/platform.HotWordManage/delHotWord",getOneHouseHotWord:"/voice_robot/platform.HotWordManage/hotWordDetail",getHouseHotWordMaterialCategoryLists:"/voice_robot/platform.MaterialCategory/materialCategoryList",deleteHouseHotWordMaterialCategory:"/voice_robot/platform.MaterialCategory/delMaterialCategory",saveMaterialCategoryData:"/voice_robot/platform.MaterialCategory/editMaterialCategory",exportHotWordMaterial:"/voice_robot/platform.MaterialCategory/exportMaterialCategory",getHouseHotWordMaterialLists:"/voice_robot/platform.MaterialCategory/contentList",deleteHouseHotWordMaterialContent:"/voice_robot/platform.MaterialCategory/delContent",saveHouseHotWordMaterialSetData:"/voice_robot/platform.MaterialCategory/saveContent",getHotWordMaterialLibrary:"/voice_robot/platform.MaterialCategory/getHotWordMaterialLibrary",getHotWordMaterialLibraryDetails:"/voice_robot/platform.MaterialCategory/getHotWordMaterialLibraryDetail"};e["a"]=a},"7afe":function(t,e,o){},a7ce:function(t,e,o){"use strict";o("7afe")},dc55:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:t.title,width:850,height:650,footer:null,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[e("a-table",{attrs:{columns:t.columns,"data-source":t.navigationList,pagination:t.pagination,loading:t.loading,"row-key":function(t){return t.material_id}},on:{change:t.tableChange},scopedSlots:t._u([{key:"xcontentaction",fn:function(o,a,i){return e("div",{},[1==a.xtype?e("div",[t._v(" "+t._s(a.xcontent)+" ")]):2==a.xtype?e("div",[e("div",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v(t._s(a.xname))]),e("a",{attrs:{href:a.audio_url,target:"_blank"}},[t._v(t._s(a.audio_url))])]):3==a.xtype?e("div",{staticClass:"previewimg"},t._l(a.word_imgs,(function(t,o){return e("img",{staticStyle:{height:"80px","margin-right":"10px"},attrs:{src:t,preview:"1"}})})),0):t._e()])}},{key:"action",fn:function(o,a){return e("span",{},[e("a",{on:{click:function(e){return t.selected_url(a)}}},[t._v("选中")])])}}])})],1)},i=[],r=(o("aa48"),o("8f7e"),o("43bb")),n=[{title:"编号",dataIndex:"material_id",key:"material_id"},{title:"回复内容",dataIndex:"xcontent",key:"xcontent",width:450,scopedSlots:{customRender:"xcontentaction"}},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],l={name:"HotwordMaterialDetails",data:function(){return{title:"",category:{},visible:!1,confirmLoading:!1,navigationList:[],pagination:{current:1,pageSize:20,total:20},search:{page:1},page:1,xtype:"",loading:!1,cfromModel:""}},computed:{columns:function(){return n}},methods:{navigations:function(t,e,o){this.title="【"+t.categoryname+"】详细",this.category=t,this.visible=!0,this.xtype=e,this.cfromModel=o||"",this.getList()},getList:function(){var t=this;t.loading=!0,t.search.cate_id=t.category.cate_id,t.search.xtype=t.xtype,t.search.page=t.pagination.current;var e=r["a"].getHotWordMaterialLibraryDetails;t.request(e,t.search).then((function(e){t.loading=!1,t.navigationList=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:20}))},tableChange:function(t){var e=this;t.current&&t.current>0&&(e.pagination.current=t.current,e.getList())},selected_url:function(t){this.$emit("ok",t),this.visible=!1},handleCancel:function(){this.category={},this.visible=!1}}},s=l,c=(o("a7ce"),o("0b56")),d=Object(c["a"])(s,a,i,!1,null,"2f614eeb",null);e["default"]=d.exports}}]);