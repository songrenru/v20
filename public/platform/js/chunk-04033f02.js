(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04033f02"],{"002a":function(t,e,i){"use strict";i("f6b7")},"2b9e":function(t,e,i){"use strict";i("c633")},"3f1d":function(t,e,i){},7518:function(t,e,i){"use strict";i("3f1d")},b8b2:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[!1===t.empty?a("div",{staticStyle:{height:"500px"}},[a("div",{staticClass:"content-bd"},[a("a-spin",{attrs:{tip:"Loading...",size:"large",spinning:t.isLoading,wrapperClassName:"msg-box"}},[a("a-row",{staticStyle:{height:"100%","background-color":"white"}},[a("a-col",{style:{height:"100%",borderRight:"1px solid #ececec",paddingTop:"15px"},attrs:{xs:4,sm:4,md:4,lg:4,xl:4,xxl:2}},[a("a-spin",{staticStyle:{height:"100%"},attrs:{tip:"Loading...",size:"large",spinning:!1}},[0!=t.chatLeftList.length||t.isChatLeftListLoading?t._e():a("a-empty",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}),t.isChatLeftListLoading?a("div",{staticClass:"loading-box"},[a("a-spin",[a("a-icon",{staticStyle:{"font-size":"12px",color:"grey","margin-right":"5px"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"})],1),a("span",[t._v("正在加载")])],1):t._e(),t._l(t.chatLeftList,(function(e,i){return t.chatLeftList.length>0?a("div",{key:i},[a("div",{class:t.chatLeftId===e.id?"chatLeftActive":"",staticStyle:{cursor:"pointer"},on:{click:function(i){return t.selectChatLeft(e)}}},["single"===t.chatType&&e.avatar.length<1?a("a-avatar",{staticStyle:{backgroundColor:"#87d068"},attrs:{icon:"user"}}):t._e(),"single"===t.chatType&&e.avatar.length>0?a("a-avatar",{attrs:{src:e.avatar}}):t._e(),"group"===t.chatType?a("a-avatar",{class:{backgroundColor:1===e.avatar}},[1===e.avatar?a("a-icon",{attrs:{slot:"icon",type:"user"},slot:"icon"},[t._v("内")]):t._e(),2===e.avatar?a("a-icon",{attrs:{slot:"icon",type:"user"},slot:"icon"},[t._v("外")]):t._e()],1):t._e(),a("span",{staticStyle:{"padding-left":"10px"}},[t._v(t._s(e.name))])],1)]):t._e()}))],2)],1),a("a-col",{staticStyle:{height:"100%"},attrs:{xs:20,sm:20,md:20,lg:20,xl:20,xxl:22}},[a("a-spin",{staticStyle:{height:"100%"},attrs:{tip:"Loading...",size:"large",spinning:t.isChatListLoading}},[a("div",{staticClass:"chat-info-box"},[a("div",{staticClass:"chat-info-title",staticStyle:{"background-color":"#FAFAFA"}},[a("a-col",{staticClass:"msg-type",class:""===t.msgType?"msg-type-active":"",attrs:{span:2},on:{click:function(e){return t.changeFileType("")}}},[t._v("全部 ")]),a("a-col",{staticClass:"msg-type",class:"text"===t.msgType?"msg-type-active":"",attrs:{span:2},on:{click:function(e){return t.changeFileType("text")}}},[t._v("文本 ")]),a("a-col",{staticClass:"msg-type",class:"image"===t.msgType?"msg-type-active":"",attrs:{span:2},on:{click:function(e){return t.changeFileType("image")}}},[t._v("图片 ")]),a("a-col",{staticClass:"msg-type",class:"voice"===t.msgType?"msg-type-active":"",attrs:{span:2},on:{click:function(e){return t.changeFileType("voice")}}},[t._v("语音 ")]),a("a-col",{staticClass:"msg-type",class:"video"===t.msgType?"msg-type-active":"",attrs:{span:2},on:{click:function(e){return t.changeFileType("video")}}},[t._v("视频 ")]),a("a-col",{staticClass:"msg-type",class:"file"===t.msgType?"msg-type-active":"",attrs:{span:2},on:{click:function(e){return t.changeFileType("file")}}},[t._v("文件 ")]),a("a-col",{staticClass:"msg-type",class:"weapp"===t.msgType?"msg-type-active":"",attrs:{span:2},on:{click:function(e){return t.changeFileType("weapp")}}},[t._v("小程序 ")]),a("a-col",{staticClass:"msg-type",class:"news"===t.msgType?"msg-type-active":"",attrs:{span:2},on:{click:function(e){return t.changeFileType("news")}}},[t._v("图文 ")]),a("a-col",{staticClass:"msg-type",class:"other"===t.msgType?"msg-type-active":"",attrs:{span:2},on:{click:function(e){return t.changeFileType("other")}}},[t._v("其他 ")])],1),a("div",{staticClass:"chat-info-title",staticStyle:{"background-color":"#FAFAFA"}},[a("a-tooltip",{attrs:{placement:"bottom"}},[a("span",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v(t._s(t.activeChatName))])]),a("span",{staticClass:"chat-info-name",staticStyle:{"font-weight":"700"}},[t._v(t._s(t.activeChatName))])]),a("div",{staticStyle:{float:"right"}},[""===t.msgType||"text"===t.msgType?a("a-input",{staticStyle:{width:"210px","margin-right":"10px"},attrs:{allowClear:!0,placeholder:"请输入搜索内容"},model:{value:t.msgName,callback:function(e){t.msgName=e},expression:"msgName"}}):t._e(),a("a-range-picker",{staticStyle:{width:"210px","margin-right":"10px"},attrs:{allowClear:!0,disabledDate:t.disabledDateDay,format:"YYYY-MM-DD"},model:{value:t.sendDate,callback:function(e){t.sendDate=e},expression:"sendDate"}}),a("a-button",{staticStyle:{"margin-right":"10px"},attrs:{disabled:t.chatItemLoading,type:"primary"},on:{click:t.searchChatInfoList}},[t._v("搜索")]),a("a-button",{staticStyle:{"margin-right":"10px"},attrs:{disabled:t.chatItemLoading},on:{click:t.clearContent}},[t._v("清空 ")])],1)],1),a("a-row",{directives:[{name:"perfect-scroll-bar",rawName:"v-perfect-scroll-bar",value:t.perfectScrollBarOptions,expression:"perfectScrollBarOptions"}],ref:"chatRecordDetail",staticClass:"chat-info-list"},[0!=t.chatInfoList.length||t.chatItemLoading?t._e():a("a-empty",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}),a("a-col",{attrs:{span:24}},[t.chatItemLoading?a("div",{staticClass:"loading-box"},[a("a-spin",[a("a-icon",{staticStyle:{"font-size":"12px",color:"grey","margin-right":"5px"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"})],1),a("span",[t._v("正在加载")])],1):t._e(),t._l(t.chatInfoList,(function(e,s){return t.chatInfoList.length>0?a("div",{key:s},[t.showTimeDivider(e.msgid,e.msgtime)?a("div",{staticStyle:{"text-align":"center",width:"100%",float:"left",margin:"8px 0px"}},[t._v(" "+t._s(t.formatMsgTime(e.msgtime,!0))+" ")]):t._e(),a("div",{staticClass:"chat-item",class:t.isFromUser(e)?"self":""},[("vote"==e.msgtype&&101==e.info.votetype||"vote"!=e.msgtype)&&("meeting"==e.msgtype&&101==e.info.meetingtype||"meeting"!=e.msgtype)&&"todo"!=e.msgtype&&"agree"!=e.msgtype&&"disagree"!=e.msgtype&&(1==e.from_type&&e.from_info.avatar||1!=e.from_type&&e.from_info.avatar)?a("a-avatar",{staticClass:"chat-item-img",attrs:{shape:"square",src:(e.from_type,e.from_info.avatar)}}):t._e(),("vote"==e.msgtype&&101==e.info.votetype||"vote"!=e.msgtype)&&("meeting"==e.msgtype&&101==e.info.meetingtype||"meeting"!=e.msgtype)&&"todo"!=e.msgtype&&"agree"!=e.msgtype&&"disagree"!=e.msgtype&&(1==e.from_type&&!e.from_info.avatar||1!=e.from_type&&!e.from_info.avatar)?a("img",{staticClass:"chat-item-img",attrs:{src:i("4bef")}}):t._e(),t._v(" "+t._s(e.msgType)+" "),("vote"!=e.msgtype||101!=e.info.votetype)&&"vote"==e.msgtype||("meeting"!=e.msgtype||101!=e.info.meetingtype)&&"meeting"==e.msgtype||"todo"==e.msgtype||"agree"==e.msgtype||"disagree"==e.msgtype||"group"!==t.chatType||t.isFromUser(e)?t._e():a("div",{staticClass:"chat-item-name",staticStyle:{"margin-bottom":"6px"}},[a("span",{staticStyle:{margin:"0 8px 0 10px"}},[t._v(t._s(e.from_info.name))]),1==e.from_type?a("a-tag",{attrs:{color:"blue"}},[t._v("内部 ")]):a("a-tag",{attrs:{color:"orange"}},[t._v("外部")])],1),a("div",{ref:e.msgid,refInFor:!0,staticClass:"content content-item",class:"content-"+t.getMsgType(e),domProps:{innerHTML:t._s(t.initMsgContent(e,s))},on:{click:t.addComment}})],1)]):t._e()}))],2)],1)],1)])],1)],1)],1)],1),"undefined"!=typeof t.previewInfo[t.chatLeftId]&&t.previewVisible?a("a-modal",{staticClass:"preview-modal",attrs:{visible:t.previewVisible,footer:null,centered:""},on:{cancel:t.handleCancel}},[a("a-carousel",{ref:"previewCarousel",attrs:{arrows:"",dots:!1,effect:"fade",adaptiveHeight:!0},scopedSlots:t._u([{key:"prevArrow",fn:function(e){return a("div",{staticClass:"custom-slick-arrow",staticStyle:{left:"10px",zIndex:"1"}},[a("a-icon",{attrs:{type:"left-circle"},on:{click:t.videoStop}})],1)}},{key:"nextArrow",fn:function(e){return a("div",{staticClass:"custom-slick-arrow",staticStyle:{right:"10px"}},[a("a-icon",{attrs:{type:"right-circle"},on:{click:t.videoStop}})],1)}}],null,!1,4242784060)},t._l(t.previewInfo[t.chatLeftId],(function(e,i){return a("div",["undefined"!==typeof e.previewType&&"IMG"===e.previewType?a("img",{staticStyle:{margin:"0 auto",display:"block","max-width":"450px","max-height":"450px"},attrs:{alt:e.previewAlt,src:e.previewUrl}}):t._e(),"undefined"!==typeof e.previewType&&"VIDEO"===e.previewType?a("video",{staticStyle:{margin:"0 auto",display:"block","max-width":"450px","max-height":"450px"},attrs:{src:e.previewUrl,width:e.previewWidth,height:e.previewHeight,preload:"",controls:"","data-key":i},on:{play:t.videoPlay,pause:t.videoPause}}):t._e()])})),0)],1):t._e(),t.lookVisible?a("a-modal",{attrs:{visible:t.lookVisible,width:"666px!important",centered:"",title:"音频存档详情"},on:{cancel:t.handleCancelLook}},[a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:t.handleCancelLook}},[t._v("关闭")])],1),a("a-col",{staticClass:"detail",attrs:{span:24}},[a("div",{staticClass:"detail-title"},[t._v(" 参与人 ")]),a("div",{staticStyle:{margin:"0 20px"}},t._l(t.voiceDetail.take_data,(function(e){return a("div",{staticStyle:{display:"inline-block",width:"50px","text-align":"center",margin:"10px"}},[a("img",{staticStyle:{width:"35px",height:"35px"},attrs:{src:e.avatar}}),a("p",{staticStyle:{width:"50px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","margin-bottom":"0px"}},[t._v(" "+t._s(e.take_name))])])})),0)]),a("a-col",{staticClass:"detail",attrs:{span:24}},[a("div",{staticClass:"detail-title"},[t._v(" 语音内容 ")]),a("div",{staticClass:"content-9",staticStyle:{"background-color":"#E2E2E2",width:"110px",margin:"10px 30px"},on:{click:t.addComment}},[a("div",{staticClass:"voice-box voice-btn",staticStyle:{width:"100px"},attrs:{"data-key":t.msgId}},[a("div",{staticClass:"voice-symbol voice-btn",attrs:{"data-key":t.msgId}},[a("span",{staticClass:"voice-circle first voice-btn",attrs:{id:"voiceCircleFirst"+t.msgId,"data-key":t.msgId}}),a("span",{staticClass:"voice-circle second voice-btn",attrs:{id:"voiceCircleSecond"+t.msgId,"data-key":t.msgId}}),a("span",{staticClass:"voice-circle third voice-btn",attrs:{id:"voiceCircleThird"+t.msgId,"data-key":t.msgId}})]),a("span",{staticClass:"voice-time voice-btn",attrs:{"data-key":t.msgId}},[t._v(t._s(t.getMediaDuration(t.voiceDetail.voice_time,"voice")))])]),a("audio",{attrs:{id:"voiceAudio"+t.msgId,preload:"",src:t.voiceDetail.file_path}})])]),t.voiceDetail.doc_data&&t.voiceDetail.doc_data.length>0?a("a-col",{staticClass:"detail",attrs:{span:24}},[a("div",{staticClass:"detail-title"},[t._v(" 文件共享 ")]),t._l(t.voiceDetail.doc_data,(function(e){return a("div",{staticClass:"content-6",on:{click:t.addComment}},[a("div",{staticClass:"file-content file",attrs:{"data-src":e.file_path}},["file"==t.getFileType(e.filename)?a("img",{staticClass:"file file-icon",attrs:{"data-src":e.file_path,height:"56",src:i("a4b7")}}):t._e(),"doc"==t.getFileType(e.filename)?a("img",{staticClass:"file file-icon",attrs:{"data-src":e.file_path,height:"56",src:i("5df1")}}):t._e(),"docx"==t.getFileType(e.filename)?a("img",{staticClass:"file file-icon",attrs:{"data-src":e.file_path,hieght:"56",src:i("4035")}}):t._e(),"xlsx"==t.getFileType(e.filename)?a("img",{staticClass:"file file-icon",attrs:{"data-src":e.file_path,height:"56",src:i("b6f5")}}):t._e(),"xls"==t.getFileType(e.filename)?a("img",{staticClass:"file file-icon",attrs:{"data-src":e.file_path,height:"56",src:i("7806")}}):t._e(),"csv"==t.getFileType(e.filename)?a("img",{staticClass:"file file-icon",attrs:{"data-src":e.file_path,height:"56",src:i("17f6")}}):t._e(),"pptx"==t.getFileType(e.filename)?a("img",{staticClass:"file file-icon",attrs:{"data-src":e.file_path,height:"56",src:i("aecb8")}}):t._e(),"ppt"==t.getFileType(e.filename)?a("img",{staticClass:"file file-icon",attrs:{"data-src":e.file_path,height:"56",src:i("c5a2")}}):t._e(),"txt"==t.getFileType(e.filename)?a("img",{staticClass:"file file-icon",attrs:{"data-src":e.file_path,height:"56",src:i("bca3")}}):t._e(),"pdf"==t.getFileType(e.filename)?a("img",{staticClass:"file file-icon",attrs:{"data-src":e.file_path,height:"56",src:i("afc3")}}):t._e(),"xmind"==t.getFileType(e.filename)?a("img",{staticClass:"file file-icon",attrs:{"data-src":e.file_path,height:"56",src:i("9bddd")}}):t._e(),a("div",{staticClass:"file-info file",attrs:{"data-src":e.file_path}},[a("span",{staticClass:"file file-name",attrs:{"data-src":e.file_path}},[t._v(t._s(e.filename))]),a("span",{staticClass:"file file-size",attrs:{"data-src":e.file_path}},[t._v(t._s(t.getDisplayFileSize(e.filesize)))])])])])}))],2):t._e(),t.voiceDetail.share_data&&t.voiceDetail.share_data.length>0?a("a-col",{staticClass:"detail",attrs:{span:24}},[a("div",{staticClass:"detail-title"},[t._v(" 屏幕共享 ")]),t._l(t.voiceDetail.share_data,(function(e){return a("div",{staticStyle:{margin:"15px 30px"}},[a("img",{attrs:{src:e.avatar,height:"35"}}),a("span",{staticClass:"share-username"},[t._v(t._s(e.share_name))]),e.share_time>0?a("span",{staticStyle:{"vertical-align":"middle"}},[t._v("：共享时长 "+t._s(t.getMediaDuration(e.share_time)))]):t._e()])}))],2):t._e()],2):t._e()],1):t._e(),t.empty?a("a-empty",{staticClass:"empty",attrs:{image:t.simpleImage}},[a("span",{attrs:{slot:"description"},slot:"description"},[t._v("暂无数据")])]):t._e()],1)},s=[],n=i("53ca"),o=i("1da1"),c=(i("06f4"),i("fc25")),r=(i("96cf"),i("a9e3"),i("b0c0"),i("d81d"),i("ac1f"),i("841c"),i("4d63"),i("25f0"),i("5319"),i("a4d3"),i("e01a"),i("b680"),i("c1df")),l=i.n(r),d=i("40cf"),p=i("a4b7"),g=i.n(p),h=i("17f6"),v=i.n(h),m=i("5df1"),f=i.n(m),u=i("4035"),y=i.n(u),_=i("afc3"),k=i.n(_),b=i("c5a2"),C=i.n(b),w=i("aecb8"),x=i.n(w),L=i("bca3"),I=i.n(L),M=i("7806"),T=i.n(M),D=i("b6f5"),F=i.n(D),S=i("9bddd"),A=i.n(S),V=i("a0e0"),P={name:"chatRecordDetail",data:function(){return{simpleImage:"",isChatListLoading:!1,isChatLeftListLoading:!1,activeChatName:"",msgName:"",chatItemLoading:!1,msgType:"",sendDate:null,chatInfoList:[],timeDivider:[],isLoading:!1,chatLeftId:0,customerId:0,chatLeftList:[],previewInfo:[],previewVisible:!1,lookVisible:!1,voiceDetail:{},previewRelation:[],perfectScrollBarOptions:{suppressScrollX:!0,minScrollbarLength:15},playAudio:{isPlay:!1,key:0,dom:"",interval:""},playVideo:{isPlay:!1,key:-1,dom:""},empty:!1,flag:!0,page:1,nextPage:!0,requestLock:!1}},props:{uid:{type:Number,default:0},chatType:{type:String,default:"single"}},created:function(){this.simpleImage=c["a"].PRESENTED_IMAGE_SIMPLE},mounted:function(){document.getElementsByClassName("chat-info-list")[0].addEventListener("scroll",this.onScroll,!0),this.getLeftList()},methods:{handleCancel:function(){this.previewVisible=!1,this.videoStop()},videoStop:function(){this.playVideo.isPlay&&(this.playVideo.dom.currentTime=0,this.playVideo.dom.pause())},onScroll:function(t){t.bubbles||(this.inner=document.getElementsByClassName("chat-info-list")[0],this.inner.clientHeight+this.inner.scrollTop>=this.inner.scrollHeight&&this.flag&&(this.flag=!1,this.requestLock=!1,console.log("滚轮事件"),this.getChatInfoList(1)))},getLeftList:function(){var t=this;this.isChatLeftListLoading=!0;var e={uid:this.uid,type:this.chatType};this.request(V["a"].getChatLeftList,e).then((function(e){console.log(e.list),t.isChatLeftListLoading=!1,0!==e.list.length&&(t.chatLeftList=e.list,t.chatLeftId=e.list[0]["id"],t.customerId=e.list[0]["customer_id"],t.chatInfoList=[],t.nextPage=!0,t.requestLock=!1,console.log("左侧员工聊天群列表"),t.getChatInfoList())}))},selectChatLeft:function(t){console.log(t.id),this.activeChatName=t.name,this.chatLeftId=t.id,this.customerId=t.customer_id,this.chatInfoList=[],this.nextPage=!0,this.requestLock=!1,console.log("选择成员或群"),this.getChatInfoList()},changeFileType:function(t){this.msgType!==t&&(this.msgType=t,this.msgName="",this.sendDate=null,this.chatItemLoading=!0,this.nextPage=!0,this.chatInfoList=[],this.requestLock=!1,this.flag=!1,console.log("改变正文内容类型"),this.getChatInfoList())},clearContent:function(){this.msgName="",this.sendDate=null,this.chatInfoList=[],this.requestLock=!1,this.getChatInfoList()},searchChatInfoList:function(){this.chatInfoList=[],this.requestLock=!1,this.nextPage=!0,this.getChatInfoList()},getChatInfoList:function(){var t=arguments,e=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){var a,s,o,c;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a=t.length>0&&void 0!==t[0]?t[0]:0,!1!==e.nextPage){i.next=3;break}return i.abrupt("return",!1);case 3:if(s=e,0===a&&(e.page=1),s.chatItemLoading=!0,0!==s.chatLeftId){i.next=10;break}return s.isChatListLoading=!1,s.chatItemLoading=!1,i.abrupt("return",!1);case 10:if(o=s.msgType,c={from_id:s.customerId,to_id:s.chatLeftId,msg_type:s.msgType,chat_id:"group"===s.chatType?s.chatLeftId:"",search_name:s.msgName,start_date:s.sendDate&&s.sendDate.length>1?l()(s.sendDate[0]).format("YYYY-MM-DD"):"",end_date:s.sendDate&&s.sendDate.length>1?l()(s.sendDate[1]).format("YYYY-MM-DD"):"",type:"group"===s.chatType?3:1,chat_from_id:s.customerId,page:e.page},!1!==e.requestLock){i.next=15;break}return i.next=15,e.request(V["a"].chatSessionlog,c).then((function(t){if(e.requestLock=!0,"object"===Object(n["a"])(t)){if(o!==s.msgType)return!1;t.list.length>0&&(t.list.map((function(t){s.chatInfoList.push(t)})),e.nextPage=t.next_page,!0===t.next_page&&e.page++),s.previewInfo=[],s.previewRelation=[]}}));case 15:e.flag=!0,s.chatItemLoading=!1,s.isChatListLoading=!1;case 18:case"end":return i.stop()}}),i)})))()},disabledDateDay:function(t){return t.valueOf()>(new Date).getTime()},showTimeDivider:function(t,e){if(e=this.formatMsgTime(e),this.timeDivider[this.chatLeftId])return!(this.timeDivider[this.chatLeftId].time.indexOf(e)>-1&&this.timeDivider[this.chatLeftId].show[e]!==t)&&(-1===this.timeDivider[this.chatLeftId].time.indexOf(e)&&(this.timeDivider[this.chatLeftId].time.push(e),this.timeDivider[this.chatLeftId].show[e]=t),!0)},formatMsgTime:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"YYYY-MM-DD HH:mm";return t=parseInt(t),e&&this.isToday(t)?l()(t).format("HH:mm"):l()(t).format(i)},isFromUser:function(t){return 1===t.from_type&&t.user_id===this.chatLeftId},getMsgType:function(t){var e=1;switch(t.msgtype?t.msgtype:""){case"text":case"markdown":e=1;break;case"image":e=2;break;case"video":e=3;break;case"mixed":e=4;break;case"weapp":e=5;break;case"file":e=6;break;case"revoke":e=7;break;case"emotion":e=8;break;case"voice":e=9;break;case"link":e=10;break;case"agree":e=11;break;case"disagree":e=12;break;case"card":e=13;break;case"location":e=14;break;case"redpacket":case"external_redpacket":e=15;break;case"collect":e=16;break;case"calendar":e=17;break;case"todo":e=18;break;case"vote":e=101===t.info.votetype?19:18;break;case"docmsg":e=20;break;case"meeting":e=101===t.info.meetingtype?21:18;break}return e},initMsgContent:function(t,e){var i="[暂不支持的信息]";switch(t.msgtype?t.msgtype:""){case"text":case"markdown":i=this.initTextMsgContent(t.info);break;case"image":i=this.initImgMsgContent(t.info);break;case"video":i=this.showMsgVisible?'<div style="width: 160px;position: relative;">'+this.initVideoMsgContent(t.info)+"</div>":this.initVideoMsgContent(t.info);break;case"voice":i=this.initVoiceMsgContent(t.info);break;case"emotion":i=this.initEmotionMsgContent(t.info);break;case"weapp":i=this.initWeappMsgContent(t.info);break;case"file":i=this.initFileMsgContent(t.info);break;case"revoke":i=this.initRevokeMsgContent(t.info);break;case"mixed":i=this.initMixedMsgContent(t.info);break;case"link":i=this.initLinkMsgContent(t.info);break;case"agree":i=this.initAgreeMsgContent(t.info);break;case"disagree":i=this.initDisagreeMsgContent(t.info);break;case"card":i=this.initCardMsgContent(t.info);break;case"location":i=this.initLocationMsgContent(t.info);break;case"redpacket":case"external_redpacket":i=this.initRedpacketMsgContent(t.info);break;case"collect":i=this.initCollectMsgContent(t.info);break;case"calendar":i=this.initCalendarMsgContent(t.info);break;case"todo":i=this.initTodoMsgContent(t.info);break;case"vote":i=this.initVoteMsgContent(t);break;case"docmsg":i=this.initDocmsgMsgContent(t.info);break;case"meeting":i=this.initMeetingMsgContent(t);break;default:console.log("暂不支持的【"+t.content+"】信息");break}return i},initTextMsgContent:function(t){var e=this;return t=t.content,-1!==t.search(/[\/\[\]\(\)\|\$\*\?\+\-\_]/g)&&d["a"].wechatEmojiKey&&d["a"].wechatEmojiKey.length>0&&d["a"].wechatEmojiKey.map((function(i){var a=new RegExp(e.addslashes(i),"g"),s=d["a"].getEmojiUrl(i);t=t.replace(a,'<img src="'+s+'" alt="'+i+'" height="21" width="21"/>')})),"<div>"+t.replace(/[\r\n|\n]/g,"<br/>")+"</div>"},addslashes:function(t){return t.replace(/[\/\[\]\(\)\|\$\*\?\+\-\_]/g,(function(t){return{"/":"\\/","[":"\\[","]":"\\]","(":"\\(",")":"\\)","|":"\\|",$:"\\$","*":"\\*","?":"\\?","+":"\\+","-":"\\-",_:"\\_"}[t]}))},initImgMsgContent:function(t){var e="img-"+t.id,i=this.getNewSize(t.width,t.height),a=i.newWidth,s=i.newHeight,n=i.newPreviewWidth,o=i.newPreviewHeight;return t.preview_width=n,t.preview_height=o,this.initPreviewInfo(e,t,"IMG"),'<img class="media-content" src="'+t.file_path+'" alt="图片" height="'+s+'" width="'+a+'" data-key="'+e+'" />'},getMediaDuration:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"video",i=Math.floor(t/60);if(i<1)return"voice"===e?t:t<10?"00:0"+t:"00:"+t;var a=Math.floor(i/60);if(a<1){var s=t-60*i;return i<10?s<10?"voice"===e?i+":0"+s:"0"+i+":0"+s:"voice"===e?i+":"+s:"0"+i+":"+s:s<10?i+":0"+s:i+":"+s}},getNewSize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1272,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:720,i=160,a=160,s=840,n=600,o=i,c=a,r=s,l=n;return parseInt(e)>parseInt(t)?(parseInt(e)>a?o=a*t/e:(o=t,c=e),parseInt(e)>n?r=n*t/e:(r=t,l=e),r>s&&(r=s,l=s*e/t)):(parseInt(t)>i?c=i*e/t:(o=t,c=e),parseInt(t)>r?l=s*e/t:(r=t,l=e),l>n&&(r=n*t/e,l=n)),{newWidth:o,newHeight:c,newPreviewWidth:r,newPreviewHeight:l}},initVideoMsgContent:function(t){var e='<div class="wrong-notice">【视频无法加载】</div>';if(""!==t.local_path){var i="video-"+t.id;t.width&&(t.width=1272),t.height&&(t.height=720);var a=this.getNewSize(t.width,t.height),s=a.newWidth,n=a.newHeight,o=a.newPreviewWidth,c=a.newPreviewHeight;t.preview_width=o,t.preview_height=c,this.initPreviewInfo(i,t,"VIDEO"),e='<video class="media-content" src="'+t.local_path+'" preload width="'+s+'" height="'+n+'" data-key="'+i+'"></video><div class="media-play-btn"><span class="play-btn" data-key="'+i+'"></span></div><span class="video-duration" data-key="'+i+'">'+this.getMediaDuration(t.play_length)+"</span>"}return e},initVoiceMsgContent:function(t){var e='<div class="wrong-notice">【音频无法加载】</div>';if(""!==t.local_path){var i="voice-"+t.id,a=240,s=75,n=t.play_length*a/60;n=n<s?s:n,e='<div class="voice-box voice-btn" style="width: '+n+'px;" data-key="'+i+'"><div class="voice-symbol voice-btn" data-key="'+i+'"><span id="voiceCircleFirst'+i+'" class="voice-circle first voice-btn" data-key="'+i+'"></span><span id="voiceCircleSecond'+i+'"  class="voice-circle second voice-btn" data-key="'+i+'"></span><span id="voiceCircleThird'+i+'"  class="voice-circle third voice-btn" data-key="'+i+'"></span></div>',e+='<span class="voice-time voice-btn" data-key="'+i+'">'+this.getMediaDuration(t.play_length,"voice")+"″</span></div>",e+='<audio id="voiceAudio'+i+'" preload src="'+t.local_path+'" style="display: none; "/>'}return e},initEmotionMsgContent:function(t){return'<img class="emotion-content" src="'+t.local_path+'"/>'},initWeappMsgContent:function(t){return'<div class="weapp-content"><div class="weapp-display-name">'+t.displayname+'</div><div class="weapp-title">'+t.title+'</div><div class="weapp-description">'+t.description+'</div><div class="weapp-footer"><img src="'+this.miniApp+'" width="12" height="12" style="margin-right: 5px; vertical-align: middle;"/><span style="vertical-align: middle;">小程序</span></div></div>'},getDisplayFileSize:function(t){var e=t/1024;if(parseInt(e)<1024)return parseInt(e)+"K";var i=e/1024;if(parseInt(i)<1024)return i.toFixed(2)+"M";var a=i/1024;if(parseInt(a)<1024)return a.toFixed(2)+"G";var s=a/1024;return s.toFixed(2)+"T"},initFileMsgContent:function(t){var e=g.a;return"csv"===t.fileext?e=v.a:"doc"===t.fileext?e=f.a:"docx"===t.fileext?e=y.a:"pdf"===t.fileext?e=k.a:"ppt"===t.fileext?e=C.a:"pptx"===t.fileext?e=x.a:"txt"===t.fileext?e=I.a:"xls"===t.fileext?e=T.a:"xlsx"===t.fileext?e=F.a:"xmind"===t.fileext&&(e=A.a),'<div class="file-content file" data-src="'+t.local_path+'"><div data-src="'+t.local_path+'" class="file-info file"><span data-src="'+t.local_path+'" class="file" style="width: 176px; display: inline-block; height: 40px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">'+t.filename+'</span><span data-src="'+t.local_path+'" class="file" style="font-size: 12px; height: 20px; line-height: 20px; color: #999999; ">'+this.getDisplayFileSize(t.filesize)+'</span></div><img style="margin-top: 10px;" data-src="'+t.local_path+'" class="file" class="file-icon" src="'+e+'" height="41"/></div>'},initRevokeMsgContent:function(t){var e='<div class="revoke-box"><span style="display: block;">这是一条【撤回】消息，内容如下：</span> <div class="revoke-content">';return"undefined"!==typeof t.content&&"undefined"!==typeof t.content.msgtype&&(e+='<div class="content content-'+this.getMsgType(t.content)+'">'+this.initMsgContent(t.content)+"</div>"),e+="</div></div>",e},initMixedMsgContent:function(t){var e=this;console.log("initMixedMsgContent============",t);var i="";return t.map((function(t){switch(t.type){case"text":case"markdown":i+=e.initTextMsgContent(t.content);break;case"image":i+=e.initImgMsgContent(t.content);break;case"video":i+=e.initVideoMsgContent(t.content);break;case"weapp":i+=e.initWeappMsgContent(t.content);break;case"file":i+=e.initFileMsgContent(t.content);break;case"emotion":i+=e.initEmotionMsgContent(t.content);break;case"link":i+=e.initLinkMsgContent(t.content);break;case"agree":i+=e.initAgreeMsgContent(t.content);break;case"disagree":i+=e.initDisagreeMsgContent(t.content);break;case"card":i+=e.initCardMsgContent(t.content);break;case"location":i+=e.initLocationMsgContent(t.content);break;case"redpacket":case"external_redpacket":i+=e.initRedpacketMsgContent(t.content);break;case"collect":i+=e.initCollectMsgContent(t.content);break;case"calendar":i+=e.initCalendarMsgContent(t.content);break;case"todo":i+=e.initTodoMsgContent(t.content);break;case"vote":i+=e.initVoteMsgContent(t);break;case"docmsg":i+=e.initDocmsgMsgContent(t.content);break;case"meeting":i+=e.initMeetingMsgContent(t.content);break;default:i+="暂不支持的【"+t.content.content+"】信息";break}})),i},initLinkMsgContent:function(t){var e='<div class="item-info msg_content_txt"><p class="url-title">'+t.title+'</p><div style="overflow: hidden;"><div class="url-text">'+t.description+"</div>";return t.image_url&&(e+='<img src="'+t.image_url+'" alt="" style="object-fit: cover;"class="url-img">'),e+="</div></div>",e},initAgreeMsgContent:function(t){var e='<div class="msg_content_txt">对方同意存档会话内容，你可以继续提供服务</div>';return e},initDisagreeMsgContent:function(t){var e='<div class="msg_content_txt">对方不同意存档会话内容，你将无法继续提供服务</div>';return e},initCardMsgContent:function(t){var e='<div class="item-info msg_content_txt"><div style="overflow: hidden;width: calc(100% - 80px); display: inline-block;padding: 5px 16px;"><p class="url-title">'+t.corpname+'</p><div class="url-text" style="color: #333333;font-weight: 700;">'+t.userid+'</div><div class="url-text">'+(t.user_info?t.user_info.name:"")+"</div></div>";return t.user_info.avatar||t.user_info.avatar?e+='<img v-if="content.user_info" src="'+(t.user_info.avatar||t.user_info.avatar)+'" alt="" style="object-fit: cover;margin: 10px 10px 0 0;"class="url-img">':e+='<img v-if="content.user_info" src="'+i("46bb")+'" alt="" style="object-fit: cover;margin: 10px 10px 0 0;"class="url-img">',e+='<div class="card-title">个人名片</div></div>',e},initLocationMsgContent:function(t){var e='<span class="wrong-notice"><i aria-label="图标: environment" class="anticon anticon-environment" style="color: green; vertical-align: middle; "><svg viewBox="64 64 896 896" data-icon="environment" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M854.6 289.1a362.49 362.49 0 0 0-79.9-115.7 370.83 370.83 0 0 0-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 0 0 169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0 0 22.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"></path></svg></i> <strong style="vertical-align: middle; ">位置信息：</strong><i style="vertical-align: middle; ">'+t.address+" "+t.title+"</i></span>";return e},initRedpacketMsgContent:function(t){var e='<div class="redpacket"><div class="redpacket-title"><img class="redpacket-img" src="'+i("5705")+'" /><div style="display: inline-block;"><div class="redpacket-wish">'+t.wish+"</div><div>金额："+t.totalamount/100+'元</div></div></div><div class="redpacket-name">红包</div></div>';return e},initCollectMsgContent:function(t){for(var e='<div class="collect"><div class="collect-title">'+t.title+'</div><div class="collect-table">',a=0;a<t.details.length;a++)e+='<div class="table-th1">'+t.details[a].ques+'</div><div class="table-th2"></div>';return e+='</div><div class="collect-footer"><img class="collect-icon" src="'+i("1f3b")+'" /><span class="collect-desc">填表</span></div></div>',e},initCalendarMsgContent:function(t){var e='<div class="calendar"><div class="calendar-title">'+(t.title||"无主题")+'</div><div class="calendar-time">'+t.dateStr+"</div>";return t.creatorname&&(e+='<div class="calendar-list">'+t.creatorname+"</div>"),t.place&&(e+='<div class="calendar-list">'+t.place+"</div>"),t.remarks&&(e+='<div class="calendar-remarks">'+t.remarks+"</div>"),e+='<div class="calendar-footer"><img class="calendar-icon" src="'+i("2b78")+'" /><span class="calendar-desc">日程</span></div></div>',e},initTodoMsgContent:function(t){var e='<div class="msg_content_txt">'+t.title+"："+t.content+"</div>";return e},initVoteMsgContent:function(t){var e=t.info,a="";if(101===e.votetype){a='<div class="vote"><div class="vote-title">'+e.votetitle+'</div><div class="vote-table">';for(var s=0;s<e.voteitem.length;s++)a+='<div class="table-th1"><img style="width: 7px;vertical-align: initial;margin-right: 10px;" src="'+i("c0ef")+'">'+e.voteitem[s]+"</div>";a+='</div><div class="vote-footer"><img class="vote-icon" src="'+i("7623")+'" /><span class="vote-desc">投票</span></div></div>'}else a+='<div class="msg_content_txt">'+t.from_info.name+'填写了投票[<span style="color: #1890FF">'+e.votetitle+"</span>]";return a},initDocmsgMsgContent:function(t){var e=i("e99c"),a='<div data-src="'+t.link_url+'" class="item-info msg_content_txt docmsg"><div style="width: 18px; height: 18px; background-color: #1890FF; color: #FFFFFF; border-radius: 50%;text-align: center;line-height: 16px;margin-right: 10px; display: inline-block;">w</div>微文档<div data-src="'+t.link_url+'" class="docmsg" style="overflow: hidden; margin-top: 10px;"><div data-src="'+t.link_url+'" class="url-text docmsg"><p data-src="'+t.link_url+'" class="doc_title docmsg">'+t.title+'</p><p data-src="'+t.link_url+'" class="doc_creator docmsg">'+t.doc_creator+'</p></div><img data-src="'+t.link_url+'" src="'+e+'" alt="" style="object-fit: cover;"class="url-img docmsg"></div></div>';return a},initMeetingMsgContent:function(t){var e=t.info,a="";if("101"===e.meetingtype)a+='<div class="meeting"><div class="meeting-title">'+e.topic+'</div><div class="meeting-content"><div class="meeting-time">时间：'+e.dateStr+'</div><div class="meeting-list">地点：'+e.address+"</div>",e.remarks&&(a+='<div class="meeting-remarks">'+e.remarks+"</div>"),a+='</div><div class="meeting-footer"><img class="meeting-icon" src="'+i("f642")+'" /><span class="meeting-desc">会议预约</span></div></div>';else if("102"===e.meetingtype)switch(e.status){case 1:a='<div class="msg_content_txt">'+t.from_info.name+'参加会议[<span style="color: #1890FF;">'+e.topic+"</span>]</div>";break;case 2:a='<div class="msg_content_txt">'+t.from_info.name+'拒绝会议[<span style="color: #1890FF;">'+e.topic+"</span>]</div>";break;case 3:a='<div class="msg_content_txt">'+t.from_info.name+'待定[<span style="color: #1890FF;">'+e.topic+"</span>]</div>";break;case 4:a='<div class="msg_content_txt">'+t.from_info.name+'未被邀请[<span style="color: #1890FF;">'+e.topic+"</span>]</div>";break;case 5:a='<div class="msg_content_txt">[<span style="color: #1890FF;">'+e.topic+"</span>]会议已取消</div>";break;case 6:a='<div class="msg_content_txt">[<span style="color: #1890FF;">'+e.topic+"</span>]会议已过期</div>";break;case 7:a='<div class="msg_content_txt">'+t.from_info.name+"不在房间内</div>";break;default:break}return a},initPreviewInfo:function(t,e,i){var a={};switch(i){case"IMG":a={previewType:"IMG",previewUrl:e.file_path,previewAlt:"图片",previewWidth:e.preview_width,previewHeight:e.preview_height};break;case"VIDEO":a={previewType:"VIDEO",previewUrl:e.local_path,previewAlt:"视频",previewWidth:e.preview_width,previewHeight:e.preview_height};break;default:break}"undefined"===typeof this.previewInfo[this.chatLeftId]&&(this.previewInfo[this.chatLeftId]=[]),"undefined"===typeof this.previewRelation[this.chatLeftId]&&(this.previewRelation[this.chatLeftId]=[]),"undefined"===typeof this.previewRelation[this.chatLeftId][t]?(this.previewInfo[this.chatLeftId].push(a),this.previewRelation[this.chatLeftId][t]=this.previewInfo[this.chatLeftId].length-1):this.previewInfo[this.chatLeftId][this.previewRelation[this.chatLeftId][t]]=a},addComment:function(t){console.log("=====",t.target.classList),(t.target.classList.contains("media-content")||t.target.classList.contains("play-btn")||t.target.classList.contains("voice-duration")&&!this.showMsgVisible)&&this.preview(t),t.target.classList.contains("voice-btn")&&this.voicePlayOrStop(t),t.target.classList.contains("file")&&t.target.dataset&&t.target.dataset.src&&window.open(t.target.dataset.src),t.target.classList.contains("docmsg")&&t.target.dataset&&t.target.dataset.src&&window.open(t.target.dataset.src),(t.target.classList.contains("record")||t.target.classList.contains("content-22")&&!this.showMsgVisible)&&t.target.dataset&&t.target.dataset.index&&(this.recordMsg=this.chatInfoList[t.target.dataset.index],this.showMsgVisible=!0)},preview:function(t){var e=this;console.log(this.previewRelation),console.log(this.chatLeftId),console.log(t.target.dataset.key),this.previewVisible=!0,this.$nextTick((function(){e.$refs.previewCarousel.goTo(e.previewRelation[e.chatLeftId][t.target.dataset.key],!1)}))},voicePlayOrStop:function(t){var e=this;clearInterval(this.playAudio.interval);var i=t.target.dataset.key,a=document.getElementById("voiceAudio"+i),s=document.getElementById("voiceCircleFirst"+i),n=document.getElementById("voiceCircleSecond"+i),o=document.getElementById("voiceCircleThird"+i);if(this.playAudio.isPlay)if(this.playAudio.dom.pause(),this.playAudio.key==i)this.playAudio.isPlay=!1,this.playAudio.key=0,this.playAudio.dom="",s.setAttribute("style",""),n.setAttribute("style",""),o.setAttribute("style","");else{var c=document.getElementById("voiceCircleFirst"+this.playAudio.key);null!=c&&c.setAttribute("style","");var r=document.getElementById("voiceCircleSecond"+this.playAudio.key);null!=r&&r.setAttribute("style","");var l=document.getElementById("voiceCircleThird"+this.playAudio.key);null!=l&&l.setAttribute("style",""),this.playAudio.key=i,this.playAudio.dom=a,s.setAttribute("style","animation: voiceRun1 3s linear infinite;"),n.setAttribute("style","animation: voiceRun2 3s linear infinite;"),o.setAttribute("style","animation: voiceRun3 3s linear infinite;"),a.currentTime=0,a.play()}else this.playAudio.isPlay=!0,this.playAudio.key=i,this.playAudio.dom=a,s.setAttribute("style","animation: voiceRun1 3s linear infinite;"),n.setAttribute("style","animation: voiceRun2 3s linear infinite;"),o.setAttribute("style","animation: voiceRun3 3s linear infinite;"),a.currentTime=0,a.play();this.playAudio.isPlay&&(this.playAudio.interval=setInterval((function(){e.playAudio.dom.ended&&(document.getElementById("voiceCircleFirst"+e.playAudio.key).setAttribute("style",""),document.getElementById("voiceCircleSecond"+e.playAudio.key).setAttribute("style",""),document.getElementById("voiceCircleThird"+e.playAudio.key).setAttribute("style",""),e.playAudio.isPlay=!1,e.playAudio.key=0,e.playAudio.dom="",clearInterval(e.playAudio.interval))}),10))},videoPlay:function(t){var e=t.target,i=e.dataset.key;this.playVideo.isPlay=!0,this.playVideo.key=i,this.playVideo.dom=e},videoPause:function(t){this.playVideo.isPlay=!1,this.playVideo.key=-1,this.playVideo.dom=""},lookDetail:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){var a,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e.msgId=t,i.next=3,e.axios.post("work-msg-audit/get-voice-detail",{corp_id:localStorage.getItem("corpId"),audit_info_id:t});case 3:a=i.sent,s=a.data,0!=s.error?e.$message.error(s.error_msg):(e.voiceDetail=s.data,e.lookVisible=!0);case 6:case"end":return i.stop()}}),i)})))()},handleCancelLook:function(){this.lookVisible=!1,this.voiceDetail={}}}},E=P,R=(i("002a"),i("7518"),i("2b9e"),i("0c7c")),z=Object(R["a"])(E,a,s,!1,null,"2a4c9d64",null);e["default"]=z.exports},c633:function(t,e,i){},f6b7:function(t,e,i){}}]);