(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bc701d6","chunk-40cff944"],{4414:function(t,a,e){},9855:function(t,a,e){"use strict";e("4414")},a817:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-modal",{attrs:{title:t.title,width:888,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[e("div",{staticStyle:{color:"rgb(255, 86, 45)",margin:"10px 0px 20px 8px"},attrs:{"data-v-a21a6482":""}},[t._v(" 更换自建应用后，之前所配置的自建应用页面需要前往【"),e("a",{attrs:{"data-v-a21a6482":"",target:"_blank",href:"https://work.weixin.qq.com/wework_admin/loginpage_wx"}},[t._v("企业微信后台")]),t._v("】重新配置。 ")]),e("div",{staticClass:"agent-box"},[e("a-row",{attrs:{gutter:24}},t._l(t.list,(function(a,i){return e("a-col",{key:i,staticClass:"gutter-row",attrs:{span:8}},[e("div",{staticClass:"agent-box-div",class:t.choose_id==a.id?"active":"",on:{click:function(e){return t.choose(a)}}},[e("a-row",{attrs:{gutter:24}},[e("a-col",{staticClass:"gutter-row img-box",attrs:{span:6}},[e("img",{staticStyle:{width:"50px"},attrs:{src:a.square_logo_url}})]),e("a-col",{staticClass:"gutter-row txt-box",attrs:{span:16}},[e("div",{staticClass:"agent-title"},[t._v(t._s(a.name))]),e("div",{staticClass:"agent-desc"},[t._v(t._s(a.description))])])],1)],1)])})),1)],1)])},s=[],n=e("a0e0"),o=e("ca00"),l={data:function(){return{title:"替换应用",tokenName:"",sysName:"",choose_id:0,visible:!1,confirmLoading:!1,list:[],choose_info:{}}},methods:{text_change:function(t){},replaceAgent:function(t){this.title="替换应用",this.visible=!0,this.choose_id=t;var a=Object(o["i"])(location.hash);a&&(this.tokenName=a+"_access_token"),this.getAgentList()},handleSubmit:function(){this.visible=!1,this.$emit("ok",this.choose_info)},handleCancel:function(){this.visible=!1},getAgentList:function(){var t=this,a={};this.tokenName&&(a["tokenName"]=this.tokenName),this.request(n["a"].getAgentList,a).then((function(a){console.log("获取应用",a),t.list=a.list}))},choose:function(t){this.choose_id=t.id,this.choose_info=t}}},r=l,c=(e("9855"),e("0c7c")),d=Object(c["a"])(r,i,s,!1,null,null,null);a["default"]=d.exports},d67f:function(t,a,e){"use strict";e("f05d")},f05d:function(t,a,e){},f6ac:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{"padding-bottom":"10px"}},[e("a-page-header",{staticClass:"content-p",attrs:{title:"聊天侧边栏"}}),e("a-alert",{staticStyle:{margin:"10px 2px 0 0"},attrs:{message:"",type:"info"}},[e("p",{attrs:{slot:"description"},slot:"description"},[t._v(" 可配置【内容引擎】应用页面到聊天侧边栏，方便成员在外部会话中查看相关的内容（支持多种消息格式，包括文本，图片，视频，文件以及H5）并使用，提高客户服务效率。 ")])]),e("div",{staticClass:"content-f"},[e("a-page-header",{staticClass:"use-title",attrs:{title:"第一步：设置企业微信侧边栏应用"}}),t.agent_info&&t.agent_info.id?e("div",{staticClass:"agent-box"},[e("a-row",{attrs:{gutter:24}},[e("a-col",{staticClass:"gutter-row",attrs:{span:6}},[e("div",{staticClass:"agent-box-div",on:{click:function(a){return t.addAgentBox(t.agent_info.id,t.agent_info.is_secret,t.agent_info.agentid)}}},[e("a-row",{attrs:{gutter:16}},[e("a-col",{staticClass:"gutter-row",attrs:{span:6}},[e("img",{staticStyle:{width:"50px"},attrs:{src:t.agent_info.square_logo_url}})]),e("a-col",{staticClass:"gutter-row",attrs:{span:16}},[e("div",{staticClass:"agent-title"},[t._v(t._s(t.agent_info.name))]),e("div",{staticClass:"agent-desc"},[t._v(t._s(t.agent_info.description))])])],1)],1)]),e("a-col",{staticClass:"gutter-row",attrs:{span:6}},[e("div",{staticClass:"agent-box-div",on:{click:function(a){return t.$refs.createModal.replaceAgent(t.agent_info.id)}}},[e("div",{staticStyle:{"text-align":"center","font-size":"16px","line-height":"50px"}},[t._v(" 替换 ")])])])],1)],1):e("div",{staticClass:"agent-box"},[e("div",{staticStyle:{padding:"0 0 5px"}},[e("a-alert",{attrs:{message:"请先添加自建应用，系统才可使用。",type:"warning"}})],1),e("a-row",{attrs:{gutter:24}},[e("a-col",{staticClass:"gutter-row",attrs:{span:6}},[e("div",{staticClass:"agent-box-div",on:{click:function(a){return t.addAgentBox()}}},[e("div",{staticStyle:{"text-align":"center","font-size":"25px","line-height":"50px"}},[e("a-icon",{attrs:{type:"plus"}})],1)])])],1)],1)],1),e("div",{staticClass:"content-f"},[e("a-page-header",{staticClass:"use-title",attrs:{title:"第二步：设置聊天侧边栏应用页面"}}),e("div",{staticClass:"content-msg"},[e("div",[t._v(" 请至企业微信官方后台”客户联系-聊天工具-聊天侧边栏管理”选择对应的自建应用后，添加【内容引擎】应用页面，并将地址"),e("strong",[t._v(t._s(t.content_url))]),t._v("设置为该应用主页。 ")]),e("a",{attrs:{target:"_blank",href:t.qyWeChat}},[e("a-button",{staticClass:"add-goods",staticStyle:{"margin-top":"20px"},attrs:{type:"primary"}},[t._v("前往企业微信后台")])],1)])],1),e("div",{staticClass:"content-f"},[e("a-page-header",{staticClass:"use-title",attrs:{title:"第三步：设置应用可信域名"}}),e("div",{staticClass:"upload-div"},[e("div",[t._v(" 在应用设置页，将 "+t._s(t.site_url)+" 设置为可信域名，并下载校验文件保存到电脑本地后，在此处上传。"),e("a",{attrs:{target:"_blank",href:t.domain_name_img}},[t._v("查看示例图")])]),e("div",[e("div",{staticStyle:{"padding-top":"10px"}},[e("a-upload",{attrs:{accept:"txt",multiple:!1,"show-upload-list":!1,name:"file",action:t.upload_url,"before-upload":t.beforeUpload},on:{change:t.handleChange}},[e("a-button",{staticClass:"txt-but"},[e("a-icon",{attrs:{type:"upload"}}),t._v(" 点击上传 ")],1)],1)],1),e("div",{staticStyle:{"font-size":"12px",color:"rgb(153, 153, 153)"}},[t._v(" 请上传txt格式的校验文件，用于完成域名归属验证。否则无法正常使用聊天侧边栏。 ")])])])],1),e("a-modal",{attrs:{title:"添加自建应用",visible:t.visibleAgent},on:{ok:t.handleOk,cancel:t.handleCancel}},[e("a-alert",{attrs:{message:"",type:"warning"}},[e("div",{attrs:{slot:"description"},slot:"description"},[t._v(" 请先添加自建应用，系统才可使用。"),e("br"),t._v(" 请登录企业微信官方后台，在应用管理-应用-自建应用，找到您已建好应用的AgentId和Secret，并复制到下面的输入框。提交后将该应用添加到本系统里。 ")])]),e("a-form",{staticClass:"addAgentBoxForm",staticStyle:{"margin-top":"10px"},attrs:{form:t.form,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[e("a-form-item",{attrs:{label:"应用id",required:!0}},[e("a-input",{attrs:{placeholder:"请输入应用AgentId"},model:{value:t.agent_data.agentid,callback:function(a){t.$set(t.agent_data,"agentid",a)},expression:"agent_data.agentid"}})],1),e("a-form-item",{attrs:{label:"应用Secret",required:!0}},[e("a-input",{attrs:{placeholder:"请输入应用Secret"},model:{value:t.agent_data.secret,callback:function(a){t.$set(t.agent_data,"secret",a)},expression:"agent_data.secret"}})],1)],1)],1),e("agent-list",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOks}})],1)},s=[],n=e("53ca"),o=e("a0e0"),l=e("ca00"),r=e("a817"),c={name:"chatSidebar",components:{agentList:r["default"]},data:function(){return{upload_url:"/v20/public/index.php/"+o["a"].uploadFileTxt,site_url:"",content_url:"",ico_url:"",qyWeChat:"",domain_name_img:"",tokenName:"",sysName:"",agent_info:{},visibleAgent:!1,form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:19}},agent_data:{},agent_id:0}},created:function(){var t=Object(l["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",this.getEditInfo()},methods:{handleOks:function(t){console.log("value",t),t.is_secret?(this.visibleAgent=!1,this.agent_data={},t.agentid&&(this.agent_data.agentid=t.agentid),this.agent_id=t.id,this.agent_info.id=t.id,console.log("handleOksAgentInfo",this.agent_info),this.handleOk()):(this.visibleAgent=!0,this.agent_data={},t.agentid&&(this.agent_data.agentid=t.agentid),this.agent_id=t.id,this.agent_data.id=t.id)},addAgentBox:function(t,a,e){t&&!a?(this.visibleAgent=!0,this.agent_data={},e&&(this.agent_data.agentid=e),this.agent_id=t):t||(this.agent_data={},this.visibleAgent=!0)},handleOk:function(){var t=this,a={};return this.tokenName&&(a["tokenName"]=this.tokenName),this.agent_data.agentid?(a["agentid"]=this.agent_data.agentid,this.agent_data.agentid||this.agent_data.secret?(this.agent_data.secret&&(a["secret"]=this.agent_data.secret),this.agent_data.id?a["id"]=this.agent_data.id:this.agent_info.id?a["id"]=this.agent_info.id:this.agent_id&&(a["id"]=this.agent_id),console.log("param",a),void this.request(o["a"].addAgent,a).then((function(a){t.$message.success("操作成功!"),t.visibleAgent=!1,t.getEditInfo()}))):(this.$message.warning("请输入应用Secret!"),!1)):(this.$message.warning("请输入应用AgentId!"),!1)},handleCancel:function(){this.visibleAgent=!1},getEditInfo:function(){var t=this,a={};this.tokenName&&(a["tokenName"]=this.tokenName),this.request(o["a"].setColumn,a).then((function(a){console.log("rere",a),"object"==Object(n["a"])(a.info)&&(t.site_url=a.info.site_url,t.content_url=a.info.content_url,t.ico_url=a.info.ico_url,t.qyWeChat=a.info.qyWeChat,t.domain_name_img=a.info.domain_name_img,t.agent_info=a.agent_info,a.agent_info&&a.agent_info.id&&(t.agent_data.id=a.agent_info.id))}))},handleChange:function(t){if("uploading"!==t.file.status&&console.log(t.file,t.fileList),console.log("123123123",t.file),t.file&&t.file.response){var a=t.file.response;if(1e3===a.status){var e=a.data.url;if(console.log("url",e),e){var i={url:e};this.tokenName&&(i["tokenName"]=this.tokenName),this.request(o["a"].butSet,i).then((function(t){}))}this.$message.success("上传成功")}else this.$message.error(a.msg)}},beforeUpload:function(t){var a=t.size/1024/1024<20;return a||this.$message.error("上传图片最大支持20MB!"),a}}},d=c,g=(e("d67f"),e("0c7c")),h=Object(g["a"])(d,i,s,!1,null,null,null);a["default"]=h.exports}}]);