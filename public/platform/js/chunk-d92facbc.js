(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d92facbc","chunk-2d0b8a19","chunk-2d22d403","chunk-2d0b3786"],{"244b":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-card",{staticClass:"card",attrs:{title:"仓库管理",bordered:!1}},[r("repository-form",{ref:"repository",attrs:{showSubmit:!1}})],1),r("a-card",{staticClass:"card",attrs:{title:"任务管理",bordered:!1}},[r("task-form",{ref:"task",attrs:{showSubmit:!1}})],1),r("a-card",[r("a-table",{attrs:{columns:e.columns,dataSource:e.data,pagination:!1,loading:e.memberLoading},scopedSlots:e._u([e._l(["name","workId","department"],(function(t,a){return{key:t,fn:function(s,o){return[o.editable?r("a-input",{key:t,staticStyle:{margin:"-5px 0"},attrs:{value:s,placeholder:e.columns[a].title},on:{change:function(r){return e.handleChange(r.target.value,o.key,t)}}}):[e._v(e._s(s))]]}}})),{key:"operation",fn:function(t,a){return[a.editable?[a.isNew?r("span",[r("a",{on:{click:function(t){return e.saveRow(a)}}},[e._v("添加")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(t){return e.remove(a.key)}}},[r("a",[e._v("删除")])])],1):r("span",[r("a",{on:{click:function(t){return e.saveRow(a)}}},[e._v("保存")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(t){return e.cancel(a.key)}}},[e._v("取消")])],1)]:r("span",[r("a",{on:{click:function(t){return e.toggle(a.key)}}},[e._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(t){return e.remove(a.key)}}},[r("a",[e._v("删除")])])],1)]}}],null,!0)}),r("a-button",{staticStyle:{width:"100%","margin-top":"16px","margin-bottom":"8px"},attrs:{type:"dashed",icon:"plus"},on:{click:e.newMember}},[e._v("新增成员")])],1),r("footer-tool-bar",{style:{width:e.isSideMenu()&&e.isDesktop()?"calc(100% - "+(e.sidebarOpened?256:80)+"px)":"100%"}},[r("span",{staticClass:"popover-wrapper"},[r("a-popover",{attrs:{title:"表单校验信息",overlayClassName:"antd-pro-pages-forms-style-errorPopover",trigger:"click",getPopupContainer:function(e){return e.parentNode}}},[r("template",{slot:"content"},e._l(e.errors,(function(t){return r("li",{key:t.key,staticClass:"antd-pro-pages-forms-style-errorListItem",on:{click:function(r){return e.scrollToField(t.key)}}},[r("a-icon",{staticClass:"antd-pro-pages-forms-style-errorIcon",attrs:{type:"cross-circle-o"}}),r("div",{},[e._v(e._s(t.message))]),r("div",{staticClass:"antd-pro-pages-forms-style-errorField"},[e._v(e._s(t.fieldLabel))])],1)})),0),e.errors.length>0?r("span",{staticClass:"antd-pro-pages-forms-style-errorIcon"},[r("a-icon",{attrs:{type:"exclamation-circle"}}),e._v(e._s(e.errors.length)+" ")],1):e._e()],2)],1),r("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.validate}},[e._v("提交")])],1)],1)},s=[],o=r("2909"),n=r("5530"),i=(r("d3b7"),r("25f0"),r("4de4"),r("b0c0"),r("7db0"),r("159b"),r("b64b"),r("3ca3"),r("ddb0"),r("d81d"),r("3006")),l=r("f762"),c=r("5a70"),d=r("ac0d"),u={name:"仓库名",url:"仓库域名",owner:"仓库管理员",approver:"审批人",dateRange:"生效日期",type:"仓库类型",name2:"任务名",url2:"任务描述",owner2:"执行人",approver2:"责任人",dateRange2:"生效日期",type2:"任务类型"},m={name:"AdvancedForm",mixins:[d["b"],d["c"]],components:{FooterToolBar:c["a"],RepositoryForm:i["default"],TaskForm:l["default"]},data:function(){return{description:"高级表单常见于一次性输入和提交大批量数据的场景。",loading:!1,memberLoading:!1,columns:[{title:"成员姓名",dataIndex:"name",key:"name",width:"20%",scopedSlots:{customRender:"name"}},{title:"工号",dataIndex:"workId",key:"workId",width:"20%",scopedSlots:{customRender:"workId"}},{title:"所属部门",dataIndex:"department",key:"department",width:"40%",scopedSlots:{customRender:"department"}},{title:"操作",key:"action",scopedSlots:{customRender:"operation"}}],data:[{key:"1",name:"小明",workId:"001",editable:!1,department:"行政部"},{key:"2",name:"李莉",workId:"002",editable:!1,department:"IT部"},{key:"3",name:"王小帅",workId:"003",editable:!1,department:"财务部"}],errors:[]}},methods:{handleSubmit:function(e){e.preventDefault()},newMember:function(){var e=this.data.length;this.data.push({key:0===e?"1":(parseInt(this.data[e-1].key)+1).toString(),name:"",workId:"",department:"",editable:!0,isNew:!0})},remove:function(e){var t=this.data.filter((function(t){return t.key!==e}));this.data=t},saveRow:function(e){var t=this;this.memberLoading=!0;var r=e.key,a=e.name,s=e.workId,o=e.department;if(!a||!s||!o)return this.memberLoading=!1,void this.$message.error("请填写完整成员信息。");new Promise((function(e){setTimeout((function(){e({loop:!1})}),800)})).then((function(){var e=t.data.find((function(e){return e.key===r}));e.editable=!1,e.isNew=!1,t.memberLoading=!1}))},toggle:function(e){var t=this.data.find((function(t){return t.key===e}));t._originalData=Object(n["a"])({},t),t.editable=!t.editable},getRowByKey:function(e,t){var r=this.data;return(t||r).find((function(t){return t.key===e}))},cancel:function(e){var t=this.data.find((function(t){return t.key===e}));Object.keys(t).forEach((function(e){t[e]=t._originalData[e]})),t._originalData=void 0},handleChange:function(e,t,r){var a=Object(o["a"])(this.data),s=a.find((function(e){return t===e.key}));s&&(s[r]=e,this.data=a)},validate:function(){var e=this,t=this.$refs,r=t.repository,a=t.task,s=this.$notification,o=new Promise((function(e,t){r.form.validateFields((function(r,a){r?t(r):e(a)}))})),i=new Promise((function(e,t){a.form.validateFields((function(r,a){r?t(r):e(a)}))}));this.errors=[],Promise.all([o,i]).then((function(e){s["error"]({message:"Received values of form:",description:JSON.stringify(e)})})).catch((function(){var t=Object.assign({},r.form.getFieldsError(),a.form.getFieldsError()),s=Object(n["a"])({},t);e.errorList(s)}))},errorList:function(e){e&&0!==e.length&&(this.errors=Object.keys(e).filter((function(t){return e[t]})).map((function(t){return{key:t,message:e[t][0],fieldLabel:u[t]}})))},scrollToField:function(e){var t=document.querySelector('label[for="'.concat(e,'"]'));t&&t.scrollIntoView(!0)}}},p=m,f=(r("4dde"),r("0c7c")),v=Object(f["a"])(p,a,s,!1,null,"6990f706",null);t["default"]=v.exports},2909:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r("6b75");function s(e){if(Array.isArray(e))return Object(a["a"])(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function o(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var n=r("06c5");function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return s(e)||o(e)||Object(n["a"])(e)||i()}},3006:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[r("a-row",{staticClass:"form-row",attrs:{gutter:16}},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:"仓库名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入仓库名称",whitespace:!0}]}],expression:"[\n            'name',\n            {rules: [{ required: true, message: '请输入仓库名称', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入仓库名称"}})],1)],1),r("a-col",{attrs:{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:"仓库域名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"请输入仓库域名",whitespace:!0},{validator:e.validate}]}],expression:"[\n            'url',\n            {rules: [{ required: true, message: '请输入仓库域名', whitespace: true}, {validator: validate}]}\n          ]"}],attrs:{addonBefore:"http://",addonAfter:".com",placeholder:"请输入"}})],1)],1),r("a-col",{attrs:{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:"仓库管理员"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["owner",{rules:[{required:!0,message:"请选择管理员"}]}],expression:"[ 'owner', {rules: [{ required: true, message: '请选择管理员'}]} ]"}],attrs:{placeholder:"请选择管理员"}},[r("a-select-option",{attrs:{value:"王同学"}},[e._v("王同学")]),r("a-select-option",{attrs:{value:"李同学"}},[e._v("李同学")]),r("a-select-option",{attrs:{value:"黄同学"}},[e._v("黄同学")])],1)],1)],1)],1),r("a-row",{staticClass:"form-row",attrs:{gutter:16}},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:"审批人"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["approver",{rules:[{required:!0,message:"请选择审批员"}]}],expression:"[ 'approver', {rules: [{ required: true, message: '请选择审批员'}]} ]"}],attrs:{placeholder:"请选择审批员"}},[r("a-select-option",{attrs:{value:"王晓丽"}},[e._v("王晓丽")]),r("a-select-option",{attrs:{value:"李军"}},[e._v("李军")])],1)],1)],1),r("a-col",{attrs:{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:"生效日期"}},[r("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["dateRange",{rules:[{required:!0,message:"请选择生效日期"}]}],expression:"[\n            'dateRange',\n            {rules: [{ required: true, message: '请选择生效日期'}]}\n          ]"}],staticStyle:{width:"100%"}})],1)],1),r("a-col",{attrs:{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:"仓库类型"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"请选择仓库类型"}]}],expression:"[\n            'type',\n            {rules: [{ required: true, message: '请选择仓库类型'}]}\n          ]"}],attrs:{placeholder:"请选择仓库类型"}},[r("a-select-option",{attrs:{value:"公开"}},[e._v("公开")]),r("a-select-option",{attrs:{value:"私密"}},[e._v("私密")])],1)],1)],1)],1),e.showSubmit?r("a-form-item",[r("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)},s=[],o=(r("ac1f"),{name:"RepositoryForm",props:{showSubmit:{type:Boolean,default:!1}},data:function(){return{form:this.$form.createForm(this)}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){e||t.$notification["error"]({message:"Received values of form:",description:r})}))},validate:function(e,t,r){var a=/^user-(.*)$/;a.test(t)||r(new Error("需要以 user- 开头")),r()}}}),n=o,i=r("0c7c"),l=Object(i["a"])(n,a,s,!1,null,"3e542e97",null);t["default"]=l.exports},"4dde":function(e,t,r){"use strict";r("e723")},e723:function(e,t,r){},f762:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[r("a-row",{staticClass:"form-row",attrs:{gutter:16}},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:"任务名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name2",{rules:[{required:!0,message:"请输入任务名称",whitespace:!0}]}],expression:"[ 'name2', {rules: [{ required: true, message: '请输入任务名称', whitespace: true}]} ]"}],attrs:{placeholder:"请输入任务名称"}})],1)],1),r("a-col",{attrs:{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:"任务描述"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url2",{rules:[{required:!0,message:"请输入任务描述",whitespace:!0}]}],expression:"[ 'url2', {rules: [{ required: true, message: '请输入任务描述', whitespace: true}]} ]"}],attrs:{placeholder:"请输入任务描述"}})],1)],1),r("a-col",{attrs:{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:"执行人"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["owner2",{rules:[{required:!0,message:"请选择执行人"}]}],expression:"[\n            'owner2',\n            {rules: [{ required: true, message: '请选择执行人'}]}\n          ]"}],attrs:{placeholder:"请选择执行人"}},[r("a-select-option",{attrs:{value:"黄丽丽"}},[e._v("黄丽丽")]),r("a-select-option",{attrs:{value:"李大刀"}},[e._v("李大刀")])],1)],1)],1)],1),r("a-row",{staticClass:"form-row",attrs:{gutter:16}},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:"责任人"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["approver2",{rules:[{required:!0,message:"请选择责任人"}]}],expression:"[\n            'approver2',\n            {rules: [{ required: true, message: '请选择责任人'}]}\n          ]"}],attrs:{placeholder:"请选择责任人"}},[r("a-select-option",{attrs:{value:"王伟"}},[e._v("王伟")]),r("a-select-option",{attrs:{value:"李红军"}},[e._v("李红军")])],1)],1)],1),r("a-col",{attrs:{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:"提醒时间"}},[r("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["dateRange2",{rules:[{required:!0,message:"请选择提醒时间"}]}],expression:"[\n            'dateRange2',\n            {rules: [{ required: true, message: '请选择提醒时间'}]}\n          ]"}],staticStyle:{width:"100%"}})],1)],1),r("a-col",{attrs:{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:"任务类型"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type2",{rules:[{required:!0,message:"请选择任务类型"}]}],expression:"[ 'type2', {rules: [{ required: true, message: '请选择任务类型'}]} ]"}],attrs:{placeholder:"请选择任务类型"}},[r("a-select-option",{attrs:{value:"定时执行"}},[e._v("定时执行")]),r("a-select-option",{attrs:{value:"周期执行"}},[e._v("周期执行")])],1)],1)],1)],1),e.showSubmit?r("a-form-item",[r("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)},s=[],o={name:"TaskForm",props:{showSubmit:{type:Boolean,default:!1}},data:function(){return{form:this.$form.createForm(this)}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){e||t.$notification["error"]({message:"Received values of form:",description:r})}))}}},n=o,i=r("0c7c"),l=Object(i["a"])(n,a,s,!1,null,"3075c81f",null);t["default"]=l.exports}}]);