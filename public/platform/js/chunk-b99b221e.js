(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b99b221e","chunk-f580b652"],{7392:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[!1===t.empty?e("div",{ref:"chatRecord",staticClass:"chatRecord",attrs:{id:"chatRecord"}},[e("a-tabs",{attrs:{type:"card"},on:{change:t.callback}},[e("a-tab-pane",{key:1,attrs:{tab:t.tabTitle}},[1===t.tabKey?e("chatRecordDetail",{ref:"chatRecordDetail",attrs:{chatType:t.type,uid:1*t.pigcms_id}}):t._e()],1),e("a-tab-pane",{key:2,attrs:{tab:t.tabGroupTitle}},[2===t.tabKey?e("chatRecordDetail",{ref:"chatRecordDetail",attrs:{chatType:t.type,uid:1*t.pigcms_id}}):t._e()],1)],1)],1):t._e(),t.empty?e("a-empty",{staticClass:"empty",attrs:{image:t.simpleImage}},[e("span",{attrs:{slot:"description"},slot:"description"},[t._v("暂无数据")])]):t._e()],1)},r=[],c=(a("06f4"),a("fc25")),s=(a("b0c0"),a("b8b2")),n={name:"chatRecord",components:{chatRecordDetail:s["default"]},data:function(){return{simpleImage:"",tabTitle:"",tabGroupTitle:"",type:"single",tabKey:1,empty:!1,pigcms_id:0}},created:function(){var t=this.$route.query;this.simpleImage=c["a"].PRESENTED_IMAGE_SIMPLE,this.tabTitle="与"+t.name+"聊天记录",this.tabGroupTitle="与"+t.name+"所在群聊天记录",this.pigcms_id=t.pigcms_id+""},methods:{callback:function(t){this.tabKey=t,this.type=2===t?"group":"single"}}},o=n,p=(a("f1ec"),a("2877")),l=Object(p["a"])(o,i,r,!1,null,null,null);e["default"]=l.exports},8542:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticStyle:{"margin-top":"10px"}},[e("iframe",{attrs:{name:"myiframe",id:"myrame",src:t.webUrl,frameborder:"0",width:"1330",height:"500"}},[e("p",[t._v("你的浏览器不支持iframe标签")])])])},r=[],c=(a("a9e3"),a("7392"),a("8bbf")),s=Object(c["defineComponent"])({props:{username:{type:String,defalut:""},pigcms_id:{type:[String,Number],defalut:0}},setup:function(t,e){var a=Object(c["ref"])("");return a.value="/v20/public/platform/#/community/village/building/roomCom/ownerCom/chatRecord?name="+t.username+"&pigcms_id="+t.pigcms_id,{webUrl:a}}}),n=s,o=a("2877"),p=Object(o["a"])(n,i,r,!1,null,"072efbe9",null);e["default"]=p.exports},bf7b9:function(t,e,a){},f1ec:function(t,e,a){"use strict";a("bf7b9")}}]);