(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f39c281","chunk-2d0d3e67"],{"5f77":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAA69JREFUWEe1lmmo1VUUxX8rSqIiqCiKoIgUIkmaPjRgNlp9KSib0AJBy4QGiTDSjCwpygIbpYxGikbLghK1QJs+hRhBNBAGJQURlgY2uGI9zv9x3//9773v3vtaX9675/zPPmvvvfbeR/QB28cCtwMXAHsC7wE3SfqlV3Pq9YDt2cDDwH61sz8UEm/1YnPMBGzvDTwIzC8XbAIWAgcCjwNHlPWlku4cK4kxEbB9GPAmcEoxvEzS4uoS2wcDLwLTy9pa4CpJv3Uj0pWA7SuBR4GDgL+AOZJeaDJs+y5gSdn7EZgn6d1OJDoSsH03UHn6OTBb0pZOBm1fBjwGJCrBEkmx04hGAraPKnmNyoOXgGsl7ewW0uzbngQ835KyNcANkiLUERhFwPaZwCvAIeXL+ZKeGMvF9W9sPwQsKOvbgCskRbzDGEHA9h3A0rL7E3C1pA/6ubw6Y/sa4Blgj7K2WNKyan+IgO0DgJXA5WUjjWWupAhpYNg+EXgKyN8gEb5O0nbZPhxYDxxTNu+XlPruCbYnALsl/dN00Pa+wCogVRV8nbINgQgtHu8AZkqKYBphexZwFvAn8BGwurTjW4DJwC7gVSBOJOejYHsO8CSQ6E8LgTA/A9gq6ZsO7F8DLqztfwcc3XDm21SApF/b2Dse2F/SxroIpwAPxAtJT1eHbb8OXFp+R0AhHU+inSB1H88nxvvStNZLOq/FRr6PjQWSvqrW6wRiPFPuU0mn5aMy+b7MvyVFL5f1tOfbgG2S7mu5aBqQyonqp0j6ony/EZhaxJcUDKFOIIYiwHWShvq67UuAN4CfJR3aTh8tBHLxH8A+SW1V97bXAeeWhpaKaCRwD7AIWCtpqAuWxvQhsD2hlfRvJxK2jwOqdj1JUvQQO+8D55dZMpzeegSaCGQMfw/E+8yCZ7sQiAZuLVWSCCR1/RMoh28EVgAZrydI2tpG3ScDabUhfZGkd1pS018ECoE8u2LgHCAKniEpwhyG7Yg2F+aBslLS9bX9/gkUEjGckXxkEVmm23NlLwMngyf4TNKp9Qj1rYGaF5mQefNVF0ScyfHZ5bsNEVqTUMeFQPF2r/IonVfz8hHgZkm72+hjsBQ0hPQkIHlOapZL+qRLdYwvgU6XDRKBqhOukXRxr5d0icDbKc1urfje0t83ScqEHDfYzvg+vVsrTv/Pmz74GPgdiOgGwd8ZveXy2Ekj21wZbHqUpuOl8/0fGPXaavcsn1kmV1pqPBgEeTtkkG2QlDfDCPwHO+qihaHWxjkAAAAASUVORK5CYII="},"96e1":function(t,e,i){"use strict";i("f9e8")},a235:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"current_2"},[i("div",{staticClass:"equipPoint_container"},[1*t.AngelEye.is_photo==1&&t.villagePhoto?i("div",{ref:"canvas_con",staticClass:"draw_canvas",on:{click:t.selectPoint}},[1*t.AngelEye.is_photo==1?i("img",{staticClass:"back_image",style:{width:t.canvasProp.width,height:t.canvasProp.height},attrs:{src:t.villagePhoto}}):t._e(),1*t.AngelEye.is_photo==1?i("canvas",{staticClass:"my_canvas",attrs:{id:"canvasAngel",width:t.canvasProp.width,height:t.canvasProp.height}}):t._e()]):t._e(),1*t.AngelEye.is_photo==1&&t.villagePhoto?t._e():i("div",{staticClass:"draw_canvas"},[i("span",[t._v("你还没有上传小区平面图")]),i("div",{staticClass:"upload_btn",on:{click:t.navigateTo}},[t._v("立即添加")])])]),i("div",{staticClass:"left_box_tab"},[i("div",{staticClass:"left_box_tab_head"}),t._l(t.leftMenuList,(function(e,s){return i("div",{staticClass:"left_box_tab_list",class:s===t.currentIndex?"active":"",on:{click:function(i){return t.chooseNews(e,s)}}},[t._m(0,!0),i("span",{staticClass:"left_box_tab_list_text"},[t._v(t._s(e.name))])])}))],2),i("div",{staticClass:"right_content"},[i("div",{staticClass:"right_content_top"}),i("div",{staticClass:"right_content_bottom"},[i("div",{staticClass:"content_bottom_left"},[i("div",{staticClass:"bottom_left_con"},t._l(t.typeList,(function(e,s){return i("div",{staticClass:"bottom_left_con_list",on:{click:function(i){return t.chooseTypeList(e,s)}}},[i("div",{staticClass:"list_icon",style:{backgroundColor:e.color}}),i("div",{staticClass:"list_status",class:1==e.checked?"active_color":""},[t._v(t._s(e.title))])])})),0)]),t._m(1)]),i("a-modal",{attrs:{title:"选择子设备类型",width:360,visible:t.childEquipVisible,footer:null},on:{ok:t.handleChildOk,cancel:t.handleChildCancel}},[i("span",[t._v("选择子设备：")]),t.childEquipVisible?i("a-select",{staticStyle:{width:"200px"},attrs:{mode:"multiple","token-separators":[","],placeholder:"请选择子设备"},on:{change:t.handleChildChange}},t._l(t.childEquipList,(function(e,s){return i("a-select-option",{attrs:{value:e.cate_id}},[t._v(" "+t._s(e.name)+" ")])})),1):t._e()],1)],1),i("PopupBox",{ref:"PopupBox",attrs:{title:"天使之眼设备"}},[i("div",{staticClass:"popup_content"},[i("div",{staticClass:"flex_row flex_box_1"},[i("div",{staticClass:"square"}),i("p",{staticClass:"popup_text_1"},[t._v("概要信息")])]),i("div",{staticClass:"flex_box_2"},t._l(t.detailList,(function(e,s){return i("div",{key:s,staticClass:"text_1"},[t._v(t._s(e.key)+": "+t._s(e.value?e.value:"暂无"))])})),0),i("div",{staticClass:"flex_row flex_box_1"},[i("div",{staticClass:"square"}),i("p",{staticClass:"popup_text_1"},[t._v("实时监控")])]),i("div",{staticClass:"flex_box_3"},[t.showIframe?t._e():i("video",{ref:"videoPlayer",staticStyle:{width:"80%",height:"100%","object-fit":"fill"},attrs:{controls:"",src:t.video_url}}),t.showIframe?i("iframe",{ref:"IframeId",staticStyle:{transform:"translateY(30px)"},attrs:{src:t.video_url,width:"100%",height:"420px"}}):t._e()])])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"left_box_tab_list_icon"},[s("img",{attrs:{src:i("5f77")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content_bottom_middle"},[i("div",{staticClass:"bottom_middle_con"})])}],n=(i("a9e3"),i("d3b7"),i("159b"),i("d81d"),i("a434"),i("992f")),c=i("49420"),o=i.n(c),l=i("a0e0");i("8bbf");o.a.getrem();var r={name:"AngelEye",props:{village_id:{type:Number,default:0}},data:function(){return{statusName:"",leftMenuList:[{id:1,name:"天使之眼"}],btnList:[{name:"室外全景图"},{name:"地下地图"}],equipList:[],jump_url:"",currentIndex:0,currentIndex2:0,currentIndex3:-1,AngelEyeList:[{name:"视频监控",imgUrl:"../../../../assets/communityimg/cockpit_shipin.png"},{name:"门禁系统",imgUrl:"../../../../assets/communityimg/cockpit_menjin.png"},{name:"停车系统",imgUrl:"../../../../assets/communityimg/cockpit_tingche.png"},{name:"信息发布",imgUrl:"../../../../assets/communityimg/cockpit_xinxi.png"},{name:"无线AP",imgUrl:"../../../../assets/communityimg/cockpit_wuxian.png"},{name:"环境监测",imgUrl:"../../../../assets/communityimg/cockpit_huanjin.png"},{name:"泛感知",imgUrl:"../../../../assets/communityimg/cockpit_ganzhi.png"}],AngelEye:{is_photo:1,jump_url:""},typeList:[],villagePhoto:"https://hf.pigcms.com/static/wxapp/images/builds_back_img_white.png",coordinateList:[],deviceType:[],canvasProp:{width:0,height:0,top:0,left:0},requestParams:{village_id:0,type:3,device_type:"",sub_series_type:"",device_status:0,cate_id:""},detailType:{},detailList:[],video_url:"",showIframe:!0,childEquipVisible:!1,childList:[{id:1,name:"子设备1"},{id:2,name:"子设备2"},{id:3,name:"子设备2"}],childEquipList:[],multipleList:[],typeMultiple:[]}},components:{PopupBox:n["default"]},created:function(){},mounted:function(){var t=this,e=setTimeout((function(){var i=t.$refs.canvas_con.clientWidth,s=t.$refs.canvas_con.clientHeight,a=t.$refs.canvas_con.getBoundingClientRect().left,n=t.$refs.canvas_con.getBoundingClientRect().top;t.canvasProp.width=i-10+"px",t.canvasProp.height=s-10+"px",t.canvasProp.top=n,t.canvasProp.left=a,t.getMonitorDevice(),clearTimeout(e)}),200)},methods:{selectPoint:function(t){var e=this,i=t.x-this.canvasProp.left-12.5,s=t.y-this.canvasProp.top-12.5,a=!0;this.coordinateList.forEach((function(t){if(t.coordinate&&a){var n=t.coordinate[0],c=t.coordinate[1];n-10<i&&i<n+10&&c-10<s&&s<c+10&&(console.log("v=========>",t),e.getMonitorSpot(t.id,t.device_id),e.$refs.PopupBox.open(),a=!1)}}))},initDevicePoint:function(){var t=document.getElementById("canvasAngel"),e=t.getContext("2d");this.coordinateList.forEach((function(t){if(t.coordinate){var i=new Image;t.img?i.src=t.img:i.src="https://hf.pigcms.com/static/wxapp/equipPoint/equip_point1.png",i.onload=function(){var s=e.createPattern(i,"no-repeat");e.fillStyle=s;var a=new Image;"在线状态"==t.device_status?a.src="https://hf.pigcms.com/static/wxapp/images/on-line1.png":a.src="https://hf.pigcms.com/static/wxapp/images/off-line1.png",a.onload=function(){e.fillStyle=e.createPattern(a,"no-repeat"),e.drawImage(a,t.coordinate[0]-11,t.coordinate[1]-11,22,22),e.drawImage(i,t.coordinate[0]-7,t.coordinate[1]-7,14,14)}}}}))},initData:function(){this.requestParams={village_id:0,type:3,device_type:"",sub_series_type:"",device_status:0,cate_id:""},this.statusName="",this.typeMultiple=[],this.multipleList=[]},clearCanvas:function(){var t=document.getElementById("canvasAngel"),e=t.getContext("2d");e.clearRect(0,0,1e3,1e3)},chooseNews:function(t,e){this.currentIndex==e?console.log("重复请求"):(this.initData(),this.currentIndex=e,this.currentIndex2=0,this.currentIndex3=-1,0==this.currentIndex&&this.getMonitorDevice())},changeType:function(t){this.statusName==t.title?console.log("重复"):(this.statusName=t.title,this.requestParams.statusName=t.title,"离线状态"==t.title?this.requestParams.device_status=2:"在线状态"==t.title&&(this.requestParams.device_status=1),this.getMonitorDevice())},chooseInt:function(t,e){this.requestParams.cate_id="",t.device_type&&(this.requestParams.device_type=t.device_type),t.dev_cate&&t.dev_cate.length>0&&(this.childEquipList=t.dev_cate,this.childEquipVisible=!0),this.currentIndex3==e?console.log("重复"):(this.currentIndex3=e,this.requestParams.device_status=0,this.statusName="",this.getMonitorDevice())},chooseMultipleInt:function(t,e){var i=this,s=!1;this.multipleList.map((function(e,a){e==t.device_type&&(s=!0,i.multipleList.splice(a,1))})),s||(this.multipleList.push(t.device_type),t.dev_cate&&t.dev_cate.length>0?(this.childEquipList=t.dev_cate,this.childEquipVisible=!0):this.requestParams.cate_id=""),this.requestParams.device_type="".concat(this.multipleList),this.getMonitorDevice(),console.log("this.multipleList===>",this.multipleList,"".concat(this.multipleList),this.deviceType)},getMonitorDevice:function(){var t=this;this.request(l["a"].getMonitorDevice,this.requestParams,"post").then((function(e){t.AngelEye=e,t.typeList=e.type,t.coordinateList=e.device_coordinate_list,t.deviceType=e.device_type_list,t.villagePhoto=e.village_photo[0],t.updateMultiple(),t.clearCanvas(),t.initDevicePoint()}))},chooseTypeList:function(t,e){var i=this,s=!1;this.typeMultiple.map((function(e,a){e.title==t.title&&(s=!0,i.typeMultiple.splice(a,1))})),s||this.typeMultiple.push({type:e+1,title:t.title}),this.requestParams.device_status="".concat(this.typeMultiple.map((function(t){return t.type}))),this.requestParams.statusName="".concat(this.typeMultiple.map((function(t){return t.title}))),this.getMonitorDevice(),console.log("this.typeMultiple===>",this.typeMultiple,"".concat(this.typeMultiple),this.typeList)},updateMultiple:function(){var t=this;this.typeList.map((function(t){t.checked=0})),this.typeList.map((function(e){t.typeMultiple.map((function(t){e.title==t.title&&(e.checked=1)}))})),this.deviceType.map((function(t){t.checked=0})),this.deviceType.map((function(e){t.multipleList.map((function(t){e.device_type==t&&(e.checked=1)}))}))},getMonitorSpot:function(t,e){var i=this;i.request(l["a"].getMonitorSpot,{id:t,device_id:e},"post").then((function(t){i.detailList=t.list,i.detailType=t.type,t.videoPreviewUrl?i.$nextTick((function(){i.showIframe=!0;var e=i.$refs.IframeId.getBoundingClientRect().left,s=i.$refs.IframeId.getBoundingClientRect().top;i.video_url=t.videoPreviewUrl+"&left="+e+"&top="+s})):(i.video_url=t.url,i.showIframe=!1)}))},navigateTo:function(){this.$router.push({path:this.AngelEye.jump_url})},handleChildOk:function(){this.childEquipVisible=!1},handleChildCancel:function(){this.childEquipVisible=!1},handleChildChange:function(t){console.log("".concat(t),"color: orange;"),this.requestParams.cate_id="".concat(t),this.getMonitorDevice()}}},p=r,u=(i("96e1"),i("0c7c")),h=Object(u["a"])(p,s,a,!1,null,"0013d914",null);e["default"]=h.exports},f9e8:function(t,e,i){}}]);