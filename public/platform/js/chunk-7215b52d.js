(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7215b52d","chunk-1f895ac2","chunk-646cb788","chunk-50b4979b"],{2105:function(t,i,e){t.exports=e.p+"img/store.2ba4f2c3.png"},"343b":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("a-modal",{attrs:{title:t.title,width:960,visible:t.visible,confirmLoading:t.confirmLoading,footer:null,centered:!0},on:{cancel:t.handleCancel}},[s("div",{staticStyle:{"margin-left":"80%"}},[s("a-button",{on:{click:t.get_floor_info}},[t._v("查看楼栋信息")])],1),s("div",{staticClass:"container"},t._l(t.list,(function(i,o){return s("div",{key:i.floor_id,staticClass:"box"},[s("div",{staticClass:"box_content"},[s("img",{staticStyle:{height:"55px",width:"55px",cursor:"pointer"},attrs:{src:e("e829")},on:{click:function(e){return t.get_layer_list(i.floor_id)}}})]),s("div",{staticClass:"box_content"},[t._v("单元名："+t._s(i.floor_name))]),s("div",{staticClass:"box_content"},[t._v("人口数："+t._s(i.count))]),s("div",{staticClass:"box_content"},[s("img",{staticStyle:{height:"30px",width:"30px",cursor:"pointer"},attrs:{src:e("b2d7")},on:{click:function(e){return t.door_open_list(i.village_id,i.floor_id)}}})])])})),0)]),s("single-info",{ref:"singleInfoModal"}),s("layer-info-form",{ref:"layerInfoFormModal"}),s("door-info-form",{ref:"doorInfoFormModal"})],1)},o=[],a=e("567c"),n=e("f901"),l=e("e016"),c=e("8bf5"),r={components:{DoorInfo:n["default"],SingleInfo:l["default"],LayerInfoForm:c["default"],DoorInfoForm:n["default"]},data:function(){return{visible:!1,confirmLoading:!1,size:"large",title:"",list:"",single_info:""}},methods:{handleCancel:function(){this.visible=!1},add:function(t,i){this.title=i,this.single_id=t,this.visible=!0,this.get_floor_list()},get_floor_list:function(){var t=this;this.request(a["a"].getFloorInfo,{single_id:this.single_id}).then((function(i){t.list=i,""==i&&alert("该楼栋下暂无单元")}))},edit_attr:function(){this.type=!this.type},get_floor_info:function(){var t=this;this.request(a["a"].getSingleInfo,{single_id:this.single_id}).then((function(i){t.single_info=i,t.$refs.singleInfoModal.add(i.single_name,i.measure_area,i.upper_layer_num,i.people_count,i.floor_count,i.room_count,i.grid_name,i.grid_phone)}))},get_layer_list:function(t){var i=this;this.request(a["a"].getLayerInfo,{floor_id:t}).then((function(t){i.$refs.layerInfoFormModal.add(i.title,t.list,t.home,t.store,t.com)}))},door_open_list:function(t,i){this.$refs.doorInfoFormModal.add(t,i)}}},d=r,u=(e("9afe"),e("2877")),_=Object(u["a"])(d,s,o,!1,null,"25a58d6e",null);i["default"]=_.exports},5712:function(t,i,e){t.exports=e.p+"img/right.19306875.png"},"572e":function(t,i,e){},"59aa":function(t,i,e){t.exports=e.p+"img/com.a20df54c.png"},"5afe":function(t,i,e){"use strict";e("af3a")},"5e30":function(t,i,e){},"70c7":function(t,i,e){t.exports=e.p+"img/layer.a3a1a1a5.png"},8103:function(t,i,e){},"842d":function(t,i,e){"use strict";e("572e")},"8bf5":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("a-modal",{attrs:{title:t.title,width:990,visible:t.visible,confirmLoading:t.confirmLoading,footer:null,centered:!0},on:{cancel:t.handleCancel}},[s("div",{staticClass:"container"},[s("div",{staticStyle:{"margin-left":"590px",height:"20px"}},[s("div",{staticStyle:{"margin-left":"-600px"}},[s("a",{on:{click:t.close}},[t._v("<< 返回上级")])]),s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"dodgerblue"}}),s("div",{staticClass:"tips"},[t._v("住宅（"+t._s(t.home)+"）")])]),s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"green"}}),s("div",{staticClass:"tips"},[t._v("办公（"+t._s(t.com)+"）")])]),s("div",{staticClass:"house_type"},[s("div",{staticClass:"radio",staticStyle:{"background-color":"purple"}}),s("div",{staticClass:"tips"},[t._v("商铺（"+t._s(t.store)+"）")])])]),s("div",{staticStyle:{height:"530px",width:"100%","margin-top":"20px","overflow-y":"auto"}},t._l(t.list,(function(i,o){return s("div",{staticClass:"layer"},[s("div",{staticClass:"content",staticStyle:{height:"115px",width:"96px","border-radius":"5px","background-color":"dodgerblue"}},[s("div",{staticStyle:{width:"38px",height:"50px","margin-left":"29px","margin-top":"15px"}},[s("img",{staticStyle:{height:"50px",width:"38px"},attrs:{src:e("70c7")}})]),s("div",{staticStyle:{"margin-top":"15px","text-align":"center"}},[s("span",{staticStyle:{color:"whitesmoke"}},[t._v(t._s(i.layer_name))])])]),s("div",{staticClass:"content",staticStyle:{height:"115px","text-align":"center",float:"left",width:"816px"}},[s("div",{staticClass:"detail",staticStyle:{width:"50px",float:"left","text-align":"center","line-height":"115px"}},[i.room_list.length>1?s("img",{staticStyle:{height:"30px",width:"30px",cursor:"pointer"},attrs:{src:e("9207")},on:{click:function(i){return t.leftmove(o)}}}):t._e()]),s("div",{staticClass:"detail",staticStyle:{float:"left",width:"712px","overflow-x":"hidden","overflow-y":"hidden"}},[s("ul",{staticClass:"module-list",style:{width:100*i.room_list.length+"px"}},t._l(i.room_list,(function(i,o){return s("li",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.get_room_list(i.pigcms_id)}}},[s("div",{staticStyle:{height:"75px","line-height":"75px"}},[1==i.house_type?s("img",{attrs:{src:e("fbf5")}}):2==i.house_type?s("img",{attrs:{src:e("2105")}}):s("img",{attrs:{src:e("59aa")}})]),s("div",{staticStyle:{height:"40px","line-height":"40px"}},[t._v(" "+t._s(i.room)+" ")])])})),0)]),s("div",{staticClass:"detail",staticStyle:{width:"50px",float:"right","text-align":"center","line-height":"115px"}},[i.room_list.length>1?s("img",{staticStyle:{height:"30px",width:"30px",cursor:"pointer"},attrs:{src:e("5712")},on:{click:function(e){return t.rightmove(o,i.room_list.length)}}}):t._e()])])])})),0)])]),s("room-info-form",{ref:"roomInfoFormModal"})],1)},o=[],a=e("d208"),n={components:{RoomInfoForm:a["default"]},data:function(){return{visible:!1,confirmLoading:!1,title:"",list:"",home:"",store:"",com:"",num:[]}},methods:{add:function(t,i,e,s,o){if(this.title=t,this.list=i,i){var a=i.length,n=0;for(n=0;n<a;n++)this.num[n]=0}this.home=e,this.com=o,this.store=s,this.visible=!0},handleCancel:function(){this.visible=!1},leftmove:function(t){this.num[t]<0&&(this.num[t]+=3);var i=document.getElementsByClassName("module-list");i[t].style.marginLeft=100*this.num[t]+"px"},rightmove:function(t,i){var e=100*i-700,s=100*this.num[t];e>-s&&(this.num[t]-=3);var o=document.getElementsByClassName("module-list");o[t].style.marginLeft=100*this.num[t]+"px"},get_room_list:function(t){this.$refs.roomInfoFormModal.add(t,this.title)},close:function(){this.visible=!1}}},l=n,c=(e("eb905"),e("2877")),r=Object(c["a"])(l,s,o,!1,null,"360af394",null);i["default"]=r.exports},9207:function(t,i,e){t.exports=e.p+"img/left.c7cd0c6b.png"},"9afe":function(t,i,e){"use strict";e("8103")},af3a:function(t,i,e){},b2d7:function(t,i,e){t.exports=e.p+"img/door.6c67640f.png"},d208:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("a-modal",{attrs:{title:t.title,width:990,visible:t.visible,confirmLoading:t.confirmLoading,footer:null,centered:!0},on:{cancel:t.handleCancel}},[e("div",{staticClass:"container"},[e("div",{staticStyle:{"margin-left":"400px",height:"20px"}},[e("div",{staticStyle:{"margin-left":"-400px"}},[e("a",{on:{click:t.close}},[t._v("<< 返回上级")])]),1==t.house_type?e("div",[e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"dodgerblue"}}),e("div",{staticClass:"tips"},[t._v("业主（"+t._s(t.count[0])+"）")])]),e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"green"}}),e("div",{staticClass:"tips"},[t._v("配偶（"+t._s(t.count[1])+"）")])]),e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"purple"}}),e("div",{staticClass:"tips"},[t._v("子女（"+t._s(t.count[2])+"）")])]),e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"yellow"}}),e("div",{staticClass:"tips"},[t._v("亲朋好友（"+t._s(t.count[3])+"）")])]),e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"lightblue"}}),e("div",{staticClass:"tips"},[t._v("租客（"+t._s(t.count[7])+"）")])])]):e("div",[e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"dodgerblue"}}),e("div",{staticClass:"tips"},[t._v("业主（"+t._s(t.count[0])+"）")])]),e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"green"}}),e("div",{staticClass:"tips"},[t._v("配偶（"+t._s(t.count[1])+"）")])]),e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"purple"}}),e("div",{staticClass:"tips"},[t._v("子女（"+t._s(t.count[2])+"）")])]),e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"yellow"}}),e("div",{staticClass:"tips"},[t._v("亲朋好友（"+t._s(t.count[3])+"）")])]),e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"deepskyblue"}}),e("div",{staticClass:"tips"},[t._v("老板（"+t._s(t.count[4])+"）")])]),e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"cornflowerblue"}}),e("div",{staticClass:"tips"},[t._v("人事（"+t._s(t.count[5])+"）")])]),e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"darkseagreen"}}),e("div",{staticClass:"tips"},[t._v("财务（"+t._s(t.count[6])+"）")])]),e("div",{staticClass:"house_type"},[e("div",{staticClass:"radio",staticStyle:{"background-color":"lightblue"}}),e("div",{staticClass:"tips"},[t._v("租客/员工（"+t._s(t.count[7])+"）")])])])]),e("div",{staticStyle:{height:"530px",width:"100%","margin-top":"40px","overflow-y":"auto"}},[e("table",{staticStyle:{width:"100%"},attrs:{rules:"rows"}},[e("thead",[e("tr",{staticStyle:{"background-color":"#FAFAFA",height:"50px"}},[e("th",{attrs:{width:"15%"}},[t._v("姓名")]),e("th",{attrs:{width:"20%"}},[t._v("手机号码")]),e("th",{attrs:{width:"25%"}},[t._v("地址")]),e("th",{attrs:{width:"25%"}},[t._v("身份")]),e("th",{attrs:{width:"15%"}},[t._v("操作")])])]),e("tbody",t._l(t.user_list,(function(i){return e("tr",{staticStyle:{height:"50px"}},[e("td",[t._v(t._s(i.name))]),e("td",[t._v(t._s(i.phone))]),e("td",[t._v(t._s(i.address))]),e("td",[t._v(t._s(i.relation))]),e("td",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.get_user_info(i.pigcms_id)}}},[t._v("查看")])])})),0)])])])]),e("user-info-form",{ref:"userInfoFormModal"})],1)},o=[],a=e("567c"),n=e("f595"),l={components:{UserInfoForm:n["default"]},data:function(){return{visible:!1,confirmLoading:!1,title:"",home:"",store:"",com:"",pigcms_id:"",user_list:"",count:"",house_type:0}},methods:{add:function(t,i){this.title=i,this.pigcms_id=t,this.get_room_user_list(this.pigcms_id),this.visible=!0},get_room_user_list:function(t){var i=this;this.request(a["a"].getRoomUserList,{vacancy_id:t}).then((function(t){console.log(t),i.user_list=t["list"],i.count=t["count"],i.house_type=t["house_type"]}))},get_user_info:function(t){this.$refs.userInfoFormModal.edit(t)},handleCancel:function(){this.visible=!1},close:function(){this.visible=!1}}},c=l,r=(e("842d"),e("2877")),d=Object(r["a"])(c,s,o,!1,null,"50651947",null);i["default"]=d.exports},e016:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("a-modal",{attrs:{title:"查看楼栋信息",width:640,visible:t.visible,confirmLoading:t.confirmLoading,footer:null,centered:!0},on:{cancel:t.handleCancel}},[e("p",[t._v("楼栋名称："+t._s(t.single_name)+" "),e("span",{staticStyle:{"margin-left":"20px"}}),t._v(" 楼栋人口："+t._s(t.people_count))]),e("p",[t._v("楼栋面积："+t._s(t.measure_area)+" "),e("span",{staticStyle:{"margin-left":"20px"}}),t._v("所含单元数："+t._s(t.floor_count))]),e("p",[t._v("所含房屋数："+t._s(t.room_count)+" "),e("span",{staticStyle:{"margin-left":"20px"}}),t._v("地面建筑层数："+t._s(t.upper_layer_num))]),e("p",[t._v("网格员："+t._s(t.grid_name)+" "),e("span",{staticStyle:{"margin-left":"20px"}}),t._v("网格员联系方式："+t._s(t.grid_phone))])])],1)},o=[],a={data:function(){return{visible:!1,confirmLoading:!1,single_name:"",measure_area:"",upper_layer_num:"",people_count:"",floor_count:"",room_count:"",grid_name:"",grid_phone:""}},methods:{handleCancel:function(){this.visible=!1},add:function(t,i,e,s,o,a,n,l){this.grid_name=n,this.grid_phone=l,this.single_name=t,this.measure_area=i,this.upper_layer_num=e,this.people_count=s,this.floor_count=o,this.room_count=a,this.visible=!0}}},n=a,l=(e("5afe"),e("2877")),c=Object(l["a"])(n,s,o,!1,null,"1a68202a",null);i["default"]=c.exports},e829:function(t,i,e){t.exports=e.p+"img/floor.c8a8658c.png"},eb905:function(t,i,e){"use strict";e("5e30")},f901:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("a-modal",{attrs:{title:"智能门禁",width:840,height:600,visible:t.visible,confirmLoading:t.confirmLoading,footer:null,centered:!0},on:{cancel:t.handleCancel}},[e("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"name",fn:function(i){return[t._v(" "+t._s(i.first)+" "+t._s(i.last)+" ")]}}])})],1)],1)},o=[],a=e("5530"),n=e("567c"),l=[{title:"操作时间",dataIndex:"log_time_str",key:"log_time_str"},{title:"操作地点",dataIndex:"log_name",key:"log_name"},{title:"操作用户",dataIndex:"name",key:"name",scopedSlots:{customRender:"user"}},{title:"操作状态",dataIndex:"log_status",key:"log_status"},{title:"操作详细信息",dataIndex:"title",key:"title"}],c={data:function(){return{visible:!1,confirmLoading:!1,village_id:0,floor_id:0,data:[],pagination:{},loading:!1,columns:l}},methods:{add:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.village_id=t,this.floor_id=i,this.visible=!0,this.fetch()},handleCancel:function(){this.visible=!1},handleTableChange:function(t,i,e){console.log(t);var s=Object(a["a"])({},this.pagination);s.current=t.current,this.pagination=s,this.fetch(Object(a["a"])({results:t.pageSize,page:t.current},i))},fetch:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,this.request(n["a"].getOpenDoorList,Object(a["a"])(Object(a["a"])({village_id:this.village_id,floor_id:this.floor_id},i),{},{results:5})).then((function(i){var e=Object(a["a"])({},t.pagination);e.total=i.count,e.pageSize=5,t.loading=!1,t.data=i.list,t.pagination=e}))}}},r=c,d=e("2877"),u=Object(d["a"])(r,s,o,!1,null,"2e549ba6",null);i["default"]=u.exports},fbf5:function(t,i,e){t.exports=e.p+"img/home.9e7a0580.png"}}]);