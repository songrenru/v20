(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5620f2b1","chunk-2d0d7d7d","chunk-2d0c5251"],{"3c7b":function(e,t,a){"use strict";a("8f80")},"3e9b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1e3,height:640,visible:e.visible},on:{cancel:e.handelCancle,ok:e.handleSubmit}},[a("div",[a("a-tabs",{attrs:{"default-active-key":"1","hide-add":""},on:{change:e.editOne,edit:e.onEdit},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},[a("a-tab-pane",{key:"1",attrs:{tab:e.tab_name}},[a("a-table",{attrs:{columns:e.columns,"data-source":e.list,scroll:{y:440}},scopedSlots:e._u([{key:"sort",fn:function(t,i){return a("span",{},[e._v(e._s(i.sort))])}},{key:"name",fn:function(t,i){return a("span",{},[e._v(e._s(i.name))])}},{key:"subname",fn:function(t,i){return a("span",{},[e._v(e._s(i.subname))])}},{key:"type",fn:function(t,i){return a("span",{},[e._v(e._s(i.type_txt))])}},{key:"start_time",fn:function(t,i){return a("span",{},[e._v(e._s(i.start_time))])}},{key:"end_time",fn:function(t,i){return a("span",{},[e._v(e._s(i.end_time))])}},{key:"related_goods",fn:function(t,i){return a("a-button",{attrs:{type:"dashed"},on:{click:function(t){return e.getRelatedGoods(i.id,i.type)}}},[e._v(" 关联商品 ")])}},{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.getEdit(i.id)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确认删除？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(t){return e.delOne(i.id)}}},[a("a",[e._v("删除")])])],1)}}])})],1),a("a-tab-pane",{key:"2",attrs:{tab:"添加"},on:{tabClick:e.editOne}},[a("a-form",e._b({attrs:{id:"components-form-demo-validate-other1",form:e.form}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"活动标题",help:"标题字数不超过4个字符"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入活动标题"}]}],expression:"['name', {rules: [{required: true, message: '请输入活动标题'}]}]"}],attrs:{placeholder:"请输入活动标题"}})],1),a("a-form-item",{attrs:{label:"副标题",help:"标题字数不超过6个字符"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["subname",{rules:[{required:!0,message:"请输入活动副标题"}]}],expression:"['subname', {rules: [{required: true, message: '请输入活动副标题'}]}]"}],attrs:{placeholder:"请输入活动副标题"}})],1),a("a-form-item",{attrs:{label:"活动类型",help:"活动商品低于四个则不再首页展示"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"请选择活动类型"}]}],expression:"['type', {rules: [{required: true, message: '请选择活动类型'}]}]"}],attrs:{placeholder:"请选择活动类型"}},[a("a-select-option",{attrs:{value:"group"}},[e._v(" 拼团活动 ")]),a("a-select-option",{attrs:{value:"bargain"}},[e._v(" 砍价活动 ")]),a("a-select-option",{attrs:{value:"limited"}},[e._v(" 秒杀活动 ")]),a("a-select-option",{attrs:{value:"live"}},[e._v(" 直播活动 ")]),a("a-select-option",{attrs:{value:"video"}},[e._v(" 短视频活动 ")])],1)],1),a("a-form-item",{attrs:{label:"展示时间"}},[a("a-range-picker",{staticStyle:{width:"320px"},attrs:{format:"YYYY-MM-DD HH:mm",ranges:{"今日":[e.moment(),e.moment()],"昨日":[e.moment().subtract(1,"days"),e.moment().subtract(1,"days")],"近七天":[e.moment().subtract(7,"days"),e.moment()],"近30天":[e.moment().subtract(30,"days"),e.moment()]},allowClear:!0},on:{change:e.dateOnChange},model:{value:e.search_data,callback:function(t){e.search_data=t},expression:"search_data"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:0}],expression:"['sort', {initialValue:0}]"}],attrs:{min:0}}),a("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1),e.edit_show?a("a-tab-pane",{key:3,attrs:{tab:"编辑"}},[a("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"活动标题"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.name,rules:[{required:!0,message:"请输入活动标题"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入活动标题'}]}]"}],attrs:{placeholder:"请输入活动标题",max:4}})],1),a("a-form-item",{attrs:{label:"副标题"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["subname",{initialValue:e.detail.subname,rules:[{required:!0,message:"请输入活动副标题"}]}],expression:"['subname', {initialValue:detail.subname,rules: [{required: true, message: '请输入活动副标题'}]}]"}],attrs:{placeholder:"请输入活动副标题"}})],1),a("a-form-item",{attrs:{label:"活动类型",help:"活动商品低于四个则不再首页展示"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:e.detail.type,rules:[{required:!0,message:"请选择活动类型"}]}],expression:"['type', {initialValue:detail.type,rules: [{required: true, message: '请选择活动类型'}]}]"}],attrs:{placeholder:"请选择活动类型"}},[a("a-select-option",{attrs:{value:"group"}},[e._v(" 拼团活动 ")]),a("a-select-option",{attrs:{value:"bargain"}},[e._v(" 砍价活动 ")]),a("a-select-option",{attrs:{value:"limited"}},[e._v(" 秒杀活动 ")]),a("a-select-option",{attrs:{value:"live"}},[e._v(" 直播活动 ")]),a("a-select-option",{attrs:{value:"video"}},[e._v(" 短视频活动 ")])],1)],1),a("a-form-item",{attrs:{label:"展示时间"}},[a("a-range-picker",{staticStyle:{width:"320px"},attrs:{format:"YYYY-MM-DD HH:mm",ranges:{"今日":[e.moment(),e.moment()],"昨日":[e.moment().subtract(1,"days"),e.moment().subtract(1,"days")],"近七天":[e.moment().subtract(7,"days"),e.moment()],"近30天":[e.moment().subtract(30,"days"),e.moment()]},allowClear:!0},on:{change:e.dateOnChange},model:{value:e.search_data,callback:function(t){e.search_data=t},expression:"search_data"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:0}],expression:"['sort', {initialValue:0}]"}],attrs:{min:0}}),a("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1):e._e()],1),a("related-goods",{ref:"relatedGoods",attrs:{source:"platform_six",selectedList:e.list}})],1)])},s=[],r=(a("b0c0"),a("011d")),n=a("c1df"),o=a.n(n),l=a("cd39"),c=[{title:"排序",dataIndex:"sort",width:60,key:"sort",scopedSlots:{customRender:"sort"}},{title:"活动标题",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"浏览量",dataIndex:"click_number",width:80,key:"click_number"},{title:"副标题",dataIndex:"subname",key:"subname",scopedSlots:{customRender:"area_name"}},{title:"活动类型",dataIndex:"type_txt",key:"type_txt",scopedSlots:{customRender:"type_txt"}},{title:"开始时间",dataIndex:"start_time",key:"start_time",width:"150px",scopedSlots:{customRender:"start_time"}},{title:"结束时间",dataIndex:"end_time",key:"end_time",width:"150px",scopedSlots:{customRender:"end_time"}},{title:"关联商品",dataIndex:"related_goods",width:120,key:"related_goods",scopedSlots:{customRender:"related_goods"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],d={name:"sixDecorate",components:{relatedGoods:l["default"]},data:function(){return{visible:!1,edit_show:!1,title:"",tab_name:"",cat_id:"",cat_key:"",columns:c,record_id:"",type:"",start_time:"",end_time:"",search_data:[o()().subtract(7,"days"),o()()],list:[],detail:[],tab_key:1,form:this.$form.createForm(this),id:"",activeKey:"1",formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}}}},watch:{refresh:function(e){this.search_data=[]}},mounted:function(){this.initList()},methods:{moment:o.a,initList:function(){this.search_data=[o()().subtract(7,"days"),o()()],this.start_time=o()().subtract(7,"days").format("YYYY-MM-DD HH:mm"),this.end_time=o()().format("YYYY-MM-DD HH:mm")},onEdit:function(e,t){this[t](e)},getEdit:function(e){var t=this;this.id=e,this.editOne(3),this.edit_show=!0,this.request(r["a"].getSixEdit,{id:e}).then((function(e){console.log(e),t.detail=e,t.start_time=e.start_time,t.end_time=e.end_time,t.search_data=[o()(t.start_time),o()(t.end_time)],console.log(t.start_time),console.log(t.end_time)})),this.activeKey=3,this.tab_key=3},dateOnChange:function(e,t){this.start_time=t[0],this.end_time=t[1]},getList:function(e,t){var a=this;this.visible=!0,this.cat_key=e,this.title=t,this.tab_name=t,this.request(r["a"].getSixList).then((function(e){console.log(e),a.list=e}))},handelCancle:function(){this.visible=!1},editOne:function(e){this.tab_key=e,2==e?this.id=0:3==e&&(this.edit_show=!0)},delOne:function(e){var t=this;this.request(r["a"].delSixAdver,{id:e}).then((function(e){t.getList(t.cat_key,t.title)}))},handleSubmit:function(e){var t=this;1!=this.activeKey?(e.preventDefault(),this.form.validateFields((function(e,a){e||(console.log(a),a.start_time=t.start_time,a.end_time=t.end_time,a.id=t.id,a.name.length>4?t.$message.error("标题字数不超过4个字符"):a.subname.length>6?t.$message.error("副标题字数不超过6个字符"):t.request(r["a"].addOrEditSixAdver,a).then((function(e){t.id>0?(t.$message.success("编辑成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.edit_show=!1,t.activeKey="1",t.getList(t.cat_key,t.tab_name),t.$emit("ok",a)}),1500)):(100==e?t.$message.error("改活动类型已经添加过"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.activeKey="1",t.getList(t.cat_key,t.tab_name),t.$emit("ok",a)}),1500))})))}))):1==this.activeKey&&(this.visible=!1)},getRelatedGoods:function(e,t){this.record_id=e,this.type=t,"limited"==t||"group"==t||"bargain"==t?(this.visible=!1,this.$router.push("/mall/platform.mallActivityRecommend/getLimitedRecommendList")):this.$refs.relatedGoods.openDialog(this.record_id,1,this.title)}}},m=d,u=a("0c7c"),f=Object(u["a"])(m,i,s,!1,null,"20bd77e7",null);t["default"]=f.exports},7916:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,height:640,visible:e.visible},on:{cancel:e.handelCancle,ok:e.handleSubmit}},[a("div",[a("a-tabs",{attrs:{"default-active-key":"1","hide-add":""},on:{change:e.editOne,edit:e.onEdit},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},[a("a-tab-pane",{key:"1",attrs:{tab:e.tab_name}},[a("a-table",{attrs:{columns:e.columns,"data-source":e.list,scroll:{y:440}},scopedSlots:e._u([{key:"sort",fn:function(t,i){return a("span",{},[e._v(e._s(i.sort))])}},{key:"name",fn:function(t,i){return a("span",{},[e._v(e._s(i.name))])}},{key:"subname",fn:function(t,i){return a("span",{},[e._v(e._s(i.subname))])}},{key:"type",fn:function(t,i){return a("span",{},[e._v(e._s(i.type_txt))])}},{key:"status",fn:function(t,i){return a("span",{},[0==t?a("a-badge",{attrs:{status:"error",text:"关闭"}}):e._e(),1==t?a("a-badge",{attrs:{status:"success",text:"开启"}}):e._e()],1)}},{key:"related_goods",fn:function(t,i){return a("a-button",{attrs:{type:"dashed"},on:{click:function(t){return e.getRelatedGoods(i.id)}}},[e._v(" 关联商品 ")])}},{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.getEdit(i.id)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),999999!=i.id?a("a-popconfirm",{attrs:{title:"确认删除？","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(t){return e.delOne(i.id)}}},[a("a",[e._v("删除")])]):a("a",{staticStyle:{color:"lightgrey"}},[e._v("删除")])],1)}}])})],1),a("a-tab-pane",{key:"2",attrs:{tab:"添加"}},[a("a-form",e._b({attrs:{preserve:"{false}",id:"components-form-demo-validate-other1",form:e.form}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"活动标题",help:"标题字数不超过4个字符"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入活动标题"}]}],expression:"['name', {rules: [{required: true, message: '请输入活动标题'}]}]"}],attrs:{placeholder:"请输入活动标题",max:4}})],1),a("a-form-item",{attrs:{label:"副标题",help:"副标题字数不超过6个字符"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["subname",{rules:[{required:!0,message:"请输入活动副标题"}]}],expression:"['subname', {rules: [{required: true, message: '请输入活动副标题'}]}]"}],attrs:{placeholder:"请输入活动副标题"}})],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:0}],expression:"['sort', {initialValue:0}]"}],attrs:{min:0}}),a("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:!0,valuePropName:"checked"}],expression:"['status', {initialValue: true,valuePropName: 'checked'}] "}],attrs:{"checked-children":"开启","un-checked-children":"关闭"}})],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1),e.edit_show?a("a-tab-pane",{key:3,attrs:{tab:"编辑"}},[a("a-form",e._b({attrs:{id:"components-form-demo-validate-other",form:e.form,"data-source":e.detail}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"活动标题",help:"标题字数不超过4个字符"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.name,rules:[{required:!0,message:"请输入活动标题"}]}],expression:"['name', {initialValue:detail.name,rules: [{required: true, message: '请输入活动标题'}]}]"}],attrs:{placeholder:"请输入活动标题"}})],1),a("a-form-item",{attrs:{label:"副标题",help:"副标题字数不超过6个字符"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["subname",{initialValue:e.detail.subname,rules:[{required:!0,message:"请输入活动副标题"}]}],expression:"['subname', {initialValue:detail.subname,rules: [{required: true, message: '请输入活动副标题'}]}]"}],attrs:{placeholder:"请输入活动副标题"}})],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:e.detail.sort}],expression:"['sort', {initialValue:detail.sort}]"}],attrs:{min:0}}),a("span",{staticClass:"ant-form-text"},[e._v(" 值越大越靠前 ")])],1),a("a-form-item",{attrs:{label:"状态",help:"为你推荐不可关闭"}},[999999==e.detail.id?a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:e.detail.status,valuePropName:"checked"}],expression:"['status', {initialValue:detail.status,valuePropName: 'checked'}]"}],attrs:{disabled:e.disabled,valuePropName:"checked","checked-children":"开启","un-checked-children":"关闭"}}):a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:e.detail.status,valuePropName:"checked"}],expression:"['status', {initialValue:detail.status,valuePropName: 'checked'}]"}],attrs:{valuePropName:"checked","checked-children":"开启","un-checked-children":"关闭"}})],1),a("a-form-item",{attrs:{"wrapper-col":{span:12,offset:6}}})],1)],1):e._e()],1),a("related-goods",{ref:"relatedGoods",attrs:{source:"platform_rec",selectedList:e.list}})],1)])},s=[],r=(a("b0c0"),a("011d")),n=a("cd39"),o=[{title:"排序",dataIndex:"sort",width:60,key:"sort",scopedSlots:{customRender:"sort"}},{title:"活动标题",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"副标题",dataIndex:"subname",key:"subname",scopedSlots:{customRender:"subname"}},{title:"状态",dataIndex:"status",width:120,key:"status",scopedSlots:{customRender:"status"}},{title:"关联商品",dataIndex:"related_goods",width:120,key:"related_goods",scopedSlots:{customRender:"related_goods"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],l={name:"sixDecorate",components:{relatedGoods:n["default"]},data:function(){return{disabled:!0,visible:!1,edit_show:!1,title:"",tab_name:"",cat_id:"",cat_key:"",columns:o,list:[],detail:[],tab_key:1,form:this.$form.createForm(this),id:"",activeKey:"1",formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}}}},methods:{onEdit:function(e,t){this[t](e)},getEdit:function(e){var t=this;this.editOne(3),this.edit_show=!0,this.id=e,this.request(r["a"].getRecEdit,{id:e}).then((function(e){console.log(e),t.detail=e,t.detail.status=1==t.detail.status})),this.activeKey=3,this.tab_key=3},dateOnChange:function(e,t){this.start_time=t[0],this.end_time=t[1]},getList:function(e,t){var a=this;this.visible=!0,this.cat_key=e,this.title=t,this.tab_name=t,this.request(r["a"].getRecList).then((function(e){console.log(e),a.list=e}))},handelCancle:function(){this.visible=!1},editOne:function(e){this.tab_key=e,2==e?this.id=0:3==e&&(this.edit_show=!0)},delOne:function(e){var t=this;this.request(r["a"].delRecAdver,{id:e}).then((function(e){t.getList(t.cat_key,t.title)}))},handleSubmit:function(e){var t=this;console.log(this.tab_key,"this.tab_key==this.tab_key"),1!=this.tab_key?(e.preventDefault(),this.form.validateFields((function(e,a){e||(console.log(a),a.start_time=t.start_time,a.end_time=t.end_time,a.id=t.id,a.name.length>4?t.$message.error("标题字数不超过4个字符"):a.subname.length>6?t.$message.error("副标题字数不超过6个字符"):t.request(r["a"].addOrEditRec,a).then((function(e){t.id>0?(t.$message.success("编辑成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.edit_show=!1,t.activeKey="1",t.getList(t.cat_key,t.tab_name),t.$emit("ok",a)}),1500)):(t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.activeKey="1",t.getList(t.cat_key,t.tab_name),t.$emit("ok",a)}),1500))})))}))):1==this.tab_key&&(this.visible=!1)},getRelatedGoods:function(e){this.record_id=e,this.$refs.relatedGoods.openDialog(this.record_id,2)}}},c=l,d=a("0c7c"),m=Object(d["a"])(c,i,s,!1,null,"10541a4b",null);t["default"]=m.exports},"8f80":function(e,t,a){},a963:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-tabs",{attrs:{"default-active-key":"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"商城首页"}},[a("a-row",{staticStyle:{background:"white",padding:"20px"}},[a("a-col",{attrs:{span:10}},[a("a-list",{attrs:{"item-layout":"horizontal","data-source":e.data},scopedSlots:e._u([{key:"renderItem",fn:function(t,i){return a("a-list-item",{},[a("a-list-item-meta",{attrs:{description:t.desc}},[a("a",{attrs:{slot:"title",id:"title"},slot:"title"},[e._v(e._s(t.title))])]),t.show_switch?a("a-switch",{on:{change:e.changeRec},model:{value:e.is_display,callback:function(t){e.is_display=t},expression:"is_display"}}):e._e(),a("a-button",{attrs:{type:"primary"},on:{click:function(a){return e.getClick(t.click,t.title)}}},[e._v(" "+e._s(t.button)+" ")])],1)}}])}),a("a-divider")],1),a("a-col",{attrs:{span:2}}),a("a-col",{staticStyle:{position:"relative",display:"flex","flex-direction":"column"},attrs:{span:12}},[a("iframe",{attrs:{id:"myframe",frameborder:"0",src:e.url}}),a("a-button",{staticStyle:{width:"65px","margin-top":"10px"},attrs:{type:"primary"},on:{click:e.refreshFrame}},[e._v("刷新 ")]),a("span",{staticStyle:{position:"absolute",bottom:"0",left:"70px"}},[e._v('(如果"装修"后样式未改变，请点击此刷新按钮)')])],1)],1)],1)],1),a("decorate-adver",{ref:"bannerModel"}),a("six-decorate",{ref:"sixModel"}),a("rec-decorate",{ref:"recModel"}),a("iframe-dialog",{ref:"iframeModel",staticStyle:{"z-index":"999999991"},on:{handleOk:e.handleOK,handleClose:e.handleClose}})],1)},s=[],r=a("56b7"),n=a("3e9b"),o=a("7916"),l=a("7a16"),c=a("011d"),d=[{title:"推荐热搜",desc:"设置推荐热搜关键词后，对应热搜词即可展示在首页头部",button:"装修",show_switch:!1,change:"",click:"getSerachHot"},{title:"轮播图",desc:"尺寸为 640 * 240",button:"装修",show_switch:!1,change:"",click:"getBanner"},{title:"导航栏导航列表",desc:"每行展示五个，不设置不展示",button:"装修",show_switch:!1,change:"",click:"getNav"},{title:"单图广告",desc:"仅显示一张广告图，尺寸为 750 * 230",button:"装修",show_switch:!1,change:"",click:"getSingle"},{title:"六宫格推荐广告位",desc:"可推荐拼团、秒杀、直播、短视频、热门商品",button:"装修",show_switch:!1,change:"",click:"getSix"},{title:"小程序流量广告",desc:"",button:"装修",show_switch:!1,change:"changeRec",click:"getWxappAdver"},{title:"猜你喜欢",desc:"按钮开关不控制系统的商品推荐，将控制自定义装修内容，关闭则装修的不展示",button:"装修",show_switch:!0,change:"changeRec",click:"getRec"}],m={name:"PlatformHomeDecorate",components:{RecDecorate:o["default"],SixDecorate:n["default"],DecorateAdver:r["default"],DecorateBanner:r["default"],IframeDialog:l["a"]},data:function(){return{is_display:"",data:d,url:""}},created:function(){this.getUrlAndRecSwitch()},methods:{getClick:function(e,t){this[e](t)},getSerachHot:function(e){this.$router.push("/mall/platform.search/searchHotList")},getBanner:function(e){this.$refs.bannerModel.getList("wap_mall_index_top",e)},getNav:function(e){this.$refs.bannerModel.getList("wap_mall_slider",e)},getSingle:function(e){this.$refs.bannerModel.getList("index_middle_mall",e)},getSix:function(e){this.$refs.sixModel.getList("",e)},getRec:function(e){this.$refs.recModel.getList("",e)},getWxappAdver:function(e){this.$refs.iframeModel.openDialog({url:"/v20/public/platform/#/dialog/platform.viewpage/ShareSet/gid=103",edit:1,button:[{name:"编辑",focus:!0},{name:"关闭"}],width:850,title:"小程序流量广告"})},getChange:function(e){this[e](this.status)},changeRec:function(e){var t=this;this.is_display=1==e,this.request(c["a"].recDisplay,{is_display:e}).then((function(e){e&&t.$message.success("修改成功")}))},getUrlAndRecSwitch:function(){var e=this;this.request(c["a"].getUrlAndRecSwitch).then((function(t){e.url=t.url,e.is_display=t.is_display}))},refreshFrame:function(){document.getElementById("myframe").contentWindow.location.reload(!0)},handleOK:function(e){var t=null;t=this.$refs.iframeModel.$refs.childIframe;var a=t.contentWindow;if(a.document.body){var i=a.document.getElementById("dosubmit");i?i.click():"function"==typeof a.dialogConfirm&&a.dialogConfirm()}else this.$message.error("操作失败，请重试！");"function"==typeof this.iframeDom.contentWindow.dialogConfirm&&this.iframeDom.contentWindow.dialogConfirm()},handleClose:function(e){var t=null;t=this.$refs.iframeModel.$refs.childIframe,this.$refs.iframeModel.visible=!1;var a=t.contentWindow;"function"==typeof a.dialogCancel&&a.dialogCancel(),"function"==typeof this.iframeDom.contentWindow.dialogCancel&&this.iframeDom.contentWindow.dialogCancel()}}},u=m,f=(a("3c7b"),a("0c7c")),h=Object(f["a"])(u,i,s,!1,null,"3ee8ebfc",null);t["default"]=h.exports}}]);