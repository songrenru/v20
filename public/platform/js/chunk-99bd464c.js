(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99bd464c","chunk-7210155d","chunk-2d0b3786"],{"0812":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"activity-edit"},[t.form&&Object.keys(t.form).length?e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.title))]),e("div",{staticClass:"content"},[e("div",{staticClass:"mdoel-title"},[t._v("基本信息")]),e("a-row",{staticClass:"row",attrs:{gutter:12}},[e("a-col",{staticClass:"left-title",attrs:{span:t.labelWidth}},[e("span",{staticClass:"required"},[t._v("*")]),t._v("活动名称: ")]),e("a-col",{staticClass:"right-cont",attrs:{span:t.contentWidth-1.5*t.labelWidth}},[e("a-input",{attrs:{placeholder:"请输入活动名称"},model:{value:t.form.name,callback:function(s){t.$set(t.form,"name",s)},expression:"form.name"}})],1)],1),e("a-row",{staticClass:"row",attrs:{gutter:12}},[e("a-col",{staticClass:"left-title",attrs:{span:t.labelWidth}},[e("span",{staticClass:"required"},[t._v("*")]),t._v(" 展示页面: ")]),e("a-col",{staticClass:"right-cont",attrs:{span:t.contentWidth}},t._l(t.showPageList,(function(s,i){return e("div",{key:i,staticClass:"page-item"},[e("span",{staticClass:"page-item-title"},[t._v(t._s(s.business_name)+"：")]),e("a-checkbox-group",{attrs:{options:s.pages},model:{value:s.selected,callback:function(e){t.$set(s,"selected",e)},expression:"item.selected"}})],1)})),0)],1),e("div",{staticClass:"mdoel-title"},[t._v("样式设置")]),e("div",{staticClass:"alert-style"},[e("div",{staticClass:"left"},[e("a-row",{staticClass:"row",attrs:{gutter:12}},[e("a-col",{staticClass:"left-title",attrs:{span:2*t.labelWidth}},[e("span",{staticClass:"required"},[t._v("*")]),t._v(" 上传悬浮图标: ")]),e("a-col",{staticClass:"right-cont",staticStyle:{display:"flex","align-items":"center"},attrs:{span:t.contentWidth-t.labelWidth}},[e("a-upload",{staticStyle:{width:"150px"},attrs:{"list-type":"picture-card","show-upload-list":!1,name:"img",multiple:!1,action:t.uploadUrl},on:{change:function(s){return t.handleUploadChange(s,"hover_pic")}}},[t.form.hover_pic?e("img",{staticClass:"show-img",attrs:{src:t.form.hover_pic}}):e("div",[e("a-icon",{attrs:{type:"plus"}}),e("div",[t._v("点击上传")])],1)]),e("a",{on:{click:function(s){return t.onlinePicMade("hover_pic")}}},[t._v("在线制图")])],1)],1),e("a-row",{staticClass:"row",attrs:{gutter:12}},[e("a-col",{staticClass:"left-title",attrs:{span:2*t.labelWidth}},[e("span",{staticClass:"required"},[t._v("*")]),t._v(" 上传弹层图片: ")]),e("a-col",{staticClass:"right-cont",attrs:{span:t.contentWidth-t.labelWidth}},[e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("a-upload",{staticStyle:{width:"150px"},attrs:{"list-type":"picture-card","show-upload-list":!1,name:"img",multiple:!1,action:t.uploadUrl},on:{change:function(s){return t.handleUploadChange(s,"alert_pic")}}},[t.form.alert_pic?e("img",{staticClass:"show-img",attrs:{src:t.form.alert_pic}}):e("div",[e("a-icon",{attrs:{type:"plus"}}),e("div",[t._v("点击上传")])],1)]),e("a",{on:{click:function(s){return t.onlinePicMade("alert_pic")}}},[t._v("在线制图")])],1),e("div",{staticClass:"help",staticStyle:{"margin-top":"0px"}},[t._v("建议尺寸600*800px，PNG、JPG格式，图片小于2M")])])],1),e("a-row",{staticClass:"row",attrs:{gutter:12}},[e("a-col",{staticClass:"left-title",attrs:{span:2*t.labelWidth}},[t._v(" 企业微信成员二维码: ")]),e("a-col",{staticClass:"right-cont",attrs:{span:t.contentWidth-t.labelWidth}},[e("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择企业微信成员二维码"},model:{value:t.form.qiye_uid,callback:function(s){t.$set(t.form,"qiye_uid",s)},expression:"form.qiye_uid"}},t._l(t.userList,(function(s){return e("a-select-option",{key:s.id,attrs:{value:Number(s.id)}},[t._v(t._s(s.name))])})),1)],1)],1),e("a-row",{staticClass:"row",attrs:{gutter:12}},[e("a-col",{staticClass:"left-title",attrs:{span:2*t.labelWidth}},[t._v(" 成员二维码装修: ")]),e("a-col",{staticClass:"right-cont",attrs:{span:t.contentWidth-t.labelWidth}},[e("a-select",{staticStyle:{width:"100%"},model:{value:t.form.qrcode_style,callback:function(s){t.$set(t.form,"qrcode_style",s)},expression:"form.qrcode_style"}},[e("a-select-option",{attrs:{value:0}},[t._v("无需装修")]),e("a-select-option",{attrs:{value:1}},[t._v("上传模板")])],1),e("div",{staticClass:"help"},[e("div",[t._v("(1)无需装修：将直接使用二维码自带的模板样式")]),e("div",[t._v(" (2)上传模板：需要自行设计好模板后上传，尺寸为750*1334（注意：模板左下角需距离页面边缘间距20像素预留100*100像素的空白位置，用于放置企业微信成员二维码） ")])])],1)],1),1==t.form.qrcode_style?e("a-row",{staticClass:"row",attrs:{gutter:12}},[e("a-col",{staticClass:"left-title",attrs:{span:2*t.labelWidth}},[e("span",{staticClass:"required"},[t._v("*")]),t._v("上传模板: ")]),e("a-col",{staticClass:"right-cont",attrs:{span:t.contentWidth-t.labelWidth}},[e("a-upload",{attrs:{"list-type":"picture-card","show-upload-list":!1,name:"img",multiple:!1,action:t.uploadUrl},on:{change:function(s){return t.handleUploadChange(s,"style_tpl_pic")}}},[t.form.style_tpl_pic?e("img",{staticClass:"show-img",attrs:{src:t.form.style_tpl_pic}}):e("div",[e("a-icon",{attrs:{type:"plus"}}),e("div",[t._v("点击上传")])],1)])],1)],1):t._e()],1),e("div",{staticClass:"right"},[e("div",{staticClass:"box"},[e("div",{staticClass:"phone-page"},[e("div",{staticClass:"header"},[t._v("店铺详情")]),1==t.showPage?e("div",{staticClass:"alert-page"},[e("img",{staticClass:"alert-img",attrs:{src:t.form.alert_pic}}),e("a-icon",{staticClass:"close-img",attrs:{type:"close-circle"}})],1):t._e(),2==t.showPage?e("div",{staticClass:"hover-page"},[e("img",{staticClass:"hover-img",attrs:{src:t.form.hover_pic}}),e("a-icon",{staticClass:"close-img",attrs:{theme:"filled",type:"close-circle"}})],1):t._e()]),e("div",{staticClass:"page-name"},[t._v(" "+t._s(1==t.showPage?"弹层图片":"悬浮图标")),e("a",{staticStyle:{"margin-left":"10px"},on:{click:t.switchAlertImg}},[t._v("切换")])])])])]),e("a-row",{staticClass:"row",attrs:{gutter:12}},[e("a-col",{staticClass:"left-title",attrs:{span:t.labelWidth}},[t._v(" 加群后自动回复文案: ")]),e("a-col",{staticClass:"right-cont",attrs:{span:t.contentWidth-1.5*t.labelWidth}},[e("a-textarea",{attrs:{placeholder:"请输入加群后自动回复文案","auto-size":{minRows:4,maxRows:8}},model:{value:t.form.reply_txt,callback:function(s){t.$set(t.form,"reply_txt",s)},expression:"form.reply_txt"}}),e("div",{staticClass:"help"},[t._v("用户成功添加企业微信成员为微信好友后，会自动发送欢迎语与企业微信群二维码给到用户")])],1)],1),e("a-row",{staticClass:"row",attrs:{gutter:12}},[e("a-col",{staticClass:"left-title",attrs:{span:t.labelWidth}},[t._v(" 上传企业微信群二维码: ")]),e("a-col",{staticClass:"right-cont",attrs:{span:t.contentWidth}},[e("a-upload",{staticStyle:{"margin-top":"10px"},attrs:{"list-type":"picture-card","show-upload-list":!1,name:"img",multiple:!1,action:t.uploadUrl},on:{change:function(s){return t.handleUploadChange(s,"reply_pic")}}},[t.form.reply_pic?e("img",{staticClass:"show-img",attrs:{src:t.form.reply_pic}}):e("div",[e("a-icon",{attrs:{type:"plus"}}),e("div",[t._v("点击上传")])],1)]),e("div",{staticClass:"help",staticStyle:{margin:"0"}},[t._v("加群后自动回复文案和企业微信群二维码需要填写一项")])],1)],1),e("a-row",{staticClass:"row",attrs:{gutter:12}},[e("a-col",{staticClass:"left-title",attrs:{span:t.labelWidth}},[t._v("指定使用区域: ")]),e("a-col",{staticClass:"right-cont",attrs:{span:t.contentWidth}},[e("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关","default-checked":""},model:{value:t.form.is_point_area,callback:function(s){t.$set(t.form,"is_point_area",s)},expression:"form.is_point_area"}}),e("div",{staticClass:"help"},[t._v("关闭后展示所有区域")])],1)],1),e("a-row",{staticClass:"row",attrs:{gutter:12}},[e("a-col",{staticClass:"left-title",attrs:{span:t.labelWidth}},[t._v("指定店铺: ")]),e("a-col",{staticClass:"right-cont",attrs:{span:t.contentWidth}},[e("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关","default-checked":""},model:{value:t.form.is_point_store,callback:function(s){t.$set(t.form,"is_point_store",s)},expression:"form.is_point_store"}}),e("div",{staticClass:"help"},[t._v("关闭后展示所有店铺")])],1)],1),e("a-row",{staticClass:"row",attrs:{gutter:12}},[e("a-col",{staticClass:"left-title",attrs:{span:t.labelWidth}},[t._v("活动状态: ")]),e("a-col",{staticClass:"right-cont",attrs:{span:t.contentWidth}},[e("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关","default-checked":""},model:{value:t.form.status,callback:function(s){t.$set(t.form,"status",s)},expression:"form.status"}})],1)],1),e("a-row",{staticClass:"row",staticStyle:{"margin-top":"40px"},attrs:{gutter:12}},[e("a-col",{staticClass:"left-title",attrs:{span:t.labelWidth}}),e("a-col",{staticClass:"right-cont",attrs:{span:t.contentWidth}},[e("a-button",{staticStyle:{width:"150px"},attrs:{type:"primary",size:"large"},on:{click:t.onSubmit}},[t._v("提 交")])],1)],1)],1)]):t._e(),e("pic-online",{ref:"picOnline",on:{finish:t.getOnlinePic}})],1)},a=[],l=e("2909"),c=e("5530"),r=(e("d81d"),e("b0c0"),e("a9e3"),e("99af"),e("ac1f"),e("5319"),e("26cc")),o=e("5866"),n={components:{PicOnline:o["default"]},name:"CommonPrivateFlowActivityEdit",inject:["reload"],data:function(){return{uploadUrl:"/v20/public/index.php/common/platform.system.config/upload",title:"添加活动",labelWidth:4,contentWidth:16,activityId:0,form:{name:"",show_page:[],hover_pic:"",alert_pic:"",qiye_uid:"",qrcode_style:0,style_tpl_pic:"",is_point_area:!1,is_point_store:!1,status:!0,reply_txt:"",reply_pic:""},showPageList:[],showPageArr:{},userList:[],showPage:1}},activated:function(){this.$route.query.id?(this.activityId=this.$route.query.id,this.title="编辑活动",this.getActivityInfo()):(this.activityId=0,this.title="添加活动",this.getShowPages(),this.getUserList())},beforeRouteLeave:function(t,s,e){this.$set(this,"form",this.$options.data().form),e()},mounted:function(){},methods:{getActivityInfo:function(){var t=this;this.request(r["a"].getActivityInfo,{id:this.activityId}).then((function(s){s.is_point_area=1==s.is_point_area,s.is_point_store=1==s.is_point_store,s.status=1==s.status,t.$set(t,"form",s),t.getShowPages(),t.getUserList()}))},getShowPages:function(){var t=this;this.request(r["a"].getShowPages).then((function(s){t.showPageList=s.map((function(s){return s.selected=[],s.pages&&s.pages.length&&(s.pages=s.pages.map((function(e){return t.activityId&&t.form.show_page&e.id&&s.selected.push(e.id),{label:e.name,value:e.id}}))),s}))}))},getUserList:function(){var t=this;this.request(r["a"].getUserList).then((function(s){s&&s.length&&(t.activityId||(t.form.qiye_uid=Number(s[0].id)),t.userList=s)}))},handleUploadChange:function(t,s){console.log(t);var e=t.file;return e.response&&1e3==e.response.status&&this.$set(this.form,s,e.response.data),e},switchAlertImg:function(){this.showPage=1==this.showPage?2:1},onSubmit:function(){var t=this,s=Object(c["a"])({},this.form);if(s.name){for(var e in s.show_page=[],this.showPageList)this.showPageList[e].selected.length&&(s.show_page=[].concat(Object(l["a"])(s.show_page),Object(l["a"])(this.showPageList[e].selected)));s.show_page.length?s.alert_pic&&s.hover_pic?1!=s.qrcode_style||s.style_tpl_pic?s.reply_txt||s.reply_pic?(s.is_point_area=s.is_point_area?1:0,s.is_point_store=s.is_point_store?1:0,s.status=s.status?1:0,this.activityId&&(s.id=this.activityId),this.request(r["a"].saveActivity,s).then((function(s){var e="添加活动成功";t.activityId&&(e="编辑活动成功"),t.reload(),t.$message.success(e),t.$router.replace("/common/platform.privateflow/activityList")}))):this.$message.error("加群后自动回复文案和企业微信群二维码请必须填写一项"):this.$message.error("请上传模板图片"):this.$message.error("请上传弹层图片和悬浮图标"):this.$message.error("请选择展示页面")}else this.$message.error("请输入活动名称")},onlinePicMade:function(t){this.$refs.picOnline.openDialog(t)},getOnlinePic:function(t){this.$set(this.form,t.type,t.url)}}},p=n,h=(e("a58b"),e("0c7c")),d=Object(h["a"])(p,i,a,!1,null,"f866405c",null);s["default"]=d.exports},"0fb7":function(t,s,e){},"26cc":function(t,s,e){"use strict";var i={getActivityList:"/common/platform.PrivateDomainFlow/activityLists",getShowPages:"/common/platform.PrivateDomainFlow/pages",getUserList:"/common/platform.Crm/users",saveActivity:"/common/platform.PrivateDomainFlow/saveActivity",delActivity:"/common/platform.PrivateDomainFlow/delActivity",getActivityInfo:"/common/platform.PrivateDomainFlow/showActivity",getAllArea:"/common/platform.area.Area/getAllArea",assignArea:"/common/platform.PrivateDomainFlow/assignArea",alertTemplates:"/common/platform.PrivateDomainFlow/alertTemplates",hoverTemplates:"/common/platform.PrivateDomainFlow/hoverTemplates",getStoreList:"/common/platform.PrivateDomainFlow/storeLists",assignStore:"/common/platform.PrivateDomainFlow/assignStore",makeupPic:"/common/platform.PrivateDomainFlow/buildAlertPic",isBind:"/common/platform.Crm/isBind",register:"/common/platform.Crm/register",getLoginUrl:"/common/platform.Crm/getLoginUrl"};s["a"]=i},2909:function(t,s,e){"use strict";e.d(s,"a",(function(){return o}));var i=e("6b75");function a(t){if(Array.isArray(t))return Object(i["a"])(t)}e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630");function l(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var c=e("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t){return a(t)||l(t)||Object(c["a"])(t)||r()}},5866:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pic-online"},[e("a-modal",{attrs:{title:"在线制图",width:"70%",destroyOnClose:""},on:{ok:t.handleOk},model:{value:t.visible,callback:function(s){t.visible=s},expression:"visible"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("a-row",{staticClass:"row",attrs:{gutter:16}},[e("a-col",{staticClass:"left-title",attrs:{span:t.labelWidth}},[t._v(" "+t._s("alert_pic"==t.type?"背景底图":"悬浮底图")+" : ")]),e("a-col",{staticClass:"right-cont",attrs:{span:t.contentWidth}},[e("div",{staticClass:"pic-con"},t._l(t.picList,(function(s,i){return e("div",{key:s.id,staticClass:"pic",class:s.selected?"active":"",style:"alert_pic"==t.type?"":"width:100px;height:100px"},[e("img",{attrs:{src:s.pic},on:{click:function(s){return t.handlePicSelected(i)}}})])})),0)])],1),"alert_pic"==t.type?e("a-row",{staticClass:"row",attrs:{gutter:16}},[e("a-col",{staticClass:"left-title",attrs:{span:t.labelWidth}},[e("span",{staticClass:"cr-red"},[t._v("*")]),t._v(" 主标题: ")]),e("a-col",{staticClass:"right-cont",attrs:{span:t.contentWidth}},[e("a-input",{attrs:{placeholder:"请输入主标题"},model:{value:t.title,callback:function(s){t.title=s},expression:"title"}})],1)],1):t._e(),"alert_pic"==t.type?e("a-row",{staticClass:"row",attrs:{gutter:16}},[e("a-col",{staticClass:"left-title",attrs:{span:t.labelWidth}},[e("span",{staticClass:"cr-red"},[t._v("*")]),t._v(" 副标题: ")]),e("a-col",{staticClass:"right-cont",attrs:{span:t.contentWidth}},[e("a-input",{attrs:{placeholder:"请输入副标题"},model:{value:t.subTitle,callback:function(s){t.subTitle=s},expression:"subTitle"}})],1)],1):t._e()],1),e("div",{staticClass:"right"},["alert_pic"==t.type?e("div",{staticClass:"show-img"},[e("img",{attrs:{src:t.selectPic}}),e("div",{staticClass:"text-cont",style:t.titleStyle},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),e("div",{staticClass:"sub-title"},[t._v(t._s(t.subTitle))])])]):e("div",{staticClass:"show-img2"},[e("img",{attrs:{src:t.selectPic}})])])])])],1)},a=[],l=(e("d81d"),e("d3b7"),e("159b"),e("26cc")),c={name:"PrivateFlowPicOnline",data:function(){return{labelWidth:4,contentWidth:16,visible:!1,type:"",alertPics:[],hoverPics:[],picList:[],title:"",subTitle:"",selectPic:"",selectPicId:"",titleStyle:""}},watch:{selectPicId:function(t){"alert_pic"==this.type&&(this.titleStyle=1==t?"top:80px":2==t?"top:280px;color: #ffffff":3==t?"top:200px;color: #ffffff":4==t?"top:160px":"")}},methods:{openDialog:function(t){this.title="",this.subTitle="",this.type=t,"alert_pic"==t&&this.getAlertPic(),"hover_pic"==t&&this.getHoverPic(),this.visible=!0},getAlertPic:function(){var t=this;this.alertPics.length?(this.picList=JSON.parse(JSON.stringify(this.alertPics)),this.selectPic=this.alertPics[0].pic,this.selectPicId=this.alertPics[0].id):this.request(l["a"].alertTemplates).then((function(s){t.alertPics=s.map((function(s,e){return s.selected=!1,0==e&&(t.selectPic=s.pic,t.selectPicId=s.id,s.selected=!0),s})),t.picList=JSON.parse(JSON.stringify(t.alertPics))}))},getHoverPic:function(){var t=this;this.hoverPics.length?(this.picList=JSON.parse(JSON.stringify(this.hoverPics)),this.selectPic=this.hoverPics[0].pic,this.selectPicId=this.hoverPics[0].id):this.request(l["a"].hoverTemplates).then((function(s){t.hoverPics=s.map((function(s,e){return s.selected=!1,0==e&&(t.selectPic=s.pic,t.selectPicId=s.id,s.selected=!0),s})),t.picList=JSON.parse(JSON.stringify(t.hoverPics))}))},handlePicSelected:function(t){var s=this;this.picList.forEach((function(e,i){e.selected=!1,i==t&&(e.selected=!0,s.selectPic=e.pic,s.selectPicId=e.id)})),this.$set(this,"picList",this.picList)},handleOk:function(){var t=this;if("alert_pic"==this.type){if(!this.title||!this.subTitle)return void this.$message.error("请输入主标题和副标题");this.request(l["a"].makeupPic,{title:this.title,sub_title:this.subTitle,tpl_id:this.selectPicId}).then((function(s){t.$emit("finish",{url:s.url,type:t.type})}))}else this.$emit("finish",{url:this.selectPic,type:this.type});this.visible=!1}}},r=c,o=(e("de0b0"),e("0c7c")),n=Object(o["a"])(r,i,a,!1,null,"3e70a0bc",null);s["default"]=n.exports},"696d":function(t,s,e){},a58b:function(t,s,e){"use strict";e("696d")},de0b0:function(t,s,e){"use strict";e("0fb7")}}]);