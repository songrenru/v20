(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a943e17"],{"1b68":function(t,e,i){},"7ca5":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"current_2"},[i("div",{staticClass:"equipPoint_container"},[1*t.IntelligentEqu.is_photo==1&&t.villagePhoto?i("div",{ref:"canvas_con",staticClass:"draw_canvas",on:{click:t.selectPoint}},[1*t.IntelligentEqu.is_photo==1?i("img",{staticClass:"back_image",style:{width:t.canvasProp.width,height:t.canvasProp.height},attrs:{src:t.villagePhoto}}):t._e(),1*t.IntelligentEqu.is_photo==1?i("canvas",{staticClass:"my_canvas",attrs:{id:"canvasIntelligent",width:t.canvasProp.width,height:t.canvasProp.height}}):t._e()]):t._e(),1*t.IntelligentEqu.is_photo==1&&t.villagePhoto?t._e():i("div",{staticClass:"draw_canvas"},[i("span",[t._v("你还没有上传小区平面图")]),i("div",{staticClass:"upload_btn",on:{click:t.navigateTo}},[t._v("立即添加")])])]),i("div",{staticClass:"left_box_tab"},[i("div",{staticClass:"left_box_tab_head"}),t._l(t.btnList,(function(e,s){return i("div",{key:s,staticClass:"left_box_tab_list",class:t.currentIndex2==s?"active":"",on:{click:function(i){return t.chooseBtn(e,s)}}},[i("span",{staticClass:"left_box_tab_list_text"},[t._v(t._s(e.name))])])}))],2),i("div",{staticClass:"right_content"},[i("div",{staticClass:"right_content_bottom"},[i("div",{staticClass:"content_bottom_left"},[i("div",{staticClass:"bottom_left_con"},t._l(t.typeList,(function(e,s){return i("div",{staticClass:"bottom_left_con_list",on:{click:function(i){return t.chooseTypeList(e,s)}}},[i("div",{staticClass:"list_icon",style:{backgroundColor:e.color}}),i("div",{staticClass:"list_status",class:1==e.checked?"active_color":""},[t._v(t._s(e.title))])])})),0)]),t._m(0),i("div",{staticClass:"content_bottom_right"},t._l(t.deviceType,(function(e,s){return i("div",{key:s,staticClass:"bottom_right_list",class:1==e.checked?"active":"",on:{click:function(i){return t.chooseMultipleInt(e,s)}}},[i("div",{staticClass:"right_list_image"},[i("img",{attrs:{src:e.series_img}})]),i("div",{staticClass:"right_list_text"},[t._v(t._s(e.type_name))])])})),0)]),i("a-modal",{attrs:{title:"选择子设备类型",width:360,visible:t.childEquipVisible,footer:null},on:{ok:t.handleChildOk,cancel:t.handleChildCancel}},[i("span",[t._v("选择子设备：")]),t.childEquipVisible?i("a-select",{staticStyle:{width:"200px"},attrs:{mode:"multiple","token-separators":[","],placeholder:"请选择子设备"},on:{change:t.handleChange}},t._l(t.childEquipList,(function(e,s){return i("a-select-option",{attrs:{value:e.cate_id}},[t._v(" "+t._s(e.name)+" ")])})),1):t._e()],1)],1),i("PopupBox",{ref:"PopupBox",attrs:{title:"设备点位信息"}},[i("div",{staticClass:"popup_content"},[i("div",{staticClass:"flex_row flex_box_1"},[i("div",{staticClass:"square"}),i("p",{staticClass:"popup_text_1"},[t._v("概要信息")])]),i("div",{staticClass:"flex_box_2"},[i("div",{staticClass:"flex_column flex_mini_box_1"},[i("div",{staticClass:"popup_icon_1",style:{backgroundColor:t.detailType.color}}),i("p",{staticClass:"popup_text_2"},[t._v(t._s(t.detailType.title))])])]),i("div",{staticClass:"flex_row flex_box_1"},[i("div",{staticClass:"square"}),i("p",{staticClass:"popup_text_1"},[t._v("基本信息")])]),i("div",{staticClass:"flex_box_3"},t._l(t.detailList,(function(e,s){return i("div",{key:s,staticClass:"text"},[t._v(t._s(e.key)+": "+t._s(e.value?e.value:"暂无"))])})),0)])])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content_bottom_middle"},[i("div",{staticClass:"bottom_middle_con"})])}],n=(i("d81d"),i("a434"),i("992f")),c=i("49420"),l=i.n(c),o=i("a0e0");i("8bbf");l.a.getrem();var r={name:"NewsList",props:{},data:function(){return{statusName:"",equipDetail:{},outdoorPhone:null,indoorPhone1:null,indoorPhone2:null,phoneShow:null,showEquipList:!1,equipList:[],leftMenuList:[{id:1,name:"室外设备地图"},{id:2,name:"室内设备地图"}],btnList:[{name:"小区平面图"},{name:"地下一层"},{name:"地下二层"}],jump_url:"",currentIndex:0,currentIndex2:0,currentIndex3:-1,IntelligentEquList:[{name:"视频监控",imgUrl:"../../../../assets/communityimg/cockpit_shipin.png"},{name:"门禁系统",imgUrl:"../../../../assets/communityimg/cockpit_menjin.png"},{name:"停车系统",imgUrl:"../../../../assets/communityimg/cockpit_tingche.png"},{name:"信息发布",imgUrl:"../../../../assets/communityimg/cockpit_xinxi.png"},{name:"无线AP",imgUrl:"../../../../assets/communityimg/cockpit_wuxian.png"},{name:"环境监测",imgUrl:"../../../../assets/communityimg/cockpit_huanjin.png"},{name:"泛感知",imgUrl:"../../../../assets/communityimg/cockpit_ganzhi.png"}],IntelligentEqu:{is_photo:1,jump_url:""},typeList:[],villagePhoto:"https://hf.pigcms.com/static/wxapp/images/builds_back_img_white.png",coordinateList:[],deviceType:[],requestParams:{type:4,device_type:"",sub_series_type:"",series_key:"",statusName:"",device_status:0,cate_id:""},canvasProp:{width:0,height:0,top:0,left:0},detailType:{},detailList:[],imageUrl:"https://hf.pigcms.com/static/wxapp/images/map_picture.png",childEquipVisible:!1,childEquipList:[],multipleList:[],typeMultiple:[]}},components:{PopupBox:n["default"]},mounted:function(){var t=this;t.requestParams.village_id=50;var e=setTimeout((function(){var i=t.$refs.canvas_con.clientWidth,s=t.$refs.canvas_con.clientHeight,a=t.$refs.canvas_con.getBoundingClientRect().left,n=t.$refs.canvas_con.getBoundingClientRect().top;t.canvasProp.width=i-10+"px",t.canvasProp.height=s-10+"px",t.canvasProp.top=n,t.canvasProp.left=a,console.log("that.canvasProp========>",t.canvasProp),t.requestParams.type=4,t.getFacilitiesData(),clearTimeout(e)}),200)},methods:{changeType:function(t){this.statusName==t.title?console.log("重复"):(this.statusName=t.title,this.requestParams.statusName=t.title,"离线状态"==t.title?this.requestParams.device_status=2:"在线状态"==t.title&&(this.requestParams.device_status=1),this.getFacilitiesData())},selectPoint:function(t){var e=this,i=t.x-this.canvasProp.left-5,s=t.y-this.canvasProp.top-5,a=!0;this.coordinateList.map((function(t){if(t.coordinate&&a){var n=t.coordinate[0],c=t.coordinate[1];n-10<i&&i<n+10&&c-10<s&&s<c+10&&(e.equipList.push(t),console.log("v=========>",t),e.getIntelligentInfo(t.id,t.device_id),e.$refs.PopupBox.open(),a=!1)}}))},initDevicePoint:function(){var t=document.getElementById("canvasIntelligent"),e=t.getContext("2d");this.coordinateList.map((function(t,i){if(t.coordinate){var s=new Image;t.img?s.src=t.img:s.src="https://hf.pigcms.com/static/wxapp/equipPoint/equip_point1.png",s.onload=function(){var i=e.createPattern(s,"no-repeat");e.fillStyle=i;var a=new Image;"在线状态"==t.device_status?a.src="https://hf.pigcms.com/static/wxapp/images/on-line1.png":a.src="https://hf.pigcms.com/static/wxapp/images/off-line1.png",a.onload=function(){e.fillStyle=e.createPattern(a,"no-repeat"),e.drawImage(a,t.coordinate[0]-11,t.coordinate[1]-11,22,22),e.drawImage(s,t.coordinate[0]-7,t.coordinate[1]-7,14,14)}}}}))},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},clearCanvas:function(){if(document.getElementById("canvasIntelligent")){var t=document.getElementById("canvasIntelligent"),e=t.getContext("2d");e.clearRect(0,0,1e3,933)}},chooseNews:function(t,e){this.currentIndex==e?console.log("重复请求"):(this.initData(),this.currentIndex=e,this.currentIndex2=0,this.currentIndex3=-1,0==this.currentIndex&&this.getFacilitiesData(),console.log(t,e))},chooseBtn:function(t,e){this.currentIndex2==e?console.log("重复"):(this.initData(),this.currentIndex2=e,this.currentIndex3=-1,0==this.currentIndex2?(this.requestParams.type=4,this.getFacilitiesData()):1==this.currentIndex2?(this.requestParams.type=1,this.getFacilitiesData()):2==this.currentIndex2&&(this.requestParams.type=2,this.getFacilitiesData()))},initData:function(){this.requestParams={village_id:0,type:4,device_type:"",sub_series_type:"",series_key:"",statusName:""},this.statusName="",this.multipleList=[],this.typeMultiple=[]},chooseInt:function(t,e){this.requestParams.cate_id="",t.device_type&&(this.requestParams.device_type=t.device_type),t.dev_cate&&t.dev_cate.length>0&&(this.childEquipList=t.dev_cate,this.childEquipVisible=!0),this.currentIndex3==e?console.log("重复"):(this.currentIndex3=e,this.requestParams.device_status=0,this.statusName="",this.getFacilitiesData())},chooseMultipleInt:function(t,e){var i=this,s=!1;this.multipleList.map((function(e,a){e==t.device_type&&(s=!0,i.multipleList.splice(a,1),t.dev_cate&&t.dev_cate.length>0&&(i.requestParams.cate_id=""))})),s||(this.multipleList.push(t.device_type),t.dev_cate&&t.dev_cate.length>0?(this.childEquipList=t.dev_cate,this.childEquipVisible=!0):this.requestParams.cate_id=""),this.requestParams.device_type="".concat(this.multipleList),this.getFacilitiesData(),console.log("this.multipleList===>",this.multipleList,"".concat(this.multipleList),this.deviceType)},chooseTypeList:function(t,e){var i=this,s=!1;this.typeMultiple.map((function(e,a){e.title==t.title&&(s=!0,i.typeMultiple.splice(a,1))})),s||this.typeMultiple.push({type:e+1,title:t.title}),this.requestParams.device_status="".concat(this.typeMultiple.map((function(t){return t.type}))),this.requestParams.statusName="".concat(this.typeMultiple.map((function(t){return t.title}))),this.getFacilitiesData(),console.log("this.typeMultiple===>",this.typeMultiple,"".concat(this.typeMultiple),this.typeList)},updateMultiple:function(){var t=this;this.typeList.map((function(t){t.checked=0})),this.typeList.map((function(e){t.typeMultiple.map((function(t){e.title==t.title&&(e.checked=1)}))})),this.deviceType.map((function(t){t.checked=0})),this.deviceType.map((function(e){t.multipleList.map((function(t){e.device_type==t&&(e.checked=1)}))}))},getFacilitiesData:function(){var t=this;this.request(o["a"].getFacilitiesData,this.requestParams,"post").then((function(e){t.coordinateList=[],t.IntelligentEqu=e,t.typeList=e.type,t.coordinateList=e.device_coordinate_list,t.deviceType=e.device_type_list,t.villagePhoto=e.village_photo[0],t.updateMultiple(),t.clearCanvas(),t.initDevicePoint()}))},getIntelligentInfo:function(t,e){var i=this;this.request(o["a"].getFacilitiesDetails,{id:t,device_id:e},"post").then((function(t){i.detailList=t.list,i.detailType=t.type}))},navigateTo:function(){this.$router.push({path:this.IntelligentEqu.jump_url})},handleChildOk:function(){this.childEquipVisible=!1},handleChildCancel:function(){this.childEquipVisible=!1},handleChange:function(t){console.log("".concat(t)),this.requestParams.cate_id="".concat(t),this.getFacilitiesData()}}},p=r,u=(i("7cd7"),i("0c7c")),h=Object(u["a"])(p,s,a,!1,null,"864c0f2a",null);e["default"]=h.exports},"7cd7":function(t,e,i){"use strict";i("1b68")}}]);