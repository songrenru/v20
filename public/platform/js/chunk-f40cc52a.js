(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f40cc52a","chunk-3dbf820f"],{7209:function(t,e,a){},7392:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[!1===t.empty?a("div",{ref:"chatRecord",staticClass:"chatRecord",attrs:{id:"chatRecord"}},[a("a-tabs",{attrs:{type:"card"},on:{change:t.callback}},[a("a-tab-pane",{key:1,attrs:{tab:t.tabTitle}},[1===t.tabKey?a("chatRecordDetail",{ref:"chatRecordDetail",attrs:{chatType:t.type,uid:1*t.pigcms_id}}):t._e()],1),a("a-tab-pane",{key:2,attrs:{tab:t.tabGroupTitle}},[2===t.tabKey?a("chatRecordDetail",{ref:"chatRecordDetail",attrs:{chatType:t.type,uid:1*t.pigcms_id}}):t._e()],1)],1)],1):t._e(),t.empty?a("a-empty",{staticClass:"empty",attrs:{image:t.simpleImage}},[a("span",{attrs:{slot:"description"},slot:"description"},[t._v("暂无数据")])]):t._e()],1)},c=[],r=(a("06f4"),a("fc25")),s=(a("b0c0"),a("b8b2")),n={name:"chatRecord",components:{chatRecordDetail:s["default"]},data:function(){return{simpleImage:"",tabTitle:"",tabGroupTitle:"",type:"single",tabKey:1,empty:!1,pigcms_id:0}},created:function(){var t=this.$route.query;this.simpleImage=r["a"].PRESENTED_IMAGE_SIMPLE,this.tabTitle="与"+t.name+"聊天记录",this.tabGroupTitle="与"+t.name+"所在群聊天记录",this.pigcms_id=t.pigcms_id+""},methods:{callback:function(t){this.tabKey=t,this.type=2===t?"group":"single"}}},l=n,p=(a("f1ec"),a("2877")),o=Object(p["a"])(l,i,c,!1,null,null,null);e["default"]=o.exports},8542:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"10px"}},[a("iframe",{attrs:{name:"myiframe",id:"myrame",src:t.webUrl,frameborder:"0",width:"1330",height:"500"}},[a("p",[t._v("你的浏览器不支持iframe标签")])])])},c=[],r=(a("a9e3"),a("7392"),a("8bbf"),a("ed09")),s=Object(r["c"])({props:{username:{type:String,defalut:""},pigcms_id:{type:[String,Number],defalut:0}},setup:function(t,e){var a=Object(r["h"])("");return a.value="/v20/public/platform/#/community/village/building/roomCom/ownerCom/chatRecord?name="+t.username+"&pigcms_id="+t.pigcms_id,{webUrl:a}}}),n=s,l=a("2877"),p=Object(l["a"])(n,i,c,!1,null,"1f082349",null);e["default"]=p.exports},f1ec:function(t,e,a){"use strict";a("7209")}}]);