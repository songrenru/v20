(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17dfaefa"],{"059f":function(e,t,i){"use strict";i.r(t);i("b0c0"),i("4e82");var s=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("div",{staticClass:"package-list"},[t("a-card",{staticStyle:{width:"100%",height:"220px"},attrs:{bordered:!1}},[t("label",{staticClass:"ant-card-head-title",staticStyle:{"font-size":"16px","margin-left":"19px","font-weight":"550"}},[e._v("分类设置")]),t("div",{staticClass:"card-set"},[t("span",{staticClass:"ant-form-item-required"},[e._v("分类名称:")]),t("a-input",{staticStyle:{width:"45%","margin-left":"24px"},attrs:{placeholder:"请输入分类名称"},model:{value:e.group.name,callback:function(t){e.$set(e.group,"name",t)},expression:"group.name"}})],1),t("div",{staticClass:"card-set"},[t("label",[e._v("排序值:")]),t("a-input",{staticStyle:{width:"45%","margin-left":"50px"},attrs:{placeholder:"不填则默认为0"},model:{value:e.group.sort,callback:function(t){e.$set(e.group,"sort",t)},expression:"group.sort"}}),t("p",{staticStyle:{"font-size":"15px",color:"#a09d9d","margin-left":"85px","font-weight":"400","margin-top":"10px"}},[e._v("排序值越大展示越靠前")])],1),t("div",{staticClass:"card-set"},[t("span",{staticClass:"ant-form-item-required"},[e._v("状态:")]),t("a-radio-group",{staticStyle:{"margin-left":"50px"},model:{value:e.group.status,callback:function(t){e.$set(e.group,"status",t)},expression:"group.status"}},[t("a-radio",{attrs:{value:1}},[e._v(" 开启 ")]),t("a-radio",{attrs:{value:2}},[e._v(" 关闭 ")])],1)],1)]),t("a-card",{staticStyle:{width:"100%",height:"100%"},attrs:{bordered:!1}},[t("label",{staticClass:"ant-card-head-title",staticStyle:{"font-size":"16px","margin-left":"19px","font-weight":"550"}},[e._v("负责人设置"),t("p",{staticStyle:{"font-size":"15px",color:"#a09d9d",float:"right","margin-left":"10px","font-weight":"400"}},[e._v("(如不需要自动指派给工作人员不设置即可)")])]),t("div",{staticClass:"card-set"},[t("label",[e._v("类型:")]),t("a-radio-group",{staticStyle:{"margin-left":"50px"},on:{change:e.onChange},model:{value:e.group.type,callback:function(t){e.$set(e.group,"type",t)},expression:"group.type"}},[t("a-radio",{attrs:{value:1}},[e._v(" 单人 ")]),t("a-radio",{attrs:{value:2}},[e._v(" 多人 ")])],1)],1),t("div",{staticClass:"card-set"},[t("label",[e._v("负责人:")]),1==e.is_show1?t("a-button",{staticStyle:{"margin-left":"35px"},attrs:{icon:"plus"},on:{click:function(t){return e.$refs.createModals.add()}}},[e._v("添加")]):e._e(),2==e.is_show1?t("a-button",{staticStyle:{"margin-left":"35px"},attrs:{icon:"plus"},on:{click:function(t){return e.$refs.createModal.add()}}},[e._v("添加")]):e._e(),2==e.is_show1?t("a-input",{staticStyle:{width:"100px","margin-left":"10px",border:"0px"},attrs:{disabled:""},model:{value:e.usernmae,callback:function(t){e.usernmae=t},expression:"usernmae"}}):e._e(),t("a-input",{staticStyle:{width:"100px","margin-left":"10px",border:"0px"},attrs:{hidden:""},model:{value:e.group.uid,callback:function(t){e.$set(e.group,"uid",t)},expression:"group.uid"}})],1),e.is_show?t("div",{staticStyle:{"background-color":"#ececec",padding:"1px",width:"90%","margin-left":"20px"}},[t("a-row",{attrs:{gutter:0}},[t("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[t("a-card",{attrs:{title:"周一",bordered:!1}},[""!=e.weeklist1[0].name?t("a",{attrs:{slot:"extra"},on:{click:function(t){return e.$refs.createModals.edit(1,e.group.id,e.scheduling.id1)}},slot:"extra"},[t("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):e._e(),""==e.weeklist1[0].name?t("p",[e._v("--")]):e._l(e.weeklist1,(function(i,s){return t("div",{staticStyle:{"padding-left":"20px"}},[t("span",[e._v(e._s(i.time))]),t("br"),t("a-tooltip",{attrs:{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[t("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(i.name1)+" ")]),t("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:i.name,placeholder:"Input a number","max-length":20}})],1)],1)}))],2)],1),t("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[t("a-card",{attrs:{title:"周二",bordered:!1}},[""!=e.weeklist2[0].name?t("a",{attrs:{slot:"extra"},on:{click:function(t){return e.$refs.createModals.edit(2,e.group.id,e.scheduling.id2)}},slot:"extra"},[t("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):e._e(),""==e.weeklist2[0].name?t("p",[e._v("--")]):e._l(e.weeklist2,(function(i,s){return t("div",{staticStyle:{"padding-left":"20px"}},[t("span",[e._v(e._s(i.time))]),t("br"),t("a-tooltip",{attrs:{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[t("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(i.name1)+" ")]),t("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:i.name,placeholder:"Input a number","max-length":20}})],1)],1)}))],2)],1),t("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[t("a-card",{attrs:{title:"周三",bordered:!1}},[""!=e.weeklist3[0].name?t("a",{attrs:{slot:"extra"},on:{click:function(t){return e.$refs.createModals.edit(3,e.group.id,e.scheduling.id3)}},slot:"extra"},[t("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):e._e(),""==e.weeklist3[0].name?t("p",[e._v("--")]):e._l(e.weeklist3,(function(i,s){return t("div",{staticStyle:{"padding-left":"20px"}},[t("span",[e._v(e._s(i.time))]),t("br"),t("a-tooltip",{attrs:{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[t("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(i.name1)+" ")]),t("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:i.name,placeholder:"Input a number","max-length":20}})],1)],1)}))],2)],1),t("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[t("a-card",{attrs:{title:"周四",bordered:!1}},[""!=e.weeklist4[0].name?t("a",{attrs:{slot:"extra"},on:{click:function(t){return e.$refs.createModals.edit(4,e.group.id,e.scheduling.id4)}},slot:"extra"},[t("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):e._e(),""==e.weeklist4[0].name?t("p",[e._v("--")]):e._l(e.weeklist4,(function(i,s){return t("div",{staticStyle:{"padding-left":"20px"}},[t("span",[e._v(e._s(i.time))]),t("br"),t("a-tooltip",{attrs:{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[t("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(i.name1)+" ")]),t("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:i.name,placeholder:"Input a number","max-length":20}})],1)],1)}))],2)],1),t("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[t("a-card",{attrs:{title:"周五",bordered:!1}},[""!=e.weeklist5[0].name?t("a",{attrs:{slot:"extra"},on:{click:function(t){return e.$refs.createModals.edit(5,e.group.id,e.scheduling.id5)}},slot:"extra"},[t("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):e._e(),""==e.weeklist5[0].name?t("p",[e._v("--")]):e._l(e.weeklist5,(function(i,s){return t("div",{staticStyle:{"padding-left":"20px"}},[t("span",[e._v(e._s(i.time))]),t("br"),t("a-tooltip",{attrs:{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[t("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(i.name1)+" ")]),t("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:i.name,placeholder:"Input a number","max-length":20}})],1)],1)}))],2)],1),t("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[t("a-card",{attrs:{title:"周六",bordered:!1}},[""!=e.weeklist6[0].name?t("a",{attrs:{slot:"extra"},on:{click:function(t){return e.$refs.createModals.edit(6,e.group.id,e.scheduling.id6)}},slot:"extra"},[t("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):e._e(),""==e.weeklist6[0].name?t("p",[e._v("--")]):e._l(e.weeklist6,(function(i,s){return t("div",{staticStyle:{"padding-left":"20px"}},[t("span",[e._v(e._s(i.time))]),t("br"),t("a-tooltip",{attrs:{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[t("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(i.name1)+" ")]),t("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:i.name,placeholder:"Input a number","max-length":20}})],1)],1)}))],2)],1),t("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[t("a-card",{attrs:{title:"周日",bordered:!1}},[""!=e.weeklist0[0].name?t("a",{attrs:{slot:"extra"},on:{click:function(t){return e.$refs.createModals.edit(7,e.group.id,e.scheduling.id7)}},slot:"extra"},[t("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):e._e(),""==e.weeklist0[0].name?t("p",[e._v("--")]):e._l(e.weeklist0,(function(i,s){return t("div",{staticStyle:{"padding-left":"20px"}},[t("span",[e._v(e._s(i.time))]),t("br"),t("a-tooltip",{attrs:{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[t("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(i.name1)+" ")]),t("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:i.name,placeholder:"Input a number","max-length":20}})],1)],1)}))],2)],1)],1)],1):e._e()]),t("choose-tree",{ref:"createModal",attrs:{height:800,width:1e3},on:{ok:e.handleOks}}),t("choose-scheduling",{ref:"createModals",attrs:{height:800,width:1e3},on:{ok:e.handleOk}})],1)])},a=[],l=(i("d3b7"),i("159b"),i("ac1f"),i("1276"),i("a0e0")),n=i("af3c"),r=i("3e09"),o=[{title:"周一",dataIndex:"cate_name",key:"cate_name"},{title:"周二",dataIndex:"sort",key:"sort"},{title:"周三",dataIndex:"cate_name",key:"cate_name"},{title:"周四",dataIndex:"sort",key:"sort"},{title:"周五",dataIndex:"cate_name",key:"cate_name"},{title:"周六",dataIndex:"sort",key:"sort"},{title:"周日",dataIndex:"cate_name",key:"cate_name"}],c={name:"editRepairCate",components:{chooseTree:n["default"],chooseScheduling:r["default"]},data:function(){return{week_show:!0,one:"00:00~00:00",weeklist1:[{name1:"",name:"",time:""}],weeklist2:[{name1:"",name:"",time:""}],weeklist3:[{name1:"",name:"",time:""}],weeklist4:[{name1:"",name:"",time:""}],weeklist5:[{name1:"",name:"",time:""}],weeklist6:[{name1:"",name:"",time:""}],weeklist0:[{name1:"",name:"",time:""}],scheduling:{id1:0,id2:0,id3:0,id4:0,id5:0,id6:0,id7:0},data:[],is_show:!1,is_show1:2,columns:o,title:"添加",usernmae:"",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},value:null,color:"",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),group:{id:0,uid:"",director_id:"",name:"",cate_id:0,sort:"",type:1,status:1,subject_id:0},id:0}},methods:{add:function(e,t){this.scheduling={id1:0,id2:0,id3:0,id4:0,id5:0,id6:0,id7:0},this.title="添加",this.visible=!0,this.usernmae="",this.is_show=!1,this.is_show1=2,this.week_show=!0,this.group={id:0,name:"",sort:"",type:1,uid:"",director_id:"",cate_id:e,subject_id:t,status:1},this.weeklist1=[{name1:"",name:"",time:""}],this.weeklist2=[{name1:"",name:"",time:""}],this.weeklist3=[{name1:"",name:"",time:""}],this.weeklist4=[{name1:"",name:"",time:""}],this.weeklist5=[{name1:"",name:"",time:""}],this.weeklist6=[{name1:"",name:"",time:""}],this.weeklist0=[{name1:"",name:"",time:""}]},edit:function(e){this.week_show=!1,this.visible=!0,this.id=e,this.scheduling={id1:0,id2:0,id3:0,id4:0,id5:0,id6:0,id7:0},this.weeklist1=[{name1:"",name:"",time:""}],this.weeklist2=[{name1:"",name:"",time:""}],this.weeklist3=[{name1:"",name:"",time:""}],this.weeklist4=[{name1:"",name:"",time:""}],this.weeklist5=[{name1:"",name:"",time:""}],this.weeklist6=[{name1:"",name:"",time:""}],this.weeklist0=[{name1:"",name:"",time:""}],this.getCateInfo(),console.log(this.id),this.id>0?this.title="编辑":this.title="添加"},getCateInfo:function(){var e=this;this.request(l["a"].getCateInfo,{id:this.id}).then((function(t){e.group=t,2==t.type?(e.is_show=!0,e.is_show1=3,e.usernmae="",e.scheduling=t.scheduling,""!=t.director_id?e.request(l["a"].getDirectorLists,{id:t.director_id}).then((function(t){console.log("cateres",t);var i=0,s=0,a=0,l=0,n=0,r=0,o=0;t.forEach((function(t,c){e.week_show=!1,0==t.type?(i+=1,e.weeklist0.push(t.child),1==i&&(e.$delete(e.weeklist0,0),i+=1),console.log("weeklist0",e.weeklist0)):1==t.type?(s+=1,e.weeklist1.push(t.child),1==s&&(e.$delete(e.weeklist1,0),s+=1),console.log("weeklist1",e.weeklist1)):2==t.type?(e.weeklist2.push(t.child),a+=1,1==a&&(e.$delete(e.weeklist2,0),a+=1),console.log("weeklist2",e.weeklist2)):3==t.type?(e.weeklist3.push(t.child),l+=1,1==l&&(e.$delete(e.weeklist3,0),l+=1),console.log("weeklist3",e.weeklist3)):4==t.type?(e.weeklist4.push(t.child),n+=1,1==n&&(e.$delete(e.weeklist4,0),n+=1),console.log("weeklist4",e.weeklist4)):5==t.type?(e.weeklist5.push(t.child),r+=1,1==r&&(e.$delete(e.weeklist5,0),r+=1),console.log("weeklist5",e.weeklist5)):6==t.type&&(e.weeklist6.push(t.child),o+=1,1==o&&(e.$delete(e.weeklist6,0),o+=1),console.log("weeklist6",e.weeklist6))}))})):e.week_show=!0):e.usernmae=t.usernmae,console.log("group",e.group)}))},handleSubmit:function(){var e=this;this.confirmLoading=!0,this.group.scheduling=this.scheduling,this.id>0?(this.group.id=this.id,this.request(l["a"].editCate,this.group).then((function(t){t?e.$message.success("编辑成功"):e.$message.success("编辑失败"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok")}),1500)})).catch((function(t){e.confirmLoading=!1}))):this.request(l["a"].addCate,this.group).then((function(t){t?e.$message.success("添加成功"):e.$message.success("添加失败"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok")}),1500)})).catch((function(t){e.confirmLoading=!1}))},onChange:function(e){var t=e.target.value;1==t?(this.is_show=!1,this.is_show1=2):(this.is_show=!0,this.is_show1=1,this.week_show=!0),console.log("radio checked",e.target.value),console.log("weeklist1",this.weeklist1)},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},handleOks:function(e){console.log("value",e);var t=e[0],i=t.split("-");console.log("aa",i),this.usernmae=i[1],this.group.uid=i[0]},handleOk:function(e){var t=this;console.log("value",e),""!=e&&e.forEach((function(e,i){1==e.type?(t.scheduling.id1=e.id,t.weeklist1=[{name1:"",name:"",time:""}]):2==e.type?(t.scheduling.id2=e.id,t.weeklist2=[{name1:"",name:"",time:""}]):3==e.type?(t.scheduling.id3=e.id,t.weeklist3=[{name1:"",name:"",time:""}]):4==e.type?(t.scheduling.id4=e.id,t.weeklist4=[{name1:"",name:"",time:""}]):5==e.type?(t.scheduling.id5=e.id,t.weeklist5=[{name1:"",name:"",time:""}]):6==e.type?(t.scheduling.id6=e.id,t.weeklist6=[{name1:"",name:"",time:""}]):7==e.type&&(t.scheduling.id7=e.id,t.weeklist0=[{name1:"",name:"",time:""}]),t.request(l["a"].getDirectorLists,{id:e.id}).then((function(e){console.log("cateres",e);var i=0,s=0,a=0,l=0,n=0,r=0,o=0;e.forEach((function(e,c){t.week_show=!1,0==e.type?(i+=1,t.weeklist0.push(e.child),1==i&&(t.$delete(t.weeklist0,0),i+=1),console.log("weeklist0",t.weeklist0)):1==e.type?(s+=1,t.weeklist1.push(e.child),1==s&&(t.$delete(t.weeklist1,0),s+=1),console.log("weeklist1",t.weeklist1)):2==e.type?(t.weeklist2.push(e.child),a+=1,1==a&&(t.$delete(t.weeklist2,0),a+=1),console.log("weeklist2",t.weeklist2)):3==e.type?(t.weeklist3.push(e.child),l+=1,1==l&&(t.$delete(t.weeklist3,0),l+=1),console.log("weeklist3",t.weeklist3)):4==e.type?(t.weeklist4.push(e.child),n+=1,1==n&&(t.$delete(t.weeklist4,0),n+=1),console.log("weeklist4",t.weeklist4)):5==e.type?(t.weeklist5.push(e.child),r+=1,1==r&&(t.$delete(t.weeklist5,0),r+=1),console.log("weeklist5",t.weeklist5)):6==e.type&&(t.weeklist6.push(e.child),o+=1,1==o&&(t.$delete(t.weeklist6,0),o+=1),console.log("weeklist6",t.weeklist6))}))}))})),console.log("scheduling",this.scheduling)}}},d=c,u=(i("54b5"),i("2877")),m=Object(u["a"])(d,s,a,!1,null,"263dadee",null);t["default"]=m.exports},"54b5":function(e,t,i){"use strict";i("c4a6")},c4a6:function(e,t,i){}}]);