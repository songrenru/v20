(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2541e327"],{1768:function(e,t,s){"use strict";s("bd2f")},b2cc:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-modal",{staticClass:"dialog",attrs:{title:"选择商品",width:"800",centered:"",visible:e.dialogVisible,destroyOnClose:!0},on:{ok:e.handleOk,cancel:e.handleCancel}},[s("div",{staticClass:"select-goods"},[s("div",{staticClass:"left scrollbar"},[s("a-menu",{attrs:{mode:"inline","open-keys":e.openKeys,selectedKeys:e.defaultSelectedKey},on:{openChange:e.onOpenChange,select:e.onSelect}},[e._l(e.menuList,(function(t){return[t.children&&t.children.length?s("a-sub-menu",{key:t.sort_id},[s("span",{attrs:{slot:"title"},slot:"title"},[s("span",[e._v(e._s(t.sort_name))])]),t.children&&t.children.length?[e._l(t.children,(function(t){return[t.children&&t.children.length?[s("a-sub-menu",{key:t.sort_id,attrs:{title:t.sort_name}},e._l(t.children,(function(t){return s("a-menu-item",{key:t.sort_id},[e._v(e._s(t.sort_name))])})),1)]:[s("a-menu-item",{key:t.sort_id},[e._v(e._s(t.sort_name))])]]}))]:e._e()],2):s("a-menu-item",{key:t.sort_id},[e._v(e._s(t.sort_name))])]}))],2)],1),s("div",{staticClass:"right"},[s("div",{staticClass:"top"},[s("span",{staticClass:"tips"}),s("a-input-search",{staticClass:"search",attrs:{placeholder:"组合名称"},on:{search:e.onSearch,change:e.onSearchChange},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1),s("div",{staticClass:"bottom"},[s("a-table",{attrs:{"row-selection":e.rowSelection,columns:e.columns,"data-source":e.list,rowKey:"combine_id",scroll:{y:500}},scopedSlots:e._u([{key:"start_time",fn:function(t,i){return s("span",{},[e._v(" "+e._s(t)+"至"+e._s(i.end_time)+" ")])}},{key:"can_use_day",fn:function(t){return s("span",{},[e._v(" "+e._s(t)+"天 ")])}},{key:"selected",fn:function(t,i){return s("span",{},[t?s("div",{staticStyle:{color:"#1890ff"}},[e._v("已选择")]):e._e()])}},{key:"name",fn:function(t,i){return s("span",{},[s("div",{staticClass:"product-info"},[s("div",[s("img",{attrs:{src:i.image}})]),s("div",{staticStyle:{"margin-left":"10px"}},[s("p",{staticClass:"product-name"},[e._v(e._s(t))])])])])}}])})],1)])])])},n=[],o=(s("159b"),s("7db0"),s("d81d"),s("a434"),{name:"SelectGoods",props:{visible:{type:Boolean,default:!1},menuList:{type:Array,default:function(){return[]}},list:{type:Array,default:function(){return[]}},selectedList:{type:Array,default:function(){return[]}}},data:function(){return{dialogVisible:!1,rootSubmenuKeys:[],openKeys:[],columns:[{title:"优惠组合名称",dataIndex:"title",scopedSlots:{customRender:"title"}},{title:"优惠组合类型",dataIndex:"cat_name"},{title:"优惠组合活动时间",dataIndex:"start_time",width:"15%",scopedSlots:{customRender:"start_time"}},{title:"优惠组合有效期",dataIndex:"can_use_day",width:"15%",scopedSlots:{customRender:"can_use_day"}},{title:"状态",dataIndex:"selected",scopedSlots:{customRender:"selected"}}],menuId:0,selectedRowKeys:[],selectedRows:[],defaultSelectedKey:[],keywords:"",sList:[],merIdArr:[]}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onSelect:this.onRowSelect,onSelectAll:this.onSelectAll,hideDefaultSelections:!0,getCheckboxProps:function(e){return{props:{}}}}}},watch:{visible:function(e,t){this.dialogVisible=e,e&&(this.handleMenuList(),this.handleList())},menuList:function(){this.handleMenuList()},list:function(){this.handleList()},selectedList:function(e){this.sList=JSON.parse(JSON.stringify(e))}},mounted:function(){this.dialogVisible=this.visible,this.handleMenuList(),this.handleList(),this.sList=JSON.parse(JSON.stringify(this.selectedList))},methods:{init:function(){this.rootSubmenuKeys=[],this.openKeys=[],this.defaultSelectedKey=[],this.keywords="",this.currentPage=1},handleMenuList:function(){var e=this;this.init(),console.log(this.menuList," this.menuList"),this.menuList.forEach((function(t,s){if(e.rootSubmenuKeys.push(t.sort_id),t.children&&t.children.length){0==s&&e.openKeys.push(t.sort_id);var i=t.children;i.forEach((function(t,i){if(t.children&&t.children.length){0==i&&e.openKeys.push(t.sort_id);var n=t.children;n.forEach((function(t,n){0==s&&0==i&&0==n&&(e.menuId=t.sort_id)}))}else 0==s&&0==i&&(e.menuId=t.sort_id)}))}else 0==s&&(e.menuId=t.sort_id)})),this.defaultSelectedKey.push(this.menuId),this.onSelect({key:this.menuId})},handleList:function(){var e=this;console.log("-----------1",this.sList),this.selectedRowKeys=[],this.merIdArr=[],this.sList.length&&this.sList.forEach((function(t){e.selectedRowKeys.push(t.combine_id)})),this.list.length&&this.list.forEach((function(t,s){-1!=e.selectedRowKeys.indexOf(t.combine_id)?e.list[s].selected=1:e.list[s].selected=0})),this.selectedRows=this.sList},handleOk:function(){var e=this.selectedRowKeys,t=this.sList;t.length?this.$emit("submit",{ids:e,goods:t}):this.$message.error("请选择商品")},handleCancel:function(){this.init(),this.dialogVisible=!1,this.$emit("update:visible",this.dialogVisible)},onSelect:function(e){var t=e.key;console.log("menu id selected:",t),this.menuId=t,this.defaultSelectedKey=[t],this.$emit("onMenuSelect",{id:t})},onOpenChange:function(e){var t=this,s=e.find((function(e){return-1===t.openKeys.indexOf(e)}));-1===this.rootSubmenuKeys.indexOf(s)?this.openKeys=e:this.openKeys.push(s)},onSearch:function(e){this.keywords?(this.menuId="",this.openKeys=[],this.defaultSelectedKey=[],this.$emit("onSearch",{id:this.menuId,keywords:e})):this.$message.warning("请输入组合名称！")},onSearchChange:function(e){this.keywords?this.onSearch(this.keywords):this.handleMenuList()},onRowSelect:function(e,t,s){var i=this;t?(this.sList.push(e),this.selectedRowKeys.push(e.combine_id)):-1!=this.selectedRowKeys.indexOf(e.combine_id)&&(this.merIdArr.remove(e.mer_id),this.sList.remove(e),this.selectedRowKeys.remove(e.combine_id)),this.list.length&&this.list.forEach((function(e,t){-1!=i.selectedRowKeys.indexOf(e.combine_id)?i.list[t].selected=1:i.list[t].selected=0}))},onSelectAll:function(e,t,s){var i=this;e?s.map((function(e){i.selectedRowKeys.push(e.combine_id),i.sList.push(e)})):s.map((function(e){i.sList.remove(e),i.selectedRowKeys.remove(e.combine_id)}))}}});Array.prototype.remove=function(e){var t=this.indexOf(e),s=-1;t>-1?this.splice(t,1):(this.map((function(t,i){t.combine_id==e.combine_id&&(s=i)})),s>-1&&this.splice(s,1))};var l=o,c=(s("1768"),s("2877")),d=Object(c["a"])(l,i,n,!1,null,"5ed2178a",null);t["default"]=d.exports},bd2f:function(e,t,s){}}]);