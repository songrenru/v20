(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bb0fd7c","chunk-60d33229","chunk-bfbb6746","chunk-15736ca8","chunk-18c82885","chunk-2d0b3786"],{"0c98":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVQ4T6XTvyvFURjH8dcNfwEGE2WyWFn8iEFKShkNZPIH6I4yyh9gEoNRKSkZyI+F1WJSTAbXX4DSczsn324395SzPufz7jzP8z41/zy1NvkhbGAE86l+jifs4aWaaQWsYh/LuMVHutyLSRxjHYcZUgVMYAbbHbrawhXu4l4G9OENPYUj+cQAGhmwixucFQIWMIXNDLjACt4LAf04wlwGfKE7hacRfbY7MZ/rVGhmMiB6yv2XApqZDDjFWmVtnTqJtR5gMQN2cI+TTslUX8I46hkQ9j2jqxDwjeGwsipSWDhYKNJrtrFV5bAxLIsnPlTWGmsbSy2GrU0LqyZWXx5W1jGK2VS4xCNiVo2/PlPhCH6v/QDddDIRAGtWtQAAAABJRU5ErkJggg=="},"0eea":function(e,t,a){"use strict";a("2bab")},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var s=a("6b75");function i(e){if(Array.isArray(e))return Object(s["a"])(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function o(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var n=a("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return i(e)||o(e)||Object(n["a"])(e)||r()}},"2bab":function(e,t,a){},"313a":function(e,t,a){},"5c5e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-modal",{attrs:{title:"选择企业成员",width:850,height:588,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[s("div",{staticClass:"container"},[s("div",{staticClass:"box_left"},[s("a-input-search",{staticStyle:{"margin-bottom":"8px"},attrs:{placeholder:"搜索成员"},on:{search:e.onSearch}}),s("a-tree",{attrs:{blockNode:e.blockNode,multiple:"","tree-data":e.treeData,"show-icon":"","default-expand-all":"",selectedKeys:e.enterprise_staff_arr},on:{select:e.onSelect}},[s("a-icon",{attrs:{slot:"switcherIcon",type:"down"},slot:"switcherIcon"}),s("a-icon",{attrs:{slot:"cluster",type:"cluster"},slot:"cluster"}),s("a-icon",{attrs:{slot:"user",type:"user"},slot:"user"})],1)],1),s("div",{staticClass:"box_right"},[s("span",[e._v("已选择的成员")]),""==e.enterprise_staff_arr?s("a-empty",{staticClass:"a-empty",attrs:{image:e.simpleImage}}):s("a-list",{attrs:{"item-layout":"horizontal","data-source":e.enterprise_staff_arr},scopedSlots:e._u([{key:"renderItem",fn:function(t,i){return s("a-list-item",{},[s("div",{staticClass:"list_box",staticStyle:{width:"7%"}},[s("img",{attrs:{src:a("694d")}})]),s("div",{staticClass:"list_box",staticStyle:{width:"83%"}},[e._v(e._s(t.split("-")[1]))]),s("div",{staticClass:"list_box",staticStyle:{width:"10%"},on:{click:function(t){return e.delStaff(i)}}},[s("img",{staticStyle:{"margin-right":"5px"},attrs:{src:a("0c98")}})])])}}])})],1)])])},i=[],o=(a("06f4"),a("fc25")),n=(a("4de4"),a("ac1f"),a("1276"),a("a0e0")),r=a("ca00"),l=[{}],c={data:function(){return{visible:!1,confirmLoading:!1,enterprise_staff_arr:[],simpleImage:o["a"].PRESENTED_IMAGE_SIMPLE,blockNode:!0,treeData:l,tokenName:"",sysName:""}},methods:{onSearch:function(e){var t=this;console.log(e);var a={};this.tokenName&&(a["tokenName"]=this.tokenName),a["name"]=e,this.request(n["a"].getWorker,a).then((function(e){if(""!=e){var a=t.enterprise_staff_arr.indexOf(e);a<0&&t.enterprise_staff_arr.push(e),console.log("0416",t.enterprise_staff_arr)}}))},choose:function(){var e=Object(r["i"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village",this.visible=!0,this.getTissueNav(),this.enterprise_staff_arr=[]},getTissueNav:function(){var e=this,t={};this.tokenName&&(t["tokenName"]=this.tokenName),this.request(n["a"].getTissueNav,t).then((function(t){e.treeData=t}))},onSelect:function(e,t){console.log("onSelect",e,t),this.enterprise_staff_arr=e},delStaff:function(e){var t=this;console.log("enterprise_staff_arr",this.enterprise_staff_arr),t.enterprise_staff_arr=t.removeByIndex(t.enterprise_staff_arr,e)},removeByIndex:function(e,t){return e.filter((function(e,a){return t!==a}))},handleSubmit:function(){var e=this;e.visible=!1;var t=[];this.enterprise_staff_arr.filter((function(e,a){t[a]=e.split("-")[0]})),console.log("0319",t),e.$emit("change",t)},handleCancel:function(){this.visible=!1}}},d=c,h=(a("5db73"),a("2877")),u=Object(h["a"])(d,s,i,!1,null,"438e73a2",null);t["default"]=u.exports},"5db73":function(e,t,a){"use strict";a("6352")},6352:function(e,t,a){},"694d":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVQ4T6XTvS5FQRTF8d+Ngl4ioRIK74DiKohaUHkBnwUPcKmFSHyVSgWNRnw0CpR6BVHxChqJTMxJjsk5ZyR2OXuv/6xZmd3yz2o16HswFPuv+KyarQNM4wDDUfSCFVylkCrACO5xjp0o2MAsxvFchlQBttGF9eS2XXRjOQe4xAnOEsAcDtGXAwTxE/YTwCpmMJEDdLCJAXzE4X68x/OtHCD0C8hdHG5XiUOvKsRC/IYyYPAvDgrxMZaSDI6wmELKDkbxgCnc1vzQSdxgDI/pE/ZicPOZ9TjFFxZSwAWuEaw21VoMuTcFhKRDFcHVQX7NNW1jxshP+xt2tSwRr0CjWQAAAABJRU5ErkJggg=="},"71d9":function(e,t,a){"use strict";a("313a")},"8dd6":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"分组名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{attrs:{maxLength:15,disabled:""},model:{value:e.info.label_group_name,callback:function(t){e.$set(e.info,"label_group_name",t)},expression:"info.label_group_name"}})],1)],1),a("a-form-item",{attrs:{label:"标签",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("div",[e._v("每个标签名称最多15个字符。同时新建多个标签时，请用“空格”隔开")]),a("a-col",{attrs:{span:18}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["label_name",{rules:[{required:!0,message:"请输入标签！"}]}],expression:"['label_name', {rules: [{required: true, message: '请输入标签！'}]}]"}],attrs:{placeholder:"请输入标签"},on:{change:e.text_change}})],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)},i=[],o=a("53ca"),n=a("a0e0"),r=a("ca00"),l={data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:""},id:0,label_group_id:0,info:{},tokenName:"",sysName:""}},mounted:function(){},methods:{text_change:function(e){},add:function(e){var t=Object(r["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",this.title="添加标签",this.visible=!0,this.label_group_id=e,this.getLabelGroupInfo(),this.detail={label_group_id:e,name:""},this.checkedKeys=[]},edit:function(e){var t=Object(r["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",console.log("erererererer",e),this.visible=!0,this.id=e,this.getEditInfo(),this.id>0?this.title="编辑":this.title="添加",console.log(this.title)},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,a){t?e.confirmLoading=!1:(a.label_group_id=e.label_group_id,e.tokenName&&(a["tokenName"]=e.tokenName),e.request(n["a"].addLabel,a).then((function(t){e.$message.success("添加成功,重复标签名已过滤"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.$parent.getLabel(),e.confirmLoading=!1,e.$emit("ok",a)}),1500)})).catch((function(t){e.confirmLoading=!1})),console.log("values",a))}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},getLabelGroupInfo:function(){var e=this,t={label_group_id:this.label_group_id};this.tokenName&&(t["tokenName"]=this.tokenName),this.request(n["a"].getLabelGroupInfo,t).then((function(t){console.log(t),"object"==Object(o["a"])(t.info)?e.info=t.info:"object"==Object(o["a"])(t)&&(e.info=t)}))},getEditInfo:function(){var e=this,t={id:this.id};this.tokenName&&(t["tokenName"]=this.tokenName),this.request(n["a"].getCodeGroupInfo,t).then((function(t){console.log(t),e.detail={id:0,name:""},"object"==Object(o["a"])(t.info)&&(e.detail=t.info,e.pid=t.info.pid)}))}}},c=l,d=(a("71d9"),a("2877")),h=Object(d["a"])(c,s,i,!1,null,null,null);t["default"]=h.exports},c16f:function(e,t,a){},c727:function(e,t,a){},cc8e:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"package-list ant-pro-page-header-wrap-children-content",staticStyle:{margin:"24px 0 0","background-color":"whitesmoke"}},[a("div",{staticClass:"right",staticStyle:{float:"right",width:"100%",overflow:"auto"}},[a("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",{attrs:{label:"消息名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["message_name",{initialValue:e.message_name,rules:[{required:!0,message:"请输入消息名称！"}]}],expression:"['message_name', {initialValue:message_name,rules: [{required: true, message: '请输入消息名称！'}]}]"}],attrs:{placeholder:"请输入消息名称！"}}),a("span",{staticStyle:{color:"red"}},[e._v("(一旦创建，不可修改)")])],1),a("a-form-item",{attrs:{label:"群发类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{on:{change:e.onChange},model:{value:e.send_type,callback:function(t){e.send_type=t},expression:"send_type"}},[a("a-radio",{attrs:{value:1}},[e._v(" 业主 ")]),a("a-radio",{attrs:{value:2}},[e._v(" 业主群 ")]),a("a-radio",{attrs:{value:3}},[e._v(" 企业成员 "),a("a-button",{attrs:{disabled:e.is_select},on:{click:function(t){return e.$refs.chooseEnterpriseStaffModal.choose("send_type")}}},[e._v("选择")])],1)],1),""!=e.send_type_choose_staff?a("span",[e._v("已选择"+e._s(e.send_type_choose_staff.length)+"名成员，0个部门")]):e._e(),a("span",{staticStyle:{color:"red"}},[e._v("(一旦创建，不可修改)")])],1),a("a-form-item",{style:{display:e.is_show_custom_owner},attrs:{label:e.custom_owner_title,labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{on:{change:e.select_custom},model:{value:e.custom_owner,callback:function(t){e.custom_owner=t},expression:"custom_owner"}},[a("a-radio",{attrs:{value:1}},[e._v(" 全部成员 ")]),a("a-radio",{attrs:{value:2}},[a("a-button",{attrs:{disabled:e.is_select2},on:{click:function(t){return e.$refs.chooseEnterpriseStaffModal.choose("custom_owner")}}},[e._v("选择成员")])],1),""!=e.custom_owner_choose_staff?a("span",[e._v("已选择"+e._s(e.custom_owner_choose_staff.length)+"名成员，0个部门")]):e._e()],1)],1),a("a-form-item",{style:{display:e.is_show_send_custom},attrs:{label:"群发业主",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{on:{change:e.onChange3},model:{value:e.send_custom,callback:function(t){e.send_custom=t},expression:"send_custom"}},[a("a-radio",{attrs:{value:1}},[e._v(" 按条件筛选业主 ")]),a("a-radio",{attrs:{value:2}},[e._v(" 全部业主 ")])],1),a("span",[e._v("符合条件约"),a("strong",{staticStyle:{color:"red"}},[e._v(e._s(e.external_userid_arr.length))]),e._v("人")])],1),a("div",{staticStyle:{"margin-left":"13%",width:"950px",border:"1px solid lightgray","margin-bottom":"10px"},attrs:{id:"bottom"}},[a("a-form-item",{attrs:{label:"标签",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("div",{staticStyle:{height:"350px",width:"800px"},attrs:{id:"label_flex"}},[a("div",{staticStyle:{overflow:"hidden",height:"92%"}},[a("h4",{staticStyle:{margin:"1px 10px"}},[a("div",{staticClass:"label"},[a("a-checkable-tag",{staticStyle:{border:"1px solid #0a8ddf","border-radius":"5px",color:"#0a8ddf"}},[a("span",{on:{click:function(t){return e.$refs.addLabelGroupModal.add()}}},[e._v("+新建标签组")])])],1)]),e._l(e.detail,(function(t,s){return a("h4",{key:s,staticStyle:{margin:"1px 10px"}},[e._v(" "+e._s(t.label_group_name)+"： "),a("div",{staticClass:"label"},[e._l(t.label_lists,(function(t,s){return a("a-checkable-tag",{key:t.label_name,staticStyle:{border:"1px solid lightgray","border-radius":"5px"},attrs:{checked:e.selectedTags.indexOf(t.label_name)>-1},on:{change:function(a){return e.label_selected(s,t,a)}}},[e._v(" "+e._s(t.label_name)+" ")])})),1==t.type?a("a-checkable-tag",{staticStyle:{border:"1px solid #0a8ddf","border-radius":"5px",color:"#0a8ddf"}},[a("span",{on:{click:function(a){return e.$refs.addLabelModal.add(t.label_group_id)}}},[e._v("+新建标签")])]):e._e()],2)])}))],2),0==e.is_show_all?a("div",{staticStyle:{width:"100%",height:"30px","line-height":"30px","text-align":"center",cursor:"pointer"},on:{click:e.show_more}},[e._v("更多"),a("a-icon",{attrs:{type:"arrow-down"}})],1):a("div",{staticStyle:{width:"100%",height:"30px","line-height":"30px","text-align":"center",cursor:"pointer"},on:{click:e.show_more}},[e._v("收起"),a("a-icon",{attrs:{type:"arrow-up"}})],1)])])],1),a("a-form-item",{attrs:{label:"群发内容",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[3!=e.send_type?a("div",[a("div",{staticStyle:{height:"260px",width:"950px",border:"1px solid lightgray"}},[a("a-textarea",{staticStyle:{width:"900px",margin:"20px 24px"},attrs:{placeholder:"最多1000个字",rows:8},model:{value:e.mass_distribution_content_of_custom,callback:function(t){e.mass_distribution_content_of_custom=t},expression:"mass_distribution_content_of_custom"}}),e.imageName?a("div",[a("a-icon",{attrs:{type:"appstore"}}),e._v(" "+e._s(e.imageName)+" "),a("a-icon",{attrs:{type:"close"},on:{click:function(t){return e.closeImageName()}}})],1):a("a-popover",{attrs:{placement:"top",trigger:"click",visible:e.showPopover}},[a("template",{slot:"content"},[a("div",{staticClass:"popover-code-box flex_box"},[a("a-row",[a("a-col",{attrs:{span:12}},[a("div",{staticClass:"item_box"},[a("a-upload",{attrs:{action:e.upload_url,multiple:!1,"show-upload-list":!1},on:{change:e.handleImageChange}},[a("a-icon",{attrs:{type:"cloud-upload"}}),a("div",{staticClass:"text_1"},[e._v(" 上传 ")])],1)],1)]),a("a-col",{attrs:{span:12}},[a("div",{staticClass:"item_box",on:{click:function(t){return e.addLink()}}},[a("a-icon",{attrs:{type:"appstore"}}),a("div",{staticClass:"text_1"},[e._v("功能")])],1)])],1)],1)]),a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.addImgLink()}}},[a("a-icon",{attrs:{type:"plus"}}),e._v(" 添加图文/功能")],1)],2)],1)]):a("div",[a("a-radio-group",{on:{change:e.message_type_change},model:{value:e.message_type,callback:function(t){e.message_type=t},expression:"message_type"}},[a("a-radio",{attrs:{value:1}},[e._v(" 文字 ")]),a("a-radio",{attrs:{value:2}},[e._v(" 图片 ")]),a("a-radio",{attrs:{value:3}},[e._v(" 视频 ")]),a("a-radio",{attrs:{value:4}},[e._v(" 文件 ")])],1),1==e.message_type?a("div",{staticStyle:{height:"260px",width:"950px",border:"1px solid lightgray"}},[a("a-textarea",{staticStyle:{width:"900px",margin:"20px 24px"},attrs:{placeholder:"最多1000个字",rows:8},model:{value:e.mass_distribution_content_of_staff,callback:function(t){e.mass_distribution_content_of_staff=t},expression:"mass_distribution_content_of_staff"}})],1):2==e.message_type?a("div",{staticStyle:{height:"260px",width:"950px",border:"1px solid lightgray"}},[a("a-upload",{attrs:{name:"file",action:e.upload_url,"before-upload":e.beforeUpload},on:{change:e.handleChange}},[""==e.file_url?a("a-button",{staticStyle:{height:"180px",width:"850px",margin:"20px 50px",border:"lightgray 1px dashed","line-height":"180px","text-align":"center"}},[a("a-icon",{attrs:{type:"upload"}}),e._v(" 选择图片消息 ")],1):e._e(),""!=e.file_url?a("a-button",{staticStyle:{height:"180px",width:"850px",margin:"20px 50px",border:"lightgray 1px dashed","line-height":"180px","text-align":"center"}},[a("a-icon",{attrs:{type:"check"}}),e._v(" 已选择一条图片消息 "),a("a",[e._v("【修改】")])],1):e._e()],1)],1):3==e.message_type?a("div",{staticStyle:{height:"260px",width:"950px",border:"1px solid lightgray"}},[a("a-upload",{attrs:{name:"file",action:e.upload_file_video,"before-upload":e.beforeUploadVideo},on:{change:e.handleChange}},[""==e.file_url?a("a-button",{staticStyle:{height:"180px",width:"850px",margin:"20px 50px",border:"lightgray 1px dashed","line-height":"180px","text-align":"center"}},[a("a-icon",{attrs:{type:"upload"}}),e._v(" 选择视频消息 ")],1):e._e(),""!=e.file_url?a("a-button",{staticStyle:{height:"180px",width:"850px",margin:"20px 50px",border:"lightgray 1px dashed","line-height":"180px","text-align":"center"}},[a("a-icon",{attrs:{type:"check"}}),e._v(" 已选择一条视频消息 "),a("a",[e._v("【修改】")])],1):e._e()],1)],1):4==e.message_type?a("div",{staticStyle:{height:"260px",width:"950px",border:"1px solid lightgray"}},[a("a-upload",{attrs:{name:"file",action:e.upload_file_url,"before-upload":e.beforeUploadFile},on:{change:e.handleChange}},[""==e.file_url?a("a-button",{staticStyle:{height:"180px",width:"850px",margin:"20px 50px",border:"lightgray 1px dashed","line-height":"180px","text-align":"center"}},[a("a-icon",{attrs:{type:"upload"}}),e._v(" 选择文件消息 ")],1):e._e(),""!=e.file_url?a("a-button",{staticStyle:{height:"180px",width:"850px",margin:"20px 50px",border:"lightgray 1px dashed","line-height":"180px","text-align":"center"}},[a("a-icon",{attrs:{type:"check"}}),e._v(" 已选择一条文件消息 "),a("a",[e._v("【修改】")])],1):e._e()],1)],1):e._e()],1)]),a("a-form-item",{attrs:{label:"群发时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{on:{change:e.send_date},model:{value:e.send_time,callback:function(t){e.send_time=t},expression:"send_time"}},[a("a-radio",{attrs:{value:1}},[e._v(" 立即发送 ")]),a("a-radio",{attrs:{value:2}},[e._v(" 指定时间 ")])],1)],1),a("a-form-item",{style:{display:e.is_show},attrs:{label:"发送时间",value:e.message_send_time,labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-date-picker",{attrs:{mode:e.mode1,"show-time":""},on:{openChange:e.onChangeSendTime,panelChange:e.handlePanelChange,change:e.handleTimeChange}})],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:3}}},[a("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v(" "+e._s(e.button_tijiao)+" ")]),a("span",{staticStyle:{"margin-left":"5px"}},[e._v(e._s(e.notice))])],1)],1)],1),a("choose-enterprise-staff",{ref:"chooseEnterpriseStaffModal",on:{change:e.change_enterprise_staff}}),a("choose-function-info",{ref:"createModalChooseFunction",attrs:{height:800,width:1200},on:{ok:e.handleLinkOk}}),a("add-label",{ref:"addLabelModal"}),a("add-label-group",{ref:"addLabelGroupModal"})],1)},i=[],o=a("2909"),n=(a("99af"),a("4de4"),a("b0c0"),a("a0e0")),r=a("5c5e"),l=a("8dd6"),c=a("cd81"),d=a("f189"),h=a("ca00"),u={components:{chooseEnterpriseStaff:r["default"],addLabel:l["default"],chooseFunctionInfo:d["default"],addLabelGroup:c["default"]},name:"addQywxMessage",inject:["reload"],data:function(){return{mode1:"time",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),labelCol:{xs:{span:20},sm:{span:3}},wrapperCol:{xs:{span:15},sm:{span:15}},detail:[],send_interval:1,send_time:1,is_show:"none",custom_owner:1,custom_owner_choose_staff:[],external_userid_arr:[],enterprise_staff:[],add_time:[],sex:3,send_custom:1,message_type:1,is_select:!0,is_select2:!0,send_type:1,send_type_choose_staff:[],selectedTags:[],is_show_send_custom:"block",is_show_custom_owner:"block",is_show_all:!1,custom_owner_title:"业主归属",people_count:0,message_name:"",rangeConfig:{rules:[{type:"array",required:!1,message:"Please select time!"}]},mass_distribution_content_of_custom:"",mass_distribution_content_of_staff:"",message_send_time:1,upload_url:"/v20/public/index.php/"+n["a"].uploadFile,upload_file_url:"/v20/public/index.php/"+n["a"].uploadFiles,upload_file_video:"/v20/public/index.php/"+n["a"].uploadVideo,file_url:"",imageName:"",showPopover:!1,pic_link:[],notice:"需要员工确认发送，确认后，才会将群发内容推送给员工对应的业主",button_tijiao:"通知员工发送",tokenName:"",sysName:""}},mounted:function(){var e=Object(h["i"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village",this.getLabel(),this.get_external_user()},methods:{getLabel:function(){var e=this,t={};this.tokenName&&(t["tokenName"]=this.tokenName),this.request(n["a"].getQywxLabelList,t).then((function(t){e.detail=t,console.log("dsf",t)}))},label_selected:function(e,t,a){console.log(e,t,a);var s=this.selectedTags,i=a?[].concat(Object(o["a"])(s),[t.label_name]):s.filter((function(e){return e!==t.label_name}));console.log("You are interested in: ",i),this.selectedTags=i,console.log(this.selectedTags),this.get_external_user()},show_more:function(){var e=document.getElementById("label_flex");console.log(e),e.style.height="auto",0==this.is_show_all?this.is_show_all=!0:(this.is_show_all=!1,e.style.height="350px")},handleSubmit:function(){var e=this;if(this.form.validateFields((function(t,a){t||(e.message_name=a.message_name)})),2==this.custom_owner&&""==this.enterprise_staff&&(1==this.send_type||2==this.send_type))return this.$message.error("请选择业主/群归属"),!1;if(3==this.send_type&&""==this.enterprise_staff)return this.$message.error("请选择企业成员"),!1;if(1==this.send_time)var t=1;else t=this.message_send_time;if(2==this.send_time&&1==t)return this.$message.error("请选择发送时间"),!1;if(1==this.send_type&&""==this.external_userid_arr)return this.$message.error("请选择群发业主"),!1;if(1==this.send_type||2==this.send_type)var a=this.mass_distribution_content_of_custom;else a=this.mass_distribution_content_of_staff;return""==this.message_name?(this.$message.error("请输入消息名称"),!1):a.length>1e3?(this.$message.error("内容不能超过1000字"),!1):this.message_name.length>20?(this.$message.error("消息名称不能大于20字符"),!1):void this.request(n["a"].addQywxMessage,{send_type:this.send_type,external_userid:this.external_userid_arr,sender:this.enterprise_staff,message_name:this.message_name,send_status:3,send_time:this.send_time,message_send_time:this.message_send_time,custom_owner:this.custom_owner,content_txt:a,file_url:this.file_url,pic_link:this.pic_link,message_type:this.message_type,tokenName:this.tokenName}).then((function(t){1==e.send_type||2==e.send_type?e.$message.success("需要员工确认发送，确认后，才会将群发内容推送给员工对应的业主"):e.$message.success("将直接发送给对应的企业成员"),e.reload()}))},handleCancel:function(){this.visible=!1,this.confirmLoading=!1},onChange:function(e){console.log("radio checked",e.target.value),this.mass_distribution_content_of_custom="",this.mass_distribution_content_of_staff="",this.custom_owner_choose_staff=[],this.send_type_choose_staff=[],this.file_url="",this.imageName="",this.pic_link=[],this.enterprise_staff=[],3==this.send_type?(this.is_select=!1,this.notice="将直接发送给对应的企业成员",this.button_tijiao="直接发送"):(this.is_select=!0,this.notice="需要员工确认发送，确认后，才会将群发内容推送给员工对应的业主",this.button_tijiao="通知员工发送");var t=document.getElementById("bottom");1==this.send_type?(t.style.display="block",this.is_show_send_custom="block"):(t.style.display="none",this.is_show_send_custom="none"),3==this.send_type?(this.is_show_custom_owner="none",this.external_userid_arr=[]):2==this.send_type?(this.is_show_custom_owner="block",this.custom_owner_title="群归属",this.external_userid_arr=[]):(this.is_show_custom_owner="block",this.custom_owner_title="业主归属",this.get_external_user())},message_type_change:function(){this.file_url="",this.imageName="",this.mass_distribution_content_of_staff=""},select_custom:function(e){this.custom_owner_choose_staff=[],this.send_type_choose_staff=[],this.enterprise_staff=[],2==this.custom_owner?this.is_select2=!1:this.is_select2=!0,this.get_external_user()},onChange3:function(e){console.log("radio checked",e.target.value);var t=document.getElementById("bottom");this.radio_value3=e.target.value,1==this.radio_value3?t.style.display="block":t.style.display="none"},onChangeSex:function(){this.get_external_user()},send_date:function(e){console.log("radio checked",e.target.value),this.send_time=e.target.value,1==this.send_time?this.is_show="none":this.is_show="block"},onChangeFollowTime:function(e,t){console.log(e,t),this.add_time=t},onChangeAddTime:function(e,t){console.log(e,t),this.add_time=t,this.get_external_user()},onChangeChatTime:function(e,t){console.log(e,t)},onChangeSendTime:function(e){console.log("df",e),e&&(this.mode1="time")},handlePanelChange:function(e,t){this.mode1=t,console.log("sdf",this.mode1)},handleTimeChange:function(e,t){console.log("sdf",t),this.message_send_time=t},change_enterprise_staff:function(e){this.enterprise_staff=e,3==this.send_type?(this.send_type_choose_staff=e,this.custom_owner_choose_staff=[]):(this.send_type_choose_staff=[],this.custom_owner_choose_staff=e,this.get_external_user())},get_external_user:function(){var e=this;this.request(n["a"].getQywxContactUser,{wid:this.enterprise_staff,tags:this.selectedTags,custom_owner:this.custom_owner,tokenName:this.tokenName}).then((function(t){if(""!=t){var a=[];t.filter((function(e,t){a[t]=e["ExternalUserID"]})),e.external_userid_arr=a,console.log(e.external_userid_arr)}else e.external_userid_arr=[]}))},handleChange:function(e){if("uploading"!==e.file.status&&console.log(e.file,e.fileList),console.log("123123123",e.file),e.file&&e.file.response){var t=e.file.response;1e3===t.status?(this.file_url=t.data.url,console.log("sdf",this.file_url),this.$message.success("上传成功")):this.$message.error(t.msg)}},beforeUpload:function(e){var t=["image/jpeg","image/png","image/jpg"],a=t.indexOf(e.type);a<0&&this.$message.error("只支持JPEG,PNG,JPG格式的图片");var s=e.size/1024/1024<2;return s||this.$message.error("上传图片最大支持2MB!"),a&&s},beforeUploadFile:function(e){var t=e.size/1024/1024<20;return t||this.$message.error("上传图片最大支持20MB!"),t},beforeUploadVideo:function(e){var t=e.size/1024/1024<10;return t||this.$message.error("上传视频最大支持10MB!"),t},closeImageName:function(){this.imageName="",this.pic_link=[],this.file_url=""},handleImageChange:function(e){if("done"===e.file.status&&e.file&&e.file.response){var t=e.file.response;console.log("0323",t),1e3===t.status?(this.file_url=t.data.url,this.imageName=t.data.name,this.$message.success("上传成功")):this.$message.error(t.msg)}},addImgLink:function(){this.showPopover?this.showPopover=!1:this.showPopover=!0},addLink:function(){this.$refs.createModalChooseFunction.chooseInfo(),this.showPopover=!1},handleLinkOk:function(e){console.log("record",e),this.imageName=e.title,this.pic_link=e}}},_=u,m=(a("e1bc"),a("2877")),f=Object(m["a"])(_,s,i,!1,null,"29d439e2",null);t["default"]=f.exports},cd81:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"分组名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-col",{attrs:{span:18}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["label_group_name",{initialValue:e.detail.name,rules:[{required:!0,message:"请输入分组名称！"}]}],expression:"['label_group_name', {initialValue:detail.name,rules: [{required: true, message: '请输入分组名称！'}]}]"}],attrs:{placeholder:"请输入分组名称（分组名称不得超过15个字）",maxLength:15},on:{change:e.text_change}})],1),a("a-col",{attrs:{span:6}})],1)],1)],1)],1)},i=[],o=a("53ca"),n=a("a0e0"),r=a("ca00"),l={name:"addLabelGroup",data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:""},id:0,pid:0,tokenName:"",sysName:""}},mounted:function(){},methods:{text_change:function(e){},add:function(e){var t=Object(r["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",this.title="添加",this.visible=!0,this.id="0",this.pid=e,this.detail={id:0,name:""},this.checkedKeys=[]},edit:function(e){var t=Object(r["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",console.log("erererererer",e),this.visible=!0,this.id=e,this.getEditInfo(),this.id>0?this.title="编辑":this.title="添加",console.log(this.title)},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,a){t?e.confirmLoading=!1:(a.id=e.id,a.pid=e.pid,e.tokenName&&(a["tokenName"]=e.tokenName),e.request(n["a"].addLabelGroup,a).then((function(t){e.detail.id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",a),e.$parent.getLabel()}),1500)})).catch((function(t){e.confirmLoading=!1})),console.log("values",a))}))},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},getEditInfo:function(){var e=this,t={id:this.id};this.tokenName&&(t["tokenName"]=this.tokenName),this.request(n["a"].getCodeGroupInfo,t).then((function(t){console.log(t),e.detail={id:0,name:""},"object"==Object(o["a"])(t.info)&&(e.detail=t.info,e.pid=t.info.pid)}))}}},c=l,d=(a("da9d"),a("2877")),h=Object(d["a"])(c,s,i,!1,null,null,null);t["default"]=h.exports},da9d:function(e,t,a){"use strict";a("c16f")},e1bc:function(e,t,a){"use strict";a("c727")},f189:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,footer:null,maskClosable:!1,confirmLoading:e.confirmLoading},on:{cancel:e.handleCancel}},[a("div",{attrs:{id:"components-table-demo-size"}},[a("a-table",{attrs:{columns:e.columns,"data-source":e.contentList,size:"small",pagination:e.pagination},on:{change:e.tableChange},scopedSlots:e._u([{key:"linkContent",fn:function(t,s){return a("span",{staticClass:"table-operation"},[a("a",{attrs:{href:s.content,target:"_blank"}},[e._v("访问链接")])])}},{key:"operation",fn:function(t,s){return a("span",{staticClass:"table-operation"},[a("a",{attrs:{slot:"action"},on:{click:function(t){return e.handleOk(s)}},slot:"action"},[e._v("选择")])])}}])})],1)])},i=[],o=a("a0e0"),n=a("ca00"),r=[{title:"标题",dataIndex:"title"},{title:"操作",key:"content",scopedSlots:{customRender:"linkContent"}},{title:"所属分组",dataIndex:"name"},{title:"操作",key:"operation",scopedSlots:{customRender:"operation"}}],l={name:"chooseFunctionInfo",data:function(){return{contentList:[],columns:r,title:"选择功能",visible:!1,confirmLoading:!1,page:1,pagination:{pageSize:10,total:10},tokenName:"",sysName:""}},methods:{chooseInfo:function(){this.title="选择功能",this.visible=!0;var e=Object(n["i"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village",this.getContentList()},handleCancel:function(){this.visible=!1},handleOk:function(e){console.log("record",e),this.$emit("ok",e),this.visible=!1},tableChange:function(e){e.current&&e.current>0&&(this.page=e.current,this.getContentList())},getContentList:function(){var e=this;this.loading=!0;var t={};t["page"]=this.page,t["type"]=4,this.tokenName&&(t["tokenName"]=this.tokenName),this.request(o["a"].getContentList,t).then((function(t){e.contentList=t.list,console.log("queryParam",t),t.list&&t.list.length>0&&(e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10),e.loading=!1}))}}},c=l,d=(a("0eea"),a("2877")),h=Object(d["a"])(c,s,i,!1,null,null,null);t["default"]=h.exports}}]);