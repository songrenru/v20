(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d65f1d1","chunk-65bfa2af","chunk-212caa94","chunk-2d0b6a79","chunk-2d0b6a79"],{"07656":function(t,a,e){},"16a3":function(t,a,e){},"1da1":function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));e("d3b7");function s(t,a,e,s,n,i,r){try{var o=t[i](r),l=o.value}catch(c){return void e(c)}o.done?a(l):Promise.resolve(l).then(s,n)}function n(t){return function(){var a=this,e=arguments;return new Promise((function(n,i){var r=t.apply(a,e);function o(t){s(r,n,i,o,l,"next",t)}function l(t){s(r,n,i,o,l,"throw",t)}o(void 0)}))}}},"1e32":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"components-layout-demo-basic"}},[t.is_add_show||t.is_view_show?t._e():e("a-spin",{attrs:{spinning:t.spinning,size:"large"}},[e("a-layout",[e("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"100px"}},[e("a-tabs",{attrs:{"default-active-key":"1"}},[e("a-tab-pane",{key:"1",attrs:{tab:"站内信列表"}},[e("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:t.pagination},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"cat_name",fn:function(a){return e("span",{},[t._v(" "+t._s(a)+" ")])}},{key:"title1",fn:function(a){return e("span",{},[t._v(" "+t._s(a)+" ")])}},{key:"users",fn:function(a,s){return e("span",{},[0==s.users?e("span",[t._v("全部用户")]):e("span",[t._v("指定")])])}},{key:"set_send_time",fn:function(a){return e("span",{},[t._v(" "+t._s(a)+" ")])}},{key:"send_status",fn:function(a,s){return e("span",{},[0==s.send_status?e("span",[t._v("待发送")]):1==s.send_status?e("span",[t._v("已发送")]):e("span",[t._v("发送失败")])])}},{key:"send_usernums",fn:function(a){return e("span",{},[t._v(" "+t._s(a)+" ")])}},{key:"send_points",fn:function(a){return e("span",{},[t._v(" "+t._s(a)+" ")])}},{key:"action",fn:function(a,s){return e("span",{},[e("a",{staticClass:"label-sm blue",on:{click:function(a){return t.diyEdit(s.id)}}},[t._v("查看")]),e("a",{staticClass:"btn label-sm blue",staticStyle:{"margin-left":"10px"},on:{click:function(a){return t.diyDel(s.id)}}},[t._v("删除")])])}},{key:"title",fn:function(a){return[e("a-row",{attrs:{type:"flex",align:"top"}},[e("a-col",{staticClass:"span-tyle"},[t._v(" 推送分类： ")]),e("a-col",{attrs:{span:4}},[e("a-select",{staticStyle:{width:"200px"},model:{value:t.queryParam.category_type,callback:function(a){t.$set(t.queryParam,"category_type",a)},expression:"queryParam.category_type"}},[t._l(t.cat_sel,(function(a,s){return e("a-select-option",{key:s,attrs:{value:a.cat_id}},[t._v(" "+t._s(a.cat_name)+" ")])})),e("a-select-option",{attrs:{value:t.mall}},[t._v(" 商城 ")]),e("a-select-option",{attrs:{value:t.maidan}},[t._v(" 买单 ")]),e("a-select-option",{attrs:{value:t.group}},[t._v(" 团购 ")]),e("a-select-option",{attrs:{value:t.foodshop}},[t._v(" 外卖 ")])],2)],1),e("a-col",{staticClass:"span-tyle"},[t._v(" 推送人群： ")]),e("a-col",{attrs:{span:4}},[e("a-select",{staticStyle:{width:"200px"},model:{value:t.queryParam.users,callback:function(a){t.$set(t.queryParam,"users",a)},expression:"queryParam.users"}},[e("a-select-option",{attrs:{value:0}},[t._v(" 全部 ")]),e("a-select-option",{attrs:{value:1}},[t._v(" 指定 ")])],1)],1)],1),e("br"),e("a-row",{attrs:{type:"flex",align:"top"}},[e("a-col",{staticClass:"span-tyle"},[t._v(" 发送时间： ")]),e("a-col",{attrs:{span:4}},[e("a-range-picker",{staticStyle:{width:"200px"},attrs:{format:"YYYY-MM-DD"},model:{value:t.queryParam.set_send_time_date,callback:function(a){t.$set(t.queryParam,"set_send_time_date",a)},expression:"queryParam.set_send_time_date"}})],1),e("a-col",{staticClass:"span-tyle"},[t._v(" 手动搜索： ")]),e("a-col",{attrs:{span:4}},[e("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入标题"},model:{value:t.queryParam.title,callback:function(a){t.$set(t.queryParam,"title",a)},expression:"queryParam.title"}})],1),e("a-col",{attrs:{span:1}},[e("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.getLists()}}},[t._v("查询")])],1),e("a-col",{staticStyle:{"margin-left":"15px"},attrs:{span:1}},[e("a-button",{attrs:{type:"default"},on:{click:function(a){return t.subForm()}}},[t._v("重置")])],1)],1),e("br"),e("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[e("a-col",{staticClass:"text-left",attrs:{span:4}},[e("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.addCategory()}}},[t._v(" +添加推送")])],1),e("a-col",{attrs:{span:15}}),e("a-col",{staticClass:"text-right",attrs:{span:5}})],1)]}}],null,!1,3609074647)})],1)],1)],1)],1)],1),t.is_view_show?e("mail-edit",{attrs:{mail_id:t.mail_id},on:{getShow:t.getShow}}):t._e(),t.is_add_show?e("mail-add",{attrs:{mail_id:0},on:{getShow:t.getShow}}):t._e()],1)},n=[],i=e("ade3"),r=e("de0b"),o=e("7b1b"),l=e("1f38"),c=e("da05"),u=[{title:"推送分类",dataIndex:"cat_name",scopedSlots:{customRender:"cat_name"}},{title:"标题",dataIndex:"title1",scopedSlots:{customRender:"title1"}},{title:"推送人群",dataIndex:"users",scopedSlots:{customRender:"users"}},{title:"发送时间",dataIndex:"set_send_time",scopedSlots:{customRender:"set_send_time"}},{title:"状态",dataIndex:"send_status",scopedSlots:{customRender:"send_status"}},{title:"发送用户数",dataIndex:"send_usernums",scopedSlots:{customRender:"send_usernums"}},{title:"点击数",dataIndex:"send_points",scopedSlots:{customRender:"send_points"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],d={name:"MailList",components:{MailEdit:l["default"],ACol:c["b"],MailAdd:o["default"]},data:function(){var t;return t={mail_id:"",mall:"1-2",maidan:"1-3",group:"1-4",foodshop:"1-5"},Object(i["a"])(t,"mail_id",""),Object(i["a"])(t,"is_add_show",!1),Object(i["a"])(t,"title","添加主分类"),Object(i["a"])(t,"action","/v20/public/index.php/common/common.UploadFile/uploadPictures"),Object(i["a"])(t,"uploadName","reply_pic"),Object(i["a"])(t,"visible",!1),Object(i["a"])(t,"spinning",!1),Object(i["a"])(t,"is_view_show",!1),Object(i["a"])(t,"previewVisible",!1),Object(i["a"])(t,"previewVisible1",!1),Object(i["a"])(t,"previewImage",""),Object(i["a"])(t,"hides",0),Object(i["a"])(t,"cat_id",0),Object(i["a"])(t,"cat_sel",[]),Object(i["a"])(t,"fileList",[]),Object(i["a"])(t,"pagination",{current:1,total:0,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}}),Object(i["a"])(t,"queryParam",{cat_id:"",page:1,category_type:"",users:"",set_send_time_date:"",title:""}),Object(i["a"])(t,"data",[]),Object(i["a"])(t,"columns",u),t},mounted:function(){this.getLists()},activated:function(){this.getLists()},created:function(){this.title="添加主分类",this.getLists()},methods:{getLists:function(){var t=this;this.queryParam.page=1,this.queryParam.pageSize=this.pagination.pageSize,this.data=[],this.request(r["a"].mailList,this.queryParam).then((function(a){t.cat_sel=a.cat_sel,a.list.length>0&&(t.data=a.list,t.pagination.total=a.count,t.queryParam["page"]+=1)}))},subForm:function(){var t=this;this.queryParam.page=this.pagination.current,this.queryParam.pageSize=this.pagination.pageSize,this.queryParam.cat_id="",this.queryParam.page=1,this.queryParam.category_type="",this.queryParam.users="",this.queryParam.set_send_time_date="",this.queryParam.title="",this.request(r["a"].mailList,this.queryParam).then((function(a){t.cat_sel=a.cat_sel,a.list.length>0&&(t.data=a.list,t.pagination.total=a.count,t.queryParam["page"]+=1)}))},addCategory:function(){this.is_add_show=!0},getShow:function(){this.is_add_show=!1,this.is_view_show=!1,this.getLists()},diyDel:function(t){var a=this;this.$confirm({title:"您确定删除此分类吗?",centered:!0,onOk:function(){var e={id:t};a.request(r["a"].delData,e).then((function(t){t&&a.getLists()}))},onCancel:function(){}})},diyEdit:function(t){this.is_view_show=!0,this.mail_id=t},handleTableChange:function(t){t.current&&t.current>0&&(this.queryParam["page"]=t.current,this.getLists())},onPageChange:function(t,a){this.$set(this.pagination,"current",t),this.getLists()},onPageSizeChange:function(t,a){this.$set(this.pagination,"pageSize",a),this.getLists()},onDateStartChange:function(t,a){this.queryParam.set_send_time_date=a,this.$set(this.queryParam,"set_send_time_date",a)}}},p=d,m=(e("811d"),e("2877")),f=Object(m["a"])(p,s,n,!1,null,"ecab25e0",null);a["default"]=f.exports},"1f38":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-layout",[e("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"100px"}},[e("a-tabs",{attrs:{"default-active-key":"1"}},[e("a-tab-pane",{key:"1",attrs:{tab:"推送内容查看"}},[e("a-form",t._b({},"a-form",{labelCol:{span:2},wrapperCol:{span:5}},!1),[e("a-row",[e("a-col",{staticClass:"label-font-size text-center",attrs:{span:2}},[e("a-button",{attrs:{type:"default"},on:{click:function(a){return t.returnBack()}}},[e("a-icon",{attrs:{type:"left"}})],1)],1)],1),e("br"),e("a-row",[e("a-col",{staticClass:"label-font-size text-right",attrs:{span:2}},[t._v(" 基本信息 ")])],1),e("br"),e("a-form-item",{attrs:{label:"所属分类"}},[e("a-select",{attrs:{disabled:""},model:{value:t.formData.category_type,callback:function(a){t.$set(t.formData,"category_type",a)},expression:"formData.category_type"}},[t._l(t.cat_sel,(function(a,s){return e("a-select-option",{key:s,attrs:{value:a.cat_id}},[t._v(" "+t._s(a.cat_name)+" ")])})),e("a-select-option",{attrs:{value:t.mall}},[t._v(" 商城 ")]),e("a-select-option",{attrs:{value:t.maidan}},[t._v(" 买单 ")]),e("a-select-option",{attrs:{value:t.group}},[t._v(" 团购 ")]),e("a-select-option",{attrs:{value:t.foodshop}},[t._v(" 外卖 ")])],2)],1),e("a-form-item",{attrs:{label:"渠道展示","wrapper-col":{span:10},disabled:"true"}},[e("a-row",[e("a-col",{attrs:{span:24}},[e("a-radio-group",{attrs:{disabled:""},model:{value:t.formData.type,callback:function(a){t.$set(t.formData,"type",a)},expression:"formData.type"}},[e("a-radio",{attrs:{value:0}},[t._v(" 全部 ")]),e("a-radio",{attrs:{value:1}},[t._v(" 仅手机系统推送 ")]),e("a-radio",{attrs:{value:2}},[t._v(" 仅消息中心推送 ")])],1)],1)],1)],1),e("a-form-item",{attrs:{label:"推送人群",disabled:"true"}},[e("a-row",[e("a-col",{attrs:{span:24}},[e("a-radio-group",{attrs:{disabled:""},model:{value:t.formData.users,callback:function(a){t.$set(t.formData,"users",a)},expression:"formData.users"}},[e("a-radio",{attrs:{value:0}},[t._v(" 全部 ")]),e("a-radio",{attrs:{value:1}},[t._v(" 指定人群 ")])],1)],1)],1),t.formData.users?[e("a-row",[e("a-col",{attrs:{span:24}},[e("a-col",{attrs:{span:3}},[e("a-checkbox",{attrs:{checked:t.formData.user.area_sel,disabled:""},on:{change:t.onChange}})],1),e("a-col",{attrs:{span:5}},[t._v("地区:")]),e("a-col",{attrs:{span:16}},[e("a-cascader",{attrs:{options:t.options,placeholder:"选择",value:t.formData.user.sel_areas,disabled:""},on:{change:t.onChangeArea}})],1)],1)],1),e("a-row",[e("a-col",{attrs:{span:24}},[e("a-col",{attrs:{span:3}},[e("a-checkbox",{attrs:{checked:t.formData.user.level_sel,disabled:""},on:{change:t.onChange1}})],1),e("a-col",{attrs:{span:5}},[t._v("用户等级:")]),e("a-col",{attrs:{span:16}},[e("a-select",{attrs:{disabled:""},model:{value:t.formData.user.level,callback:function(a){t.$set(t.formData.user,"level",a)},expression:"formData.user.level"}},t._l(t.level_sel,(function(a,s){return e("a-select-option",{key:s,attrs:{value:a.id}},[t._v(" "+t._s(a.lname)+" ")])})),1)],1)],1)],1),e("a-row",[e("a-col",{attrs:{span:24}},[e("a-col",{attrs:{span:3}},[e("a-checkbox",{attrs:{checked:t.formData.user.label_sel,disabled:""},on:{change:t.onChange2}})],1),e("a-col",{attrs:{span:5}},[t._v("用户标签:")]),e("a-col",{attrs:{span:16}},[e("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"请选择店铺分类",value:t.formData.user.label,disabled:""},on:{change:t.handleChange}},t._l(t.label_sel,(function(a){return e("a-select-option",{key:a,attrs:{value:a.id}},[t._v(" "+t._s(a.name)+" ")])})),1)],1)],1)],1)]:t._e()],2),e("a-form-item",{attrs:{label:"推送端口","wrapper-col":{span:17}}},[e("a-row",[e("a-col",{attrs:{span:24}},[e("a-radio-group",{attrs:{disabled:""},model:{value:t.formData.send_port,callback:function(a){t.$set(t.formData,"send_port",a)},expression:"formData.send_port"}},[e("a-radio",{attrs:{value:0}},[t._v(" 全部 ")]),e("a-radio",{attrs:{value:1}},[t._v(" 小程序 ")]),e("a-radio",{attrs:{value:2}},[t._v(" App ")])],1)],1)],1)],1),e("a-form-item",{attrs:{label:"定时推送","wrapper-col":{span:16}}},[e("a-row",[e("a-col",{staticClass:"text-center",attrs:{span:1}},[e("a-checkbox",{attrs:{checked:t.is_set_send_time,disabled:""},on:{change:t.onChange3},model:{value:t.is_set_send_time,callback:function(a){t.is_set_send_time=a},expression:"is_set_send_time"}})],1),e("a-col",{staticClass:"text-left",attrs:{span:2}},[t._v(" 选择推送时间 ")]),t.is_set_send_time?[e("a-col",{attrs:{span:4}},[e("a-date-picker",{attrs:{format:"YYYY-MM-DD","disabled-date":t.disabledStartDate,placeholder:"请选择日期","default-value":t.moment(t.formData.set_send_time_date,"YYYY-MM-DD"),getCalendarContainer:function(t){return t.parentNode},disabled:""},on:{change:t.onDateStartChange}})],1),e("a-col",{attrs:{span:4}},[e("a-time-picker",{attrs:{format:"HH:mm","default-value":t.moment(t.formData.set_send_time_min,"HH:mm"),placeholder:"选择时间",disabled:""},on:{change:t.onChangeTime}})],1)]:t._e(),e("a-col",{staticClass:"font-color",attrs:{span:24}},[t._v("勾选后可设置预约推送时间;否则点击发布按钮立即发布成功")])],2)],1),e("a-row",[e("a-col",{staticClass:"label-font-size text-right",attrs:{span:2}},[t._v(" 内容信息 ")])],1),e("br"),e("a-form-item",{attrs:{label:"主标题:","wrapper-col":{span:7}}},[e("a-row",[e("a-col",{attrs:{span:18}},[e("a-input",{attrs:{placeholder:"请输入消息标题",disabled:""},model:{value:t.formData.title,callback:function(a){t.$set(t.formData,"title",a)},expression:"formData.title"}})],1),e("a-col",{staticClass:"text-left font-color",attrs:{span:4}},[t._v(" 1-15个字符 ")])],1)],1),e("a-form-item",{attrs:{label:"描述","wrapper-col":{span:7},disabled:"true"}},[e("a-row",[e("a-col",{attrs:{span:18}},[e("a-input",{attrs:{placeholder:"请输入消息描述",disabled:""},model:{value:t.formData.desc,callback:function(a){t.$set(t.formData,"desc",a)},expression:"formData.desc"}})],1),e("a-col",{staticClass:"text-left font-color",attrs:{span:4}},[t._v(" 1-50个字符 ")])],1)],1),t.formData.img?e("a-form-item",{attrs:{label:"标题图片"}},[e("a-row",[e("a-input",{attrs:{hidden:""},model:{value:t.formData.img,callback:function(a){t.$set(t.formData,"img",a)},expression:"formData.img"}}),[e("div",{staticClass:"clearfix"},[e("a-upload",{attrs:{disabled:"","list-type":"picture-card","file-list":t.fileList1},on:{preview:t.handlePreview1}}),e("a-modal",{attrs:{visible:t.previewVisible1,footer:null},on:{cancel:t.handleCancel1}},[e("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)]],2)],1):t._e(),e("a-form-item",{attrs:{label:"信息链接类型:",disabled:"true"}},[e("a-row",[e("a-col",{attrs:{span:24}},[e("a-radio-group",{attrs:{disabled:""},model:{value:t.formData.content_type,callback:function(a){t.$set(t.formData,"content_type",a)},expression:"formData.content_type"}},[e("a-radio",{attrs:{value:0}},[t._v(" 富文本 ")]),e("a-radio",{attrs:{value:1}},[t._v(" 自定义链接 ")])],1)],1)],1)],1),t.formData.content_type?[e("a-form-item",{attrs:{label:"自定义链接","wrapper-col":{span:8}}},[e("a-row",[e("a-col",{attrs:{span:10}},[e("div",{staticClass:"flex"},[e("a-input",{staticStyle:{"max-height":"100px","overflow-y":"auto",resize:"none"},attrs:{placeholder:t.L("功能库选择"),autoSize:"",disabled:""},model:{value:t.formData.content,callback:function(a){t.$set(t.formData,"content",a)},expression:"formData.content"}})],1)]),e("a-col",{attrs:{span:5}})],1)],1)]:[e("a-form-item",{attrs:{label:"富文本","wrapper-col":{span:20}}},[e("a-row",[e("a-col",{attrs:{span:13}},[e("div",{staticClass:"flex"},[e("rich-text",{attrs:{info:t.formData.content,disabled:""},on:{"update:info":function(a){return t.$set(t.formData,"content",a)}}})],1)])],1)],1)]],2)],1)],1)],1)],1)},n=[],i=e("1da1"),r=(e("96cf"),e("d3b7"),e("a9e3"),e("b0c0"),e("a434"),e("290c")),o=e("da05"),l=e("de0b"),c=e("c1df"),u=e.n(c),d=e("2d3d"),p=e("6ec1");function m(t){return new Promise((function(a,e){var s=new FileReader;s.readAsDataURL(t),s.onload=function(){return a(s.result)},s.onerror=function(t){return e(t)}}))}var f={name:"MailEdit",components:{TemplateEdit:d["default"],ACol:o["b"],ARow:r["a"],RichText:p["a"]},props:{mail_id:{type:[String,Number],default:"0"},upload_dir:{type:String,default:""}},data:function(){return{mall:"1-2",maidan:"1-3",group:"1-4",foodshop:"1-5",visible_staff:!0,open2:!1,cat_sel:[],options:[],level_sel:[],label_sel:[],fileList1:[],is_set_send_time:!1,previewVisible1:!1,set_send_time_min:"00:00:00",previewImage:"",action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",uploadName:"reply_pic",queryParam:{id:this.mail_id},formData:{category_type:"",category_id:0,type:0,users:0,send_port:0,set_send_time_date:0,set_send_time_min:"00:00:00",title:"",desc:"",img:"",content_type:0,content:"",user:{area_sel:!1,sel_areas:[],level_sel:!1,level:"",label_sel:!1,label:[]}}}},activated:function(){this.queryParam.id=this.mail_id,this.getLists()},created:function(){this.queryParam.id=this.mail_id,this.getLists()},methods:{moment:u.a,handleChange:function(t){this.formData.user.label=t},onChangeArea:function(t){this.formData.province_id=t[0],this.formData.city_id=t[1],this.formData.user.sel_areas=[t[0],t[1]]},onChange:function(t){this.formData.user.area_sel=t.target.checked},onChange1:function(t){this.formData.user.level_sel=t.target.checked},onChange2:function(t){this.formData.user.label_sel=t.target.checked},onChange3:function(t){this.is_set_send_time=t.target.checked},getLists:function(){var t=this;this.request(l["a"].mailEdit,this.queryParam).then((function(a){if(t.fileList1=[],a.list.img){var e={uid:"logo",name:"logo_1",status:"done",url:a.list.img};t.fileList1.push(e)}t.$set(t,"formData",a.list),t.formData=a.list,a.list.set_send_time>0&&(t.is_set_send_time=!0),t.formData.user=a.list.users_label,t.cat_sel=a.cat_sel,t.options=a.options,t.level_sel=a.level_sel,t.label_sel=a.label_sel}))},disabledStartDate:function(t){},onDateStartChange:function(t,a){this.$set(this.formData,"set_send_time_date",a)},handleClose:function(){this.open2=!1},handlePreview1:function(t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,m(t.originFileObj);case 3:t.preview=e.sent;case 4:a.previewImage=t.url||t.preview,a.previewVisible1=!0;case 6:case"end":return e.stop()}}),e)})))()},handleChange1:function(t){var a=t.fileList;if(a.length>0){var e=a.length-1;this.fileList1=a,"done"==this.fileList1[e].status&&(this.formData.img=this.fileList1[e].response.data,this.fileList1[0].uid="logo_2",this.fileList1[0].name="logo_2",this.fileList1[0].status="done",this.fileList1[0].url=this.fileList1[e].response.data,a.length>1&&this.fileList1.splice(0,e))}},handleCancel1:function(){this.previewVisible1=!1},getLinkUrl:function(){var t=this;this.$LinkBases({source:"platform",type:"h5",source_id:"",handleOkBtn:function(a){console.log("handleOk",a),t.$nextTick((function(){t.$set(t.formData,"content",a.url)}))}})},returnBack:function(){this.$emit("getShow",{})},handleSubmit:function(){var t=this;this.request(l["a"].addData,this.formData).then((function(a){t.$message.success("新增成功"),t.$emit("getShow",{})}))},onChangeTime:function(t,a){this.formData.set_send_time_min=a,this.$set(this.formData,"set_send_time_min",a)}}},_=f,h=(e("de87"),e("2877")),v=Object(h["a"])(_,s,n,!1,null,"5f838a0e",null);a["default"]=v.exports},"7b1b":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-layout",[e("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"100px"}},[e("a-tabs",{attrs:{"default-active-key":"1"}},[e("a-tab-pane",{key:"1",attrs:{tab:"推送内容设置"}},[e("a-form",t._b({on:{submit:t.handleSubmit}},"a-form",{labelCol:{span:2},wrapperCol:{span:5}},!1),[e("a-row",[e("a-col",{staticClass:"label-font-size text-center",attrs:{span:2}},[e("a-button",{attrs:{type:"default"},on:{click:function(a){return t.returnBack()}}},[e("a-icon",{attrs:{type:"left"}})],1)],1)],1),e("br"),e("a-row",[e("a-col",{staticClass:"label-font-size text-right",attrs:{span:2}},[t._v(" 基本信息 ")])],1),e("br"),e("a-form-item",{attrs:{label:"所属分类",required:"true"}},[e("a-select",{model:{value:t.formData.category_type,callback:function(a){t.$set(t.formData,"category_type",a)},expression:"formData.category_type"}},[t._l(t.cat_sel,(function(a,s){return e("a-select-option",{key:s,attrs:{value:a.cat_id}},[t._v(" "+t._s(a.cat_name)+" ")])})),e("a-select-option",{attrs:{value:t.mall}},[t._v(" 商城 ")]),e("a-select-option",{attrs:{value:t.maidan}},[t._v(" 买单 ")]),e("a-select-option",{attrs:{value:t.group}},[t._v(" 团购 ")]),e("a-select-option",{attrs:{value:t.foodshop}},[t._v(" 外卖 ")])],2)],1),e("a-form-item",{attrs:{label:"渠道展示","wrapper-col":{span:10}}},[e("a-row",[e("a-col",{attrs:{span:24}},[e("a-radio-group",{model:{value:t.formData.type,callback:function(a){t.$set(t.formData,"type",a)},expression:"formData.type"}},[e("a-radio",{attrs:{value:0}},[t._v(" 全部 ")]),e("a-radio",{attrs:{value:1}},[t._v(" 仅手机系统推送 ")]),e("a-radio",{attrs:{value:2}},[t._v(" 仅消息中心推送 ")])],1)],1)],1)],1),e("a-form-item",{attrs:{label:"推送人群"}},[e("a-row",[e("a-col",{attrs:{span:24}},[e("a-radio-group",{model:{value:t.formData.users,callback:function(a){t.$set(t.formData,"users",a)},expression:"formData.users"}},[e("a-radio",{attrs:{value:0}},[t._v(" 全部 ")]),e("a-radio",{attrs:{value:1}},[t._v(" 指定人群 ")])],1)],1)],1),t.formData.users?[e("a-row",[e("a-col",{attrs:{span:24}},[e("a-col",{attrs:{span:3}},[e("a-checkbox",{attrs:{checked:t.formData.user.area_sel},on:{change:t.onChange}})],1),e("a-col",{attrs:{span:5}},[t._v("地区:")]),e("a-col",{attrs:{span:16}},[e("a-cascader",{attrs:{options:t.options,placeholder:"选择",value:t.formData.user.sel_areas},on:{change:t.onChangeArea}})],1)],1)],1),e("a-row",[e("a-col",{attrs:{span:24}},[e("a-col",{attrs:{span:3}},[e("a-checkbox",{attrs:{checked:t.formData.user.level_sel},on:{change:t.onChange1}})],1),e("a-col",{attrs:{span:5}},[t._v("用户等级:")]),e("a-col",{attrs:{span:16}},[e("a-select",{model:{value:t.formData.user.level,callback:function(a){t.$set(t.formData.user,"level",a)},expression:"formData.user.level"}},t._l(t.level_sel,(function(a,s){return e("a-select-option",{key:s,attrs:{value:a.id}},[t._v(" "+t._s(a.lname)+" ")])})),1)],1)],1)],1),e("a-row",[e("a-col",{attrs:{span:24}},[e("a-col",{attrs:{span:3}},[e("a-checkbox",{attrs:{checked:t.formData.user.label_sel},on:{change:t.onChange2}})],1),e("a-col",{attrs:{span:5}},[t._v("用户标签:")]),e("a-col",{attrs:{span:16}},[e("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"请选择用户标签",value:t.formData.user.label},on:{change:t.handleChange}},t._l(t.label_sel,(function(a){return e("a-select-option",{key:a,attrs:{value:a.id}},[t._v(" "+t._s(a.name)+" ")])})),1)],1)],1)],1)]:t._e()],2),2!=t.formData.type?[e("a-form-item",{attrs:{label:"推送端口","wrapper-col":{span:17}}},[e("a-row",[e("a-col",{attrs:{span:24}},[e("a-radio-group",{model:{value:t.formData.send_port,callback:function(a){t.$set(t.formData,"send_port",a)},expression:"formData.send_port"}},[e("a-radio",{attrs:{value:0}},[t._v(" 全部 ")]),e("a-radio",{attrs:{value:1}},[t._v(" 公众号 ")]),e("a-radio",{attrs:{value:2}},[t._v(" App ")])],1)],1)],1)],1)]:t._e(),e("a-form-item",{attrs:{label:"定时推送","wrapper-col":{span:16}}},[e("a-row",[e("a-col",{staticClass:"text-center",attrs:{span:1}},[e("a-checkbox",{attrs:{checked:t.is_set_send_time},on:{change:t.onChange3},model:{value:t.is_set_send_time,callback:function(a){t.is_set_send_time=a},expression:"is_set_send_time"}})],1),e("a-col",{staticClass:"text-left",attrs:{span:2}},[t._v(" 选择推送时间 ")]),t.is_set_send_time?[e("a-col",{attrs:{span:4}},[e("a-date-picker",{attrs:{format:"YYYY-MM-DD","disabled-date":t.disabledStartDate,placeholder:"请选择日期",getCalendarContainer:function(t){return t.parentNode}},on:{change:t.onDateStartChange}})],1),e("a-col",{attrs:{span:4}},[e("a-time-picker",{attrs:{format:"HH:mm",placeholder:"选择时间"},on:{change:t.onChangeTime}})],1)]:t._e(),e("a-col",{staticClass:"font-color",attrs:{span:24}},[t._v("勾选后可设置预约推送时间;否则点击发布按钮立即发布成功")])],2)],1),e("a-row",[e("a-col",{staticClass:"label-font-size text-right",attrs:{span:2}},[t._v(" 内容信息 ")])],1),e("br"),e("a-form-item",{attrs:{label:"主标题:","wrapper-col":{span:7},required:"true"}},[e("a-row",[e("a-col",{attrs:{span:18}},[e("a-input",{attrs:{placeholder:"请输入消息标题"},model:{value:t.formData.title,callback:function(a){t.$set(t.formData,"title",a)},expression:"formData.title"}})],1),e("a-col",{staticClass:"text-left font-color",attrs:{span:4}},[t._v(" 1-15个字符 ")])],1)],1),e("a-form-item",{attrs:{label:"描述","wrapper-col":{span:7}}},[e("a-row",[e("a-col",{attrs:{span:18}},[e("a-input",{attrs:{placeholder:"请输入消息描述"},model:{value:t.formData.desc,callback:function(a){t.$set(t.formData,"desc",a)},expression:"formData.desc"}})],1),e("a-col",{staticClass:"text-left font-color",attrs:{span:4}},[t._v(" 1-50个字符 ")])],1)],1),e("a-form-item",{attrs:{label:"标题图片"}},[e("a-row",[e("a-input",{attrs:{hidden:""},model:{value:t.formData.img,callback:function(a){t.$set(t.formData,"img",a)},expression:"formData.img"}}),[e("div",{staticClass:"clearfix"},[e("a-upload",{attrs:{action:t.action,name:t.uploadName,data:{upload_dir:t.upload_dir},"list-type":"picture-card","file-list":t.fileList1},on:{preview:t.handlePreview1,change:t.handleChange1}},[e("a-icon",{attrs:{type:"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v(" 上传图片 ")])],1),e("a-modal",{attrs:{visible:t.previewVisible1,footer:null},on:{cancel:t.handleCancel1}},[e("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)]],2)],1),e("a-form-item",{attrs:{label:"信息链接类型:"}},[e("a-row",[e("a-col",{attrs:{span:24}},[e("a-radio-group",{on:{change:t.contentChange},model:{value:t.formData.content_type,callback:function(a){t.$set(t.formData,"content_type",a)},expression:"formData.content_type"}},[e("a-radio",{attrs:{value:0}},[t._v(" 富文本 ")]),e("a-radio",{attrs:{value:1}},[t._v(" 自定义链接 ")])],1)],1)],1)],1),t.formData.content_type?[e("a-form-item",{attrs:{label:"自定义链接","wrapper-col":{span:8}}},[e("a-row",[e("a-col",{attrs:{span:10}},[e("div",{staticClass:"flex"},[e("a-input",{staticStyle:{"max-height":"100px","overflow-y":"auto",resize:"none"},attrs:{placeholder:t.L("功能库选择"),autoSize:""},model:{value:t.formData.content,callback:function(a){t.$set(t.formData,"content",a)},expression:"formData.content"}})],1)]),e("a-col",{attrs:{span:5}},[e("a",{staticClass:"ml-20",on:{click:function(a){return t.getLinkUrl()}}},[t._v(t._s(t.L("从功能库选择")))])])],1)],1)]:[e("a-form-item",{attrs:{label:"富文本","wrapper-col":{span:20}}},[e("a-row",[e("a-col",{attrs:{span:13}},[e("div",{staticClass:"flex"},[e("rich-text",{attrs:{info:t.formData.content},on:{"update:info":function(a){return t.$set(t.formData,"content",a)}}})],1)])],1)],1)],e("a-form-item",{attrs:{"wrapper-col":{span:20,offset:6}}},[e("a-row",{attrs:{type:"flex",justify:"center",align:"top"}},[e("a-col",{staticClass:"text-left",attrs:{span:4}}),e("a-col",{staticClass:"text-center",attrs:{span:6}}),e("a-col",{attrs:{span:6}},[e("a-button",{staticClass:"button-big",attrs:{type:"primary","html-type":"submit"}},[t._v(" 提交 ")])],1)],1)],1)],2)],1)],1)],1)],1)},n=[],i=e("1da1"),r=(e("96cf"),e("d3b7"),e("a9e3"),e("b0c0"),e("a434"),e("290c")),o=e("da05"),l=e("de0b"),c=e("c1df"),u=e.n(c),d=e("2d3d"),p=e("6ec1");function m(t){return new Promise((function(a,e){var s=new FileReader;s.readAsDataURL(t),s.onload=function(){return a(s.result)},s.onerror=function(t){return e(t)}}))}var f={name:"MailAdd",components:{TemplateEdit:d["default"],ACol:o["b"],ARow:r["a"],RichText:p["a"]},props:{mail_id:{type:[String,Number],default:"0"},upload_dir:{type:String,default:""}},data:function(){return{mall:"1-2",maidan:"1-3",group:"1-4",foodshop:"1-5",visible_staff:!0,open2:!1,cat_sel:[],options:[],level_sel:[],label_sel:[],fileList1:[],is_set_send_time:!1,previewVisible1:!1,set_send_time_min:"00:00:00",previewImage:"",action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",uploadName:"reply_pic",queryParam:{id:this.mail_id},formData:{category_type:"",category_id:0,type:0,users:0,send_port:0,set_send_time_date:0,set_send_time_min:"00:00:00",title:"",desc:"",img:"",content_type:0,content:"",user:{area_sel:!1,sel_areas:[],level_sel:!1,level:"",label_sel:!1,label:[]}},rules:{category_type:[{required:!0,message:"请选择所属分类",trigger:["blur","change"]}]}}},activated:function(){this.queryParam.id=this.mail_id,this.getLists()},created:function(){this.queryParam.id=this.mail_id,this.getLists()},methods:{moment:u.a,handleChange:function(t){this.formData.user.label=t},onChangeArea:function(t){this.formData.province_id=t[0],this.formData.city_id=t[1],this.formData.user.sel_areas=[t[0],t[1]]},onChange:function(t){this.formData.user.area_sel=t.target.checked},onChange1:function(t){this.formData.user.level_sel=t.target.checked},onChange2:function(t){this.formData.user.label_sel=t.target.checked},onChange3:function(t){this.is_set_send_time=t.target.checked,t.target.checked||this.$set(this.formData,"set_send_time_date","")},getLists:function(){var t=this;this.request(l["a"].mailEdit,this.queryParam).then((function(a){t.fileList1=[],t.cat_sel=a.cat_sel,t.options=a.options,t.level_sel=a.level_sel,t.label_sel=a.label_sel}))},disabledStartDate:function(t){},onDateStartChange:function(t,a){this.$set(this.formData,"set_send_time_date",a)},handleClose:function(){this.open2=!1},handlePreview1:function(t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,m(t.originFileObj);case 3:t.preview=e.sent;case 4:a.previewImage=t.url||t.preview,a.previewVisible1=!0;case 6:case"end":return e.stop()}}),e)})))()},handleChange1:function(t){var a=t.fileList;if(a.length>0){var e=a.length-1;this.fileList1=a,"done"==this.fileList1[e].status&&(this.formData.img=this.fileList1[e].response.data,this.fileList1[0].uid="logo_2",this.fileList1[0].name="logo_2",this.fileList1[0].status="done",this.fileList1[0].url=this.fileList1[e].response.data,a.length>1&&this.fileList1.splice(0,e))}},handleCancel1:function(){this.previewVisible1=!1},getLinkUrl:function(){var t=this;this.$LinkBases({source:"platform",type:"h5",source_id:"",handleOkBtn:function(a){console.log("handleOk",a),t.$nextTick((function(){t.$set(t.formData,"content",a.url)}))}})},returnBack:function(){this.$emit("getShow",{})},handleSubmit:function(t){var a=this;t.preventDefault(),this.request(l["a"].addData,this.formData).then((function(t){a.$message.success("新增成功"),a.$emit("getShow",{})}))},onChangeTime:function(t,a){this.formData.set_send_time_min=a,this.$set(this.formData,"set_send_time_min",a)},contentChange:function(){this.formData.content=""}}},_=f,h=(e("c598"),e("2877")),v=Object(h["a"])(_,s,n,!1,null,"3ea7d167",null);a["default"]=v.exports},"811d":function(t,a,e){"use strict";e("07656")},"98b71":function(t,a,e){},c598:function(t,a,e){"use strict";e("98b71")},de0b:function(t,a,e){"use strict";var s={mailList:"/common/platform.user.Mail/mailList",mailEdit:"/common/platform.user.Mail/editMail",delData:"/common/platform.user.Mail/delData",addData:"/common/platform.user.Mail/addData"};a["a"]=s},de87:function(t,a,e){"use strict";e("16a3")}}]);