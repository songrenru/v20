(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c85dcac0","chunk-2d0b6a79","chunk-2d0b6a79","chunk-2d0b3786"],{"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("d3b7");function a(e,t,n,a,r,i,o){try{var s=e[i](o),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function s(e){a(o,r,i,s,l,"next",e)}function l(e){a(o,r,i,s,l,"throw",e)}s(void 0)}))}}},"243a":function(e,t,n){},2909:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("6b75");function r(e){if(Array.isArray(e))return Object(a["a"])(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=n("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return r(e)||i(e)||Object(o["a"])(e)||s()}},"95fd":function(t,n,a){"use strict";a.r(n);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-drawer",{attrs:{title:e.title,width:800,visible:e.visible},on:{close:e.closeDrawer}},[n("div",{staticClass:"apply_people_msg"},[n("div",{staticClass:"title"},[e._v(" 申请人信息 ")]),n("div",{staticClass:"msg_container"},e._l(e.rentUser,(function(t,a){return n("div",{key:a,staticClass:"msg_item"},[0==t.type?n("div",{staticClass:"content"},[e._v(e._s(t.label)+"："+e._s(t.value))]):e._e(),1==t.type?n("div",{staticClass:"content"},[e._v(e._s(t.label)+"："),n("a",{on:{click:function(n){return e.openTemplate(t.url)}}},[e._v(e._s(t.value))])]):e._e()])})),0)]),e.visible?n("div",{staticClass:"deal_content"},[n("a-tabs",{attrs:{"default-active-key":e.currentIndex},on:{change:e.tabChange}},[1==e.rent_type?n("a-tab-pane",{key:1,attrs:{tab:"处理内容"}},[e.formConfig.is_examine?n("div",{staticClass:"form_con"},[n("a-form-model",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[1==e.formConfig.handle_type?n("a-form-model-item",[n("template",{slot:"label"},[n("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v(" 绑定房间 ")]),n("a-cascader",{staticClass:"cascader_style margin_left_10",staticStyle:{width:"240px"},attrs:{options:e.options,"load-data":e.loadDataFunc,placeholder:"请选择房间","change-on-select":"",value:e.form.roomArr},on:{change:e.setVisionsFunc}})],2):e._e(),e.formConfig.examine_data.length>0?n("a-form-model-item",{attrs:{label:e.formConfig.handle_name+"审核",prop:"resource"}},[n("a-radio-group",{model:{value:e.form.examine_value,callback:function(t){e.$set(e.form,"examine_value",t)},expression:"form.examine_value"}},e._l(e.formConfig.examine_data,(function(t,a){return n("a-radio",{attrs:{value:t.key},on:{change:e.changeRadio}},[e._v(" "+e._s(t.value)+" ")])})),1)],1):e._e(),3==e.formConfig.handle_type?n("a-form-model-item",{attrs:{label:"上传图片"}},[n("a-upload",{staticStyle:{transform:"translateX(140px)"},attrs:{action:"/v20/public/index.php/common/common.UploadFile/uploadPublicRental","list-type":"picture-card","file-list":e.fileList,"before-upload":e.beforeUpload},on:{preview:e.handlePreview,change:e.handleUploadChange}},[e.fileList.length<5?n("div",[n("a-icon",{attrs:{type:"plus"}}),n("div",{staticClass:"ant-upload-text"},[e._v(" Upload ")])],1):e._e()]),n("div",{staticClass:"desc",staticStyle:{transform:"translateX(140px)"}},[e._v(" 已上传"+e._s(e.fileList.length)+"张, 最多可上传5张 ")]),n("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[n("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1):e._e(),n("a-form-model-item",{attrs:{label:"备注",prop:"desc"}},[n("a-textarea",{staticStyle:{padding:"5px width:200px",height:"100px",resize:"none"},attrs:{placeholder:"请输入"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1)],1)],1):n("div",{staticClass:"examine_status"},[e._v(" "+e._s(e.formConfig.examine_info)+" ")])]):e._e(),n("a-tab-pane",{key:2,attrs:{tab:"办理记录"}},[n("div",{staticClass:"deal_record",on:{scroll:e.handleScroll}},[e._l(e.flowChart,(function(t,a){return n("div",{key:a,staticClass:"record_list"},[n("div",{staticClass:"flow_icon_out"},[n("div",{staticClass:"flow_icon_in"})]),a!=e.flowChart.length-1?n("div",{staticClass:"flow_line"}):e._e(),n("div",{staticClass:"props_list"},e._l(t,(function(t,a){return n("div",{key:a,staticClass:"props_item"},["img"!=t.type?n("div",[e._v(" "+e._s(t.label)+"："+e._s(t.value)+" ")]):n("div",[n("div",[e._v(e._s(t.label)+"：")]),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap","align-content":"flex-start",transform:"translateX(-5px)"}},e._l(t.value,(function(e,t){return n("div",{key:t,staticClass:"image_item",staticStyle:{width:"50px",height:"50px",background:"#999999",margin:"5px",display:"flex","align-items":"center","justify-content":"center"}},[n("img",{staticStyle:{width:"100%",height:"100%"},attrs:{large:e,src:e,preview:1}})])})),0)])])})),0)])})),0==e.flowChart.length?n("div",{staticClass:"no_more",staticStyle:{width:"100%",padding:"10px 0",display:"flex","align-items":"center","justify-content":"center"}},[e._v(" 暂无数据 ")]):e._e(),e.noMore?n("div",{staticClass:"no_more",staticStyle:{width:"100%",padding:"10px 0",display:"flex","align-items":"center","justify-content":"center"}},[e._v(" --没有更多数据了-- ")]):e._e()],2)]),1==e.rentRecord.source_type?n("a-tab-pane",{key:3,attrs:{tab:"附件列表"}},[n("div",{staticClass:"enclosure_list"},[n("a-table",{attrs:{columns:e.columns,"data-source":e.enclosureList,pagination:e.pagination,loading:e.tableLoading},on:{change:e.tableChange},scopedSlots:e._u([{key:"see",fn:function(t,a){return n("span",{},[a.file_url?n("a",{on:{click:function(t){return e.lookImg(a.file_url)}}},[a.is_image?n("a",[e._v("查看图片")]):n("a",[e._v("下载文件")])]):n("a",[e._v("--")])])}}],null,!1,4128069849)})],1)]):e._e()],1)],1):e._e(),1==e.currentIndex&&e.formConfig.is_examine?n("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[n("a-button",{style:{marginRight:"8px"},on:{click:e.closeDrawer}},[e._v(" 取消 ")]),n("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(" 确定 ")])],1):e._e(),n("a-drawer",{attrs:{title:"模板内容",width:800,visible:e.showDrawer},on:{close:e.closeTemplate}},[n("iframe",{attrs:{src:e.template_url,width:"100%",height:"800px"}})])],1)},i=[],o=a("2909"),s=a("1da1"),l=(a("96cf"),a("d3b7"),a("a9e3"),a("d81d"),a("99af"),a("b0c0"),a("7db0"),a("a0e0"));function c(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return n(e)}}))}var u=[{title:"文件名称",dataIndex:"file_remark",key:"file_remark",width:100},{title:"上传人",dataIndex:"account",key:"account"},{title:"查看",dataIndex:"see",key:"see",scopedSlots:{customRender:"see"}},{title:"上传时间",dataIndex:"add_time",key:"add_time"}],d={props:{visible:{type:Boolean,default:!1},title:{type:String,default:""},rentRecord:{type:Object,defalut:function(){return{}}},rent_type:{type:Number,defalut:1}},watch:{visible:{handler:function(e){e&&(this.getApplyRecordUserInfo(),this.getConfigInfo(),1==this.rent_type?(this.currentIndex=1,this.getSingleListByVillage()):(this.currentIndex=2,this.currentPage=1,this.flowChart=[],this.getApplyRecordLog()))},immediate:!0}},data:function(){return{flowChart:[],labelCol:{span:4},wrapperCol:{span:14},currentIndex:1,form:{roomArr:[],examine_value:20,remarks:""},rules:{dealtype:[{required:!0,message:"请选择凭证",trigger:"blur"}]},columns:u,enclosureList:[],pagination:{current:1,pageSize:10,total:10,showTotal:function(e){return"共 ".concat(e," 条")}},tableLoading:!1,currentPage:1,totalCount:0,rentUser:[],rentType:{},maxPage:2,noMore:!1,showDrawer:!1,template_url:"",options:[],formConfig:{},previewImage:"",previewVisible:!1,log_imgs:[],fileList:[]}},methods:{changeRadio:function(e){this.form.examine_value=e.target.value,this.$forceUpdate()},closeDrawer:function(){this.form={roomArr:[]},this.$refs.ruleForm&&this.$refs.ruleForm.resetFields(),this.$emit("exit")},tabChange:function(e){this.currentIndex=e,2==e&&(this.currentPage=1,this.flowChart=[],this.getApplyRecordLog()),3==e&&(this.pagination.current=1,this.getEnclosureList())},openTemplate:function(e){this.template_url=e,this.showDrawer=!0},closeTemplate:function(){this.showDrawer=!1},onSubmit:function(){var e=this;e.$refs.ruleForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;if((20==e.form.examine_value||41==e.form.examine_value)&&(!e.form.remarks||e.form.remarks.length<1)){var n="验房审核不合格时请填写上备注！";return 20==e.form.examine_value&&(n="凭证审核不通过时请填写上备注！"),e.$message.warn(n),!1}20==e.form.examine_value||1==e.formConfig.handle_type&&e.form.single_id&&e.form.floor_id&&e.form.layer_id&&e.form.vacancy_id||1!=e.formConfig.handle_type?e.saveForm():e.$message.warn("请选择房间")}))},saveForm:function(){var e=this;e.form.id=e.rentRecord.id,e.form.examine_status=e.form.examine_value,e.form.source_type=e.rentRecord.source_type,e.form.log_imgs=this.log_imgs,e.request("/community/village_api.HousePublicRental/subOperationExamine",e.form).then((function(t){e.$message.success("操作成功"),e.closeDrawer(),e.$emit("ok")}))},computeMaxpage:function(e){this.noMore=!1,this.maxPage=e%10==0?parseInt(e/10):parseInt(e/10+1)},handleScroll:function(e){var t=e.target,n=t.scrollTop,a=t.clientHeight,r=t.scrollHeight;n+a===r&&this.flowChart.length>0&&(this.currentPage>=this.maxPage?this.noMore=!0:(this.currentPage+=1,this.getApplyRecordLog()))},getEnclosureList:function(){var e=this;this.tableLoading=!0,this.request("/community/village_api.HousePublicRental/getEnclosureList",{value_id:this.rentRecord.value_id,source_type:this.rentRecord.source_type,page:this.pagination.current}).then((function(t){e.pagination.total=t.count?t.count:0,e.pagination.pageSize=t.total_limit?t.total_limit:10,e.enclosureList=t.list,e.tableLoading=!1}))},tableChange:function(){var t=this;e.current&&e.current>0&&(t.pagination.current=e.current,t.getEnclosureList())},handlePreview:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.url||e.preview){n.next=4;break}return n.next=3,c(e.originFileObj);case 3:e.preview=n.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return n.stop()}}),n)})))()},beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||this.$message.error("You can only upload JPG file!");var n=e.size/1024/1024<2;return n||this.$message.error("Image must smaller than 2MB!"),t&&n},handleUploadChange:function(e){var t=e.fileList,n=this;n.fileList=t,n.log_imgs=[],n.fileList.map((function(e){e.response&&e.response.data&&e.response.data.url&&n.log_imgs.push(e.response.data.url)}))},handleCancel:function(){this.previewVisible=!1},lookImg:function(e){window.open(e,"_blank")},getApplyRecordLog:function(){var e=this;this.request("/community/village_api.HousePublicRental/getApplyRecordLog",{id:this.rentRecord.id,page:this.currentPage,source_type:this.rentRecord.source_type}).then((function(t){e.flowChart=[].concat(Object(o["a"])(e.flowChart),Object(o["a"])(t.list)),e.totalCount=t.count,e.computeMaxpage(t.count),e.$previewRefresh()}))},getApplyRecordUserInfo:function(){var e=this;this.uploadFileName=!1,this.request("/community/village_api.HousePublicRental/getApplyRecordUserInfo",{id:this.rentRecord.id,source_type:this.rentRecord.source_type}).then((function(t){e.rentUser=t.user,e.rentType=t.type}))},getConfigInfo:function(){var e=this;this.log_imgs=[],this.fileList=[],this.request("/community/village_api.HousePublicRental/getApplyRecordInfo",{id:this.rentRecord.id,source_type:this.rentRecord.source_type}).then((function(t){e.formConfig=t,e.form.examine_value=t.examine_value,e.form.remarks=t.remarks,21==t.examine_value?e.form.examine_status=!0:e.form.examine_status=!1}))},getSingleListByVillage:function(){var e=this;this.request(l["a"].getSingleListByVillage,{is_public_rental:1}).then((function(t){if(t){var n=[];t.map((function(e){n.push({label:e.name,value:e.id,isLeaf:!1})})),e.options=n}}))},getFloorList:function(e){var t=this;return new Promise((function(n){t.request(l["a"].getFloorList,{pid:e,is_public_rental:1}).then((function(e){n(e)}))}))},getLayerList:function(e){var t=this;return new Promise((function(n){t.request(l["a"].getLayerList,{pid:e,is_public_rental:1}).then((function(e){e&&n(e)}))}))},getVacancyList:function(e){var t=this;return new Promise((function(n){t.request(l["a"].getVacancyList,{pid:e,is_public_rental:1}).then((function(e){e&&n(e)}))}))},loadDataFunc:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e[e.length-1],n.loading=!0,setTimeout((function(){n.loading=!1}),100);case 3:case"end":return t.stop()}}),t)})))()},setVisionsFunc:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r,i,s,l,c,u,d,f,p,m,h;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.form.roomArr=e,console.log("selectedOptions=====>",e),4!=e.length){n.next=9;break}return t.form.single_id=e[0],t.form.floor_id=e[1],t.form.layer_id=e[2],t.form.vacancy_id=e[3],t.$forceUpdate(),n.abrupt("return");case 9:if(1!==e.length){n.next=20;break}return a=Object(o["a"])(t.options),n.next=13,t.getFloorList(e[0]);case 13:r=n.sent,i=[],r.map((function(e){return i.push({label:e.name,value:e.id,isLeaf:!1}),a["children"]=i,!0})),a.find((function(t){return t.value===e[0]}))["children"]=i,t.options=a,n.next=43;break;case 20:if(2!==e.length){n.next=32;break}return n.next=23,t.getLayerList(e[1]);case 23:s=n.sent,l=Object(o["a"])(t.options),c=[],s.map((function(e){return c.push({label:e.name,value:e.id,isLeaf:!1}),!0})),u=l.find((function(t){return t.value===e[0]})),u.children.find((function(t){return t.value===e[1]}))["children"]=c,t.options=l,n.next=43;break;case 32:if(3!==e.length){n.next=43;break}return n.next=35,t.getVacancyList(e[2]);case 35:d=n.sent,f=Object(o["a"])(t.options),p=[],d.map((function(e){return p.push({label:e.name,value:e.id,isLeaf:!0}),!0})),m=f.find((function(t){return t.value===e[0]})),h=m.children.find((function(t){return t.value===e[1]})),h.children.find((function(t){return t.value===e[2]}))["children"]=p,t.options=f;case 43:case"end":return n.stop()}}),n)})))()}}},f=d,p=(a("a5f2"),a("2877")),m=Object(p["a"])(f,r,i,!1,null,"58f2f546",null);n["default"]=m.exports},a5f2:function(e,t,n){"use strict";n("243a")}}]);