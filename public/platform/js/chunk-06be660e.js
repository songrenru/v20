(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06be660e"],{3983:function(e,a,t){"use strict";t("8a13")},"39cc":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a-form",{staticClass:"project_info",attrs:{form:e.form}},[t("a-tabs",{attrs:{"default-active-key":"1"}},[t("a-tab-pane",{key:"1",attrs:{tab:"基本信息"}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"用户编号"}},[t("span",[e._v(e._s(e.bind_number))])]),t("a-form-item",{attrs:{label:"业主名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{attrs:{id:"user_name"},model:{value:e.post.name,callback:function(a){e.$set(e.post,"name",a)},expression:"post.name"}})],1),t("a-form-item",{attrs:{label:"手机号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{attrs:{id:"phone"},model:{value:e.post.phone,callback:function(a){e.$set(e.post,"phone",a)},expression:"post.phone"}})],1),t("a-form-item",{attrs:{label:"身份证号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{attrs:{id:"id_card"},model:{value:e.post.id_card,callback:function(a){e.$set(e.post,"id_card",a)},expression:"post.id_card"}})],1),t("a-form-item",{attrs:{label:"IC卡号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{attrs:{id:"ic_card"},model:{value:e.post.ic_card,callback:function(a){e.$set(e.post,"ic_card",a)},expression:"post.ic_card"}})],1),t("a-form-item",{attrs:{label:"住址",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("span",[e._v(e._s(e.room_diy_name))])]),t("a-form-item",{attrs:{label:"房子平方",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("span",[e._v(e._s(e.housesize)+" ㎡")])]),t("a-form-item",{attrs:{label:"备注",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{attrs:{id:"memo"},model:{value:e.post.memo,callback:function(a){e.$set(e.post,"memo",a)},expression:"post.memo"}})],1),t("a-form-item",{attrs:{label:"房屋类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("span",[e._v(e._s(e.house_type_name))])]),t("a-form-item",{attrs:{label:"车位信息",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[0!==e.positionList.length?t("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.positionColumns,"data-source":e.positionList,rowKey:"id"}}):t("span",[e._v("无")])],1),t("a-form-item",{attrs:{label:"车辆信息",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[0!==e.carList.length?t("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:e.carColumns,"data-source":e.carList,rowKey:"id"}}):t("span",[e._v("无")])],1)],1),t("a-tab-pane",{key:"2",attrs:{tab:"业主资料","force-render":""}},e._l(e.dataList,(function(a,i){return t("a-form-item",{key:i,attrs:{label:a.title,value:i,labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:1*a.is_must==1}},[1===a.type?t("a-input",{attrs:{id:a.key},model:{value:e.authentication_field[a.key]["value"],callback:function(t){e.$set(e.authentication_field[a.key],"value",t)},expression:"authentication_field[item.key]['value']"}}):2===a.type?t("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":""},model:{value:e.authentication_field[a.key]["value"],callback:function(t){e.$set(e.authentication_field[a.key],"value",t)},expression:"authentication_field[item.key]['value']"}},e._l(a.use_field,(function(a,i){return t("a-select-option",{key:i,attrs:{value:a}},[e._v(e._s(a))])})),1):3===a.type?t("div",[t("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":e.authentication_field[a.key]["province_name"]},on:{change:e.handleChangeProvince}},e._l(e.province_list,(function(a,i){return t("a-select-option",{key:i,attrs:{value:a["id"]}},[e._v(e._s(a["name"]))])})),1),0!==e.city_list.length?t("a-select",{staticStyle:{width:"120px","margin-left":"20px"},on:{change:e.handleChange},model:{value:e.secondCity,callback:function(a){e.secondCity=a},expression:"secondCity"}},e._l(e.city_list,(function(a,i){return t("a-select-option",{key:i,attrs:{value:a["id"]}},[e._v(e._s(a["name"]))])})),1):e._e()],1):4===a.type?t("a-date-picker",{attrs:{name:a.key,"default-value":e.moment(e.getDate(a.key),e.dateFormat)},on:{change:function(t,i){return e.onDateChange(t,i,a.key)}}}):e._e()],1)})),1),t("a-tab-pane",{key:"3",attrs:{tab:"信息标注"}},[t("a-form-item",{attrs:{label:"政治面貌",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},e._l(e.user_label_data["political_outlook"],(function(a,i){return t("label",{key:i,staticClass:"col-sm-1",staticStyle:{"padding-left":"0","padding-right":"20px"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.political_outlook,expression:"political_outlook"}],staticClass:"label",attrs:{type:"radio",name:"political_outlook"},domProps:{value:a.id,checked:e._q(e.political_outlook,a.id)},on:{change:function(t){e.political_outlook=a.id}}}),t("span",{staticStyle:{"z-index":"1"}},[e._v(e._s(a.label_name))])])})),0),t("a-form-item",{attrs:{label:"特殊人群",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},e._l(e.user_label_data["special_population"],(function(a,i){return t("label",{key:i,staticClass:"col-sm-1",staticStyle:{"padding-left":"0","padding-right":"20px"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.special_population,expression:"special_population"}],staticClass:"label",attrs:{type:"checkbox",name:"special_population"},domProps:{value:a.id,checked:Array.isArray(e.special_population)?e._i(e.special_population,a.id)>-1:e.special_population},on:{change:function(t){var i=e.special_population,o=t.target,l=!!o.checked;if(Array.isArray(i)){var n=a.id,s=e._i(i,n);o.checked?s<0&&(e.special_population=i.concat([n])):s>-1&&(e.special_population=i.slice(0,s).concat(i.slice(s+1)))}else e.special_population=l}}}),t("span",{staticStyle:{"z-index":"1"}},[e._v(e._s(a.label_name))])])})),0),t("a-form-item",{attrs:{label:"重点人群",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},e._l(e.user_label_data["key_population"],(function(a,i){return t("label",{key:i,staticClass:"col-sm-1",staticStyle:{"padding-left":"0","padding-right":"20px"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.key_population,expression:"key_population"}],staticClass:"label",attrs:{type:"checkbox",name:"key_population"},domProps:{value:a.id,checked:Array.isArray(e.key_population)?e._i(e.key_population,a.id)>-1:e.key_population},on:{change:function(t){var i=e.key_population,o=t.target,l=!!o.checked;if(Array.isArray(i)){var n=a.id,s=e._i(i,n);o.checked?s<0&&(e.key_population=i.concat([n])):s>-1&&(e.key_population=i.slice(0,s).concat(i.slice(s+1)))}else e.key_population=l}}}),t("span",{staticStyle:{"z-index":"1"}},[e._v(e._s(a.label_name))])])})),0),t("a-form-item",{attrs:{label:"关怀对象",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},e._l(e.user_label_data["care_object"],(function(a,i){return t("label",{key:i,staticClass:"col-sm-1",staticStyle:{"padding-left":"0","padding-right":"20px"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.care_object,expression:"care_object"}],staticClass:"label",attrs:{type:"checkbox",name:"care_object"},domProps:{value:a.id,checked:Array.isArray(e.care_object)?e._i(e.care_object,a.id)>-1:e.care_object},on:{change:function(t){var i=e.care_object,o=t.target,l=!!o.checked;if(Array.isArray(i)){var n=a.id,s=e._i(i,n);o.checked?s<0&&(e.care_object=i.concat([n])):s>-1&&(e.care_object=i.slice(0,s).concat(i.slice(s+1)))}else e.care_object=l}}}),t("span",{staticStyle:{"z-index":"1"}},[e._v(e._s(a.label_name))])])})),0)],1)],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:12}}},[t("a-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v(" 保存 ")])],1)],1)],1)},o=[],l=(t("a9e3"),t("99af"),t("b0c0"),t("d81d"),t("a0e0")),n=t("c1df"),s=t.n(n),r=[{title:"ID",dataIndex:"id",key:"id"},{title:"车位",dataIndex:"position_num",key:"position_num"},{title:"车牌号",dataIndex:"province",key:"province"},{title:"停车卡号",dataIndex:"car_stop_num",key:"car_stop_num"},{title:"车主姓名",dataIndex:"car_user_name",key:"car_user_name"},{title:"车主手机号",dataIndex:"car_user_phone",key:"car_user_phone"}],c=[],p=[{title:"ID",dataIndex:"bind_id",key:"bind_id"},{title:"车库",dataIndex:"garage_num",key:"garage_num"},{title:"车位编号",dataIndex:"position_num",key:"position_num"},{title:"车位面积",dataIndex:"position_area",key:"position_area"},{title:"备注",dataIndex:"position_note",key:"position_note"}],d=[],u={name:"ownerInformation",data:function(){return{title:"",dateFormat:"YYYY-MM-DD",form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},bind_number:"",room_diy_name:"",housesize:"",disabled:!0,dataList:"",authentication_field:{key:{value:""}},house_type_name:"",secondCity:"",is_secondCity:!1,user_label_data:{care_object:[{id:0,name:""}]},province_list:[{id:0,name:""}],city_list:[{id:0,name:""}],political_outlook:0,special_population:[],key_population:[],care_object:[],positionList:d,carList:c,positionColumns:p,carColumns:r,result:!1,post:{name:0,phone:"",id_card:"",ic_card:"",memo:""}}},props:{pigcmsId:{type:Number,default:0},usernum:{type:String,default:""}},created:function(){var e={pigcms_id:this.pigcmsId,usernum:this.usernum};this.getUserInfo(e)},methods:{getDate:function(e){return this.authentication_field[e]["value"]},moment:s.a,handleSubmit:function(){var e=this,a=[this.political_outlook];a=a.concat(this.special_population).concat(this.care_object).concat(this.key_population);var t={pigcms_id:this.pigcmsId,post:this.post,authentication_field:this.authentication_field,lebel_ids:a},i=!1;for(var o in this.authentication_field){var n=this.authentication_field[o];if(console.log("item",n),(1==n.is_must||"1"==n.is_must)&&(!n.value||""==n.value||"0"==n.value||0==n.value)){this.$message.error("【"+n.title+"】为必填项，请填写或选择！"),i=!0;break}}if(i)return!1;this.request(l["a"].editUserInfo,t).then((function(a){console.log(a),e.$notification.open({message:"修改成功",description:"业主信息修改成功."})}))},onDateChange:function(e,a,t){console.log("date",e),console.log("dateSting",a),this.authentication_field[t]["value"]=a},getUserInfo:function(e){var a=this;this.request(l["a"].getUserInfo,e).then((function(e){a.title="业主信息",a.bind_number=e.info.bind_number?e.info.bind_number:a.usernum,a.post={name:e.info.name,phone:e.info.phone,id_card:e.info.id_card,ic_card:e.info.ic_card,memo:e.info.memo},a.room_diy_name=e.info.address,a.housesize=e.info.housesize,a.house_type_name=e.info.house_type_name,a.dataList=e.dataList,a.authentication_field=e.info.authentication_field,a.user_label_data=e.user_label_data,a.positionList=e.position_list,a.carList=e.car_list,a.visible=!0,void 0!==a.authentication_field["native_place"]&&(a.getProvinceCity("province",0),a.getProvinceCity("city",a.authentication_field["native_place"]["province_idss"]),a.secondCity=a.authentication_field["native_place"]["city_name"]),a.political_outlook=a.getCheckedVlaue(a.user_label_data.political_outlook)[0],a.special_population=a.getCheckedVlaue(a.user_label_data.special_population),a.key_population=a.getCheckedVlaue(a.user_label_data.key_population),a.care_object=a.getCheckedVlaue(a.user_label_data.care_object)}))},handleChangeProvince:function(e){this.is_secondCity=!0,this.authentication_field["native_place"]["province_idss"]=e,this.getProvinceCity("city",e)},getProvinceCity:function(e,a){var t=this,i={type:e,id:a};this.request(l["a"].getProvinceCity,i).then((function(a){"province"===e?t.province_list=a:(t.city_list=a,0!==t.city_list.length&&t.is_secondCity&&(t.secondCity=t.city_list[0]["name"]))}))},getCheckedVlaue:function(e){var a=[];return e.map((function(e){e.is_checked&&a.push(e.id)})),a},handleChange:function(e,a){this.authentication_field["native_place"]["city_idss"]=e}}},_=u,m=(t("3983"),t("0c7c")),b=Object(m["a"])(_,i,o,!1,null,null,null);a["default"]=b.exports},"8a13":function(e,a,t){}}]);