(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7b6c666","chunk-e6c5efd4"],{"2ec0":function(e,t,i){"use strict";i("aa31")},"3e09":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[i("a-alert",{staticStyle:{"margin-top":"-10px","margin-bottom":"10px"},attrs:{message:"系统默认生成一条每天24小时（00:00~00:00）的数据，当时间点不在所新增的时段内，业主提交工单后，将自动指派给“24小时”的物业工作人员。",type:"info"}}),i("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{label:"固定时段",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[i("a-col",{attrs:{span:24}},[i("a-time-picker",{attrs:{value:e.moment(e.starttime,"HH:mm"),disabled:"",format:"HH:mm",allowClear:e.allow_clear}}),e._v(" ~ "),i("a-time-picker",{attrs:{value:e.moment(e.endtime,"HH:mm"),disabled:"",format:"HH:mm",allowClear:e.allow_clear}}),i("a-input",{staticStyle:{width:"150px"},on:{click:function(t){return e.$refs.createModal.add(e.defaulttype,-1,e.index_key_arr)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),i("a-input",{attrs:{hidden:""},model:{value:e.uid,callback:function(t){e.uid=t},expression:"uid"}})],1)],1),e._l(e.index_row,(function(t,s){return i("div",{staticClass:"form_box"},[i("a-form-item",{staticStyle:{"margin-left":"250px"}},[i("a-col",{attrs:{span:20}},[i("a-time-picker",{attrs:{value:e.moment(t.starttime,"HH:mm"),disabledMinutes:e.getDisabledMinutes,hideDisabledOptions:"",format:"HH:mm",allowClear:e.allow_clear},on:{change:function(t){return e.onChangeStart(t,s)}}}),e._v(" ~ "),i("a-time-picker",{attrs:{value:e.moment(t.endtime,"HH:mm"),disabledMinutes:e.getDisabledMinutes,hideDisabledOptions:"",format:"HH:mm",allowClear:e.allow_clear},on:{change:function(t){return e.onChangeEnd(t,s)}}}),i("a-input",{staticStyle:{width:"150px"},on:{click:function(i){return e.$refs.createModal.add(e.defaulttype,s,t.index_key)}},model:{value:t.name,callback:function(i){e.$set(t,"name",i)},expression:"item.name"}}),i("a-input",{attrs:{hidden:""},model:{value:t.uid,callback:function(i){e.$set(t,"uid",i)},expression:"item.uid"}})],1),i("a-col",{staticStyle:{"margin-left":"-50px"},attrs:{span:4}},[i("a",{on:{click:function(t){return e.del_row(s)}}},[e._v("删除")])])],1)],1)})),i("div",{staticClass:"icon_1 margin_top_10",staticStyle:{"margin-left":"250px","margin-bottom":"20px"}},[i("a",{on:{click:e.add_row}},[e._v("添加")])]),i("a-form-item",{attrs:{label:"适用周期",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},e._l(e.weeklist,(function(t,s){return i("div",{staticClass:"btn-choose",class:t.focus?"colorweek":"",on:{click:function(i){return e.oneClick(t)}}},[e._v(e._s(t.name))])})),0)],2)],1),i("choose-trees",{ref:"createModal",attrs:{height:800,width:1e3},on:{ok:e.handleOks}})],1)},n=[],o=(i("b0c0"),i("a434"),i("d81d"),i("d3b7"),i("159b"),i("caad"),i("2532"),i("ac1f"),i("5319"),i("a0e0")),a=i("c1df"),r=i.n(a),d=i("af3c"),c={name:"chooseScheduling",components:{chooseTrees:d["default"]},data:function(){return{hide1:0,time:"00:00",title:"添加",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},value:null,color:"",visible:!1,confirmLoading:!1,form:this.$form.createForm(this),name:"",uid:0,director_id:[],starttime:"00:00",endtime:"00:00",id:0,defaulid:0,key:0,allow_clear:!1,index_row:[{id:0,uid:"",name:"",starttime:"00:00",endtime:"00:00",index_key:[]}],index_row_post:[],defaulttype:1,defaul_date_type:"",index_row_key:[],index_key_arr:[],weeklist:[{name:"周一",focus:!1,key:1},{name:"周二",focus:!1,key:2},{name:"周三",focus:!1,key:3},{name:"周四",focus:!1,key:4},{name:"周五",focus:!1,key:5},{name:"周六",focus:!1,key:6},{name:"周日",focus:!1,key:7}]}},methods:{add:function(e){this.title="添加负责人",this.visible=!0,this.starttime="00:00",this.endtime="00:00",this.name="",this.uid="",this.key=0,this.id=0,this.director_id=[],this.index_row=[],this.index_row_post=[],this.defaulid=0,this.defaulttype=e,this.index_row_key=[],this.index_key_arr=[],this.defaul_date_type="",this.weeklist=[{name:"周一",focus:!1,key:1},{name:"周二",focus:!1,key:2},{name:"周三",focus:!1,key:3},{name:"周四",focus:!1,key:4},{name:"周五",focus:!1,key:5},{name:"周六",focus:!1,key:6},{name:"周日",focus:!1,key:7}]},add_row:function(){var e={id:0,uid:"",name:"",starttime:"00:00",endtime:"00:00",index_key:[]};this.index_row.push(e),this.index_row_post.push(e)},del_row:function(e){console.log("index",e),e=parseInt(e),this.index_row.splice(e,1),this.index_row_post.map((function(t,i){i==e&&(t.isdel=1)})),console.log("index_row",this.index_row)},edit:function(e,t,i,s){this.title="编辑负责人",this.visible=!0,this.id=t,this.director_id=i,this.index_row_key=[],this.index_key_arr=[],this.key=e,this.defaulttype=s,this.defaulid=0,this.index_row=[],this.index_row_post=[],this.starttime="00:00",this.endtime="00:00",this.name="",this.uid="",this.defaul_date_type="",this.getScheduling(),this.weeklist.forEach((function(t,i){t.key==e?t.focus=!0:t.focus=!1}))},getScheduling:function(){var e=this;console.log("key",this.key),console.log("id",this.id),console.log("director_id",this.director_id),0!=this.key&&this.director_id.length>0&&this.request(o["a"].getScheduling,{cate_id:this.id,key:this.key,director_id:this.director_id}).then((function(t){console.log("res111",t),t&&t.forEach((function(t,i){if("0:00"!=t.start_time&&"00:00"!=t.start_time||"0:00"!=t.end_time&&"00:00"!=t.end_time){var s={id:t.id,uid:t.uid,name:t.name,starttime:t.start_time,endtime:t.end_time,index_key:t.index_key,date_type:t.type};e.index_row.push(s),e.index_row_post.push(s)}else e.name=t.name,e.uid=t.uid,e.index_key_arr=t.index_key,e.defaulid=t.id,e.defaul_date_type=t.type}))}))},handleSubmit:function(){var e=this,t={id:this.defaulid,uid:this.uid,name:this.name,starttime:"00:00",endtime:"00:00",is_defult:1,date_type:this.defaul_date_type};if(this.index_row.length>0&&(""==this.uid||0==this.uid||"0"==this.uid))return this.$message.error("固定时段第一个未选择人员！"),!1;var i=!1;if(this.index_row.forEach((function(t,s){var n=s+2;if(!t.starttime.includes(":")||!t.endtime.includes(":"))return i=!0,e.$message.error("第 "+n+"个固定时段 时间段设置错误！"),!1;var o=t.starttime.replace(":","");o=parseInt(o);var a=t.endtime.replace(":","");return a=parseInt(a),0==o&&0==a?(i=!0,e.$message.error("第"+n+"个固定时段设置重复了！"),!1):a<o?(i=!0,e.$message.error("第"+n+"个固定时段设置的 结束时间 不能小于 开始时间！"),!1):void 0})),i)return!1;console.log("itme",this.index_row),console.log("index_row_post",this.index_row_post),console.log("week",this.weeklist),this.confirmLoading=!0,this.request(o["a"].addDirector,{item:this.index_row_post,date_type:this.weeklist,defult:t}).then((function(t){t?e.$message.success("操作成功"):e.$message.success("操作失败"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok",t.res)}),1500)})).catch((function(t){e.confirmLoading=!1}))},handleCancel:function(){var e=this;this.visible=!1,this.defaulttype=1,setTimeout((function(){e.id="0",e.form=e.$form.createForm(e)}),500)},oneClick:function(e){0==e.focus?e.focus=!0:e.focus=!1},moment:r.a,getDisabledMinutes:function(e){for(var t=[],i=1;i<60;i++)t.push(i);return t},onChangeStart:function(e,t){console.log("dateindex",t),console.log("dateString",e);var i=r()(e).format("HH:mm");console.log("datetimes",i),this.index_row[t].starttime=i,this.index_row_post[t].starttime=i,this.$forceUpdate()},onChangeEnd:function(e,t){console.log("dateindex",t),console.log("dateString",e);var i=r()(e).format("HH:mm");console.log("datetimes",i);var s=this.index_row[t].starttime;console.log("start",s),this.index_row[t].endtime=i,this.index_row_post[t].endtime=i,this.$forceUpdate()},handleOks:function(e,t){var i=this;console.log("indexx",t),console.log("valueaa",e);var s="",n="";this.index_row_key[t]=e,console.log(this.index_row_key),e.length>0?e.forEach((function(o,a){console.log(o,a);var r=o.split("-");s=r[1]+","+s,n=r[0]+","+n,-1==t?(i.name=s,i.uid=n,i.index_key_arr=e):(i.index_row[t].name=s,i.index_row[t].uid=n,i.index_row[t].index_key=e,i.index_row_post[t].name=s,i.index_row_post[t].uid=n,i.index_row_post[t].index_key=e)})):-1==t?(this.name="",this.uid="",this.index_key_arr=e):(this.index_row[t].name="",this.index_row[t].uid="",this.index_row[t].index_key=e,this.index_row_post[t].name="",this.index_row_post[t].uid="",this.index_row_post[t].index_key=e)}}},l=c,h=(i("4763"),i("0c7c")),m=Object(h["a"])(l,s,n,!1,null,"f40b2176",null);t["default"]=m.exports},4763:function(e,t,i){"use strict";i("98a6")},"98a6":function(e,t,i){},aa31:function(e,t,i){},af3c:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:600,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[e.visible&&e.firstKey?i("a-tree",{attrs:{checkable:e.is_show,defaultExpandedKeys:[e.firstKey],"tree-data":e.treeData,"default-selected-keys":[],"default-checked-keys":e.checkedKeysArr,"auto-expand-parent":e.show,"default-expand-parent":e.show},on:{select:e.onSelect,check:e.onCheck}}):e._e()],1)},n=[],o=i("a0e0"),a={data:function(){return{show:!0,is_show:!1,title:"添加",treeData:[],visible:!1,confirmLoading:!1,id:0,type:0,selectedKey:[],checkedKey:[],checkedKeysArr:[],checkedKeysArrTemp:[],index:0,firstKey:""}},methods:{add:function(e,t,i){this.selectedKey=[],this.checkedKey=[],this.checkedKeysArrTemp=[],void 0!=i&&i&&i.length>0?this.checkedKeysArrTemp=i:this.checkedKeysArrTemp=[],this.checkedKey=this.checkedKeysArrTemp,console.log("checkedKeysArr",i),this.index=t,this.type=e,this.is_show=2==e,console.log("type",e,"is_show",this.is_show),this.title="添加",this.getDirectortree()},onSelect:function(e,t){this.selectedKey=e,console.log("selected",e,t)},onCheck:function(e,t){this.checkedKey=e,console.log("onCheck",e,t)},getDirectortree:function(){var e=this;this.request(o["a"].getDirectortree).then((function(t){e.treeData=t.res,console.log("resTree",t.res),t.res[0].key&&(e.firstKey=t.res[0].key),e.checkedKeysArr=e.checkedKeysArrTemp,e.visible=!0,e.show=!0,setTimeout((function(){e.show=!0}),5e3)}))},handleSubmit:function(){this.visible=!1,this.is_show=!1,this.confirmLoading=!1,console.log("type",this.type),1==this.type?(console.log("selectedKey",this.selectedKey,this.index),this.$emit("ok",this.selectedKey,this.index)):(console.log("checkedKey",this.checkedKey,this.index),this.$emit("ok",this.checkedKey,this.index))},handleCancel:function(){this.selectedKey=[],this.checkedKey=[],this.visible=!1,this.is_show=!1,this.checkedKeysArr=[],this.checkedKeysArrTemp=[]}}},r=a,d=(i("2ec0"),i("0c7c")),c=Object(d["a"])(r,s,n,!1,null,"f5018bba",null);t["default"]=c.exports}}]);