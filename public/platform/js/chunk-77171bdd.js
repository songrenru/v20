(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77171bdd","chunk-f81b6dfa","chunk-5084ebdc","chunk-2d0b6a79","chunk-2d0b3786"],{"05ba":function(t,e,i){"use strict";i("af0a")},"1da1":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i("d3b7");function a(t,e,i,a,n,s,r){try{var o=t[s](r),l=o.value}catch(c){return void i(c)}o.done?e(l):Promise.resolve(l).then(a,n)}function n(t){return function(){var e=this,i=arguments;return new Promise((function(n,s){var r=t.apply(e,i);function o(t){a(r,n,s,o,l,"next",t)}function l(t){a(r,n,s,o,l,"throw",t)}o(void 0)}))}}},"230a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.detail.title,width:810,height:640,visible:t.visible,footer:null},on:{cancel:t.handleCancel}},[i("div",{staticStyle:{"margin-top":"-14px","font-width":"bold"}},[t._v(t._s(t.detail.add_time)),i("a",{staticStyle:{"padding-left":"10px"}},[t._v("本站")])]),i("div",[i("a-row",{staticClass:"mb-20"},[i("a-col",{attrs:{span:1}}),i("a-col",{attrs:{span:22}},[i("viewer",{attrs:{images:t.detail.img}},t._l(t.detail.img,(function(t,e){return i("img",{key:e,staticStyle:{"max-width":"680px"},attrs:{src:t}})})),0)],1)],1),i("a-row",{staticClass:"mb-20"},[i("a-col",{attrs:{span:1}}),i("a-col",{attrs:{span:21}},[i("span",{domProps:{innerHTML:t._s(t.detail.content)}},[t._v(" "+t._s(t.detail.content))])])],1)],1)])},n=[],s=i("ba1b"),r=(i("0808"),i("6944")),o=i.n(r),l=i("8bbf"),c=i.n(l),d=i("d6d3");i("fda2");c.a.use(o.a);var u={components:{videoPlayer:d["videoPlayer"]},data:function(){return{title:"文章内容",visible:!1,rpl_id:0,detail:{name:"",content:"",img:[]}}},methods:{view:function(t){var e=this;this.visible=!0,this.id=t,this.request(s["a"].getAtlasArticleDetail,{id:this.id}).then((function(t){e.detail=t,console.log(e.detail)}))},handleCancel:function(){this.detail.reply_mv_nums=2,this.visible=!1}}},p=u,f=(i("05ba"),i("0c7c")),h=Object(f["a"])(p,a,n,!1,null,"6022361a",null);e["default"]=h.exports},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var a=i("6b75");function n(t){if(Array.isArray(t))return Object(a["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=i("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return n(t)||s(t)||Object(r["a"])(t)||o()}},"352b":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"content",staticClass:"card-list"},[i("a-card",{staticClass:"ant-pro-components-tag-select",attrs:{bordered:!1}},[i("div",{staticStyle:{"font-size":"26px","line-height":"30px","margin-bottom":"30px"}},[t._v("图文列表")]),i("a-form-model",{attrs:{form:t.form,layout:"inline"}},[i("div",{staticStyle:{"line-height":"40px",float:"left",width:"70px"}},[t._v("一级分类：")]),i("standard-form-row",{staticStyle:{"padding-bottom":"11px"},attrs:{block:""}},[i("a-form-item",{staticClass:"select-list",staticStyle:{width:"88%"},style:t.isShowNameType?t.activeNameStyle:t.showNameStyle},t._l(t.catList,(function(e){return i("a",{key:e.cat_id,staticClass:"categoryone",attrs:{cat_id:e.cat_id},on:{click:function(i){return t.categoryList(e.cat_id)}}},[t.category_id==e.cat_id?i("span",{staticStyle:{color:"#299dff"}},[t._v(t._s(e.cat_name))]):t._e(),t.category_id!=e.cat_id?i("span",[t._v(t._s(e.cat_name))]):t._e()])})),0)],1),t.isShowNameType?i("span",{staticStyle:{color:"rgb(41, 157, 255)",cursor:"pointer"},on:{click:t.handleIsShowNameType}},[t._v("展开∨")]):t._e(),t.isShowNameType?t._e():i("span",{staticStyle:{color:"rgb(41, 157, 255)",cursor:"pointer"},on:{click:t.handleIsShowNameType}},[t._v("收起∧")])],1),""!=t.secondList?i("a-form-model",{attrs:{form:t.form,layout:"inline"}},[i("span",{staticStyle:{"line-height":"40px"}},[t._v("二级分类：")]),i("standard-form-row",{staticStyle:{"padding-bottom":"11px"},attrs:{block:""}},[i("a-form-item",t._l(t.secondList,(function(e){return i("a",{key:e.cat_id,staticClass:"categoryone",attrs:{cat_id:e.cat_id},on:{click:function(i){return t.category(e.cat_id)}}},[t.searchForm.cat_id==e.cat_id?i("span",{staticStyle:{color:"#299dff"}},[t._v(t._s(e.cat_name))]):t._e(),t.searchForm.cat_id!=e.cat_id?i("span",[t._v(t._s(e.cat_name))]):t._e()])})),0)],1)],1):t._e(),i("a-form-model",{attrs:{layout:"inline",model:t.searchForm}},[i("a-form-model-item",{attrs:{label:"发布时间"}},[i("a-date-picker",{staticStyle:{width:"120px"},on:{change:t.onChange},model:{value:t.searchForm.edit_time,callback:function(e){t.$set(t.searchForm,"edit_time",e)},expression:"searchForm.edit_time"}})],1),i("a-form-model-item",{attrs:{label:"图文标题"}},[i("a-input",{staticStyle:{width:"160px"},attrs:{placeholder:"请输入图文标题"},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),i("a-form-model-item",[i("a-button",{staticClass:"ml-20",staticStyle:{"margin-top":"3px","line-height":"20px",color:"#fff"},attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.submitForm(!0)}}},[t._v(" 查询")])],1)],1)],1),i("div",{staticStyle:{height:"30px"}}),i("a-list",{attrs:{rowKey:"id",grid:{gutter:24,lg:4,md:2,sm:1,xs:1},dataSource:t.dataSource,pagination:t.pagination},scopedSlots:t._u([{key:"renderItem",fn:function(e){return i("a-list-item",{},[e&&void 0!==e.id?[i("a-card",{attrs:{hoverable:!0},scopedSlots:t._u([{key:"cover",fn:function(){return[i("img",{staticStyle:{width:"100%",height:"160px"},attrs:{src:e.pic}})]},proxy:!0}],null,!0)},[i("a-card-meta",[i("a",{staticStyle:{"font-size":"14px"},attrs:{slot:"title"},on:{click:function(i){return t.view(e.id)}},slot:"title"},[t._v(t._s(e.title))]),i("div",{staticClass:"meta-content",staticStyle:{"font-size":"12px"},attrs:{slot:"description"},slot:"description"},[i("span",{staticStyle:{float:"left"}},[t._v("更新于 　 "+t._s(e.edit_time))]),i("span",{staticStyle:{float:"right"}},[t._v(t._s(e.views_num))])])]),i("a",{staticClass:"actions",on:{click:function(i){return t.edit(e.id)}}},[i("img",{staticClass:"img_create",attrs:{src:e.create}})]),i("a",{staticClass:"actions dek",on:{click:function(i){return t.delOne(e.id)}}},[i("img",{staticClass:"img_create img_del",attrs:{src:e.del}})])],1)]:[i("a-button",{staticClass:"new-btn",staticStyle:{height:"256px","font-weight":"bold","font-size":"16px"},attrs:{type:"dashed"},on:{click:function(e){return t.add()}}},[i("a-icon",{staticStyle:{"font-size":"60px","font-weight":"normal"},attrs:{type:"plus"}}),i("br"),i("br"),t._v(" 新增图文 ")],1)]],2)}}])}),i("atlas-article-create",{ref:"createModal",on:{loaddata:t.getList}}),i("atlas-article-view",{ref:"viewModel",on:{loadRefresh:t.getList}})],1)},n=[],s=i("5530"),r=i("c619"),o=i("230a"),l=i("ba1b"),c=i("2af9"),d={name:"GroupSearchHotList",components:{atlasArticleView:o["default"],atlasArticleCreate:r["default"],StandardFormRow:c["default"]},data:function(){return{cat_id:0,cat_fid:0,category_id:0,catList:[],secondList:[],searchForm:{name:"",edit_time:"",cat_id:0,cat_fid:0},dataSource:[{}],pagination:{current:1,total:0,pageSize:20,showSizeChanger:!0,onChange:this.onPageChange,onShowSizeChange:this.onPageSizeChange,showTotal:function(t){return"共 ".concat(t," 条记录")}},activeNameStyle:"height: 40px; overflow: hidden;",showNameStyle:"min-height: 40px;",isShowNameType:!0,activeNameIndex:null}},mounted:function(){this.getList({is_search:!1})},methods:{handleIsShowNameType:function(){this.isShowNameType=!this.isShowNameType},selectNameType:function(t,e){this.activeNameIndex=t},categoryList:function(t){var e=this;this.cat_fid=t,this.request(l["a"].getAtlasArticleSecond,{cat_id:t}).then((function(i){e.secondList=i,e.category_id=t})),this.searchForm.cat_id=0,this.searchForm.cat_fid=this.cat_fid,this.getList({is_search:!1})},category:function(t){console.log("----------------------",this.cat_fid),this.searchForm.cat_id=t,this.searchForm.cat_fid=this.cat_fid,this.getList({is_search:!1})},add:function(){this.$refs.createModal.add()},edit:function(t){this.$refs.createModal.edit(t)},view:function(t){this.$refs.viewModel.view(t)},delOne:function(t){var e=this;this.$confirm({title:"提示",content:"确定删除吗？",onOk:function(){e.request(l["a"].getAtlasArticleDel,{id:t}).then((function(t){e.getList({is_search:!1})}))},onCancel:function(){}})},getList:function(t){var e=this,i=Object(s["a"])({},this.searchForm);delete i.time,1==t.is_search?(i.page=1,this.$set(this.pagination,"current",1)):(i.page=this.pagination.current,this.$set(this.pagination,"current",this.pagination.current)),i.pageSize=this.pagination.pageSize,this.request(l["a"].getAtlasArticleList,i).then((function(t){e.dataSource=t.list,e.catList=t.catList,e.$set(e.pagination,"total",t.count)}))},submitForm:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(s["a"])({},this.searchForm);delete e.time,e.is_search=t,e.tablekey=1,this.getList(e)},onPageChange:function(t,e){this.$set(this.pagination,"current",t),this.submitForm()},onPageSizeChange:function(t,e){this.$set(this.pagination,"pageSize",e),this.submitForm()},onChange:function(t,e){},testFun:function(){this.$message.info("快速开始被点击！")}}},u=d,p=(i("c208"),i("0c7c")),f=Object(p["a"])(u,a,n,!1,null,"4da2e78c",null);e["default"]=f.exports},"7b3f":function(t,e,i){"use strict";var a={uploadImg:"/common/common.UploadFile/uploadImg"};e["a"]=a},"7fa2":function(t,e,i){},af0a:function(t,e,i){},b93a:function(t,e,i){},ba1b:function(t,e,i){"use strict";var a={getAtlasArticleList:"/atlas/api.AtlasArticle/getAtlasArticleList",getAtlasArticleClass:"/atlas/api.AtlasArticle/getAtlasArticleClass",getAtlasArticleOption:"/atlas/api.AtlasArticle/getAtlasArticleOption",getAtlasArticleDetail:"/atlas/api.AtlasArticle/getAtlasArticleDetail",getAtlasArticleCreate:"/atlas/api.AtlasArticle/getAtlasArticleCreate",getAtlasArticleDel:"/atlas/api.AtlasArticle/getAtlasArticleDel",getAtlasCategoryList:"/atlas/api.AtlasCategory/getAtlasCategoryList",getAtlasCategoryInfo:"/atlas/api.AtlasCategory/getAtlasCategoryInfo",getAtlasCategoryCreate:"/atlas/api.AtlasCategory/getAtlasCategoryCreate",getAtlasCategoryDel:"/atlas/api.AtlasCategory/getAtlasCategoryDel",getAtlasArticleSecond:"/atlas/api.AtlasCategory/getAtlasArticleSecond",getAtlasSpecialList:"/atlas/api.AtlasSpecial/getAtlasSpecialList",getAtlasSpecialInfo:"/atlas/api.AtlasSpecial/getAtlasSpecialInfo",getAtlasSpecialCreate:"/atlas/api.AtlasSpecial/getAtlasSpecialCreate",getAtlasSpecialDel:"/atlas/api.AtlasSpecial/getAtlasSpecialDel"};e["a"]=a},c208:function(t,e,i){"use strict";i("b93a")},c619:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,width:840,visible:t.visible,maskClosable:t.maskClosable,confirmLoading:t.confirmLoading},on:{ok:t.handleSubmit,cancel:t.handleCancel}},[i("a-spin",{attrs:{spinning:t.confirmLoading}},[i("a-form",{attrs:{form:t.form}},[i("a-form-item",{attrs:{label:"选择分类",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["cat_id",{initialValue:t.detail.cat_id,rules:[{required:!0,message:"请选择图文分类"}]}],expression:"['cat_id', { initialValue: detail.cat_id, rules: [{ required: true,message:'请选择图文分类' }] }]"}],attrs:{options:t.options,placeholder:"请选择图文分类"},on:{change:t.onChange}})],1),t._l(t.specialList,(function(e){return i("div",{key:e.id,attrs:{id:e.id}},[0==e.type_id?i("div",{staticClass:"ant-col ant-col-xs-24 ant-col-sm-7 ant-form-item-label",staticStyle:{width:"266px"}},[i("label",{staticClass:"ant-form-item-no-colon"},[t._v(t._s(e.name)+"：")])]):t._e(),0==e.type_id?i("a-form-item",{attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["owner"+e.id,{initialValue:e.ownerid,rules:[{required:!1}]}],expression:"['owner' + item.id, { initialValue: item.ownerid, rules: [{ required: false }] }]"}],staticStyle:{width:"180px"},attrs:{placeholder:"请选择标签"}},t._l(e.optionList,(function(a){return i("a-select-option",{key:a.id,attrs:{id:a.id}},[t._v(t._s(a.name)+t._s(e.owner)+" ")])})),1)],1):t._e(),1==e.type_id?i("div",{staticClass:"ant-col ant-col-xs-24 ant-col-sm-7 ant-form-item-label",staticStyle:{width:"266px"}},[i("label",{staticClass:"ant-form-item-no-colon"},[t._v(t._s(e.name)+"：")])]):t._e(),1==e.type_id?i("a-form-item",{staticStyle:{width:"800px"},attrs:{label:"",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["owner"+e.id,{initialValue:e.ownerid,rules:[{required:!1}]}],expression:"['owner' + item.id, { initialValue: item.ownerid, rules: [{ required: false }] }]"}],staticStyle:{"max-width":"268px",width:"100%"},attrs:{mode:"multiple",placeholder:"请选择标签"},on:{change:t.handleChange}},t._l(e.optionList,(function(a){return i("a-select-option",{key:a.id},[t._v(t._s(a.name)+t._s(e.owner))])})),1)],1):t._e()],1)})),i("a-form-item",{attrs:{label:"文章标题",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:t.detail.title,rules:[{required:!0,message:"请输入文章标题"}]}],expression:"['title', { initialValue: detail.title, rules: [{ required: true ,message:'请输入文章标题'}] }]"}]})],1),i("a-form-item",{attrs:{label:"封面图",colon:!1,labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("div",{staticStyle:{color:"red",position:"absolute",left:"-62px",top:"0px"}},[t._v("*")]),i("div",{key:t.ImgKey,staticClass:"clearfix"},[i("a-upload",{attrs:{name:"reply_pic",action:t.uploadImg,"list-type":"picture-card","file-list":t.imgUploadList,multiple:!0},on:{preview:t.handlePreview,change:t.handleImgChange}},[t.imgUploadList.length<1?i("div",[i("a-icon",{attrs:{type:"plus"}}),i("div",{staticClass:"ant-upload-text"},[t._v("上传图片")])],1):t._e()]),i("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleImgCancel}},[i("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)]),i("a-form-item",{attrs:{label:"摘要",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{initialValue:t.detail.description,rules:[{required:!1}]}],expression:"['description', { initialValue: detail.description, rules: [{ required: false }] }]"}],attrs:{rows:5}})],1),i("a-form-item",{attrs:{label:"",colon:!1}},[i("rich-text",{attrs:{info:t.detail.content},on:{"update:info":function(e){return t.$set(t.detail,"content",e)}}})],1)],2)],1)],1)},n=[],s=i("53ca"),r=i("2909"),o=i("1da1"),l=(i("96cf"),i("d3b7"),i("d81d"),i("b0c0"),i("7b3f")),c=i("ba1b"),d=i("6ec16");function u(t){return new Promise((function(e,i){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){return e(a.result)},a.onerror=function(t){return i(t)}}))}var p={components:{RichText:d["a"]},data:function(){return{maskClosable:!1,options:[],specialList:[],previewVisible:!1,previewImage:"",imgUploadList:[],uploadImg:"/v20/public/index.php"+l["a"].uploadImg+"?upload_dir=/group",title:"添加图文信息",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),detail:{id:0,name:"",description:"",content:"",sort:"",img:[],cat_id:0},cat_id:0,id:0}},watch:{visible:function(){this.visible?(this.ImgKey="",this.previewVisible=!1,this.previewImage="",this.imgUploadList="",this.detail.content=" "):this.ImgKey=Math.random(),console.log("this.ImgKey :>> ",this.ImgKey)}},mounted:function(){},methods:{onChange:function(t){var e=this;this.cat_id=t,this.request(c["a"].getAtlasArticleOption,{value:t}).then((function(t){e.specialList=t}))},clearUeditor:function(){$EDITORUI["edui51"]._onClick()},handleImgCancel:function(){this.previewVisible=!1},handlePreview:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.url||t.preview){i.next=4;break}return i.next=3,u(t.originFileObj);case 3:t.preview=i.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return i.stop()}}),i)})))()},handleChange:function(t){},handleImgChange:function(t){var e=this,i=Object(r["a"])(t.fileList);this.imgUploadList=i;var a=[];this.imgUploadList.map((function(i){if("done"===i.status&&"1000"==i.response.status){var n=i.response.data;a.push(n.full_url),e.$set(e.detail,"img",a)}else"error"===t.file.status&&e.$message.error("".concat(t.file.name," 上传失败！"))}))},add:function(){this.visible=!0,this.specialList=[],this.id=0,this.title="添加图文信息",this.getAtlasArticleClass(),this.detail={id:0,name:"",description:"",content:"",sort:"",img:[]}},edit:function(t){this.visible=!0,this.id=t,this.getAtlasArticleClass(),this.getEditInfo(t),this.title="编辑图文信息"},handleSubmit:function(){var t=this,e=this.form.validateFields;this.confirmLoading=!0,e((function(e,i){e?t.confirmLoading=!1:(i.cat_id=t.cat_id,i.id=t.id,i.pic=t.detail.img,i.content=t.detail.content,t.request(c["a"].getAtlasArticleCreate,i).then((function(e){t.id>0?t.$message.success("编辑成功"):t.$message.success("添加成功"),setTimeout((function(){t.form=t.$form.createForm(t),t.visible=!1,t.confirmLoading=!1,t.$emit("loaddata",t.cat_id)}),1500)})).catch((function(e){t.confirmLoading=!1})))}))},handleCancel:function(){var t=this;this.visible=!1,setTimeout((function(){t.id="0",t.form=t.$form.createForm(t)}),500)},getAtlasArticleClass:function(){var t=this;this.request(c["a"].getAtlasArticleClass,{type:1}).then((function(e){t.options=e}))},getEditInfo:function(t){var e=this;this.request(c["a"].getAtlasArticleDetail,{id:this.id}).then((function(t){if(e.img=t.pic,e.showMethod=t.showMethod,e.detail=t,t.cat_id&&(e.specialList=t.specialList,e.request(c["a"].getAtlasArticleOption,{value:t.cat_id,id:t.id}).then((function(t){e.specialList=t}))),t.img){e.imgUploadList=[];for(var i=0;i<t.img.length;i++){var a={uid:i,name:"img_"+i,status:"done",url:t.img[i]};e.imgUploadList.push(a)}}"object"==Object(s["a"])(t.detail)&&(e.detail=t.detail)}))}}},f=p,h=(i("cbda"),i("0c7c")),m=Object(h["a"])(f,a,n,!1,null,null,null);e["default"]=m.exports},cbda:function(t,e,i){"use strict";i("7fa2")},d6d3:function(t,e,i){!function(e,a){t.exports=a(i("3d337"))}(0,(function(t){return function(t){function e(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,a){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=3)}([function(e,i){e.exports=t},function(t,e,i){"use strict";function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=window.videojs||s.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),a=1;a<arguments.length;a++){var n=arguments[a];if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=n[s])}return i},writable:!0,configurable:!0});var o=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"];e.default={name:"video-player",props:{start:{type:Number,default:0},crossOrigin:{type:String,default:""},playsinline:{type:Boolean,default:!1},customEventName:{type:String,default:"statechanged"},options:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{controls:!0,controlBar:{remainingTimeDisplay:!1,playToggle:{},progressControl:{},fullscreenToggle:{},volumeMenuButton:{inline:!1,vertical:!0}},techOrder:["html5"],plugins:{}}}},globalEvents:{type:Array,default:function(){return[]}}},data:function(){return{player:null,reseted:!0}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()},methods:{initialize:function(){var t=this,e=Object.assign({},this.globalOptions,this.options);this.playsinline&&(this.$refs.video.setAttribute("playsinline",this.playsinline),this.$refs.video.setAttribute("webkit-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-video-player-type","h5"),this.$refs.video.setAttribute("x5-video-player-fullscreen",!1)),""!==this.crossOrigin&&(this.$refs.video.crossOrigin=this.crossOrigin,this.$refs.video.setAttribute("crossOrigin",this.crossOrigin));var i=function(e,i){e&&t.$emit(e,t.player),i&&t.$emit(t.customEventName,a({},e,i))};e.plugins&&delete e.plugins.__ob__;var n=this;this.player=r(this.$refs.video,e,(function(){for(var t=this,e=o.concat(n.events).concat(n.globalEvents),a={},s=0;s<e.length;s++)"string"==typeof e[s]&&void 0===a[e[s]]&&function(e){a[e]=null,t.on(e,(function(){i(e,!0)}))}(e[s]);this.on("timeupdate",(function(){i("timeupdate",this.currentTime())})),n.$emit("ready",this)}))},dispose:function(t){var e=this;this.player&&this.player.dispose&&("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),this.player.dispose(),this.player=null,this.$nextTick((function(){e.reseted=!1,e.$nextTick((function(){e.reseted=!0,e.$nextTick((function(){t&&t()}))}))})))}},watch:{options:{deep:!0,handler:function(t,e){var i=this;this.dispose((function(){t&&t.sources&&t.sources.length&&i.initialize()}))}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(1),n=i.n(a);for(var s in a)["default","default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var r=i(5),o=i(4),l=o(n.a,r.a,!1,null,null,null);e.default=l.exports},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.install=e.videoPlayer=e.videojs=void 0;var n=i(0),s=a(n),r=i(2),o=a(r),l=window.videojs||s.default,c=function(t,e){e&&(e.options&&(o.default.props.globalOptions.default=function(){return e.options}),e.events&&(o.default.props.globalEvents.default=function(){return e.events})),t.component(o.default.name,o.default)},d={videojs:l,videoPlayer:o.default,install:c};e.default=d,e.videojs=l,e.videoPlayer=o.default,e.install=c},function(t,e){t.exports=function(t,e,i,a,n,s){var r,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,o=t.default);var c,d="function"==typeof o?o.options:o;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),i&&(d.functional=!0),n&&(d._scopeId=n),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=c):a&&(c=a),c){var u=d.functional,p=u?d.render:d.beforeCreate;u?(d._injectStyles=c,d.render=function(t,e){return c.call(e),p(t,e)}):d.beforeCreate=p?[].concat(p,c):[c]}return{esModule:r,exports:o,options:d}}},function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.reseted?i("div",{staticClass:"video-player"},[i("video",{ref:"video",staticClass:"video-js"})]):t._e()},n=[],s={render:a,staticRenderFns:n};e.a=s}])}))}}]);