(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ab6246c"],{"345a":function(e,t,a){},c4d0:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.modelTitle,width:900,visible:e.visible,"confirm-loading":e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleSubCancel}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.spaceForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},["添加车位"==e.modelTitle?a("div",{staticClass:"add_space"},[a("a-form-model-item",{attrs:{label:"车库名称",prop:"garage_id"}},[e.visible?a("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption},on:{change:function(t){return e.handleSelectChange(t,"garage_id")}}},e._l(e.garageList,(function(t,i){return a("a-select-option",{attrs:{value:t.garage_id}},[e._v(" "+e._s(t.garage_num)+" ")])})),1):e._e()],1),a("a-form-model-item",{attrs:{label:"车位号",prop:"position_num",extra:"不能用中文"}},[a("a-input",{attrs:{placeholder:"请输入车位号"},model:{value:e.spaceForm.position_num,callback:function(t){e.$set(e.spaceForm,"position_num",t)},expression:"spaceForm.position_num"}})],1),a("a-form-model-item",{attrs:{label:"绑定业主",prop:"pigcms_id"}},[a("div",{staticStyle:{display:"flex","flex-direction":"column","margin-top":"5px"}},[a("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"手机号或业主姓名搜索业主"},on:{change:function(t){return e.searchUser()}},model:{value:e.searchVal,callback:function(t){e.searchVal=t},expression:"searchVal"}}),e.searchUserList.length>0?a("a-select",{staticStyle:{width:"200px"},attrs:{open:!0,"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.spaceForm.pigcms_id},on:{change:function(t){return e.handleSelectChange(t,"pigcms_id")}}},e._l(e.searchUserList,(function(t,i){return a("a-select-option",{attrs:{value:t.pigcms_id}},[e._v(" "+e._s(t.name)+" ")])})),1):e._e()],1)]),e.children_type?a("a-form-model-item",{attrs:{label:"车位类型",prop:"children_position_type"}},[a("a-radio-group",{attrs:{name:"radioGroup"},model:{value:e.spaceForm.children_type,callback:function(t){e.$set(e.spaceForm,"children_type",t)},expression:"spaceForm.children_type"}},[a("a-radio",{attrs:{value:1}},[e._v("母车位")]),a("a-radio",{attrs:{value:2}},[e._v("子车位")])],1)],1):e._e(),a("a-form-model-item",{attrs:{label:"车位面积",prop:"position_area"}},[a("a-input",{attrs:{placeholder:"请输入车位面积"},model:{value:e.spaceForm.position_area,callback:function(t){e.$set(e.spaceForm,"position_area",t)},expression:"spaceForm.position_area"}})],1),a("a-form-model-item",{attrs:{label:"备注",prop:"position_note"}},[a("a-textarea",{staticStyle:{padding:"5px",width:"200px",height:"100px",resize:"none"},attrs:{placeholder:"请输入"},model:{value:e.spaceForm.position_note,callback:function(t){e.$set(e.spaceForm,"position_note",t)},expression:"spaceForm.position_note"}})],1)],1):a("div",{staticClass:"edit_space"},[a("a-form-model-item",{attrs:{label:"车库",prop:"garage_id"}},[a("a-select",{staticStyle:{width:"200px"},attrs:{"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.spaceForm.garage_id},on:{change:function(t){return e.handleSelectChange(t,"garage_id")}}},e._l(e.garageList,(function(t,i){return a("a-select-option",{attrs:{value:t.garage_id}},[e._v(" "+e._s(t.garage_num)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"车位号",prop:"position_num",extra:"不能用中文"}},[a("a-input",{attrs:{placeholder:"请输入车位号"},model:{value:e.spaceForm.position_num,callback:function(t){e.$set(e.spaceForm,"position_num",t)},expression:"spaceForm.position_num"}})],1),a("a-form-model-item",{attrs:{label:"当前绑定业主",prop:"current"}},[e._v(" 【姓名】"+e._s(e.spaceForm.name?e.spaceForm.name:"暂无")+" 【手机号】"+e._s(e.spaceForm.phone?e.spaceForm.phone:"暂无")+" ")]),a("a-form-model-item",{attrs:{label:"绑定业主",prop:"pigcms_id"}},[a("div",{staticStyle:{display:"flex","flex-direction":"column","margin-top":"5px"}},[a("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"手机号或业主姓名搜索业主"},on:{change:function(t){return e.searchUser()}},model:{value:e.searchVal,callback:function(t){e.searchVal=t},expression:"searchVal"}}),e.searchUserList.length>0?a("a-select",{staticStyle:{width:"200px"},attrs:{open:!0,"show-search":"",placeholder:"请选择","filter-option":e.filterOption,value:e.spaceForm.pigcms_id},on:{change:function(t){return e.handleSelectChange(t,"pigcms_id")}}},e._l(e.searchUserList,(function(t,i){return a("a-select-option",{attrs:{value:t.pigcms_id}},[e._v(" "+e._s(t.name)+" ")])})),1):e._e()],1)]),e.visible?a("a-form-model-item",{attrs:{label:"停车到期时间",prop:"end_time"}},[e.spaceForm.end_time?a("a-date-picker",{attrs:{placeholder:"请选择停车到期时间",disabled:e.disabled,value:e.moment(e.spaceForm.end_time,e.dateFormat)},on:{change:e.ondateChange}}):a("a-date-picker",{attrs:{placeholder:"请选择停车到期时间",disabled:e.disabled},on:{change:e.ondateChange}})],1):e._e(),e.spaceForm.children_position_type?a("a-form-model-item",{attrs:{label:"车位类型",prop:"children_position_type"}},[a("a-radio-group",{model:{value:e.spaceForm.children_type,callback:function(t){e.$set(e.spaceForm,"children_type",t)},expression:"spaceForm.children_type"}},[a("a-radio",{staticStyle:{"padding-right":"10px"},attrs:{value:1}},[e._v("母车位")]),a("a-radio",{attrs:{value:2}},[e._v("子车位")])],1)],1):e._e(),a("a-form-model-item",{attrs:{label:"车位面积",prop:"position_area"}},[a("a-input",{attrs:{placeholder:"请输入车位面积","addon-after":"平方米"},model:{value:e.spaceForm.position_area,callback:function(t){e.$set(e.spaceForm,"position_area",t)},expression:"spaceForm.position_area"}})],1),a("a-form-model-item",{attrs:{label:"备注",prop:"position_note"}},[a("a-textarea",{staticStyle:{padding:"5px",width:"200px",height:"100px",resize:"none"},attrs:{placeholder:"请输入"},model:{value:e.spaceForm.position_note,callback:function(t){e.$set(e.spaceForm,"position_note",t)},expression:"spaceForm.position_note"}})],1),a("a-form-model-item",{attrs:{label:"租售状态",prop:"position_type"}},[a("a-input",{attrs:{disabled:!0,placeholder:"请输入租售状态"},model:{value:e.spaceForm.position_status_txt,callback:function(t){e.$set(e.spaceForm,"position_status_txt",t)},expression:"spaceForm.position_status_txt"}})],1)],1)])],1)},o=[],r=(a("a9e3"),a("d81d"),a("b0c0"),a("a0e0")),s=a("c1df"),n=a.n(s),l={props:{position_id:{type:String,default:""},children_type:{type:[String,Number],default:0},visible:{type:Boolean,default:!1},modelTitle:{type:String,default:""},space_type:{type:String,default:"add"}},watch:{position_id:{immediate:!0,handler:function(e){"edit"==this.space_type&&this.getSpaceInfo()}}},mounted:function(){this.getGarageList()},data:function(){return{confirmLoading:!1,children_type_show:!1,labelCol:{span:4},wrapperCol:{span:14},spaceForm:{garage_id:"",children_type:1},rules:{garage_id:[{required:!0,message:"请选择车场",trigger:"blur"}],position_num:[{required:!0,message:"请输入车位号",trigger:"blur"}]},garageList:[],dateFormat:"YYYY/MM/DD",disabled:!1,searchVal:"",searchUserList:[]}},methods:{moment:n.a,getSpaceInfo:function(){var e=this;this.position_id&&e.request(r["a"].getPositionInfo,{position_id:this.position_id}).then((function(t){e.spaceForm=t,2==e.spaceForm.children_type?e.disabled=!0:e.disabled=!1}))},getGarageList:function(){var e=this;e.request(r["a"].getGarageList,{}).then((function(t){e.garageList=t.list}))},clearForm:function(){this.spaceForm={garage_id:"",children_type:1},this.searchVal=""},handleSubmit:function(e){var t=this;this.confirmLoading=!0,this.$refs.ruleForm.validate((function(e){if(!e)return t.confirmLoading=!1,!1;var a=t,i=r["a"].addParkPosition;"edit"==t.space_type&&(i=r["a"].editParkPosition),a.request(i,a.spaceForm).then((function(e){"edit"==t.space_type?a.$message.success("编辑成功！"):a.$message.success("添加成功！"),t.$emit("closeSpace",!0),t.clearForm(),t.confirmLoading=!1})).catch((function(e){t.confirmLoading=!1}))}))},handleSubCancel:function(e){this.$refs.ruleForm.resetFields(),this.confirmLoading=!1,this.$emit("closeSpace",!1),this.clearForm()},handleSelectChange:function(e,t){var a=this;this.spaceForm[t]=e,"pigcms_id"==t&&this.searchUserList.map((function(t){t.pigcms_id==e&&(a.searchVal=t.name,a.searchUserList=[],console.log("v.pigcms_id=====>",t.pigcms_id))})),this.$forceUpdate()},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},ondateChange:function(e,t){this.spaceForm.end_time=t},searchUser:function(){var e=this;this.searchVal?e.request(r["a"].getParkUserInfo,{value:this.searchVal}).then((function(t){e.searchUserList=t})):(e.searchUserList=[],e.spaceForm.pigcms_id="")}}},c=l,p=(a("fcd6"),a("2877")),d=Object(p["a"])(c,i,o,!1,null,"3ac1dfc4",null);t["default"]=d.exports},fcd6:function(e,t,a){"use strict";a("345a")}}]);