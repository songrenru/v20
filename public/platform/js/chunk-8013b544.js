(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8013b544","chunk-b19bda22"],{"0c98":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVQ4T6XTvyvFURjH8dcNfwEGE2WyWFn8iEFKShkNZPIH6I4yyh9gEoNRKSkZyI+F1WJSTAbXX4DSczsn324395SzPufz7jzP8z41/zy1NvkhbGAE86l+jifs4aWaaQWsYh/LuMVHutyLSRxjHYcZUgVMYAbbHbrawhXu4l4G9OENPYUj+cQAGhmwixucFQIWMIXNDLjACt4LAf04wlwGfKE7hacRfbY7MZ/rVGhmMiB6yv2XApqZDDjFWmVtnTqJtR5gMQN2cI+TTslUX8I46hkQ9j2jqxDwjeGwsipSWDhYKNJrtrFV5bAxLIsnPlTWGmsbSy2GrU0LqyZWXx5W1jGK2VS4xCNiVo2/PlPhCH6v/QDddDIRAGtWtQAAAABJRU5ErkJggg=="},"0cca":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:"选择企业成员",width:850,height:588,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("div",{staticClass:"container"},[i("div",{staticClass:"box_left"},[t.isSearch?i("a-input-search",{staticStyle:{"margin-bottom":"8px"},attrs:{placeholder:"搜索成员"},on:{search:t.onSearch}}):t._e(),i("a-tree",{attrs:{blockNode:t.blockNode,multiple:"","tree-data":t.treeData,"show-icon":"","default-expand-all":"",selectedKeys:t.enterprise_staff_arr},on:{select:t.onSelect}},[i("a-icon",{attrs:{slot:"switcherIcon",type:"down"},slot:"switcherIcon"}),i("a-icon",{attrs:{slot:"cluster",type:"cluster"},slot:"cluster"}),i("a-icon",{attrs:{slot:"user",type:"user"},slot:"user"})],1)],1),i("div",{staticClass:"box_right"},[i("span",[t._v("已选择的成员")]),""==t.enterprise_staff_arr?i("a-empty",{staticClass:"a-empty",attrs:{image:t.simpleImage}}):i("a-list",{attrs:{"item-layout":"horizontal","data-source":t.enterprise_staff_arr},scopedSlots:t._u([{key:"renderItem",fn:function(e,s){return i("a-list-item",{},[i("div",{staticClass:"list_box",staticStyle:{width:"7%"}},[i("img",{attrs:{src:a("694d")}})]),i("div",{staticClass:"list_box",staticStyle:{width:"83%"}},[t._v(t._s(e.split("-")[1]))]),i("div",{staticClass:"list_box",staticStyle:{width:"10%"},on:{click:function(e){return t.delStaff(s)}}},[i("img",{staticStyle:{"margin-right":"5px"},attrs:{src:a("0c98")}})])])}}])})],1)])])},s=[],o=(a("06f4"),a("fc25")),n=(a("b0c0"),a("4de4"),a("d3b7"),a("a0e0")),r=a("ca00"),c=[{}],l={data:function(){return{visible:!1,confirmLoading:!1,enterprise_staff_arr:[],simpleImage:o["a"].PRESENTED_IMAGE_SIMPLE,blockNode:!0,treeData:c,tokenName:"",sysName:"",isSearch:!1,isSearchStaff:0}},methods:{onSearch:function(t){var e=this;console.log(t);var a={};this.tokenName&&(a["tokenName"]=this.tokenName),a["name"]=t,this.request(n["a"].getWorker,a).then((function(t){if(""!=t){var a=e.enterprise_staff_arr.indexOf(t);a<0&&e.enterprise_staff_arr.push(t),console.log("0416",e.enterprise_staff_arr)}}))},choose:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.isSearch=!1;var e=Object(r["i"])(location.hash);e?(this.tokenName=e+"_access_token",this.sysName=e):this.sysName="village",this.isSearchStaff=t,this.visible=!0,this.getTissueNav(),this.enterprise_staff_arr=[]},chooseSearch:function(){this.isSearch=!0,this.isSearchStaff=0;var t=Object(r["i"])(location.hash);t?(this.tokenName=t+"_access_token",this.sysName=t):this.sysName="village",this.visible=!0,this.getTissueNav(),this.enterprise_staff_arr=[]},getTissueNav:function(){var t=this,e={};this.tokenName&&(e["tokenName"]=this.tokenName),e["type_"]=1,this.request(n["a"].getTissueNav,e).then((function(e){t.treeData=e}))},onSelect:function(t,e){if(console.log(t),1==this.isSearchStaff&&t.length>1)return this.$message.warning("仅可选择一位成员"),!1;this.enterprise_staff_arr=t},delStaff:function(t){var e=this;console.log("enterprise_staff_arr",this.enterprise_staff_arr),e.enterprise_staff_arr=e.removeByIndex(e.enterprise_staff_arr,t)},removeByIndex:function(t,e){return t.filter((function(t,a){return e!==a}))},handleSubmit:function(){var t=this;t.visible=!1,t.$emit("change",this.enterprise_staff_arr)},handleCancel:function(){this.visible=!1}}},f=l,d=(a("649c"),a("0c7c")),h=Object(d["a"])(f,i,s,!1,null,"729f65e3",null);e["default"]=h.exports},2273:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABXklEQVQ4T6XTMUjXQRjG8Y9Ti6OD4CIhhCA6hAlJQiGJiwhCoFMNDYEuYdgmbYXiouDgoJNCIIRLKFKgGFQ6GEIEES5Jg6NLm7xwB8cl/oduud/d+96X933e59fkP1fTFe/b8QyduJ3iR/iOZZyWb2rAYyzhF3bxNSX3YhA3MYm1DCkB97CHHYzhoqquGZt4iAHsRzwDWvAD65hqIMsiJnAL5xkwhwe4i78F4G36flTc3cAnfMCLDNhOfYd45fqYDver+xAz9BjKgD94WYqTHqyk/WkFCLFfozUDfmMaG1XibDq/qu7HMY+2DNjCTzyvElfT3GvAAjowkgFvMJxELMd3iLNILMAxzhDxPWYyINx3goMQpsEYQ/B+dEV1pZFCmCg5nBh6lOMMZowv+g4nPsmC11YON75LfX/B51RNH+4gKh3NLiydWFYdrpxBN3pS4BjfEFqdX/czNWj/3/AlpjBAEaEIpmUAAAAASUVORK5CYII="},"46d2":function(t,e,a){},"53d7":function(t,e,a){"use strict";a("b53b")},"649c":function(t,e,a){"use strict";a("46d2")},"694d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVQ4T6XTvS5FQRTF8d+Ngl4ioRIK74DiKohaUHkBnwUPcKmFSHyVSgWNRnw0CpR6BVHxChqJTMxJjsk5ZyR2OXuv/6xZmd3yz2o16HswFPuv+KyarQNM4wDDUfSCFVylkCrACO5xjp0o2MAsxvFchlQBttGF9eS2XXRjOQe4xAnOEsAcDtGXAwTxE/YTwCpmMJEDdLCJAXzE4X68x/OtHCD0C8hdHG5XiUOvKsRC/IYyYPAvDgrxMZaSDI6wmELKDkbxgCnc1vzQSdxgDI/pE/ZicPOZ9TjFFxZSwAWuEaw21VoMuTcFhKRDFcHVQX7NNW1jxshP+xt2tSwRr0CjWQAAAABJRU5ErkJggg=="},ad06:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",{attrs:{label:"员工触发",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[0==t.post_data.id?i("a-col",{attrs:{span:18}},[i("a-button",{staticClass:"add-goods ",staticStyle:{float:"left"},attrs:{type:"btn"},on:{click:function(e){return t.$refs.chooseEnterpriseStaffModal.choose("1")}}},[t._v("选择部门成员")]),i("a-tooltip",{staticStyle:{display:"block",padding:"8px"},attrs:{placement:"top"}},[i("template",{slot:"title"},[i("span",[t._v("监控员工及其业主敏感词内容")])]),i("img",{attrs:{src:a("2273")}})],2)],1):i("a-col",{attrs:{span:18}},[t._v(" "+t._s(t.post_data.staff_name)+" ")]),i("a-col",{attrs:{span:18}},t._l(t.staff_txt,(function(e,a){return i("div",{key:a,staticClass:"label_"},[i("a-tag",{attrs:{color:"#1890ff"}},[t._v(" "+t._s(e.value)+" ")])],1)})),0),i("a-col",{attrs:{span:6}})],1),i("a-form-item",{attrs:{label:"提醒通知成员",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["post_data.choice_remind",{initialValue:t.post_data.choice_remind}],expression:"['post_data.choice_remind', {initialValue:post_data.choice_remind}]"}],on:{change:t.onChange}},[i("a-radio",{attrs:{value:1,disabled:t.is_select1}},[t._v(" 对应部门负责人（按照企业微信组织架构） ")]),i("a-radio",{staticClass:"label_2",attrs:{value:2,disabled:t.is_select1},on:{click:function(e){return t.$refs.appointEnterpriseStaffModal.choose("0")}}},[t._v(" 指定成员 ")]),i("a-tooltip",{attrs:{placement:"top"}},[i("template",{slot:"title"},[i("span",[t._v("员工与员工的业主触发敏感词，系统会立即给相应的成员发消息提醒，提醒该员工或是该员工的业主可能出现违规行为。【不对群起效，只监控单聊】")])]),i("img",{attrs:{src:a("2273")}})],2)],1)],1),t.post_data.id>0?i("a-form-item",{attrs:{label:"状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["post_data.status",{initialValue:t.post_data.status}],expression:"['post_data.status', {initialValue:post_data.status}]"}],on:{change:t.onChange}},[i("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),i("a-radio",{attrs:{value:0}},[t._v(" 关闭 ")])],1)],1):t._e(),i("a-form-item",{attrs:{label:"触发敏感词",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-col",{attrs:{span:18}},[i("a-select",{staticStyle:{width:"200px"},attrs:{mode:"multiple",placeholder:"请选择",disabled:t.disabled},on:{change:t.choiceKeys},model:{value:t.post_data.sensitive_info,callback:function(e){t.$set(t.post_data,"sensitive_info",e)},expression:"post_data.sensitive_info"}},t._l(t.sensitive_info,(function(e,a){return i("a-select-option",{key:a,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),i("a-col",{attrs:{span:6}}),i("chooseBranch",{ref:"chooseEnterpriseStaffModal",on:{change:t.change_enterprise_staff}}),i("chooseBranch",{ref:"appointEnterpriseStaffModal",on:{change:t.appoint_staff}})],1)],1)],1)],1)},s=[],o=a("53ca"),n=(a("4de4"),a("d3b7"),a("a0e0")),r=a("0cca"),c={components:{chooseBranch:r["default"]},data:function(){return{title:"新建",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),id:0,fid:0,diasabledInput:!0,staff_txt:[],post_data:{id:0,staff_name:"",sensitive_info:[],staff_id:"",choice_remind:1,name:""},sensitive_info:[],is_select1:!1,disabled:!1}},mounted:function(){},methods:{choiceKeys:function(t){this.sensitive_id=t},change_enterprise_staff:function(t){var e=this,a=[];this.staff_id=[],this.staff_txt=[],t.filter((function(t,i){e.staff_id[i]=t.split("-")[0]+"-"+t.split("-")[1],a[i]=t.split("-")[1],e.staff_txt.push({key:t.split("-")[0],value:t.split("-")[1]})}))},appoint_staff:function(t){var e=this;this.appoint_staff_id=[],t.filter((function(t,a){e.appoint_staff_id[a]=t.split("-")[0]}))},onChange:function(t){},add:function(){var t=this;this.title="设置违规员工",this.visible=!0,this.id="0",this.checkedKeys=[],this.staff_txt=[],this.is_select1=!1,this.disabled=!1,this.post_data={id:0,staff_name:"",sort:0,sensitive_info:[],des:""},this.post_data.choice_remind=1,this.request(n["a"].choiceSensitive).then((function(e){t.sensitive_info=e}))},edit:function(t){var e=this;console.log("erererererer",t),this.visible=!0,this.id=t,this.getEditInfo(),this.is_select1=!0,this.staff_txt=[],this.disabled=!0,this.request(n["a"].choiceSensitive).then((function(t){e.sensitive_info=t})).catch((function(t){e.sensitive_info=[]})),this.id>0?this.title="编辑":this.title="添加"},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0;var a=this.staff_id,i=this.sensitive_id,s=this.appoint_staff_id;e((function(e,o){if(o["post_data"]["staff_id"]=a,o["post_data"]["sensitive_id"]=i,o["post_data"]["appoint_staff_id"]=s,e)t.confirmLoading=!1;else{o["post_data"]["id"]=t.id,o["post_data"]["fid"]=t.fid;var r=n["a"].addViolationStaff;t.post_data.id>0&&(r=n["a"].subViolationStaff),t.request(r,o.post_data).then((function(e){t.post_data.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,console.log(123),t.$emit("ok")}),1500),console.log(345)})).catch((function(e){t.confirmLoading=!1}))}}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},getEditInfo:function(){var t=this;this.request(n["a"].editViolationStaff,{id:this.id}).then((function(e){t.post_data={id:e.id,staff_name:e.staff_name},t.post_data.status=e.status,t.post_data.choice_remind=e.remind_type,t.post_data.sensitive_info=e.sensitive_info,"object"==Object(o["a"])(e.info)&&(t.post_data=e.info)}))}}},l=c,f=(a("53d7"),a("0c7c")),d=Object(f["a"])(l,i,s,!1,null,"569f3af2",null);e["default"]=d.exports},b53b:function(t,e,a){}}]);