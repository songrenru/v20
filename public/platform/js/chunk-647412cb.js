(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-647412cb"],{"590c":function(t,i,s){"use strict";s("b452")},b452:function(t,i,s){},f96f:function(t,i,s){"use strict";var n={getMainBasicData:"/common/platform.Main/getMainBasicData",getMiddleStatisticsData:"/common/platform.Main/getMiddleStatisticsData",getBacklog:"/common/platform.Main/getBacklog",getHotMenu:"/common/platform.plugin/getHotMenu",editHotMenu:"/common/platform.plugin/editHotMenu",getAllMenuTree:"/common/platform.plugin/getAllMenuTree"};i["a"]=n},fb04:function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t._self._c;return i("div",{staticClass:"add-menu"},[i("a-modal",{staticClass:"modal",attrs:{width:"60%",title:"自定义功能",centered:""},on:{ok:t.handleOk,cancel:t.handleClose},model:{value:t.visible,callback:function(i){t.visible=i},expression:"visible"}},[i("div",{staticClass:"header"},[i("div",{staticClass:"title"},[t._v("已选功能："),i("span",{staticClass:"desc"},[t._v("（点击拖动调整排序）")])]),i("a-input-search",{staticStyle:{width:"200px"},attrs:{placeholder:"输入功能名称",allowClear:""},on:{change:t.inputChange,search:t.onSearch},model:{value:t.keywords,callback:function(i){t.keywords=i},expression:"keywords"}})],1),i("div",{staticClass:"selected"},[t.sList.length?i("div",{staticClass:"list"},[i("draggable",t._b({model:{value:t.sList,callback:function(i){t.sList=i},expression:"sList"}},"draggable",t.dragOptions,!1),[i("transition-group",{attrs:{type:"transition",name:"flip-list"}},t._l(t.sList,(function(s,n){return i("div",{key:n,staticClass:"item move"},[i("div",{staticClass:"icon"},[i("img",{attrs:{src:s.image}})]),i("div",{staticClass:"name no-wrap"},[t._v(t._s(s.plugin_name))]),i("a-icon",{staticClass:"delete color-red",attrs:{type:"close-circle"},on:{click:function(i){return i.stopPropagation(),t.deleteMenu(n)}}})],1)})),0)],1)],1):i("div",{staticClass:"no-data"},[t._v("暂未设置常用功能~")])]),i("div",{staticClass:"all"},[t.allList.length?i("block",t._l(t.allList,(function(s,n){return i("div",{key:n},[i("div",{staticClass:"title"},[t._v(t._s(s.cat_name))]),s.plugin_list&&s.plugin_list.length?i("div",{staticClass:"list"},t._l(s.plugin_list,(function(s,e){return i("div",{key:e,staticClass:"item"},[i("div",{staticClass:"icon"},[i("img",{attrs:{src:s.image}})]),i("div",{staticClass:"name no-wrap"},[t._v(t._s(s.plugin_name))]),s.add?t._e():i("a-icon",{staticClass:"add",attrs:{type:"plus-circle"},on:{click:function(i){return i.stopPropagation(),t.addMenu(n,e,s)}}})],1)})),0):i("div",{staticClass:"no-data"},[t._v("此分类下暂无常用功能~")])])})),0):i("div",{staticClass:"no-data"},[t._v("暂无记录~")])],1)])],1)},e=[],a=(s("075f"),s("c5cb"),s("08c7"),s("4afa"),s("f96f")),l=s("3335"),o=s.n(l),c={name:"PlatformAddMenu",components:{draggable:o.a},props:{selectedList:{type:Array,default:function(){return[]}}},computed:{dragOptions:function(){return{animation:0,group:"description",disabled:!1,ghostClass:"ghost"}}},data:function(){return{visible:!1,keywords:"",sList:[],allList:[]}},methods:{handleOk:function(){var t=this,i=this.sList.map((function(t,i){return{plugin_id:t.plugin_id,sort:i+1}}));this.request(a["a"].editHotMenu,{menu_list:i}).then((function(i){t.$message.success("编辑成功~"),t.$emit("ok"),t.handleClose()}))},onSearch:function(t){this.getAllMenu()},inputChange:function(t){console.log(this.keywords),this.keywords||this.getAllMenu()},getAllMenu:function(){var t=this,i={};this.keywords&&(i.keyword=this.keywords),this.request(a["a"].getAllMenuTree,i).then((function(i){i&&(t.allList=i.map((function(i){return i.plugin_list&&i.plugin_list.length&&(i.plugin_list=t.handleList(i.plugin_list,t.sList)),i})))}))},handleList:function(t,i){return t.length&&t.forEach((function(t){t.add=!1,i.forEach((function(i){t.plugin_id==i.plugin_id&&(t.add=!0)}))})),t},addMenu:function(t,i,s){s.add=!0,this.sList.push(s),this.$set(this.allList[t].plugin_list,i,s),this.$set(this.allList,t,this.allList[t])},deleteMenu:function(t){var i=this;this.sList.splice(t,1),console.log(this.sList),this.allList.forEach((function(t){t.plugin_list&&t.plugin_list.length&&(t.plugin_list=i.handleList(t.plugin_list,i.sList))})),this.$set(this,"allList",this.allList)},openDialog:function(){this.sList=JSON.parse(JSON.stringify(this.selectedList)),this.getAllMenu(),this.visible=!0},handleClose:function(){this.visible=!1}}},u=c,r=(s("590c"),s("0b56")),d=Object(r["a"])(u,n,e,!1,null,"25475a0c",null);i["default"]=d.exports}}]);