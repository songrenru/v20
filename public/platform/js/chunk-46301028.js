(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46301028","chunk-7a51019d"],{"0c70":function(t,i,s){"use strict";s("8383")},2105:function(t,i,s){t.exports=s.p+"img/store.2ba4f2c3.png"},5712:function(t,i,s){t.exports=s.p+"img/right.19306875.png"},"59aa":function(t,i,s){t.exports=s.p+"img/com.a20df54c.png"},"70c7":function(t,i,s){t.exports=s.p+"img/layer.a3a1a1a5.png"},8383:function(t,i,s){},"8bf5":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("a-modal",{attrs:{title:t.title,width:990,visible:t.visible,confirmLoading:t.confirmLoading,footer:null,centered:!0},on:{cancel:t.handleCancel}},[e("div",{staticClass:"container"},[e("div",{staticStyle:{"margin-left":"590px",height:"20px"}},[e("div",{staticStyle:{"margin-left":"-600px"}},[e("a",{on:{click:t.close}},[t._v("<< 返回上级")])]),e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"dodgerblue"}}),e("div",{staticClass:"tips"},[t._v("住宅（"+t._s(t.home)+"）")])]),e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"green"}}),e("div",{staticClass:"tips"},[t._v("办公（"+t._s(t.com)+"）")])]),e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"purple"}}),e("div",{staticClass:"tips"},[t._v("商铺（"+t._s(t.store)+"）")])])]),e("div",{staticStyle:{height:"530px",width:"100%","margin-top":"20px","overflow-y":"auto"}},t._l(t.list,(function(i,a){return e("div",{staticClass:"layer"},[e("div",{staticClass:"content",staticStyle:{height:"115px",width:"96px","border-radius":"5px","background-color":"dodgerblue"}},[e("div",{staticStyle:{width:"38px",height:"50px","margin-left":"29px","margin-top":"15px"}},[e("img",{staticStyle:{height:"50px",width:"38px"},attrs:{src:s("70c7")}})]),e("div",{staticStyle:{"margin-top":"15px","text-align":"center"}},[e("span",{staticStyle:{color:"whitesmoke"}},[t._v(t._s(i.layer_name))])])]),e("div",{staticClass:"content",staticStyle:{height:"115px","text-align":"center",float:"left",width:"816px"}},[e("div",{staticClass:"detail",staticStyle:{width:"50px",float:"left","text-align":"center","line-height":"115px"}},[i.room_list.length>1?e("img",{staticStyle:{height:"30px",width:"30px",cursor:"pointer"},attrs:{src:s("9207")},on:{click:function(i){return t.leftmove(a)}}}):t._e()]),e("div",{staticClass:"detail",staticStyle:{float:"left",width:"712px","overflow-x":"hidden","overflow-y":"hidden"}},[e("ul",{staticClass:"module-list",style:{width:100*i.room_list.length+"px"}},t._l(i.room_list,(function(i,a){return e("li",{staticStyle:{cursor:"pointer"},on:{click:function(s){return t.get_room_list(i.pigcms_id)}}},[e("div",{staticStyle:{height:"75px","line-height":"75px"}},[1==i.house_type?e("img",{attrs:{src:s("fbf5")}}):2==i.house_type?e("img",{attrs:{src:s("2105")}}):e("img",{attrs:{src:s("59aa")}})]),e("div",{staticStyle:{height:"40px","line-height":"40px"}},[t._v(" "+t._s(i.room)+" ")])])})),0)]),e("div",{staticClass:"detail",staticStyle:{width:"50px",float:"right","text-align":"center","line-height":"115px"}},[i.room_list.length>1?e("img",{staticStyle:{height:"30px",width:"30px",cursor:"pointer"},attrs:{src:s("5712")},on:{click:function(s){return t.rightmove(a,i.room_list.length)}}}):t._e()])])])})),0)])]),e("room-info-form",{ref:"roomInfoFormModal"})],1)},a=[],o=s("d208"),c={components:{RoomInfoForm:o["default"]},data:function(){return{visible:!1,confirmLoading:!1,title:"",list:"",home:"",store:"",com:"",num:[]}},methods:{add:function(t,i,s,e,a){if(this.title=t,this.list=i,i){var o=i.length,c=0;for(c=0;c<o;c++)this.num[c]=0}this.home=s,this.com=a,this.store=e,this.visible=!0},handleCancel:function(){this.visible=!1},leftmove:function(t){this.num[t]<0&&(this.num[t]+=3);var i=document.getElementsByClassName("module-list");i[t].style.marginLeft=100*this.num[t]+"px"},rightmove:function(t,i){var s=100*i-700,e=100*this.num[t];s>-e&&(this.num[t]-=3);var a=document.getElementsByClassName("module-list");a[t].style.marginLeft=100*this.num[t]+"px"},get_room_list:function(t){this.$refs.roomInfoFormModal.add(t,this.title)},close:function(){this.visible=!1}}},l=c,n=(s("da42"),s("2877")),r=Object(n["a"])(l,e,a,!1,null,"360af394",null);i["default"]=r.exports},"8c8af":function(t,i,s){},9207:function(t,i,s){t.exports=s.p+"img/left.c7cd0c6b.png"},d208:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("a-modal",{attrs:{title:t.title,width:990,visible:t.visible,confirmLoading:t.confirmLoading,footer:null,centered:!0},on:{cancel:t.handleCancel}},[s("div",{staticClass:"container"},[s("div",{staticStyle:{"margin-left":"400px",height:"20px"}},[s("div",{staticStyle:{"margin-left":"-400px"}},[s("a",{on:{click:t.close}},[t._v("<< 返回上级")])]),1==t.house_type?s("div",[s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"dodgerblue"}}),s("div",{staticClass:"tips"},[t._v("业主（"+t._s(t.count[0])+"）")])]),s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"green"}}),s("div",{staticClass:"tips"},[t._v("配偶（"+t._s(t.count[1])+"）")])]),s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"purple"}}),s("div",{staticClass:"tips"},[t._v("子女（"+t._s(t.count[2])+"）")])]),s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"yellow"}}),s("div",{staticClass:"tips"},[t._v("亲朋好友（"+t._s(t.count[3])+"）")])]),s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"lightblue"}}),s("div",{staticClass:"tips"},[t._v("租客（"+t._s(t.count[7])+"）")])])]):s("div",[s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"dodgerblue"}}),s("div",{staticClass:"tips"},[t._v("业主（"+t._s(t.count[0])+"）")])]),s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"green"}}),s("div",{staticClass:"tips"},[t._v("配偶（"+t._s(t.count[1])+"）")])]),s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"purple"}}),s("div",{staticClass:"tips"},[t._v("子女（"+t._s(t.count[2])+"）")])]),s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"yellow"}}),s("div",{staticClass:"tips"},[t._v("亲朋好友（"+t._s(t.count[3])+"）")])]),s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"deepskyblue"}}),s("div",{staticClass:"tips"},[t._v("老板（"+t._s(t.count[4])+"）")])]),s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"cornflowerblue"}}),s("div",{staticClass:"tips"},[t._v("人事（"+t._s(t.count[5])+"）")])]),s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"darkseagreen"}}),s("div",{staticClass:"tips"},[t._v("财务（"+t._s(t.count[6])+"）")])]),s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"lightblue"}}),s("div",{staticClass:"tips"},[t._v("租客/员工（"+t._s(t.count[7])+"）")])])])]),s("div",{staticStyle:{height:"530px",width:"100%","margin-top":"40px","overflow-y":"auto"}},[s("table",{staticStyle:{width:"100%"},attrs:{rules:"rows"}},[s("thead",[s("tr",{staticStyle:{"background-color":"#FAFAFA",height:"50px"}},[s("th",{attrs:{width:"15%"}},[t._v("姓名")]),s("th",{attrs:{width:"20%"}},[t._v("手机号码")]),s("th",{attrs:{width:"25%"}},[t._v("地址")]),s("th",{attrs:{width:"25%"}},[t._v("身份")]),s("th",{attrs:{width:"15%"}},[t._v("操作")])])]),s("tbody",t._l(t.user_list,(function(i){return s("tr",{staticStyle:{height:"50px"}},[s("td",[t._v(t._s(i.name))]),s("td",[t._v(t._s(i.phone))]),s("td",[t._v(t._s(i.address))]),s("td",[t._v(t._s(i.relation))]),s("td",{staticStyle:{cursor:"pointer"},on:{click:function(s){return t.get_user_info(i.pigcms_id)}}},[t._v("查看")])])})),0)])])])]),s("user-info-form",{ref:"userInfoFormModal"})],1)},a=[],o=s("567c"),c=s("f595"),l={components:{UserInfoForm:c["default"]},data:function(){return{visible:!1,confirmLoading:!1,title:"",home:"",store:"",com:"",pigcms_id:"",user_list:"",count:"",house_type:0}},methods:{add:function(t,i){this.title=i,this.pigcms_id=t,this.get_room_user_list(this.pigcms_id),this.visible=!0},get_room_user_list:function(t){var i=this;this.request(o["a"].getRoomUserList,{vacancy_id:t}).then((function(t){console.log(t),i.user_list=t["list"],i.count=t["count"],i.house_type=t["house_type"]}))},get_user_info:function(t){this.$refs.userInfoFormModal.edit(t)},handleCancel:function(){this.visible=!1},close:function(){this.visible=!1}}},n=l,r=(s("0c70"),s("2877")),d=Object(r["a"])(n,e,a,!1,null,"50651947",null);i["default"]=d.exports},da42:function(t,i,s){"use strict";s("8c8af")},fbf5:function(t,i,s){t.exports=s.p+"img/home.9e7a0580.png"}}]);