(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbc18ac6","chunk-2d0b3786"],{"26cc":function(t,e,i){"use strict";var s={getActivityList:"/common/platform.PrivateDomainFlow/activityLists",getShowPages:"/common/platform.PrivateDomainFlow/pages",getUserList:"/common/platform.Crm/users",saveActivity:"/common/platform.PrivateDomainFlow/saveActivity",delActivity:"/common/platform.PrivateDomainFlow/delActivity",getActivityInfo:"/common/platform.PrivateDomainFlow/showActivity",getAllArea:"/common/platform.area.Area/getAllArea",assignArea:"/common/platform.PrivateDomainFlow/assignArea",alertTemplates:"/common/platform.PrivateDomainFlow/alertTemplates",hoverTemplates:"/common/platform.PrivateDomainFlow/hoverTemplates",getStoreList:"/common/platform.PrivateDomainFlow/storeLists",assignStore:"/common/platform.PrivateDomainFlow/assignStore",makeupPic:"/common/platform.PrivateDomainFlow/buildAlertPic",isBind:"/common/platform.Crm/isBind",register:"/common/platform.Crm/register",getLoginUrl:"/common/platform.Crm/getLoginUrl"};e["a"]=s},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var s=i("6b75");function n(t){if(Array.isArray(t))return Object(s["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function c(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var a=i("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return n(t)||c(t)||Object(a["a"])(t)||r()}},"413c":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"select-area"},[i("a-drawer",{attrs:{title:"指定区域",placement:"right",visible:t.visible,destroyOnClose:"",width:600},on:{close:t.onClose}},[t.list.length?i("div",{staticClass:"content"},[i("div",{staticClass:"col",staticStyle:{"border-right":"1px solid #f4f4f4"}},[i("div",{staticClass:"header"},[t._v("选择省份")]),i("div",{staticClass:"list"},t._l(t.list,(function(e,s){return i("div",{key:e.area_id,staticClass:"item",style:e.selected?"color:#1890ff":"",on:{click:function(e){return t.selectArea(s)}}},[e.selected?i("a-icon",{staticClass:"flod-icon",attrs:{type:"caret-down"}}):i("a-icon",{staticClass:"flod-icon",attrs:{type:"caret-right"}}),i("a-checkbox",{attrs:{checked:e.checked},on:{change:function(e){return t.onCheckChange(e,s,1)}}}),i("span",{staticClass:"city-name"},[t._v(" "+t._s(e.area_name)+" ")])],1)})),0)]),i("div",{staticClass:"col",staticStyle:{"border-right":"1px solid #f4f4f4"}},[i("div",{staticClass:"header"},[t._v("选择城市")]),t.twoList.length?i("div",{staticClass:"list"},t._l(t.twoList,(function(e,s){return i("div",{key:e.area_id,staticClass:"item",style:e.selected?"color:#1890ff":"",on:{click:function(e){return t.selectArea(t.index1,s)}}},[e.selected?i("a-icon",{staticClass:"flod-icon",attrs:{type:"caret-down"}}):i("a-icon",{staticClass:"flod-icon",attrs:{type:"caret-right"}}),i("a-checkbox",{attrs:{checked:e.checked},on:{change:function(e){return t.onCheckChange(e,s,2)}}}),i("span",{staticClass:"city-name"},[t._v(" "+t._s(e.area_name)+" ")])],1)})),0):i("div",{staticClass:"no-data"},[t._v("--")])]),i("div",{staticClass:"col"},[i("div",{staticClass:"header"},[t._v("选择辖区")]),t.threeList.length?i("div",{staticClass:"list"},t._l(t.threeList,(function(e,s){return i("div",{key:e.area_id,staticClass:"item"},[i("a-checkbox",{attrs:{checked:e.checked},on:{change:function(e){return t.onCheckChange(e,s,3)}}}),i("span",{staticClass:"city-name",style:e.selected?"color:#1890ff":""},[t._v(" "+t._s(e.area_name)+" ")])],1)})),0):i("div",{staticClass:"no-data"},[t._v("--")])])]):t._e(),i("div",{staticClass:"footer"},[i("a-checkbox",{staticStyle:{"margin-right":"20px"},attrs:{indeterminate:t.indeterminate,checked:t.checkAll},on:{change:t.onCheckAllChange}},[t._v(" 全选 ")]),i("a-button",{attrs:{type:"primary",size:"large"},on:{click:t.submit}},[t._v("确 定")])],1)])],1)},n=[],c=i("2909"),a=(i("d3b7"),i("159b"),i("a434"),i("99af"),i("26cc")),r={name:"PrivateFlowSelectArea",props:{detail:{type:Object,default:function(){return{}}},areaList:{type:Array,default:function(){return[]}}},data:function(){return{visible:!1,indeterminate:!1,checkAll:!1,list:[],index1:-1,index2:-1,twoList:[],threeList:[],checkedList:[],length:0}},watch:{checkedList:function(t){t.length&&t.length!=this.length?this.indeterminate=!0:(this.indeterminate=!1,t.length==this.length&&(this.checkAll=!0))}},mounted:function(){},methods:{handleList:function(){var t=this;console.log("handleList"),this.twoList=[],this.threeList=[],this.index1=-1,this.index2=-1,this.length=0,this.list.length||(this.list=JSON.parse(JSON.stringify(this.areaList)));var e=this.detail.area_ids||[];this.checkedList=Object(c["a"])(e),this.list.forEach((function(i){i.selected=!1,i.checked=!1,t.length++,e.length&&e.forEach((function(t){t==i.area_id&&(i.checked=!0)})),i.children&&i.children.length&&i.children.forEach((function(i){t.length++,i.selected=!1,i.checked=!1,e.length&&e.forEach((function(t){t==i.area_id&&(i.checked=!0)})),i.children&&i.children.length&&i.children.forEach((function(i){t.length++,i.selected=!1,i.checked=!1,e.length&&e.forEach((function(t){t==i.area_id&&(i.checked=!0)}))}))}))})),this.$set(this,"list",this.list)},selectArea:function(t,e){var i=this;this.noCity=!1,this.noArea=!1,this.list.forEach((function(s,n){s.selected=!1,t==n?(s.selected=!0,i.index1=t,i.twoList=s.children||[],s.children&&s.children.length&&e>-1?s.children.forEach((function(t,s){t.selected=!1,e==s&&(t.selected=!0,i.index2=e,i.threeList=t.children||[])})):i.threeList=[]):s.children&&s.children.length&&s.children.forEach((function(t,e){t.selected=!1}))})),this.$set(this,"list",this.list)},openDrawer:function(){var t=this;this.$nextTick((function(){t.handleList()})),this.visible=!0},onClose:function(){this.visible=!1},onCheckChange:function(t,e,i){var s=t.target.checked,n=null;if(1==i?(n=this.list[e],n.checked=s,this.$set(this.list,e,n)):2==i?(n=this.list[this.index1].children[e],n.checked=s,this.$set(this.list[this.index1].children,e,n)):(n=this.list[this.index1].children[this.index2].children[e],n.checked=s,this.$set(this.list[this.index1].children[this.index2].children,e,n)),s)this.checkedList.push(n.area_id);else{var c=this.checkedList.indexOf(n.area_id);this.checkedList.splice(c,1)}},onCheckAllChange:function(t){console.log(111,t);var e=t.target.checked;e?(this.checkAll=!0,this.indeterminate=!1):(this.checkAll=!1,this.indeterminate=!1),this.setListChecked(e)},setListChecked:function(t){var e=[];this.list.forEach((function(i){i.checked=t,e.push(i.area_id),i.children&&i.children.length&&i.children.forEach((function(i){i.checked=t,e.push(i.area_id),i.children&&i.children.length&&i.children.forEach((function(i){e.push(i.area_id),i.checked=t}))}))})),this.checkedList=t?[].concat(e):[],this.$set(this,"list",this.list)},submit:function(){var t=this;this.request(a["a"].assignArea,{id:this.detail.id,area_ids:this.checkedList}).then((function(e){t.$message.success("操作成功！"),t.$emit("submit"),t.visible=!1}))}}},l=r,o=(i("94ae"),i("2877")),h=Object(o["a"])(l,s,n,!1,null,"b29ec9ec",null);e["default"]=h.exports},"558f":function(t,e,i){},"94ae":function(t,e,i){"use strict";i("558f")}}]);