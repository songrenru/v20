(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2604ae7a","chunk-a092a0f6"],{"04d7":function(t,e,a){},"0cf5":function(t,e,a){},"6c35":function(t,e,a){"use strict";a("04d7")},9855:function(t,e,a){"use strict";a("0cf5")},a817:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:888,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("div",{staticStyle:{color:"rgb(255, 86, 45)",margin:"10px 0px 20px 8px"},attrs:{"data-v-a21a6482":""}},[t._v(" 更换自建应用后，之前所配置的自建应用页面需要前往【"),a("a",{attrs:{"data-v-a21a6482":"",target:"_blank",href:"https://work.weixin.qq.com/wework_admin/loginpage_wx"}},[t._v("企业微信后台")]),t._v("】重新配置。 ")]),a("div",{staticClass:"agent-box"},[a("a-row",{attrs:{gutter:24}},t._l(t.list,(function(e,i){return a("a-col",{key:i,staticClass:"gutter-row",attrs:{span:8}},[a("div",{staticClass:"agent-box-div",class:t.choose_id==e.id?"active":"",on:{click:function(a){return t.choose(e)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{staticClass:"gutter-row img-box",attrs:{span:6}},[a("img",{staticStyle:{width:"50px"},attrs:{src:e.square_logo_url}})]),a("a-col",{staticClass:"gutter-row txt-box",attrs:{span:16}},[a("div",{staticClass:"agent-title"},[t._v(t._s(e.name))]),a("div",{staticClass:"agent-desc"},[t._v(t._s(e.description))])])],1)],1)])})),1)],1)])},s=[],n=a("a0e0"),o=a("ca00"),r={data:function(){return{title:"替换应用",tokenName:"",sysName:"",choose_id:0,visible:!1,confirmLoading:!1,list:[],choose_info:{}}},methods:{text_change:function(t){},replaceAgent:function(t){this.title="替换应用",this.visible=!0,this.choose_id=t;var e=Object(o["j"])(location.hash);e&&(this.tokenName=e+"_access_token"),this.getAgentList()},handleSubmit:function(){this.visible=!1,this.$emit("ok",this.choose_info)},handleCancel:function(){this.visible=!1},getAgentList:function(){var t=this,e={};this.tokenName&&(e["tokenName"]=this.tokenName),this.request(n["a"].getAgentList,e).then((function(e){console.log("获取应用",e),t.list=e.list}))},choose:function(t){this.choose_id=t.id,this.choose_info=t}}},l=r,c=(a("9855"),a("2877")),d=Object(c["a"])(l,i,s,!1,null,null,null);e["default"]=d.exports},f6ac:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-bottom":"10px"}},[a("a-page-header",{staticClass:"content-p",attrs:{title:"聊天侧边栏"}}),a("a-alert",{staticStyle:{margin:"10px 2px 0 0"},attrs:{message:"",type:"info"}},[a("p",{attrs:{slot:"description"},slot:"description"},[t._v(" 可配置【内容引擎】应用页面到聊天侧边栏，方便成员在外部会话中查看相关的内容（支持多种消息格式，包括文本，图片，视频，文件以及H5）并使用，提高客户服务效率。 ")])]),a("div",{staticClass:"content-f"},[a("a-page-header",{staticClass:"use-title",attrs:{title:"第一步：设置企业微信侧边栏应用"}}),t.agent_info&&t.agent_info.id?a("div",{staticClass:"agent-box"},[a("a-row",{attrs:{gutter:24}},[a("a-col",{staticClass:"gutter-row",attrs:{span:6}},[a("div",{staticClass:"agent-box-div",on:{click:function(e){return t.$refs.createModal.replaceAgent(t.agent_info.id)}}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:6}},[a("img",{staticStyle:{width:"50px"},attrs:{src:t.agent_info.square_logo_url}})]),a("a-col",{staticClass:"gutter-row",attrs:{span:16}},[a("div",{staticClass:"agent-title"},[t._v(t._s(t.agent_info.name))]),a("div",{staticClass:"agent-desc"},[t._v(t._s(t.agent_info.description))])])],1)],1)]),a("a-col",{staticClass:"gutter-row",attrs:{span:6}},[a("div",{staticClass:"agent-box-div",on:{click:function(e){return t.$refs.createModal.replaceAgent(t.agent_info.id)}}},[a("div",{staticStyle:{"text-align":"center","font-size":"16px","line-height":"50px"}},[t._v(" 替换 ")])])])],1)],1):a("div",{staticClass:"agent-box"},[a("div",{staticStyle:{padding:"0 0 5px"}},[a("a-alert",{attrs:{message:"请选择授权三方应用，系统才可使用。",type:"warning"}})],1),a("a-row",{attrs:{gutter:24}},[a("a-col",{staticClass:"gutter-row",attrs:{span:6}},[a("div",{staticClass:"agent-box-div",on:{click:function(e){return t.$refs.createModal.replaceAgent(t.agent_info.id)}}},[a("div",{staticStyle:{"text-align":"center","font-size":"25px","line-height":"50px"}},[a("a-icon",{attrs:{type:"plus"}})],1)])])],1)],1)],1),a("div",{staticClass:"content-f"},[a("a-page-header",{staticClass:"use-title",attrs:{title:"第二步：设置聊天侧边栏应用页面"}}),a("div",{staticClass:"content-msg"},[t.content_url?a("div",[t._v(" 1. 【内容引擎】：请至企业微信官方后台”应用管理-应用-三方”选择对应的授权三方应用后，点击进入【配置到聊天工具栏】-配置，点击【配置页面】填写页面名称，选择【自定义】，并将地址 【"),a("strong",{staticStyle:{color:"#2681f3"}},[t._v(t._s(t.content_url))]),t._v("】 复制上去，【配置到】选择【客户联系聊天工具栏】。 ")]):t._e(),t.user_url?a("div",{staticStyle:{"margin-top":"15px"}},[t._v(" 2. 【业主画像】：请至企业微信官方后台”应用管理-应用-三方”选择对应的授权三方应用后，点击进入【配置到聊天工具栏】-配置，点击【配置页面】填写页面名称，选择【自定义】，并将地址 【"),a("strong",{staticStyle:{color:"#2681f3"}},[t._v(t._s(t.user_url))]),t._v("】 复制上去，【配置到】选择【客户联系聊天工具栏】。 ")]):t._e(),a("a",{attrs:{target:"_blank",href:t.qyWeChat}},[a("a-button",{staticClass:"add-goods",staticStyle:{"margin-top":"20px"},attrs:{type:"primary"}},[t._v("前往企业微信后台")])],1)])],1),a("a-modal",{attrs:{title:"添加自建应用",visible:t.visibleAgent},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-alert",{attrs:{message:"",type:"warning"}},[a("div",{attrs:{slot:"description"},slot:"description"},[t._v(" 请先添加自建应用，系统才可使用。"),a("br"),t._v(" 请登录企业微信官方后台，在应用管理-应用-自建应用，找到您已建好应用的AgentId和Secret，并复制到下面的输入框。提交后将该应用添加到本系统里。 ")])]),a("a-form",{staticClass:"addAgentBoxForm",staticStyle:{"margin-top":"10px"},attrs:{form:t.form,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("a-form-item",{attrs:{label:"应用id",required:!0}},[a("a-input",{attrs:{placeholder:"请输入应用AgentId"},model:{value:t.agent_data.agentid,callback:function(e){t.$set(t.agent_data,"agentid",e)},expression:"agent_data.agentid"}})],1),a("a-form-item",{attrs:{label:"应用Secret",required:!0}},[a("a-input",{attrs:{placeholder:"请输入应用Secret"},model:{value:t.agent_data.secret,callback:function(e){t.$set(t.agent_data,"secret",e)},expression:"agent_data.secret"}})],1)],1)],1),a("agent-list",{ref:"createModal",attrs:{height:800,width:1200},on:{ok:t.handleOks}})],1)},s=[],n=a("53ca"),o=a("a0e0"),r=a("ca00"),l=a("a817"),c={name:"chatSidebar",components:{agentList:l["default"]},data:function(){return{upload_url:"/v20/public/index.php/"+o["a"].uploadFileTxt,site_url:"",content_url:"",user_url:"",ico_url:"",qyWeChat:"",domain_name_img:"",tokenName:"",sysName:"",agent_info:{},visibleAgent:!1,form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:19}},agent_data:{},agent_id:0}},created:function(){var t=Object(r["j"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",this.getEditInfo()},methods:{handleOks:function(t){console.log("value",t),this.visibleAgent=!1,this.agent_data={},t.agentid&&(this.agent_data.agentid=t.agentid),this.agent_id=t.id,this.agent_info.id=t.id,console.log("handleOksAgentInfo",this.agent_info),this.handleOk()},addAgentBox:function(t,e,a){this.agent_data={},this.visibleAgent=!0},handleOk:function(){var t=this,e={};return this.tokenName&&(e["tokenName"]=this.tokenName),this.agent_data.agentid?(e["agentid"]=this.agent_data.agentid,this.agent_data.agentid||this.agent_data.secret?(this.agent_data.secret&&(e["secret"]=this.agent_data.secret),this.agent_data.id?e["id"]=this.agent_data.id:this.agent_info.id?e["id"]=this.agent_info.id:this.agent_id&&(e["id"]=this.agent_id),console.log("param",e),void this.request(o["a"].addAgent,e).then((function(e){t.$message.success("操作成功!"),t.visibleAgent=!1,t.getEditInfo()}))):(this.$message.warning("请输入应用Secret!"),!1)):(this.$message.warning("请输入应用AgentId!"),!1)},handleCancel:function(){this.visibleAgent=!1},getEditInfo:function(){var t=this,e={};this.tokenName&&(e["tokenName"]=this.tokenName),this.request(o["a"].setColumn,e).then((function(e){console.log("rere",e),"object"==Object(n["a"])(e.info)&&(t.site_url=e.info.site_url,t.content_url=e.info.content_url,t.user_url=e.info.user_url,t.ico_url=e.info.ico_url,t.qyWeChat=e.info.qyWeChat,t.domain_name_img=e.info.domain_name_img,t.agent_info=e.agent_info,e.agent_info&&e.agent_info.id&&(t.agent_data.id=e.agent_info.id))}))},handleChange:function(t){if("uploading"!==t.file.status&&console.log(t.file,t.fileList),console.log("123123123",t.file),t.file&&t.file.response){var e=t.file.response;if(1e3===e.status){var a=e.data.url;if(console.log("url",a),a){var i={url:a};this.tokenName&&(i["tokenName"]=this.tokenName),this.request(o["a"].butSet,i).then((function(t){}))}this.$message.success("上传成功")}else this.$message.error(e.msg)}},beforeUpload:function(t){var e=t.size/1024/1024<20;return e||this.$message.error("上传图片最大支持20MB!"),e}}},d=c,g=(a("6c35"),a("2877")),u=Object(g["a"])(d,i,s,!1,null,null,null);e["default"]=u.exports}}]);