(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-249d599a"],{"55c3":function(t,s,i){"use strict";i("c5b9")},c5b9:function(t,s,i){},d208:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("a-modal",{attrs:{title:t.title,width:990,visible:t.visible,confirmLoading:t.confirmLoading,footer:null,centered:!0},on:{cancel:t.handleCancel}},[i("div",{staticClass:"container"},[i("div",{staticStyle:{"margin-left":"400px",height:"20px"}},[i("div",{staticStyle:{"margin-left":"-400px"}},[i("a",{on:{click:t.close}},[t._v("<< 返回上级")])]),1==t.house_type?i("div",[i("div",{staticClass:"house_type"},[i("div",{staticClass:"radio",staticStyle:{"background-color":"dodgerblue"}}),i("div",{staticClass:"tips"},[t._v("业主（"+t._s(t.count[0])+"）")])]),i("div",{staticClass:"house_type"},[i("div",{staticClass:"radio",staticStyle:{"background-color":"green"}}),i("div",{staticClass:"tips"},[t._v("配偶（"+t._s(t.count[1])+"）")])]),i("div",{staticClass:"house_type"},[i("div",{staticClass:"radio",staticStyle:{"background-color":"purple"}}),i("div",{staticClass:"tips"},[t._v("子女（"+t._s(t.count[2])+"）")])]),i("div",{staticClass:"house_type"},[i("div",{staticClass:"radio",staticStyle:{"background-color":"yellow"}}),i("div",{staticClass:"tips"},[t._v("亲朋好友（"+t._s(t.count[3])+"）")])]),i("div",{staticClass:"house_type"},[i("div",{staticClass:"radio",staticStyle:{"background-color":"lightblue"}}),i("div",{staticClass:"tips"},[t._v("租客（"+t._s(t.count[7])+"）")])])]):i("div",[i("div",{staticClass:"house_type"},[i("div",{staticClass:"radio",staticStyle:{"background-color":"dodgerblue"}}),i("div",{staticClass:"tips"},[t._v("业主（"+t._s(t.count[0])+"）")])]),i("div",{staticClass:"house_type"},[i("div",{staticClass:"radio",staticStyle:{"background-color":"green"}}),i("div",{staticClass:"tips"},[t._v("配偶（"+t._s(t.count[1])+"）")])]),i("div",{staticClass:"house_type"},[i("div",{staticClass:"radio",staticStyle:{"background-color":"purple"}}),i("div",{staticClass:"tips"},[t._v("子女（"+t._s(t.count[2])+"）")])]),i("div",{staticClass:"house_type"},[i("div",{staticClass:"radio",staticStyle:{"background-color":"yellow"}}),i("div",{staticClass:"tips"},[t._v("亲朋好友（"+t._s(t.count[3])+"）")])]),i("div",{staticClass:"house_type"},[i("div",{staticClass:"radio",staticStyle:{"background-color":"deepskyblue"}}),i("div",{staticClass:"tips"},[t._v("老板（"+t._s(t.count[4])+"）")])]),i("div",{staticClass:"house_type"},[i("div",{staticClass:"radio",staticStyle:{"background-color":"cornflowerblue"}}),i("div",{staticClass:"tips"},[t._v("人事（"+t._s(t.count[5])+"）")])]),i("div",{staticClass:"house_type"},[i("div",{staticClass:"radio",staticStyle:{"background-color":"darkseagreen"}}),i("div",{staticClass:"tips"},[t._v("财务（"+t._s(t.count[6])+"）")])]),i("div",{staticClass:"house_type"},[i("div",{staticClass:"radio",staticStyle:{"background-color":"lightblue"}}),i("div",{staticClass:"tips"},[t._v("租客/员工（"+t._s(t.count[7])+"）")])])])]),i("div",{staticStyle:{height:"530px",width:"100%","margin-top":"40px","overflow-y":"auto"}},[i("table",{staticStyle:{width:"100%"},attrs:{rules:"rows"}},[i("thead",[i("tr",{staticStyle:{"background-color":"#FAFAFA",height:"50px"}},[i("th",{attrs:{width:"15%"}},[t._v("姓名")]),i("th",{attrs:{width:"20%"}},[t._v("手机号码")]),i("th",{attrs:{width:"25%"}},[t._v("地址")]),i("th",{attrs:{width:"25%"}},[t._v("身份")]),i("th",{attrs:{width:"15%"}},[t._v("操作")])])]),i("tbody",t._l(t.user_list,(function(s){return i("tr",{staticStyle:{height:"50px"}},[i("td",[t._v(t._s(s.name))]),i("td",[t._v(t._s(s.phone))]),i("td",[t._v(t._s(s.address))]),i("td",[t._v(t._s(s.relation))]),i("td",{staticStyle:{cursor:"pointer"},on:{click:function(i){return t.get_user_info(s.pigcms_id,s)}}},[t._v("查看")])])})),0)])])])]),i("user-info-form",{ref:"userInfoFormModal"})],1)},o=[],c=i("567c"),e=i("f595"),l={components:{UserInfoForm:e["default"]},data:function(){return{visible:!1,confirmLoading:!1,title:"",home:"",store:"",com:"",pigcms_id:"",user_list:"",count:"",house_type:0}},methods:{add:function(t,s){this.title=s,this.pigcms_id=t,this.get_room_user_list(this.pigcms_id),this.visible=!0},get_room_user_list:function(t){var s=this;this.request(c["a"].getRoomUserList,{vacancy_id:t}).then((function(t){console.log(t),s.user_list=t["list"],s.count=t["count"],s.house_type=t["house_type"]}))},get_user_info:function(t,s){this.$refs.userInfoFormModal.edit(t,s)},handleCancel:function(){this.visible=!1},close:function(){this.visible=!1}}},d=l,r=(i("55c3"),i("0c7c")),n=Object(r["a"])(d,a,o,!1,null,"d17c56a8",null);s["default"]=n.exports}}]);