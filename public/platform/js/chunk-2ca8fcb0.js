(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ca8fcb0"],{"6a26":function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[!1===t.empty?a("div",{ref:"chatRecord",staticClass:"chatRecord",attrs:{id:"chatRecord"}},[a("a-tabs",{attrs:{type:"card"},on:{change:t.callback}},[a("a-tab-pane",{key:1,attrs:{tab:t.tabTitle}},[1===t.tabKey?a("chatRecordDetail",{ref:"chatRecordDetail",attrs:{chatType:t.type,uid:t.uid}}):t._e()],1),a("a-tab-pane",{key:2,attrs:{tab:t.tabGroupTitle}},[2===t.tabKey?a("chatRecordDetail",{ref:"chatRecordDetail",attrs:{chatType:t.type,uid:t.uid}}):t._e()],1)],1)],1):t._e(),t.empty?a("a-empty",{staticClass:"empty",attrs:{image:t.simpleImage}},[a("span",{attrs:{slot:"description"},slot:"description"},[t._v("暂无数据")])]):t._e()],1)},i=[],s=(a("06f4"),a("fc25")),r=(a("a9e3"),a("b0c0"),a("b8b2")),n={name:"chatRecord",components:{chatRecordDetail:r["default"]},props:{villageId:{type:Number,default:0},uid:{type:Number,default:0},pigcmsId:{type:Number,default:0},name:{type:String,default:""}},data:function(){return{simpleImage:"",tabTitle:"",tabGroupTitle:"",type:"single",tabKey:1,empty:!1}},created:function(){this.simpleImage=s["a"].PRESENTED_IMAGE_SIMPLE,this.tabTitle="与"+this.name+"聊天记录",this.tabGroupTitle="与"+this.name+"所在群聊天记录"},methods:{callback:function(t){this.tabKey=t,this.type=2===t?"group":"single"}}},l=n,p=(a("cb82"),a("2877")),o=Object(p["a"])(l,c,i,!1,null,null,null);e["default"]=o.exports},"6fa8":function(t,e,a){},cb82:function(t,e,a){"use strict";a("6fa8")}}]);