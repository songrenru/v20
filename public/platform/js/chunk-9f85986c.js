(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f85986c"],{"1d77":function(t,e,i){"use strict";i("5b10")},"58c8":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-drawer",{attrs:{title:t.title,width:900,visible:t.visible},on:{close:t.handleCancel}},[s("div",{staticClass:"package-list"},[s("a-card",{staticStyle:{width:"100%",height:"220px"},attrs:{bordered:!1}},[s("label",{staticClass:"ant-card-head-title",staticStyle:{"font-size":"16px","margin-left":"19px","font-weight":"550"}},[t._v("分类设置")]),s("div",{staticClass:"card-set"},[s("span",{staticClass:"ant-form-item-required"},[t._v("分类名称:")]),s("a-input",{staticStyle:{width:"45%","margin-left":"24px"},attrs:{placeholder:"请输入分类名称"},model:{value:t.group.name,callback:function(e){t.$set(t.group,"name",e)},expression:"group.name"}})],1),s("div",{staticClass:"card-set"},[s("label",[t._v("排序值:")]),s("a-input",{staticStyle:{width:"45%","margin-left":"50px"},attrs:{placeholder:"不填则默认为0"},model:{value:t.group.sort,callback:function(e){t.$set(t.group,"sort",e)},expression:"group.sort"}}),s("p",{staticStyle:{"font-size":"15px",color:"#a09d9d","margin-left":"85px","font-weight":"400","margin-top":"10px"}},[t._v("排序值越大展示越靠前")])],1),s("div",{staticClass:"card-set"},[s("span",{staticClass:"ant-form-item-required"},[t._v("状态:")]),s("a-radio-group",{staticStyle:{"margin-left":"50px"},model:{value:t.group.status,callback:function(e){t.$set(t.group,"status",e)},expression:"group.status"}},[s("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),s("a-radio",{attrs:{value:2}},[t._v(" 关闭 ")])],1)],1)]),s("a-card",{staticStyle:{width:"100%",height:"100%"},attrs:{bordered:!1}},[s("label",{staticClass:"ant-card-head-title",staticStyle:{"font-size":"16px","margin-left":"19px","font-weight":"550"}},[t._v("负责人设置"),s("p",{staticStyle:{"font-size":"15px",color:"#a09d9d",float:"right","margin-left":"10px","font-weight":"400"}},[t._v("(如不需要自动指派给工作人员不设置即可)")])]),s("div",{staticClass:"card-set"},[s("label",[t._v("类型:")]),s("a-radio-group",{staticStyle:{"margin-left":"50px"},on:{change:t.onChange},model:{value:t.group.type,callback:function(e){t.$set(t.group,"type",e)},expression:"group.type"}},[s("a-radio",{attrs:{value:1}},[t._v(" 单人 ")]),s("a-radio",{attrs:{value:2}},[t._v(" 多人 ")])],1)],1),s("div",{staticClass:"card-set"},[s("label",[t._v("负责人:")]),1==t.is_show1?s("a-button",{staticStyle:{"margin-left":"35px"},attrs:{icon:"plus"},on:{click:function(e){return t.$refs.createModals.add(t.group.type)}}},[t._v("添加")]):t._e(),2==t.is_show1?s("a-button",{staticStyle:{"margin-left":"35px"},attrs:{icon:"plus"},on:{click:function(e){return t.$refs.createModal.add(t.group.type)}}},[t._v("添加")]):t._e(),2==t.is_show1?s("a-input",{staticStyle:{width:"100px","margin-left":"10px",border:"0px"},attrs:{disabled:""},model:{value:t.usernmae,callback:function(e){t.usernmae=e},expression:"usernmae"}}):t._e(),s("a-input",{staticStyle:{width:"100px","margin-left":"10px",border:"0px"},attrs:{hidden:""},model:{value:t.group.uid,callback:function(e){t.$set(t.group,"uid",e)},expression:"group.uid"}}),s("p",{staticStyle:{"font-size":"15px",color:"#a09d9d","margin-left":"0px","font-weight":"400","margin-top":"10px"}},[t._v("负责人可跨小区选择，选择后，可负责多个小区的工单处理")])],1),t.is_show?s("div",{staticStyle:{"background-color":"#ececec",padding:"1px",width:"90%","margin-left":"20px"}},[s("a-row",{attrs:{gutter:0}},[s("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[s("a-card",{attrs:{title:"周一",bordered:!1}},[""!=t.weeklist1[0].name?s("a",{attrs:{slot:"extra"},on:{click:function(e){return t.$refs.createModals.edit(1,t.group.id,t.scheduling.id1,t.group.type)}},slot:"extra"},[s("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):t._e(),""==t.weeklist1[0].name?s("p",[t._v("--")]):t._l(t.weeklist1,(function(e,i){return s("div",{staticStyle:{"padding-left":"20px"}},[s("span",[t._v(t._s(e.time))]),s("br"),s("a-tooltip",{attrs:{trigger:["hover","focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[s("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.name1)+" ")]),s("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:e.name,placeholder:"Input a number","max-length":20}})],1)],1)}))],2)],1),s("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[s("a-card",{attrs:{title:"周二",bordered:!1}},[""!=t.weeklist2[0].name?s("a",{attrs:{slot:"extra"},on:{click:function(e){return t.$refs.createModals.edit(2,t.group.id,t.scheduling.id2,t.group.type)}},slot:"extra"},[s("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):t._e(),""==t.weeklist2[0].name?s("p",[t._v("--")]):t._l(t.weeklist2,(function(e,i){return s("div",{staticStyle:{"padding-left":"20px"}},[s("span",[t._v(t._s(e.time))]),s("br"),s("a-tooltip",{attrs:{trigger:["hover","focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[s("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.name1)+" ")]),s("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:e.name,placeholder:"Input a number","max-length":20}})],1)],1)}))],2)],1),s("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[s("a-card",{attrs:{title:"周三",bordered:!1}},[""!=t.weeklist3[0].name?s("a",{attrs:{slot:"extra"},on:{click:function(e){return t.$refs.createModals.edit(3,t.group.id,t.scheduling.id3,t.group.type)}},slot:"extra"},[s("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):t._e(),""==t.weeklist3[0].name?s("p",[t._v("--")]):t._l(t.weeklist3,(function(e,i){return s("div",{staticStyle:{"padding-left":"20px"}},[s("span",[t._v(t._s(e.time))]),s("br"),s("a-tooltip",{attrs:{trigger:["hover","focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[s("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.name1)+" ")]),s("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:e.name,placeholder:"Input a number","max-length":20}})],1)],1)}))],2)],1),s("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[s("a-card",{attrs:{title:"周四",bordered:!1}},[""!=t.weeklist4[0].name?s("a",{attrs:{slot:"extra"},on:{click:function(e){return t.$refs.createModals.edit(4,t.group.id,t.scheduling.id4,t.group.type)}},slot:"extra"},[s("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):t._e(),""==t.weeklist4[0].name?s("p",[t._v("--")]):t._l(t.weeklist4,(function(e,i){return s("div",{staticStyle:{"padding-left":"20px"}},[s("span",[t._v(t._s(e.time))]),s("br"),s("a-tooltip",{attrs:{trigger:["hover","focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[s("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.name1)+" ")]),s("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:e.name,placeholder:"Input a number","max-length":20}})],1)],1)}))],2)],1),s("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[s("a-card",{attrs:{title:"周五",bordered:!1}},[""!=t.weeklist5[0].name?s("a",{attrs:{slot:"extra"},on:{click:function(e){return t.$refs.createModals.edit(5,t.group.id,t.scheduling.id5,t.group.type)}},slot:"extra"},[s("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):t._e(),""==t.weeklist5[0].name?s("p",[t._v("--")]):t._l(t.weeklist5,(function(e,i){return s("div",{staticStyle:{"padding-left":"20px"}},[s("span",[t._v(t._s(e.time))]),s("br"),s("a-tooltip",{attrs:{trigger:["hover","focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[s("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.name1)+" ")]),s("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:e.name,placeholder:"Input a number","max-length":20}})],1)],1)}))],2)],1),s("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[s("a-card",{attrs:{title:"周六",bordered:!1}},[""!=t.weeklist6[0].name?s("a",{attrs:{slot:"extra"},on:{click:function(e){return t.$refs.createModals.edit(6,t.group.id,t.scheduling.id6,t.group.type)}},slot:"extra"},[s("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):t._e(),""==t.weeklist6[0].name?s("p",[t._v("--")]):t._l(t.weeklist6,(function(e,i){return s("div",{staticStyle:{"padding-left":"20px"}},[s("span",[t._v(t._s(e.time))]),s("br"),s("a-tooltip",{attrs:{trigger:["hover","focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[s("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.name1)+" ")]),s("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:e.name,placeholder:"Input a number","max-length":20}})],1)],1)}))],2)],1),s("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[s("a-card",{attrs:{title:"周日",bordered:!1}},[""!=t.weeklist0[0].name?s("a",{attrs:{slot:"extra"},on:{click:function(e){return t.$refs.createModals.edit(7,t.group.id,t.scheduling.id7,t.group.type)}},slot:"extra"},[s("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):t._e(),""==t.weeklist0[0].name?s("p",[t._v("--")]):t._l(t.weeklist0,(function(e,i){return s("div",{staticStyle:{"padding-left":"20px"}},[s("span",[t._v(t._s(e.time))]),s("br"),s("a-tooltip",{attrs:{trigger:["hover","focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[s("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.name1)+" ")]),s("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:e.name,placeholder:"Input a number","max-length":20}})],1)],1)}))],2)],1)],1)],1):t._e()]),s("choose-tree",{ref:"createModal",attrs:{height:800,width:1e3},on:{ok:t.handleOks}}),s("choose-scheduling",{ref:"createModals",attrs:{height:800,width:1e3},on:{ok:t.handleOk}}),s("div",{staticClass:"btn_footer"},[s("a-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"info"},on:{click:t.handleCancel}},[t._v("取消")]),s("a-button",{attrs:{type:"primary",loading:t.confirmLoading},on:{click:t.handleSubmit}},[t._v("确定")])],1)],1)])},a=[],l=(i("159b"),i("ac1f"),i("1276"),i("a0e0")),n=i("af3c"),r=i("3e09"),o=[{title:"周一",dataIndex:"cate_name",key:"cate_name"},{title:"周二",dataIndex:"sort",key:"sort"},{title:"周三",dataIndex:"cate_name",key:"cate_name"},{title:"周四",dataIndex:"sort",key:"sort"},{title:"周五",dataIndex:"cate_name",key:"cate_name"},{title:"周六",dataIndex:"sort",key:"sort"},{title:"周日",dataIndex:"cate_name",key:"cate_name"}],c={name:"newRepairCateChildInfo",components:{chooseTree:n["default"],chooseScheduling:r["default"]},data:function(){return{week_show:!0,one:"00:00~00:00",weeklist1:[{name1:"",name:"",time:""}],weeklist2:[{name1:"",name:"",time:""}],weeklist3:[{name1:"",name:"",time:""}],weeklist4:[{name1:"",name:"",time:""}],weeklist5:[{name1:"",name:"",time:""}],weeklist6:[{name1:"",name:"",time:""}],weeklist0:[{name1:"",name:"",time:""}],scheduling:{id1:[],id2:[],id3:[],id4:[],id5:[],id6:[],id7:[]},data:[],is_show:!1,is_show1:2,columns:o,title:"添加",usernmae:"",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},value:null,color:"",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),group:{id:0,uid:"",director_id:"",name:"",parent_id:0,sort:"",type:1,status:1},id:0}},methods:{add:function(t){this.scheduling={id1:[],id2:[],id3:[],id4:[],id5:[],id6:[],id7:[]},this.title="添加",this.visible=!0,this.usernmae="",this.is_show=!1,this.is_show1=2,this.week_show=!0,this.group={id:0,name:"",sort:"",type:1,uid:"",director_id:"",parent_id:t,status:1},this.weeklist1=[{name1:"",name:"",time:""}],this.weeklist2=[{name1:"",name:"",time:""}],this.weeklist3=[{name1:"",name:"",time:""}],this.weeklist4=[{name1:"",name:"",time:""}],this.weeklist5=[{name1:"",name:"",time:""}],this.weeklist6=[{name1:"",name:"",time:""}],this.weeklist0=[{name1:"",name:"",time:""}]},edit:function(t){this.week_show=!1,this.visible=!0,this.id=t,this.scheduling={id1:[],id2:[],id3:[],id4:[],id5:[],id6:[],id7:[]},this.weeklist1=[{name1:"",name:"",time:""}],this.weeklist2=[{name1:"",name:"",time:""}],this.weeklist3=[{name1:"",name:"",time:""}],this.weeklist4=[{name1:"",name:"",time:""}],this.weeklist5=[{name1:"",name:"",time:""}],this.weeklist6=[{name1:"",name:"",time:""}],this.weeklist0=[{name1:"",name:"",time:""}],this.getCateInfo(),console.log(this.id),this.id>0?this.title="编辑":this.title="添加"},getCateInfo:function(){var t=this;this.request(l["a"].getCateInfo,{id:this.id}).then((function(e){t.group=e,2==e.type?(t.is_show=!0,t.is_show1=1,t.usernmae="",t.scheduling=e.scheduling,""!=e.director_id&&e.director_id.length>0?t.request(l["a"].getDirectorLists,{id:e.director_id}).then((function(e){console.log("cateres",e);var i=0,s=0,a=0,l=0,n=0,r=0,o=0;e.forEach((function(e,c){t.week_show=!1,0==e.type?(i+=1,t.weeklist0.push(e.child),1==i&&(t.$delete(t.weeklist0,0),i+=1),console.log("weeklist0",t.weeklist0)):1==e.type?(s+=1,t.weeklist1.push(e.child),1==s&&(t.$delete(t.weeklist1,0),s+=1),console.log("weeklist1",t.weeklist1)):2==e.type?(t.weeklist2.push(e.child),a+=1,1==a&&(t.$delete(t.weeklist2,0),a+=1),console.log("weeklist2",t.weeklist2)):3==e.type?(t.weeklist3.push(e.child),l+=1,1==l&&(t.$delete(t.weeklist3,0),l+=1),console.log("weeklist3",t.weeklist3)):4==e.type?(t.weeklist4.push(e.child),n+=1,1==n&&(t.$delete(t.weeklist4,0),n+=1),console.log("weeklist4",t.weeklist4)):5==e.type?(t.weeklist5.push(e.child),r+=1,1==r&&(t.$delete(t.weeklist5,0),r+=1),console.log("weeklist5",t.weeklist5)):6==e.type&&(t.weeklist6.push(e.child),o+=1,1==o&&(t.$delete(t.weeklist6,0),o+=1),console.log("weeklist6",t.weeklist6))}))})):t.week_show=!0):(t.is_show=!1,t.is_show1=2,t.usernmae=e.usernmae),console.log("group",t.group)}))},handleSubmit:function(){var t=this;this.confirmLoading=!0,this.group.scheduling=this.scheduling;var e=l["a"].addCate;this.id>0&&(this.group.id=this.id,e=l["a"].editCate),this.request(e,this.group).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(e){t.confirmLoading=!1}))},onChange:function(t){var e=t.target.value;1==e?(this.is_show=!1,this.is_show1=2):(this.is_show=!0,this.is_show1=1,this.week_show=!0),console.log("radio checked",t.target.value),console.log("weeklist1",this.weeklist1)},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},handleOks:function(t){console.log("value",t);var e=t[0],i=e.split("-");console.log("aa",i),this.usernmae=i[1],this.group.uid=i[0]},handleOk:function(t){var e=this;console.log("value",t),""!=t&&t.length>0&&t.forEach((function(t,i){1==t.type?(e.scheduling.id1=t.id,e.weeklist1=[{name1:"",name:"",time:""}]):2==t.type?(e.scheduling.id2=t.id,e.weeklist2=[{name1:"",name:"",time:""}]):3==t.type?(e.scheduling.id3=t.id,e.weeklist3=[{name1:"",name:"",time:""}]):4==t.type?(e.scheduling.id4=t.id,e.weeklist4=[{name1:"",name:"",time:""}]):5==t.type?(e.scheduling.id5=t.id,e.weeklist5=[{name1:"",name:"",time:""}]):6==t.type?(e.scheduling.id6=t.id,e.weeklist6=[{name1:"",name:"",time:""}]):7==t.type&&(e.scheduling.id7=t.id,e.weeklist0=[{name1:"",name:"",time:""}]),e.request(l["a"].getDirectorLists,{id:t.id}).then((function(t){console.log("cateres",t);var i=0,s=0,a=0,l=0,n=0,r=0,o=0;t.forEach((function(t,c){e.week_show=!1,0==t.type?(i+=1,e.weeklist0.push(t.child),1==i&&(e.$delete(e.weeklist0,0),i+=1),console.log("weeklist0",e.weeklist0)):1==t.type?(s+=1,e.weeklist1.push(t.child),1==s&&(e.$delete(e.weeklist1,0),s+=1),console.log("weeklist1",e.weeklist1)):2==t.type?(e.weeklist2.push(t.child),a+=1,1==a&&(e.$delete(e.weeklist2,0),a+=1),console.log("weeklist2",e.weeklist2)):3==t.type?(e.weeklist3.push(t.child),l+=1,1==l&&(e.$delete(e.weeklist3,0),l+=1),console.log("weeklist3",e.weeklist3)):4==t.type?(e.weeklist4.push(t.child),n+=1,1==n&&(e.$delete(e.weeklist4,0),n+=1),console.log("weeklist4",e.weeklist4)):5==t.type?(e.weeklist5.push(t.child),r+=1,1==r&&(e.$delete(e.weeklist5,0),r+=1),console.log("weeklist5",e.weeklist5)):6==t.type&&(e.weeklist6.push(t.child),o+=1,1==o&&(e.$delete(e.weeklist6,0),o+=1),console.log("weeklist6",e.weeklist6))}))}))})),console.log("scheduling",this.scheduling)}}},d=c,p=(i("1d77"),i("2877")),u=Object(p["a"])(d,s,a,!1,null,null,null);e["default"]=u.exports},"5b10":function(t,e,i){}}]);