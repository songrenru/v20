(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c5251"],{"3e9b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1e3,height:640,visible:e.visible},on:{cancel:e.handelCancle,ok:e.handleSubmit}},[a("div",[a("a-tabs",{attrs:{"default-active-key":"1","hide-add":""},on:{change:e.editOne,edit:e.onEdit},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},[a("a-tab-pane",{key:"1",attrs:{tab:e.tab_name}},[a("a-table",{attrs:{columns:e.columns,"data-source":e.list,scroll:{y:440}},scopedSlots:e._u([{key:"sort",fn:function(t,s){return a("span",{},[e._v(e._s(s.sort))])}},{key:"name",fn:function(t,s){return a("span",{},[e._v(e._s(s.name))])}},{key:"subname",fn:function(t,s){return a("span",{},[e._v(e._s(s.subname))])}},{key:"type",fn:function(t,s){return a("span",{},[e._v(e._s(s.type_txt))])}},{key:"start_time",fn:function(t,s){return a("span",{},[e._v(e._s(s.start_time))])}},{key:"end_time",fn:function(t,s){return a("span",{},[e._v(e._s(s.end_time))])}},{key:"related_goods",fn:function(t,s){return a("a-button",{attrs:{type:"dashed"},on:{click:function(t){return e.getRelatedGoods(s.id,s.type)}}},[e._v(" 关联商品 ")])}},{key:"action",fn:function(t,s){return a("span",{},[a("a",{on:{click:function(t){return e.getEdit(s.id)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确认删除？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(t){return e.delOne(s.id)}}},[a("a",[e._v("删除")])])],1)}}])})],1),a("a-tab-pane",{key:"2",attrs:{tab:"添加"},on:{tabClick:e.editOne}},[a("a-form",e._b({attrs:{id:"components-form-demo-validate-other1",form:e.form}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"活动标题",help:"标题字数不超过4个字符"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入活动标题"}]}],expression:"['name', {rules: [{required: true, message: '请输入活动标题'}]}]"}],attrs:{placeholder:"请输入活动标题"}})],1),a("a-form-item",{attrs:{label:"副标题",help:"标题字数不超过6个字符"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["subname",{rules:[{required:!0,message:"请输入活动副标题"}]}],expression:"['subname', {rules: [{required: true, message: '请输入活动副标题'}]}]"}],attrs:{placeholder:"请输入活动副标题"}})],1),a("a-form-item",{attrs:{label:"活动类型",help:"活动商品低于四个则不再首页展示"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"请选择活动类型"}]}],expression:"['type', {rules: [{required: true, message: '请选择活动类型'}]}]"}],attrs:{placeholder:"请选择活动类型"}},[a("a-select-option",{attrs:{value:"group"}},[e._v(" 拼团活动 ")]),a("a-select-option",{attrs:{value:"bargain"}},[e._v(" 砍价活动 ")]),a("a-select-option",{attrs:{value:"limited"}},[e._v(" 秒杀活动 ")]),a("a-select-option",{attrs:{value:"live"}},[e._v(" 直播活动 ")]),a("a-select-option",{attrs:{value:"video"}},[e._v(" 短视频活动 ")])],1)],1),a("a-form-item",{attrs:{label:"展示时间"}},[a("a-range-picker",{staticStyle:{width:"320px"},attrs:{format:"YYYY-MM-DD HH:mm",ranges:{"今日":[e.moment(),e.moment()],"昨日":[e.moment().subtract(1,"days"),e.moment().subtract(1,"days")],"近七天":[e.moment().subtract(7,"days"),e.moment()],"近30天":[e.moment().subtract(30,"days"),e.moment()]},allowClear:!0},on:{change:e.dateOnChange},model:{value:e.search_data,callback:function(t){e.search_data=t},expression:"search_data"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:0}],expression:"['sort', {initialValue:0}]"}],attrs:{min:0}}),a("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1),e.edit_show?a("a-tab-pane",{key:3,attrs:{tab:"编辑"}},[a("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"活动标题"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.name,rules:[{required:!0,message:"请输入活动标题"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入活动标题'}]}]"}],attrs:{placeholder:"请输入活动标题",max:4}})],1),a("a-form-item",{attrs:{label:"副标题"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["subname",{initialValue:e.detail.subname,rules:[{required:!0,message:"请输入活动副标题"}]}],expression:"['subname', {initialValue:detail.subname,rules: [{required: true, message: '请输入活动副标题'}]}]"}],attrs:{placeholder:"请输入活动副标题"}})],1),a("a-form-item",{attrs:{label:"活动类型",help:"活动商品低于四个则不再首页展示"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:e.detail.type,rules:[{required:!0,message:"请选择活动类型"}]}],expression:"['type', {initialValue:detail.type,rules: [{required: true, message: '请选择活动类型'}]}]"}],attrs:{placeholder:"请选择活动类型"}},[a("a-select-option",{attrs:{value:"group"}},[e._v(" 拼团活动 ")]),a("a-select-option",{attrs:{value:"bargain"}},[e._v(" 砍价活动 ")]),a("a-select-option",{attrs:{value:"limited"}},[e._v(" 秒杀活动 ")]),a("a-select-option",{attrs:{value:"live"}},[e._v(" 直播活动 ")]),a("a-select-option",{attrs:{value:"video"}},[e._v(" 短视频活动 ")])],1)],1),a("a-form-item",{attrs:{label:"展示时间"}},[a("a-range-picker",{staticStyle:{width:"320px"},attrs:{format:"YYYY-MM-DD HH:mm",ranges:{"今日":[e.moment(),e.moment()],"昨日":[e.moment().subtract(1,"days"),e.moment().subtract(1,"days")],"近七天":[e.moment().subtract(7,"days"),e.moment()],"近30天":[e.moment().subtract(30,"days"),e.moment()]},allowClear:!0},on:{change:e.dateOnChange},model:{value:e.search_data,callback:function(t){e.search_data=t},expression:"search_data"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:0}],expression:"['sort', {initialValue:0}]"}],attrs:{min:0}}),a("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1):e._e()],1),a("related-goods",{ref:"relatedGoods",attrs:{source:"platform_six",selectedList:e.list}})],1)])},i=[],r=(a("b0c0"),a("011d")),n=a("c1df"),o=a.n(n),l=a("cd39"),d=[{title:"排序",dataIndex:"sort",width:60,key:"sort",scopedSlots:{customRender:"sort"}},{title:"活动标题",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"浏览量",dataIndex:"click_number",width:80,key:"click_number"},{title:"副标题",dataIndex:"subname",key:"subname",scopedSlots:{customRender:"area_name"}},{title:"活动类型",dataIndex:"type_txt",key:"type_txt",scopedSlots:{customRender:"type_txt"}},{title:"开始时间",dataIndex:"start_time",key:"start_time",width:"150px",scopedSlots:{customRender:"start_time"}},{title:"结束时间",dataIndex:"end_time",key:"end_time",width:"150px",scopedSlots:{customRender:"end_time"}},{title:"关联商品",dataIndex:"related_goods",width:120,key:"related_goods",scopedSlots:{customRender:"related_goods"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],m={name:"sixDecorate",components:{relatedGoods:l["default"]},data:function(){return{visible:!1,edit_show:!1,title:"",tab_name:"",cat_id:"",cat_key:"",columns:d,record_id:"",type:"",start_time:"",end_time:"",search_data:[o()().subtract(7,"days"),o()()],list:[],detail:[],tab_key:1,form:this.$form.createForm(this),id:"",activeKey:"1",formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}}}},watch:{refresh:function(e){this.search_data=[]}},mounted:function(){this.initList()},methods:{moment:o.a,initList:function(){this.search_data=[o()().subtract(7,"days"),o()()],this.start_time=o()().subtract(7,"days").format("YYYY-MM-DD HH:mm"),this.end_time=o()().format("YYYY-MM-DD HH:mm")},onEdit:function(e,t){this[t](e)},getEdit:function(e){var t=this;this.id=e,this.editOne(3),this.edit_show=!0,this.request(r["a"].getSixEdit,{id:e}).then((function(e){console.log(e),t.detail=e,t.start_time=e.start_time,t.end_time=e.end_time,t.search_data=[o()(t.start_time),o()(t.end_time)],console.log(t.start_time),console.log(t.end_time)})),this.activeKey=3,this.tab_key=3},dateOnChange:function(e,t){this.start_time=t[0],this.end_time=t[1]},getList:function(e,t){var a=this;this.visible=!0,this.cat_key=e,this.title=t,this.tab_name=t,this.request(r["a"].getSixList).then((function(e){console.log(e),a.list=e}))},handelCancle:function(){this.visible=!1},editOne:function(e){this.tab_key=e,2==e?this.id=0:3==e&&(this.edit_show=!0)},delOne:function(e){var t=this;this.request(r["a"].delSixAdver,{id:e}).then((function(e){t.getList(t.cat_key,t.title)}))},handleSubmit:function(e){var t=this;1!=this.activeKey?(e.preventDefault(),this.form.validateFields((function(e,a){e||(console.log(a),a.start_time=t.start_time,a.end_time=t.end_time,a.id=t.id,a.name.length>4?t.$message.error("标题字数不超过4个字符"):a.subname.length>6?t.$message.error("副标题字数不超过6个字符"):t.request(r["a"].addOrEditSixAdver,a).then((function(e){t.id>0?(t.$message.success("编辑成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.edit_show=!1,t.activeKey="1",t.getList(t.cat_key,t.tab_name),t.$emit("ok",a)}),1500)):(100==e?t.$message.error("改活动类型已经添加过"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.activeKey="1",t.getList(t.cat_key,t.tab_name),t.$emit("ok",a)}),1500))})))}))):1==this.activeKey&&(this.visible=!1)},getRelatedGoods:function(e,t){this.record_id=e,this.type=t,"limited"==t||"group"==t||"bargain"==t?(this.visible=!1,this.$router.push("/mall/platform.mallActivityRecommend/getLimitedRecommendList")):this.$refs.relatedGoods.openDialog(this.record_id,1,this.title)}}},c=m,u=a("2877"),p=Object(u["a"])(c,s,i,!1,null,"20bd77e7",null);t["default"]=p.exports}}]);