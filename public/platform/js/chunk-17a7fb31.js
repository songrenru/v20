(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17a7fb31"],{"30e4":function(e,o,r){},"6fdab":function(e,o,r){"use strict";r("30e4")},f10b:function(e,o,r){"use strict";r.r(o);var t=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("a-modal",{attrs:{title:e.title,width:900,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading,height:800}},[r("a-form",{staticClass:"project_info_1",attrs:{form:e.form}},[r("a-form-item",{attrs:{label:e.record.orgTypeTxt+"名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[e._v(" "+e._s(e.record.orgName)+" ")]),e.record.buildingNumber?r("a-form-item",{attrs:{label:e.record.orgTypeTxt+"编号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[e._v(" "+e._s(e.record.buildingNumber)+" ")]):e._e(),e.record.id?r("a-form-item",{attrs:{label:e.record.orgTypeTxt+"ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[e._v(" "+e._s(e.record.id)+" ")]):e._e(),e.record.orgCode?r("a-form-item",{attrs:{label:e.record.orgTypeTxt+"组织编码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[e._v(" "+e._s(e.record.orgCode)+" ")]):e._e(),e.record.unitNum?r("a-form-item",{attrs:{label:"单元数量",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[e._v(" "+e._s(e.record.unitNum)+" ")]):e._e(),e.record.floorNum?r("a-form-item",{attrs:{label:"单元楼层数",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[e._v(" "+e._s(e.record.floorNum)+" ")]):e._e(),e.record.houseNum?r("a-form-item",{attrs:{label:"楼层房屋数",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[e._v(" "+e._s(e.record.houseNum)+" ")]):e._e(),e.record.totalHouseNum?r("a-form-item",{attrs:{label:"房屋总数",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[e._v(" "+e._s(e.record.totalHouseNum)+" ")]):e._e(),e.record.sysModel?r("a-form-item",{attrs:{label:"同步匹配",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[e._v(" "+e._s(e.record.sysModel)+" ")]):e._e(),e.record.sysModelName?r("a-form-item",{attrs:{label:"匹配对象",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[e._v(" "+e._s(e.record.sysModelName)+" ")]):e._e(),12!=e.record.orgType?r("a-form-item",{attrs:{label:"同步机制",required:!0,labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-radio-group",{attrs:{"button-style":"solid"},on:{change:e.onChange},model:{value:e.record.auto_syn,callback:function(o){e.$set(e.record,"auto_syn",o)},expression:"record.auto_syn"}},[r("a-radio-button",{attrs:{value:"0"}},[e._v(" 手动匹配同步 ")]),r("a-radio-button",{attrs:{value:"1"}},[e._v(" 自动匹配同步 ")])],1),r("div",[e._v(" 默认是手动匹配同步，选择了自动匹配同步 会以序号对应数据进行关联，关联不上的需要额外进行手动匹配。")])],1):e._e(),1!=e.record.isSyn?r("a-form-item",{attrs:{label:"选择同步"+e.record.orgTypeTxt,required:!0,labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-select",{staticStyle:{width:"50%"},attrs:{"show-search":"",placeholder:"选择同步"+e.record.orgTypeTxt,"option-filter-prop":"children","filter-option":e.filterOption,value:e.bindId},on:{change:e.handleChange}},e._l(e.singleList,(function(o,t){return r("a-select-option",{key:t,attrs:{value:o.id}},[e._v(" "+e._s(o.name)+e._s(o.sysTxt)+" ")])})),1)],1):e._e()],1)],1)],1)},l=[],a=r("a0e0"),i={components:{},data:function(){return{title:"绑定",labelCol:{span:4},wrapperCol:{span:20},confirmLoading:!1,form:this.$form.createForm(this),visible:!1,record:{},bindId:"",relatedType:"build",singleList:[]}},mounted:function(){},methods:{handleChange:function(e){console.log("selectedItems",e),this.bindId=e},filterOption:function(e,o){return o.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},bindDHBuildUnitRoomsList:function(e){var o=this;this.request(a["a"].bindDHBuildUnitRoomsList,e).then((function(e){o.singleList=e.list,console.log("this.singleList",o.singleList)}))},bind:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"edit",t={orgType:e.orgType,parent_bind_id:o};this.singleList=[],this.bindId="",this.bindDHBuildUnitRoomsList(t),this.record=e,this.title="绑定"+e.orgTypeTxt,this.visible=!0,10==e.orgType?this.relatedType="build":11==e.orgType?this.relatedType="unit":12==e.orgType&&(this.relatedType="room"),this.type=r},onChange:function(e){console.log("checked = ".concat(e.target.value)),this.record.auto_syn=e.target.value},handleSubmit:function(){var e=this;if("look"==this.type)this.handleCancel();else{console.log("record",this.record),console.log("relatedType = ".concat(this.relatedType)),console.log("bindId = ".concat(this.bindId)),this.confirmLoading=!0;var o=a["a"].bindDHBuildUnitRoom;this.record.bind_id&&!this.bindId&&(this.bindId=this.record.bind_id);var r={orgParam:this.record,bindId:this.bindId,relatedType:this.relatedType};console.log("相关数据param",r),this.request(o,r).then((function(o){e.confirmLoading=!1,e.record.bind_id&&"1"==e.record.auto_syn?e.$message.success("自动下发指令执行中"):e.record.bind_id||e.$message.success("绑定成功"),setTimeout((function(){e.form=e.$form.createForm(e),e.visible=!1,e.confirmLoading=!1,e.$emit("ok")}),1500),console.log("相关数据res",o)})).catch((function(o){e.confirmLoading=!1}))}},handleCancel:function(){var e=this;this.visible=!1,setTimeout((function(){e.form=e.$form.createForm(e)}),500)}}},n=i,s=(r("6fdab"),r("2877")),d=Object(s["a"])(n,t,l,!1,null,"e3b280c4",null);o["default"]=d.exports}}]);