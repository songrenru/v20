(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3efe417a","chunk-34ecd1dc"],{"46d6":function(e,t,a){},8502:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.modelTitle,width:900,visible:e.visible,"confirm-loading":e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleSubCancel}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.freeForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("div",{staticClass:"add_black"},[a("a-form-model-item",{attrs:{label:"车牌类型",prop:"park_type"}},[a("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.freeForm.park_type},on:{change:function(t){return e.handleSelectChange(t,"park_type")}}},e._l(e.parkTypeList,(function(t,r){return a("a-select-option",{attrs:{value:1*t.park_type}},[e._v(" "+e._s(t.label)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"车牌开头包含",prop:"first_name"}},[a("a-input",{attrs:{placeholder:"请输入车牌开头包含"},model:{value:e.freeForm.first_name,callback:function(t){e.$set(e.freeForm,"first_name",t)},expression:"freeForm.first_name"}})],1),a("a-form-model-item",{attrs:{label:"车牌结尾包含",prop:"last_name"}},[a("a-input",{attrs:{placeholder:"请输入车牌结尾包含"},model:{value:e.freeForm.last_name,callback:function(t){e.$set(e.freeForm,"last_name",t)},expression:"freeForm.last_name"}})],1),a("a-form-model-item",{attrs:{label:"完整车牌",prop:"free_park"}},[a("a-input",{attrs:{placeholder:"请输入完整车牌"},model:{value:e.freeForm.free_park,callback:function(t){e.$set(e.freeForm,"free_park",t)},expression:"freeForm.free_park"}})],1)],1)])],1)},i=[],n=a("a0e0"),o={props:{visible:{type:Boolean,default:!1},modelTitle:{type:String,default:""},free_type:{type:String,default:""},free_id:{type:String,default:""}},watch:{free_id:{immediate:!0,handler:function(e){"edit"==this.free_type&&this.getFreeInfo()}}},data:function(){return{confirmLoading:!1,labelCol:{span:4},wrapperCol:{span:14},freeForm:{park_type:""},rules:{park_type:[{required:!0,message:"请选择车牌类型",trigger:"blur"}]},parkTypeList:[]}},mounted:function(){this.getParkType()},methods:{clearForm:function(){this.freeForm={park_type:""}},getFreeInfo:function(){var e=this;e.free_id&&e.request(n["a"].getFreeCarInfo,{free_id:e.free_id}).then((function(t){e.freeForm=t,e.freeForm.free_id=t.id}))},getParkType:function(){var e=this;e.request(n["a"].getParkType,{}).then((function(t){for(var a in t)e.parkTypeList.push({park_type:a,label:t[a]})}))},handleSubmit:function(e){var t=this;this.confirmLoading=!0,this.$refs.ruleForm.validate((function(e){if(!e)return console.log("error submit!!"),t.confirmLoading=!1,!1;var a=t,r=n["a"].addFreeCar;"edit"==t.free_type&&(r=n["a"].editFreeCar),a.request(r,a.freeForm).then((function(e){"edit"==t.free_type?a.$message.success("编辑成功！"):a.$message.success("添加成功！"),t.$emit("closeFree",!0),t.clearForm(),t.confirmLoading=!1})).catch((function(e){t.confirmLoading=!1}))}))},handleSubCancel:function(e){this.$refs.ruleForm.resetFields(),this.confirmLoading=!1,this.$emit("closeFree",!1),this.clearForm()},handleSelectChange:function(e,t){this.freeForm[t]=e,this.$forceUpdate()},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0}}},s=o,l=(a("8cde"),a("2877")),c=Object(l["a"])(s,r,i,!1,null,"37aadd1c",null);t["default"]=c.exports},"8cde":function(e,t,a){"use strict";a("46d6")},"8ed0":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"free_car"},[a("div",{staticClass:"header_search"},[a("a-collapse",{attrs:{accordion:""}},[a("a-collapse-panel",{key:"1",attrs:{header:"操作说明"}},[e._v(" 免费车说明，免费车管理设置了车辆信息后，支持车辆免费进出，免费车信息受黑名单限制（同一车辆在免费车管理、黑名单、都有车辆信息、不支持车辆免费出入） ")])],1)],1),a("div",{staticClass:"header_search",staticStyle:{display:"flex","padding-top":"0"}},[a("div",{staticClass:"search_item"},[a("label",{staticClass:"label_title"},[e._v("车牌类型：")]),a("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.pageInfo.park_type},on:{change:function(t){return e.handleSelectChange(t,"park_type")}}},e._l(e.parkTypeList,(function(t,r){return a("a-select-option",{attrs:{value:t.park_type}},[e._v(" "+e._s(t.label)+" ")])})),1)],1),a("div",{staticClass:"search_item",staticStyle:{"margin-left":"20px"}},[a("label",{staticClass:"label_title"},[e._v("车牌号：")]),a("a-input",{staticStyle:{width:"200px"},model:{value:e.pageInfo.free_name,callback:function(t){e.$set(e.pageInfo,"free_name",t)},expression:"pageInfo.free_name"}})],1),a("div",{staticClass:"search_item",staticStyle:{"margin-left":"10px"}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.queryThis()}}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.clearThis()}}},[e._v("清空")])],1)]),a("div",{staticClass:"header_search",staticStyle:{"padding-top":"0"}},[a("a-button",{attrs:{type:"primary"},on:{click:e.addThis}},[e._v("添加")])],1),a("div",{staticClass:"table_content"},[a("a-table",{attrs:{columns:e.columns,"row-key":function(e){return e.id},pagination:e.pageInfo,loading:e.tableLoadding,"data-source":e.freecarList},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.editThis(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定要删除该项吗?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.delConfirm(r)},cancel:e.delCancel}},[a("a",{staticStyle:{color:"red"}},[e._v("删除")])])],1)}}])}),a("free-model",{attrs:{free_type:e.free_type,free_id:e.free_id,visible:e.freeVisible,modelTitle:e.modelTitle},on:{closeFree:e.closeFree}})],1)])},i=[],n=a("8502"),o=a("a0e0"),s=[{title:"编号",dataIndex:"id",key:"id"},{title:"车牌类型",dataIndex:"park_type",key:"park_type"},{title:"车牌号",dataIndex:"free_name",key:"free_name"},{title:"添加时间",dataIndex:"addTime",key:"addTime"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],l={data:function(){return{columns:s,freeVisible:!1,modelTitle:"",pageInfo:{current:1,page:1,park_type:"",free_name:"",pageSize:20,total:0},tableLoadding:!1,freecarList:[],free_type:"add",free_id:"",typeList:[{id:0,label:"军车"},{id:1,label:"警车"},{id:2,label:"消防车"}],frequency:!1,parkTypeList:[]}},components:{freeModel:n["default"]},mounted:function(){this.getParkType(),this.getFreeList()},methods:{queryThis:function(){var e=this;if(this.frequency)this.$message.warn("请求频繁，请稍后再试");else{this.frequency=!0;var t=setTimeout((function(){e.frequency=!1,clearTimeout(t)}),2e3);this.getFreeList()}},clearThis:function(){this.pageInfo={current:1,page:1,park_type:"",free_name:"",pageSize:20,total:0},this.getFreeList()},handleTableChange:function(e,t,a){this.pageInfo.current=e.current,this.pageInfo.page=e.current,this.getFreeList()},getFreeList:function(){var e=this;e.tableLoadding=!0,e.request(o["a"].getFreeCar,e.pageInfo).then((function(t){e.freecarList=t.list,e.pageInfo.total=t.count,e.tableLoadding=!1}))},getParkType:function(){var e=this;e.request(o["a"].getParkType,{}).then((function(t){for(var a in t)e.parkTypeList.push({park_type:a,label:t[a]})}))},handleSelectChange:function(e,t){this.pageInfo[t]=e},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},editThis:function(e){this.free_type="edit",this.modelTitle="编辑免费车",this.freeVisible=!0,this.free_id=e.id+""},delConfirm:function(e){var t=this;t.request(o["a"].delFreeCar,{free_id:e.id}).then((function(e){t.getFreeList(),t.$message.success("删除成功！")}))},delCancel:function(){},closeFree:function(e){this.free_id="",this.freeVisible=!1,e&&this.getFreeList()},addThis:function(){this.free_type="add",this.modelTitle="添加免费车",this.freeVisible=!0}}},c=l,f=(a("ab36"),a("2877")),d=Object(f["a"])(c,r,i,!1,null,"a9041b44",null);t["default"]=d.exports},a510:function(e,t,a){},ab36:function(e,t,a){"use strict";a("a510")}}]);