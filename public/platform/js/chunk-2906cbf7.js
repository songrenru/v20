(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2906cbf7","chunk-7ca8a023","chunk-7f1d9242"],{"2ec0":function(e,t,i){"use strict";i("31bc")},"31bc":function(e,t,i){},"3e09":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[i("a-alert",{staticStyle:{"margin-top":"-10px","margin-bottom":"10px"},attrs:{message:"系统默认生成一条每天24小时（00:00~00:00）的数据，当时间点不在所新增的时段内，业主提交工单后，将自动指派给“24小时”的物业工作人员。",type:"info"}}),i("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{label:"固定时段",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:24}},[i("a-time-picker",{attrs:{value:e.moment(e.starttime,"HH:mm"),disabled:"",format:"HH:mm",allowClear:e.allow_clear}}),e._v(" ~ "),i("a-time-picker",{attrs:{value:e.moment(e.endtime,"HH:mm"),disabled:"",format:"HH:mm",allowClear:e.allow_clear}}),i("a-input",{staticStyle:{width:"150px"},on:{click:function(t){return e.$refs.createModal.add(e.defaulttype,-1,e.index_key_arr)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),i("a-input",{attrs:{hidden:""},model:{value:e.uid,callback:function(t){e.uid=t},expression:"uid"}})],1)],1),e._l(e.index_row,(function(t,s){return i("div",{staticClass:"form_box"},[i("a-form-item",{staticStyle:{"margin-left":"250px"}},[i("a-col",{attrs:{span:20}},[i("a-time-picker",{attrs:{value:e.moment(t.starttime,"HH:mm"),disabledMinutes:e.getDisabledMinutes,hideDisabledOptions:"",format:"HH:mm",allowClear:e.allow_clear},on:{change:function(t){return e.onChangeStart(t,s)}}}),e._v(" ~ "),i("a-time-picker",{attrs:{value:e.moment(t.endtime,"HH:mm"),disabledMinutes:e.getDisabledMinutes,hideDisabledOptions:"",format:"HH:mm",allowClear:e.allow_clear},on:{change:function(t){return e.onChangeEnd(t,s)}}}),i("a-input",{staticStyle:{width:"150px"},on:{click:function(i){return e.$refs.createModal.add(e.defaulttype,s,t.index_key)}},model:{value:t.name,callback:function(i){e.$set(t,"name",i)},expression:"item.name"}}),i("a-input",{attrs:{hidden:""},model:{value:t.uid,callback:function(i){e.$set(t,"uid",i)},expression:"item.uid"}})],1),i("a-col",{staticStyle:{"margin-left":"-50px"},attrs:{span:4}},[i("a",{on:{click:function(t){return e.del_row(s)}}},[e._v("删除")])])],1)],1)})),i("div",{staticClass:"icon_1 margin_top_10",staticStyle:{"margin-left":"250px","margin-bottom":"20px"}},[i("a",{on:{click:e.add_row}},[e._v("添加")])]),i("a-form-item",{attrs:{label:"适用周期",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},e._l(e.weeklist,(function(t,s){return i("div",{staticClass:"btn-choose",class:t.focus?"colorweek":"",on:{click:function(i){return e.oneClick(t)}}},[e._v(e._s(t.name))])})),0)],2)],1),i("choose-trees",{ref:"createModal",attrs:{height:800,width:1e3},on:{ok:e.handleOks}})],1)},a=[],n=(i("b0c0"),i("a434"),i("d81d"),i("d3b7"),i("159b"),i("caad"),i("2532"),i("ac1f"),i("5319"),i("1276"),i("a0e0")),l=i("c1df"),r=i.n(l),o=i("af3c"),d={name:"chooseScheduling",components:{chooseTrees:o["default"]},data:function(){return{hide1:0,time:"00:00",title:"添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},value:null,color:"",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),name:"",uid:0,director_id:[],starttime:"00:00",endtime:"00:00",id:0,defaulid:0,key:0,allow_clear:!1,index_row:[{id:0,uid:"",name:"",starttime:"00:00",endtime:"00:00",index_key:[]}],index_row_post:[],defaulttype:1,defaul_date_type:"",index_row_key:[],index_key_arr:[],weeklist:[{name:"周一",focus:!1,key:1},{name:"周二",focus:!1,key:2},{name:"周三",focus:!1,key:3},{name:"周四",focus:!1,key:4},{name:"周五",focus:!1,key:5},{name:"周六",focus:!1,key:6},{name:"周日",focus:!1,key:7}]}},methods:{add:function(e){this.title="添加负责人",this.visible=!0,this.starttime="00:00",this.endtime="00:00",this.name="",this.uid="",this.key=0,this.id=0,this.director_id=[],this.index_row=[],this.index_row_post=[],this.defaulid=0,this.defaulttype=e,this.index_row_key=[],this.index_key_arr=[],this.defaul_date_type="",this.weeklist=[{name:"周一",focus:!1,key:1},{name:"周二",focus:!1,key:2},{name:"周三",focus:!1,key:3},{name:"周四",focus:!1,key:4},{name:"周五",focus:!1,key:5},{name:"周六",focus:!1,key:6},{name:"周日",focus:!1,key:7}]},add_row:function(){var e={id:0,uid:"",name:"",starttime:"00:00",endtime:"00:00",index_key:[]};this.index_row.push(e),this.index_row_post.push(e)},del_row:function(e){console.log("index",e),e=parseInt(e),this.index_row.splice(e,1),this.index_row_post.map((function(t,i){i==e&&(t.isdel=1)})),console.log("index_row",this.index_row)},edit:function(e,t,i,s){this.title="编辑负责人",this.visible=!0,this.id=t,this.director_id=i,this.index_row_key=[],this.index_key_arr=[],this.key=e,this.defaulttype=s,this.defaulid=0,this.index_row=[],this.index_row_post=[],this.starttime="00:00",this.endtime="00:00",this.name="",this.uid="",this.defaul_date_type="",this.getScheduling(),this.weeklist.forEach((function(t,i){t.key==e?t.focus=!0:t.focus=!1}))},getScheduling:function(){var e=this;console.log("key",this.key),console.log("id",this.id),console.log("director_id",this.director_id),0!=this.key&&this.director_id.length>0&&this.request(n["a"].getScheduling,{cate_id:this.id,key:this.key,director_id:this.director_id}).then((function(t){console.log("res111",t),t&&t.forEach((function(t,i){if("0:00"!=t.start_time&&"00:00"!=t.start_time||"0:00"!=t.end_time&&"00:00"!=t.end_time){var s={id:t.id,uid:t.uid,name:t.name,starttime:t.start_time,endtime:t.end_time,index_key:t.index_key,date_type:t.type};e.index_row.push(s),e.index_row_post.push(s)}else e.name=t.name,e.uid=t.uid,e.index_key_arr=t.index_key,e.defaulid=t.id,e.defaul_date_type=t.type}))}))},handleSubmit:function(){var e=this,t={id:this.defaulid,uid:this.uid,name:this.name,starttime:"00:00",endtime:"00:00",is_defult:1,date_type:this.defaul_date_type};if(this.index_row.length>0&&(""==this.uid||0==this.uid||"0"==this.uid))return this.$message.error("固定时段第一个未选择人员！"),!1;var i=!1;if(this.index_row.forEach((function(t,s){var a=s+2;if(!t.starttime.includes(":")||!t.endtime.includes(":"))return i=!0,e.$message.error("第 "+a+"个固定时段 时间段设置错误！"),!1;var n=t.starttime.replace(":","");n=parseInt(n);var l=t.endtime.replace(":","");return l=parseInt(l),0==n&&0==l?(i=!0,e.$message.error("第"+a+"个固定时段设置重复了！"),!1):l<n?(i=!0,e.$message.error("第"+a+"个固定时段设置的 结束时间 不能小于 开始时间！"),!1):void 0})),i)return!1;console.log("itme",this.index_row),console.log("index_row_post",this.index_row_post),console.log("week",this.weeklist),this.confirmLoading=!0,this.request(n["a"].addDirector,{item:this.index_row_post,date_type:this.weeklist,defult:t}).then((function(t){t?e.$message.success("操作成功"):e.$message.success("操作失败"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",t.res)}),1500)})).catch((function(t){e.confirmLoading=!1}))},handleCancel:function(){var e=this;this.visible=!1,this.defaulttype=1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},oneClick:function(e){0==e.focus?e.focus=!0:e.focus=!1},moment:r.a,getDisabledMinutes:function(e){for(var t=[],i=1;i<60;i++)t.push(i);return t},onChangeStart:function(e,t){console.log("dateindex",t),console.log("dateString",e);var i=r()(e).format("HH:mm");console.log("datetimes",i),this.index_row[t].starttime=i,this.index_row_post[t].starttime=i,this.$forceUpdate()},onChangeEnd:function(e,t){console.log("dateindex",t),console.log("dateString",e);var i=r()(e).format("HH:mm");console.log("datetimes",i);var s=this.index_row[t].starttime;console.log("start",s),this.index_row[t].endtime=i,this.index_row_post[t].endtime=i,this.$forceUpdate()},handleOks:function(e,t){var i=this;console.log("indexx",t),console.log("valueaa",e);var s="",a="";this.index_row_key[t]=e,console.log(this.index_row_key),e.length>0?e.forEach((function(n,l){console.log(n,l);var r=n.split("-");s=r[1]+","+s,a=r[0]+","+a,-1==t?(i.name=s,i.uid=a,i.index_key_arr=e):(i.index_row[t].name=s,i.index_row[t].uid=a,i.index_row[t].index_key=e,i.index_row_post[t].name=s,i.index_row_post[t].uid=a,i.index_row_post[t].index_key=e)})):-1==t?(this.name="",this.uid="",this.index_key_arr=e):(this.index_row[t].name="",this.index_row[t].uid="",this.index_row[t].index_key=e,this.index_row_post[t].name="",this.index_row_post[t].uid="",this.index_row_post[t].index_key=e)}}},c=d,h=(i("4763"),i("0c7c")),m=Object(h["a"])(c,s,a,!1,null,"f40b2176",null);t["default"]=m.exports},4763:function(e,t,i){"use strict";i("5059")},5059:function(e,t,i){},"58c8":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-drawer",{attrs:{title:e.title,width:1100,visible:e.visible},on:{close:e.handleCancel}},[s("div",{staticClass:"package-list"},[s("a-card",{staticStyle:{width:"100%","max-height":"320px"},attrs:{bordered:!1}},[s("label",{staticClass:"ant-card-head-title",staticStyle:{"font-size":"16px","margin-left":"19px","font-weight":"550"}},[e._v("分类设置")]),s("div",{staticClass:"card-set"},[s("span",{staticClass:"ant-form-item-required"},[e._v("分类名称:")]),s("a-input",{staticStyle:{width:"45%","margin-left":"24px"},attrs:{placeholder:"请输入分类名称"},model:{value:e.group.name,callback:function(t){e.$set(e.group,"name",t)},expression:"group.name"}})],1),e.is_timely?s("div",{staticClass:"card-set"},[s("label",{staticClass:"ant-form-item-required"},[e._v("及时接单时间:")]),s("a-time-picker",{staticStyle:{width:"15%","margin-left":"8px"},attrs:{value:e.moment(e.group.timely_time,"HH:mm"),format:"HH:mm",placeholder:"请选择及时接单时间",allowClear:!1},on:{change:e.onTimeChange}}),s("p",{staticStyle:{"font-size":"15px",color:"#a09d9d","margin-left":"85px","font-weight":"400","margin-top":"10px"}},[e._v("格式是小时/分钟")])],1):e._e(),s("div",{staticClass:"card-set"},[s("label",[e._v("排序值:")]),s("a-input",{staticStyle:{width:"45%","margin-left":"50px"},attrs:{placeholder:"不填则默认为0"},model:{value:e.group.sort,callback:function(t){e.$set(e.group,"sort",t)},expression:"group.sort"}}),s("p",{staticStyle:{"font-size":"15px",color:"#a09d9d","margin-left":"85px","font-weight":"400","margin-top":"10px"}},[e._v("排序值越大展示越靠前")])],1),s("div",{staticClass:"card-set"},[s("span",{staticClass:"ant-form-item-required"},[e._v("状态:")]),s("a-radio-group",{staticStyle:{"margin-left":"50px"},model:{value:e.group.status,callback:function(t){e.$set(e.group,"status",t)},expression:"group.status"}},[s("a-radio",{attrs:{value:1}},[e._v(" 开启 ")]),s("a-radio",{attrs:{value:2}},[e._v(" 关闭 ")])],1)],1)]),s("a-card",{staticStyle:{width:"100%",height:"100%",transform:"translateY(-10px)"},attrs:{bordered:!1}},[s("label",{staticClass:"ant-card-head-title",staticStyle:{"font-size":"16px","margin-left":"19px","font-weight":"550"}},[e._v("负责人设置"),s("p",{staticStyle:{"font-size":"15px",color:"#a09d9d",float:"right","margin-left":"10px","font-weight":"400"}},[e._v("(如不需要自动指派给工作人员不设置即可)")])]),s("div",{staticClass:"card-set"},[s("label",[e._v("类型:")]),s("a-radio-group",{staticStyle:{"margin-left":"50px"},on:{change:e.onChange},model:{value:e.group.type,callback:function(t){e.$set(e.group,"type",t)},expression:"group.type"}},[s("a-radio",{attrs:{value:1}},[e._v(" 单人 ")]),s("a-radio",{attrs:{value:2}},[e._v(" 多人 ")])],1)],1),s("div",{staticClass:"card-set"},[s("label",[e._v("负责人:")]),1==e.is_show1?s("a-button",{staticStyle:{"margin-left":"35px"},attrs:{icon:"plus"},on:{click:function(t){return e.$refs.createModals.add(e.group.type)}}},[e._v("添加")]):e._e(),2==e.is_show1?s("a-button",{staticStyle:{"margin-left":"35px"},attrs:{icon:"plus"},on:{click:function(t){return e.$refs.createModal.add(e.group.type)}}},[e._v("添加")]):e._e(),2==e.is_show1?s("a-input",{staticStyle:{width:"100px","margin-left":"10px",border:"0px"},attrs:{disabled:""},model:{value:e.usernmae,callback:function(t){e.usernmae=t},expression:"usernmae"}}):e._e(),s("a-input",{staticStyle:{width:"100px","margin-left":"10px",border:"0px"},attrs:{hidden:""},model:{value:e.group.uid,callback:function(t){e.$set(e.group,"uid",t)},expression:"group.uid"}})],1),e.is_show?s("div",{staticStyle:{"background-color":"#ececec",padding:"1px",width:"95%","margin-left":"20px"}},[s("a-row",{attrs:{gutter:0}},[s("a-col",{staticStyle:{width:"14.28%"},attrs:{span:3}},[s("a-card",{attrs:{title:"周一",bordered:!1}},[""!=e.weeklist1[0].name?s("a",{attrs:{slot:"extra"},on:{click:function(t){return e.$refs.createModals.edit(1,e.group.id,e.scheduling.id1,e.group.type)}},slot:"extra"},[s("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):e._e(),""==e.weeklist1[0].name?s("p",[e._v("--")]):e._l(e.weeklist1,(function(t,i){return s("div",{staticStyle:{"padding-left":"20px"}},[s("span",[e._v(e._s(t.time))]),s("br"),s("a-tooltip",{attrs:{trigger:["hover","focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[s("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(t.name1)+" ")]),s("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:t.name,placeholder:"","max-length":20}})],1)],1)}))],2)],1),s("a-col",{staticStyle:{width:"14.28%"},attrs:{span:3}},[s("a-card",{attrs:{title:"周二",bordered:!1}},[""!=e.weeklist2[0].name?s("a",{attrs:{slot:"extra"},on:{click:function(t){return e.$refs.createModals.edit(2,e.group.id,e.scheduling.id2,e.group.type)}},slot:"extra"},[s("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):e._e(),""==e.weeklist2[0].name?s("p",[e._v("--")]):e._l(e.weeklist2,(function(t,i){return s("div",{staticStyle:{"padding-left":"20px"}},[s("span",[e._v(e._s(t.time))]),s("br"),s("a-tooltip",{attrs:{trigger:["hover","focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[s("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(t.name1)+" ")]),s("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:t.name,placeholder:"","max-length":20}})],1)],1)}))],2)],1),s("a-col",{staticStyle:{width:"14.28%"},attrs:{span:3}},[s("a-card",{attrs:{title:"周三",bordered:!1}},[""!=e.weeklist3[0].name?s("a",{attrs:{slot:"extra"},on:{click:function(t){return e.$refs.createModals.edit(3,e.group.id,e.scheduling.id3,e.group.type)}},slot:"extra"},[s("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):e._e(),""==e.weeklist3[0].name?s("p",[e._v("--")]):e._l(e.weeklist3,(function(t,i){return s("div",{staticStyle:{"padding-left":"20px"}},[s("span",[e._v(e._s(t.time))]),s("br"),s("a-tooltip",{attrs:{trigger:["hover","focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[s("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(t.name1)+" ")]),s("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:t.name,placeholder:"","max-length":20}})],1)],1)}))],2)],1),s("a-col",{staticStyle:{width:"14.28%"},attrs:{span:3}},[s("a-card",{attrs:{title:"周四",bordered:!1}},[""!=e.weeklist4[0].name?s("a",{attrs:{slot:"extra"},on:{click:function(t){return e.$refs.createModals.edit(4,e.group.id,e.scheduling.id4,e.group.type)}},slot:"extra"},[s("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):e._e(),""==e.weeklist4[0].name?s("p",[e._v("--")]):e._l(e.weeklist4,(function(t,i){return s("div",{staticStyle:{"padding-left":"20px"}},[s("span",[e._v(e._s(t.time))]),s("br"),s("a-tooltip",{attrs:{trigger:["hover","focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[s("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(t.name1)+" ")]),s("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:t.name,placeholder:"","max-length":20}})],1)],1)}))],2)],1),s("a-col",{staticStyle:{width:"14.28%"},attrs:{span:3}},[s("a-card",{attrs:{title:"周五",bordered:!1}},[""!=e.weeklist5[0].name?s("a",{attrs:{slot:"extra"},on:{click:function(t){return e.$refs.createModals.edit(5,e.group.id,e.scheduling.id5,e.group.type)}},slot:"extra"},[s("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):e._e(),""==e.weeklist5[0].name?s("p",[e._v("--")]):e._l(e.weeklist5,(function(t,i){return s("div",{staticStyle:{"padding-left":"20px"}},[s("span",[e._v(e._s(t.time))]),s("br"),s("a-tooltip",{attrs:{trigger:["hover","focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[s("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(t.name1)+" ")]),s("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:t.name,placeholder:"","max-length":20}})],1)],1)}))],2)],1),s("a-col",{staticStyle:{width:"14.28%"},attrs:{span:3}},[s("a-card",{attrs:{title:"周六",bordered:!1}},[""!=e.weeklist6[0].name?s("a",{attrs:{slot:"extra"},on:{click:function(t){return e.$refs.createModals.edit(6,e.group.id,e.scheduling.id6,e.group.type)}},slot:"extra"},[s("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):e._e(),""==e.weeklist6[0].name?s("p",[e._v("--")]):e._l(e.weeklist6,(function(t,i){return s("div",{staticStyle:{"padding-left":"20px"}},[s("span",[e._v(e._s(t.time))]),s("br"),s("a-tooltip",{attrs:{trigger:["hover","focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[s("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(t.name1)+" ")]),s("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:t.name,placeholder:"","max-length":20}})],1)],1)}))],2)],1),s("a-col",{staticStyle:{width:"14.28%"},attrs:{span:3}},[s("a-card",{attrs:{title:"周日",bordered:!1}},[""!=e.weeklist0[0].name?s("a",{attrs:{slot:"extra"},on:{click:function(t){return e.$refs.createModals.edit(7,e.group.id,e.scheduling.id7,e.group.type)}},slot:"extra"},[s("img",{staticStyle:{width:"20px"},attrs:{src:i("6dad")}})]):e._e(),""==e.weeklist0[0].name?s("p",[e._v("--")]):e._l(e.weeklist0,(function(t,i){return s("div",{staticStyle:{"padding-left":"20px"}},[s("span",[e._v(e._s(t.time))]),s("br"),s("a-tooltip",{attrs:{trigger:["hover","focus"],placement:"topLeft","overlay-class-name":"numeric-input"}},[s("span",{staticClass:"numeric-input-title",attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(t.name1)+" ")]),s("a-input",{staticStyle:{width:"85px","margin-left":"-10px",border:"0","text-align":"center"},attrs:{value:t.name,placeholder:"","max-length":20}})],1)],1)}))],2)],1)],1)],1):e._e()]),s("choose-tree",{ref:"createModal",attrs:{height:800,width:1e3},on:{ok:e.handleOks}}),s("choose-scheduling",{ref:"createModals",attrs:{height:800,width:1e3},on:{ok:e.handleOk}}),s("div",{staticClass:"btn_footer"},[s("a-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"info"},on:{click:e.handleCancel}},[e._v("取消")]),s("a-button",{attrs:{type:"primary",loading:e.confirmLoading},on:{click:e.handleSubmit}},[e._v("确定")])],1)],1)])},a=[],n=(i("d3b7"),i("159b"),i("a9e3"),i("ac1f"),i("1276"),i("c1df")),l=i.n(n),r=i("a0e0"),o=i("af3c"),d=i("3e09"),c=[{title:"周一",dataIndex:"cate_name",key:"cate_name"},{title:"周二",dataIndex:"sort",key:"sort"},{title:"周三",dataIndex:"cate_name",key:"cate_name"},{title:"周四",dataIndex:"sort",key:"sort"},{title:"周五",dataIndex:"cate_name",key:"cate_name"},{title:"周六",dataIndex:"sort",key:"sort"},{title:"周日",dataIndex:"cate_name",key:"cate_name"}],h={name:"newRepairCateChildInfo",components:{chooseTree:o["default"],chooseScheduling:d["default"]},data:function(){return{week_show:!0,one:"00:00~00:00",weeklist1:[{name1:"",name:"",time:""}],weeklist2:[{name1:"",name:"",time:""}],weeklist3:[{name1:"",name:"",time:""}],weeklist4:[{name1:"",name:"",time:""}],weeklist5:[{name1:"",name:"",time:""}],weeklist6:[{name1:"",name:"",time:""}],weeklist0:[{name1:"",name:"",time:""}],scheduling:{id1:[],id2:[],id3:[],id4:[],id5:[],id6:[],id7:[]},data:[],is_show:!1,is_show1:2,columns:c,title:"添加",usernmae:"",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},value:null,color:"",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),group:{id:0,uid:"",director_id:"",name:"",parent_id:0,sort:"",type:1,status:1,timely_time:"00:00"},id:0,is_timely:!1}},methods:{moment:l.a,onTimeChange:function(e,t){this.group.timely_time=t},add:function(e){this.scheduling={id1:[],id2:[],id3:[],id4:[],id5:[],id6:[],id7:[]},this.title="添加",this.visible=!0,this.usernmae="",this.is_show=!1,this.is_show1=2,this.week_show=!0,this.group={id:0,name:"",sort:"",type:1,uid:"",director_id:"",parent_id:e,status:1,timely_time:"00:00"},this.weeklist1=[{name1:"",name:"",time:""}],this.weeklist2=[{name1:"",name:"",time:""}],this.weeklist3=[{name1:"",name:"",time:""}],this.weeklist4=[{name1:"",name:"",time:""}],this.weeklist5=[{name1:"",name:"",time:""}],this.weeklist6=[{name1:"",name:"",time:""}],this.weeklist0=[{name1:"",name:"",time:""}],this.isTimely()},edit:function(e){this.week_show=!1,this.visible=!0,this.id=e,this.scheduling={id1:[],id2:[],id3:[],id4:[],id5:[],id6:[],id7:[]},this.weeklist1=[{name1:"",name:"",time:""}],this.weeklist2=[{name1:"",name:"",time:""}],this.weeklist3=[{name1:"",name:"",time:""}],this.weeklist4=[{name1:"",name:"",time:""}],this.weeklist5=[{name1:"",name:"",time:""}],this.weeklist6=[{name1:"",name:"",time:""}],this.weeklist0=[{name1:"",name:"",time:""}],this.isTimely(),this.getCateInfo(),this.id>0?this.title="编辑":this.title="添加"},isTimely:function(){var e=this;this.request(r["a"].newRepairIsTimely).then((function(t){e.is_timely=t.is_timely}))},getCateInfo:function(){var e=this;this.request(r["a"].getCateInfo,{id:this.id}).then((function(t){e.group=t,2==t.type?(e.is_show=!0,e.is_show1=1,e.usernmae="",e.scheduling=t.scheduling,""!=t.director_id&&t.director_id.length>0?e.request(r["a"].getDirectorLists,{id:t.director_id}).then((function(t){var i=0,s=0,a=0,n=0,l=0,r=0,o=0;t.forEach((function(t,d){e.week_show=!1,0==t.type?(i+=1,e.weeklist0.push(t.child),1==i&&(e.$delete(e.weeklist0,0),i+=1)):1==t.type?(s+=1,e.weeklist1.push(t.child),1==s&&(e.$delete(e.weeklist1,0),s+=1)):2==t.type?(e.weeklist2.push(t.child),a+=1,1==a&&(e.$delete(e.weeklist2,0),a+=1)):3==t.type?(e.weeklist3.push(t.child),n+=1,1==n&&(e.$delete(e.weeklist3,0),n+=1)):4==t.type?(e.weeklist4.push(t.child),l+=1,1==l&&(e.$delete(e.weeklist4,0),l+=1)):5==t.type?(e.weeklist5.push(t.child),r+=1,1==r&&(e.$delete(e.weeklist5,0),r+=1)):6==t.type&&(e.weeklist6.push(t.child),o+=1,1==o&&(e.$delete(e.weeklist6,0),o+=1))}))})):e.week_show=!0):(e.is_show=!1,e.is_show1=2,e.usernmae=t.usernmae)}))},handleSubmit:function(){var e=this;if(this.is_timely){if(!this.group.timely_time||Number(this.group.timely_time.split(":")[0])<=0&&Number(this.group.timely_time.split(":")[1])<=0)return this.$message.error("请选择及时接单时间（大于0）"),!1}else this.group.timely_time="";this.confirmLoading=!0,this.group.scheduling=this.scheduling;var t=r["a"].addCate;this.id>0&&(this.group.id=this.id,t=r["a"].editCate),this.request(t,this.group).then((function(t){e.id>0?e.$message.success("编辑成功"):e.$message.success("添加成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok")}),1500)})).catch((function(t){e.confirmLoading=!1}))},onChange:function(e){var t=e.target.value;1==t?(this.is_show=!1,this.is_show1=2):(this.is_show=!0,this.is_show1=1,this.week_show=!0)},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},handleOks:function(e){var t=e[0],i=t.split("-");this.usernmae=i[1],this.group.uid=i[0]},handleOk:function(e){var t=this;console.log("value",e),""!=e&&e.length>0&&e.forEach((function(e,i){1==e.type?(t.scheduling.id1=e.id,t.weeklist1=[{name1:"",name:"",time:""}]):2==e.type?(t.scheduling.id2=e.id,t.weeklist2=[{name1:"",name:"",time:""}]):3==e.type?(t.scheduling.id3=e.id,t.weeklist3=[{name1:"",name:"",time:""}]):4==e.type?(t.scheduling.id4=e.id,t.weeklist4=[{name1:"",name:"",time:""}]):5==e.type?(t.scheduling.id5=e.id,t.weeklist5=[{name1:"",name:"",time:""}]):6==e.type?(t.scheduling.id6=e.id,t.weeklist6=[{name1:"",name:"",time:""}]):7==e.type&&(t.scheduling.id7=e.id,t.weeklist0=[{name1:"",name:"",time:""}]),t.request(r["a"].getDirectorLists,{id:e.id}).then((function(e){var i=0,s=0,a=0,n=0,l=0,r=0,o=0;e.forEach((function(e,d){t.week_show=!1,0==e.type?(i+=1,t.weeklist0.push(e.child),1==i&&(t.$delete(t.weeklist0,0),i+=1)):1==e.type?(s+=1,t.weeklist1.push(e.child),1==s&&(t.$delete(t.weeklist1,0),s+=1)):2==e.type?(t.weeklist2.push(e.child),a+=1,1==a&&(t.$delete(t.weeklist2,0),a+=1)):3==e.type?(t.weeklist3.push(e.child),n+=1,1==n&&(t.$delete(t.weeklist3,0),n+=1)):4==e.type?(t.weeklist4.push(e.child),l+=1,1==l&&(t.$delete(t.weeklist4,0),l+=1)):5==e.type?(t.weeklist5.push(e.child),r+=1,1==r&&(t.$delete(t.weeklist5,0),r+=1)):6==e.type&&(t.weeklist6.push(e.child),o+=1,1==o&&(t.$delete(t.weeklist6,0),o+=1))}))}))}))}}},m=h,u=(i("63d5"),i("0c7c")),p=Object(u["a"])(m,s,a,!1,null,"0facd22a",null);t["default"]=p.exports},"63d5":function(e,t,i){"use strict";i("a4c2")},"6dad":function(e,t){e.exports="data:image/png;base64,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"},a4c2:function(e,t,i){},af3c:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:600,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[e.visible&&e.firstKey?i("a-tree",{attrs:{checkable:e.is_show,defaultExpandedKeys:[e.firstKey],"tree-data":e.treeData,"default-selected-keys":[],"default-checked-keys":e.checkedKeysArr,"auto-expand-parent":e.show,"default-expand-parent":e.show},on:{select:e.onSelect,check:e.onCheck}}):e._e()],1)},a=[],n=i("a0e0"),l={data:function(){return{show:!0,is_show:!1,title:"添加",treeData:[],visible:!1,confirmLoading:!1,id:0,type:0,selectedKey:[],checkedKey:[],checkedKeysArr:[],checkedKeysArrTemp:[],index:0,firstKey:""}},methods:{add:function(e,t,i){this.selectedKey=[],this.checkedKey=[],this.checkedKeysArrTemp=[],void 0!=i&&i&&i.length>0?this.checkedKeysArrTemp=i:this.checkedKeysArrTemp=[],this.checkedKey=this.checkedKeysArrTemp,console.log("checkedKeysArr",i),this.index=t,this.type=e,this.is_show=2==e,console.log("type",e,"is_show",this.is_show),this.title="添加",this.getDirectortree()},onSelect:function(e,t){this.selectedKey=e,console.log("selected",e,t)},onCheck:function(e,t){this.checkedKey=e,console.log("onCheck",e,t)},getDirectortree:function(){var e=this;this.request(n["a"].getDirectortree).then((function(t){e.treeData=t.res,console.log("resTree",t.res),t.res[0].key&&(e.firstKey=t.res[0].key),e.checkedKeysArr=e.checkedKeysArrTemp,e.visible=!0,e.show=!0,setTimeout((function(){e.show=!0}),5e3)}))},handleSubmit:function(){this.visible=!1,this.is_show=!1,this.confirmLoading=!1,console.log("type",this.type),1==this.type?(console.log("selectedKey",this.selectedKey,this.index),this.$emit("ok",this.selectedKey,this.index)):(console.log("checkedKey",this.checkedKey,this.index),this.$emit("ok",this.checkedKey,this.index))},handleCancel:function(){this.selectedKey=[],this.checkedKey=[],this.visible=!1,this.is_show=!1,this.checkedKeysArr=[],this.checkedKeysArrTemp=[]}}},r=l,o=(i("2ec0"),i("0c7c")),d=Object(o["a"])(r,s,a,!1,null,"f5018bba",null);t["default"]=d.exports}}]);