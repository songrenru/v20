(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f15d4da4","chunk-bbc18ac6","chunk-4338891c","chunk-2d0b3786"],{"26cc":function(t,e,i){"use strict";var s={getActivityList:"/common/platform.PrivateDomainFlow/activityLists",getShowPages:"/common/platform.PrivateDomainFlow/pages",getUserList:"/common/platform.Crm/users",saveActivity:"/common/platform.PrivateDomainFlow/saveActivity",delActivity:"/common/platform.PrivateDomainFlow/delActivity",getActivityInfo:"/common/platform.PrivateDomainFlow/showActivity",getAllArea:"/common/platform.area.Area/getAllArea",assignArea:"/common/platform.PrivateDomainFlow/assignArea",alertTemplates:"/common/platform.PrivateDomainFlow/alertTemplates",hoverTemplates:"/common/platform.PrivateDomainFlow/hoverTemplates",getStoreList:"/common/platform.PrivateDomainFlow/storeLists",assignStore:"/common/platform.PrivateDomainFlow/assignStore",makeupPic:"/common/platform.PrivateDomainFlow/buildAlertPic",isBind:"/common/platform.Crm/isBind",register:"/common/platform.Crm/register",getLoginUrl:"/common/platform.Crm/getLoginUrl"};e["a"]=s},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i("6b75");function n(t){if(Array.isArray(t))return Object(s["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var c=i("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t){return n(t)||a(t)||Object(c["a"])(t)||o()}},"413c":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"select-area"},[i("a-drawer",{attrs:{title:"指定区域",placement:"right",visible:t.visible,destroyOnClose:"",width:600},on:{close:t.onClose}},[t.list.length?i("div",{staticClass:"content"},[i("div",{staticClass:"col",staticStyle:{"border-right":"1px solid #f4f4f4"}},[i("div",{staticClass:"header"},[t._v("选择省份")]),i("div",{staticClass:"list"},t._l(t.list,(function(e,s){return i("div",{key:e.area_id,staticClass:"item",style:e.selected?"color:#1890ff":"",on:{click:function(e){return t.selectArea(s)}}},[e.selected?i("a-icon",{staticClass:"flod-icon",attrs:{type:"caret-down"}}):i("a-icon",{staticClass:"flod-icon",attrs:{type:"caret-right"}}),i("a-checkbox",{attrs:{checked:e.checked},on:{change:function(e){return t.onCheckChange(e,s,1)}}}),i("span",{staticClass:"city-name"},[t._v(" "+t._s(e.area_name)+" ")])],1)})),0)]),i("div",{staticClass:"col",staticStyle:{"border-right":"1px solid #f4f4f4"}},[i("div",{staticClass:"header"},[t._v("选择城市")]),t.twoList.length?i("div",{staticClass:"list"},t._l(t.twoList,(function(e,s){return i("div",{key:e.area_id,staticClass:"item",style:e.selected?"color:#1890ff":"",on:{click:function(e){return t.selectArea(t.index1,s)}}},[e.selected?i("a-icon",{staticClass:"flod-icon",attrs:{type:"caret-down"}}):i("a-icon",{staticClass:"flod-icon",attrs:{type:"caret-right"}}),i("a-checkbox",{attrs:{checked:e.checked},on:{change:function(e){return t.onCheckChange(e,s,2)}}}),i("span",{staticClass:"city-name"},[t._v(" "+t._s(e.area_name)+" ")])],1)})),0):i("div",{staticClass:"no-data"},[t._v("--")])]),i("div",{staticClass:"col"},[i("div",{staticClass:"header"},[t._v("选择辖区")]),t.threeList.length?i("div",{staticClass:"list"},t._l(t.threeList,(function(e,s){return i("div",{key:e.area_id,staticClass:"item"},[i("a-checkbox",{attrs:{checked:e.checked},on:{change:function(e){return t.onCheckChange(e,s,3)}}}),i("span",{staticClass:"city-name",style:e.selected?"color:#1890ff":""},[t._v(" "+t._s(e.area_name)+" ")])],1)})),0):i("div",{staticClass:"no-data"},[t._v("--")])])]):t._e(),i("div",{staticClass:"footer"},[i("a-checkbox",{staticStyle:{"margin-right":"20px"},attrs:{indeterminate:t.indeterminate,checked:t.checkAll},on:{change:t.onCheckAllChange}},[t._v(" 全选 ")]),i("a-button",{attrs:{type:"primary",size:"large"},on:{click:t.submit}},[t._v("确 定")])],1)])],1)},n=[],a=i("2909"),c=(i("d3b7"),i("159b"),i("a434"),i("99af"),i("26cc")),o={name:"PrivateFlowSelectArea",props:{detail:{type:Object,default:function(){return{}}},areaList:{type:Array,default:function(){return[]}}},data:function(){return{visible:!1,indeterminate:!1,checkAll:!1,list:[],index1:-1,index2:-1,twoList:[],threeList:[],checkedList:[],length:0}},watch:{checkedList:function(t){t.length&&t.length!=this.length?this.indeterminate=!0:(this.indeterminate=!1,t.length==this.length&&(this.checkAll=!0))}},mounted:function(){},methods:{handleList:function(){var t=this;console.log("handleList"),this.twoList=[],this.threeList=[],this.index1=-1,this.index2=-1,this.length=0,this.list.length||(this.list=JSON.parse(JSON.stringify(this.areaList)));var e=this.detail.area_ids||[];this.checkedList=Object(a["a"])(e),this.list.forEach((function(i){i.selected=!1,i.checked=!1,t.length++,e.length&&e.forEach((function(t){t==i.area_id&&(i.checked=!0)})),i.children&&i.children.length&&i.children.forEach((function(i){t.length++,i.selected=!1,i.checked=!1,e.length&&e.forEach((function(t){t==i.area_id&&(i.checked=!0)})),i.children&&i.children.length&&i.children.forEach((function(i){t.length++,i.selected=!1,i.checked=!1,e.length&&e.forEach((function(t){t==i.area_id&&(i.checked=!0)}))}))}))})),this.$set(this,"list",this.list)},selectArea:function(t,e){var i=this;this.noCity=!1,this.noArea=!1,this.list.forEach((function(s,n){s.selected=!1,t==n?(s.selected=!0,i.index1=t,i.twoList=s.children||[],s.children&&s.children.length&&e>-1?s.children.forEach((function(t,s){t.selected=!1,e==s&&(t.selected=!0,i.index2=e,i.threeList=t.children||[])})):i.threeList=[]):s.children&&s.children.length&&s.children.forEach((function(t,e){t.selected=!1}))})),this.$set(this,"list",this.list)},openDrawer:function(){var t=this;this.$nextTick((function(){t.handleList()})),this.visible=!0},onClose:function(){this.visible=!1},onCheckChange:function(t,e,i){var s=t.target.checked,n=null;if(1==i?(n=this.list[e],n.checked=s,this.$set(this.list,e,n)):2==i?(n=this.list[this.index1].children[e],n.checked=s,this.$set(this.list[this.index1].children,e,n)):(n=this.list[this.index1].children[this.index2].children[e],n.checked=s,this.$set(this.list[this.index1].children[this.index2].children,e,n)),s)this.checkedList.push(n.area_id);else{var a=this.checkedList.indexOf(n.area_id);this.checkedList.splice(a,1)}},onCheckAllChange:function(t){console.log(111,t);var e=t.target.checked;e?(this.checkAll=!0,this.indeterminate=!1):(this.checkAll=!1,this.indeterminate=!1),this.setListChecked(e)},setListChecked:function(t){var e=[];this.list.forEach((function(i){i.checked=t,e.push(i.area_id),i.children&&i.children.length&&i.children.forEach((function(i){i.checked=t,e.push(i.area_id),i.children&&i.children.length&&i.children.forEach((function(i){e.push(i.area_id),i.checked=t}))}))})),this.checkedList=t?[].concat(e):[],this.$set(this,"list",this.list)},submit:function(){var t=this;this.request(c["a"].assignArea,{id:this.detail.id,area_ids:this.checkedList}).then((function(e){t.$message.success("操作成功！"),t.$emit("submit"),t.visible=!1}))}}},r=o,l=(i("94ae"),i("2877")),d=Object(l["a"])(r,s,n,!1,null,"b29ec9ec",null);e["default"]=d.exports},"558f":function(t,e,i){},"5fe7":function(t,e,i){},7673:function(t,e,i){},"7dc6":function(t,e,i){"use strict";i("7673")},8056:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"select-store"},[i("a-drawer",{attrs:{title:"指定店铺",placement:"right",visible:t.visible,destroyOnClose:"",width:800},on:{close:t.onClose}},[i("div",{staticClass:"content"},[i("div",{staticClass:"header"},[i("div",{staticStyle:{width:"100px"}},[t._v("筛选类型：")]),i("a-select",{staticStyle:{width:"100px"},model:{value:t.is_selected,callback:function(e){t.is_selected=e},expression:"is_selected"}},[i("a-select-option",{attrs:{value:-1}},[t._v(" 全部 ")]),i("a-select-option",{attrs:{value:1}},[t._v(" 已选择 ")]),i("a-select-option",{attrs:{value:0}},[t._v(" 未选择 ")])],1),i("a-input-group",{staticStyle:{width:"300px","margin-left":"20px"},attrs:{compact:""}},[i("a-select",{staticStyle:{width:"100px"},model:{value:t.search_type,callback:function(e){t.search_type=e},expression:"search_type"}},[i("a-select-option",{attrs:{value:"merchant_name"}},[t._v(" 商家名称 ")]),i("a-select-option",{attrs:{value:"store_name"}},[t._v(" 店铺名称 ")])],1),i("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入搜索关键字"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),i("a-button",{staticStyle:{"margin-left":"40px"},attrs:{type:"primary"},on:{click:t.search}},[t._v("搜索")])],1),i("a-table",{attrs:{rowKey:"store_id",pagination:t.pagination,columns:t.columns,"data-source":t.list,"row-selection":t.rowSelection,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"action",fn:function(e,s){return i("span",{},[0==s.is_selected?i("a",{staticStyle:{"margin-right":"10px"},on:{click:function(i){return t.submit("bind",e)}}},[t._v("绑定")]):i("a",{on:{click:function(i){return t.submit("unbind",e)}}},[t._v("解除绑定")])])}}])})],1),i("div",{staticClass:"footer"},[i("a-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"danger",size:"large"},on:{click:function(e){return t.submit("unbind")}}},[t._v("解除绑定")]),i("a-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){return t.submit("bind")}}},[t._v("绑定")])],1)])],1)},n=[],a=i("26cc"),c=[{dataIndex:"merchant_name",key:"merchant_name",title:"商家名称"},{dataIndex:"store_name",key:"store_name",title:"店铺名称"},{dataIndex:"store_id",key:"action",title:"操作",scopedSlots:{customRender:"action"}}],o={name:"PrivateFlowSelectStore",props:{detail:{type:Object,default:function(){return{}}}},data:function(){return{visible:!1,indeterminate:!1,checkAll:!1,list:[],pagination:{current:1,pageSize:10,total:0},selectedTypes:[{value:-1,title:"全部"},{value:1,title:"已选择"},{value:0,title:"未选择"}],is_selected:-1,search_type:"merchant_name",keyword:"",columns:c,selectedRowKeys:[],loading:!1}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.handleRowSelectChange}}},methods:{getStoreList:function(){var t=this;this.loading=!0,this.request(a["a"].getStoreList,{activity_id:this.detail.id,is_selected:this.is_selected,search_type:this.search_type,keyword:this.keyword,page:this.pagination.current,pageSize:this.pagination.pageSize}).then((function(e){t.loading=!1,t.list=e.list,t.$set(t.pagination,"total",e.total)}))},handleTableChange:function(t){console.log(t),this.$set(this.pagination,"current",t.current),this.getStoreList()},handleRowSelectChange:function(t){console.log(t),this.selectedRowKeys=t},search:function(){this.$set(this.pagination,"current",1),this.getStoreList()},openDrawer:function(){Object.assign(this.$data,this.$options.data()),this.visible=!0,this.getStoreList()},onClose:function(){this.visible=!1},submit:function(t,e){var i=this,s={id:this.detail.id,operate:t};if(e)s.store_ids=[e];else{if(!this.selectedRowKeys.length)return void this.$message.warning("请先选择店铺哦~");s.store_ids=this.selectedRowKeys}this.request(a["a"].assignStore,s).then((function(t){i.$message.success("操作成功！"),i.getStoreList(),i.selectedRowKeys=[],i.$emit("submit")}))}}},r=o,l=(i("7dc6"),i("2877")),d=Object(l["a"])(r,s,n,!1,null,"9bc085f4",null);e["default"]=d.exports},"94ae":function(t,e,i){"use strict";i("558f")},d634:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"activity-list"},[t._m(0),i("div",{staticClass:"oprate"},[i("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.editActivity()}}},[t._v(" 新建 ")]),i("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger",icon:"close"},on:{click:function(e){return t.removeActivity()}}},[t._v(" 删除 ")])],1),i("a-card",{staticClass:"content",attrs:{bordered:!1}},[i("a-table",{attrs:{rowKey:"id",pagination:t.pagination,columns:t.columns,"data-source":t.activityList,"row-selection":t.rowSelection},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"area",fn:function(e,s){return i("span",{},[1==e?i("a",{on:{click:function(e){return t.selectArea(s)}}},[t._v("指定区域")]):i("span",[t._v("所有区域")])])}},{key:"store",fn:function(e,s){return i("span",{},[1==e?i("a",{on:{click:function(e){return t.selectStore(s)}}},[t._v("指定店铺")]):i("span",[t._v("所有店铺")])])}},{key:"status",fn:function(e){return i("span",{},[1==e?i("a",{staticStyle:{cursor:"default"}},[t._v("开启")]):i("span",[t._v("关闭")])])}},{key:"action",fn:function(e){return i("span",{},[i("a",{on:{click:function(i){return t.editActivity(e)}}},[t._v("编辑")]),i("a-divider",{attrs:{type:"vertical"}}),i("a",{on:{click:function(i){return t.removeActivity(e)}}},[t._v("删除")])],1)}}])})],1),i("select-area",{ref:"selectArea",attrs:{detail:t.detail,areaList:t.areaList},on:{submit:t.getActivityList}}),i("select-store",{ref:"selectStore",attrs:{detail:t.detail},on:{submit:t.getActivityList}})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title-con"},[i("div",{staticClass:"title"},[t._v("活动管理")]),i("div",{staticClass:"desc"},[t._v("创建埋点活动，设置用户进入企业微信群的入口，引导用户加群，构建私域流量")])])}],a=i("26cc"),c=i("413c"),o=i("8056"),r=[{dataIndex:"id",key:"id",title:"编号"},{dataIndex:"name",key:"name",title:"活动名称"},{dataIndex:"create_time",key:"create_time",title:"添加时间"},{dataIndex:"is_point_area",key:"is_point_area",title:"使用区域",scopedSlots:{customRender:"area"}},{dataIndex:"is_point_store",key:"is_point_store",title:"使用店铺",scopedSlots:{customRender:"store"}},{dataIndex:"status",key:"status",title:"状态",scopedSlots:{customRender:"status"}},{dataIndex:"id",key:"action",title:"操作",scopedSlots:{customRender:"action"}}],l={name:"CommonPrivateFlowActivityList",components:{SelectArea:c["default"],SelectStore:o["default"]},data:function(){return{columns:r,activityList:[],pagination:{current:1,pageSize:10,total:0},selectedRowKeys:[],detail:{},areaList:[]}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.handleRowSelectChange}}},activated:function(){this.getActivityList()},created:function(){this.getAreaList()},mounted:function(){},methods:{getActivityList:function(){var t=this;this.request(a["a"].getActivityList,{page:this.pagination.current,page_size:this.pagination.pageSize}).then((function(e){t.activityList=e.list,t.$set(t.pagination,"total",e.total)}))},handleTableChange:function(t){console.log(t),this.$set(this.pagination,"current",t.current),this.getActivityList()},handleRowSelectChange:function(t){console.log(t),this.selectedRowKeys=t},selectArea:function(t){this.detail=t,this.$refs.selectArea.openDrawer()},selectStore:function(t){this.detail=t,this.$refs.selectStore.openDrawer()},getAreaList:function(){var t=this;this.request(a["a"].getAllArea).then((function(e){t.areaList=e}))},editActivity:function(t){var e="/common/platform.privateflow/activityEdit";t&&(e=e+"?id="+t),this.$router.push(e)},removeActivity:function(t){var e=this,i=[];if(i=t?[t]:this.selectedRowKeys,i.length){var s=this.$confirm({title:"确定要删除选择的活动吗?",centered:!0,onOk:function(){e.request(a["a"].delActivity,{ids:i}).then((function(t){e.$message.success("删除成功！"),e.getActivityList(),s.destroy()}))}});console.log(i)}else this.$message.warning("请先选择要删除的活动~")}}},d=l,h=(i("f3d4"),i("2877")),u=Object(h["a"])(d,s,n,!1,null,"3ebc38b2",null);e["default"]=u.exports},f3d4:function(t,e,i){"use strict";i("5fe7")}}]);