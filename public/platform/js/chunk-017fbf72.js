(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-017fbf72","chunk-2d0b3786"],{"1eb3":function(e,t,a){},"1fd1":function(e,t,a){"use strict";a.r(t);var i,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"background-color":"#fff"}},[a("a-button",{staticClass:"Abutton",attrs:{type:"primary"},on:{click:e.showModalhandle}},[e._v("+ 新建一级")]),a("a-table",{attrs:{columns:e.columns,"data-source":e.dataForm,rowKey:"cat_id",pagination:!1},scopedSlots:e._u([{key:"pcImg",fn:function(t,i){return[1===i.level?a("a-button",{staticClass:"pcButton",on:{click:function(t){return e.showModal(i,"pc")}}},[e._v("设置轮播图")]):e._e()]}},{key:"webImg",fn:function(t,i){return[1===i.level?a("a-button",{staticClass:"pcButton",on:{click:function(t){return e.showModal(i,"wap")}}},[e._v("设置轮播图")]):e._e()]}},{key:"Parm",fn:function(t,i){return[2===i.level?a("a-button",{staticClass:"pcButton",on:{click:function(t){return e.setClassifyModal(i.cat_id)}}},[e._v("设置参数")]):e._e()]}},{key:"status",fn:function(t,i){return[a("a-switch",{attrs:{"checked-children":"开","un-checked-children":"关",checked:1===i.status},on:{change:function(t){return e.switchHandle(t,i)}}})]}},{key:"sort",fn:function(t,i){return[1===i.level||3===i.level||2===i.level?a("a-input",{staticStyle:{width:"4.125rem","text-align":"center"},on:{blur:function(t){return e.pointerMove(t,i)}},model:{value:i.sort,callback:function(t){e.$set(i,"sort",t)},expression:"record.sort"}}):e._e()]}},{key:"editOrMore",fn:function(t,i){return[a("a",{staticClass:"editOrMore",attrs:{slot:"editOrMore"},on:{click:function(t){return e.editClassifyhandle(i)}},slot:"editOrMore"},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),1===i.level||2===i.level?a("a",{staticClass:"editOrMore",attrs:{slot:"editOrMore"},on:{click:function(t){return e.showNextClass(i)}},slot:"editOrMore"},[e._v("新增下级分类")]):e._e(),a("a-divider",{directives:[{name:"show",rawName:"v-show",value:1===i.level||2===i.level,expression:"record.level === 1 || record.level === 2"}],attrs:{type:"vertical"}}),a("a",{staticClass:"editOrMore",attrs:{slot:"editOrMore"},on:{click:function(t){return e.showConfirm(i)}},slot:"editOrMore"},[e._v("删除")])]}},{key:"image",fn:function(t,i){return 2===i.level||3===i.level?[i.image?a("img",{staticClass:"Picimage_tubiao",attrs:{src:i.image},on:{click:function(t){return e.AddImage(i)}}}):a("a-button",{staticClass:"pcButton",on:{click:function(t){return e.AddImage(i)}}},[e._v("+")])]:void 0}}],null,!0)}),a("a-modal",{attrs:{title:"新建分类",visible:e.visible,"confirm-loading":e.confirmLoading},on:{ok:e.handleTypeOk,cancel:e.handleCancel}},[[a("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:12}},on:{submit:e.handleSubmit}},[a("a-form-item",{attrs:{label:"分类名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_name",{rules:[{required:!0,message:"分类名称"}]}],expression:"['cat_name', { rules: [{ required: true, message: '分类名称' }] }]"}],attrs:{placeholder:"请输入名称"}})],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:!0,valuePropName:"checked"}],expression:"['status', { initialValue: true, valuePropName: 'checked' }]"}],attrs:{"checked-children":"开","un-checked-children":"关"}})],1)],1)]],2),[a("div",[a("a-modal",{attrs:{title:"添加轮播图",width:900,footer:null},on:{ok:e.handleOk},model:{value:e.swipperVisible,callback:function(t){e.swipperVisible=t},expression:"swipperVisible"}},[[a("a-button",{staticStyle:{"margin-bottom":"15px"},attrs:{size:"small",type:"primary"},on:{click:function(t){return e.showAddModal("add")}}},[e._v("添加轮播")]),a("div",{staticStyle:{height:"500px","overflow-y":"scroll"}},[a("a-table",{attrs:{columns:e.column,"data-source":e.bannerData,rowKey:e.bannerData.id,scroll:{x:!0,y:380}},scopedSlots:e._u([{key:"image",fn:function(t,i){return[a("img",{staticStyle:{width:"20rem",height:"7.5rem",border:"1px solid #CCCCCC"},attrs:{src:i.image}}),a("br"),e._v(" 链接："+e._s(i.url)+" ")]}},{key:"sort",fn:function(t,i){return[a("a-input",{staticStyle:{width:"3.125rem","text-align":"center"},attrs:{slot:"id"},on:{change:function(t){return e.swipperSerialMove(t,i)}},slot:"id",model:{value:i.sort,callback:function(t){e.$set(i,"sort",t)},expression:"record.sort"}})]}},{key:"editAndMore",fn:function(t,i){return[a("a-button",{staticClass:"editOrMore",on:{click:function(t){return e.showAddModal("edit",i)}}},[e._v("编辑")]),a("a-button",{staticClass:"editOrMore",on:{click:function(t){return e.showSwipperConfirm(i)}}},[e._v("删除")])]}}])})],1)]],2)],1)],[a("div",[a("a-modal",{attrs:{title:e.swiperTypeIsAdd?"添加轮播图":"编辑轮播图",cancelText:"关闭",okText:"添加",okType:"primary",width:800},on:{ok:e.handleYesOk},model:{value:e.bannerVisible,callback:function(t){e.bannerVisible=t},expression:"bannerVisible"}},[[a("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:12}},on:{submit:e.handleSubmit}},[a("a-form-item",{attrs:{label:"轮播图片"}},[a("choose-image",{ref:"chooseImage",attrs:{name:e.uploadName,max:e.max,upload_dir:e.upload_dir,type:e.uploadType},on:{callback:e.callBack}}),a("a-button",{staticStyle:{width:"200px"},on:{click:e.chooseImage}},[e._v("添加轮播图片")]),a("br"),a("span",[e._v('pc:" 建议使用1200*420"')]),a("span",[e._v('web:" 建议使用640*240"')]),a("br"),e._l(e.imageList,(function(e,t){return a("img",{key:t,staticStyle:{width:"20rem",height:"7.5rem",border:"1px solid #CCCCCC"},attrs:{src:e}})}))],2),a("a-form-item",{staticStyle:{"margin-top":"-25px"},attrs:{label:"链接地址"}},[a("a-input",{staticStyle:{width:"280px"},attrs:{placeholder:"请填写链接地址"},model:{value:e.swipper_url,callback:function(t){e.swipper_url=t},expression:"swipper_url"}}),a("a-button",{staticStyle:{"margin-left":"5px"},on:{click:e.choosePower}},[e._v("功能库")])],1)],1)]],2)],1)],[a("div",[a("a-modal",{attrs:{title:"设置参数",width:800},on:{ok:e.classifyHandleOk},model:{value:e.classifyVisible,callback:function(t){e.classifyVisible=t},expression:"classifyVisible"}},[a("div",{staticClass:"classify_div"},[e._l(e.classifyList,(function(t,i){return a("div",{directives:[{name:"dragging",rawName:"v-dragging",value:{list:e.classifyList,item:t,group:"knowTab"},expression:"{ list: classifyList, item: items, group: 'knowTab' }"}],key:i,staticStyle:{"margin-top":"10px"}},[a("div",{staticClass:"classifyLabel"},[a("div",[e._v("参数名：")]),a("div",{staticStyle:{position:"relative"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cat_spec_name,expression:"items.cat_spec_name"}],staticClass:"Input",domProps:{value:t.cat_spec_name},on:{input:function(a){a.target.composing||e.$set(t,"cat_spec_name",a.target.value)}}}),a("div",{staticClass:"circle",on:{click:function(t){return e.classifyAllDelete(i)}}},[e._v("X")])]),a("a-checkbox",{staticStyle:{"margin-left":"20px"},on:{change:function(a){return e.checkChange(t)}},model:{value:0!=t.is_must,callback:function(a){e.$set(t,"is_must == 0 ? false : true",a)},expression:"items.is_must == 0 ? false : true"}},[e._v("必填")])],1),a("div",{staticStyle:{"margin-top":"15px"}},[e._v("参数值：")]),a("div",{staticClass:"classifyLabel",staticStyle:{"margin-top":"-20px","margin-left":"55px"}},[e._l(t.property_list,(function(i,s){return a("div",{key:s,staticStyle:{position:"relative","margin-right":"15px","margin-bottom":"10px",display:"flex","flex-direction":"row-reverse"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:i.name,expression:"it.name"}],staticClass:"Input",domProps:{value:i.name},on:{input:function(t){t.target.composing||e.$set(i,"name",t.target.value)}}}),a("div",{staticClass:"circle",on:{click:function(a){return e.classifyDelete(t.property_list,i,s)}}},[e._v("X")])])})),a("a-button",{staticClass:"margins",attrs:{type:"Dashed",size:"small"},on:{click:function(a){return e.addList(t,i)}}},[e._v("添加参数值")])],2)])})),a("a-button",{staticClass:"marg",attrs:{type:"Dashed",size:"small"},on:{click:e.addListItem}},[e._v("添加参数项目")])],2)])],1)],[a("div",[a("a-modal",{attrs:{title:"编辑"},on:{ok:e.editHandleOk},model:{value:e.edit_swipper_visible,callback:function(t){e.edit_swipper_visible=t},expression:"edit_swipper_visible"}},[[a("a-form",{attrs:{form:e.typeform,"label-col":{span:5},"wrapper-col":{span:12}},on:{submit:e.handleSubmit}},[a("a-form-item",{attrs:{label:"分类名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_name",{rules:[{required:!0,message:"分类名称"}]}],expression:"['cat_name', { rules: [{ required: true, message: '分类名称' }] }]"}],attrs:{placeholder:"请输入名称"}})],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:!0,valuePropName:"checked"}],expression:"['status', { initialValue: true, valuePropName: 'checked' }]"}],attrs:{"checked-children":"开","un-checked-children":"关"}})],1)],1)]],2)],1)],[a("div",[a("a-modal",{attrs:{title:"下级分类"},on:{ok:e.nextClassHandleOk},model:{value:e.nextClassVisible,callback:function(t){e.nextClassVisible=t},expression:"nextClassVisible"}},[[a("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:12}},on:{submit:e.handleSubmit}},[a("a-form-item",{attrs:{label:"分类名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_name",{rules:[{required:!0,message:"分类名称"}]}],expression:"['cat_name', { rules: [{ required: true, message: '分类名称' }] }]"}],attrs:{placeholder:"请输入名称"}})],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:!0,valuePropName:"checked"}],expression:"['status', { initialValue: true, valuePropName: 'checked' }]"}],attrs:{"checked-children":"开","un-checked-children":"关"}})],1)],1)]],2)],1)],[a("choose-image",{ref:"AddImage",attrs:{name:e.uploadName1,max:e.max1,upload_dir:e.upload_dir,type:e.uploadType1},on:{callback:e.Addpicture}})]],2)},l=[],r=a("ade3"),o=(a("4e82"),a("ac1f"),a("1276"),a("b0c0"),a("99af"),a("fb6a"),a("d81d"),a("d3b7"),a("159b"),a("a434"),a("5319"),{getSearchHotList:"/mall/platform.MallGoodsCategory/goodsCategoryList",addOrEditCategory:"/mall/platform.MallGoodsCategory/addOrEditCategory",bannerList:"/mall/platform.MallGoodsCategory/bannerList",addOrEditBanner:"/mall/platform.MallGoodsCategory/addOrEditBanner",delCategory:"/mall/platform.MallGoodsCategory/delCategory",delBanner:"/mall/platform.MallGoodsCategory/delBanner",addOrEditProperty:"/mall/platform.MallGoodsCategory/addOrEditProperty",propertyList:"/mall/platform.MallGoodsCategory/propertyList",getEditCategory:"/mall/platform.MallGoodsCategory/getEditCategory",saveStatus:"/mall/platform.MallGoodsCategory/saveStatus",uploadPictures:"/common/common.UploadFile/uploadPictures"}),n=o,c=a("6cf3"),d=[{title:"分类名称",dataIndex:"cat_name",key:"cat_name"},{title:"pc轮播",dataIndex:"pcImg",key:"pcImg",align:"center",width:"10%",scopedSlots:{customRender:"pcImg"}},{title:"web轮播图",dataIndex:"webImg",width:"10%",align:"center",key:"webImg",scopedSlots:{customRender:"webImg"}},{title:"参数",dataIndex:"Parm",key:"Parm",align:"center",width:"10%",scopedSlots:{customRender:"Parm"}},{title:"图标",dataIndex:"image",key:"image",width:"10%",align:"center",scopedSlots:{customRender:"image"}},{title:"状态",dataIndex:"status",key:"status",align:"center",scopedSlots:{customRender:"status"}},{title:"排序",dataIndex:"sort",key:"sort",align:"center",width:"15%",scopedSlots:{customRender:"sort"}},{title:"操作",dataIndex:"editOrMore",key:"",align:"center",width:"15%",scopedSlots:{customRender:"editOrMore"}}],m=[{title:"轮播图",dataIndex:"image",key:"image",width:"50%",scopedSlots:{customRender:"image"}},{title:"排序",dataIndex:"sort",key:"sort",width:"30%",scopedSlots:{customRender:"sort"}},{title:"操作",key:"editAndMore",dataIndex:"editAndMore",width:"30%",scopedSlots:{customRender:"editAndMore"}}],h=["必填"],u=["必填"],p={name:"aaa",components:{ChooseImage:c["a"]},data:function(){return{typeform:this.$form.createForm(this,{name:"coordinated"}),dataForm:[],columns:d,swipperVisible:!1,visible:!1,confirmLoading:!1,formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),column:m,bannerData:[],bannerVisible:!1,userName:"",headers:{authorization:"authorization-text"},classifyVisible:!1,checkedList:u,indeterminate:!0,checkAll:!1,plainOptions:h,imageList:[],upload_dir:"/mall/goods/images",uploadName:"goods_img",max:1,uploadType:"image",addorEditType:{},cur_record:{},cur_type:"",swipper_url:"",edit_swipper_visible:!1,nextClassVisible:!1,deletVisible:!1,swiperTypeIsAdd:!1,cur_swiper_record:{id:""},cur_record_id:"",classifyList:[{cat_spec_name:"大小",is_must:0,is_filter:1,property_list:[{name:"S"},{name:"M"},{name:"L"}]},{cat_spec_name:"颜色",is_must:1,is_filter:1,property_list:[{name:"蓝色"},{name:"白色"},{name:"红色"}]}],chooseClissifyVisible:!1,serialData:[],SerialSwipperData:[],total:null,searchForm:{page:1,pageSize:10},uploadName1:"goods_img",max1:1,uploadType1:"image",PictureList:[],ImgList:[],serialList:[],bannerLinkType:"h5"}},mounted:function(){this.loadList(),this.$dragging.$on("dragged",(function(e){console.log(e)}))},methods:(i={loadList:function(){var e=this;this.request(n.getSearchHotList,this.searchForm).then((function(t){e.dataForm=t.list,e.total=t.count}))},onPageChange:function(e,t){this.$set(this.searchForm,"page",e),this.loadList()},onPageSizeChange:function(e,t){this.$set(this.searchForm,"pageSize",t),this.loadList()},refreshBannerList:function(e,t){var a=this;this.cur_record=e,this.cur_type=t,this.request(n.bannerList,{cat_id:e.cat_id,type:"pc"===t?1:2}).then((function(e){a.bannerData=e}))},goUrl:function(e){e&&this.$router.push({path:e,query:{store_id:this.store_id}})},onChange:function(e){},switchHandle:function(e,t){var a=this;t.status=e?1:0,this.request(n.saveStatus,{cat_id:t.cat_id,status:t.status}).then((function(e){a.loadList()}))},showModalhandle:function(){this.visible=!0},handleCancel:function(e){console.log("Clicked cancel button"),this.visible=!1},handleSubmit:function(e){e.preventDefault(),this.form.validateFields((function(e,t){}))},handleSelectChange:function(e){this.addorEditType["cat_fid"]=e},editClassifyhandle:function(e){var t=this;this.cur_record=e,this.edit_swipper_visible=!0,this.$nextTick((function(){t.typeform.setFieldsValue({status:1==e.status,cat_name:e.cat_name})}))},editHandleOk:function(){var e=this,t=this.typeform.validateFields;t((function(t,a){t||e.request(n.addOrEditCategory,{cat_fid:e.cur_record.cat_fid,status:a.status,cat_id:e.cur_record.cat_id,cat_name:a.cat_name,level:e.cur_record.level,sort:e.cur_record.sort}).then((function(t){e.edit_swipper_visible=!1,e.$message.success("编辑成功！"),e.loadList()}))}))},showModal:function(e,t){this.swipperVisible=!0,this.bannerLinkType=t&&"wap"==t.toLowerCase()?"pc":"h5",this.refreshBannerList(e,t)},handleOk:function(e){this.visible=!1},handleTypeOk:function(e){var t=this,a=this.form.validateFields;this.confirmLoading=!0,a((function(e,a){e?t.confirmLoading=!1:t.request(n.addOrEditCategory,{cat_id:a.cat_id,cat_fid:a.cat_fid,cat_name:a.cat_name,status:a.status,url:"",sort:"",level:"1"}).then((function(e){t.confirmLoading=!1,t.$message.success("添加成功！"),t.loadList(),t.visible=!1,t.form.resetFields()}))}))},showAddModal:function(e,t){"add"==e?(this.swiperTypeIsAdd=!0,this.swipper_url="",this.imageList=[],this.cur_swiper_record.id=""):(this.cur_swiper_record=t,this.swiperTypeIsAdd=!1,this.imageList=t.image.split(),this.swipper_url=t.url),this.bannerVisible=!0},handleYesOk:function(e){var t=this,a=this.form.validateFields;this.bannerVisible=!1,a((function(e,a){e||t.request(n.addOrEditBanner,{id:t.cur_swiper_record.id,cat_id:t.cur_record.cat_id,type:"pc"==t.cur_type?1:2,image:t.imageList[0],url:t.swipper_url,sort:""}).then((function(e){t.refreshBannerList(t.cur_record,t.cur_type)}))}))},emitEmpty:function(){this.$refs.userNameInput.focus(),this.userName=""},handleChange:function(e){e.file.status,"done"===e.file.status?this.$message.success("".concat(e.file.name," file uploaded successfully")):"error"===e.file.status&&this.$message.error("".concat(e.file.name," file upload failed."))},uploadCallback:function(e){var t=this.max,a=e.name,i=this.formData.goods_img.concat(e.list);this.$set(this.formData,a,i.slice(-t))},choosePower:function(){var e=this;this.$LinkBases({source:"platform",type:this.bannerLinkType,handleOkBtn:function(t){console.log("handleOk",t),e.swipper_url=t.url}})},setClassifyModal:function(e){var t=this;this.classifyVisible=!0,this.cur_record_id=e,this.request(n.propertyList,{cat_id:e}).then((function(e){t.classifyList=e}))},classifyHandleOk:function(e){var t=this,a=this.classifyList.map((function(e){var t=[];return e.property_list.forEach((function(e){t.push(e.name)})),{is_must:e.is_must,cat_spec_name:e.cat_spec_name,property_list:t}})),i={cat_id:this.cur_record_id,spec_list:a};this.classifyVisible=!1,this.request(n.addOrEditProperty,i).then((function(e){t.classifyList=e}))}},Object(r["a"])(i,"onChange",(function(e){this.indeterminate=!!e.length&&e.length<h.length,this.checkAll=e.length===h.length})),Object(r["a"])(i,"onCheckAllChange",(function(e){Object.assign(this,{checkedList:e.target.checked?h:[],indeterminate:!1,checkAll:e.target.checked})})),Object(r["a"])(i,"chooseImage",(function(){this.$refs.chooseImage.openDialog()})),Object(r["a"])(i,"callBack",(function(e){this.imageList=e.list})),Object(r["a"])(i,"showNextClass",(function(e){this.nextClassVisible=!0,this.cur_record=e})),Object(r["a"])(i,"nextClassHandleOk",(function(){var e=this;this.nextClassVisible=!1;var t=this.form.validateFields;t((function(t,a){t||e.request(n.addOrEditCategory,{cat_fid:e.cur_record.cat_id,cat_name:a.cat_name,status:a.status,level:e.cur_record.level+1}).then((function(t){e.$message.success("新建下级成功！"),e.loadList(),e.form.resetFields()}))}))})),Object(r["a"])(i,"showConfirm",(function(e){var t=this;this.$confirm({title:"你确定要删除吗?",onOk:function(){t.request(n.delCategory,{cat_id:e.cat_id,level:e.level}).then((function(e){console.log(e),100==e?t.$message.warn("该分类下存在商品，请先删除商品后再来删除该分类！"):200==e?t.$message.warn("该分类存在子分类，不能被删除！"):t.$message.success("操作成功！"),t.loadList()}))},onCancel:function(){},class:"test"})})),Object(r["a"])(i,"showSwipperConfirm",(function(e){var t=this;this.$confirm({title:"你确定要删除吗?",onOk:function(){t.request(n.delBanner,{id:e.id}).then((function(e){t.refreshBannerList(t.cur_record,t.cur_type)}))},onCancel:function(){},class:"test"})})),Object(r["a"])(i,"addList",(function(e,t){e.property_list.push({name:""})})),Object(r["a"])(i,"addListItem",(function(){this.classifyList.push({cat_spec_name:"",is_must:0,property_list:[{name:""}]})})),Object(r["a"])(i,"classifyDelete",(function(e,t,a){e.length>1&&e.splice(a,1)})),Object(r["a"])(i,"classifyAllDelete",(function(e){this.classifyList.length>1&&this.classifyList.splice(e,1)})),Object(r["a"])(i,"checkChange",(function(e){0==e.is_must?e.is_must=1:e.is_must=0})),Object(r["a"])(i,"addChooseClassify",(function(){this.ChooseVisible=!0})),Object(r["a"])(i,"chooseHandleOk",(function(e){this.visible=!1})),Object(r["a"])(i,"pointerMove",(function(e,t){var a=this;this.request(n.addOrEditCategory,{cat_id:t.cat_id,cat_name:t.cat_name,status:t.status,sort:t.sort,level:t.level}).then((function(e){a.serialData=e,a.loadList(),console.log(1314,a.serialData)}))})),Object(r["a"])(i,"swipperSerialMove",(function(e,t){var a=this;this.request(n.addOrEditBanner,{id:t.id,cat_id:this.cur_record.cat_id,type:"pc"==this.cur_type?1:2,image:t.image,url:t.url,sort:t.sort}).then((function(e){a.SerialSwipperData=e}))})),Object(r["a"])(i,"AddImage",(function(e){this.currrnt_record=e,this.$refs.AddImage.openDialog()})),Object(r["a"])(i,"Addpicture",(function(e,t){var a=this;console.log(123,this.currrnt_record),this.PictureList=e.list,this.ImgList=this.PictureList[0],this.ImgList.hasOwnProperty("selected")&&(this.ImgList=this.ImgList["img"]);var i=this.ImgList.replace(/[^]+upload/,"/upload");console.log(i),this.request(n.uploadPictures,{reply_pic:i,upload_dir:this.upload_dir}).then((function(e){a.request(n.addOrEditCategory,{cat_id:a.currrnt_record.cat_id,cat_name:a.currrnt_record.cat_name,status:a.currrnt_record.status,sort:a.currrnt_record.sort,level:a.currrnt_record.level,cat_fid:a.currrnt_record.cat_fid,image:i,url:a.upload_dir}).then((function(e){a.serialList=e,a.loadList(),console.log(1314,a.serialList)}))}))})),i)},g=p,f=(a("7ae5"),a("2877")),v=Object(f["a"])(g,s,l,!1,null,"7af1f0e4",null);t["default"]=v.exports},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a("6b75");function s(e){if(Array.isArray(e))return Object(i["a"])(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function l(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var r=a("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e){return s(e)||l(e)||Object(r["a"])(e)||o()}},4031:function(e,t,a){"use strict";var i={getLists:"/mall/merchant.MerchantStoreMall/getStoreList",perfectedStore:"/mall/merchant.MerchantStoreMall/perfectedStore",getStoreConfigList:"/mall/merchant.MerchantStoreMall/getStoreConfigList",getShippingList:"/mall/merchant.MallShipping/getShippingList",updateShipping:"/mall/merchant.MallShipping/addShipping",changeState:"/mall/merchant.MallShipping/changeState",removeShipping:"/mall/merchant.MallShipping/del",getShippingInfo:"/mall/merchant.MallShipping/edit",getMerchantSort:"/mall/merchant.MallGoods/getMerchantSort",getMallGoods:"/mall/merchant.MallGoods/getMallGoodsSelect",getGiveList:"/mall/merchant.MallGive/getGiveList",giveAdd:"/mall/merchant.MallGive/addGive",giveChangeState:"/mall/merchant.MallGive/changeState",giveDel:"/mall/merchant.MallGive/del",getGiveInfo:"/mall/merchant.MallGive/edit",getPlatSort:"/mall/merchant.MallGoods/getPlatformSort",getStoreSort:"/mall/merchant.MallGoods/getMerchantSort",getPrepareList:"/mall/merchant.MallPrepare/getPrepareList",updatePrepare:"/mall/merchant.MallPrepare/addPrepare",prepareChangeState:"/mall/merchant.MallPrepare/changeState",removePrepare:"/mall/merchant.MallPrepare/del",getPrepareInfo:"/mall/merchant.MallPrepare/edit",getReachedList:"/mall/merchant.MallReached/getReachedList",updateReachedList:"/mall/merchant.MallReached/addReached",getReachedInfo:"/mall/merchant.MallReached/edit",reachedChangeState:"/mall/merchant.MallReached/changeState",reachedDel:"/mall/merchant.MallReached/del",addRobot:"/mall/merchant.MallGroup/addRobot",delRobot:"/mall/merchant.MallGroup/delRobot",getRobotList:"/mall/merchant.MallGroup/getRobotList",getRobotName:"/mall/merchant.MallGroup/getRobotName",getUploadImages:"/common/common.UploadFile/getUploadImages",getGoodsSort:"/mall/merchant.MallGoods/getMerchantSort",getGoodsStatus:"/mall/merchant.MallGoods/getNumbers",getGoodsList:"/mall/merchant.MallGoods/getGoodsList",changeGoodsStatus:"/mall/merchant.MallGoods/setStatusLot",setVirtualSales:"/mall/merchant.MallGoods/setVirtualSales",changeGoodsSort:"/mall/merchant.MallGoods/setSort",getGoodsSkuPrice:"/mall/merchant.MallGoods/getGoodsSkuInfo",changeGoodsPrice:"/mall/merchant.MallGoods/setGoodsSkuInfo",getPlatProps:"/mall/merchant.MallGoods/getPlatformProperties",getFreightList:"/mall/merchant.MallGoods/getfreightList",getServiceList:"/mall/merchant.MallGoods/dealService",removeGoods:"/mall/merchant.MallGoods/delGoods",updateGoods:"/mall/merchant.MallGoods/addOrEditGoods",exportGoods:"/mall/merchant.MallGoods/exportGoods",getGoodsInfo:"/mall/merchant.MallGoods/getEditGoods",getGroupList:"/mall/merchant.MallGroup/getGroupList",groupAdd:"/mall/merchant.MallGroup/addGroup",groupChangeState:"/mall/merchant.MallGroup/changeState",groupDel:"/mall/merchant.MallGroup/del",getGroupInfo:"/mall/merchant.MallGroup/editDetail",getPeriodicList:"/mall/merchant.MallPeriodic/getPeriodicList",updatePeriodic:"/mall/merchant.MallPeriodic/addPeriodic",periodicChangeState:"/mall/merchant.MallPeriodic/changeState",removePeriodic:"/mall/merchant.MallPeriodic/del",getPeriodicInfo:"/mall/merchant.MallPeriodic/edit",getBargainList:"/mall/merchant.MallBargain/getBargainList",bargainAdd:"/mall/merchant.MallBargain/addBargain",bargainChangeState:"/mall/merchant.MallBargain/changeState",bargainDel:"/mall/merchant.MallBargain/del",getBargainInfo:"/mall/merchant.MallBargain/editDetail",getMinusDiscountList:"/mall/merchant.MallFullMinusDiscount/getFullMinusDiscountList",updateMinusDiscount:"/mall/merchant.MallFullMinusDiscount/addFullMinusDiscount",minusDiscountChangeState:"/mall/merchant.MallFullMinusDiscount/changeState",removeMinusDiscount:"/mall/merchant.MallFullMinusDiscount/del",getMinusDiscountInfo:"/mall/merchant.MallFullMinusDiscount/edit",getLimitedList:"/mall/merchant.MallLimited/getLimitedList",updateLimited:"/mall/merchant.MallLimited/addLimited",limitedChangeState:"/mall/merchant.MallLimited/changeState",removeLimited:"/mall/merchant.MallLimited/del",getLimitedInfo:"/mall/merchant.MallLimited/edit",getGoodsSortList:"/mall/merchant.MallGoodsSort/getSortList",delGoodsSort:"/mall/merchant.MallGoodsSort/delSort",editGoodsSort:"/mall/merchant.MallGoodsSort/addOrEditSort",getEditSort:"/mall/merchant.MallGoodsSort/getEditSort",editSort:"/mall/merchant.MallGoodsSort/saveSort",saveStatus:"/mall/merchant.MallGoodsSort/saveStatus",getAllGoodsSort:"/mall/merchant.MallGoodsSort/getSort",getStoreList:"/mall/merchant.MallMerchantReply/getStores",getReplyList:"/mall/merchant.MallMerchantReply/searchReply",addComment:"/mall/merchant.MallMerchantReply/merchantReply",getReplyDetails:"/mall/merchant.MallMerchantReply/getReplyDetails",getShowHomePage:"/mall/merchant.MallMerchantReply/getShowHomePage",getQualityReviews:"/mall/merchant.MallMerchantReply/getQualityReviews",getShowHomePageCancel:"/mall/merchant.MallMerchantReply/getShowHomePageCancel",getQualityReviewsCancel:"/mall/merchant.MallMerchantReply/getQualityReviewsCancel",getOrderList:"/mall/merchant.MallOrder/searchOrders",getOrderDetails:"/mall/merchant.MallOrder/getOrderDetails",getCollect:"/mall/merchant.MallOrder/getCollect",getDiscount:"/mall/merchant.MallOrder/getDiscount",exportOrder:"/mall/merchant.MallOrder/exportOrder ",deleteJudge:"/mall/merchant.MallGoods/deleteJudge ",getTemplateList:"/mall/merchant.ExpressTemplate/index",getTemplateAreaList:"/mall/merchant.ExpressTemplate/ajax_area",getTemplateAreaNameList:"/mall/merchant.ExpressTemplate/get_area_name",addTemplate:"/mall/merchant.ExpressTemplate/save",editTemplate:"/mall/merchant.ExpressTemplate/edit",delTemplate:"/mall/merchant.ExpressTemplate/delete",goodsBatch:"/mall/merchant.MallGoods/goodsBatch",viewLogistics:"/mall/merchant.MallOrder/viewLogistics"};t["a"]=i},"640f":function(e,t,a){},"6cf3":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{staticClass:"dialog",attrs:{title:"请选择素材",width:"800px",centered:"",visible:e.visible,destroyOnClose:!0},on:{ok:e.handleOk,cancel:e.handleCancel}},[i("a-tabs",{attrs:{type:"card",defaultActiveKey:"1"},on:{change:e.onTabChange}},[i("a-tab-pane",{key:"1",attrs:{tab:"从素材库选择"}},[i("div",{staticClass:"content scroll_content1"},[e.imageList.length?e._l(e.imageList,(function(t,s){return i("div",{key:"img_"+s,staticClass:"img-list",style:t.selected?"border: 1px solid rgb(24,144,255)":"",on:{click:function(a){return e.chooseImage(t,s)}}},["image"==e.type?i("img",{staticClass:"goods-img",attrs:{src:t.img}}):e._e(),"video"==e.type?i("video",{staticClass:"goods-img",attrs:{src:t.img.url,poster:t.img.image}}):e._e(),i("img",{directives:[{name:"show",rawName:"v-show",value:t.selected,expression:"item.selected"}],staticClass:"selected",attrs:{src:a("c660")}})])})):[i("div",{staticClass:"no-data"},[e._v("暂无素材")])]],2)]),i("a-tab-pane",{key:"2",attrs:{tab:"上传新素材"}},[i("div",{staticClass:"content scroll_content"},[e.checkedList.length<this.max?[i("a-upload",{attrs:{action:e.action,name:e.uploadName,data:{upload_dir:e.upload_dir,store_id:e.store_id},"list-type":"picture-card","file-list":e.uploadList,multiple:e.multiple,showUploadList:e.showUploadList,accept:e.accept,"before-upload":e.beforeUpload},on:{change:e.handleUploadChange}},[e.showUpload?i("div",[i("a-icon",{staticStyle:{"font-size":"32px",color:"#999"},attrs:{type:e.loading?"loading":"plus"}})],1):e._e()])]:[i("div",{staticClass:"no-data"},[e._v("您最多可选择"+e._s(e.max)+"个"+e._s(e.typeTxt))])]],2)])],1)],1)},s=[],l=a("2909"),r=(a("a9e3"),a("d81d"),a("d3b7"),a("159b"),a("b0c0"),a("fb6a"),a("a434"),a("3ca3"),a("ddb0"),a("4031")),o={name:"ChooseImage",props:{name:{type:String,default:""},max:{type:Number,default:0},upload_dir:{type:String,default:""},store_id:{type:[String,Number],default:""},type:{type:String,default:"image"}},data:function(){return{visible:!1,uploadList:[],imageList:[],checkedList:[],typeTxt:"图片",action:"/v20/public/index.php/common/common.UploadFile/uploadPictures",uploadName:"reply_pic",showUploadList:!0,loading:!1}},computed:{showUpload:function(){return 0==this.max||this.uploadList.length+this.checkedList.length<this.max||!this.showUploadList},multiple:function(){return 1!=this.max&&this.checkedList.length!=this.max-1},accept:function(){return"image"==this.type?"image/*":"video/*"}},watch:{type:function(){this.initData()}},mounted:function(){var e=this;this.$nextTick((function(){e.initData()}))},methods:{initData:function(){this.typeTxt="image"==this.type?"图片":"视频",this.action="image"==this.type?"/v20/public/index.php/common/common.UploadFile/uploadPictures":"/v20/public/index.php/common/common.UploadFile/uploadVideo",this.uploadName="image"==this.type?"reply_pic":"reply_mv",this.showUploadList="image"==this.type},openDialog:function(){this.visible=!0,this.init()},getImageList:function(){var e=this,t={type:this.type,dir:this.upload_dir};""!=this.store_id&&(t.store_id=this.store_id),this.request(r["a"].getUploadImages,t).then((function(t){t.length&&(e.imageList=t.map((function(t){return"image"==e.type?{img:t,selected:!1}:{img:{url:t.url,image:t.image,vtime:t.vtime},selected:!1}})))}))},init:function(){var e=this;this.$set(this,"uploadList",[]),this.$set(this,"checkedList",[]),this.$set(this,"imageList",[]),this.$nextTick((function(){e.getImageList()}))},handleOk:function(){var e=this;console.log(this.checkedList);var t=[],a=location.origin;this.checkedList.length&&("image"==this.type?t=Object(l["a"])(this.checkedList):(t.push(this.checkedList[0].url),t.push(this.checkedList[0].image),t.push(this.checkedList[0].vtime))),this.uploadList.length&&this.showUploadList&&this.uploadList.forEach((function(i){i.response&&i.response.data&&("image"==e.type?t.push(a+i.response.data):"video"==e.type&&(t.push(a+i.response.data.url),t.push(i.response.data.image),t.push(i.response.data.vtime)))})),console.log(111111111,t),0!=t.length?(this.$emit("callback",{list:t,name:this.name}),this.handleCancel()):this.$message.error("至少得选择一个素材")},handleCancel:function(){this.visible=!1},onTabChange:function(e){},handleUploadChange:function(e){var t=e.file,a=e.fileList;console.log("----------file",t),console.log("----------fileList",a);var i=t.status,s=t.response;if("uploading"==i&&(this.loading=!0),"done"===i){if(1e3==s.status){var r=this.max-this.checkedList.length;a=a.slice(-r),"video"==this.type&&(this.showUploadList={showPreviewIcon:!1,showRemoveIcon:!0})}else s.msg&&this.$message.error(s.msg),"video"==this.type&&(this.showUploadList=!1);this.loading=!1}"error"==i&&(this.loading=!1,this.$message.error("上传失败")),this.uploadList=Object(l["a"])(a)},chooseImage:function(e,t){if(e.selected){for(var a in e.selected=!1,this.$set(this.imageList,t,e),this.checkedList)if(this.checkedList[a]==e.img)return void this.checkedList.splice(a,1)}else this.checkedList.length==this.max-this.uploadList.length?this.$message.warning("您最多可选择（包含上传）"+this.max+"个"+this.typeTxt):(e.selected=!0,this.checkedList.push(e.img),this.$set(this.imageList,t,e))},beforeUpload:function(e){return Promise.all([this.checkType(e)])},checkType:function(e){var t=this;return new Promise((function(a,i){-1==e.type.indexOf(t.type)?(t.$message.error(t.L("image"==t.type?"您上传的图片文件格式不正确！请重新选择":"您上传的视频文件格式不正确！请重新选择")),i()):(console.log("类型正确"),a())}))}}};var n=o,c=(a("b196"),a("2877")),d=Object(c["a"])(n,i,s,!1,null,"7619522d",null);t["a"]=d.exports},"7ae5":function(e,t,a){"use strict";a("640f")},b196:function(e,t,a){"use strict";a("1eb3")},c660:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkxMTg5NkE3M0VBMTExRUI4NUFDODgzODc3Q0QyMDMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkxMTg5NkE4M0VBMTExRUI4NUFDODgzODc3Q0QyMDMwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTExODk2QTUzRUExMTFFQjg1QUM4ODM4NzdDRDIwMzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTExODk2QTYzRUExMTFFQjg1QUM4ODM4NzdDRDIwMzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BTNpWAAAEdklEQVR42uybXUgUURTH7272EIXSU4Gt4ENFBUmkD0X0Ke2mCEJpPQRFSgXRh0JFVGRRvRQqRi+ZYB9UJhRpDxqaJlJRD0Fg9VLBbg9G9JAEQkH1P+tZma6zu7PNx96Z6cDhjuPsnfv7zz33a+YGhAM2t/n3WiQheAGn2mOyGDzK6eTx6KHAoN1lC9gEXIgkAg/DN8Bn/WNW3+H98F54DwT5qKwAgM5FUs/Aq2x6YMMsSCPEGFNGAMDXIKmDLxHO2Ai8CSK0ZVUAgIcZPCyyY70sRK+jAgB8BpJL8BqhhlFN2A8hxm0XAPDz+IYbhVr2iB4IRPhkmwCAX8o3miPUtM/0YCDCa8sFADy17n3CHVYKEfqNXBg0CN/gIniyPi6z+RrAXdxV4U6rTddVBgx0cz3C3RZJ1U0GUsAvRvIMnutyAWjEuAIivDHcBvCwtt0D8IIZ2pnJcCPYCC8R3rESZkofAh6Je8PtgV4NqBPetbqUIcBdXtjDAoSZcWoIcCPx1MEpbbaMptIrE+sJ2hpQ7wN4wYx1eiGwWvjH1vwVAqj+tDgZdUnhv8A74bTuuMlEPgUIg1hQVkRxe0VlRcH3wctwXG22FiQEiLgA/jl8C8Dfas6Nm8gvohWgQnH4QfhmwH9InFjR+mMakr0m8owzB/ilxYDC8DQq3Q74r5ouOw/JLXiZybzXUQ0IKQz/AF4lwecj6bIAnixEAhQoCt9ROPMnxfx3DfxChreqyy7IUbQGXAP4ztG/h+nLudovsPA+IRVD4ArBS3OUNRwOCyy+lyUhcJtaaPhRHmebsRbA75Hgyxk+3waxLQmBbhT6Hhe2i6vpsn/I5wLyOSLBb0VyE55jU20LBS3IZHJgAoB31GrDX2SYx1kdeJq23rERfnIyFDOZxxntHwB5zyIMG/z9CfzmpAR/UDizFB+fC5idBFWgwHclEaIsQroB1mFce06CP46k2aEGN2pFDSCr0hFhlEVItiZ/ANdclODPUzg42OPErBIgmQhfecb2ULp2N/53SYJvQXLM4S7XkhBIJ8IYi3CfT+3AuVYJPv5+PwtjjqiVNSCVCOMswjYcX0+cn3/513Rc24HDXVkadMUSK0LfhPVvgToBm3TBAvecjeQGvDxL8GMoX15iHNBtww2m1AQNfIhDIlvwk8xBzZxbOCEC/l6EhEaO2V6GizMnRllPbLxRlfSxwilFJl1xZu2Lkce0QiL8YQOI//XaECAbEv6xIe1cIGGNFkxn3WAjQvOqPCgNWJp8IECT9jtjve8DqHX06hviXsBH5OnwFIW8/PT11gOENGyl2VubB+Hb9L4WS7YiRK/KX3oI/iUzTbH/n8kl+xX/oNoDT786GXxKATTtQa2L4WvTbaZIuyrM39o2uBD+tJEtNf8/lzeaI2dYJCY2JahqVLYio/AZCcAi0E6MYjGxa0Q1ozIVZ7JbJGMBWATak1Op2GCJylKZ6X6hjNqAJO2CP7fN6Qjhz42Tkgi5LEKp8NvWWR0x/Ld5Oo0ga4Wi2+f/CDAAp9WWHrao0YwAAAAASUVORK5CYII="}}]);