(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b0273af","chunk-3c65a5f2","chunk-1aeada1e"],{2379:function(t,e,a){},"33f0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:900,visible:t.visible,maskClosable:!1,footer:null,confirmLoading:t.confirmLoading},on:{cancel:t.handleCancel}},[a("div",{staticClass:"package-list"},[a("a-card",{staticStyle:{width:"100%",height:"200px"},attrs:{bordered:!1}},[a("label",{staticClass:"ant-card-head-title",staticStyle:{"font-size":"16px","margin-left":"19px","font-weight":"550"}},[t._v("分类设置3")]),a("div",{staticClass:"card-set"},[a("label",[t._v("分类名称:")]),a("a-input",{staticStyle:{width:"45%","margin-left":"24px",border:"0px"},attrs:{disabled:!0},model:{value:t.group.cate_name,callback:function(e){t.$set(t.group,"cate_name",e)},expression:"group.cate_name"}})],1),a("div",{staticClass:"card-set"},[a("label",[t._v("排序值:")]),a("a-input",{staticStyle:{width:"45%","margin-left":"38px",border:"0px"},attrs:{disabled:!0},model:{value:t.group.sort,callback:function(e){t.$set(t.group,"sort",e)},expression:"group.sort"}})],1),a("div",{staticClass:"card-set"},[a("label",[t._v("状态:")]),a("a-input",{staticStyle:{width:"45%","margin-left":"52px",border:"0px"},attrs:{disabled:!0},model:{value:t.group.status,callback:function(e){t.$set(t.group,"status",e)},expression:"group.status"}})],1)]),1==t.group.card_show?a("a-card",{staticStyle:{width:"100%",height:"100%"},attrs:{bordered:!1}},[a("label",{staticClass:"ant-card-head-title",staticStyle:{"font-size":"16px","margin-left":"19px","font-weight":"550"}},[t._v("负责人设置"),a("p",{staticStyle:{"font-size":"15px",color:"#a09d9d",float:"right","margin-left":"10px","font-weight":"400"}},[t._v("(如不需要自动指派给工作人员不设置即可)")])]),a("div",{staticClass:"card-set"},[t._v(" 无负责人 ")])]):t._e(),2==t.group.card_show?a("a-card",{staticStyle:{width:"100%",height:"100%"},attrs:{bordered:!1}},[a("label",{staticClass:"ant-card-head-title",staticStyle:{"font-size":"16px","margin-left":"19px","font-weight":"550"}},[t._v("负责人设置"),a("p",{staticStyle:{"font-size":"15px",color:"#a09d9d",float:"right","margin-left":"10px","font-weight":"400"}},[t._v("(如不需要自动指派给工作人员不设置即可)")])]),a("div",{staticClass:"card-set"},[a("label",[t._v("类型:")]),a("a-input",{staticStyle:{width:"45%","margin-left":"52px",border:"0px"},attrs:{disabled:!0},model:{value:t.group.type,callback:function(e){t.$set(t.group,"type",e)},expression:"group.type"}})],1),a("div",{staticClass:"card-set"},[a("label",[t._v("负责人:")]),a("a-input",{staticStyle:{width:"100px","margin-left":"38px",border:"0px"},attrs:{disabled:!0},model:{value:t.usernmae,callback:function(e){t.usernmae=e},expression:"usernmae"}}),a("a-input",{staticStyle:{width:"100px","margin-left":"10px",border:"0px"},attrs:{hidden:""},model:{value:t.group.uid,callback:function(e){t.$set(t.group,"uid",e)},expression:"group.uid"}})],1),t.is_show?a("div",{staticStyle:{"background-color":"#ececec",padding:"1px",width:"90%","margin-left":"20px"}},[a("a-row",{attrs:{gutter:0}},[a("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[a("a-card",{attrs:{title:"周一",bordered:!1}},[t.week_show?a("p",[t._v("--")]):t._l(t.weeklist1,(function(e,i){return a("div",[a("span",[t._v(t._s(e.time))]),a("br"),a("span",[t._v(t._s(e.name))])])}))],2)],1),a("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[a("a-card",{attrs:{title:"周二",bordered:!1}},[t.week_show?a("p",[t._v("--")]):t._l(t.weeklist2,(function(e,i){return a("div",[a("span",[t._v(t._s(e.time))]),a("br"),a("span",[t._v(t._s(e.name))])])}))],2)],1),a("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[a("a-card",{attrs:{title:"周三",bordered:!1}},[t.week_show?a("p",[t._v("--")]):t._l(t.weeklist3,(function(e,i){return a("div",[a("span",[t._v(t._s(e.time))]),a("br"),a("span",[t._v(t._s(e.name))])])}))],2)],1),a("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[a("a-card",{attrs:{title:"周四",bordered:!1}},[t.week_show?a("p",[t._v("--")]):t._l(t.weeklist4,(function(e,i){return a("div",[a("span",[t._v(t._s(e.time))]),a("br"),a("span",[t._v(t._s(e.name))])])}))],2)],1),a("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[a("a-card",{attrs:{title:"周五",bordered:!1}},[t.week_show?a("p",[t._v("--")]):t._l(t.weeklist5,(function(e,i){return a("div",[a("span",[t._v(t._s(e.time))]),a("br"),a("span",[t._v(t._s(e.name))])])}))],2)],1),a("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[a("a-card",{attrs:{title:"周六",bordered:!1}},[t.week_show?a("p",[t._v("--")]):t._l(t.weeklist6,(function(e,i){return a("div",[a("span",[t._v(t._s(e.time))]),a("br"),a("span",[t._v(t._s(e.name))])])}))],2)],1),a("a-col",{staticStyle:{width:"14.284%"},attrs:{span:3}},[a("a-card",{attrs:{title:"周日",bordered:!1}},[t.week_show?a("p",[t._v("--")]):t._l(t.weeklist0,(function(e,i){return a("div",[a("span",[t._v(t._s(e.time))]),a("br"),a("span",[t._v(t._s(e.name))])])}))],2)],1)],1)],1):t._e()]):t._e()],1)])},s=[],n=(a("d3b7"),a("159b"),a("a0e0")),o=a("af3c"),r=a("3e09"),l=[{title:"周一",dataIndex:"cate_name",key:"cate_name"},{title:"周二",dataIndex:"sort",key:"sort"},{title:"周三",dataIndex:"cate_name",key:"cate_name"},{title:"周四",dataIndex:"sort",key:"sort"},{title:"周五",dataIndex:"cate_name",key:"cate_name"},{title:"周六",dataIndex:"sort",key:"sort"},{title:"周日",dataIndex:"cate_name",key:"cate_name"}],c={name:"editRepairCate",components:{chooseTree:o["default"],chooseScheduling:r["default"]},data:function(){return{week_show:!0,one:"00:00~00:00",weeklist1:[{name:"管管，管",time:"00:00~00:00"}],weeklist2:[{name:"管管，管",time:"00:00~00:00"}],weeklist3:[{name:"管管，管",time:"00:00~00:00"}],weeklist4:[{name:"管管，管",time:"00:00~00:00"}],weeklist5:[{name:"管管，管",time:"00:00~00:00"}],weeklist6:[{name:"管管，管",time:"00:00~00:00"}],weeklist0:[{name:"管管，管",time:"00:00~00:00"}],data:[],is_show:!0,columns:l,title:"查看",usernmae:"",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},value:null,color:"",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),group:{id:0,uid:"",director_id:"",cate_name:"",cate_id:0,sort:"",type:1,status:1,subject_id:0,card_show:2},id:0}},methods:{add:function(t){this.title="查看",this.visible=!0,this.usernmae="",this.week_show=!0,this.id=t,this.weeklist1=[{name:"管管，管",time:"00:00~00:00"}],this.weeklist2=[{name:"管管，管",time:"00:00~00:00"}],this.weeklist3=[{name:"管管，管",time:"00:00~00:00"}],this.weeklist4=[{name:"管管，管",time:"00:00~00:00"}],this.weeklist5=[{name:"管管，管",time:"00:00~00:00"}],this.weeklist6=[{name:"管管，管",time:"00:00~00:00"}],this.weeklist0=[{name:"管管，管",time:"00:00~00:00"}],this.getCateInfo(),this.group={id:0,cate_name:"",sort:"",type:1,uid:"",director_id:"",cate_id:"",subject_id:"",status:1,card_show:2}},getCateInfo:function(){var t=this;this.request(n["a"].getCateInfo,{id:this.id}).then((function(e){console.log("group",e),t.group=e,t.group.type=e.type1,t.group.status=e.status1,t.group.card_show=e.card_show,t.usernmae=e.usernmae,"多人"==e.type?(t.is_show=!0,""!=e.director_id&&t.request(n["a"].getDirectorLists,{id:e.director_id}).then((function(e){console.log("cateres",e);var a=0,i=0,s=0,n=0,o=0,r=0,l=0;e.forEach((function(e,c){t.week_show=!1,0==e.type?(a+=1,t.weeklist0.push(e.child),1==a&&(t.$delete(t.weeklist0,0),a+=1),console.log("weeklist0",t.weeklist0)):1==e.type?(i+=1,t.weeklist1.push(e.child),1==i&&(t.$delete(t.weeklist1,0),i+=1),console.log("weeklist1",t.weeklist1)):2==e.type?(t.weeklist2.push(e.child),s+=1,1==s&&(t.$delete(t.weeklist2,0),s+=1),console.log("weeklist2",t.weeklist2)):3==e.type?(t.weeklist3.push(e.child),n+=1,1==n&&(t.$delete(t.weeklist3,0),n+=1),console.log("weeklist3",t.weeklist3)):4==e.type?(t.weeklist4.push(e.child),o+=1,1==o&&(t.$delete(t.weeklist4,0),o+=1),console.log("weeklist4",t.weeklist4)):5==e.type?(t.weeklist5.push(e.child),r+=1,1==r&&(t.$delete(t.weeklist5,0),r+=1),console.log("weeklist5",t.weeklist5)):6==e.type&&(t.weeklist6.push(e.child),l+=1,1==l&&(t.$delete(t.weeklist6,0),l+=1),console.log("weeklist6",t.weeklist6))}))}))):t.is_show=!1}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)}}},d=c,u=(a("85a2"),a("2877")),p=Object(u["a"])(d,i,s,!1,null,"180c8bb0",null);e["default"]=p.exports},"3b34":function(t,e,a){"use strict";a("bdf59")},"48a8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{width:"1000px",title:"子分类管理",footer:null,maskClosable:!1},on:{cancel:t.handleCandel},model:{value:t.bindVisible,callback:function(e){t.bindVisible=e},expression:"bindVisible"}},[a("div",{staticClass:"package-list"},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator",staticStyle:{"margin-bottom":"10px"}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModalsss.add(t.parent_id,t.subject_id)}}},[t._v("添加子分类")])],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.list,rowKey:"id",pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModalGet.add(i.id)}}},[t._v("查看")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.$refs.createModalsss.edit(i.id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(i.id)},cancel:t.cancel}},[a("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}},{key:"cate",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModal.customList(i.id)}}},[t._v("管理")])])}},{key:"status",fn:function(e,i){return a("span",{},[a("div",{class:"开启"===e?"txt-green":"txt-red"},[t._v(" "+t._s(e)+" ")])])}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last))]}}])})],1),a("custom-list",{ref:"createModal",attrs:{height:800,width:1500}}),a("cate-get",{ref:"createModalGet",attrs:{height:800,width:1500}}),a("repair-cate",{ref:"createModalsss",attrs:{height:800,width:1500},on:{ok:t.handleOks}})],1)])},s=[],n=a("a0e0"),o=a("aa8e8"),r=a("059f"),l=a("33f0"),c=[{title:"分类名称",dataIndex:"cate_name",key:"cate_name"},{title:"自定义字段",dataIndex:"cate",key:"",scopedSlots:{customRender:"cate"}},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"排序值",dataIndex:"sort",key:"sort"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],d={name:"repairCateChildList",components:{customList:o["default"],repairCate:r["default"],cateGet:l["default"]},data:function(){return{list:[],pagination:{pageSize:10,total:10},page:1,id:0,columns:c,bindVisible:!1,confirmLoading:!1,parent_id:0,subject_id:0}},methods:{handleOks:function(){this.getCateList()},childList:function(t){this.parent_id=t.id,this.subject_id=t.subject_id,this.bindVisible=!0,this.getCateList()},deleteConfirm:function(t){var e=this;this.request(n["a"].delCate,{id:t}).then((function(t){e.getCateList(),e.$message.success("删除成功")}))},handleCandel:function(){this.bindVisible=!1},cancel:function(){},getCateList:function(){var t=this;this.request(n["a"].getCateList,{page:this.page,subject_id:this.subject_id,parent_id:this.parent_id}).then((function(e){console.log("res",e),t.list=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.page=t.current,this.getCateList())},bind:function(t){},bindAll:function(){}}},u=d,p=(a("3b34"),a("2877")),m=Object(p["a"])(u,i,s,!1,null,null,null);e["default"]=m.exports},"85a2":function(t,e,a){"use strict";a("2379")},"8e58":function(t,e,a){"use strict";a("ee780")},"9dff":function(t,e,a){},aa8e8:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{width:"1000px",title:"自定义字段",visible:t.bindVisible},on:{close:t.handleCandel}},[a("div",{staticClass:"package-list"},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator",staticStyle:{"margin-bottom":"10px"}},[a("a-alert",{staticStyle:{"margin-top":"-10px","margin-bottom":"10px"},attrs:{message:"添加字段后，业主提交工单时可根据以下字段选择自己的问题，方便物业快速定位问题，避免多次确认",type:"info"}}),a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.createModal.add(t.cate_id)}}},[t._v("添加字段")])],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.list,rowKey:"id",pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"action",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(e){return t.$refs.createModal.edit(t.cate_id,i.id)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{staticClass:"ant-dropdown-link",attrs:{title:"确认删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.deleteConfirm(i)},cancel:t.cancel}},[a("a",{attrs:{href:"#"}},[t._v("删除")])])],1)}},{key:"status",fn:function(e,i){return a("span",{},[a("div",{class:"开启"===e?"txt-green":"txt-red"},[t._v(" "+t._s(e)+" ")])])}},{key:"name",fn:function(e){return[t._v(" "+t._s(e.first)+" "+t._s(e.last))]}}])})],1),a("custom-info",{ref:"createModal",attrs:{height:800,width:1500},on:{ok:t.handleOks}})],1)])},s=[],n=a("ade3"),o=a("a0e0"),r=a("b38b"),l=[{title:"标签名称",dataIndex:"name",key:"name",width:"680px"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"排序值",dataIndex:"sort",key:"sort"},{title:"操作",key:"action",dataIndex:"",scopedSlots:{customRender:"action"}}],c={name:"repairCateCustomList",components:{customInfo:r["default"]},data:function(){return{list:[],pagination:{current:1,pageSize:10,total:10},page:1,id:0,columns:l,bindVisible:!1,confirmLoading:!1,cate_id:0}},methods:Object(n["a"])({handleOks:function(){this.getCateList()},customList:function(t){this.pagination.current=1,this.cate_id=t,this.bindVisible=!0,this.getCateList()},deleteConfirm:function(t){var e=this;this.request(o["a"].delCateCustom,{id:t.id,cate_id:t.cate_id}).then((function(t){e.getCateList(),e.$message.success("删除成功")}))},handleCandel:function(){this.bindVisible=!1},cancel:function(){},getCateList:function(){var t=this;this.page=this.pagination.current,this.request(o["a"].getCateCustomList,{page:this.page,cate_id:this.cate_id}).then((function(e){console.log("res",e),t.list=e.list,t.pagination.total=e.count?e.count:0,t.pagination.pageSize=e.total_limit?e.total_limit:10}))},tableChange:function(t){t.current&&t.current>0&&(this.pagination.current=t.current,this.getCateList())}},"handleOks",(function(){this.getCateList()}))},d=c,u=(a("c4d5"),a("2877")),p=Object(u["a"])(d,i,s,!1,null,"7714f1f4",null);e["default"]=p.exports},b38b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:600,visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading,height:800}},[a("a-form",{staticStyle:{"padding-left":"35px"},attrs:{form:t.form}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:10}},[a("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("字段名称:")])]),a("a-col",{attrs:{span:14}},[a("a-input",{attrs:{placeholder:"请输入字段名称"},model:{value:t.group.name,callback:function(e){t.$set(t.group,"name",e)},expression:"group.name"}})],1)],1),a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:10}},[a("span",{staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("排序值:")])]),a("a-col",{attrs:{span:14}},[a("a-input",{attrs:{placeholder:"不填则默认为0"},model:{value:t.group.sort,callback:function(e){t.$set(t.group,"sort",e)},expression:"group.sort"}})],1)],1),a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-col",{attrs:{span:10}},[a("span",{staticClass:"ant-form-item-required",staticStyle:{float:"left","margin-left":"35px","margin-right":"10px"}},[t._v("状态:")])]),a("a-col",{attrs:{span:14}},[a("a-radio-group",{model:{value:t.group.status,callback:function(e){t.$set(t.group,"status",e)},expression:"group.status"}},[a("a-radio",{attrs:{value:1}},[t._v(" 开启 ")]),a("a-radio",{attrs:{value:2}},[t._v(" 关闭 ")])],1)],1)],1)],1)],1)],1)},s=[],n=(a("b0c0"),a("4e82"),a("a0e0")),o={data:function(){return{title:"添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},value:null,color:"",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),group:{id:0,name:"",cate_id:0,sort:"",status:1},id:0}},methods:{add:function(t){this.title="添加",this.visible=!0,this.id=0,this.group={id:0,name:"",sort:"",cate_id:t,status:1}},edit:function(t,e){this.visible=!0,this.id=e,this.group={id:e,name:"",sort:"",cate_id:t,status:1},this.getCateCustomInfo(),console.log(this.id),this.id>0?this.title="编辑":this.title="添加"},getCateCustomInfo:function(){var t=this;this.request(n["a"].getCateCustomInfo,{id:this.id,cate_id:this.group.cate_id}).then((function(e){t.group.id=e.id,t.group.status=e.status,t.group.name=e.name,t.group.sort=e.sort,console.log("group",t.group)}))},handleSubmit:function(){var t=this;this.confirmLoading=!0,this.id>0?(this.group.id=this.id,this.request(n["a"].addCateCustom,this.group).then((function(e){e?t.$message.success("编辑成功"):t.$message.success("编辑失败"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(e){t.confirmLoading=!1}))):this.request(n["a"].addCateCustom,this.group).then((function(e){e?t.$message.success("添加成功"):t.$message.success("添加失败"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("ok")}),1500)})).catch((function(e){t.confirmLoading=!1}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)}}},r=o,l=(a("8e58"),a("2877")),c=Object(l["a"])(r,i,s,!1,null,"246dc643",null);e["default"]=c.exports},bdf59:function(t,e,a){},c4d5:function(t,e,a){"use strict";a("9dff")},ee780:function(t,e,a){}}]);